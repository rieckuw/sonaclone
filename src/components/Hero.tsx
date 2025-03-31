
import { Button } from "@/components/ui/button";
import ClientImageCarousel from "./ClientImageCarousel";

const Hero = () => {
  return (
    <section className="pt-40 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white -z-10"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[url('/pattern-bg.svg')] bg-repeat opacity-10 -z-10"></div>
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-40 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <span className="text-gray-900 inline-block mb-2">Agensi</span><br />
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent inline-block text-4xl md:text-6xl lg:text-7xl font-extrabold">
              Personal Branding AI
            </span><br />
            <span className="inline-block text-2xl md:text-3xl lg:text-4xl mt-4 text-gray-700">30 Posts/Month 1 Hour Setup Grow 10x Faster</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            No time to create content? No problem. We build your personal brand with AI-generated, high-quality posts that position you as an industry leader—without you lifting a finger.
          </p>
          <div className="flex justify-center">
            <Button className="relative overflow-hidden group px-14 py-8 rounded-full hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 bg-gradient-to-r from-purple-700 to-purple-500">
              <span className="relative z-10 flex flex-col">
                <span className="text-2xl font-bold">Speak with our team</span>
                <span className="text-sm font-light opacity-80">schedule your free setup now</span>
              </span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-500 bg-[radial-gradient(circle,_rgba(255,255,255,0.8)_0%,_transparent_70%)] group-hover:blur-xl"></div>
            </Button>
          </div>
        </div>
      </div>
      
      <ClientImageCarousel />
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
