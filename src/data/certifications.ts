export interface Certification {
    name: string;
    issuer: string;
    date: string;
    link?: string;
    type: "course" | "event";
    hours?: string;
    skills: string[];
    details: {
      pt: string;
      en: string;
    };
  }
  
  export const certificationsData: Certification[] = [
    {
      name: "Nano Course: Cybersecurity",
      issuer: "FIAP - Centro Universitário",
      date: "Mai 2025",
      type: "course",
      hours: "120h",
      skills: ["Cyber Defense", "Threat Analysis", "Security Architecture"],
      details: {
        pt: "Curso intensivo cobrindo fundamentos de segurança, proteção de dados e estratégias de defesa cibernética em ambientes corporativos.",
        en: "Intensive course covering security fundamentals, data protection, and cyber defense strategies in corporate environments."
      },
      link: "https://on.fiap.com.br/local/nanocourses/validar-certificado?chave=d9e5bd1dc85a849701b09f56df0c107a"
    },
    {
      name: "Perito Forense Digital",
      issuer: "Academia de Forense Digital (AFD)",
      date: "Mai 2025",
      type: "course",
      hours: "8h",
      skills: ["Digital Forensics", "Cadeia de Custódia", "Evidence Collection"],
      details: {
        pt: "Treinamento focado em legislação, identificação de evidências digitais, cópias forenses e preservação de cadeia de custódia.",
        en: "Training focused on legislation, digital evidence identification, forensic copies, and chain of custody preservation."
      },
      link: "https://www.academiadeforensedigital.com.br"
    },
    {
      name: "Introdução ao Hacking e Pentest 2.0",
      issuer: "Solyd Offensive Security",
      date: "Mai 2025",
      type: "course",
      hours: "8h",
      skills: ["Pentest", "Ethical Hacking", "Recon"],
      details: {
        pt: "Fundamentos de segurança ofensiva, incluindo fases de um pentest e técnicas iniciais de reconhecimento e exploração.",
        en: "Offensive security fundamentals, including pentest phases and initial reconnaissance and exploitation techniques."
      },
      link: "https://solyd.com.br/verificar/DzBbmf2sTi"
    },
    {
      name: "Conceitos Básicos de Segurança de Rede",
      issuer: "Microsoft Learn",
      date: "Abr 2025",
      type: "course",
      skills: ["Network Security", "Cloud Security", "Azure"],
      details: {
        pt: "Fundamentos de segurança de rede, defesa contra ameaças comuns e proteção de infraestrutura em nuvem.",
        en: "Network security fundamentals, defense against common threats, and cloud infrastructure protection."
      },
      link: "https://learn.microsoft.com/pt-br/users/pedroaugustoscotonalves-8294/achievements/print/e5j5ee5p"
    },
    {
      name: "Gestão de Infraestrutura de TI",
      issuer: "FIAP",
      date: "Mai 2025",
      type: "course",
      hours: "20h",
      skills: ["ITIL", "Infrastructure", "DevOps"],
      details: {
        pt: "Gerenciamento de serviços de TI, boas práticas de infraestrutura e suporte a operações críticas.",
        en: "IT service management, infrastructure best practices, and critical operations support."
      },
      link: "https://on.fiap.com.br/local/nanocourses/validar-certificado?chave=0504e1396cf429b18f1c4e8730540951"
    },
    {
      name: "LinkedIn Avançado: Marca Pessoal",
      issuer: "FM2S Educação e Consultoria",
      date: "Mai 2025",
      type: "course",
      hours: "10h",
      skills: ["Networking", "Personal Branding", "Soft Skills"],
      details: {
        pt: "Estratégias de networking profissional e construção de autoridade no mercado de tecnologia.",
        en: "Professional networking strategies and authority building in the technology market."
      },
      link: "#"
    },
    {
      name: "ISO/IEC 20000 & 27001",
      issuer: "SkillFront",
      date: "2025",
      type: "course",
      skills: ["ISO 27001", "Compliance", "SGSI"],
      details: {
        pt: "Normas internacionais para gestão de serviços de TI e Sistemas de Gestão de Segurança da Informação (SGSI).",
        en: "International standards for IT service management and Information Security Management Systems (ISMS)."
      },
      link: "https://www.skillfront.com/Badges/42624381586242"
    },
    {
      name: "Introdução ao Pentest na Prática",
      issuer: "Desec Security",
      date: "Mai 2025",
      type: "course",
      hours: "2h",
      skills: ["Pentest", "Hands-on"],
      details: {
        pt: "Abordagem prática de testes de intrusão e análise de vulnerabilidades.",
        en: "Practical approach to penetration testing and vulnerability analysis."
      },
      link: "https://desecsecurity.com"
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "Nov 2023",
      type: "course",
      skills: ["Network Security", "Threats", "Protection"],
      details: {
        pt: "Proteção contra ataques cibernéticos comuns, segurança online e privacidade de dados.",
        en: "Protection against common cyber attacks, online safety, and data privacy."
      },
      link: "https://www.netacad.com/" 
    },
    {
      name: "Eventos Acadêmicos & Workshops",
      issuer: "Fatec Ourinhos",
      date: "2025",
      type: "event",
      hours: "10h+",
      skills: ["Networking", "Academic", "Security"],
      details: {
        pt: "Participação no Security Weekend 2025, Workshop de Projetos de Graduação e Encontro de Egressos.",
        en: "Participation in Security Weekend 2025, Graduation Projects Workshop, and Alumni Meeting."
      },
      link: "http://fatecourinhos.edu.br"
    }
  ];