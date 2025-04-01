
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Lazy load less crucial components
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const ContentPreview = lazy(() => import("@/components/ContentPreview"));
const BookingSection = lazy(() => import("@/components/BookingSection"));

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0e0118]">
      <Navbar />
      <Hero />
      
      <Suspense fallback={<div className="h-96 flex items-center justify-center bg-[#0e0118]"></div>}>
        <HowItWorks />
        <WhyChooseUs />
        <ContentPreview />
        <BookingSection />
      </Suspense>
      
      <Footer />
      
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
