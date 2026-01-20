// Imports dos Componentes
import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Certifications from "@/components/Certifications";
import TechMarquee from "@/components/TechMarquee"; // <--- 1. Import Novo

// (Se você tiver criado o ContactCTA, importe ele aqui também)
// import ContactCTA from "@/components/ContactCTA"; 

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* 1. Hero (Topo) */}
      <Hero />

      {/* 2. Destaque do TG */}
      <FeaturedProject />

      {/* 3. Projetos Normais */}
      <ProjectsSection locale={locale} />

      {/* 4. Skills (Com a nova categoria de Idiomas) */}
      <SkillsSection locale={locale} />

      {/* --- FAIXA INFINITA DE TECNOLOGIAS (NOVO) --- */}
      <TechMarquee />
      {/* ------------------------------------------- */}

      {/* 5. Linha do Tempo */}
      <ExperienceTimeline locale={locale} />

      {/* 6. Certificações */}
      <Certifications locale={locale} />

      {/* Espaço final antes do Footer (ou ContactCTA se tiver) */}
      <div className="h-20"></div> 
    </div>
  );
}