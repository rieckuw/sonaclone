
import React, { useState, useEffect } from 'react';
import { Check, Clock, Video } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const BookingSection = () => {
  // State to track if Calendly script is loaded
  const [isCalendlyReady, setIsCalendlyReady] = useState(false);
  
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
    <section className="py-32 bg-[#0e0118]">
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
                
                {/* Calendly inline widget container with specific URL */}
                <div className="calendly-inline-widget" 
                  data-url="https://calendly.com/ricky-sonaclone/demo-call?background_color=190737&text_color=ffffff&primary_color=7429c6" 
                  style={{ minWidth: "320px", height: "700px" }}>
                </div>
              </div>
            </div>
            
            {/* Right column - Call information */}
            <div className="bg-[#0e0118] p-8 md:p-12 border-l border-[#7e22ce]/30">
              <div className="absolute -rotate-90 origin-bottom-right bg-[#7e22ce] text-white py-1 px-4 rounded-t-lg transform -translate-y-full">
                <span className="font-semibold">Currently</span>
              </div>
              
              <div className="relative">
                <div className="mb-8 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#7e22ce]">
                    <img 
                      src="/lovable-uploads/6fe15fba-8b92-4a32-9e2f-eb821411149b.png" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="text-center mb-8">
                  <h3 className="text-[#ff3ebc] text-xl font-bold uppercase">SCHEDULE YOUR CALL WITH DANY</h3>
                  <h2 className="text-white text-4xl md:text-5xl font-bold mt-2">Free 15-Minute Demo Call</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 leading-relaxed">
                    By the end of this Audit call, you will have a clear
                    understanding of the next steps you can take for your
                    business to start generating consistent and reliable results
                    online with Funnels & Paid Advertising.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed mt-4">
                    Find a time on Dany's calendar to schedule your call today
                    and we look forward to speaking to you soon!
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-[#ff3ebc] text-xl font-bold mb-4">THIS AUDIT CALL IS PERFECT FOR:</h3>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#ff3ebc] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">
                        Businesses looking to convert their current website into a
                        <span className="font-bold text-white"> high quality & streamlined funnel format.</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#ff3ebc] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">
                        Businesses looking to take their offline business
                        <span className="font-bold text-white"> online</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#ff3ebc] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">
                        Businesses looking to understand their
                        <span className="font-bold text-white"> increased revenue potential</span> with funnels & conversion rate optimization.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#ff3ebc] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">
                        Businesses looking to
                        <span className="font-bold text-white"> maximize their conversion rates</span> &
                        average order value.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#ff3ebc] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">
                        Businesses looking for a reliable agency that can
                        <span className="font-bold text-white"> make their company a priority.</span>
                      </span>
                    </li>
                  </ul>
                </div>
                
                <Button className="w-full bg-[#7e22ce] hover:bg-[#9333ea] text-white text-lg font-bold py-6 rounded-xl hover:shadow-[0_0_25px_5px_rgba(126,34,206,0.4)] transition-all duration-300">
                  Book Your Free Demo Call
                </Button>
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
