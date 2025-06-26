import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import remarkGfm from 'remark-gfm'
import remarkSmartypants from 'remark-smartypants'
import rehypeExternalLinks from 'rehype-external-links'

// https://astro.build/config
export default defineConfig({
  site: 'https://marketifyall.com',
  integrations: [
    mdx(), 
    svelte(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
    remarkPlugins: [remarkGfm, remarkSmartypants],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
        },
      ],
    ],
  },
})
