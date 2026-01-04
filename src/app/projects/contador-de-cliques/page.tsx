'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export default function ContadorDeCliquesPage() {
  const [clicks, setClicks] = useState(0);
  const [streak, setStreak] = useState(0);
  const [lastClickTime, setLastClickTime] = useState<number | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [achievementsUnlocked, setAchievementsUnlocked] = useState<string[]>([]);
  const [motivationalMessage, setMotivationalMessage] = useState('');
  const [secretCodeClicks, setSecretCodeClicks] = useState<number[]>([]);
  const [easterEggUnlocked, setEasterEggUnlocked] = useState(false);

  const messages = [
    "Você está arrasando! 🔥",
    "Continue assim! 💪",
    "Incrível! ⚡",
    "Você é imparável! 🚀",
    "Sensacional! ✨"
  ];

  const achievements = [
    { id: 'first_click', name: 'Primeiro Passo', description: 'Clicou pela primeira vez', requirement: 1, icon: '🎯' },
    { id: 'ten_clicks', name: 'Aquecendo', description: 'Alcançou 10 cliques', requirement: 10, icon: '🔥' },
    { id: 'fifty_clicks', name: 'Dedicado', description: 'Alcançou 50 cliques', requirement: 50, icon: '💪' },
    { id: 'hundred_clicks', name: 'Centenário', description: 'Alcançou 100 cliques', requirement: 100, icon: '💯' },
    { id: 'speed_demon', name: 'Demônio da Velocidade', description: 'Streak de 5 cliques rápidos', requirement: 5, type: 'streak', icon: '⚡' },
    { id: 'easter_egg', name: 'Explorador Secreto', description: 'Descobriu o Easter Egg', requirement: 1, type: 'secret', icon: '🥚' }
  ];

  const createParticles = (x: number, y: number) => {
    for (let i = 0; i < 8; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const angle = (Math.PI * 2 * i) / 8;
      const distance = 100;
      particle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 12px;
        height: 12px;
        background: #e91e63;
        border-radius: 50%;
        pointer-events: none;
        animation: particle-fly 1s ease-out forwards;
      `;
      particle.style.setProperty('--tx', `${Math.cos(angle) * distance}px`);
      particle.style.setProperty('--ty', `${Math.sin(angle) * distance}px`);
      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 1000);
    }
  };

  const checkEasterEgg = (clicksArray: number[]) => {
    if (clicksArray.length >= 5 && !easterEggUnlocked) {
      const now = Date.now();
      const firstClick = clicksArray[0];
      
      if (firstClick && now - firstClick < 1000) {
        setEasterEggUnlocked(true);
        unlockAchievement('easter_egg');
      }
    }
  };

  const unlockAchievement = (id: string) => {
    if (!achievementsUnlocked.includes(id)) {
      setAchievementsUnlocked(prev => [...prev, id]);
    }
  };

  const checkAchievements = () => {
    achievements.forEach(achievement => {
      if (achievementsUnlocked.includes(achievement.id)) return;
      if (achievement.type === 'streak' && streak >= achievement.requirement) {
        unlockAchievement(achievement.id);
      } else if (!achievement.type && clicks >= achievement.requirement) {
        unlockAchievement(achievement.id);
      }
    });
  };

  const handleClick = (e: React.MouseEvent) => {
    const now = Date.now();
    setClicks(prev => prev + 1);

    if (lastClickTime && now - lastClickTime < 500) {
      setStreak(prev => prev + 1);
    } else {
      setStreak(1);
    }
    setLastClickTime(now);

    const msg = messages[Math.floor(Math.random() * messages.length)] || '';
    setMotivationalMessage(msg);
    setTimeout(() => setMotivationalMessage(''), 2000);

    createParticles(e.clientX, e.clientY);

    const newSecretClicks = [...secretCodeClicks, now];
    if (newSecretClicks.length > 5) newSecretClicks.shift();
    setSecretCodeClicks(newSecretClicks);
    checkEasterEgg(newSecretClicks);
  };

  useEffect(() => {
    checkAchievements();
  }, [clicks, streak]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (lastClickTime && Date.now() - lastClickTime > 1000) {
        setStreak(0);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, [lastClickTime]);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes particle-fly {
          0% { opacity: 1; transform: translate(0, 0) scale(1); }
          100% { opacity: 0; transform: translate(var(--tx), var(--ty)) scale(0); }
        }
      `}} />

      <Navbar />
      
      <div className="min-h-screen bg-linear-to-br from-purple-900 via-pink-800 to-red-900 pt-20 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          
          <Link href="/projects" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} />
            <span>Voltar para Projetos</span>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
              <div className="text-4xl mb-2">🎯</div>
              <div className="text-5xl font-bold text-white mb-2">{clicks}</div>
              <div className="text-white/70 text-sm">Total de Cliques</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
              <div className="text-4xl mb-2">{streak > 0 ? '🔥' : '❄️'}</div>
              <div className="text-5xl font-bold text-white mb-2">{streak}</div>
              <div className="text-white/70 text-sm">Sequência</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
              <div className="text-4xl mb-2">🏆</div>
              <div className="text-5xl font-bold text-white mb-2">{achievementsUnlocked.length}</div>
              <div className="text-white/70 text-sm">Conquistas</div>
            </div>

            <div 
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center cursor-pointer hover:bg-white/20 transition-colors"
              onClick={() => setSoundEnabled(!soundEnabled)}
            >
              <div className="text-4xl mb-2">{soundEnabled ? '🔊' : '🔇'}</div>
              <div className="text-xl font-bold text-white mb-2">{soundEnabled ? 'Ligado' : 'Desligado'}</div>
              <div className="text-white/70 text-sm">Som</div>
            </div>
          </div>

          <div className="text-center mb-12">
            <button
              onClick={handleClick}
              className="bg-linear-to-r from-purple-600 to-pink-600 text-white text-3xl font-bold px-20 py-16 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-transform"
            >
              ⚡<br/>CLIQUE AQUI!
            </button>
            {motivationalMessage && (
              <div className="mt-6 text-4xl font-bold text-white animate-bounce">
                {motivationalMessage}
              </div>
            )}
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">🏆 Suas Conquistas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map(achievement => (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    achievementsUnlocked.includes(achievement.id)
                      ? 'bg-linear-to-br from-yellow-200 to-orange-200 border-orange-400 shadow-lg'
                      : 'bg-gray-800/50 border-gray-600 opacity-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-4xl">{achievement.icon}</div>
                    <div>
                      <h3 className={`font-bold ${achievementsUnlocked.includes(achievement.id) ? 'text-gray-900' : 'text-white'}`}>
                        {achievement.name}
                      </h3>
                      <p className={`text-sm ${achievementsUnlocked.includes(achievement.id) ? 'text-gray-700' : 'text-gray-400'}`}>
                        {achievement.description}
                      </p>
                      {achievementsUnlocked.includes(achievement.id) && (
                        <span className="inline-block mt-2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          ✓ DESBLOQUEADO
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {!easterEggUnlocked && (
            <div className="text-center text-white/60 italic mt-8">
              💡 Dica: Tente clicar 5 vezes muito rápido...
            </div>
          )}

          {easterEggUnlocked && (
            <div className="bg-linear-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-center mt-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-2">🎉 PARABÉNS! 🎉</h3>
              <p className="text-white text-lg">Você descobriu o Easter Egg secreto! Você é incrível!</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}