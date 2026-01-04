'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/LarayzUp', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/lara-santana-dev', label: 'LinkedIn' },
    { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=laralp130@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Sobre Mim
            </h3>
            <p className="text-gray-400" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Desenvolvedora apaixonada por criar soluções web modernas e eficientes.
              Transformando ideias em realidade através do código.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Início
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-cyan-400 transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-gray-400 hover:text-cyan-400 transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Habilidades
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Conecte-se
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800 p-3 rounded-full hover:bg-cyan-600 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            © {currentYear} Feito com <Heart size={16} className="text-red-500" fill="currentColor" /> 
          </p>
        </div>
      </div>
    </footer>
  );
}