import { Briefcase, GraduationCap, CheckCircle2, TrendingUp } from 'lucide-react';
import { experience, education } from '../data/portfolioData';
import { useRevealRef } from '../hooks/useScrollAnimation';

function ExperienceItem({ job, index }) {
  const ref = useRevealRef(index * 100);

  return (
    <div ref={ref} className="reveal relative pl-12">
      <div className="timeline-dot" />

      <div className="glass-card rounded-2xl p-6 mb-6">

        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
              {job.role}
            </h3>

            <div className="flex items-center gap-2 mt-1">
              <span className="text-violet-500 font-display font-semibold text-sm">
                {job.company}
              </span>

              <span className="text-[var(--text-muted)] text-xs">•</span>

              <span className="text-[var(--text-muted)] text-xs font-body">
                {job.location}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="text-xs font-display font-semibold text-[var(--text-muted)] bg-[var(--border-color)] px-3 py-1 rounded-full">
              {job.period}
            </span>

            <span className="text-xs text-cyan-500 font-medium">
              {job.duration}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-[var(--text-secondary)] font-body leading-relaxed mb-4">
          {job.description}
        </p>

        {/* Impact Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-5">

          {[
            { label: "Performance", value: "45% ↑" },
            { label: "Dev Speed", value: "30% ↑" },
            { label: "API Latency", value: "35% ↓" }
          ].map((m) => (
            <div
              key={m.label}
              className="bg-[var(--border-color)] rounded-xl px-3 py-2 text-center"
            >
              <div className="text-sm font-display font-bold text-violet-500">
                {m.value}
              </div>

              <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide">
                {m.label}
              </div>
            </div>
          ))}

        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-2 gap-2 mb-4">

          {job.achievements.map((ach) => (

            <div key={ach} className="flex items-start gap-2">

              <CheckCircle2
                size={13}
                className="mt-0.5 flex-shrink-0 text-green-500"
              />

              <span className="text-xs text-[var(--text-secondary)] font-body leading-relaxed">
                {ach}
              </span>

            </div>

          ))}

        </div>

        {/* Tech Stack */}
        <div className="pt-4 border-t border-[var(--border-color)] flex flex-wrap gap-1.5">

          {job.tech.map((t) => (

            <span
              key={t}
              className="skill-tag"
            >
              {t}
            </span>

          ))}

        </div>

      </div>
    </div>
  );
}

export default function Experience() {

  const titleRef = useRevealRef(0);
  const eduRef = useRevealRef(200);

  return (
    <section id="experience" className="relative bg-[var(--bg-primary)] overflow-hidden">

      <div className="orb w-[300px] h-[300px] bg-blue-500 top-0 right-0 opacity-8" />

      <div className="section-container">

        {/* Header */}
        <div ref={titleRef} className="reveal text-center mb-12">

          <span className="text-xs font-display font-semibold uppercase tracking-widest text-blue-500">
            Career Journey
          </span>

          <h2 className="section-heading mt-2">
            Work <span className="gradient-text">Experience</span>
          </h2>

          <p className="text-[var(--text-secondary)] font-body mt-3 max-w-xl mx-auto">
            Building scalable production systems and delivering engineering impact.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Timeline */}
          <div className="lg:col-span-2">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                <Briefcase size={14} className="text-violet-500" />
              </div>

              <span className="font-display font-semibold text-[var(--text-primary)]">
                Work History
              </span>

            </div>

            <div className="relative">

              <div className="timeline-line" />

              {experience.map((job, i) => (
                <ExperienceItem key={job.id} job={job} index={i} />
              ))}

            </div>

          </div>

          {/* Sidebar */}
          <div>

            {/* Education */}
            <div ref={eduRef} className="reveal mb-6">

              <div className="flex items-center gap-3 mb-4">

                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <GraduationCap size={14} className="text-cyan-500" />
                </div>

                <span className="font-display font-semibold text-[var(--text-primary)]">
                  Education
                </span>

              </div>

              {education.map((edu) => (

                <div key={edu.institution} className="glass-card rounded-2xl p-5">

                  <div className="font-display font-bold text-[var(--text-primary)] mb-1">
                    {edu.degree}
                  </div>

                  <div className="text-sm text-violet-500 font-medium mb-2">
                    {edu.field}
                  </div>

                  <div className="text-sm text-[var(--text-secondary)] mb-1">
                    {edu.institution}
                  </div>

                  <div className="text-xs text-[var(--text-muted)]">
                    {edu.period}
                  </div>

                </div>

              ))}

            </div>

            {/* Quick Stats */}
            <div className="reveal glass-card rounded-2xl p-5">

              <div className="font-display font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <TrendingUp size={16} />
                Engineering Impact
              </div>

              {[
                { label: 'Current Employer', value: 'TechMonkey' },
                { label: 'Role', value: 'Full Stack Engineer' },
                { label: 'Experience', value: '5+ Years' },
                { label: 'Systems Built', value: '10+ Platforms' },
                { label: 'Performance Gain', value: '40% ↑' },
                { label: 'Methodology', value: 'Agile / Scrum' },
              ].map(({ label, value }) => (

                <div
                  key={label}
                  className="flex justify-between items-center py-2 border-b border-[var(--border-color)] last:border-0"
                >

                  <span className="text-xs text-[var(--text-muted)] font-body">
                    {label}
                  </span>

                  <span className="text-xs font-display font-semibold text-[var(--text-primary)]">
                    {value}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}