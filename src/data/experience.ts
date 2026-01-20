export interface ExperienceItem {
    id: string;
    role: { pt: string; en: string };
    company: string;
    period: { pt: string; en: string };
    description: { pt: string; en: string };
    type: "education" | "work";
  }
  
  export const experienceData: ExperienceItem[] = [
    // ITEM 1: ETEC (Agora vem primeiro)
    {
      id: "1",
      role: { pt: "Técnico em Desenvolvimento de Sistemas", en: "Systems Development Technician" },
      company: "Etec Ipaussu",
      period: { pt: "2021 - 2022", en: "2021 - 2022" },
      description: {
        pt: "Base sólida em lógica de programação, banco de dados (SQL) e desenvolvimento web/mobile.",
        en: "Solid foundation in programming logic, databases (SQL) and web/mobile development."
      },
      type: "education"
    },
    // ITEM 2: FATEC
    {
      id: "2",
      role: { pt: "Segurança da Informação", en: "Information Security" },
      company: "Fatec Ourinhos",
      period: { pt: "2023 - Presente", en: "2023 - Present" },
      description: { 
        pt: "Graduação focada em gestão de riscos, criptografia, segurança de redes e normas ISO 27001.",
        en: "Degree focused on risk management, cryptography, network security and ISO 27001 standards."
      },
      type: "education"
    },
    // ITEM 3: FREELANCE
    {
      id: "3",
      role: { pt: "Freelance Full Stack Dev", en: "Freelance Full Stack Dev" },
      company: "Autônomo",
      period: { pt: "2022 - Presente", en: "2022 - Present" },
      description: {
        pt: "Desenvolvimento de landing pages e sistemas web para pequenos comércios locais.",
        en: "Development of landing pages and web systems for local small businesses."
      },
      type: "work"
    }
  ];