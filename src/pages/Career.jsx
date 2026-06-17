import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ArrowUpRight, Plus, Minus, Briefcase, MapPin, Clock } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const AnimatedCounter = ({ value }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1.5; 
          const end = numericValue;
          if (start === end) return;

          const totalMiliseconds = duration * 1000;
          const stepTime = Math.max(Math.floor(totalMiliseconds / end), 15);
          
          const timer = setInterval(() => {
            start += Math.ceil(end / 60); 
            if (start >= end) {
              clearInterval(timer);
              setCount(end);
            } else {
              setCount(start);
            }
          }, stepTime);

          observer.disconnect(); 
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={elementRef} className="text-3xl md:text-5xl font-black text-[#003142] block tracking-wide">
      {count}
      {value.includes("+") && "+"}
      {value.includes("%") && "%"}
    </span>
  );
}; 
export default function CareerPage() {
  const [expandedJob, setExpandedJob] = useState(null);
  const [hoveredJobImg, setHoveredJobImg] = useState(null);

  const itcStyle = { fontFamily: '"ITCAvantGardeStd", sans-serif' };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };
 
  const openingsData = [
    {
      id: "01",
      role: "Senior UI/UX Designer",
      dept: "DESIGN EXPERIENCE",
      type: "Full-Time",
      loc: "Remote / New Delhi",
      previewImg: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=600&auto=format&fit=crop",
      applyUrl: "https://www.google.com/forms/ui-ux-designer-apply", 
      desc: "We are looking for a visionary Senior UI/UX Designer who can translate complex systems into cinematic, ultra-premium digital products.",
      requirements: ["4+ years of industry experience in premium digital product design.", "Mastery over design platforms (Figma, Principle)."]
    },
    {
      id: "02",
      role: "Creative Front-End Engineer",
      dept: "ENGINEERING DEVELOPMENT",
      type: "Full-Time",
      loc: "Hybrid / Mumbai",
      previewImg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
      applyUrl: "https://www.google.com/forms/frontend-engineer-apply", 
      desc: "Seeking a JavaScript specialist with an elite eye for micro-interactions, spring physics, and high-performance React architectures.",
      requirements: ["Strong production experience with React, Tailwind CSS, and Framer Motion.", "Deep understanding of browser performance optimization."]
    },
    {
      id: "03",
      role: "3D Motion Graphic Artist",
      dept: "VISUAL CONTENT ART",
      type: "Contract",
      loc: "Remote",
      previewImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
      applyUrl: "https://www.google.com/forms/3d-artist-apply", 
      desc: "Looking for a 3D artist to craft high-fidelity architecture and surreal environment abstractions for high-profile brand promotional events.",
      requirements: ["Expertise in Blender, Cinema 4D, and After Effects rendering pipelines.", "Solid command over studio lighting setups."]
    }
  ];

  return (
    <HelmetProvider> 
    <div className="w-full bg-[#FAFBFD] flex flex-col min-h-screen select-none overflow-x-hidden relative" style={itcStyle}>
      <Helmet>
          <title>Careers at Our Agency</title>
          <meta
            name="description"
            content="Explore our extensive full-screen dynamic design portfolio slider showcasing premium case studies, corporate brands, and creative prints."
          />
          <meta property="og:title" content="Careers at Our Agency" />
          <meta
            property="og:description"
            content="Explore our extensive full-screen dynamic design portfolio slider showcasing premium case studies, corporate brands, and creative prints."
          />
        </Helmet>
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[15%] right-[-10%] w-[55vw] h-[55vw] bg-gradient-to-br from-[#0A95DC]/5 to-[#830FBC]/5 rounded-full blur-[130px] animate-[pulse_9s_infinite_alternate]" />
        <div className="absolute top-[60%] left-[-15%] w-[65vw] h-[65vw] bg-gradient-to-tr from-[#830FBC]/5 to-[#0A95DC]/5 rounded-full blur-[150px] animate-[pulse_11s_infinite_alternate]" />
      </div>

      <Navbar />
      <motion.header 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="w-full pt-44 pb-16 px-6 md:px-16 max-w-[1400px] mx-auto text-center relative z-10"
      >
        <span className="text-xs capitalize tracking-[0.45em] text-[#0A95DC] font-black px-4 py-1.5 rounded-full border border-[#0A95DC]/10 bg-white/60 backdrop-blur-sm shadow-sm">
          WE ARE HIRING
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-8xl font-black tracking-wide text-[#003142] uppercase leading-[1.2] max-w-5xl mx-auto mt-4">
          Shape The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A95DC] to-[#830FBC]">Digital Artistry.</span>
        </h1>
        <p className="text-black/50 text-sm md:text-base max-w-xl mx-auto mt-8 leading-relaxed">
          We don't build generic web assets. We craft high-performing immersive systems where technology meets raw luxury design.
        </p>
        <img src="https://www.shutterstock.com/image-photo/asian-business-woman-type-keyboard-260nw-2007690395.jpg" alt="Career"className="w-full mx-auto mt-8 rounded-xl shadow-sm"/>
      </motion.header>
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[1100px] mx-auto px-5 mb-28 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10"
      >
        {[
          { label: "Global Talents", val: "24+" },
          { label: "Design Awards", val: "12" },
          { label: "Success Projects", val: "180+" },
          { label: "Remote Unity", val: "100%" }
        ].map((stat, sIdx) => (
          <div key={sIdx} className="bg-white/60 backdrop-blur-md border border-black/5 p-6 rounded-[20px] shadow-sm">
            <AnimatedCounter value={stat.val} />
            <span className="text-[10px] capitalize text-black/40 font-bold tracking-widest mt-2 block">{stat.label}</span>
          </div>
        ))}
      </motion.section>
      <section className="w-full max-w-[1400px] mx-auto px-5 mb-32 relative z-10">
        <div className="w-full text-center mb-16">
          <span className="text-xs capitalize tracking-[0.35em] text-[#0A95DC] font-black block mb-2">OUR CULTURE</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#003142] uppercase tracking-wide">Perks of Creating With Us</h2>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto"
        >
          {[
            { title: "Autonomous Freedom", body: "No micromanagement loops here. You own your layout strategies and lead core production pipelines freely." },
            { title: "Cinematic Setup Hardware", body: "Top-tier specs, extreme displays, and matching design tools assets requested to maintain elite workspace output." },
            { title: "Health & Mind Wellness", body: "Comprehensive premium wellness covers, strict flexible time thresholds, and yearly digital recharge breaks." }
          ].map((perk, pIdx) => (
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              key={pIdx} 
              className="bg-white border border-black/5 rounded-[24px] p-8 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#0A95DC] to-[#830FBC] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-xl font-black text-[#003142] capitalize tracking-wide mb-4 transition-colors group-hover:text-[#0A95DC]">
                {perk.title}
              </h3>
              <p className="text-black/60 text-sm leading-relaxed">
                {perk.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <section className="w-full max-w-[1100px] mx-auto px-5 mb-36 relative z-10">
        <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div className="text-left">
            <span className="text-xs capitalize tracking-[0.35em] text-[#0A95DC] font-black block mb-2">JOIN THE SQUAD</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#003142] uppercase tracking-wide">Open Opportunities</h2>
          </div>
          <span className="text-sm font-bold text-black/40 tracking-wide capitalize border-b border-black/10 pb-1">
            {openingsData.length} Vacancies available
          </span>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-8 relative items-start">
          <div className="flex-1 w-full flex flex-col gap-4 z-10">
            {openingsData.map((job) => {
              const isOpened = expandedJob === job.id;

              return (
                <div 
                  key={job.id}
                  onMouseEnter={() => setHoveredJobImg(job.previewImg)}
                  onMouseLeave={() => setHoveredJobImg(null)}
                  className={`w-full bg-white border rounded-[20px] transition-all duration-400 overflow-hidden shadow-sm ${
                    isOpened ? "border-[#0A95DC] shadow-lg" : "border-black/5 hover:border-black/10 hover:shadow-md"
                  }`}
                >
                  <div 
                    onClick={() => setExpandedJob(isOpened ? null : job.id)}
                    className="w-full p-6 md:p-8 flex items-center justify-between gap-6 cursor-pointer select-none"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 flex-1">
                      <span className="text-xs font-black text-[#0A95DC] tracking-wide">{job.dept}</span>
                      <h3 className="text-xl md:text-2xl font-black text-[#003142] capitalize tracking-wide">
                        {job.role}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="hidden sm:inline-block px-3 py-1 bg-[#f0f4f8] text-[#003142] font-bold text-[10px] capitalize tracking-wide rounded-full">
                        {job.type}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#003142] border border-black/5">
                        {isOpened ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>
                  <AnimatePresence initial={false}>
                    {isOpened && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-8 md:px-8 md:pb-10 border-t border-black/5 pt-6 flex flex-col gap-6 bg-gray-50/40">
                          <div className="flex flex-wrap gap-4 text-xs font-semibold text-black/60">
                            <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5 text-black/40" /> {job.dept}</span>
                            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-black/40" /> {job.loc}</span>
                            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-black/40" /> {job.type}</span>
                          </div>

                          <div className="max-w-3xl">
                            <h4 className="text-xs capitalize tracking-widest font-black text-black/40 mb-2">Role Overview</h4>
                            <p className="text-sm text-black/70 leading-relaxed font-medium">{job.desc}</p>
                          </div>

                          <div className="max-w-3xl">
                            <h4 className="text-xs capitalize tracking-widest font-black text-black/40 mb-3">Requirements</h4>
                            <ul className="flex flex-col gap-2.5">
                              {job.requirements.map((req, rIdx) => (
                                <li key={rIdx} className="flex items-start gap-2.5 text-sm text-black/70 font-medium">
                                  <span className="text-[#0A95DC] mt-0.5 font-black">▪</span>
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="pt-4 border-t border-black/5 flex justify-end">
                            <a 
                              href={job.applyUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-block"
                            >
                              <button className="px-6 py-3 rounded-full bg-[#003142] text-white hover:bg-gradient-to-r hover:from-[#0A95DC] hover:to-[#830FBC] text-xs font-black capitalize tracking-wide flex items-center gap-2 transition-all duration-500 shadow-md">
                                Apply for this role <ArrowUpRight className="w-3.5 h-3.5" />
                              </button>
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
          <div className="hidden lg:block w-[320px] h-[420px] sticky top-36 overflow-hidden rounded-[24px] shadow-2xl bg-gray-100 border border-black/5">
            <AnimatePresence mode="wait">
              {hoveredJobImg ? (
                <motion.img
                  key={hoveredJobImg}
                  src={hoveredJobImg}
                  alt="Job Preview"
                  initial={{ opacity: 0, scale: 1.08, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="w-full h-full object-cover"
                />
              ) : (
                <motion.img
                  key="default-career"
                  src="https://html.aqlova.com/agntix-prv/agntix/assets/img/career/career-slide-4.jpg"
                  alt="Join Our Team"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  className="w-full h-full object-cover"
                />
              )}
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

        </div>
      </section>

      <Footer />
    </div>
    </HelmetProvider> 
  );
}