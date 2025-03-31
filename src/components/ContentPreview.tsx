
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card } from '@/components/ui/card';

const ContentPreview: React.FC = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Before Example */}
          <div className="relative overflow-hidden rounded-lg max-w-[280px] mx-auto w-full">
            <div className="relative w-full">
              <AspectRatio ratio={9/16} className="bg-gray-900">
                <video 
                  onContextMenu={() => false}
                  controlsList="nodownload" 
                  controls 
                  poster="https://rickypranaya.publit.io/file/0401.jpg"
                  playsInline
                  className="w-full h-full absolute inset-0"
                >
                  <source src="https://rickypranaya.publit.io/file/h_480/0401.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </AspectRatio>
            </div>
            <div className="absolute top-0 left-0 bg-black/60 text-white px-4 py-2 rounded-br-lg">
              <span className="font-semibold">Before</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-medium">Original Content</p>
              <p className="text-gray-300 text-sm">Typical self-recorded content</p>
            </div>
          </div>

          {/* After Example */}
          <div className="relative overflow-hidden rounded-lg max-w-[280px] mx-auto w-full">
            <div className="relative w-full">
              <AspectRatio ratio={9/16} className="bg-gray-900">
                <video 
                  onContextMenu={() => false}
                  controlsList="nodownload" 
                  controls 
                  poster="https://rickypranaya.publit.io/file/dennish.jpg"
                  playsInline
                  className="w-full h-full absolute inset-0"
                >
                  <source src="https://rickypranaya.publit.io/file/h_480/pitching-4.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </AspectRatio>
            </div>
            <div className="absolute top-0 left-0 bg-[#7e22ce] text-white px-4 py-2 rounded-br-lg">
              <span className="font-semibold">After</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-medium">AI-Enhanced Content</p>
              <p className="text-gray-300 text-sm">Professionally edited & enhanced</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-[#7e22ce] hover:bg-[#9333ea] text-white text-xl font-bold px-12 py-6 rounded-full hover:shadow-[0_0_25px_5px_rgba(126,34,206,0.4)] transition-all duration-300">
            See More Examples
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentPreview;
