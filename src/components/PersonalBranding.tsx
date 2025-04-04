
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/use-intersection-observer";
import { useIsMobile } from "@/hooks/use-mobile";

type BrandingPoint = {
  icon: string;
  title: string;
  description: string;
};

const brandingPoints: BrandingPoint[] = [
  {
    icon: "📢",
    title: "People trust personal brands over faceless businesses",
    description: "The top CEOs, creators, and industry leaders all have a face, not just a logo."
  },
  {
    icon: "🌍",
    title: "Opportunities come to you when you're visible",
    description: "Clients, investors, and high-level partnerships seek you out instead of you chasing them."
  },
  {
    icon: "📈",
    title: "Consistent content = growth & authority",
    description: "The more you post, the more you're seen as a leader in your niche."
  },
  {
    icon: "🤖",
    title: "AI is leveling the playing field—be an early mover",
    description: "Those who post consistently now will dominate the next wave of influence."
  }
];

const PersonalBranding = () => {
  const isMobile = useIsMobile();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="why-branding-2025" className="py-16 md:py-24 bg-[#0e0118] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold mb-4 md:mb-6 text-white">
            Why Personal Branding is{" "}
            <span className="text-gradient bg-gradient-to-r from-[#e4ff1a] to-[#7e22ce]">
              Non-Negotiable in 2025
            </span>
          </h2>
          <p 
            className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            The digital world is changing. The biggest opportunities don't go to the best businesses—they go to the most visible people. If you're not building your personal brand, you're already falling behind.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div 
              ref={ref}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            >
              {brandingPoints.map((point, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-[#1c0639] to-[#2a0f4d] rounded-2xl p-6 md:p-8 shadow-lg transform transition-all duration-500 hover:shadow-[0_0_25px_5px_rgba(126,34,206,0.3)] opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.15}s`, animationFillMode: "forwards" }}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <span className="text-3xl md:text-4xl">{point.icon}</span>
                    <h3 className="text-lg md:text-xl font-bold text-white">{point.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-300 pl-12">{point.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 md:mt-12 text-center lg:text-left">
              <div 
                className="opacity-0 animate-fade-in" 
                style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
              >
                <Button 
                  onClick={scrollToBooking}
                  className="bg-[#7e22ce] hover:bg-[#9333ea] text-white text-base md:text-lg font-bold px-8 py-4 rounded-full hover:shadow-[0_0_25px_5px_rgba(126,34,206,0.4)] transition-all duration-300 mt-2"
                >
                  Start Now
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end mb-8 lg:mb-0">
            <div className="relative w-full max-w-md md:max-w-lg">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#7e22ce]/30 to-[#e4ff1a]/30 rounded-3xl blur-xl opacity-40 animate-pulse-gradient"></div>
              
              {/* Profile mockup */}
              <div className="relative bg-gradient-to-br from-[#1c0639] to-[#2a0f4d] border border-purple-500/30 p-6 md:p-8 rounded-3xl shadow-2xl">
                {/* Profile header */}
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#7e22ce] to-[#9333ea] rounded-full flex items-center justify-center text-white text-xl font-bold">JS</div>
                  <div className="ml-4">
                    <h3 className="text-lg md:text-xl font-bold text-white">John Smith</h3>
                    <p className="text-sm text-gray-300">AI Tech Founder • Speaker • Investor</p>
                  </div>
                  <div className="ml-auto">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#7e22ce]/20 text-[#e4ff1a] rounded-full">Trending</span>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="flex justify-between mb-6 p-3 bg-black/20 rounded-xl">
                  <div className="text-center px-2">
                    <p className="text-2xl font-bold text-white">47K</p>
                    <p className="text-xs text-gray-400">Followers</p>
                  </div>
                  <div className="text-center px-2">
                    <p className="text-2xl font-bold text-white">312</p>
                    <p className="text-xs text-gray-400">Posts</p>
                  </div>
                  <div className="text-center px-2">
                    <p className="text-2xl font-bold text-[#e4ff1a]">92%</p>
                    <p className="text-xs text-gray-400">Engagement</p>
                  </div>
                </div>
                
                {/* Recent post */}
                <div className="mb-6 p-4 bg-black/30 rounded-xl border border-purple-500/20">
                  <p className="text-sm text-gray-200">Just closed our Series A funding round! Excited to share we raised $4.2M to scale our AI solution...</p>
                  <div className="flex items-center mt-3">
                    <span className="text-xs text-gray-400">2h ago</span>
                    <div className="ml-auto flex space-x-2">
                      <span className="text-xs text-gray-300 flex items-center"><span className="mr-1">❤️</span> 842</span>
                      <span className="text-xs text-gray-300 flex items-center"><span className="mr-1">💬</span> 76</span>
                    </div>
                  </div>
                </div>
                
                {/* Notifications */}
                <div className="space-y-3">
                  <div className="animate-fade-in opacity-0" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
                    <div className="p-3 bg-[#7e22ce]/30 rounded-lg border border-purple-500/30 flex items-center">
                      <span className="mr-2">🔔</span>
                      <p className="text-xs text-gray-200">New partnership opportunity from <span className="font-semibold text-white">Tesla Inc.</span></p>
                    </div>
                  </div>
                  
                  <div className="animate-fade-in opacity-0" style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}>
                    <div className="p-3 bg-[#e4ff1a]/10 rounded-lg border border-[#e4ff1a]/30 flex items-center">
                      <span className="mr-2">📈</span>
                      <p className="text-xs text-gray-200">Your profile views increased by <span className="font-semibold text-[#e4ff1a]">324%</span> this month</p>
                    </div>
                  </div>
                  
                  <div className="animate-fade-in opacity-0" style={{ animationDelay: "2s", animationFillMode: "forwards" }}>
                    <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30 flex items-center">
                      <span className="mr-2">🎙️</span>
                      <p className="text-xs text-gray-200">Speaking invitation: <span className="font-semibold text-white">Web Summit 2025</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalBranding;
