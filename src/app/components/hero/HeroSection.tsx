'use client';

import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  const [text, setText] = useState('');
  const fullText = 'Desenvolvedora Web | Criadora de Experiências Digitais';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .typing-cursor::after {
          content: '|';
          animation: blink 1s infinite;
          margin-left: 2px;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}} />

      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Olá, eu sou a{' '}
              <span className="text-cyan-400">
                Lara Sant&apos;Ana
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto typing-cursor min-h-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {text}
            </p>
            
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Transformo ideias em produtos digitais inovadores usando as tecnologias mais modernas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/projects"
                className="px-8 py-4 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                Ver Projetos
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-slate-800 text-cyan-400 border-2 border-cyan-600 rounded-lg font-semibold hover:bg-slate-700 transition-all duration-200 hover:scale-105"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                Entre em Contato
              </Link>
            </div>

            <div className="mt-16 animate-bounce">
              <a href="#about" className="inline-block text-gray-500 hover:text-cyan-400 transition-colors">
                <ArrowDown size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}