
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const steps = [
  {
    id: 1,
    title: "1-Hour Setup Call",
    description: "We clone your voice & avatar—no need to record again.",
    icon: "⚡"
  },
  {
    id: 2,
    title: "AI + Human-Enhanced Content",
    description: "Our AI generates videos in your tone, style, and expertise.",
    icon: "🧠"
  },
  {
    id: 3,
    title: "Daily Posting, Fully Automated",
    description: "We schedule & post for you—you do nothing.",
    icon: "📱"
  },
  {
    id: 4,
    title: "Watch Your Brand Grow Effortlessly",
    description: "Engagement, followers, and business opportunities come to you.",
    icon: "📈"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-32 bg-[#0e0118]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            It's a one-time setup, then fully automated. Our streamlined process delivers AI-powered personal branding with minimal effort from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step) => (
            <Card key={step.id} className="bg-[#1c0639] border-[#7e22ce]/20 p-8 rounded-2xl hover:shadow-[0_0_25px_5px_rgba(126,34,206,0.2)] transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#7e22ce]/20 rounded-full flex items-center justify-center text-3xl mr-4">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-[#e4ff1a] hover:bg-[#eeff70] text-black text-xl font-bold px-12 py-8 rounded-full hover:shadow-[0_0_25px_5px_rgba(228,255,26,0.4)] transition-all duration-300">
            Start Now – 1-Hour Setup
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
