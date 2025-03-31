
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
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg py-3 transform transition-transform duration-300 z-40 animate-slide-in-bottom">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="font-semibold text-lg">
            Your personal brand is your most valuable asset. Let's build it—without you lifting a finger.
          </p>
        </div>
        <Button className="btn-primary whitespace-nowrap">
          Book a Free Strategy Call
        </Button>
      </div>
    </div>
  );
};

export default StickyCallToAction;
