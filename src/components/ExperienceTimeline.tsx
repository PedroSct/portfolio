"use client";

import { useTranslations } from "next-intl";
import { experienceData } from "@/data/experience";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

export default function ExperienceTimeline({ locale }: { locale: string }) {
  const t = useTranslations("Experience");

  return (
    <section id="about" className="w-full py-20 px-4 md:px-0 max-w-3xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
      >
        {t('title')}
      </motion.h2>

      <div className="relative space-y-12">
        {/* Linha Vertical Conectora */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2 md:translate-x-0" />

        {experienceData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`relative flex flex-col md:flex-row gap-8 items-start ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* O ponto central na linha */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 z-10 mt-1.5 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

            {/* O Conteúdo do Card */}
            <div className={`ml-12 md:ml-0 w-full md:w-[45%] ${
              index % 2 === 0 ? "text-left md:text-left" : "text-left md:text-right"
            }`}>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                <div className={`flex items-center gap-2 mb-2 ${
                   index % 2 !== 0 ? "md:justify-end" : ""
                }`}>
                  <span className="text-primary">
                    {item.type === 'education' ? <GraduationCap size={20}/> : <Briefcase size={20}/>}
                  </span>
                  <span className="text-xs font-mono text-primary/80 uppercase tracking-wider">
                    {item.type === 'education' ? t('education') : t('work')}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white">{item.role[locale as 'pt'|'en']}</h3>
                <h4 className="text-lg text-text-secondary font-medium mb-4">{item.company}</h4>
                
                <p className="text-sm text-text-muted leading-relaxed mb-4">
                  {item.description[locale as 'pt'|'en']}
                </p>

                <div className={`flex items-center gap-2 text-xs text-text-muted/60 ${
                   index % 2 !== 0 ? "md:justify-end" : ""
                }`}>
                  <Calendar size={14} />
                  {item.period[locale as 'pt'|'en']}
                </div>
              </div>
            </div>

            {/* Espaço vazio para manter o grid balanceado no desktop */}
            <div className="hidden md:block w-[45%]" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}