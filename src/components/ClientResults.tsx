
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const testimonials = [
  {
    name: "Dennis",
    role: "Tech Founder",
    image: "/lovable-uploads/db7b5bb4-bf09-4d17-aef1-e809727a989d.png",
    quote: "Sonaclone has been a game-changer for my personal brand. I've seen 10x more engagement and leads coming in through LinkedIn.",
    followers: "4.6K+"
  },
  {
    name: "Rey",
    role: "Marketing Agency Owner",
    image: "/lovable-uploads/db8d287c-752c-470e-9300-9b1c3ab85b6c.png",
    quote: "I'm getting so many requests I think I should stop posting videos.",
    followers: "12K+"
  },
  {
    name: "Ricky",
    role: "E-commerce Entrepreneur",
    image: "/lovable-uploads/465216b0-e51e-4a00-9b1f-28f73646f9c4.png",
    quote: "The quality of content is amazing and the engagement I'm getting is ridiculous.",
    followers: "8.3K+"
  }
];

const stats = [
  { number: 10, label: "× more engagement", suffix: "+" },
  { number: 30, label: "posts per month", suffix: "" },
  { number: 3, label: "× more opportunities", suffix: "+" }
];

const ClientResults = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  return (
    <section id="results" className="py-32 bg-[#0e0118]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Success Stories
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Clients don't just love us because we save them time. It's because we also get them results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 bg-[#1c0639] rounded-2xl border border-[#7e22ce]/20">
              <div className="flex items-center justify-center">
                <span 
                  className="counter text-6xl md:text-7xl font-bold text-white"
                  style={{ "--num": stat.number } as React.CSSProperties}
                ></span>
                <span className="text-6xl md:text-7xl font-bold text-white">{stat.suffix}</span>
              </div>
              <p className="text-2xl text-gray-400 mt-4 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[#e4ff1a] overflow-hidden rounded-2xl transition-all duration-300">
              <div className="relative aspect-w-16 aspect-h-9 h-64">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="font-bold text-xl text-black">{testimonial.name}</div>
                    <div className="text-sm text-black/70">{testimonial.role}</div>
                  </div>
                  <div className="bg-black text-[#e4ff1a] px-3 py-1 rounded-full text-sm font-bold">
                    {testimonial.followers}
                  </div>
                </div>
                <p className="text-black/80 text-lg mb-4">"{testimonial.quote}"</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Button className="bg-[#e4ff1a] hover:bg-[#eeff70] text-black text-xl font-bold px-12 py-8 rounded-full hover:shadow-[0_0_25px_5px_rgba(228,255,26,0.4)] transition-all duration-300">
            Join the Winning Clients
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClientResults;
