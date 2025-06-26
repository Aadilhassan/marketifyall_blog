# 🚀 Marketifyall Blog

[![Screenshot](screenshot.png)](https://marketifyall-blog.netlify.app/)

A modern, feature-rich blog built with [Astro](https://astro.build) for Marketifyall - your all-in-one social media marketing platform.

## 🌟 About Marketifyall

Marketifyall is a comprehensive social media marketing platform that helps businesses and content creators streamline their online presence, automate workflows, and analyze performance across multiple platforms.

## 👩‍🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Development

```bash
# Clone the repository
git clone https://github.com/Aadilhassan/marketifyall_blog.git
cd marketifyall_blog

# Install dependencies
npm install

# Start development server
npm run dev
```

### Quick Start with Template

```bash
npm init astro -- --template Aadilhassan/marketifyall_blog
```

## ✨ Features:

- ✅ **Astro 4.0** - Latest Astro framework for optimal performance
- ✅ **Dark Mode** - Seamless light/dark theme switching
- ✅ **Full Markdown Support** - Rich content creation with Markdown
- ✅ **Documentation System** - Comprehensive docs with search and navigation
- ✅ **SEO Optimized** - Canonical URLs, OpenGraph data, and meta tags
- ✅ **RSS 2.0 Generation** - Automatic RSS feed generation
- ✅ **Sitemap Generation** - Auto-generated sitemap.xml
- ✅ **Responsive Design** - Mobile-first, fully responsive layout
- ✅ **Modern UI Components** - Beautiful, interactive components
- ✅ **Blog Categories** - Organized content with category filtering
- ✅ **Social Media Integration** - Share buttons and social links
- ✅ **Performance Optimized** - Fast loading times and optimized images
- ✅ **TypeScript Support** - Full TypeScript integration
- ✅ **Content Collections** - Organized content management system

## 🚀 Project Structure

Inside of your Marketifyall blog project, you'll see the following folders and files:

```
/
├── public/
│   ├── robots.txt
│   ├── favicon.ico
│   └── assets/
│       ├── blog/
│       ├── fonts/
│       └── images/
├── src/
│   ├── components/
│   │   ├── BaseHead.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Nav.astro
│   │   ├── Bio.astro
│   │   └── ThemeToggleButton.svelte
│   ├── data/
│   │   ├── blog-posts/
│   │   └── docs/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── docs/
│   │       ├── index.astro
│   │       └── [slug].astro
│   ├── styles/
│   │   ├── global.css
│   │   └── fonts.css
│   ├── content.config.js
│   └── env.d.ts
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

### Key Directories:

- **`src/pages/`** - File-based routing. Each `.astro` or `.md` file becomes a route
- **`src/components/`** - Reusable Astro, React, Vue, Svelte components
- **`src/data/`** - Blog posts and documentation content in Markdown
- **`src/layouts/`** - Layout templates for different page types
- **`src/styles/`** - Global styles and font definitions
- **`public/`** - Static assets served directly

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:4321`     |
| `npm run build`        | Build your production site to `./dist/`         |
| `npm run preview`      | Preview your build locally, before deploying    |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                    |

## 📝 Content Management

### Adding Blog Posts

1. Create a new `.md` file in `src/data/blog-posts/`
2. Add frontmatter with title, description, date, and other metadata
3. Write your content in Markdown
4. The post will automatically appear on the blog index

### Adding Documentation

1. Create a new `.md` file in `src/data/docs/`
2. Set the category, order, and other metadata in frontmatter
3. Documentation will be automatically organized by category

### Example Blog Post

```markdown
---
title: "Getting Started with Marketifyall"
description: "Learn how to set up your first social media campaign"
pubDate: "2024-01-15"
heroImage: "/assets/blog/getting-started.webp"
featured: true
---

Your content here...
```

## 🎨 Customization

### Styling

- Global styles are in `src/styles/global.css`
- Component-specific styles use Astro's scoped CSS
- CSS custom properties for theming (light/dark mode)

### Components

- All components are in `src/components/`
- Mix of Astro and Svelte components
- Easily extensible and customizable

### Configuration

- Site configuration in `astro.config.mjs`
- Content collections configured in `src/content.config.js`
- TypeScript configuration in `tsconfig.json`

## � Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push to main branch

### Vercel

1. Import your GitHub repository to Vercel
2. Framework preset: Astro
3. Build command: `npm run build`
4. Output directory: `dist`

### Manual Deployment

```bash
npm run build
# Upload the dist/ folder to your hosting provider
```

## 📚 Resources & Links

- **Marketifyall Platform**: [https://marketifyall.com](https://marketifyall.com)
- **Astro Documentation**: [https://docs.astro.build](https://docs.astro.build)
- **Astro Discord**: [https://astro.build/chat](https://astro.build/chat)
- **GitHub Repository**: [https://github.com/Aadilhassan/marketifyall_blog](https://github.com/Aadilhassan/marketifyall_blog)

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## �👀 Want to learn more?

Feel free to check [Astro's documentation](https://github.com/withastro/astro) or jump into Astro's [Discord server](https://astro.build/chat).

---

Built with ❤️ by the Marketifyall team
