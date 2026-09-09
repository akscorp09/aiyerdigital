import Link from 'next/link';
import { Code, Zap, Cpu } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 py-20">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-20">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Aiyer Digital
          </div>
          <Link
            href="/projects"
            className="px-4 py-2 border border-cyan-400/30 rounded-lg text-cyan-400 hover:bg-cyan-400/10 transition"
          >
            Projects
          </Link>
        </nav>

        {/* Hero */}
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            AI & Automation Made Simple
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            Building intelligent solutions for real-world problems. Infrastructure. Automation. AI.
          </p>
          <Link
            href="/projects"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition"
          >
            Explore Projects
          </Link>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="bg-slate-900/50 border border-cyan-400/10 rounded-lg p-6 hover:border-cyan-400/20 transition">
            <Zap className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Workflow Automation</h3>
            <p className="text-slate-400">Automate repetitive tasks and scale operations efficiently.</p>
          </div>
          <div className="bg-slate-900/50 border border-cyan-400/10 rounded-lg p-6 hover:border-cyan-400/20 transition">
            <Cpu className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">AI Integration</h3>
            <p className="text-slate-400">Leverage AI to solve complex problems and gain insights.</p>
          </div>
          <div className="bg-slate-900/50 border border-cyan-400/10 rounded-lg p-6 hover:border-cyan-400/20 transition">
            <Code className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Custom Solutions</h3>
            <p className="text-slate-400">Tailor-made solutions built for your specific needs.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-400 mb-4">Ready to explore?</p>
          <Link
            href="/projects"
            className="text-cyan-400 hover:text-cyan-300 transition font-semibold"
          >
            View Live Projects →
          </Link>
        </div>
      </div>
    </div>
  );
}