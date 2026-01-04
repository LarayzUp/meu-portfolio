'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Heart, Target, Lightbulb, Users } from 'lucide-react';

export default function ValuesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const values = [
    {
      icon: Heart,
      title: 'Paixão',
      description: 'Amo o que faço e isso se reflete em cada linha de código'
    },
    {
      icon: Target,
      title: 'Foco',
      description: 'Comprometida em entregar resultados de qualidade'
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Sempre buscando as melhores soluções tecnológicas'
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Trabalho em equipe para alcançar objetivos comuns'
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
      { threshold: 0.2 }
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
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .value-card {
          opacity: 0;
          transform: translateX(-100px);
        }

        .value-card.visible {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .value-card.visible:nth-child(1) {
          animation-delay: 0s;
        }

        .value-card.visible:nth-child(2) {
          animation-delay: 0.15s;
        }

        .value-card.visible:nth-child(3) {
          animation-delay: 0.3s;
        }

        .value-card.visible:nth-child(4) {
          animation-delay: 0.45s;
        }
      `}</style>

      <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Meus Valores
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div 
                  key={idx}
                  className={`value-card bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-xl border-2 border-slate-700/50 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 text-center ${isVisible ? 'visible' : ''}`}
                >
                  <div className="bg-cyan-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-cyan-400" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-400" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}