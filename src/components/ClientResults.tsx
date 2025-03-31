
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Dennis",
    role: "Tech Founder",
    image: "/lovable-uploads/db7b5bb4-bf09-4d17-aef1-e809727a989d.png",
    quote: "Sonaclone has been a game-changer for my personal brand. I've seen 10x more engagement and leads coming in through LinkedIn."
  },
  {
    name: "Rey",
    role: "Marketing Agency Owner",
    image: "/lovable-uploads/db8d287c-752c-470e-9300-9b1c3ab85b6c.png",
    quote: "The AI-generated content is so authentic that people are shocked when they learn I didn't write it myself. Incredible ROI."
  },
  {
    name: "Ricky",
    role: "E-commerce Entrepreneur",
    image: "/lovable-uploads/465216b0-e51e-4a00-9b1f-28f73646f9c4.png",
    quote: "I used to spend hours trying to create content. Now I get 30 posts a month and my personal brand has exploded."
  }
];

const stats = [
  { number: 10, label: "× engagement", suffix: "+" },
  { number: 30, label: "posts per month", suffix: "" },
  { number: 3, label: "× more opportunities", suffix: "+" }
];

const ClientResults = () => {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Client Results & Testimonials</h2>
          <p className="section-subtitle">
            Our clients are experiencing breakthrough growth in their personal brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center">
                <span 
                  className="counter text-5xl md:text-6xl font-bold text-purple-600"
                  style={{ "--num": stat.number } as React.CSSProperties}
                ></span>
                <span className="text-5xl md:text-6xl font-bold text-purple-600">{stat.suffix}</span>
              </div>
              <p className="text-xl text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden card-shadow">
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="object-cover w-full h-64"
                />
              </div>
              <div className="p-6">
                <div className="text-yellow-500 mb-4">
                  {"★★★★★"}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="btn-primary">Join the Winning Clients</button>
        </div>
      </div>
    </section>
  );
};

export default ClientResults;
