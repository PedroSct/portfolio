"use client";

import Link from "next/link";
import { AlertTriangle } from "lucide-react";

// Como é uma página global de erro, não temos acesso fácil às traduções do i18n
// então vamos de inglês global ou texto simples.
export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#0a0a0a] text-white px-4 text-center">
      <div className="p-4 bg-red-500/10 rounded-full mb-6 border border-red-500/20 animate-pulse">
        <AlertTriangle size={48} className="text-red-500" />
      </div>
      <h1 className="text-6xl font-bold mb-2">404</h1>
      <h2 className="text-2xl text-gray-400 mb-8">Page Not Found / Página Não Encontrada</h2>
      <p className="text-gray-500 max-w-md mb-8">
        Parece que você tentou acessar uma área restrita ou inexistente.
        Vamos voltar para a segurança?
      </p>
      
      <Link 
        href="/"
        className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
      >
        Voltar para Home
      </Link>
    </div>
  );
}