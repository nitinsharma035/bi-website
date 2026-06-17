import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'; 
import { LuSearch, LuSparkles, LuCode, LuShieldCheck, LuRocket } from 'react-icons/lu';

const capabilitiesData = [
  {
    id: "01",
    title: "Discovery & Strategy",
    icon: <LuSearch className="w-full h-full text-blue-500" />,
    description: "Defining brand targets, market vectors, and absolute bulletproof growth blueprints.",
    coords: { startX: -30, startY: -30, endX: -360, endY: -160 }
  },
  {
    id: "02",
    title: "Design & Prototyping",
    icon: <LuSparkles className="w-full h-full text-purple-500" />,
    description: "Crafting immersive wireframes and high-end interfaces for user retention.",
    coords: { startX: 30, startY: -30, endX: 360, endY: -120 }
  },
  {
    id: "03",
    title: "Development", 
    icon: <LuCode className="w-full h-full text-emerald-500" />,
    description: "Translating interactive experiences into clean, lightning-fast modern code structures.",
    coords: { startX: 30, startY: 30, endX: 370, endY: 110 }
  },
  {
    id: "04",
    title: "Testing & Quality",
    icon: <LuShieldCheck className="w-full h-full text-indigo-500" />,
    description: "Rigorous performance profiling, debugging, and continuous responsive validation.",
    coords: { startX: -30, startY: 30, endX: -360, endY: 150 }
  },
  {
    id: "05",
    title: "Launch & Growth",
    icon: <LuRocket className="w-full h-full text-pink-500" />,
    description: "Deploying optimized digital assets and launching analytics tracking models.",
    coords: { startX: 0, startY: 50, endX: 0, endY: 240 } 
  }
];

const DesktopNodeCard = ({ card, index, progress }) => {
  const totalCards = capabilitiesData.length;
  
  const startProgress = (index / totalCards) * 0.6;
  const endProgress = startProgress + 0.3;

  const { startX, startY, endX, endY } = card.coords;

  const currentX = useTransform(progress, [startProgress, endProgress], [startX, endX]);
  const currentY = useTransform(progress, [startProgress, endProgress], [startY, endY]);
  const cardScale = useTransform(progress, [startProgress, endProgress], [0.5, 1]);
  const cardOpacity = useTransform(progress, [startProgress, startProgress + 0.12], [0, 1]);

  return (
    <motion.div
      style={{
        x: currentX,
        y: currentY,
        scale: cardScale,
        opacity: cardOpacity,
        zIndex: 30
      }}
      className="absolute w-[300px] p-6 rounded-2xl bg-white/50 border border-white/70 backdrop-blur-md shadow-[0_12px_40px_rgba(31,38,135,0.06)] flex flex-col justify-between group transition-all duration-300 hover:border-purple-300/90 hover:bg-white/75"
    >
      <div className="w-full flex justify-between items-center mb-4">
        <span className="text-[11px] font-bold text-indigo-500/80 tracking-widest uppercase">Step /{card.id}</span>
        <div className="w-8 h-8 p-1.5 rounded-lg bg-white/90 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {card.icon}
        </div>
      </div>
      
      <div className="text-left">
        <h4 className="text-base font-bold uppercase tracking-wide text-slate-800 mb-1.5">{card.title}</h4>
        <p className="text-[12px] text-slate-600 normal-case leading-relaxed">{card.description}</p>
      </div>
    </motion.div>
  );
};

const Capabilities = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 45, damping: 22 });

  return (
    <section ref={containerRef} className="relative w-full h-auto md:h-[400vh] bg-[#f8f9fd] overflow-visible">
      
      <div className="relative w-full h-auto md:sticky md:top-0 md:h-screen flex flex-col items-center justify-start md:justify-center overflow-visible md:overflow-hidden px-4 py-16 md:py-0 select-none">
        
        {/* Header Title Layer */}
        <div className="relative w-full text-center z-40 mb-10 md:mb-0 md:absolute md:top-10 shrink-0">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-wide text-slate-800 leading-none">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
              Work Process.
            </span>
          </h2>
          <p className="text-slate-400 text-xs md:text-sm mt-3 max-w-xl mx-auto font-medium">
            A cohesive interconnected operational framework model
          </p>
        </div> 
        <div className="hidden md:flex relative w-full max-w-[1300px] h-[840px] items-center justify-center mt-16 overflow-visible">
           
          <div className="relative w-[400px] h-[400px] flex items-center justify-center z-20">
            <div className="absolute w-[420px] h-[420px] rounded-full animate-pulse" />

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-[320px] h-[320px] flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                className="absolute inset-0 rounded-full pointer-events-none scale-110"
              />
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="w-72 h-72 flex items-center justify-center relative "
              >
                <img 
                  src="images/process.png" 
                  alt="Core Engine Crystal" 
                  className="w-full h-full object-conver "
                />
              </motion.div>
            </motion.div>
          </div> 
          <div className="absolute inset-0 flex items-center justify-center overflow-visible">
            {capabilitiesData.map((card, index) => (
              <DesktopNodeCard
                key={`desktop-node-${card.id}`}
                card={card}
                index={index}
                progress={smoothProgress}
              />
            ))}
          </div>

        </div> 
        <div className="flex md:hidden w-full max-w-[340px] flex-col p-0 relative z-20 mt-8 overflow-visible">
          <div className="w-full flex flex-col gap-6">
            {capabilitiesData.map((card, idx) => (
              <motion.div
                key={`mobile-node-${card.id}`}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ 
                  type: "spring",
                  stiffness: 50,
                  damping: 15,
                  duration: 0.7, 
                  delay: 0.1 + (idx * 0.05)
                }}
                className="w-full bg-white/80 border border-slate-100 rounded-2xl p-5 flex flex-col justify-between shadow-[0_12px_30px_rgba(0,0,0,0.04)] backdrop-blur-sm group"
              >
                <div className="w-full flex justify-between items-center mb-3">
                  <span className="text-[10px] font-bold text-indigo-500 tracking-wider">Step /{card.id}</span>
                  <div className="w-7 h-7 p-1 rounded-md bg-slate-50 flex items-center justify-center shadow-inner">
                    {card.icon}
                  </div>
                </div>
                
                <div className="text-left">
                  <h4 className="text-sm font-black uppercase tracking-wide text-slate-800 mb-1.5">
                    {card.title}
                  </h4>
                  <p className="text-[12px] text-slate-500 normal-case leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Capabilities;