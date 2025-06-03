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

  const personalMessage = `My dearest, 

As you turn 26 today, I wanted to take a moment to tell you just how special you are to me. Your smile brightens my darkest days, your laugh is my favorite sound in the world, and your heart is the most beautiful thing I've ever known.

Every day with you is a gift. Your kindness, your strength, your passion for life - all of these things make you the incredible person that you are. I'm so grateful that our paths crossed and that I get to be a part of your journey.

May this year bring you all the happiness, success, and love that you deserve. May your dreams come true and your heart be full. And know that I'll be right there beside you, cheering you on, supporting you, and loving you every step of the way.

Happy Birthday, my love. Here's to many more birthdays together.

With all my heart,`;

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