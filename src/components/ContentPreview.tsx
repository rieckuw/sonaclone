
import React, { useState, useRef, useEffect } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Play, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ContentPreview: React.FC = () => {
  const [beforePlaying, setBeforePlaying] = useState(false);
  const [afterPlaying, setAfterPlaying] = useState(false);
  const [activeView, setActiveView] = useState('split'); // 'split', 'before', 'after'
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

  useEffect(() => {
    // Reset videos when changing views
    if (beforeVideoRef.current && afterVideoRef.current) {
      beforeVideoRef.current.pause();
      afterVideoRef.current.pause();
      setBeforePlaying(false);
      setAfterPlaying(false);
    }
  }, [activeView]);

  return (
    <section id="content-preview" className="py-24 bg-[#0e0118] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
          >
            Content Like You've Never Seen
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Our AI generates stunning, high-quality content that looks and sounds exactly like you. See for yourself.
          </motion.p>

          <div className="flex justify-center gap-4 mb-16">
            <Button 
              onClick={() => setActiveView('split')}
              variant={activeView === 'split' ? 'default' : 'outline'}
              className={`${activeView === 'split' ? 'bg-[#7e22ce] hover:bg-[#9333ea]' : 'bg-transparent border-[#7e22ce] text-[#7e22ce]'} transition-all duration-300`}
            >
              Compare View
            </Button>
            <Button 
              onClick={() => setActiveView('before')}
              variant={activeView === 'before' ? 'default' : 'outline'}
              className={`${activeView === 'before' ? 'bg-[#7e22ce] hover:bg-[#9333ea]' : 'bg-transparent border-[#7e22ce] text-[#7e22ce]'} transition-all duration-300`}
            >
              Before
            </Button>
            <Button 
              onClick={() => setActiveView('after')}
              variant={activeView === 'after' ? 'default' : 'outline'}
              className={`${activeView === 'after' ? 'bg-[#7e22ce] hover:bg-[#9333ea]' : 'bg-transparent border-[#7e22ce] text-[#7e22ce]'} transition-all duration-300`}
            >
              After
            </Button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {activeView === 'split' && (
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
              {/* Before Example */}
              <div className="relative overflow-hidden rounded-lg max-w-[280px] w-full transition-all transform hover:-translate-y-2 duration-300">
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

              {/* Arrow Animation */}
              <div className="my-6 md:my-0 transform md:-translate-y-4">
                <div className="relative flex items-center justify-center w-16 h-16">
                  <div className="absolute w-16 h-16 bg-[#7e22ce]/20 rounded-full animate-pulse"></div>
                  <ArrowRight size={36} className="text-[#7e22ce] animate-pulse-slow" />
                </div>
              </div>

              {/* After Example */}
              <div className="relative overflow-hidden rounded-lg max-w-[280px] w-full transition-all transform hover:-translate-y-2 duration-300 shadow-[0_0_25px_5px_rgba(126,34,206,0.3)]">
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
          )}

          {activeView === 'before' && (
            <div className="flex justify-center">
              {/* Full-width Before Example */}
              <div className="relative overflow-hidden rounded-lg max-w-[320px] w-full">
                <div className="relative w-full">
                  <AspectRatio ratio={9/16} className="bg-gray-900">
                    <video 
                      ref={beforeVideoRef}
                      id="before-video-full"
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
            </div>
          )}

          {activeView === 'after' && (
            <div className="flex justify-center">
              {/* Full-width After Example */}
              <div className="relative overflow-hidden rounded-lg max-w-[320px] w-full shadow-[0_0_25px_5px_rgba(126,34,206,0.3)]">
                <div className="relative w-full">
                  <AspectRatio ratio={9/16} className="bg-gray-900">
                    <video 
                      ref={afterVideoRef}
                      id="after-video-full"
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
          )}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            With just a 2-minute recording from you, our AI can generate unlimited high-quality videos—your face, your voice, your expertise.
          </p>
        </motion.div>
      </div>

      {/* Background glow effect */}
      <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 w-3/4 h-80 bg-[#7e22ce]/10 blur-[100px] rounded-full"></div>
    </section>
  );
};

export default ContentPreview;
