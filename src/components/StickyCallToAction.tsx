
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const StickyCallToAction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 400px on mobile, 600px on desktop
      setIsVisible(window.scrollY > (isMobile ? 400 : 600));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0e0118]/95 backdrop-blur-sm shadow-lg py-3 transform transition-transform duration-300 z-40 animate-slide-in-bottom border-t border-[#7e22ce]/20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-3 md:mb-0">
          <p className="font-semibold text-base md:text-lg text-white">
            {isMobile ? "Just 1-hour setup, we handle everything." : "Build your brand without lifting a finger. Just 1-hour setup, and we handle everything."}
          </p>
        </div>
        <Button className="bg-[#7e22ce] hover:bg-[#9333ea] text-white text-base md:text-lg font-bold w-full md:w-auto px-6 md:px-8 py-4 md:py-6 rounded-full hover:shadow-[0_0_25px_5px_rgba(126,34,206,0.4)] transition-all duration-300">
          Book a Free Strategy Call
        </Button>
      </div>
    </div>
  );
};

export default StickyCallToAction;
