
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from 'react';

// GIFs for carousel
const clientImages = [
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWptMGs5enVpYTIwdG42djBtZG80NHd3ZnE3MGZkZGRvNWtkcWVhZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPEqDGUULpEU0aQ/giphy.gif", // Business/presentation GIF
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnhueG01dTF4ZzN6bDRueHk5d3h0dDhkdmQzbmVyZ2hzcWo3M2R5OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JIX9t2j0ZTN9S/giphy.gif", // Tech-related GIF
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXkxamhyYWhzaGI3azk5MGc3dWE1cmhvbDh0YnhxcXEzb2E5eGNueiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3q2FnW3yG3MfFDri/giphy.gif", // Social media/content GIF
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzJvZnV5cDU0OWMxNjY2YXZiN2JrcmVybHh0YjBkdngwcm9vaDJpbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT5LMWNOjGqJzUfDK8/giphy.gif", // Tech/digital marketing GIF
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmp1bndxb3l6aHNud3A3ZjlnM2NtZXAwaHI1OXdyYzEzc3gyZWdmeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xThuWu82QD3pj4wvEQ/giphy.gif", // Digital/AI concept GIF
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExemJiYmluaWN5bXdvNnVjdm1vYXlzdTRwZmQwODFvcHRvZXQwdW95bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlNaQ6gWfllcjDO/giphy.gif", // Professional growth concept GIF
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
    <section className="py-32 min-h-screen flex flex-col items-center relative overflow-hidden">
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
      
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 bg-gradient-to-r from-[#7e22ce] to-[#a855f7] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(126,34,206,0.5)]">
              The first AI-Powered
            </span>
            Personal Branding Agency
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]">
            You Never Have to Record Again.
          </h2>
          
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto drop-shadow-[0_0_8px_rgba(200,200,255,0.15)]">
            We create & post daily, high-quality videos of you—without you ever recording again. Just one-time, 1-hour setup and your content runs on autopilot.
          </p>
          
          <div className="flex justify-center mb-10">
            <button className="relative text-white text-lg font-bold px-8 py-4 rounded-full transition-all duration-300 overflow-hidden group">
              {/* Gradient background with animation */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#7e22ce] via-[#9333ea] to-[#c026d3] group-hover:bg-gradient-to-l transition-all duration-500"></span>
              
              {/* Glow effect */}
              <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#7e22ce] blur-xl"></span>
              
              {/* Text content */}
              <span className="relative z-10">Speak to our team now</span>
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
    </section>
  );
};

export default Hero;
