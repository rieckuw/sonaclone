
import { Card } from "@/components/ui/card";

const painPoints = [
  {
    problem: "I don't have time to post consistently.",
    solution: "We automate everything for you.",
    icon: "⏰"
  },
  {
    problem: "I struggle with content ideas.",
    solution: "AI + human refinement ensures quality, engaging posts.",
    icon: "💡"
  },
  {
    problem: "I don't know what to say.",
    solution: "We craft content in your authentic voice.",
    icon: "🗣️"
  },
  {
    problem: "I keep starting but never stay consistent.",
    solution: "Daily posts = 10x faster audience growth.",
    icon: "📊"
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-subtitle">
            We solve the biggest challenges entrepreneurs face when building a personal brand online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <Card key={index} className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="bg-gradient-to-r from-purple-600 to-purple-500 text-white p-8 flex items-center justify-center md:h-full">
                  <span className="text-4xl">{point.icon}</span>
                </div>
                <div className="p-8 md:col-span-2">
                  <div className="flex items-center mb-4">
                    <span className="inline-block w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center mr-3 text-xs">✕</span>
                    <h3 className="font-bold text-xl text-gray-800">{point.problem}</h3>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center mr-3 text-xs">✓</span>
                    <p className="text-lg text-gray-600">{point.solution}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="premium-button px-12 py-6">
            <span className="relative z-10 flex flex-col">
              <span className="text-xl font-bold">Get Started Now</span>
              <span className="text-xs font-light opacity-80">free consultation</span>
            </span>
            <div className="absolute inset-0 opacity-0 hover:opacity-90 transition-opacity duration-500 bg-[radial-gradient(circle,_rgba(255,255,255,0.8)_0%,_transparent_70%)] hover:blur-xl"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
