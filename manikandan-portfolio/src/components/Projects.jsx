import { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projects, projectCategories } from '../data/portfolioData';
import { useRevealRef } from '../hooks/useScrollAnimation';

function ProjectCard({ project, delay }) {
  const ref = useRevealRef(delay);

  return (
    <div ref={ref} className="reveal glass-card rounded-2xl overflow-hidden group">

      <div className={`h-1.5 w-full bg-gradient-to-r ${project.color}`} />

      <div className="p-6">

        <span className="text-xs font-display font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-3 block">
          {project.category}
        </span>

        <h3 className="font-display font-bold text-lg text-[var(--text-primary)] mb-4 group-hover:text-violet-500 transition-colors">
          {project.title}
        </h3>

        <div className="mb-3">
          <span className="text-xs font-semibold text-violet-400 uppercase">
            Problem
          </span>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            {project.problem}
          </p>
        </div>

        <div className="mb-4">
          <span className="text-xs font-semibold text-cyan-400 uppercase">
            Solution
          </span>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            {project.solution}
          </p>
        </div>

        <div className="mb-4">
          <span className="text-xs font-semibold text-blue-400 uppercase">
            Impact
          </span>

          <ul className="space-y-1.5 mt-2">
            {project.impact.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                <ArrowRight size={12} className="mt-0.5 text-violet-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="tech-badge">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-color)]">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-display font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <Github size={14} />
            Source
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-display font-semibold text-violet-500 hover:text-violet-400 transition-colors ml-auto"
          >
            Live Demo
            <ExternalLink size={12} />
          </a>

        </div>

      </div>
    </div>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="bg-[var(--bg-secondary)]">

      <div className="section-container">

        <div className="text-center mb-12">
          <span className="text-xs font-display font-semibold uppercase tracking-widest text-violet-500">
            Featured Work
          </span>

          <h2 className="section-heading mt-2">
            Things I've <span className="gradient-text">Built</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 80} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;