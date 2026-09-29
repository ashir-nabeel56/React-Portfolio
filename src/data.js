// Edit this file only: all portfolio content lives here.
export const profile = {
  name: 'Your Name',
  role: 'Full stack developer who ships real products.',
  intro: "I'm Your Name. I build fast, secure and scalable web apps with React, Node.js and modern databases, from wireframe to deployment.",
  email: 'you@example.com',
  cv: '#',
  socials: [
    { icon: 'fa-brands fa-github', label: 'GitHub', url: '#' },
    { icon: 'fa-brands fa-linkedin', label: 'LinkedIn', url: '#' },
  ],
  stats: [
    ['3+', 'Years of experience'],
    ['25+', 'Projects delivered'],
    ['15+', 'Happy clients'],
    ['95+', 'Lighthouse score'],
  ],
}

export const services = [
  ['fa-solid fa-window-maximize', 'Frontend development', 'Responsive, accessible interfaces in React and Next.js.'],
  ['fa-solid fa-server', 'Backend and APIs', 'Clean REST APIs with Node.js, Express and JWT auth.'],
  ['fa-solid fa-database', 'Database design', 'Fast, well-structured schemas in MongoDB and PostgreSQL.'],
  ['fa-solid fa-rocket', 'Deployment', 'Docker, CI/CD and hosting so your app stays online.'],
]

export const projects = [
  { title: 'ShopEase E-commerce', color: '#0a7d6e', text: 'A complete online store with secure payments and an admin dashboard.',
    points: ['Cart, wishlist and Stripe checkout', 'Admin panel for orders and stock', 'Page load under 1.5 seconds'],
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'], demo: '#', code: '#' },
  { title: 'TeamFlow Task Manager', color: '#4a5be8', text: 'A collaborative board where teams plan work and track progress live.',
    points: ['Drag-and-drop boards with live updates', 'Role-based access for teams', 'Email reminders for due dates'],
    tags: ['Next.js', 'PostgreSQL', 'Prisma'], demo: '#', code: '#' },
  { title: 'Insight Analytics Dashboard', color: '#c0561f', text: 'A dashboard that turns raw business data into clear charts.',
    points: ['Interactive charts with filters', 'CSV and PDF export', 'Secure login with JWT'],
    tags: ['React', 'Express', 'MySQL'], demo: '#', code: '#' },
]

export const skills = {
  Frontend: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind'],
  Backend: ['Node.js', 'Express', 'REST', 'GraphQL', 'JWT'],
  Database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Prisma'],
  Tools: ['Git', 'GitHub Actions', 'Docker', 'Postman', 'Figma', 'Vercel'],
}

export const timeline = [
  ['2024 to now', 'Full Stack Developer', 'Company Name. Built web apps used by thousands of users.'],
  ['2022 to 2024', 'Freelance Web Developer', 'Delivered 15+ client projects in e-commerce and SaaS.'],
  ['2018 to 2022', 'BS Computer Science', 'University Name. Software engineering and databases.'],
]

export const steps = [
  ['Discover', 'We define goals, users and scope together.'],
  ['Design', 'Wireframes and a clear plan before any code.'],
  ['Build', 'Weekly demos so you always see progress.'],
  ['Launch', 'Testing, deployment and support after go-live.'],
]

export const quotes = [
  ['Delivered ahead of schedule and the code quality was excellent.', 'Client Name, CEO at Company'],
  ['Our website is twice as fast and sales went up.', 'Client Name, Founder at Startup'],
]
