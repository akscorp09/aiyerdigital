import Link from 'next/link';
import { ArrowRight, Home } from 'lucide-react';

export default function ProjectsHub() {
  const projects = [
    {
      id: 'ccp',
      name: 'CCP Portal',
      description: 'Community Complaint Portal - Report building issues in real-time',
      href: '/projects/ccp',
      status: 'Live',
    },
    {
      id: 'pei',
      name: 'Personal Email Intelligence',
      description: 'Turning inbox noise into structured weekly insights using Grok + Gmail',
      href: '/projects/pei',
      status: 'Live',
    },

    {
      id: 'api-error-summary',
      name: 'API Error Summary Report',
      description: 'Python CLI tool for analyzing HTTP errors, counting priorities, and calculating urgent-error percentages.',
      href: 'https://github.com/akscorp09/api-error-summary',
      status: 'GitHub',
    },


  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 py-12">
        
        {/* Home link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition mb-8 text-sm"
        >
          <Home className="w-4 h-4" />
          Home
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            AI Projects
          </h1>
          <p className="text-slate-400 text-lg">
            Showcasing real-world applications built with AI and automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              target={project.href.startsWith('http') ? '_blank' : undefined}
              rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group bg-slate-900/50 border border-cyan-400/10 rounded-lg p-6 hover:border-cyan-400/30 transition"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition">
                    {project.name}
                  </h2>
                  <p className="text-slate-400 mt-2">{project.description}</p>
                </div>

                <span
                  className={`px-3 py-1 text-xs rounded-full border ${
                    project.status === 'Live'
                      ? 'bg-green-500/20 border-green-500/30 text-green-300'
                      : 'bg-slate-500/20 border-slate-500/30 text-slate-300'
                  }`}
                >
                  {project.status}
                </span>

              </div>
              <div className="flex items-center gap-2 text-cyan-400 group-hover:gap-3 transition">
                <span>Explore</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}