export const personalInfo = {
  name: 'Manikandan',
  title: 'Full Stack Developer',
  tagline: 'Building scalable, high-performance web experiences.',
  shortBio: `5+ years crafting robust digital products — from pixel-perfect React UIs to resilient Node.js backends. I turn complex requirements into clean, maintainable code that scales.`,
  email: 'bmanikandan935@gmail.com',
  phone: '+91 6380166956',
  location: 'Chennai, India',
  github: 'https://github.com/manikandan',
  linkedin: 'https://linkedin.com/in/manikandan',
  resumeUrl: '/resume.pdf',
  avatarInitials: 'MK',
  yearsOfExperience: 5,
  projectsCompleted: 10,
  techStack: 12,
};

export const aboutContent = `I'm a Full Stack Developer with 5 years of experience designing and delivering scalable, high-performance web applications. I specialize in building component-based frontends with React.js and robust backend services with Node.js, always with a focus on performance, security, and maintainability.

I've worked across diverse domains — e-commerce, HR systems, learning platforms, inventory management, and real-time communication — collaborating closely with designers, engineers, and product teams to transform ideas into reliable digital solutions.

I'm passionate about clean architecture, performance optimization, and continuous learning. Whether it's wiring up a GraphQL API or fine-tuning a Lighthouse score, I bring the same care and precision to every layer of the stack.`;

export const skills = {
  Frontend: [
    { name: 'React.js', level: 95 },
    { name: 'Next.js', level: 88 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript (ES6+)', level: 95 },
    { name: 'Redux Toolkit', level: 90 },
    { name: 'React Hooks & Custom Hooks', level: 92 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Material UI', level: 82 },
    { name: 'Responsive UI Design', level: 92 },
    { name: 'Context API', level: 88 },
  ],
  Backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 85 },
    { name: 'RESTful API Design', level: 90 },
    { name: 'GraphQL', level: 80 },
    { name: 'JWT / OAuth', level: 88 },
    { name: 'MongoDB', level: 80 },
    { name: 'PostgreSQL', level: 72 },
    { name: 'WebSockets', level: 78 },
    { name: 'Redis', level: 70 },
  ],
  'Tools & DevOps': [
    { name: 'Git & GitHub', level: 92 },
    { name: 'Docker', level: 75 },
    { name: 'Webpack / Vite', level: 82 },
    { name: 'Jest & React Testing Library', level: 78 },
    { name: 'Cypress', level: 72 },
    { name: 'CI/CD (GitHub Actions)', level: 78 },
    { name: 'Jenkins', level: 68 },
    { name: 'Firebase', level: 80 },
    { name: 'Performance Optimization', level: 88 },
    { name: 'Agile / Scrum', level: 90 },
  ],
};

