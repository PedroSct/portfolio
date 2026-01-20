export interface SkillCategory {
    title: {
      pt: string;
      en: string;
    };
    skills: string[];
  }
  
  export const skillsData: SkillCategory[] = [
    {
      title: { pt: "Segurança Ofensiva", en: "Offensive Security" },
      skills: ["Kali Linux", "Burp Suite", "Metasploit", "Wireshark", "Nmap", "OWASP Top 10"]
    },
    {
      title: { pt: "Desenvolvimento Frontend", en: "Frontend Dev" },
      skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]
    },
    {
      title: { pt: "Backend & Sistemas", en: "Backend & Systems" },
      skills: ["Python", "Node.js", "Linux (Bash)", "SQL", "Docker", "Git"]
    },
    // NOVA CATEGORIA ADICIONADA AQUI 👇
    {
      title: { pt: "Idiomas & Comunicação", en: "Languages & Communication" },
      skills: [
        "Português (Nativo)", 
        "Inglês (Proficiente/C1)", // Ou coloque o nome do certificado ex: "Inglês (Cambridge FCE)"
        "Espanhol (Básico)",
        "Documentação Técnica"
      ]
    }
  ];