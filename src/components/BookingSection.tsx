
import React, { useState, useEffect } from 'react';
import { Check, Clock, Video } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const BookingSection = () => {
  // State to track if Calendly script is loaded
  const [isCalendlyReady, setIsCalendlyReady] = useState(false);
  
  // WhatsApp link
  const whatsappLink = "https://api.whatsapp.com/send?phone=6285922888135";
  
  useEffect(() => {
    // Add Calendly script to the document
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setIsCalendlyReady(true);
    document.body.appendChild(script);
    
    return () => {
      // Clean up when component unmounts
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <section id="booking" className="py-32 bg-[#0e0118]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-[#7e22ce]/30">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left column - Calendly iframe */}
            <div className="bg-[#1c0639] p-8 md:p-12">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-white mb-4">Demo Call</h2>
                
                <div className="flex items-center gap-2 text-gray-300 mb-3">
                  <Clock className="w-5 h-5" />
                  <span>15 min</span>
                </div>
                
                <div className="flex items-start gap-2 text-gray-300">
                  <Video className="w-5 h-5 mt-1" />
                  <span>Web conferencing details provided<br />upon confirmation.</span>
                </div>
              </div>
              
              <div className="border-t border-purple-900/40 pt-6">
                <h3 className="text-xl font-bold text-white mb-6">Select a Day</h3>
                
                {/* Updated Calendly inline widget with black text color */}
                <div className="calendly-inline-widget" 
                  data-url="https://calendly.com/ricky-sonaclone/demo-call?text_color=000000&primary_color=7429c6" 
                  style={{ minWidth: "320px", height: "700px" }}>
                </div>
              </div>
            </div>
            
            {/* Right column - Call information */}
            <div className="bg-[#0e0118] p-8 md:p-12 border-l border-[#7e22ce]/30">
              <div className="relative">
                <div className="mb-8 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#7e22ce]">
                    <img 
                      src="/lovable-uploads/582b24c1-ef41-4ede-a202-e5ff8be9e0d1.png" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="text-center mb-8">
                  <h3 className="text-[#ff3ebc] text-xl font-bold uppercase">SCHEDULE YOUR CALL WITH RICKY</h3>
                  <h2 className="text-white text-4xl md:text-5xl font-bold mt-2">Free 15-Minute Strategy Call</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 leading-relaxed">
                    By the end of this strategy call, you will have a clear
                    understanding of how to scale your personal brand effortlessly
                    with AI-generated content—without recording daily.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed mt-4">
                    Find a time on Ricky's calendar to schedule your call today.
                    We look forward to helping you build your authority online!
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-[#ff3ebc] text-xl font-bold mb-4">THIS STRATEGY CALL IS PERFECT FOR:</h3>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#ff3ebc] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">
                        Busy entrepreneurs & founders who want to build a strong personal brand but don't have time to record content.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#ff3ebc] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">
                        Coaches & consultants looking to attract more leads and position themselves as industry experts.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#ff3ebc] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">
                        CEOs & executives who need consistent social media presence without spending hours on content creation.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#ff3ebc] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">
                        Anyone struggling with consistency and wants to grow 10x faster with daily high-quality videos—on autopilot.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#ff3ebc] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">
                        Professionals who want to leverage AI to stay ahead of competitors without extra effort.
                      </span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center text-gray-300 mb-4">
                  Not ready for a call?
                </div>
                
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="block w-full bg-[#7e22ce] hover:bg-[#9333ea] text-white text-lg font-bold py-6 rounded-xl hover:shadow-[0_0_25px_5px_rgba(126,34,206,0.4)] transition-all duration-300 text-center"
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

// Add type definition for the Calendly global object
declare global {
  interface Window {
    Calendly?: any;
  }
}

export default BookingSection;
