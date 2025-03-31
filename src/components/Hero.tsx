
import { Button } from "@/components/ui/button";
import ClientImageCarousel from "./ClientImageCarousel";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient">AI-Powered Personal Branding.</span><br />
            <span className="inline-block">30 Posts/Month. 1-Hour Setup.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            No time to create content? No problem. We build your personal brand with AI-generated, high-quality posts that position you as an industry leader—without you lifting a finger.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="btn-primary text-lg">Book a Free Strategy Call</Button>
            <Button variant="outline" className="text-lg border-purple-300 text-purple-600 hover:bg-purple-50">Learn More</Button>
          </div>
          <div className="mt-8 text-gray-500">
            Trusted by startup founders & entrepreneurs scaling their online presence effortlessly.
          </div>
        </div>
      </div>
      
      <ClientImageCarousel />
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
