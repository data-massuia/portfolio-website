/**
 * RSS Feed Generator
 *
 * Creates an RSS feed at /blog/rss.xml so people can subscribe
 * to new blog posts in their RSS reader. This is generated at
 * build time from the blog content collection.
 */
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());

  return rss({
    title: 'Douglas — Vibe Coder',
    description: 'A beginner developer\'s learning journal — documenting the journey from zero to full-stack through vibe coding.',
    site: context.site!.toString(),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/blog/${post.id}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
