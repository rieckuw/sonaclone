
import { Button } from "@/components/ui/button";
import ClientImageCarousel from "./ClientImageCarousel";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-100 to-white -z-10"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-transparent to-purple-50/30 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Agensi Personal Branding</span><br />
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent inline-block">
              AI Pertama.
            </span><br />
            <span className="inline-block">30 Posts/Month. 1 Hour Setup. Grow 10x Faster.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            No time to create content? No problem. We build your personal brand with AI-generated, high-quality posts that position you as an industry leader—without you lifting a finger.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="btn-primary text-lg relative overflow-hidden group">
              <span className="relative z-10">Book a Free Strategy Call</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-500 group-hover:from-purple-800 group-hover:to-purple-600 transition-all duration-500"></div>
            </Button>
            <Button variant="outline" className="text-lg border-purple-300 text-purple-600 hover:bg-purple-50">Learn More</Button>
          </div>
          <div className="mt-8 text-gray-500">
            Trusted by Jakarta startup founders & entrepreneurs scaling their online presence effortlessly.
          </div>
        </div>
      </div>
      
      <ClientImageCarousel />
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
