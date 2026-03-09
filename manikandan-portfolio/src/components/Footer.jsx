import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-[var(--bg-primary)] border-t border-[var(--border-color)] overflow-hidden">
      {/* Top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-50" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center font-display font-black text-white text-sm">
                MK
              </div>
              <span className="font-display font-bold text-[var(--text-primary)]">
                Manikandan
              </span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] font-body leading-relaxed max-w-xs">
              Full Stack Developer building scalable, high-performance web applications. Open to new opportunities.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-display font-semibold text-xs uppercase tracking-widest text-[var(--text-muted)] mb-4">
              Navigation
            </div>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const id = link.href.replace('#', '');
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm text-left text-[var(--text-secondary)] hover:text-violet-500 transition-colors font-body"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Socials */}
          <div>
            <div className="font-display font-semibold text-xs uppercase tracking-widest text-[var(--text-muted)] mb-4">
              Connect
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm text-[var(--text-secondary)] hover:text-violet-500 transition-colors font-body flex items-center gap-2"
              >
                <Mail size={13} />
                {personalInfo.email}
              </a>
            </div>
            <div className="flex gap-3">
              {[
                { href: personalInfo.github, Icon: Github, label: 'GitHub' },
                { href: personalInfo.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                { href: `mailto:${personalInfo.email}`, Icon: Mail, label: 'Email' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:bg-gradient-to-br hover:from-violet-600 hover:to-cyan-500 hover:border-transparent transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--text-muted)] font-body flex items-center gap-1.5">
            Built with{' '}
            <Heart size={11} className="text-red-500 fill-red-500" />
            {' '}by {personalInfo.name} · {new Date().getFullYear()} · React + Vite + Tailwind
          </p>

          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-lg border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:bg-gradient-to-br hover:from-violet-600 hover:to-cyan-500 hover:border-transparent transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
