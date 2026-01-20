"use client";

import { certificationsData } from "@/data/certifications";
import { Award, ExternalLink, Calendar, ShieldCheck, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

// Agora o componente aceita o locale como propriedade
export default function Certifications({ locale }: { locale: string }) {
  const t = useTranslations("Certifications");

  return (
    <section className="w-full py-20 px-4 max-w-5xl mx-auto">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-10 border-b border-white/10 pb-4"
      >
        <ShieldCheck className="text-primary" size={32} />
        <div>
          <h2 className="text-3xl font-bold text-white">{t('title')}</h2>
          <p className="text-text-muted text-sm mt-1">{t('subtitle')}</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-6">
        {certificationsData.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/[0.08] hover:border-primary/40 transition-all duration-300 flex flex-col md:flex-row gap-6"
          >
            <div className="hidden md:flex flex-col items-center justify-center p-4 bg-black/40 rounded-lg border border-white/5 w-24 text-center h-full min-h-[100px]">
               <Award className="text-primary mb-2" size={28} />
               {cert.hours && (
                 <div className="flex items-center gap-1 text-xs font-mono text-white/70 bg-white/10 px-2 py-1 rounded mt-auto">
                   <Clock size={10} />
                   <span>{cert.hours}</span>
                 </div>
               )}
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-white text-xl group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-text-secondary font-medium flex items-center gap-2 mt-1 text-sm md:text-base">
                    {cert.issuer}
                  </p>
                </div>
                
                {cert.link && cert.link !== "#" && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-text-muted hover:text-white hover:bg-white/10 rounded-full transition-colors flex-shrink-0"
                    title={t('verify')}
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>

              {/* AQUI ESTÁ A MÁGICA: Usamos [locale] para pegar o texto certo */}
              <p className="text-sm text-text-muted mt-3 leading-relaxed border-l-2 border-white/10 pl-4">
                {cert.details[locale as 'pt' | 'en']}
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-5 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs text-text-muted/60">
                  <Calendar size={14} />
                  <span>{cert.date}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 ml-auto">
                  {cert.skills.map((skill, i) => (
                     <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-primary/80 bg-primary/10 px-2 py-1 rounded-sm border border-primary/10">
                       {skill}
                     </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}