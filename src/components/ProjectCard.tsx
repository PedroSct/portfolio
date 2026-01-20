"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/types";
import { Github, ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  project: Project;
  locale: string; // 'pt' ou 'en'
  index: number;
}

export default function ProjectCard({ project, locale, index }: ProjectCardProps) {
  const t = useTranslations("Projects");
  
  // Tipagem segura para descrição
  const description = project.description[locale as 'pt' | 'en'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
    >
      {/* Ícone ou "Thumbnail" abstrata */}
      <div className="mb-4 flex justify-between items-start">
        <div className="p-3 bg-primary/20 rounded-lg text-primary group-hover:text-white group-hover:bg-primary transition-colors">
          <Code2 size={24} />
        </div>
        <div className="flex gap-2">
            {/* Renderiza link do github se existir */}
            {project.githubUrl && (
                <Link href={project.githubUrl} target="_blank" className="text-text-muted hover:text-white transition-colors" title={t('viewCode')}>
                    <Github size={20} />
                </Link>
            )}
            {/* Renderiza link live se existir */}
            {project.liveUrl && (
                <Link href={project.liveUrl} target="_blank" className="text-text-muted hover:text-white transition-colors" title={t('viewLive')}>
                    <ExternalLink size={20} />
                </Link>
            )}
        </div>
      </div>

      {/* Título e Descrição */}
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      {/* Tecnologias (Tags) */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.technologies.map((tech) => (
          <span 
            key={tech} 
            className="text-xs font-mono px-2 py-1 rounded-md bg-black/30 text-primary border border-primary/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}