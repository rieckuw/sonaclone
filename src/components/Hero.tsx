import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from 'react';

// GIFs for carousel
const clientImages = [
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjQ4bnMwMnoyaTloZ2VucG11bjNkamNiNmY2cTZ4YWJkNnY2ZzkybCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1wsz3cEtCaRRUpRwVl/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3o4ZDJ1dTkzeHAwMnE3ZzhvZDU5bjhxdTlsNWFrNnR1cXMzeTJmcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2RbGEdUplLILkEZ84R/giphy.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWR0b3F0aW5zc3B1M3M3bjFidWR4YXptaWo0ZjFjZ3Ftc3llNmo2NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7kjQzYa60nZdiKDBta/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3ZleXllN3h2dDY4cDVqazhkZDRidHd2cG1pZzdpMDV5NnRjMW5scyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/23BgcH8NPQwOxWNeiA/giphy.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHlkd3JucmRub2x6Ym5rdG50MXNlNnk4ODZyaHE3d2dvcDl6bnJ4YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3utUCaHVlnY0sAsO5F/giphy.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXlrdDMyaWt1bG41eTZycjZsdnZzM2gwcnl1YnNkdXR6cW44Z21wdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9sJK6bf9OYhYrNvRzA/giphy.gif",
];

// Client information
const clientInfo = [
  { name: "Dennish Tjandra", title: "VP of SPIL Ventures" },
  { name: "Sebastian Evan", title: "CEO Sepaktemu Academy" },
  { name: "Henry Dermawan", title: "Co-Founder Soar.id" },
  { name: "Melvin Mumpuni", title: "Founder Finansialku" },
  { name: "Rey Kamal", title: "CEO Ledgerowl" },
  { name: "Ricky Pranaya", title: "Co-Founder Sonaclone" },
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % clientImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Function to scroll to the booking section
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-24 min-h-screen flex flex-col items-center relative overflow-hidden">
      {/* Dark background base */}
      <div className="absolute inset-0 bg-[#0e0118] -z-30"></div>
      
      {/* Main purple glow with increased opacity and size */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[70vh] rounded-full bg-purple-600 opacity-30 blur-[100px] animate-pulse-slow -z-20"></div>
      
      {/* Additional smaller glows for more effect */}
      <div className="absolute left-[20%] top-[30%] w-[40vw] h-[40vh] rounded-full bg-purple-500 opacity-20 blur-[120px] animate-pulse-slow -z-20"></div>
      <div className="absolute right-[25%] bottom-[20%] w-[50vw] h-[30vh] rounded-full bg-purple-700 opacity-25 blur-[80px] animate-pulse-slow -z-20"></div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c0639]/80 to-[#0e0118] -z-10"></div>
      
      {/* Background GIF with animation */}
      {clientImages.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 bg-center bg-cover -z-10 ${
            index === currentImageIndex ? 'opacity-15' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
      
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 bg-gradient-to-r from-[#7e22ce] to-[#a855f7] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(126,34,206,0.5)]">
              The First AI-Powered
            </span>
            Personal Branding Agency
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]">
            You Never Have to Record Again.
          </h2>
          
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto drop-shadow-[0_0_8px_rgba(200,200,255,0.15)]">
            We turn one setup session into unlimited talking head contents posted daily, helping you build authority 10x faster while you focus on your business, not recording.
          </p>
          
          <div className="flex justify-center mb-10">
            <button 
              className="relative text-white text-lg font-bold px-8 py-4 rounded-full transition-all duration-300 overflow-hidden group"
              onClick={scrollToBooking}
            >
              {/* Gradient background with animation */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#7e22ce] via-[#9333ea] to-[#c026d3] group-hover:bg-gradient-to-l transition-all duration-500"></span>
              
              {/* Enhanced glow effect */}
              <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#7e22ce] blur-xl"></span>
              
              {/* Text content - UPDATED CTA TEXT */}
              <span className="relative z-10">Book Free Consultation Today</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Phone-style content carousel (9:16 ratio) - Full width */}
      <div className="w-full overflow-hidden">
        <div 
          ref={scrollRef} 
          className="flex space-x-4 phoneCarousel px-4 py-2"
        >
          {clientImages.map((image, index) => (
            <div key={`img-${index}`} className="flex-shrink-0 w-[200px] md:w-[250px]">
              <div className="relative rounded-xl overflow-hidden aspect-[9/16] shadow-lg group">
                <img 
                  src={image} 
                  alt={`${clientInfo[index].name} - ${clientInfo[index].title}`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="transition-transform duration-300 group-hover:scale-105 group-hover:translate-y-[-4px]">
                      <div className="text-white font-bold text-lg mb-1 group-hover:text-purple-200 transition-colors duration-300">
                        {clientInfo[index].name}
                      </div>
                      <div className="text-purple-300 text-xs font-medium group-hover:text-white transition-colors duration-300">
                        {clientInfo[index].title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {clientImages.map((image, index) => (
            <div key={`img-dup-${index}`} className="flex-shrink-0 w-[200px] md:w-[250px]">
              <div className="relative rounded-xl overflow-hidden aspect-[9/16] shadow-lg group">
                <img 
                  src={image} 
                  alt={`${clientInfo[index].name} - ${clientInfo[index].title}`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="transition-transform duration-300 group-hover:scale-105 group-hover:translate-y-[-4px]">
                      <div className="text-white font-bold text-lg mb-1 group-hover:text-purple-200 transition-colors duration-300">
                        {clientInfo[index].name}
                      </div>
                      <div className="text-purple-300 text-xs font-medium group-hover:text-white transition-colors duration-300">
                        {clientInfo[index].title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
