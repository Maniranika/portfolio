import { MapPin, Mail, Phone, Code2, Layers, Zap } from 'lucide-react';
import { personalInfo, aboutContent } from '../data/portfolioData';
import { useRevealRef } from '../hooks/useScrollAnimation';

const highlights = [
  {
    icon: Code2,
    label: 'Clean Architecture',
    desc: 'Reusable, testable, maintainable code as a practice — not an afterthought.',
  },
  {
    icon: Layers,
    label: 'Full Stack Depth',
    desc: 'From React pixels to database schemas — comfortable across the entire stack.',
  },
  {
    icon: Zap,
    label: 'Performance First',
    desc: 'Lazy loading, memoization, caching — delivering fast experiences at scale.',
  },
];

export default function About() {
  const titleRef = useRevealRef(0);
  const textRef = useRevealRef(100);
  const cardRef = useRevealRef(200);

  return (
    <section
      id="about"
      className="relative bg-[var(--bg-secondary)] overflow-hidden"
    >
      {/* Background accent */}
      <div className="orb w-[350px] h-[350px] bg-violet-500 top-0 right-0 opacity-10" />

      <div className="section-container">
        {/* Section label */}
        <div ref={titleRef} className="reveal mb-4">
          <span className="text-xs font-display font-semibold uppercase tracking-widest text-violet-500">
            About Me
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div ref={textRef} className="reveal">
            <h2 className="section-heading mb-6">
              Crafting{' '}
              <span className="gradient-text">Digital Experiences</span>
              <br />
              That Scale
            </h2>

            {aboutContent.split('\n\n').map((para, i) => (
              <p
                key={i}
                className="text-[var(--text-secondary)] font-body leading-relaxed mb-4 text-base"
              >
                {para}
              </p>
            ))}

            {/* Contact info */}
            <div className="mt-8 flex flex-col gap-3">
              {[
                { Icon: MapPin, value: personalInfo.location },
                { Icon: Mail, value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { Icon: Phone, value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
              ].map(({ Icon, value, href }) => (
                <div key={value} className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                  <span className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-500">
                    <Icon size={14} />
                  </span>
                  {href ? (
                    <a href={href} className="hover:text-violet-500 transition-colors">{value}</a>
                  ) : (
                    <span>{value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — card grid */}
          <div ref={cardRef} className="reveal space-y-4">
            {/* Avatar card */}
            <div className="glass-card rounded-2xl p-6 flex items-center gap-5">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-500 to-cyan-500 flex items-center justify-center text-white font-display font-black text-2xl shadow-xl">
                  {personalInfo.avatarInitials}
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-[var(--bg-secondary)]" />
              </div>
              <div>
                <div className="font-display font-bold text-lg text-[var(--text-primary)]">
                  {personalInfo.name}
                </div>
                <div className="text-[var(--text-secondary)] text-sm">{personalInfo.title}</div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-500 font-medium">Available to hire</span>
                </div>
              </div>
            </div>

            {/* Highlight cards */}
            {highlights.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="glass-card rounded-2xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Icon size={16} className="text-white" />
                </div>
                <div>
                  <div className="font-display font-semibold text-[var(--text-primary)] mb-1">
                    {label}
                  </div>
                  <div className="text-sm text-[var(--text-secondary)] font-body leading-relaxed">
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
