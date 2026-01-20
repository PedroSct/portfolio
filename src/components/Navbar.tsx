"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { Home, User, Briefcase, Mail } from "lucide-react";
import { SOCIAL_LINKS, CONTACT_INFO } from "@/config/socials"; // <--- Import Novo

export default function Navbar({ locale }: { locale: string }) {
  const t = useTranslations("Nav");

  const navItems = [
    { name: t("projects"), href: "#projects", icon: Briefcase },
    { name: t("about"), href: "#about", icon: User },
    // Usa o email centralizado do config
    { name: t("contact"), href: `mailto:${CONTACT_INFO.email}`, icon: Mail },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center items-center px-4"
    >
      <nav className="flex items-center gap-6 px-6 py-3 rounded-full border border-white/10 bg-black/60 backdrop-blur-md shadow-2xl shadow-primary/5">
        
        {/* Lado Esquerdo: Home + Badge */}
        <div className="flex items-center gap-4">
            <Link href={`/${locale}`} className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                 <Home size={18} className="text-white" />
            </Link>

            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20" title="Disponível para Projetos">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-medium text-green-400 uppercase tracking-wide">
                    Available
                </span>
            </div>
        </div>

        {/* Divisor */}
        <div className="h-4 w-[1px] bg-white/10 hidden md:block"></div>

        {/* Links de Navegação */}
        <ul className="flex items-center gap-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link 
                href={item.href} 
                className="text-sm font-medium text-text-secondary hover:text-white transition-colors flex items-center gap-2"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* --- NOVO: ÍCONES SOCIAIS NA NAVBAR --- */}
        <div className="hidden md:flex items-center gap-3 pl-6 border-l border-white/10">
           {SOCIAL_LINKS.map((social) => (
             <a
               key={social.name}
               href={social.href}
               target="_blank"
               rel="noopener noreferrer"
               className={`text-zinc-400 transition-colors ${social.hoverColor}`}
               aria-label={social.name}
             >
               <social.icon size={18} />
             </a>
           ))}
        </div>
        {/* -------------------------------------- */}

        <div className="h-4 w-[1px] bg-white/10 mx-2"></div>

        <LanguageSwitcher locale={locale} />
      </nav>
    </motion.header>
  );
}