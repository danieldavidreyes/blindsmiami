import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const StickyVideoHero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const containerHeight = containerRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress within the sticky section
        const scrolled = Math.max(0, -rect.top);
        const maxScroll = containerHeight - windowHeight;
        const progress = Math.min(scrolled / maxScroll, 1);
        
        setScrollProgress(progress);
        
        // Update video time based on scroll progress
        if (videoRef.current) {
          const duration = videoRef.current.duration || 0;
          if (duration > 0) {
            videoRef.current.currentTime = progress * duration;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center bg-gradient-to-br from-amber-900 via-stone-800 to-amber-950 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover opacity-30"
            muted
            playsInline
            preload="metadata"
          >
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            <div className="w-full h-full bg-gradient-to-br from-amber-900 via-stone-800 to-amber-950"></div>
          </video>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Content */}
        <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              Blinds of Miami
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 mb-8">
              Guaranteed Best Prices in South FL
            </p>
            <p className="text-lg text-white/80 mb-8">
              Scroll to see blinds open
            </p>
          </motion.div>
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-amber-500 rounded-full"
              style={{ width: `${scrollProgress * 100}%` }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
            />
          </div>
          <p className="text-white text-sm text-center mt-2">
            Video Progress: {Math.round(scrollProgress * 100)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default StickyVideoHero;

