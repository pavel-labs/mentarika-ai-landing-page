import { getCollection, type CollectionEntry } from 'astro:content';
import { localePath, type Locale } from '../i18n';
import { publishedArticles } from '../marketing/content';
import type { IMarketingPublishedArticle } from '../marketing/types.generated';
import { BLOG_CLUSTERS, type BlogClusterDefinition } from './blog-clusters';

export type BlogPost = CollectionEntry<'blog'>;

export interface EditorialEntry {
  date: Date;
  href: string;
  title: string;
  summary: string;
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog', (p) => !p.data.draft);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getEditorialEntries(locale: Locale): Promise<EditorialEntry[]> {
  const posts = await getPublishedPosts();
  return mergeEditorialEntries(posts, publishedArticles(locale), locale);
}

export function mergeEditorialEntries(
  posts: readonly BlogPost[],
  articles: readonly Pick<
    IMarketingPublishedArticle,
    'slug' | 'title' | 'excerpt' | 'publishedAt'
  >[],
  locale: Locale,
): EditorialEntry[] {
  const entries = [
    ...posts.map((post) => ({
      date: post.data.date,
      href: localePath(locale, `blog/${post.id}`),
      title: post.data.title,
      summary: post.data.summary,
    })),
    ...articles.map((article) => ({
      date: new Date(article.publishedAt),
      href: localePath(locale, `articles/${article.slug}`),
      title: article.title,
      summary: article.excerpt,
    })),
  ];
  return entries.sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function formatPostDate(date: Date, month: 'short' | 'long' = 'short'): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month, day: 'numeric' });
}

export function postsForSlugs(posts: BlogPost[], slugs: readonly string[]): BlogPost[] {
  const postById = new Map(posts.map((post) => [post.id, post] as const));
  return slugs.map((slug) => postById.get(slug)).filter((p): p is BlogPost => p != null);
}

export function getCluster(id: BlogClusterDefinition['id']): BlogClusterDefinition | undefined {
  return BLOG_CLUSTERS.find((cluster) => cluster.id === id);
}

export function clustersWithPosts(
  posts: BlogPost[],
): (BlogClusterDefinition & { posts: BlogPost[] })[] {
  return BLOG_CLUSTERS.map((cluster) => ({
    ...cluster,
    posts: postsForSlugs(posts, cluster.slugs),
  }));
}
