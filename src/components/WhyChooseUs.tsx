
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
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-subtitle">
            We solve the biggest challenges entrepreneurs face when building a personal brand online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="bg-purple-600 text-white p-6 flex items-center justify-center md:h-full">
                  <span className="text-4xl">{point.icon}</span>
                </div>
                <div className="p-6 md:col-span-2">
                  <div className="flex items-center mb-3">
                    <span className="inline-block w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center mr-2 text-xs">✕</span>
                    <h3 className="font-semibold text-lg text-gray-800">{point.problem}</h3>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center mr-2 text-xs">✓</span>
                    <p className="text-gray-600">{point.solution}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="btn-primary">Get Started Now</button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
