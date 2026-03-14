import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://40milesupply.ca',
  trailingSlash: 'always',
  integrations: [
    tailwind({
      // Minimize CSS bundle size
      config: { 
        content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
        safelist: []
      }
    }),
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/templates'),
      changefreq: 'monthly',
      priority: 0.7,
      customPages: [],
      serialize(item) {
        if (item.url === 'https://40milesupply.ca/') {
          return { ...item, changefreq: 'weekly', priority: 1.0 };
        }
        if (item.url.includes('/contact/')) {
          return { ...item, changefreq: 'monthly', priority: 0.9 };
        }
        if (item.url.includes('/faq/')) {
          return { ...item, changefreq: 'monthly', priority: 0.8 };
        }
        if (item.url.includes('/privacy/') || item.url.includes('/terms/')) {
          return { ...item, changefreq: 'yearly', priority: 0.3 };
        }
        return item;
      },
    })
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
  build: {
    // Optimize for GitHub Pages
    assets: 'assets',
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      cssCodeSplit: true,
      minify: 'terser'
    }
  }
}); 