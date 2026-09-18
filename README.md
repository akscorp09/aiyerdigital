# AIyer Digital

**Personal portfolio + live AI projects**  
Built with Next.js 14, React 18, TypeScript & Tailwind CSS.

**Live site:** [https://aiyer.digital](https://aiyer.digital)

---

## Overview

aiyer.digital is a personal portfolio focused on **real, working AI and automation projects** — not just concepts or mockups.  

It currently includes:

- A clean landing page
- A projects gallery
- Live, functional applications

The goal is to continuously ship practical AI use cases and document the process.

---

## Live Projects

### 1. CCP Portal – Community Complaint Portal
A real-time complaint reporting system for apartment and building residents.

**Features (Phase 1):**
- Submit complaints with Block, Floor, Issue Type, Description & optional image
- View recent complaints
- Clean dark UI with cyan/purple theme
- Fully responsive

**Planned (Phase 2):**
- Persistent storage with Supabase
- Claude API for auto-categorization & priority
- Admin dashboard + status tracking

**Live:** [aiyer.digital/projects/ccp](https://aiyer.digital/projects/ccp)

---

### 2. Personal Email Intelligence (PEI)
Turning raw inbox noise into structured weekly insights using **Grok + Gmail** (read-only).

**What it does:**
- Analyses email activity (August 2026 example)
- Breaks down senders, categories and patterns
- Surfaces personal activity signals (shopping, banking, career, food)
- Privacy-first approach (no emails modified or deleted)

**Planned (Phase 2):**
- providing modify access to Grok
- adding more logic for analytics

**Live:** [aiyer.digital/projects/pei](https://aiyer.digital/projects/pei)

---

## Tech Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| Frontend     | Next.js 14, React 18, TypeScript    |
| Styling      | Tailwind CSS, Lucide Icons          |
| Database     | Supabase (Phase 2 for CCP)          |
| AI           | Grok + Claude API                   |
| Hosting      | Vercel (auto-deploy on push)        |
| Version Ctrl | GitHub                              |

---

## Project Structure

```

aiyerdigital/
├── app/
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx
│   ├── globals.css
│   └── projects/
│       ├── page.tsx              # Projects gallery
│       ├── ccp/
│       │   └── page.tsx          # CCP Portal
│       └── pei/
│           └── page.tsx          # Personal Email Intelligence
├── lib/
│   └── supabase.ts
├── package.json
└── README.md
```
## Getting Started
**Prerequisites**

Node.js 18.17+
npm or yarn

**Installation**
```
git clone https://github.com/akscorp09/aiyerdigital.git
cd aiyerdigital
npm install
npm run dev
```
Open http://localhost:3000

**Adding a New Project**
```
Create the folder:
mkdir -p app/projects/[project-name]
Add page.tsx inside it
Register it in app/projects/page.tsx:

tsx{
  id: 'project-id',
  name: 'Project Name',
  description: 'Short description',
  href: '/projects/project-id',
  status: 'Live',
}
```
Push to GitHub → Vercel automatically deploys


**Routes**

|   Route       |           Purpose                | Status |
|-------------- |----------------------------------|--------|
| /Homepage     |                                  |  Live  | 
| /Projects     |        Gallery                   |  Live  |  
| /ccpCommunity |     Complaint Portal             |  Live  |
| /pei          |  Personal Email Intelligence     |  Live  |

---

## Roadmap

- CCP Portal (Phase 2)
- Personal Email Intelligence (Phase 2)
- CCP Public Dashboard (metrics display) (Phase 3)
- Career Signal Tracker 
- More personal AI use cases
- CCP Phase 4 (Free Tier Database + Claude)

---

**Notes**

- Architecture is designed to make adding new projects simple
- Every push to main auto-deploys via Vercel
- Focus is on shipping real, usable tools rather than demos

---

**License**
- MIT
