
import { Card } from "@/components/ui/card";

const steps = [
  {
    id: 1,
    title: "Setup",
    description: "We learn your expertise, tone, and audience in a 1-hour session.",
    icon: "📝"
  },
  {
    id: 2,
    title: "AI + Human-Enhanced Content",
    description: "We generate & refine 30 engaging posts per month.",
    icon: "🧠"
  },
  {
    id: 3,
    title: "Automated Posting",
    description: "You stay visible daily—without ever writing a word.",
    icon: "📱"
  },
  {
    id: 4,
    title: "Watch Your Brand Grow",
    description: "More engagement, more followers, more opportunities.",
    icon: "📈"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Our streamlined process delivers AI-powered personal branding with minimal effort from you.
          </p>
        </div>

        <div className="mb-20">
          <div className="relative rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-100 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Before</h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/db8d287c-752c-470e-9300-9b1c3ab85b6c.png" 
                    alt="Before AI transformation" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="mt-4 text-gray-600">Raw content without AI enhancement</p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">After</h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/df09ba5d-7b58-46a2-8312-e2dc00cec563.png" 
                    alt="After AI transformation" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="mt-4 text-gray-600">Professionally AI-enhanced content ready to engage</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <Card key={step.id} className="p-6 card-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl mr-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold">Step {step.id}</h3>
              </div>
              <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
              <p className="text-gray-600">{step.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="btn-primary">Start Now</button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
