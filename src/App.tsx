import React, { useState } from 'react';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import GallerySection from './components/GallerySection';
import TimelineSection from './components/TimelineSection';
import MessageSection from './components/MessageSection';
import Footer from './components/Footer';
import EasterEgg from './components/EasterEgg';
import CursorEffect from './components/CursorEffect';
import { Language } from './types';

function App() {
  const [language, setLanguage] = useState<Language>('pt');

  return (
    <div className="overflow-x-hidden">
      <CursorEffect />
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setLanguage('pt')}
          className={`px-3 py-1 rounded-full ${
            language === 'pt' ? 'bg-primary-500 text-white' : 'bg-white/80 text-primary-700'
          }`}
        >
          PT
        </button>
        <button
          onClick={() => setLanguage('fr')}
          className={`px-3 py-1 rounded-full ${
            language === 'fr' ? 'bg-primary-500 text-white' : 'bg-white/80 text-primary-700'
          }`}
        >
          FR
        </button>
      </div>
      
      <Header language={language} />
      
      <main>
        <WelcomeSection language={language} />
        <GallerySection language={language} />
        <TimelineSection language={language} />
        <MessageSection language={language} />
      </main>
      
      <Footer language={language} />
      <EasterEgg />
    </div>
  );
}

export default App