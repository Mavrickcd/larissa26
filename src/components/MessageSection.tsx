import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';
import { MessageSquare, Heart } from 'lucide-react';

const MessageSection: React.FC = () => {
  const [revealed, setRevealed] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const personalMessage = `Ma belle Menina Larisssa,

En ce jour où tu fêtes tes 26 ans, je voulais prendre un moment pour te dire à quel point tu es spécial pour moi. Ton sourire éclaire mes journées les plus sombres, ton rire est le son que je préfère au monde, et ton cœur est la plus belle chose que j’aie jamais connue.

Chaque jour à tes côtés est un cadeau. Ta gentillesse, ta force, ta passion pour la vie — tout cela fait de toi une personne incroyable. Je suis tellement reconnaissant(e) que nos chemins se soient croisés et de pouvoir faire partie de ton voyage.

Que cette année t’apporte tout le bonheur, le succès et l’amour que tu mérites. Que tes rêves se réalisent et que ton cœur soit rempli. Et sache que je serai là, à tes côtés, pour t’encourager, te soutenir et t’aimer à chaque étape.

Joyeux anniversaire, mon amour. À encore de nombreux anniversaires ensemble.

De tout mon cœur.

Je t'aime Larissa, hehe! Bonne fête de 26 :)

`;

  return (
    <section id="message" className="py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-12 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <MessageSquare className="w-10 h-10 text-primary-400 mx-auto mb-4" />
          <h2 className="font-script text-4xl md:text-5xl text-primary-800 mb-4">A Message From My Heart</h2>
          <p className="font-sans text-gray-600 max-w-2xl mx-auto">
            Words can never fully express what you mean to me, but here's a small glimpse into my heart.
          </p>
        </div>
        
        <div className={`max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12 transition-all duration-1000 delay-300 ${inView ? 'opacity-100' : 'opacity-0 scale-95'}`}>
          {!revealed ? (
            <div className="text-center">
              <p className="text-gray-700 font-sans mb-8">Click the button below to reveal a special message just for you.</p>
              <button
                onClick={() => setRevealed(true)}
                className="bg-primary-500 hover:bg-primary-600 text-white font-sans font-medium py-3 px-8 rounded-full inline-flex items-center shadow-lg hover:shadow-xl transition-all"
              >
                <Heart className="w-5 h-5 mr-2" />
                Reveal My Message
              </button>
            </div>
          ) : (
            <div className="font-sans text-gray-800 leading-relaxed message-container">
              <Typewriter
                options={{
                  delay: 30,
                  cursor: '',
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(personalMessage)
                    .start();
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
