
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContentPreview from "@/components/ContentPreview";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import StickyCallToAction from "@/components/StickyCallToAction";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-[#0e0118] transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <ContentPreview />
      <BookingSection />
      <Footer />
      <StickyCallToAction />
      
      {/* Add smooth scrolling behavior */}
      <style dangerouslySetInnerHTML={{ __html: `
        html {
          scroll-behavior: smooth;
        }
      `}} />
    </div>
  );
};

export default Index;
