import React, { useState, useRef, useEffect } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ArrowRight, Play } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { useIsMobile } from '@/hooks/use-mobile';

const ContentPreview: React.FC = () => {
  const [beforePlaying, setBeforePlaying] = useState(false);
  const [afterPlaying, setAfterPlaying] = useState(false);
  const [hovered, setHovered] = useState<'before' | 'after' | null>(null);
  const [inView, setInView] = useState(false);
  const beforeVideoRef = useRef<HTMLVideoElement>(null);
  const afterVideoRef = useRef<HTMLVideoElement>(null);
  const beforeContainerRef = useRef<HTMLDivElement>(null);
  const afterContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  const handleBeforePlay = () => {
    if (beforeVideoRef.current && !beforePlaying) {
      if (afterVideoRef.current && !afterVideoRef.current.paused) {
        afterVideoRef.current.pause();
        setAfterPlaying(false);
      }
      
      beforeVideoRef.current.play().catch(e => console.log("Play prevented", e));
      setBeforePlaying(true);
    }
  };

  const handleAfterPlay = () => {
    if (afterVideoRef.current && !afterPlaying) {
      if (beforeVideoRef.current && !beforeVideoRef.current.paused) {
        beforeVideoRef.current.pause();
        setBeforePlaying(false);
      }
      
      afterVideoRef.current.play().catch(e => console.log("Play prevented", e));
      setAfterPlaying(true);
    }
  };
  
  const handleVideoPause = (videoRef: React.RefObject<HTMLVideoElement>, setPlaying: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (videoRef.current) {
      if (!videoRef.current.paused) {
        videoRef.current.pause();
        setPlaying(false);
      } else {
        if (videoRef === beforeVideoRef && afterVideoRef.current && !afterVideoRef.current.paused) {
          afterVideoRef.current.pause();
          setAfterPlaying(false);
        } else if (videoRef === afterVideoRef && beforeVideoRef.current && !beforeVideoRef.current.paused) {
          beforeVideoRef.current.pause();
          setBeforePlaying(false);
        }
        
        videoRef.current.play().catch(e => console.log("Play prevented", e));
        setPlaying(true);
      }
    }
  };

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

  useEffect(() => {
    const beforeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (beforeVideoRef.current) {
              if (afterVideoRef.current && !afterVideoRef.current.paused) {
                afterVideoRef.current.pause();
                setAfterPlaying(false);
              }
              
              beforeVideoRef.current.play().catch(e => console.log("Auto-play prevented", e));
              setBeforePlaying(true);
            }
          } else {
            if (beforeVideoRef.current && !beforeVideoRef.current.paused) {
              beforeVideoRef.current.pause();
              setBeforePlaying(false);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.6,
      }
    );

    const afterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (afterVideoRef.current) {
              if (beforeVideoRef.current && !beforeVideoRef.current.paused) {
                beforeVideoRef.current.pause();
                setBeforePlaying(false);
              }
              
              afterVideoRef.current.play().catch(e => console.log("Auto-play prevented", e));
              setAfterPlaying(true);
            }
          } else {
            if (afterVideoRef.current && !afterVideoRef.current.paused) {
              afterVideoRef.current.pause();
              setAfterPlaying(false);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.6,
      }
    );

    if (beforeContainerRef.current) {
      beforeObserver.observe(beforeContainerRef.current);
    }

    if (afterContainerRef.current) {
      afterObserver.observe(afterContainerRef.current);
    }

    return () => {
      if (beforeContainerRef.current) {
        beforeObserver.unobserve(beforeContainerRef.current);
      }
      if (afterContainerRef.current) {
        afterObserver.unobserve(afterContainerRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="content-preview" 
      className="py-16 md:py-20 bg-[#0e0118] relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow -z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-[#e4ff1a]/20 rounded-full blur-[120px] animate-pulse-slow -z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 md:mb-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 text-white">
            Content Like You've Never Seen
          </h2>
          <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-12 max-w-3xl mx-auto">
            Our AI generates stunning, high-quality content that looks and sounds exactly like you. See for yourself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto relative">
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className={`bg-purple-600 p-4 rounded-full shadow-[0_0_25px_5px_rgba(126,34,206,0.4)] 
                          transition-all duration-700 
                          ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
              <ArrowRight size={32} className="text-white" />
            </div>
          </div>
          
          <div className="flex justify-center md:block">
            <div 
              ref={beforeContainerRef}
              className={`relative overflow-hidden rounded-xl max-w-[280px] sm:max-w-[320px] mx-auto w-full transition-all duration-1000 
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
                    muted
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
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm 
                                  hover:bg-white/30 transition-all duration-300 animate-pulse-gradient">
                        <Play size={24} className="text-white ml-1" fill="white" fillOpacity={0.8} />
                      </div>
                    </div>
                  )}
                </AspectRatio>
              </div>
              <div className="absolute top-0 left-0 bg-black/60 text-white px-3 py-1 md:px-4 md:py-2 rounded-br-lg backdrop-blur-sm">
                <span className="font-semibold text-sm md:text-base">Before</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 md:p-4">
                <p className="text-white font-medium text-sm md:text-base">Original</p>
                <p className="text-gray-300 text-xs">2-minutes self-talking</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:block">
            <div 
              ref={afterContainerRef}
              className={`relative overflow-hidden rounded-xl max-w-[280px] sm:max-w-[320px] mx-auto w-full transition-all duration-1000 
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
                    muted
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
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm 
                                  hover:bg-white/30 transition-all duration-300 animate-pulse-gradient">
                        <Play size={24} className="text-white ml-1" fill="white" fillOpacity={0.8} />
                      </div>
                    </div>
                  )}
                </AspectRatio>
              </div>
              <div className="absolute top-0 left-0 bg-[#7e22ce] text-white px-3 py-1 md:px-4 md:py-2 rounded-br-lg backdrop-blur-sm">
                <span className="font-semibold text-sm md:text-base">After</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 md:p-4">
                <p className="text-white font-medium text-sm md:text-base">AI-Generated</p>
                <p className="text-gray-300 text-xs">Exact clone of yourself</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentPreview;
