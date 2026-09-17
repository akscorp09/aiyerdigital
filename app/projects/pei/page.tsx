'use client';

import { Mail, BarChart3, Calendar, Shield, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PEIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 py-12">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full">
            <span className="text-cyan-400 text-sm font-mono">AI Use Case</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Personal Email Intelligence
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Turning raw inbox noise into structured weekly insights using Grok + Gmail read access.
          </p>
        </div>

        {/* Overview Card */}
        <div className="bg-slate-900/50 border border-cyan-400/10 rounded-2xl p-8 backdrop-blur-sm mb-8">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
            <Mail className="w-6 h-6" />
            Overview
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Used Grok with read-only Gmail access to generate a structured weekly summary of email 
            activity for August 2026. The goal was to understand communication patterns, identify 
            high-volume senders, track personal actions (shopping, banking, food, career), and 
            surface behavioural insights — without any write or modify permissions.
          </p>
        </div>

        {/* What was analysed */}
        <div className="bg-slate-900/50 border border-cyan-400/10 rounded-2xl p-8 backdrop-blur-sm mb-8">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
            <BarChart3 className="w-6 h-6" />
            What was analysed
          </h2>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2"></span>
              All emails received between 1–31 August 2026
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2"></span>
              Key senders and categories
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2"></span>
              Activity signals (orders, bank alerts, job scanning, investments)
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2"></span>
              Approximate volume patterns and busiest days
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2"></span>
              Distinction between transactional vs newsletter noise
            </li>
          </ul>
        </div>

        {/* Weekly Snapshot */}
        <div className="bg-slate-900/50 border border-cyan-400/10 rounded-2xl p-8 backdrop-blur-sm mb-8">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6" />
            Weekly Snapshot – August 2026
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-purple-400 mb-1">Week 1 (1–7 Aug)</h3>
              <p className="text-slate-300 text-sm">
                Heavy daily RSS mail + bank alerts. Food orders (Swiggy) and other updates. 
                Activity peaked towards Friday.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-purple-400 mb-1">Week 2 (8–14 Aug)</h3>
              <p className="text-slate-300 text-sm">
                Continued RSS + Mutual Fund NFOs, job alerts, tool trials (Fireflies, SEO). 
                Steady transactional + newsletter mix.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-purple-400 mb-1">Week 3 (15–21 Aug)</h3>
              <p className="text-slate-300 text-sm">
                Shopping notifications, bank alerts, LinkedIn career/AI content, travel & hotel promotions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-purple-400 mb-1">Week 4 (22–31 Aug)</h3>
              <p className="text-slate-300 text-sm">
                Highest concentration of activity. Multiple deliveries, Bank alerts, 
                Other statement, notifications, job matches, and daily horoscopes. 31 Aug was particularly dense.
              </p>
            </div>
          </div>
        </div>

        {/* Dominant Categories */}
        <div className="bg-slate-900/50 border border-cyan-400/10 rounded-2xl p-8 backdrop-blur-sm mb-8">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-6">
            Dominant Categories
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-slate-700 text-slate-400">
                  <th className="pb-3 font-medium">Category</th>
                  <th className="pb-3 font-medium">Dominant Senders</th>
                  <th className="pb-3 font-medium">Frequency</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-800">
                  <td className="py-3">Daily RSS</td>
                  <td className="py-3">Astrology.com, Tarot.com, Sasstrology</td>
                  <td className="py-3 text-cyan-400">Very high</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3">Banking & Finance</td>
                  <td className="py-3">XXX, ABCD, YYY, Axis, ZZZ, AAA</td>
                  <td className="py-3 text-cyan-400">High</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3">Shopping & Food</td>
                  <td className="py-3">Flipkart, Swiggy, Myntra</td>
                  <td className="py-3">Medium-High</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3">Career & Jobs</td>
                  <td className="py-3">LinkedIn, Indeed</td>
                  <td className="py-3">Medium</td>
                </tr>
                <tr>
                  <td className="py-3">Tech / AI News</td>
                  <td className="py-3">GenAI Works + LinkedIn Newsletters</td>
                  <td className="py-3">Medium</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-slate-900/50 border border-cyan-400/10 rounded-2xl p-8 backdrop-blur-sm mb-8">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
            Key Insights
          </h2>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></span>
              Newsletters (especially daily RSS) dominate volume
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></span>
              Clear personal activity trails: food ordering, online shopping, Crypto monitoring, job market scanning
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></span>
              Weekdays significantly busier than weekends
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2"></span>
              End-of-month spike driven by statements, deliveries and other alerts
            </li>
          </ul>
        </div>

        {/* Technical Notes */}
        <div className="bg-slate-900/50 border border-cyan-400/10 rounded-2xl p-8 backdrop-blur-sm mb-8">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6" />
            Technical Notes
          </h2>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>• Read-only Gmail connection used (no labels modified, no emails moved or deleted)</li>
            <li>• “Opened” status approximated via read/unread labels</li>
            <li>• Results limited by Gmail search pagination — patterns are directional</li>
            <li>• Built with Grok + Gmail connector</li>
          </ul>
        </div>

        {/* Value */}
        <div className="bg-slate-900/60 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-purple-400 mb-4">
            Value
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Demonstrates practical AI use for personal productivity: turning raw inbox noise into 
            structured weekly intelligence that can support decluttering decisions, spending awareness, 
            and habit tracking. A clear example of applying AI to real personal data with privacy constraints.
          </p>
        </div>
      </div>
    </div>
  );
}