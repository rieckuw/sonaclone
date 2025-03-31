
import { useEffect, useRef, useState } from 'react';

interface Client {
  id: number;
  image: string;
  name: string;
}

const clients: Client[] = [
  { id: 1, image: '/lovable-uploads/a9a1d0a3-6f93-4805-8194-c4bc255868a7.png', name: 'Client 1' },
  { id: 2, image: '/lovable-uploads/128ac83e-89d4-4558-84ec-981649709c13.png', name: 'Client 2' },
  { id: 3, image: '/lovable-uploads/79fdd2ec-fd87-4aa5-88f1-2e00a0af35c6.png', name: 'Client 3' },
  { id: 4, image: '/lovable-uploads/9a4adf7a-7210-486d-b9d2-dcfeb417f759.png', name: 'Client 4' },
  { id: 5, image: '/lovable-uploads/77b875ad-4980-426f-bdef-9832da12e529.png', name: 'Client 5' },
  { id: 6, image: '/lovable-uploads/2b926451-395e-434a-ae91-45ae015a0e8c.png', name: 'Client 6' },
];

const ClientImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden mt-20">
      <div className="flex gap-4 justify-center flex-wrap">
        {clients.map((client, index) => (
          <div 
            key={client.id} 
            className={`relative w-64 h-36 overflow-hidden rounded-lg transition-all duration-500 ${
              activeIndex === index ? "scale-110 shadow-[0_0_15px_rgba(228,255,26,0.4)]" : "opacity-40"
            }`}
          >
            <img 
              src={client.image} 
              alt={client.name} 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientImageCarousel;
