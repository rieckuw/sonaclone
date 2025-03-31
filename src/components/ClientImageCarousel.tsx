
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Client {
  id: number;
  image: string;
  name: string;
  title: string;
}

const clients: Client[] = [
  { 
    id: 1, 
    image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjQ4bnMwMnoyaTloZ2VucG11bjNkamNiNmY2cTZ4YWJkNnY2ZzkybCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1wsz3cEtCaRRUpRwVl/giphy.gif',
    name: 'Dennis Tjandra',
    title: 'VP of SPIL Ventures'
  },
  { 
    id: 2, 
    image: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3o4ZDJ1dTkzeHAwMnE3ZzhvZDU5bjhxdTlsNWFrNnR1cXMzeTJmcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2RbGEdUplLILkEZ84R/giphy.gif',
    name: 'Dennis Tjandra',
    title: 'VP of SPIL Ventures'
  },
  { 
    id: 3, 
    image: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWR0b3F0aW5zc3B1M3M3bjFidWR4YXptaWo0ZjFjZ3Ftc3llNmo2NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7kjQzYa60nZdiKDBta/giphy.gif',
    name: 'Dennis Tjandra',
    title: 'VP of SPIL Ventures'
  },
  { 
    id: 4, 
    image: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3ZleXllN3h2dDY4cDVqazhkZDRidHd2cG1pZzdpMDV5NnRjMW5scyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/23BgcH8NPQwOxWNeiA/giphy.gif',
    name: 'Dennis Tjandra',
    title: 'VP of SPIL Ventures'
  },
  { 
    id: 5, 
    image: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHlkd3JucmRub2x6Ym5rdG50MXNlNnk4ODZyaHE3d2dvcDl6bnJ4YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3utUCaHVlnY0sAsO5F/giphy.gif',
    name: 'Dennis Tjandra',
    title: 'VP of SPIL Ventures'
  },
  { 
    id: 6, 
    image: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXlrdDMyaWt1bG41eTZycjZsdnZzM2gwcnl1YnNkdXR6cW44Z21wdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9sJK6bf9OYhYrNvRzA/giphy.gif',
    name: 'Dennis Tjandra',
    title: 'VP of SPIL Ventures'
  },
];

const ClientImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mt-20">
      <Carousel className="max-w-5xl mx-auto">
        <CarouselContent>
          {clients.map((client, index) => (
            <CarouselItem key={client.id} className="md:basis-1/2 lg:basis-1/3">
              <div 
                className={`relative w-full h-48 overflow-hidden rounded-lg transition-all duration-500 ${
                  activeIndex === index ? "scale-110 shadow-[0_0_15px_rgba(228,255,26,0.4)]" : "opacity-70"
                }`}
              >
                <img 
                  src={client.image} 
                  alt={`${client.name} (${client.title})`}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex flex-col justify-end p-3">
                  <p className="text-white font-semibold text-sm">{client.name} ({client.title})</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
};

export default ClientImageCarousel;
