"use client";

import { Mail, Coffee } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="w-full py-24 px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-3xl p-12 text-center relative overflow-hidden"
      >
        {/* Efeito de brilho de fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
          Vamos construir algo seguro juntos?
        </h2>
        
        <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto relative z-10">
          Estou sempre aberto a novos desafios em Segurança Ofensiva, Blue Team ou Desenvolvimento Full Stack. Vamos tomar um café (virtual ou real)?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <a 
            href="mailto:pedro.scoton@outlook.com"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-black rounded-full font-bold hover:bg-primary/90 transition-transform hover:scale-105"
          >
            <Mail size={20} />
            Mandar E-mail
          </a>
          
          <a 
            href="https://linkedin.com/in/pedro-scoton"
            target="_blank"
            className="flex items-center justify-center gap-2 px-8 py-4 border border-white/10 bg-black/40 text-white rounded-full font-medium hover:bg-white/5 transition-colors"
          >
            <Coffee size={20} />
            Chamar no LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}