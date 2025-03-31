
import React, { useState, useRef, useEffect } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ArrowRight, Play, ArrowLeftRight } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

const ContentPreview: React.FC = () => {
  const [beforePlaying, setBeforePlaying] = useState(false);
  const [afterPlaying, setAfterPlaying] = useState(false);
  const [hovered, setHovered] = useState<'before' | 'after' | null>(null);
  const [inView, setInView] = useState(false);
  const beforeVideoRef = useRef<HTMLVideoElement>(null);
  const afterVideoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

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

  // Intersection Observer to trigger animations when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="content-preview" 
      className="py-32 bg-[#0e0118] relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow -z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-[#e4ff1a]/20 rounded-full blur-[120px] animate-pulse-slow -z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-24 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Content Like You've Never Seen
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Our AI generates stunning, high-quality content that looks and sounds exactly like you. See for yourself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto relative">
          {/* Central arrow between videos */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className={`bg-[#e4ff1a] p-4 rounded-full shadow-[0_0_25px_5px_rgba(228,255,26,0.4)] 
                          transition-all duration-700 
                          ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
              <ArrowLeftRight size={32} className="text-[#0e0118]" />
            </div>
          </div>
          
          {/* Before Example */}
          <div 
            className={`relative overflow-hidden rounded-xl max-w-[320px] mx-auto w-full transition-all duration-1000 
                      ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
            onMouseEnter={() => setHovered('before')}
            onMouseLeave={() => setHovered(null)}
          >
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
                  className={`w-full h-full absolute inset-0 transition-all duration-300 ${hovered === 'before' ? 'scale-[1.03]' : 'scale-100'}`}
                  preload="auto"
                  onClick={() => handleVideoPause(beforeVideoRef, setBeforePlaying)}
                >
                  <source src="https://rickypranaya.publit.io/file/h_1080/0401.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {!beforePlaying && (
                  <div 
                    className={`absolute inset-0 flex items-center justify-center cursor-pointer 
                              bg-black/40 hover:bg-black/30 
                              transition-all duration-300`}
                    onClick={handleBeforePlay}
                  >
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm 
                                hover:bg-white/30 transition-all duration-300 animate-pulse-gradient">
                      <Play size={36} className="text-white ml-1" fill="white" fillOpacity={0.8} />
                    </div>
                  </div>
                )}
              </AspectRatio>
            </div>
            <div className="absolute top-0 left-0 bg-black/60 text-white px-4 py-2 rounded-br-lg backdrop-blur-sm">
              <span className="font-semibold">Before</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-medium">Original</p>
              <p className="text-gray-300 text-sm">2-minutes self-talking</p>
            </div>
            
            {/* Animated indicator pointing to the Before video */}
            <div className={`absolute -left-6 md:-left-12 top-4 transition-all duration-700 
                          ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="flex items-center">
                <div className="text-white bg-[#7e22ce] p-1 md:p-2 rounded-full">
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transform rotate-180" />
                </div>
                <div className="ml-2 hidden md:block bg-[#7e22ce] text-white px-3 py-1 rounded-md text-sm">
                  Original Recording
                </div>
              </div>
            </div>
          </div>

          {/* After Example */}
          <div 
            className={`relative overflow-hidden rounded-xl max-w-[320px] mx-auto w-full transition-all duration-1000 
                      ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
            onMouseEnter={() => setHovered('after')}
            onMouseLeave={() => setHovered(null)}
          >
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
                  className={`w-full h-full absolute inset-0 transition-all duration-300 ${hovered === 'after' ? 'scale-[1.03]' : 'scale-100'}`}
                  preload="auto"
                  onClick={() => handleVideoPause(afterVideoRef, setAfterPlaying)}
                >
                  <source src="https://rickypranaya.publit.io/file/h_1080/pitching-4.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {!afterPlaying && (
                  <div 
                    className={`absolute inset-0 flex items-center justify-center cursor-pointer 
                              bg-black/40 hover:bg-black/30 
                              transition-all duration-300`}
                    onClick={handleAfterPlay}
                  >
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm 
                                hover:bg-white/30 transition-all duration-300 animate-pulse-gradient">
                      <Play size={36} className="text-white ml-1" fill="white" fillOpacity={0.8} />
                    </div>
                  </div>
                )}
              </AspectRatio>
            </div>
            <div className="absolute top-0 left-0 bg-[#7e22ce] text-white px-4 py-2 rounded-br-lg backdrop-blur-sm">
              <span className="font-semibold">After</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-medium">AI-Generated</p>
              <p className="text-gray-300 text-sm">Exact clone of yourself</p>
            </div>
            
            {/* Animated indicator pointing to the After video */}
            <div className={`absolute -right-6 md:-right-12 top-4 transition-all duration-700 
                          ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="flex items-center flex-row-reverse">
                <div className="text-white bg-[#7e22ce] p-1 md:p-2 rounded-full">
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="mr-2 hidden md:block bg-[#7e22ce] text-white px-3 py-1 rounded-md text-sm">
                  AI-Generated Clone
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`mt-12 text-center transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-white/70 text-lg italic">See how our AI transforms a simple recording into professional-grade content</p>
        </div>
      </div>
    </section>
  );
};

export default ContentPreview;
