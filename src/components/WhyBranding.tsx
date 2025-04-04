import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Megaphone, Globe, TrendingUp, Bot } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const WhyBranding: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };
  const isMobile = useIsMobile();

  // Key points data
  const keyPoints = [
    {
      icon: <Megaphone className="w-8 h-8 text-purple-200" />,
      title: "People trust personal brands over faceless businesses.",
      description: "The top CEOs, creators, and industry leaders all have a face, not just a logo.",
      delay: 0
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-200" />,
      title: "Opportunities come to you when you're visible.",
      description: "Clients, investors, and high-level partnerships seek you out instead of you chasing them.",
      delay: 100
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-200" />,
      title: "Consistent content = growth & authority.",
      description: "The more you post, the more you're seen as a leader in your niche.",
      delay: 200
    },
    {
      icon: <Bot className="w-8 h-8 text-purple-200" />,
      title: "AI is leveling the playing field—be an early mover.",
      description: "Those who post consistently now will dominate the next wave of influence.",
      delay: 300
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="why-branding" 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-br from-[#12031e] to-[#1e0533] relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/3 left-1/4 w-1/2 h-1/2 bg-purple-600/10 rounded-full blur-[180px] animate-pulse-slow -z-0"></div>
      <div className="absolute bottom-1/4 right-1/3 w-1/3 h-1/3 bg-blue-600/15 rounded-full blur-[150px] animate-pulse-slow -z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 md:mb-20 transition-all duration-1000 
                      ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 text-white">
            Why Personal Branding is Non-Negotiable in 2025
          </h2>
          <p className={`text-base md:text-xl text-gray-300 mb-6 md:mb-12 max-w-3xl mx-auto
                      transition-all duration-1000 delay-300
                      ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            The digital world is changing. The biggest opportunities don't go to the best businesses—they go to the most visible people. 
            If you're not building your personal brand, you're already falling behind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-16 md:mb-20">
          {keyPoints.map((point, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br from-[#2a0f4d]/70 to-[#2a0f4d]/40 p-6 md:p-8 rounded-2xl border border-purple-600/20
                       shadow-[0_0_15px_rgba(126,34,206,0.2)] hover:shadow-[0_0_30px_rgba(126,34,206,0.3)]
                       transform transition-all duration-700 ease-out
                       ${inView ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 translate-y-10 translate-x-0'}
                       ${inView ? `delay-[${300 + point.delay}ms]` : ''}`}
              style={{
                transitionDelay: inView ? `${300 + point.delay}ms` : '0ms',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="flex items-start">
                <div className="bg-purple-900/30 p-3 rounded-xl mr-4 flex-shrink-0">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{point.title}</h3>
                  <p className="text-gray-300">{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right-side Visual Profile Mockup */}
        <div className={`relative mx-auto max-w-3xl mb-16 md:mb-20 h-[300px] md:h-[400px]
                      transform transition-all duration-1000 delay-500
                      ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-gradient-to-br from-[#2a0f4d] to-[#1e0533] rounded-2xl p-4 md:p-6 border border-purple-500/30
                        shadow-[0_0_30px_rgba(126,34,206,0.3)] w-full max-w-2xl overflow-hidden relative">
              
              {/* Profile Header */}
              <div className="flex items-center mb-4 border-b border-purple-500/20 pb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-purple-600 flex items-center justify-center overflow-hidden">
                  <img src="/lovable-uploads/e1f46d89-bbf0-4514-9256-bba9aa16c3fc.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="ml-3">
                  <h3 className="text-white font-bold text-lg md:text-xl">Your Personal Brand</h3>
                  <p className="text-gray-300 text-sm">Thought Leader • Influencer • Expert</p>
                </div>
                <div className="ml-auto flex items-center">
                  <div className="bg-purple-600/20 px-3 py-1 rounded-full flex items-center">
                    <span className="text-white text-sm font-medium mr-1">25K</span>
                    <span className="text-purple-300 text-xs">Followers</span>
                  </div>
                </div>
              </div>
              
              {/* Analytics Graph */}
              <div className="mb-4 bg-purple-900/20 rounded-xl p-3 relative overflow-hidden">
                <p className="text-white text-sm font-medium mb-2">Engagement Growth</p>
                <div className="h-16 flex items-end">
                  <div className="w-1/12 h-[15%] bg-purple-500/50 rounded-sm mr-1 animate-pulse-slow"></div>
                  <div className="w-1/12 h-[25%] bg-purple-500/50 rounded-sm mr-1 animate-pulse-slow" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-1/12 h-[20%] bg-purple-500/50 rounded-sm mr-1 animate-pulse-slow" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1/12 h-[30%] bg-purple-500/50 rounded-sm mr-1 animate-pulse-slow" style={{ animationDelay: '0.3s' }}></div>
                  <div className="w-1/12 h-[25%] bg-purple-500/50 rounded-sm mr-1 animate-pulse-slow" style={{ animationDelay: '0.4s' }}></div>
                  <div className="w-1/12 h-[40%] bg-purple-500/50 rounded-sm mr-1 animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-1/12 h-[35%] bg-purple-500/50 rounded-sm mr-1 animate-pulse-slow" style={{ animationDelay: '0.6s' }}></div>
                  <div className="w-1/12 h-[45%] bg-purple-500/50 rounded-sm mr-1 animate-pulse-slow" style={{ animationDelay: '0.7s' }}></div>
                  <div className="w-1/12 h-[55%] bg-purple-500/50 rounded-sm mr-1 animate-pulse-slow" style={{ animationDelay: '0.8s' }}></div>
                  <div className="w-1/12 h-[70%] bg-purple-500/50 rounded-sm mr-1 animate-pulse-slow" style={{ animationDelay: '0.9s' }}></div>
                  <div className="w-1/12 h-[90%] bg-purple-500/50 rounded-sm mr-1 animate-pulse-gradient" style={{ animationDelay: '1s' }}></div>
                  <div className="w-1/12 h-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-sm animate-pulse-gradient"></div>
                </div>
                <div className="absolute top-3 right-3 flex items-center">
                  <span className="text-green-400 text-xs font-medium">+187%</span>
                  <TrendingUp className="w-3 h-3 text-green-400 ml-1" />
                </div>
              </div>
              
              {/* Notification Popups */}
              <div className="space-y-3">
                <div className="bg-purple-600/10 border border-purple-500/30 p-3 rounded-lg flex items-center
                            animate-pulse-gradient" style={{ animationDuration: '5s' }}>
                  <div className="w-8 h-8 rounded-full bg-blue-600/30 flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">500+ New Profile Views</p>
                    <p className="text-gray-400 text-xs">Your visibility is growing rapidly</p>
                  </div>
                </div>
                
                <div className="bg-purple-600/10 border border-purple-500/30 p-3 rounded-lg flex items-center
                            animate-pulse-gradient" style={{ animationDuration: '6s', animationDelay: '1s' }}>
                  <div className="w-8 h-8 rounded-full bg-green-600/30 flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 5v8a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">New Partnership Opportunity</p>
                    <p className="text-gray-400 text-xs">Major brand wants to collaborate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-10 right-10 bg-purple-600/20 px-3 py-1 rounded-full
                      animate-pulse-gradient" style={{ animationDuration: '4s' }}>
            <span className="text-white text-xs">+42 New Followers</span>
          </div>
          
          <div className="absolute bottom-20 left-10 bg-blue-600/20 px-3 py-1 rounded-full
                      animate-pulse-gradient" style={{ animationDuration: '5s', animationDelay: '1s' }}>
            <span className="text-white text-xs">Speaking Opportunity</span>
          </div>
        </div>

        {/* Final CTA */}
        <div className={`text-center transition-all duration-1000 delay-700 
                      ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            onClick={scrollToBooking}
            className="relative overflow-hidden group bg-[#7e22ce] hover:bg-[#9333ea] text-white text-base sm:text-lg font-bold px-8 sm:px-10 py-6 sm:py-7 rounded-full transition-all duration-500 mt-4"
          >
            <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="absolute inset-0 w-full h-full bg-[#7e22ce] blur-xl"></span>
            </span>
            
            <span className="relative z-10">
              Start Now
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyBranding;
