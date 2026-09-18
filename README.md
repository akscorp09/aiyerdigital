# AIyer Digital

**Personal portfolio + live AI projects**  
Built with Next.js, React, TypeScript & Tailwind CSS.

**Live site:** [https://aiyer.digital](https://aiyer.digital)

---

## Overview

aiyer.digital showcases **real, working AI and automation projects** — not mockups.

Current live areas:

| Route | Purpose | Status |
|-------|---------|--------|
| `/` | Homepage | Live |
| `/projects` | Projects gallery | Live |
| `/projects/ccp` | Community Complaint Portal | Live |
| `/projects/pei` | Personal Email Intelligence | Live |
| `/contact` | Contact form → Pushover + email | Live |

---

## Feature: Contact Us

**URL:** [https://aiyer.digital/contact](https://aiyer.digital/contact)

### Real-world use case

When someone submits the contact form on the site:

1. **Pushover** — instant mobile notification (phone/desktop)
2. **Email** — message delivered to `info@<domain.name>` via Resend

Useful for leads, support, and “someone just messaged me” alerts without checking the inbox constantly.

### How it works

| File | Role |
|------|------|
| `app/contact/page.tsx` | Contact form UI |
| `app/api/contact/route.ts` | Server handler (Pushover + Resend) |
| `app/page.tsx` | Homepage links + Contact module |

### Apps / services used

| Service | Purpose | Docs |
|---------|---------|------|
| **Pushover** | Push notifications to your devices | [pushover.net](https://pushover.net) |
| **Resend** | Transactional email API | [resend.com](https://resend.com) |
| **Vercel** | Hosting + env vars + auto-deploy | [vercel.com](https://vercel.com) |
| **GitHub** | Source control | — |

### Environment variables

Put these in **`.env.local`** (local) and **Vercel → Project → Settings → Environment Variables** (production).

Never commit real values. Never put them in README, `.py` test files, or the repo.

```env
# Pushover
PUSHOVER_USER_KEY=your_user_key
PUSHOVER_API_TOKEN=your_app_api_token

# Resend
RESEND_API_KEY=re_xxxxxxxx
CONTACT_TO_EMAIL=info@aiyer.digital
CONTACT_FROM_EMAIL=noreply@aiyer.digital
```


| Variable | Notes |
|---------|---------|
| PUSHOVER_USER_KEY | From Pushover account dashboard |
| PUSHOVER_API_TOKEN | From your Pushover application |
| RESEND_API_KEY| From Resend → API Keys |
| CONTACT_TO_EMAIL| Inbox that receives form messages |
| CONTACT_FROM_EMAIL| Must be on a verified domain in Resend |


Resend domain: Verify <domain.name> in Resend (DNS SPF/DKIM). Until verified, delivery to info@aiyer.digital may fail even if the dashboard shows a send.

**Local test**
```
cd C:\****
npm run dev
```

Open http://localhost:3000/contact → submit a test message.
Expect:

 Pushover notification on your device
 Email in info@<domain.name>(after domain + keys are set)

### Security rules (learned the hard way)

- Secrets only in .env.local and Vercel — never in source or README
- Do not commit local test scripts with keys (e.g. send_pushover.py, send_email_*.py)
- Prefer keeping test scripts outside the repo, or add to .gitignore:

```
app/contact/*.py
.env.local
.env*.local

```

- If GitHub Push Protection blocks a push: the secret is still in git history — reset to origin/main, recommit only clean files, rotate the exposed key
- Supabase env vars are optional; CCP uses localStorage (no Supabase required from regions where Supabase is unreachable)

**Git workflow reminders**

- Always run git from project root: C:\*********
- Before push: git pull origin main if remote is ahead
- After push: wait for Vercel deployment status Ready (not only GitHub green)


**Live Projects (summary)**
1. CCP Portal
Complaint reporting for buildings. Phase 1: form + localStorage.

Live: /projects/ccp
2. Personal Email Intelligence (PEI)
Inbox patterns → weekly insights (Grok + Gmail read-only).

Live: /projects/pei
3. Contact notifications
Form → Pushover + Resend email.

Live: /contact

### Tech Stack

Layer,Technology
Frontend,"Next.js, React, TypeScript"
Styling,"Tailwind CSS, Lucide Icons"
Notifications,Pushover
Email,Resend
Hosting,Vercel
Source,GitHub

Getting Started
```
git clone https://github.com/akscorp09/aiyerdigital.git
cd aiyerdigital
npm install
cp .env.example .env.local   # then fill secrets locally
npm run dev

```

Open http://localhost:3000

**License**
 - MIT
---

### Apply it on your machine

```
cd C:\******
# edit README.md with the content above (or paste in VS Code)
git add README.md
git commit -m "Document Contact feature: Pushover + Resend setup"
git push origin main