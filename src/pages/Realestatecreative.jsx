import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sliderData = [
  {
    id: 1,
    year: "2022",
    tag: "DIGITAL DESIGN",
    title: "Chania Tourism", 
    cardYear: "2021",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    year: "2020",
    tag: "DIGITAL DESIGN",
    title: "Headphones Cheap", 
    cardYear: "2020",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    year: "2020",
    tag: "DIGITAL DESIGN",
    title: "Zon Robinson", 
    cardYear: "2020",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtHyQ4-swhNvCV2lm142jxwj7AfX880takXQ&s"
  },
  {
    id: 4,
    year: "2026",
    tag: "CREATIVE SPRINT",
    title: "Vikas Marbles", 
    cardYear: "2026",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
  }
];

const TheaterSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itcStyle = { fontFamily: '"ITCAvantGardeStd", sans-serif' };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % sliderData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 1; i <= 3; i++) {
      const targetIndex = (activeIndex + i) % sliderData.length;
      cards.push({ ...sliderData[targetIndex], absoluteIndex: targetIndex });
    }
    return cards;
  };

  const nextPreviewCard = sliderData[(activeIndex + 1) % sliderData.length];

  return (
    <HelmetProvider>
      <div className="w-full relative min-h-screen bg-black overflow-hidden animate-fade-in" style={itcStyle}>
        
        <Helmet>
          <title>Creative Digital Design Portfolio & Theater Case Studies</title>
          <meta 
            name="description" 
            content="Explore our extensive full-screen dynamic design portfolio slider showcasing premium case studies, corporate brands, and creative prints." 
          />
          <meta property="og:title" content="Creative Digital Design Portfolio & Theater Case Studies" />
          <meta 
            property="og:description" 
            content="Explore our extensive full-screen dynamic design portfolio slider showcasing premium case studies, corporate brands, and creative prints." 
          />
        </Helmet>
        <div className="absolute top-0 left-0 w-full z-50 pointer-events-auto">
          <Navbar />
        </div>

        <section className="relative w-full h-screen text-white overflow-hidden select-none flex items-center">
          
          <div className="absolute inset-0 w-full h-full z-0 transform-gpu">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 0.55, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.85, ease: [0.25, 1, 0.5, 1] }}
                className="absolute inset-0 w-full h-full bg-cover bg-center will-change-transform"
                style={{ backgroundImage: `url(${sliderData[activeIndex].image})` }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent pointer-events-none" />
          </div> 
          
          <div className="relative z-10 w-full h-full mx-auto px-6 sm:px-12 md:px-16 flex flex-col justify-between pt-40 pb-5 pointer-events-none">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end w-full flex-1 pb-6 relative">
              
              <div className="lg:col-span-5 space-y-4 sm:space-y-6 min-h-[160px] sm:min-h-[220px] flex flex-col justify-end z-20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
                    className="space-y-3 sm:space-y-4"
                  >
                    <div className="text-white opacity-70 text-xl sm:text-2xl font-light transform rotate-45 w-6">→</div>
                    
                    <div className="space-y-1">
                      <div className="text-xs font-mono font-black tracking-wider text-white/50">{sliderData[activeIndex].year}</div>
                      <div className="text-[10px] sm:text-xs font-black tracking-[2px] text-purple-500 uppercase">{sliderData[activeIndex].tag}</div>
                    </div>

                    <h1 className="text-2xl sm:text-7xl font-black tracking-wide uppercase leading-[0.95] sm:leading-[0.9] text-white break-words">
                      {sliderData[activeIndex].title.split(" ")[0]} <br />
                      <span className="text-white/90">{sliderData[activeIndex].title.split(" ")[1] || ""}</span>
                    </h1>
                  </motion.div>
                </AnimatePresence>
              </div> 

              <div className="lg:col-span-7 w-full flex justify-end items-center overflow-visible pointer-events-auto absolute lg:relative md:bottom-6 bottom-6 lg:bottom-0 right-0 z-10">
                
                <div className="hidden lg:flex flex-row items-center gap-4 md:gap-6 overflow-visible">
                  <AnimatePresence mode="popLayout">
                    {getVisibleCards().map((card, idx) => (
                      <motion.div
                        key={card.id}
                        layout
                        initial={{ opacity: 0, x: 80, scale: 0.9 }}
                        animate={{ opacity: idx === 2 ? 0.45 : 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -80, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 260, damping: 24 }}
                        onClick={() => setActiveIndex(card.absoluteIndex)}
                        className="w-[220px] aspect-[3/4] rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl flex flex-col justify-between p-5 cursor-pointer will-change-transform transform-gpu group flex-shrink-0"
                      >
                        <div className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${card.image})` }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30 z-10" />
                        <div className="relative z-20 self-start px-2.5 py-1 rounded bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold">{card.cardYear}</div>
                        <div className="relative z-20 space-y-1 text-left">
                          <div className="text-[9px] font-black tracking-wider text-white/60 uppercase">{card.tag}</div>
                          <h3 className="text-base font-black tracking-wider leading-wide uppercase truncate">{card.title}</h3>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
                <div className="flex lg:hidden overflow-visible pr-2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={nextPreviewCard.id}
                      initial={{ opacity: 0, scale: 0.85, x: 40 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.85, x: -40 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      onClick={handleNext}
                      className="w-[200px] sm:w-[150px] aspect-[3/4] rounded-xl overflow-hidden relative border border-white/20 shadow-2xl flex flex-col justify-between p-3.5 cursor-pointer transform-gpu will-change-transform"
                    >
                      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${nextPreviewCard.image})` }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 z-10" />
                      <div className="relative z-20 self-start px-2 py-0.5 rounded bg-white/10 backdrop-blur-sm border border-white/10 text-[8px] font-mono font-bold">{nextPreviewCard.cardYear}</div>
                      <div className="relative z-20 text-left space-y-0.5">
                        <div className="text-[8px] font-black tracking-wider text-white/50 capitalize truncate">{nextPreviewCard.tag}</div>
                        <h3 className="text-xs font-black tracking-tight leading-tight capitalize truncate">{nextPreviewCard.title}</h3>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>

            </div>
            <div className="w-full flex items-center justify-between border-t border-white/10 pt-4 pointer-events-auto z-30 relative">
              <div className="flex items-center gap-3">
                <button 
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full border border-white/20 bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 active:scale-90"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft size={18} strokeWidth={2.5} />
                </button>
                <button 
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full border border-white/20 bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 active:scale-90"
                  aria-label="Next Slide"
                >
                  <ChevronRight size={18} strokeWidth={2.5} />
                </button>
              </div>

              <div className="text-4xl sm:text-5xl font-black font-mono opacity-80 tracking-wide">
                0{activeIndex + 1}
              </div>
            </div>

          </div>
        </section>
        <div className="bottom-0 left-0 w-full z-50 pointer-events-auto">
          <Footer />
        </div>

      </div>
    </HelmetProvider>
  );
};

export default TheaterSlider;