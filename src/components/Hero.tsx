"use client";

import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { profileData } from "@/data/profile"; // Pode manter para o Nome
import { SOCIAL_LINKS, CONTACT_INFO } from "@/config/socials"; // <--- Import Novo
import { ArrowDown, Mail, Download } from "lucide-react";
import Link from "next/link";
import Typewriter from 'typewriter-effect';

export default function Hero() {
  const t = useTranslations("Hero");

  // Usa o email centralizado
  const subject = encodeURIComponent("Oportunidade - Via Portfólio");
  const body = encodeURIComponent("Olá Pedro,\n\nVi seu portfólio e gostaria de conversar sobre uma oportunidade.\n\nAtenciosamente,");
  const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center px-4 md:px-0 overflow-hidden">
      
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-4xl w-full text-center space-y-8 relative z-10"
      >
        <motion.p variants={fadeInUp} className="text-primary font-mono text-sm tracking-widest uppercase">
          {t('greeting')}
        </motion.p>

        <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-bold tracking-tighter leading-none text-white">
          {profileData.name.toUpperCase()}
        </motion.h1>

        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center justify-center gap-2 text-xl md:text-2xl text-text-secondary font-light h-12 md:h-8">
          <span className="hidden md:inline">I am a</span>
          <span className="text-primary font-semibold">
            <Typewriter
              options={{
                strings: ['Full Stack Developer', 'Security Analyst', 'Blue Team Operator', 'Problem Solver'],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </span>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link 
                href={mailtoLink} 
                className="flex items-center gap-2 px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all hover:scale-105"
            >
                <Mail size={18} />
                {t('contact')}
            </Link>

            <a 
                href="/cv_pedro_scoton.pdf"
                download="CV_Pedro_Scoton.pdf"
                className="flex items-center gap-2 px-8 py-3 border border-white/20 bg-white/5 text-white rounded-full font-medium hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm"
            >
                <Download size={18} />
                Download CV
            </a>
        </motion.div>

        {/* --- ÍCONES SOCIAIS REFATORADOS --- */}
        <motion.div variants={fadeInUp} className="flex justify-center gap-4 pt-4">
            {SOCIAL_LINKS.map((social, index) => (
                <Link 
                    key={index} 
                    href={social.href} 
                    target="_blank"
                    className={`p-3 text-text-muted transition-colors ${social.hoverColor || 'hover:text-white'}`}
                    aria-label={social.name}
                >
                    {/* Renderiza o ícone diretamente do config */}
                    <social.icon size={24} />
                </Link>
            ))}
        </motion.div>
        {/* ---------------------------------- */}

      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 animate-bounce text-text-muted"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}