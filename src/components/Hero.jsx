import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Developer', 'Designer', 'Creator', 'Innovator'];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        
        <div className="absolute top-20 left-10 md:left-20 w-48 md:w-72 h-48 md:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 md:right-20 w-48 md:w-72 h-48 md:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 left-20 md:left-40 w-48 md:w-72 h-48 md:h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-grid-pattern"></div>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto">
        
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="inline-block px-3 md:px-4 py-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium text-purple-200 border border-white border-opacity-20 mb-4 md:mb-6">
            👋 Hello, I'm
          </span>
        </div>

        <h1 className={`text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 md:mb-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-pulse">
            Jayesh
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Dhande
          </span>
        </h1>

        <div className={`text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 md:mb-8 h-12 md:h-16 lg:h-20 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="text-gray-300">Passionate Web </span>
          <span className="relative">
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              {words[currentWord]}
            </span>
            <span className="absolute -right-1 top-0 w-0.5 h-full bg-purple-400 animate-pulse"></span>
          </span>
        </div>

        <p className={`text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Crafting digital experiences that blend creativity with cutting-edge technology. 
          <span className="text-purple-300 font-semibold"> Let's build something amazing together.</span>
        </p>

        <div className={`flex justify-center items-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a 
            href="#resume" 
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <span>View Resume</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute top-20 right-10 md:right-20 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-40 left-10 md:left-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 right-5 md:right-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
    </section>
  );
};

export default Hero;