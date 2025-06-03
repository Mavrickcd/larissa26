import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useInView } from 'react-intersection-observer';
import { Camera } from 'lucide-react';

const photos = [
  {
    id: 1,
    url: "https://i.imgur.com/Vdx6kDf.jpg",
    alt: {
      en: "Memory 1",
      fr: "Souvenir 1",
      pt: "Memória 1",
    },
    caption: {
      en: "Sunshine and smiles",
      fr: "Soleil et sourires",
      pt: "Sol e sorrisos",
    },
  },
  {
    id: 2,
    url: "https://i.imgur.com/cvwBVc3.jpg",
    alt: {
      en: "Memory 2",
      fr: "Souvenir 2",
      pt: "Memória 2",
    },
    caption: {
      en: "Adventure time",
      fr: "Moment d’aventure",
      pt: "Hora da aventura",
    },
  },
  {
    id: 3,
    url: "https://i.imgur.com/PZUKgyP.jpg",
    alt: {
      en: "Memory 3",
      fr: "Souvenir 3",
      pt: "Memória 3",
    },
    caption: {
      en: "Our sweet moments",
      fr: "Nos doux moments",
      pt: "Nossos momentos doces",
    },
  },
  {
    id: 4,
    url: "https://i.imgur.com/sFoZVXo.jpg",
    alt: {
      en: "Memory 4",
      fr: "Souvenir 4",
      pt: "Memória 4",
    },
    caption: {
      en: "One of our favorite views",
      fr: "L’une de nos vues préférées",
      pt: "Uma das nossas vistas favoritas",
    },
  },
  {
    id: 5,
    url: "https://i.imgur.com/I1FtfM8.jpg",
    alt: {
      en: "Memory 5",
      fr: "Souvenir 5",
      pt: "Memória 5",
    },
    caption: {
      en: "So much love",
      fr: "Tellement d’amour",
      pt: "Tanto amor",
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
          <h2 className="font-script text-4xl md:text-5xl text-primary-800 mb-4">
            {language === 'fr' ? 'Nos précieux souvenirs' : language === 'pt' ? 'Nossas memórias preciosas' : 'Our Precious Memories'}
          </h2>
          <p className="font-sans text-gray-600 max-w-2xl mx-auto">
            {language === 'fr'
              ? "Chaque moment avec toi est un trésor que je garde près de mon cœur. Voici quelques-uns de mes souvenirs préférés que nous avons partagés."
              : language === 'pt'
              ? "Cada momento com você é um tesouro que guardo no meu coração. Aqui estão algumas das minhas memórias favoritas que compartilhamos juntos."
              : "Each moment with you is a treasure I hold close to my heart. Here are some of my favorite memories we've shared together."}
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
