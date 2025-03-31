
import React, { useState, useRef } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card } from '@/components/ui/card';
import { Play, Pause } from 'lucide-react';

const ContentPreview: React.FC = () => {
  const [beforeIsPlaying, setBeforeIsPlaying] = useState(false);
  const [afterIsPlaying, setAfterIsPlaying] = useState(false);
  const beforeVideoRef = useRef<HTMLVideoElement>(null);
  const afterVideoRef = useRef<HTMLVideoElement>(null);

  const toggleBeforeVideo = () => {
    if (beforeVideoRef.current) {
      if (beforeIsPlaying) {
        beforeVideoRef.current.pause();
      } else {
        beforeVideoRef.current.play();
      }
      setBeforeIsPlaying(!beforeIsPlaying);
    }
  };

  const toggleAfterVideo = () => {
    if (afterVideoRef.current) {
      if (afterIsPlaying) {
        afterVideoRef.current.pause();
      } else {
        afterVideoRef.current.play();
      }
      setAfterIsPlaying(!afterIsPlaying);
    }
  };

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
            <div className="relative w-full cursor-pointer" onClick={toggleBeforeVideo}>
              <AspectRatio ratio={9/16} className="bg-gray-900">
                <video 
                  ref={beforeVideoRef}
                  src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWR0b3F0aW5zc3B1M3M3bjFidWR4YXptaWo0ZjFjZ3Ftc3llNmo2NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7kjQzYa60nZdiKDBta/giphy.mp4"
                  poster="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWR0b3F0aW5zc3B1M3M3bjFidWR4YXptaWo0ZjFjZ3Ftc3llNmo2NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7kjQzYa60nZdiKDBta/giphy_s.gif"
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  {!beforeIsPlaying && (
                    <div className="bg-black/50 rounded-full p-3">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  )}
                </div>
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
            <div className="relative w-full cursor-pointer" onClick={toggleAfterVideo}>
              <AspectRatio ratio={9/16} className="bg-gray-900">
                <video 
                  ref={afterVideoRef}
                  src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHlkd3JucmRub2x6Ym5rdG50MXNlNnk4ODZyaHE3d2dvcDl6bnJ4YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3utUCaHVlnY0sAsO5F/giphy.mp4"
                  poster="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHlkd3JucmRub2x6Ym5rdG50MXNlNnk4ODZyaHE3d2dvcDl6bnJ4YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3utUCaHVlnY0sAsO5F/giphy_s.gif"
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  {!afterIsPlaying && (
                    <div className="bg-black/50 rounded-full p-3">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  )}
                </div>
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
