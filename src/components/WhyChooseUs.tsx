import { Card } from "@/components/ui/card";

const painPoints = [
  {
    problem: "I don't have time to record videos.",
    solution: "No recording needed—just 1-hour setup, then fully automated.",
    icon: "⏰"
  },
  {
    problem: "I struggle with what to say.",
    solution: "AI + human curation ensures your content is always engaging.",
    icon: "💡"
  },
  {
    problem: "I don't know what to say.",
    solution: "We craft content in your authentic voice.",
    icon: "🗣️"
  },
  {
    problem: "I don't want to learn video editing or deal with posting.",
    solution: "We edit, add B-roll, and post for you—effortless growth.",
    icon: "📊"
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-32 bg-[#12031e]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            No-Brainer Solutions For<br/>
            Brain-Wrecking Problems
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            We solve the biggest personal branding challenges without wasting your time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <Card key={index} className="bg-[#e4ff1a] overflow-hidden rounded-2xl transition-all duration-300">
              <div className="p-12">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{point.icon}</span>
                  <h3 className="font-bold text-2xl text-black">{point.problem}</h3>
                </div>
                <p className="text-xl text-black/80">{point.solution}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Button className="bg-[#e4ff1a] hover:bg-[#eeff70] text-black text-xl font-bold px-12 py-8 rounded-full hover:shadow-[0_0_25px_5px_rgba(228,255,26,0.4)] transition-all duration-300">
            Get AI-Powered Personal Branding
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
