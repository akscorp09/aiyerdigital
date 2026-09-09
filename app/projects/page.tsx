import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ProjectsHub() {
  const projects = [
    {
      id: 'ccp',
      name: 'CCP Portal',
      description: 'Community Complaint Portal - Report building issues in real-time',
      href: '/projects/ccp',
      status: 'Live',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 py-12">
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
              className="group bg-slate-900/50 border border-cyan-400/10 rounded-lg p-6 hover:border-cyan-400/30 transition"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition">
                    {project.name}
                  </h2>
                  <p className="text-slate-400 mt-2">{project.description}</p>
                </div>
                <span className="px-3 py-1 text-xs bg-green-500/20 border border-green-500/30 rounded-full text-green-300">
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