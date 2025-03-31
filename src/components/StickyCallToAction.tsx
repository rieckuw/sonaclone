
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
    <div className="fixed bottom-0 left-0 right-0 backdrop-blur-sm bg-white/80 shadow-lg py-3 transform transition-transform duration-300 z-40 animate-slide-in-bottom border-t border-purple-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="font-semibold text-lg">
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Your personal brand is your most valuable asset.</span> Let's build it—without you lifting a finger.
          </p>
        </div>
        <Button className="relative group overflow-hidden px-6 py-5">
          <span className="relative z-10 flex flex-col">
            <span className="font-bold">Speak with our team</span>
            <span className="text-xs font-medium opacity-90">schedule your free setup now</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-500 group-hover:from-purple-800 group-hover:to-purple-600 transition-all duration-500"></div>
        </Button>
      </div>
    </div>
  );
};

export default StickyCallToAction;
