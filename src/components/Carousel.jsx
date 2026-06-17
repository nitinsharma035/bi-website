import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const Carousel3DFinal = () => {
  const component = useRef();
  const wheel = useRef();
  const headingRef = useRef();
  const sceneWrapperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { id: 1, title: "Real Estate", link: "/portfolio", img: "https://picsum.photos/1000/600?random=1", btnText: "view projects" },
    { id: 2, title: "Product Design", link: "/portfolio", img: "https://picsum.photos/1000/600?random=2", btnText: "explore drops" },
    { id: 3, title: "Next Marketing", link: "/portfolio", img: "https://picsum.photos/1000/600?random=3", btnText: "see strategies" },
    { id: 4, title: "NGO Spaces", link: "/portfolio", img: "https://picsum.photos/1000/600?random=4", btnText: "read stories" },
    { id: 5, title: "Fashion Hub", link: "/portfolio", img: "https://picsum.photos/1000/600?random=5", btnText: "watch shows" },
    { id: 6, title: "Luxury Salon", link: "/portfolio", img: "https://picsum.photos/1000/600?random=6", btnText: "book session" },
    { id: 7, title: "Modern Education", link: "/portfolio", img: "https://picsum.photos/1000/600?random=7", btnText: "start learning" }
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const numSlides = slides.length;
      const angleStep = 360 / numSlides; 
      const radius = window.innerWidth < 768 ? 320 : 720; 

      gsap.set(".panel", {
        rotateY: (i) => i * angleStep,
        transformOrigin: `50% 50% -${radius}px`,
        z: radius
      }); 

      gsap.set(sceneWrapperRef.current, {
        opacity: 0, 
        scale: window.innerWidth < 768 ? 1 : 0.85, 
        y: window.innerWidth < 768 ? 0 : 50
      }); 

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: "top top",
          end: "+=12000",
          pin: true,
          pinSpacing: true, 
          scrub: 0.2, 
          snap: {
            snapTo: 1 / numSlides,  
            duration: { min: 0.2, max: 0.6 },  
            delay: 1.5, 
            ease: "power2.out" 
          },
          onUpdate: () => {
            const rotation = gsap.getProperty(wheel.current, "rotateY");
            const normalizedRotation = ((rotation % 360) + 360) % 360;
            const rawIndex = Math.round(normalizedRotation / angleStep);
            const computedIndex = rawIndex >= numSlides ? 0 : rawIndex;
            const finalActiveIndex = (numSlides - computedIndex) % numSlides;

            setActiveIndex(finalActiveIndex);
          }
        }
      }); 

      tl.to(headingRef.current, {
        xPercent: -120,
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut"
      }, 0); 

      tl.to(sceneWrapperRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 2,
        ease: "power2.out"
      }, 0.5); 

      tl.to(wheel.current, {
        rotateY: -360,
        ease: "none",
        duration: 4
      }, 1.2);

    }, component);
    return () => ctx.revert();
  }, [slides.length]);

  return (
    <div ref={component} className="relative w-full h-screen min-h-screen overflow-hidden select-none bg-transparent"> 
      
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 saturate-[1.15]"
        >
          <source src="video/bg-1.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        ref={headingRef}
        className="absolute inset-0 z-30 flex flex-col items-start justify-center px-6 md:px-24 max-w-4xl font-black capitalize tracking-wide"
        style={{ fontFamily: '"ITCAvantGardeStd", sans-serif' }}
      >
        <span className="text-xl md:text-5xl font-black tracking-wide text-[#3B4FEA] mb-2 uppercase">
          Turning Ideas Into
        </span>
        <h1 className="text-5xl md:text-8xl lg:text-9xl text-black font-black uppercase leading-[0.85] tracking-wide">
          Impactful <br />
          <span className="text-black">Brands.</span>
        </h1>
      </div> 
      <div
        ref={sceneWrapperRef}
        className="absolute inset-0 w-full h-full flex items-center justify-center z-20"
      >
        <div
          className="h-full w-full flex items-center justify-center relative px-4" 
          style={{ perspective: window.innerWidth < 768 ? "1200px" : "2800px" }}
        >
          <div
            ref={wheel}
            className="relative w-[300px] md:w-[680px] h-[190px] md:h-[400px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {slides.map((slide, idx) => (
              <div
                key={slide.id}
                className="panel absolute inset-0 w-full h-full flex items-center justify-center"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="relative w-[90%] md:w-[92%] h-[95%] rounded-[1.5rem] md:rounded-[2.5rem] uppercase overflow-hidden bg-white border border-white/10 shadow-2xl">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-full object-cover opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70 z-10 pointer-events-none" /> 
                  <div className="absolute inset-0 z-20 flex items-center justify-center p-4 text-center pointer-events-none">
                    <AnimatePresence mode="wait">
                      {activeIndex === idx && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.45, ease: [0.215, 0.610, 0.355, 1.000] }}
                          className="flex flex-col items-center justify-center pointer-events-auto"
                        >
                          <h2 
                            className="text-white text-lg md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-3 md:mb-5 drop-shadow-lg" 
                            style={{ fontFamily: "ITCAvantGardeStd, sans-serif" }}
                          >
                            {slide.title}
                          </h2>
                          <a
                            href={slide.link}
                            className="px-4 py-2 md:px-8 md:py-3.5 bg-gradient-to-r from-[#0A95DC] to-[#830FBC] text-white capitalize text-[9px] md:text-xs font-bold tracking-[0.15em] md:tracking-[0.25em] rounded-full transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                          >
                            {slide.btnText}
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Carousel3DFinal;