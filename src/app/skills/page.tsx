'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Code2, Palette, Wrench, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export default function SkillsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      color: 'cyan',
      skills: [
        { name: 'HTML5 & CSS3', level: 88 },
        { name: 'JavaScript', level: 80 },
        { name: 'React & Next.js', level: 73 },
        { name: 'TypeScript', level: 70 }
      ]
    },
    {
      icon: Palette,
      title: 'Design',
      color: 'purple',
      skills: [
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Responsive Design', level: 90 },
        { name: 'UI/UX', level: 75 }
      ]
    },
    {
      icon: Wrench,
      title: 'Ferramentas',
      color: 'green',
      skills: [
        { name: 'Git & GitHub', level: 75 },
        { name: 'VS Code', level: 85 },
        { name: 'DevTools', level: 80 }
      ]
    }
  ];

  useEffect(() => {
    const currentRef = sectionRef.current;
    
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progressBar {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .skill-category {
          opacity: 0;
          transform: translateY(30px);
        }

        .skill-category.visible {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .skill-category.visible:nth-child(1) {
          animation-delay: 0s;
        }

        .skill-category.visible:nth-child(2) {
          animation-delay: 0.15s;
        }

        .skill-category.visible:nth-child(3) {
          animation-delay: 0.3s;
        }

        .progress-bar {
          width: 0%;
        }

        .progress-bar.animate {
          animation: progressBar 1.5s ease-out forwards;
        }

        .floating-icon {
          animation: float 3s ease-in-out infinite;
        }
      `}} />

      <Navbar />
      
      <div className="min-h-screen bg-linear-to-b from-black via-slate-950 to-black pt-16">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="inline-block mb-4">
            <Sparkles className="text-cyan-400 floating-icon" size={40} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Minhas Habilidades
          </h1>
          <p className="text-xl text-gray-300 mb-4 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Desenvolvo soluções web com foco em <span className="text-cyan-400 font-semibold">qualidade</span>, <span className="text-purple-400 font-semibold">performance</span> e <span className="text-green-400 font-semibold">experiência do usuário</span>.
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Combino código limpo e organizado com design responsivo para criar interfaces que funcionam perfeitamente em qualquer dispositivo. Meu objetivo é entregar projetos que superem expectativas e agregem valor real ao seu negócio.
          </p>
        </div>

        {/* Skills Grid */}
        <section ref={sectionRef} className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillCategories.map((category, idx) => {
                const Icon = category.icon;
                
                return (
                  <div 
                    key={idx}
                    className={`skill-category group bg-linear-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl ${isVisible ? 'visible' : ''} ${
                      category.color === 'cyan' ? 'hover:border-cyan-400/50 hover:shadow-cyan-500/10' :
                      category.color === 'purple' ? 'hover:border-purple-400/50 hover:shadow-purple-500/10' :
                      'hover:border-green-400/50 hover:shadow-green-500/10'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                        category.color === 'cyan' ? 'bg-cyan-500/10 group-hover:bg-cyan-500/20' :
                        category.color === 'purple' ? 'bg-purple-500/10 group-hover:bg-purple-500/20' :
                        'bg-green-500/10 group-hover:bg-green-500/20'
                      }`}>
                        <Icon className={`transition-colors duration-300 ${
                          category.color === 'cyan' ? 'text-cyan-400' :
                          category.color === 'purple' ? 'text-purple-400' :
                          'text-green-400'
                        }`} size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        {category.title}
                      </h3>
                    </div>

                    <div className="space-y-5">
                      {category.skills.map((skill, skillIdx) => (
                        <div key={skillIdx}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-200 font-medium text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                              {skill.name}
                            </span>
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                              category.color === 'cyan' ? 'text-cyan-400 bg-cyan-400/10' :
                              category.color === 'purple' ? 'text-purple-400 bg-purple-400/10' :
                              'text-green-400 bg-green-400/10'
                            }`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-slate-700/30 rounded-full h-2 overflow-hidden">
                            <div 
                              className={`progress-bar h-full rounded-full transition-all duration-300 ${isVisible ? 'animate' : ''}`}
                              style={{ 
                                '--target-width': `${skill.level}%`,
                                backgroundColor: category.color === 'cyan' ? '#22d3ee' :
                                               category.color === 'purple' ? '#c084fc' :
                                               '#4ade80'
                              } as React.CSSProperties}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Como posso ajudar seu projeto?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-linear-to-br from-cyan-500/10 to-transparent p-6 rounded-xl border border-cyan-400/20">
              <h3 className="text-cyan-400 font-bold text-lg mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Código Limpo</h3>
              <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Estrutura organizada e fácil manutenção</p>
            </div>
            <div className="bg-linear-to-br from-purple-500/10 to-transparent p-6 rounded-xl border border-purple-400/20">
              <h3 className="text-purple-400 font-bold text-lg mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Design Responsivo</h3>
              <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Perfeito em mobile, tablet e desktop</p>
            </div>
            <div className="bg-linear-to-br from-green-500/10 to-transparent p-6 rounded-xl border border-green-400/20">
              <h3 className="text-green-400 font-bold text-lg mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Performance</h3>
              <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Rápido, otimizado e eficiente</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}