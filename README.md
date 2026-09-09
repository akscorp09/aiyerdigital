# AIyer Digital - Portfolio + AI Projects

A modern portfolio website with live AI-powered projects built with **Next.js 14**, **React 18**, **Tailwind CSS**, and **Supabase**.

## 🎯 What This Is

**aiyer.digital** is a personal portfolio showcasing real-world AI projects and automation solutions. It combines:
- Landing page with service overview
- Projects hub for browsing AI projects
- Phase 1: CCP Portal (Community Complaint Portal MVP)

## 🏗️ Architecture

```
aiyer-digital/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles
│   ├── projects/
│   │   ├── page.tsx               # Projects hub/gallery
│   │   └── ccp/
│   │       └── page.tsx           # CCP Portal (Phase 1)
│   └── api/
│       └── complaints/route.ts    # (Phase 2 backend)
├── lib/
│   └── supabase.ts                # Supabase client config
├── package.json
├── .env.local                      # Environment variables
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17+
- npm or yarn
- Supabase account (optional, for Phase 2)

### Installation

```bash
# Clone repo
git clone https://github.com/akscorp09/aiyerdigital.git
cd aiyerdigital

# Install dependencies
npm install

# Create .env.local (optional for Phase 2)
cp .env.local.example .env.local
# Add your Supabase credentials if testing Phase 2

# Run locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Deploy to Vercel

```bash
git push origin main
# Vercel auto-deploys on push
```

Live at: **https://aiyer.digital**

---

## 📍 Routes

| Route | Purpose | Status |
|-------|---------|--------|
| `/` | Homepage with service overview | ✅ Live |
| `/projects` | AI projects gallery | ✅ Live |
| `/projects/ccp` | CCP Portal (complaints) | ✅ Live Phase 1 |

---

## 🎨 Phase 1: CCP Portal

**Community Complaint Portal** - MVP for apartment/building complaint management.

### What Works (Phase 1)
✅ Submit complaints (Block, Floor, Issue Type, Description, Image)  
✅ Real-time form validation  
✅ Beautiful dark UI with cyan/purple theme  
✅ Responsive (mobile, tablet, desktop)  
✅ Local browser state (complaints visible until refresh)  
✅ Live at `/projects/ccp`

### What's Planned (Phase 2)
- Supabase database integration (persistent storage)
- Claude API auto-categorization & priority assignment
- Admin dashboard to manage complaints
- Status tracking (submitted → in progress → resolved)

### Phase 2 Blocker
**Current limitation:** Network in your region cannot reach Supabase API (`net::ERR_CONNECTION_REFUSED`). Phase 1 works perfectly without it. Phase 2 database will be added when:
- Network access is resolved, OR
- Alternative backend is implemented

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS 3.4, Lucide React icons
- **Database**: Supabase (PostgreSQL) - Phase 2
- **AI**: Claude API (Haiku 4.5) - Phase 2
- **Hosting**: Vercel (auto-deploy on GitHub push)
- **Version Control**: GitHub

---

## 📝 Environment Setup

### `.env.local` (for Phase 2)

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
CLAUDE_API_KEY=your_claude_api_key
```

**Note:** Not needed for Phase 1. Phase 1 works without environment variables.

---

## 🔧 Development

### Run Dev Server
```bash
npm run dev
# http://localhost:3000
```

### Build for Production
```bash
npm run build
npm start
```

### TypeScript Check
```bash
npm run type-check
```

---

## 🎯 Project Goals

1. **Showcase Real Products** - Not just portfolio, actual working projects
2. **Full-Stack Learning** - Frontend + Backend + AI integration
3. **Open Architecture** - Easy to add new projects to `/projects/[name]`
4. **Cloud Ready** - Deployable to any hosting (Vercel, AWS, etc.)

---

## 📊 Project Structure - Adding New Projects

To add a new AI project:

```bash
mkdir -p app/projects/[project-name]
touch app/projects/[project-name]/page.tsx
```

Update `app/projects/page.tsx` to add it to the gallery:

```tsx
const projects = [
  {
    id: 'ccp',
    name: 'CCP Portal',
    href: '/projects/ccp',
    status: 'Live',
  },
  {
    id: 'new-project',  // Add here
    name: 'New Project',
    href: '/projects/new-project',
    status: 'Beta',
  },
];
```

---

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Vercel auto-deploys
3. Custom domain: aiyer.digital (already configured)

### Manual Deploy
```bash
npm run build
# Deploy .next folder to your host
```

---

## 📚 File Guide

### Key Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Homepage component |
| `app/projects/page.tsx` | Projects gallery |
| `app/projects/ccp/page.tsx` | CCP Portal (Phase 1) |
| `app/layout.tsx` | Root layout with metadata |
| `app/globals.css` | Global styles + Tailwind imports |
| `lib/supabase.ts` | Supabase client (Phase 2) |
| `package.json` | Dependencies & scripts |

### Add/Edit Content

**Homepage**: Edit `app/page.tsx`  
**Projects Hub**: Edit `app/projects/page.tsx`  
**CCP Portal**: Edit `app/projects/ccp/page.tsx`  
**Styles**: Edit `app/globals.css` or `tailwind.config.js`

---

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Tailwind styles not loading
```bash
npm run build
npm run dev
```

### TypeScript errors
```bash
npm install
```

### Supabase connection fails (Expected in Phase 2)
This is a known issue due to network restrictions. Phase 1 works without it.

---

## 🎓 Learning Path

If you're learning from this project:

1. **Phase 1 (Now)**: Focus on React/Next.js form handling + UI
2. **Phase 2**: Add database (Supabase + API routes)
3. **Phase 3**: Integrate Claude API for AI features
4. **Phase 4**: Build admin dashboard & authentication

Each phase builds on the previous one.

---

## 📈 Roadmap

- [x] Phase 1: CCP Portal MVP (form + submission)
- [ ] Phase 2: Supabase database + Claude API
- [ ] Phase 3: Admin dashboard
- [ ] Phase 4: Multi-building support
- [ ] Phase 5: Mobile app (React Native)

---

## 🤝 Contributing

This is a personal project, but feel free to fork and customize for your own needs.

---

## 📄 License

MIT - Open source, use as you like.

---

## 💡 Notes

- **Phase 1 is production-ready** for local/browser usage
- **Network limitation**: Supabase unreachable from current region (Phase 2 blocker)
- **Architecture is scalable**: Easy to add more projects under `/projects/[name]`
- **Auto-deploy**: Every push to GitHub → Vercel deploys automatically

---

**Built with Next.js + React + Tailwind CSS + Vercel**

Latest Update: Phase 1 Complete - September 2024