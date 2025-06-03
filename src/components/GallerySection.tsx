import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useInView } from 'react-intersection-observer';
import { Camera } from 'lucide-react';

const photos = [
  {
    id: 1,
    url: "https://drive.google.com/uc?export=view&id=1oWw3hbb0T1Pd4Y97IvoxMFLQu1r3_Otg",
    alt: {
      en: "Adventure memory 1",
      fr: "Souvenir d'aventure 1",
      pt: "Memória de aventura 1",
    },
    caption: {
      en: "One of our favorite adventures",
      fr: "L'une de nos aventures préférées",
      pt: "Uma das nossas aventuras favoritas",
    },
  },
  {
    id: 2,
    url: "https://drive.google.com/uc?export=view&id=1t3N83gUHfun76RIPatyUZmLvgui1Qh2k",
    alt: {
      en: "Adventure memory 2",
      fr: "Souvenir d'aventure 2",
      pt: "Memória de aventura 2",
    },
    caption: {
      en: "Laughs and sunshine",
      fr: "Rires et soleil",
      pt: "Risadas e sol",
    },
  },
  {
    id: 3,
    url: "https://drive.google.com/uc?export=view&id=1qeBLa-Nxd2nrFZGCiz3yRLe5EjNlabon",
    alt: {
      en: "Adventure memory 3",
      fr: "Souvenir d'aventure 3",
      pt: "Memória de aventura 3",
    },
    caption: {
      en: "Our sweet moments",
      fr: "Nos doux moments",
      pt: "Nossos momentos doces",
    },
  },
  {
    id: 4,
    url: "https://drive.google.com/uc?export=view&id=1GnDStAfguvKpbjVLPU5R9kkBec4c6RvD",
    alt: {
      en: "Adventure memory 4",
      fr: "Souvenir d'aventure 4",
      pt: "Memória de aventura 4",
    },
    caption: {
      en: "Together around the world",
      fr: "Ensemble autour du monde",
      pt: "Juntos ao redor do mundo",
    },
  },
  {
    id: 5,
    url: "https://drive.google.com/uc?export=view&id=13C4j1KvPr7EGXC4UeN2isZp2NU_MJDVO",
    alt: {
      en: "Adventure memory 5",
      fr: "Souvenir d'aventure 5",
      pt: "Memória de aventura 5",
    },
    caption: {
      en: "A day to remember",
      fr: "Un jour à se rappeler",
      pt: "Um dia para lembrar",
    },
  },
  {
    id: 6,
    url: "https://drive.google.com/uc?export=view&id=1PqIxF9qpkVHhE9qXzi2gsArI3ZuziR-6",
    alt: {
      en: "Adventure memory 6",
      fr: "Souvenir d'aventure 6",
      pt: "Memória de aventura 6",
    },
    caption: {
      en: "So much love in one photo",
      fr: "Tellement d’amour en une photo",
      pt: "Tanto amor em uma foto só",
    },
  },
  {
    id: 7,
    url: "https://drive.google.com/uc?export=view&id=1laqRB5P-xukcreuyZBiylYr2ctL1AUpn",
    alt: {
      en: "Adventure memory 7",
      fr: "Souvenir d'aventure 7",
      pt: "Memória de aventura 7",
    },
    caption: {
      en: "Smiles that say it all",
      fr: "Des sourires qui en disent long",
      pt: "Sorrisos que dizem tudo",
    },
  },
  {
    id: 8,
    url: "https://drive.google.com/uc?export=view&id=1WbzcO5fpFrLmdPB8aGgTYZ0WNscEjQht",
    alt: {
      en: "Adventure memory 8",
      fr: "Souvenir d'aventure 8",
      pt: "Memória de aventura 8",
    },
    caption: {
      en: "Just us two, always",
      fr: "Juste nous deux, pour toujours",
      pt: "Só nós dois, sempre",
    },
  },
];

interface GallerySectionProps {
  language: 'en' | 'pt' | 'fr';
}

const GallerySection: React.FC<GallerySectionProps> = ({ language }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="gallery" 
      ref={ref}
      className="py-24 bg-gradient-to-b from-white to-primary-50"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <Camera className="w-10 h-10 text-primary-400 mx-auto mb-4" />
          <h2 className="font-script text-4xl md:text-5xl text-primary-800 mb-4">Our Precious Memories</h2>
          <p className="font-sans text-gray-600 max-w-2xl mx-auto">
            Each moment with you is a treasure I hold close to my heart. Here are some of my favorite memories we've shared together.
          </p>
        </div>
        
        <div className={`transition-all duration-1000 delay-300 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={4000}
            stopOnHover={true}
            swipeable={true}
            emulateTouch={true}
            className="max-w-4xl mx-auto"
          >
            {photos.map((photo) => (
              <div key={photo.id} className="relative">
                <img 
                  src={photo.url} 
                  alt={photo.alt[language]}
                  className="rounded-lg shadow-xl max-h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 text-left rounded-b-lg">
                  <p className="text-white font-sans text-lg md:text-xl">{photo.caption[language]}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
