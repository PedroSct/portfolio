export type Locale = 'pt' | 'en';

export interface LocalizedString {
  pt: string;
  en: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Nome do ícone do Lucide
}

export interface Profile {
  name: string;
  role: LocalizedString;
  bio: LocalizedString;
  location: string;
  email: string;
  socials: SocialLink[];
}

export interface Project {
  id: string;
  title: string;
  description: LocalizedString;
  technologies: string[]; // ex: ["Next.js", "Python"]
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean; // Se true, aparece na home
  imageUrl?: string; // Caminho da imagem na pasta public
}