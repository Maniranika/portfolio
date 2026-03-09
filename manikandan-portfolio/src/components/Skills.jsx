import { useState, useEffect, useRef } from 'react';
import { skills } from '../data/portfolioData';
import { useRevealRef } from '../hooks/useScrollAnimation';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaNodeJs } from "react-icons/fa6";
import { SiTypescript, SiRedux, SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si";

const CATEGORY_ICONS = {
  Frontend: '⚛️',
  Backend: '🔧',
  'Tools & DevOps': '🚀',
};

const CATEGORY_COLORS = {
  Frontend: 'from-violet-500 to-indigo-500',
  Backend: 'from-cyan-500 to-blue-500',
  'Tools & DevOps': 'from-orange-500 to-pink-500',
};

/* Skill icons */
const SKILL_ICONS = {
  "React.js": <FaReact className="text-cyan-400" />,
  "Next.js": <SiNextdotjs />,
  "TypeScript": <SiTypescript className="text-blue-500" />,
  "JavaScript (ES6+)": <FaJs className="text-yellow-400" />,
  "Redux Toolkit": <SiRedux className="text-purple-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  "MongoDB": <SiMongodb className="text-green-600" />,
  "Git & GitHub": <FaGitAlt className="text-orange-500" />,
  "HTML5": <FaHtml5 className="text-orange-600" />,
  "CSS3": <FaCss3Alt className="text-blue-500" />,
};

function SkillBar({ name, level, color, delay }) {
  const [animated, setAnimated] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimated(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) observer.observe(barRef.current);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={barRef} className="group">

      <div className="flex justify-between items-center mb-1.5">

        <span className="flex items-center gap-2 text-sm font-body font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
          {SKILL_ICONS[name] && (
            <span className="text-base">{SKILL_ICONS[name]}</span>
          )}
          {name}
        </span>

        <span className="text-xs font-display font-semibold text-[var(--text-muted)]">
          {level}%
        </span>

      </div>

      <div className="h-1.5 bg-[var(--border-color)] rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{ width: animated ? `${level}%` : '0%' }}
        />
      </div>

    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('Frontend');
  const titleRef = useRevealRef(0);
  const tabsRef = useRevealRef(100);

  const categories = Object.keys(skills);

  return (
    <section id="skills" className="relative bg-[var(--bg-primary)] overflow-hidden">

      <div className="orb w-[300px] h-[300px] bg-cyan-400 bottom-0 left-0 opacity-10" />

      <div className="section-container">

        {/* Header */}
        <div ref={titleRef} className="reveal text-center mb-12">

          <span className="text-xs font-display font-semibold uppercase tracking-widest text-cyan-500">
            Skills & Expertise
          </span>

          <h2 className="section-heading mt-2">
            My <span className="gradient-text">Tech Stack</span>
          </h2>

          <p className="text-[var(--text-secondary)] font-body mt-3 max-w-xl mx-auto">
            A curated set of technologies I've used to ship real-world products at scale.
          </p>

        </div>

        {/* Core Stack */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">

          {[
            "React.js",
            "Next.js",
            "TypeScript",
            "Node.js",
            "MongoDB",
            "Tailwind CSS"
          ].map((tech) => (

            <div
              key={tech}
              className="glass-card px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-medium"
            >
              {SKILL_ICONS[tech]}
              {tech}
            </div>

          ))}

        </div>

        {/* Tab buttons */}
        <div ref={tabsRef} className="reveal flex flex-wrap justify-center gap-3 mb-10">

          {categories.map((cat) => (

            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`filter-btn flex items-center gap-2 ${activeTab === cat ? 'active' : ''}`}
            >
              <span>{CATEGORY_ICONS[cat]}</span>
              {cat}
            </button>

          ))}

        </div>

        {/* Desktop layout */}
        <div className="hidden lg:grid grid-cols-3 gap-6">

          {categories.map((cat) => (

            <SkillCategory
              key={cat}
              category={cat}
              items={skills[cat]}
              color={CATEGORY_COLORS[cat]}
            />

          ))}

        </div>

        {/* Mobile layout */}
        <div className="lg:hidden">

          <SkillCategory
            category={activeTab}
            items={skills[activeTab]}
            color={CATEGORY_COLORS[activeTab]}
          />

        </div>

        {/* Extra skills */}
        <div className="mt-12 reveal">

          <p className="text-center text-xs text-[var(--text-muted)] font-display uppercase tracking-widest mb-5">
            Also familiar with
          </p>

          <div className="flex flex-wrap justify-center gap-2">

            {[
              'SCSS / BEM',
              'Bootstrap',
              'Firestore',
              'GitHub Actions',
              'Axios',
              'React Hook Form',
              'Yup',
              'Framer Motion',
              'SSR / ISR',
              'Lighthouse Audits',
              'Web Vitals',
              'Microservices'
            ].map((tag) => (
              <span key={tag} className="skill-tag">{tag}</span>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

function SkillCategory({ category, items, color }) {
  const ref = useRevealRef(50);

  return (
    <div ref={ref} className="reveal glass-card rounded-2xl p-6">

      <div className="flex items-center gap-3 mb-6">

        <div
          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-lg shadow-lg`}
        >
          {CATEGORY_ICONS[category]}
        </div>

        <div>
          <div className="font-display font-bold text-[var(--text-primary)]">{category}</div>
          <div className="text-xs text-[var(--text-muted)]">{items.length} skills</div>
        </div>

      </div>

      <div className="space-y-3.5">

        {items.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={color}
            delay={i * 80}
          />
        ))}

      </div>

    </div>
  );
}