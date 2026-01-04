'use client';

import React from 'react';

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Perguntas que geram dúvida */}
        <div className="mb-8 space-y-3">
          <p className="text-lg text-gray-400" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Seu site não está convertendo como deveria?
          </p>
          <p className="text-lg text-gray-400" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Precisa de uma interface que realmente engaje seus usuários?
          </p>
          <p className="text-lg text-cyan-400 font-semibold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Ou simplesmente quer transformar sua ideia em realidade?
          </p>
        </div>

        <h2 className="text-4xl font-bold mb-6 text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          Vamos trabalhar juntos?
        </h2>
        
        <p className="text-xl mb-4 text-gray-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          Crio soluções web modernas, funcionais e que <span className="text-cyan-400 font-semibold">resolvem problemas reais</span>.
        </p>
        
        <p className="text-lg mb-10 text-gray-400" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          Do código limpo ao design intuitivo, cada projeto recebe dedicação total para entregar resultados que importam.
        </p>
        
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          Iniciar Conversa
        </a>
        
        <p className="mt-6 text-sm text-gray-500" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          Resposta em até 24 horas
        </p>
      </div>
    </section>
  );
}