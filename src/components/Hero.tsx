
import React from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-block mb-6 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-sm font-medium animate-fade-in opacity-0 delay-100">
          Mobile App Developer
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in opacity-0 delay-200">
          <span className="text-gray-900">Hi, I'm </span>
          <span className="text-primary">Fikir Fikre</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in opacity-0 delay-300">
          I create exceptional mobile experiences with Flutter, focusing on 
          clean code, performance optimization, and engaging user interfaces.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0 delay-400">
          <a
            href="#contact"
            className="px-8 py-3 bg-primary text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-blue-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Get in Touch
          </a>
          <a
            href="#experience"
            className="px-8 py-3 border border-gray-300 rounded-full font-medium transition-all hover:border-primary hover:text-primary hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            View My Work
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-gray-500 hover:text-primary animate-bounce transition-colors"
      >
        <span className="mb-2">Scroll Down</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
};

export default Hero;
