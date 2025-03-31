
import React, { useState, useRef, useEffect } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Play, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';

const ContentPreview: React.FC = () => {
  const [beforePlaying, setBeforePlaying] = useState(false);
  const [afterPlaying, setAfterPlaying] = useState(false);
  const [comparison, setComparison] = useState(50); // Default position at 50% (middle)
  
  const beforeVideoRef = useRef<HTMLVideoElement>(null);
  const afterVideoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Handle play actions
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
  
  // Handle slider comparison
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = Math.round((x / rect.width) * 100);
    
    setComparison(percentage);
  };

  return (
    <section id="content-preview" className="py-16 bg-[#0e0118] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
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
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Interactive Comparison Slider */}
          <div 
            ref={containerRef}
            className="relative max-w-2xl w-full rounded-lg overflow-hidden cursor-pointer"
            onMouseMove={handleMouseMove}
            onClick={handleMouseMove}
          >
            {/* Before Video (Full Width) */}
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
                  loop
                  muted
                  className="w-full h-full absolute inset-0 object-cover"
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
              <div className="absolute top-0 left-0 bg-black/60 text-white px-4 py-2 rounded-br-lg">
                <span className="font-semibold">Before</span>
              </div>
            </div>
            
            {/* After Video (Clipped by slider) */}
            <div 
              className="absolute top-0 left-0 h-full overflow-hidden"
              style={{ width: `${comparison}%` }}
            >
              <div className="relative w-full h-full" style={{ width: containerRef.current?.clientWidth || 'auto' }}>
                <AspectRatio ratio={9/16} className="bg-gray-900">
                  <video 
                    ref={afterVideoRef}
                    id="after-video"
                    onContextMenu={() => false}
                    controlsList="nodownload" 
                    controls={false}
                    poster="https://rickypranaya.publit.io/file/dennish.jpg"
                    playsInline
                    loop
                    muted
                    className="w-full h-full absolute inset-0 object-cover"
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
                <div className="absolute top-0 left-0 bg-[#7e22ce] text-white px-4 py-2 rounded-br-lg">
                  <span className="font-semibold">After</span>
                </div>
              </div>
            </div>
            
            {/* Divider Line & Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_5px_rgba(126,34,206,0.6)]"
              style={{ left: `${comparison}%`, transform: 'translateX(-50%)' }}
            >
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#7e22ce] border-2 border-white flex items-center justify-center shadow-lg cursor-grab"
                whileTap={{ cursor: 'grabbing' }}
                whileHover={{ scale: 1.1 }}
                animate={{ 
                  boxShadow: ['0 0 10px 5px rgba(126,34,206,0.3)', '0 0 20px 5px rgba(126,34,206,0.6)', '0 0 10px 5px rgba(126,34,206,0.3)']
                }}
                transition={{ 
                  boxShadow: { repeat: Infinity, duration: 2 }
                }}
              >
                <div className="flex items-center justify-center space-x-1">
                  <ArrowRight size={12} className="text-white rotate-180" />
                  <ArrowRight size={12} className="text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
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
