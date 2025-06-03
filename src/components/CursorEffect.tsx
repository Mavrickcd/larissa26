import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ParticleProps {
  x: number;
  y: number;
  index: number;
}

const Particle: React.FC<ParticleProps> = ({ x, y, index }) => {
  return (
    <motion.div
      className="absolute w-3 h-3 z-50 pointer-events-none"
      initial={{ x, y, opacity: 0.8, scale: 1 }}
      animate={{
        x,
        y,
        opacity: 0,
        scale: 0,
        rotate: Math.random() * 360,
      }}
      transition={{ duration: 1 }}
      style={{
        background: index % 2 === 0 ? '#e879f9' : '#FFD700',
        borderRadius: '50%',
      }}
    />
  );
};

const CursorEffect: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<{ x: number; y: number; id: number }[]>([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (counter % 6 === 0) { // Only add a particle every few movements to avoid too many
        setParticles(prevParticles => [
          ...prevParticles,
          { x: e.clientX, y: e.clientY, id: Date.now() }
        ]);
      }
      
      setCounter(prev => prev + 1);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [counter]);

  useEffect(() => {
    // Clean up particles after they've faded away
    if (particles.length > 30) {
      const timer = setTimeout(() => {
        setParticles(prevParticles => prevParticles.slice(10));
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [particles]);

  return (
    <>
      <motion.div
        className="fixed w-8 h-8 rounded-full border-2 border-primary-400 z-50 pointer-events-none"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
      />
      
      {particles.map((particle, index) => (
        <Particle 
          key={particle.id} 
          x={particle.x} 
          y={particle.y} 
          index={index} 
        />
      ))}
    </>
  );
};

export default CursorEffect;