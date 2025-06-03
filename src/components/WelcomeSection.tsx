import React, { useState, useEffect } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const WelcomeSection: React.FC = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  useEffect(() => {
    // Trigger confetti after a short delay when component mounts
    const timer = setTimeout(() => {
      setIsConfettiActive(true);
      
      // Turn off after some time
      setTimeout(() => {
        setIsConfettiActive(false);
      }, 4000);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const canvasStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 100
  };

  const getConfettiProps = ({ width, height }) => ({
    particleCount: isConfettiActive ? 100 : 0,
    angle: 90,
    spread: 70,
    origin: { x: 0.5, y: 0.1 },
    colors: ['#f0abfc', '#e879f9', '#FFD700', '#fed7aa', '#fdba74'],
    drift: 0,
    ticks: 200,
    shapes: ['circle', 'square', 'heart'],
    scalar: 1.2,
  });

  return (
    <section 
      id="welcome" 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #9c4dcc 0%, #6d28d9 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <ReactCanvasConfetti refConfetti={() => {}} style={canvasStyles} onInit={getConfettiProps} />
      
      <div className="absolute inset-0 bg-hearts opacity-20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-4"
        >
          <Sparkles className="w-12 h-12 text-gold inline-block animate-spin-slow" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-script text-5xl md:text-7xl text-white mb-6 leading-tight"
        >
          Feliz aniversário de 26 anos, Menina Larissa
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <Heart className="w-5 h-5 fill-red-500 text-red-500" />
          <h2 className="font-sans text-2xl text-white font-light">Para a minha namorada incrível</h2>
          <Heart className="w-5 h-5 fill-red-500 text-red-500" />
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-white/90 font-sans max-w-2xl mx-auto mb-12 text-lg"
        >
          Um brinde à pessoa mais maravilhosa que eu conheço.  
        Você ilumina o meu mundo de formas que eu nunca imaginei ser possível.

        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <a 
            href="#gallery" 
            className="bg-white text-primary-700 font-sans font-medium py-3 px-8 rounded-full inline-flex items-center shadow-lg hover:shadow-xl transition-all hover:bg-primary-50 hover:text-primary-800"
          >
            Explore Our Memories
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent"></div>
    </section>
  );
};

export default WelcomeSection;
