export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  repoUrl?: string;
  demoUrl?: string;
  category: 'All' | 'Spring Boot' | 'Microservices' | 'JavaFX' | 'Cloud';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Core' | 'Frameworks' | 'Tools' | 'Database';
  description?: string;
}

export interface JobHistory {
  role: string;
  company: string;
  period: string;
  description: string;
}
