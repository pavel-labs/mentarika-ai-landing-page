import { describe, expect, it } from 'vitest';
import { getPublishedPosts, mergeEditorialEntries } from './blog';

describe('editorial archive', () => {
  it('merges blog posts and localized CMS articles by publication date', async () => {
    const [post] = await getPublishedPosts();
    if (!post) throw new Error('Editorial archive tests require a published blog post.');

    const entries = mergeEditorialEntries(
      [post],
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
    expect(entries[1].href).toBe(`/ru/blog/${post.id}/`);
  });
});
