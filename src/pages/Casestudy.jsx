import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; 
const allCaseStudies = [
  { id: 1, title: "Creative Agency", category: "E-Commerce", slug: "creative-agency", image: "https://picsum.photos/1200/800?random=21", description: "A luxury digital transformation showcase." },
  { id: 2, title: "Shubh Housing Portal", category: "Real Estate", slug: "shubh-housing", image: "https://picsum.photos/1200/800?random=22", description: "High-performance web dashboard." },
  { id: 3, title: "EcoSphere Brand Identity", category: "Branding", slug: "ecosphere-branding", image: "https://picsum.photos/1200/800?random=23", description: "Architecting complete spatial guidelines." },
  { id: 4, title: "FinTech Dashboard Suite", category: "UI/UX Design", slug: "fintech-dashboard", image: "https://picsum.photos/1200/800?random=24", description: "Streamlining multi-layered operational accounts." }
];

const categories = ["All", "E-Commerce", "Real Estate", "Branding", "UI/UX Design"];

const CaseStudiesListing = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const scrollRef = useRef(null); 
  const itcStyle = { fontFamily: '"ITCAvantGardeStd", sans-serif' };
 
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 240; 
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const filteredStudies = selectedCategory === "All"
    ? allCaseStudies
    : allCaseStudies.filter(study => study.category === selectedCategory);

  return (
    <main className="w-full min-h-screen bg-[#FAFBFD] text-[#003142] select-none overflow-x-hidden relative" style={itcStyle}>
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <section className="w-full pt-36 md:pt-40 pb-28 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto"> 
          <div className="w-full flex flex-col items-center text-center mb-14 md:mb-20 space-y-4">
            <span className="text-xs font-black tracking-[0.4rem] text-[#0A95DC] uppercase">OUR ARCHIVE</span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-wide leading-none">
              CASE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A95DC] via-[#5B51D8] to-[#830FBC]">STUDIES</span>
            </h1>
          </div> 
          <div className="relative w-full mb-16 flex items-center max-w-5xl mx-auto"> 
            <button 
              onClick={() => handleScroll("left")}
              className="absolute left-0 z-20 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-md border border-gray-100 rounded-full shadow-sm -translate-x-2 md:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button> 
            <div 
              ref={scrollRef}
              className="w-80% md:w-full overflow-x-auto no-scrollbar flex items-center justify-start md:justify-center margin-auto gap-3 whitespace-nowrap scroll-smooth px-2"
            >
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.15rem] transition-all duration-300 border flex-shrink-0 ${
                      isActive
                        ? "bg-[#003142] text-white border-[#003142] shadow-md"
                        : "bg-white text-black border-gray-100 hover:text-[#003142] hover:border-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div> 
            <button 
              onClick={() => handleScroll("right")}
              className="absolute right-0 z-20 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-md border border-gray-100 rounded-full shadow-sm translate-x-2 md:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button> 
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#FAFBFD] to-transparent pointer-events-none z-10 md:hidden" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#FAFBFD] to-transparent pointer-events-none z-10 md:hidden" />
          </div> 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 w-full"
              >
                {filteredStudies.map((project) => (
                  <div key={project.id} className="group flex flex-col bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="w-full h-[260px] sm:h-[320px] overflow-hidden relative">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <span className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase text-[#003142]">{project.category}</span>
                    </div>
                    <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-xl md:text-2xl font-black uppercase text-[#003142] group-hover:text-[#0A95DC] transition-colors">{project.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed font-medium">{project.description}</p>
                      </div>
                      <Link to={`/case-study/${project.slug}`} className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-wider text-[#830FBC]">
                        Explore Study <span className="text-xs"><FaArrowRight /></span>
                      </Link>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default CaseStudiesListing;