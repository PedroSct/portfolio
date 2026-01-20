"use client";

import { useTranslations } from "next-intl";
import { projectsData } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function ProjectsSection({ locale }: { locale: string }) {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className="w-full py-20 px-4 md:px-0 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t('title')} <span className="text-primary">.</span>
        </h2>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </motion.div>

      {/* Grid Responsivo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            locale={locale}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}