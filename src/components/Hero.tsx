import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-700/90" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-8">
            <Shield className="h-8 w-8" />
            <h2 className="text-2xl font-bold">HerSaathi</h2>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Empowering Women Through Safety & Support</h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100">Your trusted companion for personal safety, community support, and emergency assistance.</p>
          <div className="flex flex-wrap gap-4">
            <button className="group bg-white text-purple-700 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition-colors flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full font-bold border-2 border-white hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}