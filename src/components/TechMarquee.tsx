"use client";

import { 
  SiPython, SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, 
  SiTailwindcss, SiDocker, SiGit, SiLinux, SiPostgresql, 
  SiBurpsuite, SiWireshark, SiKalilinux, 
  SiGnubash, SiOwasp,
  SiHtml5, SiCss3, SiMetasploit, SiSplunk, SiTorbrowser
} from "react-icons/si";

import { FaNetworkWired, FaJava } from "react-icons/fa"; 
import { VscAzure } from "react-icons/vsc"; 

const techStack = [
  // --- Desenvolvimento Web ---
  { name: "HTML5", icon: SiHtml5, color: "hover:text-[#E34F26]" },
  { name: "CSS3", icon: SiCss3, color: "hover:text-[#1572B6]" },
  { name: "Java", icon: FaJava, color: "hover:text-[#007396]" },
  { name: "React", icon: SiReact, color: "hover:text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "hover:text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "hover:text-[#3178C6]" },
  { name: "Node.js", icon: SiNodedotjs, color: "hover:text-[#339933]" },
  { name: "Tailwind", icon: SiTailwindcss, color: "hover:text-[#06B6D4]" },
  
  // --- Backend & DevOps ---
  { name: "Python", icon: SiPython, color: "hover:text-[#3776AB]" },
  { name: "SQL", icon: SiPostgresql, color: "hover:text-[#4169E1]" },
  { name: "Docker", icon: SiDocker, color: "hover:text-[#2496ED]" },
  { name: "Git", icon: SiGit, color: "hover:text-[#F05032]" },
  { name: "Linux", icon: SiLinux, color: "hover:text-[#FCC624]" },
  { name: "Bash", icon: SiGnubash, color: "hover:text-white" },
  { name: "Azure", icon: VscAzure, color: "hover:text-[#0078D4]" },

  // --- Segurança & Ferramentas ---
  { name: "Kali Linux", icon: SiKalilinux, color: "hover:text-[#557C94]" },
  { name: "Burp Suite", icon: SiBurpsuite, color: "hover:text-[#FF6633]" },
  { name: "Metasploit", icon: SiMetasploit, color: "hover:text-[#1A6384]" },
  { name: "Wireshark", icon: SiWireshark, color: "hover:text-[#1679A7]" },
  { name: "Splunk", icon: SiSplunk, color: "hover:text-[#000000] hover:bg-[#ce00a2] hover:rounded-full p-1" },
  { name: "Tor", icon: SiTorbrowser, color: "hover:text-[#7D4698]" },
  { name: "OWASP", icon: SiOwasp, color: "hover:text-[#000000] hover:bg-white hover:rounded-full p-1" },
  { name: "Networking", icon: FaNetworkWired, color: "hover:text-green-400" },
];

export default function TechMarquee() {
  return (
    <section className="py-10 w-full overflow-hidden bg-black/20 border-y border-white/5 backdrop-blur-sm select-none">
      <div className="relative flex overflow-x-hidden">
        
        {/* Máscaras de gradiente nas laterais */}
        <div className="absolute top-0 bottom-0 left-0 w-32 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>

        {/* MÁGICA DO CSS AQUI:
            [&:has(.group\/icon:hover)_.animate-marquee]:[animation-play-state:paused]
            
            Tradução: "Neste container, se ALGUM filho com a classe 'group/icon' estiver com mouse em cima (hover),
            procure todos os elementos com a classe 'animate-marquee' e PAUSE eles."
        */}
        <div className="flex min-w-full [&:has(.group\/icon:hover)_.animate-marquee]:[animation-play-state:paused]">
          
          {/* LISTA 1 */}
          <div className="flex animate-marquee items-center justify-around gap-8 px-8 py-8 min-w-full flex-shrink-0">
            {techStack.map((tech, index) => (
              <div 
                key={index} 
                className={`group/icon flex flex-col items-center justify-center transition-all duration-300 text-white/20 ${tech.color}`}
                title={tech.name}
              >
                <tech.icon size={45} className="transition-transform duration-300 group-hover/icon:scale-125 group-hover/icon:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
              </div>
            ))}
          </div>

          {/* LISTA 2 (Cópia para Loop) */}
          <div aria-hidden="true" className="flex animate-marquee items-center justify-around gap-8 px-8 py-8 min-w-full flex-shrink-0">
            {techStack.map((tech, index) => (
              <div 
                key={`dup-${index}`} 
                className={`group/icon flex flex-col items-center justify-center transition-all duration-300 text-white/20 ${tech.color}`}
                title={tech.name}
              >
                <tech.icon size={45} className="transition-transform duration-300 group-hover/icon:scale-125 group-hover/icon:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}