
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Brain, Smartphone, TrendingUp } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  {
    id: 1,
    title: "1-Hour Setup Session",
    description: "We clone your voice & avatar—no need to record again.",
    icon: <Zap className="w-8 h-8 text-purple-300" />
  },
  {
    id: 2,
    title: "AI + Human-Enhanced Content",
    description: "Our AI generates videos in your tone, style, and expertise.",
    icon: <Brain className="w-8 h-8 text-purple-300" />
  },
  {
    id: 3,
    title: "Daily Posting, Fully Automated",
    description: "We schedule & post for you—you do nothing.",
    icon: <Smartphone className="w-8 h-8 text-purple-300" />
  },
  {
    id: 4,
    title: "Watch Your Brand Grow Effortlessly",
    description: "Engagement, followers, and business opportunities come to you.",
    icon: <TrendingUp className="w-8 h-8 text-purple-300" />
  }
];

const HowItWorks = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const isMobile = useIsMobile();

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#0e0118]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
            How It Works
          </h2>
          <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto">
            It's a one-time setup, then fully automated. Our streamlined process delivers AI-powered personal branding with minimal effort from you.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-28 left-[calc(12.5%+3rem)] right-[calc(12.5%+3rem)] h-1 bg-gradient-to-r from-purple-600/20 via-purple-600/50 to-purple-600/20 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/30 to-purple-600/0 animate-pulse-slow"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col group" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex justify-center mb-4 md:mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#7e22ce] to-[#9333ea] flex items-center justify-center shadow-[0_0_15px_rgba(126,34,206,0.5)] group-hover:shadow-[0_0_25px_rgba(126,34,206,0.8)] transition-all duration-500 group-hover:scale-110">
                      <span className="text-white text-2xl md:text-3xl font-bold">{step.id}</span>
                    </div>
                    
                    {index < steps.length - 1 && (
                      <div className="hidden lg:flex absolute top-1/2 -right-12 transform -translate-y-1/2 text-[#9333ea]">
                        <ArrowRight size={30} className="animate-pulse-slow" />
                      </div>
                    )}
                  </div>
                </div>
                
                <Card className="bg-gradient-to-br from-[#1c0639] to-[#2a0f4d] border-[#7e22ce]/20 p-5 md:p-8 rounded-2xl hover:shadow-[0_0_25px_5px_rgba(126,34,206,0.3)] transition-all duration-500 h-full transform group-hover:-translate-y-2">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#7e22ce]/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#7e22ce]/30 transition-all duration-500">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">{step.title}</h3>
                  <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{step.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <Button 
            onClick={scrollToBooking}
            className="relative overflow-hidden group bg-[#7e22ce] hover:bg-[#9333ea] text-white text-base sm:text-lg md:text-xl font-bold px-8 sm:px-10 md:px-12 py-6 sm:py-7 md:py-8 rounded-full transition-all duration-500"
          >
            <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="absolute inset-0 w-full h-full bg-[#7e22ce] blur-xl"></span>
            </span>
            
            <span className="relative z-10 flex items-center gap-2 md:gap-3">
              Schedule Free Setup Session
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
