"use client";

import { useTranslations } from "next-intl";
import { skillsData } from "@/data/skills";
import { motion } from "framer-motion";

export default function SkillsSection({ locale }: { locale: string }) {
  const t = useTranslations("Skills");

  // Animação dos itens aparecendo um por um
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="w-full py-20 px-4 md:px-0 max-w-4xl mx-auto">
      
      {/* Cabeçalho da Seção */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          {t('title')}
        </h2>
        <p className="text-text-secondary max-w-lg mx-auto">
          {t('subtitle')}
        </p>
      </motion.div>

      {/* Grid de Categorias */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors"
          >
            <h3 className="text-xl font-bold text-primary mb-6">
              {category.title[locale as 'pt' | 'en']}
            </h3>
            
            {/* Lista de Skills (Badges) */}
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  variants={itemAnim}
                  className="px-3 py-1.5 text-sm font-mono text-gray-300 bg-black/40 border border-white/10 rounded-md hover:text-white hover:border-primary/40 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}