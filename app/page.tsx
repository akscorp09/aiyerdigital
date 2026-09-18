import Link from 'next/link';
import { Zap, Cpu, Code2, Mail } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 py-20">
        {/* Header / Nav */}
        <div className="flex justify-between items-center mb-20">
          <h2 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Aiyer Digital
          </h2>
          <div className="flex items-center gap-3">
            <Link
              href="/projects"
              className="px-4 py-2 text-sm border border-cyan-400/30 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm border border-purple-400/30 text-purple-300 rounded-lg hover:bg-purple-400/10 transition"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            AI & Automation Made Simple
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Building intelligent solutions for real-world problems.
            Infrastructure. Automation. AI.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/projects"
              className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/30 transition"
            >
              Explore Projects
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 border border-cyan-400/40 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition"
            >
              Contact me
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="bg-slate-900/50 border border-cyan-400/10 rounded-xl p-6 hover:border-cyan-400/30 transition">
            <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Workflow Automation</h3>
            <p className="text-slate-400 text-sm">
              Automate repetitive tasks and scale operations efficiently.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-cyan-400/10 rounded-xl p-6 hover:border-cyan-400/30 transition">
            <div className="w-10 h-10 rounded-lg bg-purple-400/10 flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">AI Integration</h3>
            <p className="text-slate-400 text-sm">
              Leverage AI to solve complex problems and gain insights.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-cyan-400/10 rounded-xl p-6 hover:border-cyan-400/30 transition">
            <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center mb-4">
              <Code2 className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Custom Solutions</h3>
            <p className="text-slate-400 text-sm">
              Tailor-made solutions built for your specific needs.
            </p>
          </div>
        </div>

        {/* Contact module */}
        <div className="mb-20 bg-slate-900/50 border border-cyan-400/15 rounded-2xl p-8 md:p-10 text-center backdrop-blur-sm">
          <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6 text-cyan-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Have a project in mind?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-6">
            Send a message and you’ll get a response. Form notifies via Pushover and email.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/30 transition"
          >
            Go to Contact
          </Link>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-slate-400 mb-4">Ready to explore?</p>
          <Link href="/projects" className="text-cyan-400 hover:underline">
            View Live Projects →
          </Link>
        </div>
      </div>
    </div>
  );
}