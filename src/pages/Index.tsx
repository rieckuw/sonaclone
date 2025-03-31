
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import ClientResults from "@/components/ClientResults";
import StickyCallToAction from "@/components/StickyCallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <ClientResults />
      <StickyCallToAction />
      <Footer />
    </div>
  );
};

export default Index;
