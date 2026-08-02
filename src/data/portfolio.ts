import {
  SiReact, SiJavascript, SiPython, SiSpring,
  SiNodedotjs, SiPostgresql, SiMysql,
  SiTailwindcss, SiGit, SiTensorflow, SiScikitlearn,
  SiHtml5, SiCss, SiFlask, SiGo,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { SiOpencv } from 'react-icons/si';
import type { IconType } from 'react-icons';

export const personal = {
  name: 'Chethan G S',
  title: 'Full Stack Developer',
  tagline: 'Building scalable web apps powered by Java, React, and AI.',
  description:
    'Computer Science Engineering graduate with hands-on experience in Java Full Stack Development, REST API development, SQL, and AI-powered applications. Skilled in building scalable web applications using Spring Boot, React, MySQL, and modern software engineering practices.',
  photo: '/images/chethan-profile.jpg',
  photoAlt: 'Portrait of Chethan G S',
  resumeUrl: '/data/Chethan_Resume1.pdf',
  status: 'Open to Internships & Full-time Roles',
  location: 'Bengaluru, Karnataka, India',
  email: 'chethanchethu80733@gmail.com',
  phone: '+91 8073380097',
  github: 'https://github.com/ChethanGS18',
  linkedin: 'https://linkedin.com/in/chethan-g-s-2208b025a',
  languages: ['English (Professional)', 'Kannada (Native)', 'Hindi (Conversational)'],
  interests: ['AI/ML Research', 'Open Source', 'System Design', 'Computer Vision', 'Chess'],
  education: {
    degree: 'B.Tech — Computer Science Engineering',
    university: 'ACS College of Engineering',
    cgpa: '8.81 / 10',
    duration: 'Dec 2022 — Jul 2026',
  },
};

export const aboutCards = [
  {
    id: 'who',
    title: 'Who I Am',
    icon: 'user',
    description:
      'A final-year CS Engineering student at ACS College of Engineering, passionate about building production-grade applications at the intersection of Java full-stack development and AI-powered solutions.',
  },
  {
    id: 'goal',
    title: 'Career Goal',
    icon: 'target',
    description:
      'Land a Full Stack Engineering role where I can ship impactful software, grow in Spring Boot and React ecosystems, and integrate AI capabilities into real-world web applications.',
  },
  {
    id: 'learning',
    title: 'Currently Learning',
    icon: 'book',
    description:
      'Deepening expertise in Core Java and Advanced Java through hands-on internship training at Tap Academy, while exploring AI integration patterns and REST API architecture.',
  },
  {
    id: 'strengths',
    title: 'Core Strengths',
    icon: 'sparkles',
    description:
      'End-to-end project ownership, REST API design, AI model integration, and the ability to deliver responsive, functional applications across mobile and web platforms.',
  },
];

export const stats = [
  { id: 'projects', value: 3, suffix: '+', label: 'Projects Built' },
  { id: 'internships', value: 4, suffix: '', label: 'Internships' },
  { id: 'cgpa', value: 8.81, suffix: '/10', label: 'Academic CGPA', decimals: 2 },
  { id: 'technologies', value: 15, suffix: '+', label: 'Technologies' },
];

export type SkillCategory = {
  id: string;
  name: string;
  icon: string;
  color: string;
  skills: { name: string; icon: IconType; color: string }[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Languages',
    icon: 'code',
    color: '#4F8EF7',
    skills: [
      { name: 'Java', icon: FaJava, color: '#E76F00' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'SQL', icon: SiMysql, color: '#4479A1' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    icon: 'layout',
    color: '#38BDF8',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'React Native', icon: SiReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: 'server',
    color: '#34D399',
    skills: [
      { name: 'Spring Boot', icon: SiSpring, color: '#6DB33F' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Golang', icon: SiGo, color: '#00ACD7' },
      { name: 'Flask', icon: SiFlask, color: '#FFFFFF' },
      { name: 'REST APIs', icon: SiNodedotjs, color: '#FF6B35' },
    ],
  },
  {
    id: 'database',
    name: 'Database',
    icon: 'database',
    color: '#FBBF24',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    ],
  },
  {
    id: 'ai',
    name: 'AI / ML',
    icon: 'brain',
    color: '#FB7185',
    skills: [
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8' },
      { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
    ],
  },
  {
    id: 'tools',
    name: 'Tools',
    icon: 'wrench',
    color: '#F472B6',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGit, color: '#FFFFFF' },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  techStack: string[];
  features: string[];
  github: string;
  demo: string;
  accent: string;
};

export const projects: Project[] = [
  {
    id: 'trace',
    title: 'TRACE — AI Code Debugger',
    tagline: 'AI-powered automatic code debugging',
    description:
      'An AI-powered application that automatically detects and debugs errors in code. Implements AI models to analyze code, explain issues in simple terms, and suggest corrected code with a mobile-friendly frontend.',
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1200',
    techStack: ['React Native', 'Golang', 'Ollama', 'REST APIs', 'PostgreSQL'],
    features: [
      'AI-powered error detection and explanation',
      'Corrected code suggestions from AI models',
      'Backend services built with Golang',
      'Mobile-friendly React Native frontend',
    ],
    github: 'https://github.com/ChethanGS18',
    demo: '#',
    accent: '#4F8EF7',
  },
  {
    id: 'learnsphere',
    title: 'LearnSphere — Smart LMS',
    tagline: 'Full-stack Learning Management System',
    description:
      'A full-stack Learning Management System for web and mobile platforms with authentication, course management, quizzes, and progress tracking. Built and integrated REST APIs with PostgreSQL for a seamless learning experience.',
    image: 'https://images.pexels.com/photos/5077049/pexels-photo-5077049.jpeg?auto=compress&cs=tinysrgb&w=1200',
    techStack: ['Golang', 'React.js', 'React Native', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'Authentication and user management',
      'Course management and quizzes',
      'Progress tracking for learners',
      'REST APIs integrated with PostgreSQL',
    ],
    github: 'https://github.com/ChethanGS18',
    demo: '#',
    accent: '#38BDF8',
  },
  {
    id: 'sign-language',
    title: 'AI Sign Language Translator',
    tagline: 'Real-time Indian Sign Language recognition',
    description:
      'A computer vision system to recognize Indian Sign Language gestures in real time. Uses deep learning models for gesture classification and text conversion with preprocessing techniques to improve accuracy.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    techStack: ['Python', 'TensorFlow', 'OpenCV'],
    features: [
      'Real-time gesture recognition with OpenCV',
      'Deep learning classification model',
      'Indian Sign Language gesture support',
      'Image preprocessing pipeline for accuracy',
    ],
    github: 'https://github.com/ChethanGS18',
    demo: '#',
    accent: '#34D399',
  },
  {
    id: 'ai-resume',
    title: 'AI Resume Analysis & Job Matching',
    tagline: 'AI-powered resume analysis and job matching',
    description:
      'An AI-powered platform that analyzes resumes, extracts skills, provides resume improvement suggestions, and intelligently matches candidates with relevant job opportunities based on their profile.',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1200',
    techStack: ['Python', 'NLP', 'React', 'FastAPI', 'PostgreSQL'],
    features: [
      'AI-powered resume parsing and skill extraction',
      'Personalized resume improvement suggestions',
      'Intelligent candidate-to-job matching algorithm',
      'Skill-gap analysis and role recommendations',
    ],
    github: 'https://github.com/ChethanGS18',
    demo: '#',
    accent: '#FBBF24',
  },
  {
    id: 'rakta-vahini',
    title: 'Rakta-Vahini — Healthcare',
    tagline: 'Emergency blood donor matching app',
    description:
      'An Android healthcare application that connects eligible blood donors with patients using blood group, location, and donation eligibility filtering for faster emergency blood donation.',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200',
    techStack: ['Android', 'Java', 'Firebase', 'Google Maps API'],
    features: [
      'Blood group and location-based donor matching',
      'Donation eligibility verification',
      'Real-time emergency donor alerts',
      'Integrated Google Maps for nearby donors',
    ],
    github: 'https://github.com/ChethanGS18',
    demo: '#',
    accent: '#FB7185',
  },
];

export type Experience = {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
  tech: string[];
  accent: string;
};

export const experiences: Experience[] = [
  {
    id: 'tap-academy',
    role: 'Java Full Stack Development Intern',
    company: 'Tap Academy',
    duration: 'Feb 2026 — Present',
    location: 'Offline',
    responsibilities: [
      'Completed hands-on training in Core Java, Advanced Java, MySQL, and Full Stack Web Development.',
      'Developed responsive web applications using HTML, CSS, JavaScript, and React.',
      'Applied REST API integration and database concepts through practical projects.',
    ],
    tech: ['Java', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'React'],
    accent: '#4F8EF7',
  },
  {
    id: 'mrtech',
    role: 'Software Development Intern',
    company: 'MR Tech Lab LLP',
    duration: 'Feb 2026 — May 2026',
    location: 'Hybrid',
    responsibilities: [
      'Developed and delivered web and mobile applications using modern full-stack technologies.',
      'Worked on AI-powered and learning management solutions, integrating frontend, backend, and databases.',
      'Gained hands-on experience in REST API development, debugging, and Agile-based software development.',
    ],
    tech: ['React', 'React Native', 'Golang', 'PostgreSQL', 'REST APIs'],
    accent: '#38BDF8',
  },
  {
    id: 'skillcraft',
    role: 'Machine Learning Intern',
    company: 'SkillCraft Technology',
    duration: 'Sep 2025',
    location: 'Remote',
    responsibilities: [
      'Built and evaluated machine learning models using Python and Scikit-learn.',
      'Performed data preprocessing and validation for improved model performance.',
    ],
    tech: ['Python', 'Scikit-learn'],
    accent: '#34D399',
  },
  {
    id: 'pinnacle',
    role: 'Java Development Intern',
    company: 'Pinnacle Labs',
    duration: 'Sep 2025',
    location: 'Remote',
    responsibilities: [
      'Assisted in backend module development using Java and OOP principles.',
      'Debugged application-level issues to improve system stability.',
    ],
    tech: ['Java', 'OOP'],
    accent: '#FBBF24',
  },
];

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  image: string;
  accent: string;
};

export const certifications: Certification[] = [
  {
    id: 'dbms',
    title: 'Database Management System',
    issuer: 'Infosys Springboard',
    date: '2025',
    credentialId: 'INFOSYS-DBMS-2025',
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: '#4F8EF7',
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning',
    issuer: 'NPTEL',
    date: '2025',
    credentialId: 'NPTEL-DL-2025',
    image: 'https://images.pexels.com/photos/17412083/pexels-photo-17412083.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: '#38BDF8',
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    issuer: 'Coursera',
    date: '2025',
    credentialId: 'COURSERA-ML-2025',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: '#34D399',
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    issuer: 'NPTEL',
    date: '2025',
    credentialId: 'NPTEL-AI-2025',
    image: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: '#FBBF24',
  },
  {
    id: 'python-programming',
    title: 'Python Programming',
    issuer: 'HackerRank',
    date: '2024',
    credentialId: 'HR-PY-2024',
    image: 'https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: '#FB7185',
  },
  {
    id: 'java-fullstack',
    title: 'Java Full Stack Development',
    issuer: 'Tap Academy',
    date: '2026',
    credentialId: 'TAP-JFS-2026',
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: '#A78BFA',
  },
];

export type Achievement = {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: string;
  accent: string;
  decimals?: number;
};

export const achievements: Achievement[] = [
  { id: 'internships', value: 4, suffix: '', label: 'Internships Completed', icon: 'trophy', accent: '#FBBF24' },
  { id: 'projects', value: 3, suffix: '+', label: 'Projects Shipped', icon: 'code', accent: '#4F8EF7' },
  { id: 'cgpa', value: 8.81, suffix: '/10', label: 'Academic CGPA', icon: 'award', accent: '#34D399', decimals: 2 },
  { id: 'technologies', value: 15, suffix: '+', label: 'Technologies Used', icon: 'github', accent: '#38BDF8' },
];

export type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  accent: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: 'research',
    number: '01',
    title: 'Research',
    description: 'Understand the problem space, gather requirements, and analyze user needs before writing a single line of code.',
    icon: 'search',
    accent: '#4F8EF7',
  },
  {
    id: 'design',
    number: '02',
    title: 'Design',
    description: 'Architect the system, prototype interfaces, and plan the data flow to ensure scalability from day one.',
    icon: 'pen',
    accent: '#38BDF8',
  },
  {
    id: 'develop',
    number: '03',
    title: 'Develop',
    description: 'Build with clean, maintainable code. Iterate fast with tests, reviews, and continuous integration.',
    icon: 'code',
    accent: '#34D399',
  },
  {
    id: 'deploy',
    number: '04',
    title: 'Deploy to Render',
    description: 'Ship to production with CI/CD pipelines, monitor performance, and iterate based on real-world feedback.',
    icon: 'rocket',
    accent: '#FBBF24',
  },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'process', label: 'Process' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];
