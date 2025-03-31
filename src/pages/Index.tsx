
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContentPreview from "@/components/ContentPreview";
import BookingSection from "@/components/BookingSection";
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
      <BookingSection />
      <StickyCallToAction />
      <Footer />
    </div>
  );
};

export default Index;
