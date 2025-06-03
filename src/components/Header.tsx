import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 fill-primary-500 text-primary-500" />
          <span className={`font-script text-xl ${scrolled ? 'text-primary-700' : 'text-white'}`}>
            Happy Birthday
          </span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#welcome" 
                className={`font-sans text-sm font-medium transition hover:text-primary-500 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#gallery" 
                className={`font-sans text-sm font-medium transition hover:text-primary-500 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Memories
              </a>
            </li>
            <li>
              <a 
                href="#timeline" 
                className={`font-sans text-sm font-medium transition hover:text-primary-500 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Our Story
              </a>
            </li>
            <li>
              <a 
                href="#message" 
                className={`font-sans text-sm font-medium transition hover:text-primary-500 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Message
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;