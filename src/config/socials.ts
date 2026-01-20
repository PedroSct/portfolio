import { Github, Linkedin, Mail, FileText } from "lucide-react";

// 1. Dados de Contato Direto
export const CONTACT_INFO = {
  email: "pedroaugusto06082004@gmail.com",
  location: "Bernardino de Campos, SP", // Ajuste conforme necessário
};

// 2. Links Sociais e Currículo
export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/PedroSct", // <--- COLOCAR SEU LINK
    icon: Github,
    // Cor específica ao passar o mouse (opcional)
    hoverColor: "hover:text-white", 
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/pedroscoton", // <--- COLOCAR SEU LINK
    icon: Linkedin,
    hoverColor: "hover:text-[#0077b5]",
  },
  // Se quiser adicionar o currículo como um link social também:
  /*
  {
    name: "Currículo",
    href: "/cv_pedro_scoton.pdf",
    icon: FileText,
    hoverColor: "hover:text-green-400",
    download: true
  }
  */
];