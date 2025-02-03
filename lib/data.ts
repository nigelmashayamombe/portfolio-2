export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  progress: number;
  link: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'My-Clean-City',
    description: 'A community-driven platform for reporting and tracking urban cleanliness issues.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL','Laravel'],
    progress: 70,
    link: 'https://github.com/nigelmashayamombe/my-clean-city',
  },
  {
    id: '2',
    title: 'Zimbo carshare',
    description: 'Automated code review tool powered by machine learning.',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
    tags: ['Python', 'TensorFlow', 'FastAPI'],
    progress: 90,
    link: 'https://github.com/nigelmashayamombe/ai-code-review',
  },
  {
    id: '3',
    title: 'E-commerce Platform',
    description: 'Modern e-commerce solution with real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc',
    tags: ['React', 'Node.js', 'MongoDB'],
    progress: 100,
    link: 'https://github.com/nigelmashayamombe/ecommerce-platform',
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Olimem Enterprise Solutions',
    position: 'Laravel Full Stack Developer Intern',
    duration: 'Jul 2023 - Aug 2024',
    description: [
      'Developed and maintained multiple web applications using Laravel and Blade',
      'Implemented RESTful APIs and integrated third-party services',
      'Implemented Multi-tenancy ',
      'Optimized database queries resulting in faster page load times',
      'Collaborated with senior developers on large-scale projects',
      'Conducted tests with PEST '
    ],
    technologies: ['Laravel', 'Blade', 'MySQL', 'Filament', 'Git', 'Docker']
  },
  {
    id: '2',
    company: 'Digital Solutions Ltd',
    position: 'Laravel Full Stack Developer Intern',
    duration: 'Jan 2023 - May 2023',
    description: [
      'Built custom CMS solutions for clients using Laravel',
      'Created responsive front-end interfaces with Blade and Alpine.js',
      'Participated in code reviews and agile development processes',
      'Implemented authentication and authorization systems'
    ],
    technologies: ['Laravel', 'Alpine.js', 'PostgreSQL', 'Tailwind CSS']
  }
];

export const skills = [
  'Laravel',
  'Blade',
  'TypeScript',
  'React',
  'Php',
  'Next.js',
  'PostgreSQL',
  'GraphQL',
  'Python',
  'Docker',
  'AWS',
  'TailwindCSS',
  'MongoDB',
  'Git',
  'CI/CD',
  
];

export const socialLinks = {
  github: 'https://github.com/nigelmashayamombe',
  linkedin: 'https://linkedin.com/in/nigel-mashayamombe-4881b1241',
  twitter: 'https://twitter.com/nigelmash07',
  email: 'mailto:mashayamombenigel424@gmail.com'
};