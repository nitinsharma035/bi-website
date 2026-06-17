import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const revealImages = [
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400&auto=format&fit=crop"
];

const InteractiveBanner = () => {
  const [trail, setTrail] = useState([]);
  
  // FIXED COMPONENT: Lazy initialization sets state BEFORE effect mounts to prevent cascading renders
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(min-width: 768px) and (pointer: fine)").matches;
    }
    return false;
  });
  
  const lastMousePos = useRef({ x: 0, y: 0 });
  const imageIndexRef = useRef(0);
  const containerRef = useRef(null);

  const itcStyle = { fontFamily: '"ITCAvantGardeStd", sans-serif' };

  // Synchronize state strictly via async event subscription listeners without synchronous inline updates
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    
    const handleDeviceCheck = (e) => {
      setIsDesktop(e.matches);
    };
    
    // Modern cross-browser event listener configuration 
    mediaQuery.addEventListener("change", handleDeviceCheck);
    return () => mediaQuery.removeEventListener("change", handleDeviceCheck);
  }, []);

  const handleMouseMove = (e) => {
    // COMPLETE BLOCK FOR MOBILE DEVICES OR TOUCH PADS
    if (!isDesktop || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;

    const distanceX = currentX - lastMousePos.current.x;
    const distanceY = currentY - lastMousePos.current.y;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance > 85) {
      const newImage = {
        id: Date.now() + Math.random(),
        x: currentX,
        y: currentY,
        src: revealImages[imageIndexRef.current],
        rotation: Math.random() * 16 - 8
      };

      setTrail((prev) => [...prev, newImage]);
      imageIndexRef.current = (imageIndexRef.current + 1) % revealImages.length;
      lastMousePos.current = { x: currentX, y: currentY };
    }
  };

  useEffect(() => {
    if (trail.length > 0) {
      const timer = setTimeout(() => {
        setTrail((prev) => prev.slice(1));
      }, 60); 
      return () => clearTimeout(timer);
    }
  }, [trail]);

  const handleMouseLeave = () => {
    setTrail([]); 
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="hidden md:flex relative w-full h-screen bg-[#FAFBFD] flex-col items-center justify-center overflow-hidden select-none z-10 cursor-default"
      style={itcStyle}
    >
      
      {/* ================= DYNAMIC VISUAL IMAGES TRAIL TRACK INTERFACE (DESKTOP METRICS ONLY) ================= */}
      {isDesktop && (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden hidden md:block">
          <AnimatePresence>
            {trail.map((img) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.8, x: img.x - 100, y: img.y - 125, rotate: img.rotation }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.85, 
                  y: img.y - 155, 
                  transition: { duration: 0.25, ease: "easeIn" } 
                }}
                transition={{ type: "spring", stiffness: 160, damping: 15 }}
                className="absolute w-[160px] sm:w-[200px] aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-white will-change-transform transform-gpu z-10"
              >
                <img 
                  src={img.src} 
                  alt="Scatter Elements Layout" 
                  className="w-full h-full object-cover pointer-events-none filter saturate-[1.02]"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* ================= MINIMAL CONTENT LAYER OVERLAY ================= */}
      <div className="relative z-20 text-center space-y-4 max-w-5xl px-6 pointer-events-none">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-[#003142] uppercase tracking-wide leading-[0.95]">
            Creative
          </h1> 
        </div>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-[#003142] uppercase tracking-wide leading-[0.95]">
          Digital Agency.
        </h1>
      </div>

    </section>
  );
};

export default InteractiveBanner;