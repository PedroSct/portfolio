"use client";

import { useTranslations } from "next-intl";
import { Mail, MapPin } from "lucide-react"; // Importe apenas o que usar fixo
import Link from "next/link";
import { SOCIAL_LINKS, CONTACT_INFO } from "@/config/socials"; // <--- Import Novo

export default function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Nav");
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 bg-black/80 backdrop-blur-md mt-auto pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Coluna 1 */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white tracking-tighter">
            DEV<span className="text-primary">&</span>SEC
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
            {t('brandDescription')}
          </p>
        </div>

        {/* Coluna 2 */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold">{t('navTitle')}</h4>
          <ul className="space-y-2 text-sm text-text-muted">
            <li><Link href="#projects" className="hover:text-primary transition-colors">{tNav('projects')}</Link></li>
            <li><Link href="#skills" className="hover:text-primary transition-colors">Skills</Link></li>
            <li><Link href="#about" className="hover:text-primary transition-colors">{tNav('about')}</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Contato Refatorada */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold">{t('contactTitle')}</h4>
          <ul className="space-y-3 text-sm text-text-muted">
            
            {/* E-mail Centralizado */}
            <li className="flex items-center gap-2">
              <Mail size={20} className="text-primary flex-shrink-0" />
              <a 
                href={`mailto:${CONTACT_INFO.email}`} 
                className="hover:text-white transition-colors break-all"
              >
                {CONTACT_INFO.email}
              </a>
            </li>

            {/* Localização */}
            <li className="flex items-center gap-2">
              <MapPin size={20} className="text-primary flex-shrink-0" />
              <span>{CONTACT_INFO.location}</span>
            </li>
            
            {/* --- REDES SOCIAIS REFATORADAS --- */}
            <li className="flex gap-4 mt-4">
              {SOCIAL_LINKS.map((social, index) => (
                <Link 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </li>
            {/* --------------------------------- */}

          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 pt-8 text-center text-xs text-text-muted/60">
        <p>{t('rights', { year })}</p>
      </div>
    </footer>
  );
}