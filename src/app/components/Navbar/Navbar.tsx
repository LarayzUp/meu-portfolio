'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Início', href: '/' },
    { label: 'Sobre', href: '/about' },
    { label: 'Projetos', href: '/projects' },
    { label: 'Contato', href: '/contact' },
    {label:  'Habilidades', href: '/skills'}
  ]
  ;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/70 backdrop-blur-xl shadow-2xl z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Nome */}
          <div className="shrink-0 flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-10 w-10 object-contain"
            />
            <Link href="/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Emylli Dev
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-md font-medium transition-colors"
                onClick={() => setIsOpen(false)}
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}