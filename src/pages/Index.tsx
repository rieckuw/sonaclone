
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import ClientResults from "@/components/ClientResults";
import StickyCallToAction from "@/components/StickyCallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50/30">
      <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] bg-repeat opacity-5 -z-10"></div>
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
