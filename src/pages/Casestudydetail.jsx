import { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const caseStudyData = {
  title: "Digital Renaissance in Luxury E-Commerce",
  subtitle: "E-Commerce Strategy & Immersive Product Hub",
  category: "UX Design",
  date: "Feb 2026",
  client: "Krish city",
  role: "Lead Frontend Engineer",
  duration: "3 Months",
  heroImage: "https://picsum.photos/1920/1080?random=10",
  overview:
    "Digital needed a luxury digital transformation to showcase high-end handcrafted marble statues worldwide. The mission was clear: craft a highly engaging layout, preserve high-resolution texture details without dropping frame rates, and build an ultra-seamless WhatsApp ordering pipeline.",
  stats: [
    { label: "Conversion Rate", value: "+142%" },
    { label: "Page Load Speed", value: "0.4s" },
    { label: "Mobile Engagement", value: "94%" },
  ],
  challenges: [
    "Rendering 4K resolution textures of handcrafted marble arts efficiently on 3G connections.",
    "Designing an ultra-minimalistic UI without cluttering the premium aesthetic with distracting slider indicators or aggressive pagination buttons.",
    "Implementing a direct localized automated breakdown structure for WhatsApp messaging orders.",
  ],
  solutions: [
    "Engineered dynamic image optimization hooks coupled with micro-interaction hover states.",
    "Created custom fluid parallax container shifts that dynamically elevate spatial alignment on user scroll patterns.",
    "Architected session-based background preloaders to secure lightning-fast page state transformations.",
  ],
  gallery: [
    "https://picsum.photos/1200/800?random=11",
    "https://picsum.photos/1200/800?random=12",
  ],
  nextProject: {
    title: "Shubh Housing Real Estate Portal",
    slug: "shubh-housing",
    bg: "https://picsum.photos/1200/630?random=15"
  }
};
 
const AnimatedCounter = ({ value }) => {
  const ref = useRef(null); 
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  
  const count = useMotionValue(0);
 
  const numMatch = value.match(/[\d.]+/);
  const num = numMatch ? parseFloat(numMatch[0]) : 0;
  const index = numMatch ? value.indexOf(numMatch[0]) : 0;
  const prefix = value.slice(0, index);
  const suffix = numMatch ? value.slice(index + numMatch[0].length) : "";
  const isFloat = value.includes(".");
 
  const formattedString = useTransform(count, (latest) => {
    const displayNum = isFloat ? latest.toFixed(1) : Math.round(latest).toString();
    return `${prefix}${displayNum}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, num, {
        duration: 2.2, 
        ease: [0.16, 1, 0.3, 1], 
      });
      return controls.stop;
    }
  }, [isInView, count, num]);

  return <motion.span ref={ref}>{formattedString}</motion.span>;
};

const CaseStudyDetail = () => {
  const [isHoveredNext, setIsHoveredNext] = useState(false);
  const itcStyle = { fontFamily: '"ITCAvantGardeStd", sans-serif' };

  return (
    <main className="w-full bg-[#FAFBFD] text-[#003142] select-none overflow-x-hidden relative" style={itcStyle}>
      
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <section className="relative w-full h-[65vh]  flex items-end justify-start bg-black overflow-hidden">
        <motion.div 
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.65 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img 
            src={caseStudyData.heroImage} 
            alt={`${caseStudyData.title} Production Banner`}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-black-200 via-black to-transparent z-10z-10" />

        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-20 pb-20 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 max-w-4xl"
          >
            <span className="text-[24px] font-black tracking-normal uppercase text-gray-200 ">
              {caseStudyData.category}
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-normal leading-none text-white">
              {caseStudyData.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-medium tracking-normal">
              {caseStudyData.subtitle}
            </p>
          </motion.div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-100">
        <div>
          <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Client</h5>
          <p className="text-base font-black uppercase tracking-wide mt-1 text-[#003142]">{caseStudyData.client}</p>
        </div>
        <div>
          <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Role</h5>
          <p className="text-base font-black uppercase tracking-wide mt-1 text-[#003142]">{caseStudyData.role}</p>
        </div>
        <div>
          <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Timeline</h5>
          <p className="text-base font-black uppercase tracking-wide mt-1 text-[#003142]">{caseStudyData.duration}</p>
        </div>
        <div>
          <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Date</h5>
          <p className="text-base font-black uppercase tracking-wide mt-1 text-[#003142]">{caseStudyData.date}</p>
        </div>
      </section> 
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-wide">Project Executive Summary</h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
            {caseStudyData.overview}
          </p>
        </div>

        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 w-full">
          {caseStudyData.stats.map((stat, idx) => (
            <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.01)] flex flex-col justify-center">
              <span className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#0A95DC] to-[#830FBC] bg-clip-text text-transparent">
                <AnimatedCounter value={stat.value} />
              </span>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section> 
      <section className="w-full h-[60vh] bg-gray-100 overflow-hidden relative">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          initial={{ y: "-10%" }}
          whileInView={{ y: "0%" }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ type: "tween", ease: "linear" }}
        >
          <img 
            src={caseStudyData.gallery[0]} 
            alt="Immersive product view mock environment" 
            className="w-full h-[120%] object-cover"
          />
        </motion.div>
      </section> 
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-28 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wide flex items-center gap-3">
            <span className="w-2 h-8 bg-purple-500 rounded-full" /> Core Bottlenecks
          </h3>
          <ul className="space-y-6">
            {caseStudyData.challenges.map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="font-mono text-xs font-bold text-purple-400 bg-purple-50 px-2.5 py-1 rounded-md">0{i+1}</span>
                <p className="text-gray-600 font-medium text-sm md:text-base leading-relaxed pt-0.5">{item}</p>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wide flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-500 rounded-full" /> Executed Solutions
          </h3>
          <ul className="space-y-6">
            {caseStudyData.solutions.map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="font-mono text-xs font-bold text-blue-500 bg-blue-50 px-2.5 py-1 rounded-md">0{i+1}</span>
                <p className="text-gray-600 font-medium text-sm md:text-base leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section> 
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-28">
        <div className="w-full h-[50vh] md:h-[65vh] rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm">
          <img 
            src={caseStudyData.gallery[1]} 
            alt="Secondary operational workspace interface blueprint" 
            className="w-full h-full object-cover" 
          />
        </div>
      </section> 
      <Link 
        to={`/case-study/${caseStudyData.nextProject.slug}`}
        className="block w-full border-t border-gray-100 relative bg-black overflow-hidden group py-32"
        onMouseEnter={() => setIsHoveredNext(true)}
        onMouseLeave={() => setIsHoveredNext(false)}
      > 
        <motion.div 
          className="absolute inset-0 w-full h-full z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
          animate={{ scale: isHoveredNext ? 1.05 : 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img 
            src={caseStudyData.nextProject.bg} 
            alt="Next project production canvas reference showcase" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black-200 via-black/80 to-transparent z-10" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-20 flex flex-col items-start gap-4">
          <span className="text-xl font-black tracking-[0.3rem] text-[#830FBC] uppercase">
            NEXT MASTERPIECE
          </span>
          <div className="flex flex-wrap items-center justify-between w-full gap-6">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-wide max-w-2xl leading-none">
              {caseStudyData.nextProject.title}
            </h2>
            <motion.div 
              className="w-16 h-16 rounded-full border-2 border-white/40 flex items-center justify-center text-white text-2xl"
              animate={{ x: isHoveredNext ? 15 : 0, borderColor: isHoveredNext ? "#830FBC" : "rgba(255,255,255,0.4)" }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <FaArrowRight />
            </motion.div>
          </div>
        </div>
      </Link> 
      <Footer />
    </main>
  );
};

export default CaseStudyDetail;