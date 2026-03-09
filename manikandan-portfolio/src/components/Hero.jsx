import { useState, useEffect } from 'react';
import { Github, Linkedin, ArrowDown, Download, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const TITLES = [
  'Senior Full Stack Engineer',
  'React Performance Specialist',
  'Node.js Backend Developer',
  'Scalable Web Architect',
];

function TypewriterText() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setTitleIndex((i) => (i + 1) % TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex]);

  return (
    <span className="text-[var(--text-secondary)] font-body font-light">
      {displayed}
      <span className="inline-block w-0.5 h-6 bg-violet-500 ml-0.5 animate-blink align-middle" />
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[var(--bg-primary)]"
    >
      <div className="section-container relative z-10 flex flex-col items-start">

        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[var(--border-color)] mb-8 text-sm text-[var(--text-secondary)]">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for new opportunities
        </div>

        {/* Name */}
        <h1 className="section-heading mb-3">
          Hi, I'm{' '}
          <span className="gradient-text block sm:inline">
            {personalInfo.name}
          </span>
        </h1>

        {/* Dynamic Title */}
        <div className="text-xl md:text-2xl mb-6 h-8 font-display font-semibold">
          <TypewriterText />
        </div>

        {/* Engineering Statement */}
        <p className="text-[var(--text-secondary)] font-body text-lg md:text-xl max-w-xl leading-relaxed mb-10">
          I build scalable, high-performance web applications using React,
          Node.js and modern cloud architecture. Passionate about clean code,
          performance optimization and delivering production-grade systems.
        </p>

        {/* Impact Badges */}
        <div className="flex flex-wrap gap-3 mb-10">
          <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-sm">
            ⚡ 5+ Years Experience
          </span>

          <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm">
            🚀 30+ Projects Delivered
          </span>

          <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
            ⚙ React / Node Specialist
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-14">

          <button
            onClick={() =>
              document
                .getElementById('projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="btn-primary"
          >
            View Projects
          </button>

          <a
            href={personalInfo.resumeUrl}
            download
            className="btn-outline flex items-center gap-2"
          >
            <Download size={16} />
            Download Resume
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="btn-outline flex items-center gap-2"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-[var(--text-muted)] uppercase tracking-widest font-display">
            Find me on
          </span>

          <div className="w-8 h-px bg-[var(--border-color)]" />

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl glass-card border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-violet-500 transition-colors"
          >
            <Github size={18} />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl glass-card border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-cyan-500 transition-colors"
          >
            <Linkedin size={18} />
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 flex gap-8 md:gap-12">
          {[
            { label: 'Years Experience', value: `${personalInfo.yearsOfExperience}+` },
            { label: 'Projects Shipped', value: `${personalInfo.projectsCompleted}+` },
            { label: 'Technologies', value: `${personalInfo.techStack}+` },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="gradient-text font-display font-black text-3xl md:text-4xl">
                {stat.value}
              </div>

              <div className="text-xs text-[var(--text-muted)] mt-1 font-body">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll indicator */}
      <button
        onClick={() =>
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors group"
      >
        <span className="text-xs font-body tracking-widest uppercase">Scroll</span>

        <ArrowDown
          size={14}
          className="group-hover:translate-y-1 transition-transform animate-bounce"
        />
      </button>
    </section>
  );
}