"use client";

import { useEffect, useState, useRef } from "react";
import { X } from "lucide-react";

export default function MatrixEasterEgg() {
  const [showMatrix, setShowMatrix] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Sequência do Konami Code
  const konamiCode = [
    "ArrowUp", "ArrowUp", 
    "ArrowDown", "ArrowDown", 
    "ArrowLeft", "ArrowRight", 
    "ArrowLeft", "ArrowRight", 
    "b", "a"
  ];
  
  // Estado para rastrear a entrada do usuário
  const [inputHistory, setInputHistory] = useState<string[]>([]);

  // 1. Lógica para detectar o código
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Adiciona a tecla pressionada ao histórico
      const newHistory = [...inputHistory, e.key].slice(-konamiCode.length);
      setInputHistory(newHistory);

      // Verifica se bate com o código
      if (JSON.stringify(newHistory) === JSON.stringify(konamiCode)) {
        setShowMatrix(true);
        console.log("%c 🐇 Follow the white rabbit...", "color: #00ff00; font-size: 16px; font-weight: bold;");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [inputHistory]);

  // 2. Lógica da Animação Matrix (Canvas)
  useEffect(() => {
    if (!showMatrix || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    
    // Array para guardar a posição Y de cada coluna
    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      // Fundo preto com transparência para dar efeito de rastro
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0"; // Texto Verde Hacker
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    // Ajuste se redimensionar a tela
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [showMatrix]);

  if (!showMatrix) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-black">
      <canvas ref={canvasRef} className="block w-full h-full" />
      
      {/* Botão para Sair */}
      <button 
        onClick={() => setShowMatrix(false)}
        className="absolute top-8 right-8 p-2 bg-black/50 text-green-500 border border-green-500 rounded hover:bg-green-500 hover:text-black transition-all"
      >
        <X size={32} />
      </button>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-green-500 font-mono animate-pulse">
        SYSTEM HACKED // ACCESS GRANTED
      </div>
    </div>
  );
}