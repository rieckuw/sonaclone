
import { useState, useEffect } from 'react';

const contentPreviews = [
  {
    id: 1,
    imageUrl: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjQ4bnMwMnoyaTloZ2VucG11bjNkamNiNmY2cTZ4YWJkNnY2ZzkybCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1wsz3cEtCaRRUpRwVl/giphy.gif", // AI content example
    caption: "AI-Generated Content Examples"
  }
];

const ContentPreview = () => {
  return (
    <section id="content-preview" className="py-32 bg-[#0e0118]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Content Like You've Never Seen
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Our AI generates stunning, high-quality content that looks and sounds exactly like you. See for yourself.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 gap-8">
            {contentPreviews.map((preview) => (
              <div key={preview.id} className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={preview.imageUrl} 
                  alt="AI-Generated Content Examples" 
                  className="w-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
                  <div className="p-8">
                    <p className="text-2xl font-bold text-white">{preview.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentPreview;
