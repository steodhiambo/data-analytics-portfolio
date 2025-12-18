export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  impact: string;
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export type Theme = 'light' | 'dark';