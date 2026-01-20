"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl"; // <--- Importando o hook
import { ShieldAlert, BrainCircuit, FileSearch, ArrowRight } from "lucide-react";

export default function FeaturedProject() {
  const t = useTranslations("FeaturedProject"); // <--- Conectando ao JSON

  return (
    <section className="w-full py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative rounded-3xl overflow-hidden border border-primary/20 bg-black/40 backdrop-blur-sm"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-12 items-center">
          
          {/* Lado Esquerdo */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono tracking-wider uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {t('badge')}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {t('titlePrefix')} <span className="text-primary">Honeypot</span> & <span className="text-primary">Machine Learning</span>
            </h2>

            <p className="text-text-secondary leading-relaxed">
              {/* Renderizando descrição. Se precisar de HTML dentro (como <strong>), use Rich Text do next-intl, mas texto simples resolve aqui */}
              {t('description')}
            </p>

            <div className="flex flex-wrap gap-2">
              {['Python', 'Random Forest', 'Linux Hardening', 'Network Analysis', 'Virtualization'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300 font-mono">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div>
                <p className="text-2xl font-bold text-white">98.3%</p>
                <p className="text-xs text-text-muted uppercase tracking-wide">{t('stat1Label')}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">1.5k+</p>
                <p className="text-xs text-text-muted uppercase tracking-wide">{t('stat2Label')}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">0.05s</p>
                <p className="text-xs text-text-muted uppercase tracking-wide">{t('stat3Label')}</p>
              </div>
            </div>

            <div className="pt-4">
                <a href="/TG_Honeypot.pdf" target="_blank" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors group cursor-pointer font-medium">
                    {t('button')}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
          </div>

          {/* Lado Direito (Animação visual mantém igual) */}
          <div className="relative h-full min-h-[300px] flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 p-8 overflow-hidden group">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="relative z-10 grid grid-cols-2 gap-8 w-full max-w-sm">
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-center"
                >
                    <div className="p-3 bg-red-500/20 rounded-full text-red-400">
                        <ShieldAlert size={24} />
                    </div>
                    <span className="text-xs font-mono text-red-200">Atacante</span>
                </motion.div>

                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="flex flex-col items-center gap-3 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-center"
                >
                    <div className="p-3 bg-yellow-500/20 rounded-full text-yellow-400">
                        <FileSearch size={24} />
                    </div>
                    <span className="text-xs font-mono text-yellow-200">Honeypot</span>
                </motion.div>

                <motion.div 
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="col-span-2 flex flex-col items-center gap-3 p-4 bg-primary/10 border border-primary/30 rounded-xl text-center shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                >
                    <div className="p-3 bg-primary/20 rounded-full text-primary">
                        <BrainCircuit size={32} />
                    </div>
                    <span className="text-xs font-mono text-blue-200">AI Analysis</span>
                </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}