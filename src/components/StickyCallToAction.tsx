
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
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Personal brand Anda adalah aset paling berharga.</span> Mari kita bangun—tanpa Anda perlu repot.
          </p>
        </div>
        <Button className="relative group overflow-hidden">
          <span className="relative z-10 font-medium">Jadwalkan Konsultasi Gratis</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-500 group-hover:from-purple-800 group-hover:to-purple-600 transition-all duration-500"></div>
        </Button>
      </div>
    </div>
  );
};

export default StickyCallToAction;
