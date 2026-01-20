"use client";

import { useEffect } from "react";

export default function ConsoleSignature() {
  useEffect(() => {
    const styleTitle = [
      "font-size: 40px",
      "font-weight: bold",
      "font-family: monospace",
      "color: #3B82F6", // Azul Primary
      "text-shadow: 2px 2px 0px #000",
      "padding: 10px",
    ].join(";");

    const styleBody = [
      "font-size: 14px",
      "font-family: monospace",
      "color: #ffffff",
      "background-color: #1e1e1e",
      "padding: 10px",
      "border: 1px solid #3B82F6",
      "border-radius: 5px",
    ].join(";");

    const asciiArt = `
    PEDRO SCOTON
    Dev & Security Analyst
    `;

    console.clear();
    console.log(`%c${asciiArt}`, styleTitle);
    console.log(
      "%c 🕵️‍♂️ Found a bug? Or looking for a Security Analyst? \n 📩 Contact: pedroaugusto06082004@gmail.com ",
      styleBody
    );
    console.log("%c 🔒 System Status: SECURE ", "color: #00ff00; font-family: monospace; font-size: 12px;");

  }, []);

  return null; // Este componente não renderiza nada visual na tela
}