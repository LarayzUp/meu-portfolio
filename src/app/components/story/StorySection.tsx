'use client';

import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

export default function StorySection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          Sobre Mim
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6 text-center" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Desenvolvedora Frontend Júnior com projetos práticos que demonstram habilidades em manipulação do DOM e interfaces dinâmicas.
            </p>
            <p className="text-lg text-gray-300 mb-8 text-center" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Transformo ideias em código! Crio experiências visuais agradáveis usando HTML, 
              CSS e JavaScript. Cada projeto é uma oportunidade de aprender algo novo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-xl border-2 border-slate-700/50 hover:border-cyan-400 hover:bg-linear-to-br hover:from-cyan-900/20 hover:to-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 cursor-pointer group">
                <Code className="text-cyan-400 mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" size={40} />
                <h3 className="font-semibold text-white mb-2 group-hover:text-cyan-300 text-xl transition-colors duration-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Clean Code</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Código limpo e manutenível</p>
              </div>
              
              <div className="bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-xl border-2 border-slate-700/50 hover:border-cyan-400 hover:bg-linear-to-br hover:from-cyan-900/20 hover:to-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 cursor-pointer group">
                <Palette className="text-cyan-400 mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" size={40} />
                <h3 className="font-semibold text-white mb-2 group-hover:text-cyan-300 text-xl transition-colors duration-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>UI/UX</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Design intuitivo e bonito</p>
              </div>
              
              <div className="bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-xl border-2 border-slate-700/50 hover:border-cyan-400 hover:bg-linear-to-br hover:from-cyan-900/20 hover:to-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 cursor-pointer group">
                <Zap className="text-cyan-400 mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" size={40} />
                <h3 className="font-semibold text-white mb-2 group-hover:text-cyan-300 text-xl transition-colors duration-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Performance</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Rápido e otimizado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}