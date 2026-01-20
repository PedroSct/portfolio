"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      // Mudei bg-primary para bg-blue-500 (azul vibrante) para testar
      // Mudei z-[60] para z-[9999] para garantir que fique acima da Navbar
      className="fixed top-0 left-0 right-0 h-1.5 bg-blue-500 origin-left z-[9999]"
      style={{ scaleX }}
    />
  );
}