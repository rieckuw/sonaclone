
import { useEffect, useRef, useState } from 'react';

interface Client {
  id: number;
  image: string;
  name: string;
}

const clients: Client[] = [
  { id: 1, image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2tvMW5lYXBkbDkwaXAzeWRidWQwaW9yNDNvYno0OXFjenlxaHZzMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l46Cy1rHbQ92uuLXa/giphy.gif', name: 'Client 1' },
  { id: 2, image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGxoYnNkbnpxa2x4bjdsemxlMXEweGk2OXRkeWgybWljamdsMXRvaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7ZeTmU77UlPyeR2w/giphy.gif', name: 'Client 2' },
  { id: 3, image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXhpYXFtcW93NHozbWNmMXlqcnZvbHByeTRmY3NsZnN5NHZkNGFueiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPEqDGUULpEU0aQ/giphy.gif', name: 'Client 3' },
  { id: 4, image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGt6aHNsZnF5Z2FrbmluNDNianlnc295dXU1bjZmZGgwYjBiYjhlbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7bu3XilJ5BOiSGic/giphy.gif', name: 'Client 4' },
  { id: 5, image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanE0eGY3Y2I2NGo2dDVqZ2d1bm1qYmFvZXl5anp6b3l2bGN2YnhjcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YqGeOQ0u6hB5u/giphy.gif', name: 'Client 5' },
  { id: 6, image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2ZxMnluY24zcTdnYTc3emE0MXU1dmFyOWJsazBuYmIxYW1hbWJwcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cXblnKXr2BQOaYnTni/giphy.gif', name: 'Client 6' },
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
