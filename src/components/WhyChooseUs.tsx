
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const painPoints = [
  {
    problem: "I don't have time to record videos.",
    solution: "Forget recording. One quick setup, and we create daily content for you—fully automated.",
    icon: "⏰"
  },
  {
    problem: "I don't sound natural on camera.",
    solution: "We clone your voice, face, and style—so real that no one will notice. Your audience sees you, effortlessly showing up every day.",
    icon: "🗣️"
  },
  {
    problem: "I struggle with what to say.",
    solution: "No more guesswork. AI + human expertise craft engaging scripts tailored to your niche.",
    icon: "💡"
  },
  {
    problem: "I don't want to edit or post videos.",
    solution: "Done for you. We handle scripting, editing, B-roll, and posting—so you grow effortlessly.",
    icon: "📊"
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-32 bg-[#12031e]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Personal Branding Without Headache
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            We eliminate the biggest struggles entrepreneurs face when trying to grow their online presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <Card key={index} className="bg-[#7e22ce] overflow-hidden rounded-2xl transition-all duration-300">
              <div className="p-12">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{point.icon}</span>
                  <h3 className="font-bold text-2xl text-white">{point.problem}</h3>
                </div>
                <p className="text-xl text-white/80">{point.solution}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Button className="bg-[#7e22ce] hover:bg-[#9333ea] text-white text-xl font-bold px-12 py-8 rounded-full hover:shadow-[0_0_25px_5px_rgba(126,34,206,0.4)] transition-all duration-300">
            Speak To Our Team Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
