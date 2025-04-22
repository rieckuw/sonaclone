import React, { useState, useEffect } from 'react';
import { Check, Clock, Video } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const BookingSection = () => {
  const [isCalendlyReady, setIsCalendlyReady] = useState(false);
  const isMobile = useIsMobile();
  
  const whatsappLink = "https://api.whatsapp.com/send?phone=6285922888135";
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setIsCalendlyReady(true);
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  
  return (
    <section id="booking" className="pt-20 pb-16 md:py-32 bg-[#0e0118]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-[#7e22ce]/30">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left column - Calendly iframe */}
            <div className="bg-[#1c0639] p-4 md:p-12 overflow-hidden">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-white mb-4">Demo Call</h2>
                
                <div className="flex items-center gap-2 text-gray-300 mb-3">
                  <Clock className="w-5 h-5" />
                  <span>15 min</span>
                </div>
              </div>
              
              <div className="border-t border-purple-900/40 pt-6">
                <div className="w-full overflow-hidden" style={{ maxWidth: '100%' }}>
                  <div 
                    className="calendly-inline-widget w-full bg-white rounded-lg" 
                    data-url="https://calendly.com/d/cnbs-zrn-ht5/demo-call?hide_event_type_details=1&primary_color=ac28d1" 
                    style={{ 
                      minWidth: "320px",
                      height: "100vh",
                      border: "none",
                      borderRadius: "8px"
                    }}>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column - Call information */}
            <div className="bg-[#0e0118] p-6 md:p-12 border-l border-[#7e22ce]/30">
              <div className="relative">
                <div className="mb-8 flex items-center justify-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#7e22ce]">
                    <img 
                      src="/lovable-uploads/ca3add95-a60c-4f0a-8e62-062d5171c147.png" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="text-center mb-8">
                  <h3 className="text-[#ff3ebc] text-lg md:text-xl font-bold uppercase">SCHEDULE YOUR CALL WITH ARSYLA</h3>
                  <h2 className="text-white text-2xl md:text-4xl font-bold mt-2">Free 15-Minute Strategy Call</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    By the end of this free strategy call, you'll walk away with a clear roadmap to:
                  </p>
                  
                  <ul className="list-disc pl-5 text-gray-300 leading-relaxed mt-4 text-sm md:text-base space-y-2">
                    <li>Turn your face into your funnel (even if you hate being on camera)</li>
                    <li>Automate your content output with AI — shortform, optimized, daily</li>
                    <li>Get tons of qualified leads/month without relying on ads or freelancers</li>
                  </ul>
                  
                  <p className="text-gray-300 leading-relaxed mt-4 text-sm md:text-base">
                    Find a time on Arsyla's calendar to book your free call now.
                    Spots are limited — this is not a sales call, it's a strategy session to see if we're a fit.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-[#ff3ebc] text-lg md:text-xl font-bold mb-4">THIS STRATEGY CALL IS PERFECT FOR:</h3>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#ff3ebc] mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm md:text-base">
                        Business coaches, consultants, or agency owners that are already making money.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#ff3ebc] mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm md:text-base">
                        Doctors, dentists, and service pros with high-ticket offers but no time for content.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#ff3ebc] mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm md:text-base">
                        Founders & execs who want a strong social media presence without managing a content team.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#ff3ebc] mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm md:text-base">
                        Entrepreneurs who've tried making content but can't stay consistent.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#ff3ebc] mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm md:text-base">
                        Professionals who want to turn their brand into a lead engine using AI — and want results, not just followers.
                      </span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center text-gray-300 mb-4 text-sm md:text-base">
                  Not ready for a call?
                </div>
                
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="block w-full bg-[#7e22ce] hover:bg-[#9333ea] text-white text-base md:text-lg font-bold py-4 md:py-6 rounded-xl hover:shadow-[0_0_25px_5px_rgba(126,34,206,0.4)] transition-all duration-300 text-center"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
