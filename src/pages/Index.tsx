
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContentPreview from "@/components/ContentPreview";
import StickyCallToAction from "@/components/StickyCallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0e0118]">
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <ContentPreview />
      <div className="bg-[#1c0639] py-32 text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
          Have Some Questions?<br/>
          Get In Touch
        </h2>
        <button className="bg-[#7e22ce] hover:bg-[#9333ea] text-white text-xl font-bold px-12 py-6 rounded-full hover:shadow-[0_0_25px_5px_rgba(126,34,206,0.4)] transition-all duration-300 mt-12">
          Book a call
        </button>
      </div>
      <StickyCallToAction />
      <Footer />
    </div>
  );
};

export default Index;
