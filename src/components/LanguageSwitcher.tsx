"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLocale = locale === "pt" ? "en" : "pt";
    // Troca o /pt por /en na URL atual
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative px-3 py-1 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-2"
    >
      <span className={`text-xs font-mono ${locale === 'pt' ? 'text-primary' : 'text-gray-500'}`}>PT</span>
      
      {/* Um pequeno divisor visual */}
      <span className="h-3 w-[1px] bg-white/20"></span>
      
      <span className={`text-xs font-mono ${locale === 'en' ? 'text-primary' : 'text-gray-500'}`}>EN</span>
    </button>
  );
}