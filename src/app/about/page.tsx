'use client';

import React from 'react';
import { Code, Palette, Zap, BookOpen, Rocket, Heart } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export default function AboutPage() {
  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <Navbar />
      
      <div className="min-h-screen bg-black">
        {/* Header */}
        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-black pointer-events-none"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 animate-float" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Sobre <span className="text-cyan-400">Mim</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Conheça um pouco mais sobre minha jornada como desenvolvedora
            </p>
          </div>
        </section>

        {/* Minha História - Timeline */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Minha Jornada
            </h2>
            
            <div className="max-w-5xl mx-auto">
              {/* Timeline Item 1 - 2024: Primeiro Hello World */}
              <div className="flex gap-8 mb-16 group">
                <div className="flex flex-col items-center">
                  <div className="bg-cyan-500 w-4 h-4 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <div className="w-0.5 h-full bg-linear-to-b from-cyan-500 to-transparent"></div>
                </div>
                <div className="flex-1 pb-16">
                  <div className="bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-xl border-2 border-slate-700/50 hover:border-cyan-400 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/20">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-cyan-400 font-bold text-2xl" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>2024</span>
                      <div className="h-px flex-1 bg-linear-to-r from-cyan-500/50 to-transparent"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      O Começo de Tudo
                    </h3>
                    <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Tudo começou com um simples curso de JavaScript. Quando escrevi meu primeiro "Hello World" e vi aquelas palavras aparecerem na tela, algo clicou dentro de mim. Era mágico pensar que eu havia criado aquilo, mesmo que fosse algo tão básico.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 - Mergulho Profundo */}
              <div className="flex gap-8 mb-16 group">
                <div className="flex flex-col items-center">
                  <div className="bg-cyan-500 w-4 h-4 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <div className="w-0.5 h-full bg-linear-to-b from-cyan-500 to-transparent"></div>
                </div>
                <div className="flex-1 pb-16">
                  <div className="bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-xl border-2 border-slate-700/50 hover:border-cyan-400 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/20">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-cyan-400 font-bold text-2xl" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>2024</span>
                      <div className="h-px flex-1 bg-linear-to-r from-cyan-500/50 to-transparent"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      A Paixão Nasceu
                    </h3>
                    <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      A partir daquele momento, mergulhei de cabeça. Cada nova linha de código era uma descoberta, cada bug um desafio que eu estava determinada a vencer. A programação se tornou mais do que um interesse - virou uma paixão que me fazia passar horas estudando, testando, errando e aprendendo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 - Projetos */}
              <div className="flex gap-8 mb-16 group">
                <div className="flex flex-col items-center">
                  <div className="bg-cyan-500 w-4 h-4 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <div className="w-0.5 h-full bg-linear-to-b from-cyan-500 to-transparent"></div>
                </div>
                <div className="flex-1 pb-16">
                  <div className="bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-xl border-2 border-slate-700/50 hover:border-cyan-400 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/20">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-cyan-400 font-bold text-2xl" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>2024</span>
                      <div className="h-px flex-1 bg-linear-to-r from-cyan-500/50 to-transparent"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Mãos à Obra
                    </h3>
                    <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Ao longo de 2024, desenvolvi diversos projetos para praticar e consolidar meu aprendizado. Cada um deles me ensinou algo novo e me fez perceber o quanto eu realmente amava criar soluções através do código.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 4 - 2025: Bolsa */}
              <div className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="bg-cyan-500 w-4 h-4 rounded-full group-hover:scale-150 transition-transform duration-300 animate-pulse"></div>
                </div>
                <div className="flex-1">
                  <div className="bg-linear-to-br from-cyan-900/30 to-slate-900/50 backdrop-blur-sm p-6 rounded-xl border-2 border-cyan-500/50 hover:border-cyan-400 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/40">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-cyan-400 font-bold text-2xl" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>2025</span>
                      <div className="h-px flex-1 bg-linear-to-r from-cyan-500/50 to-transparent"></div>
                      <span className="text-cyan-400 text-sm font-semibold px-3 py-1 bg-cyan-500/10 rounded-full" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>ATUAL</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Nova Conquista
                    </h3>
                    <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Recebi uma das melhores notícias da minha vida: conquistei uma bolsa para cursar Ciência da Computação. Foi a validação de que todo o esforço e dedicação estavam valendo a pena. Agora, sigo evoluindo como desenvolvedora, sempre curiosa e pronta para novos desafios.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Importância das Tecnologias */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Por que a tecnologia <span className="text-purple-400">importa</span>?
            </h2>
            <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto text-lg" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              A escolha certa de tecnologias pode ser o diferencial entre um projeto mediano e um produto excepcional
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Card 1 - Performance */}
              <div className="bg-linear-to-br from-purple-900/20 to-slate-900/50 backdrop-blur-sm p-6 rounded-xl border-2 border-purple-700/30 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Performance que Converte
                </h3>
                <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Um site 1 segundo mais rápido pode aumentar suas conversões em até 27%. Tecnologias modernas garantem velocidade e fluidez que mantém seus usuários engajados.
                </p>
              </div>

              {/* Card 2 - Experiência */}
              <div className="bg-linear-to-br from-blue-900/20 to-slate-900/50 backdrop-blur-sm p-6 rounded-xl border-2 border-blue-700/30 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Experiência Memorável
                </h3>
                <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Interfaces responsivas e intuitivas não são luxo, são necessidade. Uma boa experiência do usuário transforma visitantes em clientes fiéis.
                </p>
              </div>

              {/* Card 3 - Escalabilidade */}
              <div className="bg-linear-to-br from-green-900/20 to-slate-900/50 backdrop-blur-sm p-6 rounded-xl border-2 border-green-700/30 hover:border-green-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20">
                <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="text-green-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Crescimento Sustentável
                </h3>
                <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Código bem estruturado permite que seu negócio cresça sem limitações técnicas. Escalabilidade é pensar no futuro desde o primeiro dia.
                </p>
              </div>

              {/* Card 4 - SEO */}
              <div className="bg-linear-to-br from-orange-900/20 to-slate-900/50 backdrop-blur-sm p-6 rounded-xl border-2 border-orange-700/30 hover:border-orange-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20">
                <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="text-orange-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Visibilidade Online
                </h3>
                <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Sites otimizados aparecem no Google. Tecnologias modernas facilitam SEO técnico, aumentando sua visibilidade e alcance orgânico.
                </p>
              </div>

              {/* Card 5 - Segurança */}
              <div className="bg-linear-to-br from-red-900/20 to-slate-900/50 backdrop-blur-sm p-6 rounded-xl border-2 border-red-700/30 hover:border-red-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/20">
                <div className="bg-red-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Code className="text-red-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Proteção Total
                </h3>
                <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Segurança não é opcional. Frameworks atualizados e boas práticas protegem seus dados e a confiança dos seus clientes.
                </p>
              </div>

              {/* Card 6 - ROI */}
              <div className="bg-linear-to-br from-yellow-900/20 to-slate-900/50 backdrop-blur-sm p-6 rounded-xl border-2 border-yellow-700/30 hover:border-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20">
                <div className="bg-yellow-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="text-yellow-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Retorno Garantido
                </h3>
                <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Investir em tecnologia de qualidade reduz custos de manutenção e gera resultados mensuráveis. Seu projeto entrega valor desde o início.
                </p>
              </div>
            </div>

            {/* CTA interno */}
            <div className="mt-16 text-center max-w-3xl mx-auto">
              <div className="bg-linear-to-r from-purple-900/30 via-blue-900/30 to-cyan-900/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30">
                <p className="text-xl text-gray-300 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  <span className="text-purple-400 font-semibold">A tecnologia certa</span> não é um custo, é um <span className="text-cyan-400 font-semibold">investimento estratégico</span> que transforma ideias em soluções que realmente funcionam.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Vamos conversar?
            </h2>
            <p className="text-xl mb-8 text-gray-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Estou sempre aberta a novas oportunidades e colaborações.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Entrar em Contato
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}