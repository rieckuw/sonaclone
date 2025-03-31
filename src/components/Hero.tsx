
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';

// Images for carousel
const clientImages = [
  "/lovable-uploads/a9a1d0a3-6f93-4805-8194-c4bc255868a7.png",
  "/lovable-uploads/128ac83e-89d4-4558-84ec-981649709c13.png",
  "/lovable-uploads/79fdd2ec-fd87-4aa5-88f1-2e00a0af35c6.png",
  "/lovable-uploads/9a4adf7a-7210-486d-b9d2-dcfeb417f759.png",
  "/lovable-uploads/77b875ad-4980-426f-bdef-9832da12e529.png",
  "/lovable-uploads/2b926451-395e-434a-ae91-45ae015a0e8c.png",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      
      {/* Background image with low opacity */}
      <div 
        className="absolute inset-0 opacity-10 -z-10 transition-opacity duration-1000 bg-center bg-cover"
        style={{ backgroundImage: `url(${clientImages[currentImageIndex]})` }}
      ></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-6xl mx-auto mb-14">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight text-white">
            Your Personal Brand,<br/>
            <span className="bg-gradient-to-r from-[#e4ff1a] to-[#eeff70] bg-clip-text text-transparent">
              100% AI-Powered.
            </span>
          </h1>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
            You Never Have to Record Again.
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            We create & post daily, high-quality videos of you—without you ever recording again. Just one-time, 1-hour setup and your content runs on autopilot.
          </p>
          
          <div className="flex justify-center">
            <Button className="bg-[#e4ff1a] hover:bg-[#eeff70] text-black text-xl font-bold px-12 py-8 rounded-full hover:shadow-[0_0_25px_5px_rgba(228,255,26,0.4)] transition-all duration-300">
              Get Started in 1 Hour
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 text-center text-white">
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
