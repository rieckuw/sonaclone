
import { useEffect, useRef } from 'react';

interface Client {
  id: number;
  image: string;
  name: string;
}

const clients: Client[] = [
  { id: 1, image: '/lovable-uploads/db7b5bb4-bf09-4d17-aef1-e809727a989d.png', name: 'Dennis' },
  { id: 2, image: '/lovable-uploads/db8d287c-752c-470e-9300-9b1c3ab85b6c.png', name: 'Rey' },
  { id: 3, image: '/lovable-uploads/465216b0-e51e-4a00-9b1f-28f73646f9c4.png', name: 'Ricky' },
  { id: 4, image: '/lovable-uploads/57d28577-311b-483b-9a6a-f7d49f775dd5.png', name: 'Henry' },
  { id: 5, image: '/lovable-uploads/3449ef67-aeaa-4cf0-904b-6e19b53dce17.png', name: 'Evan' },
];

const ClientImageCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseEnter = () => {
      if (carouselRef.current) {
        carouselRef.current.style.animationPlayState = 'paused';
      }
    };
    
    const handleMouseLeave = () => {
      if (carouselRef.current) {
        carouselRef.current.style.animationPlayState = 'running';
      }
    };
    
    const carousel = carouselRef.current;
    
    if (carousel) {
      carousel.addEventListener('mouseenter', handleMouseEnter);
      carousel.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (carousel) {
        carousel.removeEventListener('mouseenter', handleMouseEnter);
        carousel.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="w-full overflow-hidden hero-scroller">
      <div 
        ref={carouselRef}
        className="flex client-carousel"
      >
        {/* Double the clients for infinite loop effect */}
        {[...clients, ...clients].map((client, index) => (
          <div 
            key={`${client.id}-${index}`} 
            className="relative flex-none w-64 h-96 mx-2 overflow-hidden rounded-lg shadow-lg"
          >
            <img 
              src={client.image} 
              alt={`Client ${client.name}`} 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
              <div className="text-white font-bold">{client.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientImageCarousel;
