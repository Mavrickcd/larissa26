import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, X } from 'lucide-react';

const EasterEgg: React.FC = () => {
  const [showBubble, setShowBubble] = useState(false);
  const [showGift, setShowGift] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 10000); // Show hint bubble after 10 seconds
    
    return () => clearTimeout(timer);
  }, []);

  const handleGiftClick = () => {
    setShowBubble(false);
    setShowGift(false);
    setShowContent(true);
  };

  const handleClose = () => {
    setShowContent(false);
    setShowGift(true);
  };

  return (
    <>
      {showGift && (
        <div className="fixed bottom-6 right-6 z-40">
          <AnimatePresence>
            {showBubble && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-3 w-48 mb-2"
              >
                <div className="relative">
                  <p className="text-sm text-gray-700 font-sans">
                    Psst! I have a special surprise for you. Click me!
                  </p>
                  <div className="absolute -bottom-6 right-4 w-4 h-4 bg-white transform rotate-45"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGiftClick}
            className="bg-accent-500 hover:bg-accent-600 text-white p-3 rounded-full shadow-lg"
          >
            <Gift className="w-6 h-6" />
          </motion.button>
        </div>
      )}
      
      <AnimatePresence>
        {showContent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden relative"
            >
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="p-6 pt-12 pb-8 text-center">
                <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Gift className="w-10 h-10 text-accent-500" />
                </div>
                
                <h3 className="font-script text-3xl text-accent-700 mb-4">AUm Presente Especial Para Você</h3>
                
                <p className="font-sans text-gray-700 mb-6">
                  26 razões pelas quais você é a pessoa mais incrível que eu conheço e por que sou tão sortudo(a) por ter você na minha vida...
                </p>
                
                <div className="max-h-60 overflow-y-auto text-left p-4 bg-accent-50 rounded-lg mb-6">
                  <ol className="list-decimal pl-5 space-y-2 font-sans text-gray-700">
                   <li>Seu sorriso lindo que ilumina qualquer ambiente</li>
                    <li>Sua gentileza com todos que encontra</li>
                    <li>Seu incrível senso de humor</li>
                    <li>Sua paixão pelas coisas que você ama</li>
                    <li>O jeito como sempre sabe me fazer sentir melhor</li>
                    <li>Sua inteligência e curiosidade sobre o mundo</li>
                    <li>Sua criatividade que me inspira</li>
                    <li>Seu carinho nos pequenos gestos</li>
                    <li>Sua força ao enfrentar desafios</li>
                    <li>O jeito que seus olhos se apertam quando você ri</li>
                    <li>Sua doçura e compaixão</li>
                    <li>Seu entusiasmo adorável com pequenas alegrias</li>
                    <li>Sua dedicação aos seus objetivos</li>
                    <li>O conforto que sinto só de estar perto de você</li>
                    <li>Sua honestidade e integridade</li>
                    <li>O jeito que você dança como se ninguém estivesse olhando</li>
                    <li>Seu talento incrível na cozinha</li>
                    <li>Os abraços perfeitos que você dá</li>
                    <li>Sua paciência comigo quando mais preciso</li>
                    <li>O som da sua risada</li>
                    <li>Sua perspectiva única sobre a vida</li>
                    <li>O jeito como você cuida dos outros</li>
                    <li>Sua capacidade de encontrar beleza em tudo</li>
                    <li>A paz que sinto quando estou com você</li>
                    <li>Seu apoio em tudo o que faço</li>
                    <li>Simplesmente ser você – a pessoa que eu mais adoro</li>

                  </ol>
                </div>
                
                <p className="font-sans text-accent-700 italic">
                  "Um brinde a 26 anos incríveis de você tornando o mundo um lugar melhor, e a muitos mais anos de felicidade pela frente."
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EasterEgg;
