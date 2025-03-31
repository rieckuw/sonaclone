
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from 'react';

// Images for carousel
const clientImages = [
  "/lovable-uploads/6d9f6631-e474-4772-a083-de4e424186d0.png",
  "/lovable-uploads/a56c3ef3-07d4-4804-86f3-2c1544d45fe8.png",
  "/lovable-uploads/7b304f8d-fd05-4f3b-b8fa-c591abcba59d.png",
  "/lovable-uploads/3ec6b585-af51-437a-b1df-5465a7a4e318.png", 
  "/lovable-uploads/16aaee08-962d-49fc-98fa-82d3792d18c8.png",
  "/lovable-uploads/4588575c-c722-4999-b3c2-470cdfa13556.png",
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

  return (
    <section className="pt-24 pb-24 min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[#0e0118] -z-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c0639]/80 to-[#0e0118] -z-10"></div>
      
      {/* Background image with animation */}
      {clientImages.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 bg-center bg-cover -z-10 ${
            index === currentImageIndex ? 'opacity-15' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-6xl mx-auto mb-14">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight text-white">
            Your Personal Brand,<br/>
            <span className="bg-gradient-to-r from-[#7e22ce] to-[#a855f7] bg-clip-text text-transparent">
              100% AI-Powered.
            </span>
          </h1>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
            You Never Have to Record Again.
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            We create & post daily, high-quality videos of you—without you ever recording again. Just one-time, 1-hour setup and your content runs on autopilot.
          </p>
          
          <div className="flex justify-center mb-10">
            <Button className="bg-[#7e22ce] hover:bg-[#9333ea] text-white text-xl font-bold px-12 py-8 rounded-full hover:shadow-[0_0_25px_5px_rgba(126,34,206,0.4)] transition-all duration-300">
              Get Started in 1 Hour
            </Button>
          </div>
          
          {/* Phone-style content carousel (9:16 ratio) */}
          <div className="w-full overflow-hidden mt-10">
            <div 
              ref={scrollRef} 
              className="flex space-x-4 phoneCarousel"
            >
              {/* First set of images */}
              {clientImages.map((image, index) => (
                <div key={`img-${index}`} className="flex-shrink-0 w-[200px] md:w-[250px]">
                  <div className="relative rounded-xl overflow-hidden aspect-[9/16] shadow-lg">
                    <img 
                      src={image} 
                      alt={`AI-generated content ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-sm font-medium">AI-Generated Content</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless looping */}
              {clientImages.map((image, index) => (
                <div key={`img-dup-${index}`} className="flex-shrink-0 w-[200px] md:w-[250px]">
                  <div className="relative rounded-xl overflow-hidden aspect-[9/16] shadow-lg">
                    <img 
                      src={image} 
                      alt={`AI-generated content ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-sm font-medium">AI-Generated Content</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center text-white">
          <div className="flex flex-col items-center">
            <div className="text-6xl md:text-7xl font-bold mb-2">500Hr+</div>
            <div className="text-xl text-gray-300">Time Saved</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-6xl md:text-7xl font-bold mb-2">30+</div>
            <div className="text-xl text-gray-300">Posts Per Month</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-6xl md:text-7xl font-bold mb-2">10X</div>
            <div className="text-xl text-gray-300">Credibility</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
