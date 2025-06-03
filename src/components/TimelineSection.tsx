import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { timelineEvents } from '../data/timeline';
import { Heart, Coffee, Star, Map, Cake } from 'lucide-react';
import { TimelineEvent as TimelineEventType } from '../types';

interface TimelineSectionProps {
  language: 'en' | 'pt' | 'fr';
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'heart':
      return <Heart className="w-6 h-6 text-primary-500" />;
    case 'coffee':
      return <Coffee className="w-6 h-6 text-primary-500" />;
    case 'star':
      return <Star className="w-6 h-6 text-primary-500" />;
    case 'map':
      return <Map className="w-6 h-6 text-primary-500" />;
    case 'cake':
      return <Cake className="w-6 h-6 text-primary-500" />;
    default:
      return <Heart className="w-6 h-6 text-primary-500" />;
  }
};

interface TimelineEventProps {
  event: TimelineEventType;
  index: number;
  language: 'en' | 'pt' | 'fr';
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ event, index, language }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isEven = index % 2 === 0;
  
  return (
    <div ref={ref} className={`flex w-full items-center justify-center mb-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        className={`w-full md:w-5/12 ${isEven ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}
      >
        <span className="font-sans text-sm text-primary-400 block mb-1">{event.date[language]}</span>
        <h3 className="font-script text-2xl text-primary-700 mb-2">{event.title[language]}</h3>
        <p className="font-sans text-gray-600">{event.description[language]}</p>
      </motion.div>
      
      <div className="flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center z-10 border-4 border-white shadow-md"
        >
          {getIcon(event.icon)}
        </motion.div>
      </div>
      
      <div className="w-full md:w-5/12 hidden md:block"></div>
    </div>
  );
};

const TimelineSection: React.FC<TimelineSectionProps> = ({ language }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="timeline" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-script text-4xl md:text-5xl text-primary-800 mb-4">Our Beautiful Journey</h2>
          <p className="font-sans text-gray-600 max-w-2xl mx-auto">
            Every moment with you has been an adventure. Here's a look back at some of our most special moments together.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-100 hidden md:block"></div>
          
          {/* Timeline events */}
          <div className="relative z-10">
            {timelineEvents.map((event, index) => (
              <TimelineEvent key={event.id} event={event} index={index} language={language} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;