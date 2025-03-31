
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone, Calendar, MessageCircle, User, BarChart } from "lucide-react";

const steps = [
  {
    id: "step-1",
    title: "1-Hour Setup Call",
    description: "We clone your voice & avatar—no need to record again.",
    icon: <User className="h-6 w-6" />,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    content: "During our initial 1-hour call, we'll capture everything needed to clone your voice and create your digital avatar. This one-time setup eliminates the need for you to record content repeatedly, saving you countless hours.",
  },
  {
    id: "step-2",
    title: "AI + Human-Enhanced Content",
    description: "Our AI generates videos in your tone, style, and expertise.",
    icon: <MessageCircle className="h-6 w-6" />,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    content: "Our advanced AI system creates content that perfectly matches your voice, style, and expertise. Each piece is then reviewed by human experts to ensure quality and authenticity before being prepared for posting.",
  },
  {
    id: "step-3",
    title: "Daily Posting, Fully Automated",
    description: "We schedule & post for you—you do nothing.",
    icon: <Calendar className="h-6 w-6" />,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    content: "With our fully automated system, your content is scheduled and posted daily across all your social platforms. You don't need to lift a finger—the entire process happens seamlessly in the background while you focus on what matters most.",
  },
  {
    id: "step-4",
    title: "Watch Your Brand Grow Effortlessly",
    description: "Engagement, followers, and business opportunities come to you.",
    icon: <BarChart className="h-6 w-6" />,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    content: "As your consistent, high-quality content reaches your audience daily, watch your engagement metrics climb. Your following will grow organically, bringing new business opportunities directly to your inbox without the traditional time investment.",
  }
];

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("step-1");

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

        <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full lg:w-[30%] flex flex-col"
            orientation="vertical"
          >
            <TabsList className="flex flex-row lg:flex-col h-auto bg-[#1c0639]/50 rounded-xl p-2 gap-2">
              {steps.map((step) => (
                <TabsTrigger
                  key={step.id}
                  value={step.id}
                  className="w-full h-auto py-4 px-4 gap-3 data-[state=active]:bg-[#1c0639] data-[state=active]:text-white flex flex-row items-center justify-start"
                >
                  <div className={`${step.bgColor} ${step.color} p-2 rounded-lg`}>
                    {step.icon}
                  </div>
                  <div className="text-left hidden md:block">
                    <div className="text-xs uppercase font-semibold opacity-80">
                      {step.id === "step-1" ? "STEP 1" : step.id === "step-2" ? "STEP 2" : step.id === "step-3" ? "STEP 3" : "STEP 4"}
                    </div>
                    <div className="font-semibold whitespace-normal">{step.title}</div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="w-full lg:w-[70%]">
            {steps.map((step) => (
              <TabsContent 
                key={step.id} 
                value={step.id} 
                className="mt-0 rounded-xl bg-[#1c0639]/70 p-8 border border-[#7e22ce]/20 shadow-lg"
              >
                <div className="flex flex-col space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                  
                  <div className="bg-[#1c0639] rounded-xl p-6 border border-[#7e22ce]/20">
                    <p className="text-gray-200">{step.content}</p>
                  </div>

                  <div className="flex justify-center mt-8">
                    <div className="relative w-full max-w-md h-64">
                      <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="relative">
                          <div className={`${step.bgColor} w-20 h-20 rounded-full flex items-center justify-center`}>
                            {step.icon}
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#7e22ce] flex items-center justify-center text-white font-bold">
                            {step.id === "step-1" ? "1" : step.id === "step-2" ? "2" : step.id === "step-3" ? "3" : "4"}
                          </div>
                        </div>
                      </div>
                      
                      {/* Connected icons/nodes like in the reference image */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 opacity-70">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-16">
                          <div className="bg-purple-600/80 w-12 h-12 rounded-full flex items-center justify-center text-white">
                            <Phone className="w-5 h-5" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-16">
                          <div className="bg-purple-600/80 w-12 h-12 rounded-full flex items-center justify-center text-white">
                            <Calendar className="w-5 h-5" />
                          </div>
                        </div>
                        <div className="absolute left-0 top-1/2 -translate-x-16 -translate-y-1/2">
                          <div className="bg-purple-600/80 w-12 h-12 rounded-full flex items-center justify-center text-white">
                            <Mail className="w-5 h-5" />
                          </div>
                        </div>
                        <div className="absolute right-0 top-1/2 translate-x-16 -translate-y-1/2">
                          <div className="bg-purple-600/80 w-12 h-12 rounded-full flex items-center justify-center text-white">
                            <MessageCircle className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-[#7e22ce] hover:bg-[#9333ea] text-white text-xl font-bold px-12 py-8 rounded-full hover:shadow-[0_0_25px_5px_rgba(126,34,206,0.4)] transition-all duration-300">
            Start Now – 1-Hour Setup
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
