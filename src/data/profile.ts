import { Profile } from "./types";

export const profileData: Profile = {
  name: "Pedro Scoton",
  role: {
    pt: "Desenvolvedor Full Stack & Analista de Segurança",
    en: "Full Stack Developer & Security Analyst"
  },
  bio: {
    pt: "Estudante de Segurança da Informação na Fatec Ourinhos e Técnico em Desenvolvimento pela Etec. Foco em criar soluções seguras, escaláveis e com experiência de usuário impecável.",
    en: "Information Security student at Fatec Ourinhos and Systems Development Technician. Focused on building secure, scalable solutions with impeccable user experience."
  },
  location: "São Paulo, Brasil",
  // E-mail atualizado
  email: "pedroaugusto06082004@gmail.com",
  socials: [
    {
      platform: "GitHub",
      // Link atualizado com seu user real
      url: "https://github.com/pedroscoton", 
      icon: "Github"
    },
    {
      platform: "LinkedIn",
      // Link atualizado com seu user real
      url: "https://linkedin.com/in/pedro-scoton",
      icon: "Linkedin"
    }
  ]
};