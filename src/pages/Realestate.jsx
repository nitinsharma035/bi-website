import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Play, Image as ImageIcon, Eye } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const galleryData = [
  {
    id: 1,
    type: "image",
    title: "Modern Workspace Engineering",
    category: "Architecture",
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    type: "video",
    title: "Production Sprint Review",
    category: "Development",
    src: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-42023-large.mp4",
    poster: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    type: "image",
    title: "Creative Visual Brainstorming",
    category: "Design",
    src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    type: "video",
    title: "Mobile Interface Interactions",
    category: "Design",
    src: "https://assets.mixkit.co/videos/preview/mixkit-web-designer-working-on-his-laptop-comput-42358-large.mp4",
    poster: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    type: "image",
    title: "Cloud Infrastructure Setup",
    category: "Infrastructure",
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    type: "video",
    title: "Strategic Planning Session",
    category: "Marketing",
    src: "https://assets.mixkit.co/videos/preview/mixkit-businessmen-discussing-charts-on-a-tablet-41613-large.mp4",
    poster: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  }
];

const dynamicCardEngine = {
  hidden: { opacity: 0, scale: 0.92, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 16 } 
  },
  exit: { opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.25 } }
};

const Realestate = () => {
  const [filter, setFilter] = useState("all");
  const [activeMedia, setActiveMedia] = useState(null);
  const itcStyle = { fontFamily: '"ITCAvantGardeStd", sans-serif' };
  const filteredMedia = galleryData.filter(item => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  return (
    <div className="w-full min-h-screen bg-[#FAFBFD] text-black overflow-x-hidden flex flex-col justify-between" style={itcStyle}>
      <Navbar />

      <div className="w-full flex-1">
        <section className="w-full bg-[#070045] pt-44 pb-24 px-6 md:px-12 lg:px-20 relative overflow-hidden flex flex-col items-center justify-center text-center">
          <div className="absolute top-[-50%] left-[-20%] w-[500px] h-[500px] bg-[#0A95DC]/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-50%] right-[-20%] w-[500px] h-[500px] bg-[#830FBC]/20 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black capitalize tracking-wide text-white">
              Real Estate Portfolio
            </h1>
            <nav className="flex items-center gap-2 text-xs capitalize tracking-wider text-slate-300">
              <Link to="/" className="hover:text-[#0A95DC] transition-colors">Home</Link>
              <ChevronRight size={12} className="text-slate-400" />
              <span className="text-white font-bold">Real Estate</span>
            </nav>
          </div>
        </section>
        <section className="w-full pt-16 pb-8 px-6 text-center max-w-7xl mx-auto z-10 relative">
          <div className="inline-flex bg-gray-100 p-1.5 rounded-full border border-gray-200/50 transform-gpu gap-1.5">
            {["all", "image", "video"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                  filter === type
                    ? "bg-[#070045] text-white shadow-lg shadow-black/10"
                    : "text-gray-500 hover:text-[#070045]"
                }`}
              >
                {type === "all" ? "Show All" : type === "image" ? "Images" : "Videos"}
              </button>
            ))}
          </div>
        </section>
        <section className="w-full pb-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto relative z-10">
          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredMedia.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  variants={dynamicCardEngine}
                  initial="hidden"
                  whileInView="visible"
                  exit="exit"
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-[1.8rem] overflow-hidden border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.01)] group relative flex flex-col justify-between transform-gpu cursor-pointer"
                  onClick={() => setActiveMedia(item)}
                >
                  <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                    <img
                      src={item.type === "video" ? item.poster : item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter saturate-[1.02]"
                    />
                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                      <div className="w-12 h-12 rounded-full bg-white text-[#070045] flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        {item.type === "video" ? <Play size={18} fill="currentColor" className="ml-0.5" /> : <Eye size={18} />}
                      </div>
                    </div>
                     <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md text-[#070045] text-[9px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                      {item.type === "video" ? <Play size={10} fill="currentColor" /> : <ImageIcon size={10} />}
                      {item.type}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <span className="text-[10px] font-bold text-[#830FBC] uppercase tracking-widest">{item.category}</span>
                    <h3 className="text-base font-black text-[#003142] mt-1 tracking-tight group-hover:text-[#0A95DC] transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
      </div>
      <AnimatePresence>
        {activeMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[999] p-4 sm:p-10 flex flex-col items-center justify-center backdrop-blur-md"
          >
            <div className="absolute inset-0 z-0" onClick={() => setActiveMedia(null)} />
              <button 
              onClick={() => setActiveMedia(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white font-mono text-xs tracking-widest uppercase bg-white/5 border border-white/10 px-4 py-2 rounded-full z-50 transition-colors"
            >
              [ Close Frame ]
            </button>
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-4xl max-h-[75vh] aspect-video rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-white/5 shadow-2xl"
            >
              {activeMedia.type === "image" ? (
                <img 
                  src={activeMedia.src} 
                  alt={activeMedia.title} 
                  className="w-full h-full object-contain"
                />
              ) : (
                <video 
                  src={activeMedia.src} 
                  controls 
                  autoPlay 
                  className="w-full h-full object-contain"
                  poster={activeMedia.poster}
                />
              )}
            </motion.div>
            <div className="mt-6 text-center text-white max-w-xl z-10 space-y-1">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#0A95DC] uppercase">// {activeMedia.category}</span>
              <h4 className="text-lg font-black tracking-normal">{activeMedia.title}</h4>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Realestate;