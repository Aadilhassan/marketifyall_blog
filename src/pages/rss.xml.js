import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  
  // Sort posts by date, newest first
  const sortedPosts = posts.sort((a, b) => 
    new Date(b.data.publishDate).valueOf() - new Date(a.data.publishDate).valueOf()
  );
  
  return rss({
    title: 'Marketifyall Blog',
    description: 'Latest insights on social media automation, AI marketing strategies, and digital transformation for startups',
    site: context.site || 'https://marketifyall.com',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.publishDate),
      link: `/blog/${post.data.slug}/`,
      // Optional: content for full content RSS
      // content: post.body
    })),
    customData: `<language>en-us</language>
    <managingEditor>contact@marketifyall.com (Aadil Hassan)</managingEditor>
    <webMaster>webmaster@marketifyall.com (Marketifyall Technical Team)</webMaster>
    <category>Marketing</category>
    <category>Social Media</category>
    <category>Automation</category>
    <category>AI</category>`,
  });
}
