
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // WhatsApp link
  const whatsappLink = "https://api.whatsapp.com/send?phone=6285922888135";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0e0118]/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center group">
            <img 
              src="/lovable-uploads/e1f46d89-bbf0-4514-9256-bba9aa16c3fc.png" 
              alt="Sonaclone Agency" 
              className="h-7 md:h-8"
            />
            <span className="ml-1 text-base md:text-lg font-light text-gray-300 italic tracking-wide transform transition-all duration-300 group-hover:translate-x-1 opacity-80 group-hover:opacity-100 font-sans">Agency</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#how-it-works" className="text-gray-300 hover:text-[#a855f7] transition-colors text-sm font-medium uppercase">How It Works</a>
            <a href="#why-choose-us" className="text-gray-300 hover:text-[#a855f7] transition-colors text-sm font-medium uppercase">Solutions</a>
            <a href="#content-preview" className="text-gray-300 hover:text-[#a855f7] transition-colors text-sm font-medium uppercase">Examples</a>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#7e22ce] hover:bg-[#9333ea] text-white text-sm font-bold px-6 py-3 rounded-full hover:shadow-[0_0_15px_rgba(126,34,206,0.4)] transition-all duration-300 uppercase inline-flex items-center justify-center"
            >
              WHATSAPP US
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2 flex flex-col bg-[#0e0118]/95 backdrop-blur-sm rounded-lg animate-fade-in">
            <a 
              href="#how-it-works" 
              className="text-gray-300 hover:text-[#a855f7] transition-colors py-3 text-base font-medium uppercase px-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#why-choose-us" 
              className="text-gray-300 hover:text-[#a855f7] transition-colors py-3 text-base font-medium uppercase px-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solutions
            </a>
            <a 
              href="#content-preview" 
              className="text-gray-300 hover:text-[#a855f7] transition-colors py-3 text-base font-medium uppercase px-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Examples
            </a>
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer" 
              className="mx-3 mt-2 bg-[#7e22ce] hover:bg-[#9333ea] text-white text-sm font-bold px-6 py-3 rounded-full hover:shadow-[0_0_15px_rgba(126,34,206,0.4)] transition-all duration-300 uppercase text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              WHATSAPP US
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
