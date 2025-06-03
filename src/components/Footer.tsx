import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-primary-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-4">
          <Heart className="w-5 h-5 fill-white text-white mr-2" />
          <p className="font-script text-xl">Happy 26th Birthday!</p>
          <Heart className="w-5 h-5 fill-white text-white ml-2" />
        </div>
        
        <p className="font-sans text-primary-100 text-sm">
         C'est ta fête, ta fête à toi toi! Bonne fête Menina :)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