export const projects = [
 
  {
    id: 1,
    title: 'E-Commerce Web Platform',
    category: 'Full Stack',

    problem:
      'Users experienced slow checkout flows and complex product browsing, resulting in high cart abandonment rates.',

    solution:
      'Developed a scalable React + Node.js platform with optimized state management, API caching, and modular component architecture.',

    impact: [
      'Improved checkout speed by 40%',
      'Reduced unnecessary API requests using RTK Query caching',
      'Built admin dashboards for managing orders and products',
      'Implemented CI/CD pipelines for automated deployments'
    ],

    tech: [
      'React.js',
      'Redux Toolkit',
      'RTK Query',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'REST API'
    ],

    github: 'https://github.com/manikandan',
    demo: '#',

    color: 'from-violet-600 to-blue-500',
  },

  {
    id: 2,
    title: 'HR & Employee Management System',
    category: 'Full Stack',

    problem:
      'HR teams struggled with manual attendance tracking, leave approvals, and fragmented employee data.',

    solution:
      'Built a Next.js enterprise HR platform with GraphQL APIs, role-based dashboards, and optimized server-side rendering.',

    impact: [
      'Automated leave approval workflows',
      'Reduced HR manual processing time significantly',
      'Implemented SSR for improved SEO and faster loading',
      'Integrated CI/CD pipelines using GitHub Actions'
    ],

    tech: [
      'Next.js',
      'TypeScript',
      'React Query',
      'GraphQL',
      'Tailwind CSS',
      'JWT'
    ],

    github: 'https://github.com/manikandan',
    demo: '#',

    color: 'from-cyan-500 to-blue-600',
  },

  {
    id: 3,
    title: 'Learning & Course Management Platform',
    category: 'Frontend',

    problem:
      'Students required a centralized learning system for accessing courses, quizzes, and progress tracking.',

    solution:
      'Developed a React-based LMS with Firebase authentication, real-time database updates, and modular course management.',

    impact: [
      'Real-time student progress tracking',
      'Interactive quiz modules with evaluation system',
      'Mobile-first responsive UI design',
      'Offline support using local storage caching'
    ],

    tech: [
      'React.js',
      'Redux Toolkit',
      'SCSS',
      'Firebase',
      'REST API'
    ],

    github: 'https://github.com/manikandan',
    demo: '#',

    color: 'from-purple-500 to-pink-500',
  },

  {
    id: 4,
    title: 'Inventory & Stock Management System',
    category: 'Full Stack',

    problem:
      'Businesses lacked a real-time system for managing stock levels and supplier workflows.',

    solution:
      'Created a containerized full-stack inventory system with role-based dashboards and PostgreSQL-backed APIs.',

    impact: [
      'Real-time stock monitoring dashboards',
      'Automated stock alerts and reporting',
      'Docker containerization for consistent deployments',
      'Improved data visibility for warehouse teams'
    ],

    tech: [
      'React.js',
      'TypeScript',
      'Redux Toolkit',
      'PostgreSQL',
      'Node.js',
      'Docker'
    ],

    github: 'https://github.com/manikandan',
    demo: '#',

    color: 'from-orange-500 to-red-500',
  },

  {
    id: 5,
    title: 'Real-Time Chat & Collaboration Platform',
    category: 'Full Stack',

    problem:
      'Teams needed instant communication and collaboration tools with reliable real-time messaging.',

    solution:
      'Built a WebSocket-based messaging platform with Redis-backed caching and scalable message delivery.',

    impact: [
      'Instant real-time messaging using WebSockets',
      'Redis caching for scalable message history',
      'File sharing and message reactions',
      'Load-tested to support high concurrent users'
    ],

    tech: [
      'React.js',
      'WebSockets',
      'TypeScript',
      'Node.js',
      'Redis',
      'Tailwind CSS'
    ],

    github: 'https://github.com/manikandan',
    demo: '#',

    color: 'from-teal-500 to-green-500',
  }
];

export const experience = [
  {
    id: 1,
    company: 'TechMonkey',
    role: 'Software Engineer — Full Stack Developer',
    period: 'May 2021 – Present',
    duration: '4+ years',
    location: 'Chennai, India',
    description:
      'Building and maintaining scalable full-stack architectures for enterprise web applications, collaborating with cross-functional teams to ship performant, high-quality products.',
    achievements: [
      'Designed reusable frontend components and scalable backend services, improving development efficiency by 30%',
      'Delivered SSR-enabled Next.js applications with high SEO scores and optimized page load performance',
      'Implemented secure authentication using JWT/OAuth with RBAC and session management',
      'Led performance audits improving Lighthouse scores significantly across frontend and backend',
      'Developed and integrated RESTful & GraphQL APIs for seamless frontend-backend communication',
      'Mentored junior developers and contributed to architecture planning and code reviews',
      'Optimized DB queries, introduced caching & memoization strategies, reducing API response times',
      'Integrated CI/CD pipelines (GitHub Actions, Jenkins) for automated deployments',
    ],
    tech: ['React.js', 'Next.js', 'Node.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Docker'],
  },
];

export const education = [
  {
    institution: 'Sir Isaac Newton Arts & Science College',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    period: '2017 – 2020',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const projectCategories = ['All', 'Full Stack', 'Frontend'];
