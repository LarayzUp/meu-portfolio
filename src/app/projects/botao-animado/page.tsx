'use client';

import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export default function BotaoAnimadoPage() {
  const [buttonState, setButtonState] = useState('Ação');
  const [buttonColor, setButtonColor] = useState('black');
  const [titulo, setTitulo] = useState('Interações do Botão');
  const [paragrafo, setParagrafo] = useState('Passe o mouse, clique e veja as mudanças!');

  const handleMouseEnter = () => {
    setButtonState('Você entrou');
    setButtonColor('green');
  };

  const handleMouseLeave = () => {
    setButtonState('Você saiu!');
    setButtonColor('black');
  };

  const handleClick = () => {
    setButtonState('Você clicou!');
    setButtonColor('red');
    setTitulo('🎉 Botão Clicado!');
    setParagrafo('Evento de clique detectado com sucesso!');
  };

  const resetButton = () => {
    setButtonState('Ação');
    setButtonColor('black');
    setTitulo('Interações do Botão');
    setParagrafo('Passe o mouse, clique e veja as mudanças!');
  };

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-linear-to-br from-sky-400 via-blue-400 to-cyan-500 pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Back Button */}
          <Link href="/projects" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} />
            <span>Voltar para Projetos</span>
          </Link>

          {/* Info Card */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 text-center transition-all duration-300">
              {titulo}
            </h1>
            <p className="text-lg md:text-xl text-yellow-600 font-semibold text-center transition-all duration-300">
              {paragrafo}
            </p>
          </div>

          {/* Main Interactive Section */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl text-center mb-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-700 mb-3">
                Teste as Interações!
              </h2>
              <p className="text-gray-600 text-sm">
                Experimente passar o mouse, clicar e sair do botão
              </p>
            </div>

            {/* Animated Button */}
            <button
              onClick={handleClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="px-10 py-5 rounded-xl text-xl font-bold transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg"
              style={{
                backgroundColor: buttonColor === 'green' ? '#10b981' :
                                 buttonColor === 'red' ? '#ef4444' : '#374151',
                color: 'white'
              }}
            >
              {buttonState}
            </button>

            {/* State Indicator */}
            <div className="mt-6 p-4 bg-gray-100 rounded-xl">
              <p className="text-xs text-gray-600 mb-2">Estado atual:</p>
              <div className="flex items-center justify-center gap-3">
                <div 
                  className="w-5 h-5 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: buttonColor === 'green' ? '#10b981' :
                                     buttonColor === 'red' ? '#ef4444' : '#374151'
                  }}
                />
                <span className="font-mono text-base font-bold" style={{ color: buttonColor }}>
                  {buttonColor.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Reset Button */}
            <button
              onClick={resetButton}
              className="mt-6 px-5 py-2 bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
            >
              🔄 Resetar
            </button>
          </div>

          {/* Events Log */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-2xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4">📋 Eventos JavaScript</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                <span className="text-xl">🟢</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">onMouseEnter</p>
                  <p className="text-xs text-gray-600">Mouse entra na área do botão</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                <span className="text-xl">🔴</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">onClick</p>
                  <p className="text-xs text-gray-600">Botão é clicado</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border-l-4 border-gray-500">
                <span className="text-xl">⚫</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">onMouseLeave</p>
                  <p className="text-xs text-gray-600">Mouse sai da área do botão</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}