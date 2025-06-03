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
                
                <h3 className="font-script text-3xl text-accent-700 mb-4">A Special Gift For You</h3>
                
                <p className="font-sans text-gray-700 mb-6">
                  26 reasons why you're the most amazing person I know and why I'm so lucky to have you in my life...
                </p>
                
                <div className="max-h-60 overflow-y-auto text-left p-4 bg-accent-50 rounded-lg mb-6">
                  <ol className="list-decimal pl-5 space-y-2 font-sans text-gray-700">
                    <li>Your beautiful smile that lights up any room</li>
                    <li>Your kindness toward everyone you meet</li>
                    <li>Your incredible sense of humor</li>
                    <li>Your passion for the things you love</li>
                    <li>The way you always know how to make me feel better</li>
                    <li>Your intelligence and curiosity about the world</li>
                    <li>Your creativity that inspires me</li>
                    <li>Your thoughtfulness in the little things</li>
                    <li>Your strength in facing challenges</li>
                    <li>The way your eyes crinkle when you laugh</li>
                    <li>Your gentleness and compassion</li>
                    <li>Your adorable excitement over small joys</li>
                    <li>Your dedication to your goals</li>
                    <li>The comfort I feel just being near you</li>
                    <li>Your honesty and integrity</li>
                    <li>The way you dance like nobody's watching</li>
                    <li>Your amazing cooking skills</li>
                    <li>The perfect hugs you give</li>
                    <li>Your patience with me when I need it most</li>
                    <li>The sound of your laughter</li>
                    <li>Your unique perspective on life</li>
                    <li>The way you care for others</li>
                    <li>Your ability to find beauty in everything</li>
                    <li>The peace I feel when I'm with you</li>
                    <li>Your supportiveness in all my endeavors</li>
                    <li>Simply being you - the person I adore more than anyone</li>
                  </ol>
                </div>
                
                <p className="font-sans text-accent-700 italic">
                  "Here's to 26 amazing years of you making the world a better place, and to many more years of happiness ahead."
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