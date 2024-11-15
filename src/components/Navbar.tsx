import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white text-gray-900 shadow-lg' : 'bg-transparent text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Shield className={`h-8 w-8 ${isScrolled ? 'text-purple-600' : 'text-white'}`} />
            <span className="ml-2 text-2xl font-bold">HerSaathi</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="hover:text-purple-500 px-3 py-2 transition-colors">Home</a>
              <a href="#features" className="hover:text-purple-500 px-3 py-2 transition-colors">Features</a>
              <a href="#contact" className="hover:text-purple-500 px-3 py-2 transition-colors">Contact</a>
              <button className={`px-6 py-2 rounded-full font-medium ${
                isScrolled 
                  ? 'bg-purple-600 text-white hover:bg-purple-700' 
                  : 'bg-white text-purple-600 hover:bg-purple-50'
              } transition-colors`}>
                Get Help
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white text-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block hover:bg-purple-50 px-3 py-2 rounded-md">Home</a>
            <a href="#features" className="block hover:bg-purple-50 px-3 py-2 rounded-md">Features</a>
            <a href="#contact" className="block hover:bg-purple-50 px-3 py-2 rounded-md">Contact</a>
            <button className="w-full text-left bg-purple-600 text-white px-3 py-2 rounded-md hover:bg-purple-700">
              Get Help
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}