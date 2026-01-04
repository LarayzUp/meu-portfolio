'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Sun, Cloud, Moon } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export default function HoraSincronizadaPage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');
  const [period, setPeriod] = useState<'morning' | 'afternoon' | 'night'>('morning');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      updateGreeting(now.getHours());
    }, 1000);

    updateGreeting(new Date().getHours());

    return () => clearInterval(timer);
  }, []);

  const updateGreeting = (hour: number) => {
    if (hour >= 0 && hour < 12) {
      setGreeting('Bom dia!');
      setPeriod('morning');
    } else if (hour >= 12 && hour < 18) {
      setGreeting('Boa tarde!');
      setPeriod('afternoon');
    } else {
      setGreeting('Boa noite!');
      setPeriod('night');
    }
  };

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const dayNames = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  const dayName = dayNames[currentTime.getDay()];
  const day = currentTime.getDate();
  const month = monthNames[currentTime.getMonth()];
  const year = currentTime.getFullYear();

  const getBackgroundlinear = () => {
    if (period === 'morning') {
      return 'from-orange-300 via-yellow-200 to-blue-300';
    } else if (period === 'afternoon') {
      return 'from-blue-400 via-cyan-300 to-yellow-300';
    } else {
      return 'from-indigo-900 via-purple-800 to-pink-900';
    }
  };

  const getPeriodIcon = () => {
    if (period === 'morning') return <Sun className="text-yellow-500" size={48} />;
    if (period === 'afternoon') return <Cloud className="text-blue-500" size={48} />;
    return <Moon className="text-purple-300" size={48} />;
  };

  const getTextColor = () => {
    return period === 'night' ? 'text-white' : 'text-gray-800';
  };

  return (
    <>
      <Navbar />
      
      <div className={`min-h-screen bg-linear-to-br ${getBackgroundlinear()} pt-20 pb-20 transition-all duration-1000`}>
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Back Button */}
          <Link href="/projects" className={`inline-flex items-center gap-2 ${period === 'night' ? 'text-white/80 hover:text-white' : 'text-gray-700/80 hover:text-gray-900'} mb-8 transition-colors`}>
            <ArrowLeft size={20} />
            <span>Voltar para Projetos</span>
          </Link>

          {/* Main Clock Card */}
          <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-10 shadow-2xl text-center mb-8 border border-white/30">
            
            {/* Period Icon */}
            <div className="mb-6 flex justify-center animate-pulse">
              {getPeriodIcon()}
            </div>

            {/* Digital Clock */}
            <div className={`text-6xl md:text-7xl font-bold ${getTextColor()} mb-6 font-mono tracking-wide`}>
              {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </div>

            {/* Greeting */}
            <h1 className={`text-3xl md:text-4xl font-bold ${getTextColor()} mb-3`}>
              {greeting}
            </h1>

            {/* Date Info */}
            <p className={`text-lg md:text-xl ${getTextColor()} opacity-90`}>
              {dayName}, {day} de {month} de {year}
            </p>
          </div>

          {/* Time Details Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {/* Hours */}
            <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/30">
              <div className={`text-4xl font-bold ${getTextColor()} mb-2`}>
                {String(hours).padStart(2, '0')}
              </div>
              <p className={`${getTextColor()} opacity-80 text-sm`}>Horas</p>
            </div>

            {/* Minutes */}
            <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/30">
              <div className={`text-4xl font-bold ${getTextColor()} mb-2`}>
                {String(minutes).padStart(2, '0')}
              </div>
              <p className={`${getTextColor()} opacity-80 text-sm`}>Minutos</p>
            </div>

            {/* Seconds */}
            <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/30">
              <div className={`text-4xl font-bold ${getTextColor()} mb-2`}>
                {String(seconds).padStart(2, '0')}
              </div>
              <p className={`${getTextColor()} opacity-80 text-sm`}>Segundos</p>
            </div>
          </div>

          {/* Period Info */}
          <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/30">
            <h3 className={`text-xl font-bold ${getTextColor()} mb-4`}>
              Período do Dia
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3">
              <div className={`px-4 py-2 rounded-lg transition-all text-sm ${period === 'morning' ? 'bg-yellow-400 text-gray-900 font-bold scale-105' : 'bg-white/10 text-white/50'}`}>
                ☀️ Manhã (0h - 12h)
              </div>
              <div className={`px-4 py-2 rounded-lg transition-all text-sm ${period === 'afternoon' ? 'bg-blue-400 text-gray-900 font-bold scale-105' : 'bg-white/10 text-white/50'}`}>
                🌤️ Tarde (12h - 18h)
              </div>
              <div className={`px-4 py-2 rounded-lg transition-all text-sm ${period === 'night' ? 'bg-purple-600 text-white font-bold scale-105' : 'bg-white/10 text-white/50'}`}>
                🌙 Noite (18h - 24h)
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className={`text-center mt-6 ${getTextColor()} opacity-70 text-sm`}>
            <p>⏰ Relógio sincronizado em tempo real com seu dispositivo</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}