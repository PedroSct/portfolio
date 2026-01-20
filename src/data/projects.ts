import { Project } from "./types";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Security Log Analyzer",
    description: {
      pt: "Ferramenta CLI desenvolvida em Python para análise automatizada de logs de servidor, detectando padrões de força bruta e anomalias de acesso.",
      en: "CLI tool developed in Python for automated server log analysis, detecting brute-force patterns and access anomalies."
    },
    technologies: ["Python", "Regex", "Linux", "CyberSec"],
    githubUrl: "https://github.com/seuuser/log-analyzer",
    featured: true
  },
  {
    id: "2",
    title: "Secure Auth System",
    description: {
      pt: "Sistema de autenticação robusto implementando JWT, criptografia AES-256 e proteção contra SQL Injection e XSS.",
      en: "Robust authentication system implementing JWT, AES-256 encryption, and protection against SQL Injection and XSS."
    },
    technologies: ["Node.js", "TypeScript", "Next.js", "OWASP"],
    githubUrl: "https://github.com/seuuser/auth-system",
    liveUrl: "https://auth-demo.vercel.app",
    featured: true
  },
  {
    id: "3",
    title: "Portfolio V1",
    description: {
      pt: "Este portfólio! Construído com Next.js 16 e Tailwind, focado em performance, acessibilidade e arquitetura limpa.",
      en: "This portfolio! Built with Next.js 16 and Tailwind, focused on performance, accessibility, and clean architecture."
    },
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
    githubUrl: "https://github.com/seuuser/portfolio",
    featured: true
  }
];