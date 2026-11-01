import { describe, expect, it } from 'vitest';
import { readdir, readFile } from 'node:fs/promises';
import { getPostSlug, mergeEditorialEntries, type BlogPost } from './blog';

const blogPost = {
  id: 'ai-mock-interview-vs-leetcode',
  collection: 'blog',
  data: {
    title: 'AI mock interviews and coding practice',
    date: new Date('2026-05-19'),
    summary: 'A practical comparison of interview practice.',
    locale: 'en',
    draft: false,
  },
} satisfies BlogPost;

async function getMarkdownPosts(locale: string): Promise<Map<string, string>> {
  const directory = new URL(locale === 'en' ? './blog/' : `./blog/${locale}/`, import.meta.url);
  const files = await readdir(directory, { withFileTypes: true });
  const markdownFiles = files.filter((file) => file.isFile() && file.name.endsWith('.md'));
  const posts = await Promise.all(
    markdownFiles.map(async (file) => [
      file.name.slice(0, -'.md'.length),
      await readFile(new URL(file.name, directory), 'utf8'),
    ] as const),
  );
  return new Map(posts);
}

function getFrontmatterField(markdown: string, field: string): string {
  const frontmatter = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const value = frontmatter?.[1]
    ?.split(/\r?\n/)
    .find((line) => line.startsWith(`${field}:`))
    ?.slice(field.length + 1)
    .trim();

  if (!value) throw new Error(`Markdown post is missing its ${field} frontmatter field.`);
  return value.replace(/^(['"])(.*)\1$/, '$2');
}

describe('editorial archive', () => {
  it('merges blog posts and localized CMS articles by publication date', () => {
    const entries = mergeEditorialEntries(
      [blogPost],
      [
        {
          slug: 'localized-guide',
          title: 'Localized guide',
          excerpt: 'A CMS article.',
          publishedAt: '2099-06-01T00:00:00.000Z',
        },
      ],
      'ru',
    );

    expect(entries).toHaveLength(2);
    expect(entries[0]).toMatchObject({
      href: '/ru/articles/localized-guide/',
      title: 'Localized guide',
      summary: 'A CMS article.',
    });
    expect(entries[1].href).toBe(`/ru/blog/${getPostSlug(blogPost)}/`);
  });

  it('has a translated Markdown post for every English slug in each locale', async () => {
    const locales = ['en', 'de', 'es', 'ru', 'pl'] as const;
    const posts = await Promise.all(locales.map((locale) => getMarkdownPosts(locale)));
    const englishSlugs = [...posts[0].keys()].sort();

    expect(englishSlugs).toHaveLength(18);
    for (const [localeIndex, localePosts] of posts.slice(1).entries()) {
      expect([...localePosts.keys()].sort()).toEqual(englishSlugs);
      const locale = locales[localeIndex + 1];
      for (const [slug, markdown] of localePosts) {
        const source = posts[0].get(slug);
        if (!source) throw new Error(`English source post is missing for "${slug}".`);
        expect(getFrontmatterField(markdown, 'locale')).toBe(locale);
        expect(getFrontmatterField(markdown, 'title')).not.toBe(
          getFrontmatterField(source, 'title'),
        );
        expect(getFrontmatterField(markdown, 'summary')).not.toBe(
          getFrontmatterField(source, 'summary'),
        );
      }
    }
  });
});
