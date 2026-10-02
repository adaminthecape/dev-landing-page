# 🚀 Modern Portfolio Landing Page

A beautifully designed, fully customizable portfolio landing page template built with React, TypeScript, Tailwind CSS, and Vite. Perfect for showcasing your skills, projects, and accomplishments with minimal setup.

## ✨ Features

- **🎨 Stunning Design** - Modern glassmorphism effects, smooth animations, and responsive layout
- **🌓 Dark Mode Support** - Built-in theme switching for light and dark modes
- **⚡ Lightning Fast** - Powered by Vite for instant HMR and optimized builds
- **📱 Fully Responsive** - Looks perfect on desktop, tablet, and mobile devices
- **🎯 Customizable Sections** - Hero, Capabilities, Skills, Projects, Stats, Testimonials, and Footer
- **🎬 Smooth Animations** - Framer Motion integration for delightful interactions
- **🔧 Easy Configuration** - Modify your portfolio by editing a single data file
- **♿ Accessibility First** - Built with semantic HTML and WCAG guidelines
- **📦 Production Ready** - TypeScript, linting, and best practices included

## 🎯 What's Included

| Section | Description |
|---------|-------------|
| **Hero** | Eye-catching introduction with your title and tagline |
| **Capabilities** | Showcase 4+ key areas of expertise |
| **Skills** | Organized skill categories with detailed lists |
| **Projects** | Highlight your best work with descriptions and tech stacks |
| **Stats** | Display impressive numbers (years, projects, clients, etc.) |
| **Testimonials** | Feature quotes and feedback from colleagues |
| **Footer** | Contact info and social links |

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd my-cv-landing-public

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`

## 🎨 Customization Guide

### 1. **Personalize Your Data** (The Easy Part!)

Edit [`src/config/data.ts`](src/config/data.ts) to customize your portfolio:

```typescript
export const BASE_DATA: BaseData = {
  logo: 'your-logo.png',
  author: 'Your Name',
  title: 'Your Professional Title',
  tagline: 'Your compelling tagline',
  animationResetInterval: 60000,
};
```

Then update the data sections:
- `CAPABILITY_DATA` - Your key strengths
- `PROJECT_DATA` - Your portfolio projects
- `SKILL_DATA` - Your technical skills
- `STAT_DATA` - Impressive numbers about you
- `TESTIMONIAL_DATA` - Social proof from others
- `FOOTER_DATA` - Contact and social links

### 2. **Customize Styling**

- **Colors & Theme**: Edit [`src/index.css`](src/index.css) to change the color scheme
- **Tailwind Config**: Modify [`tailwind.config.js`](tailwind.config.js) for custom design tokens
- **Glass Effects**: Adjust [`src/glass.css`](src/glass.css) for glassmorphism styles
- **Component Styles**: Individual component styles in each component file

### 3. **Add Your Assets**

Place your images, logos, and assets in [`public/`](public/) or [`src/assets/`](src/assets/) directories:
- Logo
- Project screenshots
- Hero background images
- Testimonial avatars

### 4. **Modify Content Sections**

Components are modular and easy to customize:

```
src/components/
├── HeroSection.tsx
├── CapabilitiesSection.tsx
├── SkillsSection.tsx
├── ProjectsSection.tsx
├── StatsSection.tsx
├── TestimonialsSection.tsx
└── ui/                    # Reusable UI components
```

## 📦 Available Scripts

```bash
# Development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linter
npm run lint
```

## 🏗️ Project Structure

```
.
├── src/
│   ├── components/      # Reusable React components
│   ├── config/          # Data and configuration files
│   │   ├── data.ts      # Main customization file
│   │   ├── types.ts     # TypeScript interfaces
│   │   └── utils.ts     # Helper functions
│   ├── contexts/        # React Context (Theme, etc.)
│   ├── hooks/           # Custom React hooks
│   ├── assets/          # Images, fonts, static files
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── *.css            # Global and component styles
├── public/              # Static files
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 🛠️ Tech Stack

- **React 19** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Vite 8** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **Oxlint** - Fast JavaScript linter
- **Dark Mode** - Built-in theme support

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to GitHub Pages

```bash
# Build the project
npm run build

# Deploy the dist folder to GitHub Pages
```

### Deploy to Traditional Hosting

```bash
# Build for production
npm run build

# Upload the 'dist' folder to your hosting provider
```

## 💡 Tips for Success

✅ **Do's:**
- Keep your data in `data.ts` - it's designed for easy updates
- Use the component structure for consistency
- Test dark mode with your content
- Optimize images before adding them
- Update frequently with new projects and achievements

❌ **Don'ts:**
- Don't modify core component logic without understanding the impact
- Avoid adding too many animations (performance)
- Don't forget to build and test before deploying
- Avoid large unoptimized images

## 🎯 Common Customizations

### Change the Color Scheme
Edit the Tailwind theme colors in your CSS files or extend the Tailwind config.

### Add a Contact Form
Integrate with services like Formspree, EmailJS, or Netlify Forms in the Footer component.

### Add Blog Section
Create a new component following the pattern of existing sections and add it to the main App.

### Modify Section Order
Reorder the sections in [`App.tsx`](src/App.tsx) to suit your preferences.

## 📚 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

Contributions are welcome! If you have improvements or bug fixes:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License - feel free to use it for personal or commercial projects.

## ❓ Need Help?

- Check existing issues on GitHub
- Review the component props and types in `src/config/types.ts`
- Explore the example data in `src/config/data.ts`
- Ensure all images and assets are properly referenced

---

**Made with ❤️ to help you showcase your amazing work**

Happy building! 🎉
