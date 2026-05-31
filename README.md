# AIyer Digital - Modern Landing Page

A stunning, responsive landing page for AIyer Digital built with **Next.js 14**, **React 18**, **Tailwind CSS**, and modern design principles.

## 🎨 Design Features

- **Dark Modern Theme**: Cyberpunk-inspired dark navy background with neon cyan and purple accents
- **Responsive Design**: Mobile-first approach, fully responsive across all devices
- **Smooth Animations**: Scroll-triggered effects, hover states, and gradient animations
- **Advanced Visual Effects**:
  - Animated background grid with parallax
  - Glowing gradients and blur effects
  - Neon text shadows
  - Interactive hover states
  - Smooth scrolling navigation

## 📋 Sections

1. **Hero** - Eye-catching introduction with animated code block
2. **About** - Company story and mission statement
3. **Services** - 6 core service offerings with hover effects
4. **Learning Journey** - Structured learning path with timeline
5. **Contact** - Call-to-action section
6. **Footer** - Links and social media connections

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aiyer-digital
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
aiyer-digital/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page component
│   └── globals.css         # Global styles
├── public/                 # Static assets
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind CSS configuration
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── postcss.config.js       # PostCSS configuration
└── README.md               # This file
```

## 🎯 Customization

### Colors
Edit the color scheme in `tailwind.config.js`:
```js
colors: {
  cyan: { 400: '#22d3ee', 500: '#06b6d4' },
  purple: { 400: '#a855f7', 500: '#a855f7' },
  slate: { 950: '#0f172a', 900: '#0f1729' }
}
```

### Fonts
Custom fonts are configured in `globals.css`:
- Primary: JetBrains Mono (code blocks)
- Secondary: Space Mono (displays)

To change fonts, update the Google Fonts imports in both `layout.tsx` and `globals.css`.

### Content
Edit text content directly in `app/page.tsx`:
- Hero section: lines 42-76
- About section: lines 113-153
- Services section: lines 159-209
- Learning Journey: lines 215-253
- Contact section: lines 259-280

## 🔧 Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
The easiest way to deploy is using [Vercel](https://vercel.com/):

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

**Netlify**:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.next
```

**GitHub Pages** (requires additional configuration):
```bash
npm run build
# Configure in next.config.js for static export
```

## 🎨 Design Highlights

### Animations
- **Parallax background grid**: Moves based on scroll position
- **Gradient animations**: Smooth color transitions
- **Staggered reveals**: Sequential element animations
- **Hover effects**: Interactive button and card responses

### Accessibility
- Semantic HTML structure
- Focus-visible states for keyboard navigation
- Alt text for images
- Proper contrast ratios for text
- ARIA labels where needed

### Performance
- Image optimization (Next.js Image component ready)
- CSS modules and Tailwind purging
- Code splitting with Next.js
- SWC minification
- Optimized fonts (Google Fonts with preconnect)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (default)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)

All sections adapt gracefully across breakpoints using Tailwind's responsive classes.

## 🔌 Technology Stack

- **Frontend Framework**: Next.js 14 (React 18)
- **Styling**: Tailwind CSS 3.4
- **UI Icons**: Lucide React
- **Language**: TypeScript
- **Build Tool**: Webpack (Next.js)
- **CSS Processing**: PostCSS + Autoprefixer

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. The codebase is well-organized and documented for easy modifications.

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tips for Customization

1. **Add Components**: Create reusable components in `app/components/`
2. **Add Pages**: Create new route files in `app/` following Next.js conventions
3. **Extend Styles**: Add custom CSS in `globals.css` or extend `tailwind.config.js`
4. **Optimize Images**: Use Next.js `Image` component for better performance
5. **SEO**: Update metadata in `layout.tsx` for different pages

## 🐛 Troubleshooting

**Port 3000 is already in use**:
```bash
npm run dev -- -p 3001
```

**Tailwind styles not loading**:
- Ensure content paths in `tailwind.config.js` match your file structure
- Rebuild with `npm run build`

**TypeScript errors**:
- Run `npm install` to ensure all types are installed
- Check `tsconfig.json` configuration

---

Built with ❤️ for modern builders and automation enthusiasts.
