
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const StickyCallToAction = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 600px
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0e0118]/95 backdrop-blur-sm shadow-lg py-3 transform transition-transform duration-300 z-40 animate-slide-in-bottom border-t border-[#7e22ce]/20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="font-semibold text-lg text-white animate-fade-in">
            Build your brand without lifting a finger. Just 1-hour setup, and we handle everything.
          </p>
        </div>
        <Button 
          className="bg-[#7e22ce] hover:bg-[#9333ea] text-white text-lg font-bold px-8 py-6 rounded-full relative overflow-hidden group animate-scale-in"
        >
          {/* Pulsing background effect */}
          <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="absolute inset-0 w-full h-full bg-[#7e22ce] blur-xl animate-pulse-slow"></span>
          </span>
          {/* Text content */}
          <span className="relative z-10 flex items-center">
            Book a Free Strategy Call
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
        </Button>
      </div>
    </div>
  );
};

export default StickyCallToAction;
