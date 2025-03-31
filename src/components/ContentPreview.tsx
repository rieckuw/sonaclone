
import React, { useState, useRef } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Play } from 'lucide-react';

const ContentPreview: React.FC = () => {
  const [beforePlaying, setBeforePlaying] = useState(false);
  const [afterPlaying, setAfterPlaying] = useState(false);
  const beforeVideoRef = useRef<HTMLVideoElement>(null);
  const afterVideoRef = useRef<HTMLVideoElement>(null);

  const handleBeforePlay = () => {
    if (beforeVideoRef.current && !beforePlaying) {
      beforeVideoRef.current.play();
      setBeforePlaying(true);
    }
  };

  const handleAfterPlay = () => {
    if (afterVideoRef.current && !afterPlaying) {
      afterVideoRef.current.play();
      setAfterPlaying(true);
    }
  };
  
  const handleVideoPause = (videoRef: React.RefObject<HTMLVideoElement>, setPlaying: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (videoRef.current) {
      if (!videoRef.current.paused) {
        videoRef.current.pause();
        setPlaying(false);
      } else {
        videoRef.current.play();
        setPlaying(true);
      }
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
            <div className="relative w-full">
              <AspectRatio ratio={9/16} className="bg-gray-900">
                <video 
                  ref={beforeVideoRef}
                  id="before-video"
                  onContextMenu={() => false}
                  controlsList="nodownload" 
                  controls={false}
                  poster="https://rickypranaya.publit.io/file/0401.jpg"
                  playsInline
                  className="w-full h-full absolute inset-0"
                  preload="auto"
                  onClick={() => handleVideoPause(beforeVideoRef, setBeforePlaying)}
                >
                  <source src="https://rickypranaya.publit.io/file/h_1080/0401.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {!beforePlaying && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/30 hover:bg-black/40 transition-all duration-300"
                    onClick={handleBeforePlay}
                  >
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all duration-300">
                      <Play size={36} className="text-white ml-1" fill="white" fillOpacity={0.8} />
                    </div>
                  </div>
                )}
              </AspectRatio>
            </div>
            <div className="absolute top-0 left-0 bg-black/60 text-white px-4 py-2 rounded-br-lg">
              <span className="font-semibold">Before</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-medium">Original</p>
              <p className="text-gray-300 text-sm">2-minutes self-talking</p>
            </div>
          </div>

          {/* After Example */}
          <div className="relative overflow-hidden rounded-lg max-w-[280px] mx-auto w-full">
            <div className="relative w-full">
              <AspectRatio ratio={9/16} className="bg-gray-900">
                <video 
                  ref={afterVideoRef}
                  id="after-video"
                  onContextMenu={() => false}
                  controlsList="nodownload" 
                  controls={false}
                  poster="https://rickypranaya.publit.io/file/dennish.jpg"
                  playsInline
                  className="w-full h-full absolute inset-0"
                  preload="auto"
                  onClick={() => handleVideoPause(afterVideoRef, setAfterPlaying)}
                >
                  <source src="https://rickypranaya.publit.io/file/h_1080/pitching-4.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {!afterPlaying && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/30 hover:bg-black/40 transition-all duration-300"
                    onClick={handleAfterPlay}
                  >
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all duration-300">
                      <Play size={36} className="text-white ml-1" fill="white" fillOpacity={0.8} />
                    </div>
                  </div>
                )}
              </AspectRatio>
            </div>
            <div className="absolute top-0 left-0 bg-[#7e22ce] text-white px-4 py-2 rounded-br-lg">
              <span className="font-semibold">After</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-medium">AI-Generated</p>
              <p className="text-gray-300 text-sm">Exact clone of yourself</p>
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
