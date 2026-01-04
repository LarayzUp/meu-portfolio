'use client';

import React from 'react';
import { Code2, Clock, MousePointer2, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'Contador de Cliques',
      slug: 'contador-de-cliques',
      description: 'Jogo interativo com sistema de conquistas, streak de cliques e easter eggs. Demonstra manipulação avançada de eventos e estado em JavaScript.',
      icon: MousePointer2,
      color: 'cyan',
      tech: ['JavaScript', 'HTML', 'CSS', 'Event Handling'],
      features: ['Sistema de conquistas', 'Streak de cliques', 'Easter eggs', 'Partículas animadas']
    },
    {
      id: 2,
      title: 'Botão Animado',
      slug: 'botao-animado',
      description: 'Botão interativo que responde a diferentes eventos do mouse (hover, click, leave). Demonstra domínio de event listeners e manipulação do DOM.',
      icon: Sparkles,
      color: 'purple',
      tech: ['HTML', 'CSS', 'JavaScript', 'DOM'],
      features: ['Eventos de mouse', 'Mudança dinâmica de estado', 'Animações CSS', 'Feedback visual']
    },
    {
      id: 3,
      title: 'Hora Sincronizada',
      slug: 'hora-sincronizada',
      description: 'Relógio digital com sincronização em tempo real e background dinâmico que muda conforme o período do dia. Utiliza JavaScript Date API.',
      icon: Clock,
      color: 'green',
      tech: ['JavaScript', 'HTML', 'CSS', 'Date API'],
      features: ['Atualização em tempo real', 'Background dinâmico', 'Saudação por período', 'Design responsivo']
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .floating-icon {
          animation: float 3s ease-in-out infinite;
        }

        .project-card {
          animation: slideUp 0.5s ease-out forwards;
        }

        .project-card:nth-child(1) { animation-delay: 0.1s; }
        .project-card:nth-child(2) { animation-delay: 0.2s; }
        .project-card:nth-child(3) { animation-delay: 0.3s; }
      `}} />

      <Navbar />
      
      <div className="min-h-screen bg-linear-to-b from-black via-slate-950 to-black pt-16">
        
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="inline-block mb-4">
            <Code2 className="text-cyan-400 floating-icon" size={40} />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Meus Projetos
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Projetos práticos que demonstram minhas habilidades em{' '}
            <span className="text-cyan-400 font-semibold">JavaScript</span>,{' '}
            <span className="text-purple-400 font-semibold">CSS</span> e{' '}
            <span className="text-green-400 font-semibold">manipulação do DOM</span>. 
            Clique em qualquer projeto para experimentar ao vivo!
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {projects.map((project) => {
              const Icon = project.icon;
              const isCyan = project.color === 'cyan';
              const isPurple = project.color === 'purple';
              const isGreen = project.color === 'green';
              
              return (
                <Link
                  key={project.id}
                  href={`/projects/${project.slug}`}
                  className="project-card group cursor-pointer block"
                >
                  <div className={`
                    bg-linear-to-br backdrop-blur-md p-6 rounded-2xl border-2 
                    transition-all duration-500 hover:scale-105 hover:shadow-2xl h-full
                    ${isCyan ? 'from-cyan-500/20 to-cyan-600/10 border-cyan-400/50 hover:border-cyan-400 hover:shadow-cyan-500/20' : ''}
                    ${isPurple ? 'from-purple-500/20 to-purple-600/10 border-purple-400/50 hover:border-purple-400 hover:shadow-purple-500/20' : ''}
                    ${isGreen ? 'from-green-500/20 to-green-600/10 border-green-400/50 hover:border-green-400 hover:shadow-green-500/20' : ''}
                  `}>
                    
                    {/* Icon */}
                    <div className={`
                      w-16 h-16 rounded-xl flex items-center justify-center mb-6 
                      transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6
                      ${isCyan ? 'bg-cyan-500/10' : ''}
                      ${isPurple ? 'bg-purple-500/10' : ''}
                      ${isGreen ? 'bg-green-500/10' : ''}
                    `}>
                      <Icon 
                        className={`
                          ${isCyan ? 'text-cyan-400' : ''}
                          ${isPurple ? 'text-purple-400' : ''}
                          ${isGreen ? 'text-green-400' : ''}
                        `} 
                        size={32} 
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`
                            text-xs font-semibold px-3 py-1 rounded-full
                            ${isCyan ? 'bg-cyan-500/10 text-cyan-400' : ''}
                            ${isPurple ? 'bg-purple-500/10 text-purple-400' : ''}
                            ${isGreen ? 'bg-green-500/10 text-green-400' : ''}
                          `}
                          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-1 mb-4">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                          <span className={`
                            ${isCyan ? 'text-cyan-400' : ''}
                            ${isPurple ? 'text-purple-400' : ''}
                            ${isGreen ? 'text-green-400' : ''}
                          `}>✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className={`
                      flex items-center gap-2 font-semibold text-sm 
                      group-hover:gap-3 transition-all mt-auto
                      ${isCyan ? 'text-cyan-400' : ''}
                      ${isPurple ? 'text-purple-400' : ''}
                      ${isGreen ? 'text-green-400' : ''}
                    `} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      <span>Experimentar agora</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                    
                  </div>
                </Link>
              );
            })}
            
          </div>
        </div>

        {/* Fun CTA */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="bg-linear-to-r from-cyan-500/10 via-purple-500/10 to-green-500/10 p-8 rounded-2xl border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              ✨ Cada projeto é uma história
            </h2>
            <p className="text-gray-300 text-lg mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Desenvolvidos com atenção aos detalhes, focando em{' '}
              <span className="text-cyan-400">interatividade</span>,{' '}
              <span className="text-purple-400">design</span> e{' '}
              <span className="text-green-400">funcionalidade</span>.
            </p>
          </div>
        </div>
        
      </div>

      <Footer />
    </>
  );
}
