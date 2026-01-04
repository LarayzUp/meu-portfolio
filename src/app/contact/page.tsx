'use client';

import React from 'react';
import { Mail, Linkedin, Github, Sparkles, Heart, Rocket, Star } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Vamos conversar sobre projetos?',
      value: 'emyllisantana429@gmail.com',
      link: 'https://mail.google.com/mail/u/0/?fs=1&to=emyllisantana429@gmail.com&tf=cm',
      color: 'emerald'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'Conecte-se comigo profissionalmente',
      value: '/Lara Santa Ana',
      link: 'https://linkedin.com/in/lara-santana-dev',
      color: 'sky'
    },
    {
      icon: Github,
      title: 'GitHub',
      description: 'Explore meus repositórios',
      value: 'LarayzUp',
      link: 'https://github.com/LarayzUp',
      color: 'violet'
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.4); }
          50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.8); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes linear-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .floating-icon {
          animation: float 4s ease-in-out infinite;
        }

        .contact-card {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .contact-card:nth-child(1) { animation-delay: 0.1s; }
        .contact-card:nth-child(2) { animation-delay: 0.2s; }
        .contact-card:nth-child(3) { animation-delay: 0.3s; }

        .cta-section {
          animation: fadeInUp 0.8s ease-out forwards;
          animation-delay: 0.5s;
          opacity: 0;
        }

        .pulse-button {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .twinkle-star {
          animation: twinkle 2s ease-in-out infinite;
        }

        .linear-animate {
          background-size: 200% 200%;
          animation: linear-shift 3s ease infinite;
        }
      `}} />

      <Navbar />
      
      <div className="min-h-screen bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50 pt-16">
        {/* Decorative Stars */}
        <div className="fixed top-20 left-10 twinkle-star" style={{ animationDelay: '0s' }}>
          <Star className="text-yellow-400" size={24} fill="currentColor" />
        </div>
        <div className="fixed top-40 right-20 twinkle-star" style={{ animationDelay: '0.5s' }}>
          <Star className="text-yellow-400" size={20} fill="currentColor" />
        </div>
        <div className="fixed bottom-40 left-1/4 twinkle-star" style={{ animationDelay: '1s' }}>
          <Star className="text-yellow-400" size={16} fill="currentColor" />
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-block mb-6">
            <Sparkles className="text-emerald-500 floating-icon" size={56} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600 mb-6 linear-animate" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Vamos Transformar Ideias em Realidade?
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Cada grande projeto começa com uma <span className="text-emerald-600 font-bold">conversa</span>. 
            Estou pronta para embarcar nessa jornada com você! ✨
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              
              return (
                <a
                  key={idx}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card group"
                >
                  <div className={`bg-white/90 backdrop-blur-sm p-8 rounded-3xl border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 ${
                    method.color === 'emerald' ? 'border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-200' :
                    method.color === 'sky' ? 'border-sky-200 hover:border-sky-400 hover:shadow-sky-200' :
                    'border-violet-200 hover:border-violet-400 hover:shadow-violet-200'
                  }`}>
                    {/* Icon */}
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                      method.color === 'emerald' ? 'bg-emerald-100' :
                      method.color === 'sky' ? 'bg-sky-100' :
                      'bg-violet-100'
                    }`}>
                      <Icon className={
                        method.color === 'emerald' ? 'text-emerald-600' :
                        method.color === 'sky' ? 'text-sky-600' :
                        'text-violet-600'
                      } size={40} />
                    </div>

                    {/* Title */}
                    <h3 className={`text-2xl font-bold mb-2 text-center transition-colors ${
                      method.color === 'emerald' ? 'text-emerald-700' :
                      method.color === 'sky' ? 'text-sky-700' :
                      'text-violet-700'
                    }`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {method.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 text-center leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {method.description}
                    </p>

                    {/* Value */}
                    <div className={`text-sm font-semibold px-4 py-2 rounded-full text-center ${
                      method.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' :
                      method.color === 'sky' ? 'bg-sky-100 text-sky-700' :
                      'bg-violet-100 text-violet-700'
                    }`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {method.value}
                    </div>

                    {/* Hover Effect */}
                    <div className={`mt-4 text-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      method.color === 'emerald' ? 'text-emerald-600' :
                      method.color === 'sky' ? 'text-sky-600' :
                      'text-violet-600'
                    }`} style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Clique para conectar →
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* CTA Section - Email Button */}
        <div className="cta-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-linear-to-br from-emerald-300/30 to-teal-300/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-linear-to-br from-cyan-300/30 to-sky-300/30 rounded-full blur-3xl"></div>
            
            {/* Main CTA Card */}
            <div className="relative bg-linear-to-br from-white via-emerald-50/50 to-teal-50/50 backdrop-blur-sm p-12 rounded-3xl border-2 border-emerald-200/60 shadow-2xl">
              <div className="flex justify-center mb-6">
                <div className="bg-linear-to-br from-emerald-100 to-teal-100 w-20 h-20 rounded-full flex items-center justify-center">
                  <Rocket className="text-emerald-600" size={40} />
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Pronta para Começar!
              </h2>
              
              <p className="text-center text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Acredito que <span className="text-emerald-600 font-bold">juntos</span> podemos criar algo incrível! 
                Se você tem uma ideia, um projeto ou apenas quer bater um papo sobre desenvolvimento, 
                <span className="text-teal-600 font-bold"> estou a um clique de distância</span>. 🚀
              </p>

            

              {/* Email Button */}
              <div className="text-center">
                <a
                  href="mailto:emyllisantana429@gmail.com?subject=Olá! Vamos conversar?&body=Olá Lara, gostaria de conversar sobre..."
                  className="pulse-button inline-flex items-center gap-3 bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-xl font-bold px-12 py-5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  <Mail size={28} />
                  <span>Enviar Email Agora</span>
                </a>
                <p className="mt-4 text-sm text-gray-500" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Respondo em até 24 horas! ⚡
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Motivational Quote */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-linear-to-r from-emerald-100 via-teal-100 to-cyan-100 rounded-3xl p-10 text-center border-2 border-emerald-200 shadow-xl">
            <blockquote className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 italic" style={{ fontFamily: 'Georgia, serif' }}>
              "O único jeito de fazer um ótimo trabalho é amar o que você faz."
            </blockquote>
            <footer className="text-gray-600 font-semibold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              — Steve Jobs
            </footer>
            
          </div>
        </div>

        {/* Bottom Spacer */}
        <div className="pb-20"></div>
      </div>
      
      <Footer />
    </>
  );
}