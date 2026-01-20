import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css"; 
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import ScrollProgress from "@/components/ui/ScrollProgress"; 
import BackToTop from "@/components/ui/BackToTop"; 
import ConsoleSignature from "@/components/ConsoleSignature"; 
import MatrixEasterEgg from "@/components/MatrixEasterEgg"; 

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Pedro Scoton | Dev & Security Analyst",
  description: "Portfólio de Pedro Scoton...",
  authors: [{ name: "Pedro Scoton" }],
  
  // ✅ ALTERAÇÃO AQUI: Apontando para a imagem estática na pasta public
  // Certifique-se de ter salvo o arquivo como 'favicon.png' na pasta public
  icons: {
    icon: '/favicon.png', 
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },

  openGraph: {
    title: "Pedro Scoton | Portfolio",
    description: "Conheça meus projetos de Segurança e Desenvolvimento.",
    url: "https://seu-portfolio.vercel.app",
    siteName: "Pedro Scoton Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pedro Scoton Portfolio Cover",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning={true}>
      
      <body 
        className={`${inter.variable} ${jetbrains.variable} font-sans bg-background text-text-primary antialiased`}
        suppressHydrationWarning={true}
      >
        <div className="bg-noise"></div>

        <NextIntlClientProvider messages={messages}>
          
          <ScrollProgress />
          <BackToTop />
          <ConsoleSignature /> 
          <MatrixEasterEgg /> 
          
          <Navbar locale={locale} />
          
          <main className="min-h-screen flex flex-col items-center overflow-x-hidden">
            {children}
            <Footer />
          </main>

        </NextIntlClientProvider>

        <Analytics />

        {/* SCRIPT DO CTF */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            /* ==================================================
               🕵️‍♂️ NICE TRY! 
               You found the hidden layer.
               
               Here is your flag: CTF{PEDRO_SEC_MASTER_2025}
               
               Keep looking, strictly no unauthorized access.
               ==================================================
            */
            console.log("🔒 Security protocols active.");
            `,
          }}
        />
      </body>
    </html>
  );
}