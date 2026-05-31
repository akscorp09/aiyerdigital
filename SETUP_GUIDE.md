# AIyer Digital - Setup & Implementation Guide

## 📌 Overview

This landing page is a complete, production-ready Next.js application featuring:
- ✅ Modern dark theme with cyberpunk aesthetic
- ✅ Fully responsive mobile-to-desktop design
- ✅ Smooth scroll animations and hover effects
- ✅ TypeScript for type safety
- ✅ Optimized performance
- ✅ SEO-ready with metadata

## 🎯 Getting Started

### Step 1: Environment Setup

**Requirements:**
- Node.js 18.17 or higher
- npm 9+ or yarn 4+

**Check your versions:**
```bash
node --version
npm --version
```

### Step 2: Project Installation

1. **Create a new directory and copy files:**
```bash
mkdir aiyer-digital && cd aiyer-digital
# Copy all project files here
```

2. **Install dependencies:**
```bash
npm install
```

This will install:
- `next` - React framework
- `react` & `react-dom` - UI library
- `tailwindcss` - Utility CSS framework
- `lucide-react` - Beautiful icon set
- `typescript` - Type safety

### Step 3: Development Server

**Start the development server:**
```bash
npm run dev
```

**Output:**
```
> next dev

  ▲ Next.js 14.1.0
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 2.5s
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Hot Reload**: Changes to files automatically reflect in the browser. No manual refresh needed!

## 🎨 Customization Guide

### 1. Change Brand Name & Logo

**File: `app/page.tsx`**

Find the navigation section (around line 30):
```tsx
<span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
  AIyer
</span>
```

Replace "AIyer" with your brand name.

To customize the "A" logo box, modify the gradient colors:
```tsx
<div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg">
```

### 2. Update Hero Section Content

**File: `app/page.tsx` lines 42-76**

```tsx
<h1 className="text-5xl md:text-6xl font-bold leading-tight">
  AI & Automation
  <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
    Made Simple
  </span>
</h1>
```

Change the headline and description text to match your messaging.

### 3. Modify Colors & Theme

**File: `tailwind.config.js`**

The main colors used throughout the site:

```js
colors: {
  cyan: {
    400: '#22d3ee',   // Primary accent - change to your color
    500: '#06b6d4',   // Secondary cyan
  },
  purple: {
    400: '#a855f7',   // Secondary accent - change to your color
    500: '#a855f7',
  },
  slate: {
    950: '#0f172a',   // Dark background
    900: '#0f1729',
  }
}
```

**Quick color changes:**
- Primary accent: Change `cyan-400` (#22d3ee)
- Secondary accent: Change `purple-400` (#a855f7)
- Background: Change `slate-950` (#0f172a)

### 4. Customize Fonts

**File: `layout.tsx`**

Current fonts:
```tsx
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

To use different fonts from Google Fonts:
1. Visit [Google Fonts](https://fonts.google.com)
2. Find your desired fonts
3. Copy the import link
4. Replace the link in `layout.tsx` and `globals.css`
5. Update font-family in `tailwind.config.js`:

```js
fontFamily: {
  mono: ['Your Font Name', 'monospace'],
  display: ['Your Other Font', 'monospace'],
}
```

### 5. Update Service Cards

**File: `app/page.tsx` lines 159-209**

Each service card contains:
```tsx
{
  icon: Workflow,        // Change icon from lucide-react
  title: 'Service Name',
  desc: 'Description of what you offer'
}
```

**Available icons from lucide-react:**
- `Workflow` - Automation flows
- `Brain` - AI/Intelligence
- `Zap` - Speed/Energy
- `Code2` - Development
- `Smartphone` - Mobile
- `Rocket` - Launch

[See all available icons](https://lucide.dev)

### 6. Add Your Social Links

**File: `app/page.tsx` footer section (~line 380)**

```tsx
<a href="https://github.com/yourusername" className="text-slate-400 hover:text-cyan-400 transition">
  <Github className="w-5 h-5" />
</a>
```

Update URLs to your social profiles.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

**Easiest option - one click deployment:**

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Deploy:**
```bash
vercel
```

3. **Follow the prompts:**
   - Link to your GitHub repository (optional)
   - Choose project name
   - Confirm settings

Your site will be live at `yourproject.vercel.app`

**Benefits:**
- Free SSL/HTTPS
- Automatic deployments on git push
- Global CDN
- Analytics included

### Deploy to Netlify

1. **Build the project:**
```bash
npm run build
```

2. **Install Netlify CLI:**
```bash
npm i -g netlify-cli
```

3. **Deploy:**
```bash
netlify deploy --prod --dir=.next
```

### Deploy Manually to Your Own Server

1. **Build:**
```bash
npm run build
```

2. **Start:**
```bash
npm start
```

Server will run on port 3000. Use PM2 or similar for production process management.

## 📊 Performance Optimization

### Already Optimized:
- ✅ Image optimization ready (Next.js Image component)
- ✅ Code splitting by route
- ✅ CSS tree-shaking with Tailwind
- ✅ Font optimization with preload
- ✅ Minification with SWC

### Further Optimizations:

**1. Add Google Analytics:**

```tsx
// In layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
```

**2. Lazy Load Images:**

```tsx
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="Description"
  width={400}
  height={300}
  loading="lazy"
/>
```

## 🔐 SEO & Metadata

**File: `app/layout.tsx`**

Update metadata for better search rankings:

```tsx
export const metadata: Metadata = {
  title: 'Your Company - AI & Automation Solutions',
  description: 'Your detailed meta description here - 150-160 characters',
  keywords: ['ai', 'automation', 'your', 'keywords'],
  openGraph: {
    title: 'Your Company',
    description: 'Your OG description',
    images: ['/og-image.jpg'], // Add social share image
  },
};
```

## 🐛 Troubleshooting

### Issue: "Port 3000 is already in use"
**Solution:**
```bash
npm run dev -- -p 3001
```

### Issue: "Tailwind styles not working"
**Solution:**
1. Check `tailwind.config.js` content paths match your files
2. Clear `.next` folder: `rm -rf .next`
3. Rebuild: `npm run dev`

### Issue: "Module not found" errors
**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Issue: TypeScript errors
**Solution:**
```bash
# Regenerate types
npm run dev
```

## 📚 File Structure Explained

```
aiyer-digital/
│
├── app/
│   ├── page.tsx          ← Main landing page (edit content here)
│   ├── layout.tsx        ← SEO metadata & global setup
│   └── globals.css       ← Global animations & styles
│
├── public/               ← Static files (images, etc)
│
├── tailwind.config.js    ← Colors, fonts, theme (edit styles here)
├── next.config.js        ← Next.js settings
├── tsconfig.json         ← TypeScript settings
├── package.json          ← Dependencies
│
└── README.md            ← Project documentation
```

## 💡 Pro Tips

1. **Fast Development**
   - Keep dev server running while editing
   - Changes auto-reload (hot module replacement)

2. **Easy Customization**
   - All colors in one place: `tailwind.config.js`
   - All content in one file: `app/page.tsx`
   - All styles in `globals.css`

3. **Mobile Testing**
   - Use Chrome DevTools (F12)
   - Check responsive design
   - Test touch interactions

4. **Before Deployment**
   - Test on mobile devices
   - Check all links work
   - Test contact form (if added)
   - Verify SEO metadata

## 🎓 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)

## ❓ Questions?

Check the main README.md for additional information about the project.

---

**Happy building! 🚀**
