// Central, editable content. Replace every placeholder below with your own details.

export const profile = {
  name: 'Your Name',
  initials: 'YN',
  role: 'Developer & Creative Problem Solver',
  headline: 'Building Digital Experiences Through Code & Creativity.',
  intro:
    'I design and build fast, accessible web products with a careful eye for detail. I enjoy turning ambiguous problems into clear, polished interfaces.',
  availability: 'Available for opportunities',
  about:
    'Replace this paragraph with a short professional introduction: what you build, what you care about, and what you are looking for next.',
  email: 'you@example.com',
  resumePath: '/resume.pdf', // put your file in /public/resume.pdf
  socials: [
    { label: 'GitHub', url: 'https://github.com/your-username', icon: 'github' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/your-username', icon: 'linkedin' },
    { label: 'Twitter / X', url: 'https://x.com/your-username', icon: 'x' },
  ],
};

export const highlights = [
  { title: 'Product mindset', text: 'Placeholder: describe how you approach building things end to end.' },
  { title: 'Design sensitivity', text: 'Placeholder: describe your eye for typography, spacing and motion.' },
  { title: 'Performance first', text: 'Placeholder: describe how you keep apps fast and accessible.' },
];

export const stats = [
  { value: '0+', label: 'Projects completed' },
  { value: '0+', label: 'Technologies explored' },
  { value: '0+', label: 'Years of experience' },
];

export const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'MUI', 'Three.js', 'Framer Motion', 'HTML & CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Authentication'] },
  { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'] },
  { category: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Vite', 'Figma', 'Vercel', 'Postman'] },
];

export const projects = [
  {
    title: 'Project One',
    description: 'A placeholder description of a full-stack application and the problem it solves.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: '',
    demo: '#',
    code: '#',
    featured3D: true,
  },
  {
    title: 'Project Two',
    description: 'A placeholder description of a data-driven dashboard with clean visualisations.',
    tech: ['React', 'MUI', 'Chart.js'],
    image: '',
    demo: '#',
    code: '#',
  },
  {
    title: 'Project Three',
    description: 'A placeholder description of a mobile-first web app focused on speed and accessibility.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
    image: '',
    demo: '#',
    code: '#',
  },
  {
    title: 'Project Four',
    description: 'A placeholder description of an interactive 3D experience built for the browser.',
    tech: ['Three.js', 'R3F', 'GLSL'],
    image: '',
    demo: '#',
    code: '#',
  },
];

// Set to [] to hide the section.
export const experience = [
  {
    role: 'Role Title',
    org: 'Company or Organisation',
    dates: '2024 — Present',
    text: 'Placeholder: one or two lines about your responsibilities and impact.',
  },
  {
    role: 'Previous Role',
    org: 'Another Organisation',
    dates: '2023 — 2024',
    text: 'Placeholder: one or two lines about what you built or learned.',
  },
];

export const education = [
  {
    role: 'B.E. in Computer Science',
    org: 'Your University',
    dates: '2024 — 2028',
    text: 'Placeholder: relevant coursework, honours or activities.',
  },
];

export const certifications = ['Certification name — Issuer, Year', 'Another certification — Issuer, Year'];

export const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];
