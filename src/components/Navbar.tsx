
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Sonaclone</span>
            <span className="ml-1 text-xl font-semibold">Agency</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#how-it-works" className="text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium">HOW IT WORKS</a>
            <a href="#why-choose-us" className="text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium">WHY CHOOSE US</a>
            <a href="#results" className="text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium">RESULTS</a>
            <Button className="relative group overflow-hidden px-10 py-6 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-800 hover:to-purple-600 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/40">
              <span className="relative z-10 flex items-center gap-2 font-bold">
                <Phone size={18} />
                <span>BOOK A CALL</span>
              </span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-500 bg-[radial-gradient(circle,_rgba(255,255,255,0.8)_0%,_transparent_70%)] group-hover:blur-xl"></div>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
          <nav className="md:hidden mt-4 pb-4 space-y-4 flex flex-col">
            <a 
              href="#how-it-works" 
              className="text-gray-700 hover:text-purple-600 transition-colors py-2 text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOW IT WORKS
            </a>
            <a 
              href="#why-choose-us" 
              className="text-gray-700 hover:text-purple-600 transition-colors py-2 text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              WHY CHOOSE US
            </a>
            <a 
              href="#results" 
              className="text-gray-700 hover:text-purple-600 transition-colors py-2 text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              RESULTS
            </a>
            <Button 
              className="relative group overflow-hidden px-10 py-6 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-800 hover:to-purple-600 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/40 w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 font-bold">
                <Phone size={18} />
                <span>BOOK A CALL</span>
              </span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-500 bg-[radial-gradient(circle,_rgba(255,255,255,0.8)_0%,_transparent_70%)] group-hover:blur-xl"></div>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
