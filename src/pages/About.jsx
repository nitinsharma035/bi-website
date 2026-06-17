import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ChevronRight, HandHeart, BrainCircuit, Timer, Handshake, MonitorCog, ShieldCheck } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LogoSlider from "../components/LogoSlider";

const stats = [
  { id: 1, value: "150+", label: "Projects Delivered" },
  { id: 2, value: "99%", label: "Client Retention" },
  { id: 3, value: "15+", label: "Core Engineers" },
  { id: 4, value: "5+", label: "Years Experience" },
];

const coreValues = [
  {
    id: 1,
    title: "On Time Delivery",
    desc: "We commit to delivering every project with consistency, discipline, and respect for timelines.",
    icon: <Timer className="text-[#0A95DC]" size={24} />,
  },
  {
    id: 2,
    title: "Creativity That Inspires",
    desc: "We craft ideas that break monotony, spark emotion, and make brands truly unforgettable.",
    icon: <BrainCircuit className="text-[#830FBC]" size={24} />,
  },
  {
    id: 3,
    title: "Transparency & Honesty",
    desc: "Clear communication, real expectations, and complete project clarity-no surprises, ever.",
    icon: <Handshake className="text-[#055e87]" size={24} />,
  },
  {
    id: 4,
    title: "Innovation Driven",
    desc: "We stay ahead with modern strategies, tools, and trends to keep your brand future-ready.",
    icon: <MonitorCog className="text-[#830FBC]" size={24} />,
  },
  {
    id: 5,
    title: "Quality Without Compromise",
    desc: "Every detail matters. Every deliverable is refined, polished, and built to create impact.",
    icon: <ShieldCheck className="text-[#0086cb]" size={24} />,
  },
  {
    id: 6,
    title: "Client-First Approach",
    desc: "Your goals shape our direction. We listen, collaborate, and build solutions that drive real results.",
    icon: <HandHeart className="text-[#01b0c9]" size={24} />,
  },
];

const skillsData = [
  { name: "Website Development", percentage: 78 },
  { name: "Digital Marketing", percentage: 88 },
  { name: "Search Engine Optimization", percentage: 65 },
];

// Team members data array
const teamMembers = [
  {
    name: "Alex Rivera",
    role: "Lead Software Architect",
    image: "https://static.vecteezy.com/system/resources/thumbnails/026/136/046/small/business-man-illustration-ai-generative-png.png"
  },
  {
    name: "Sarah Chen",
    role: "Head of UI/UX Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Marcus Brody",
    role: "Senior Full Stack Dev",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Elena Rostova",
    role: "DevOps & Cloud Expert",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Elena Rostova",
    role: "DevOps & Cloud Expert",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Elena Rostova",
    role: "DevOps & Cloud Expert",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
  }
];

const dynamicCardEngine = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 18,
      mass: 1.2
    }
  },
  hover: {
    y: -10,
    scale: 1.02,
    rotateX: 3,
    rotateY: -3,
    transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] }
  }
};

const MetricCounter = ({ targetString }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true, amount: 0.2 });

  const targetNumber = parseInt(targetString.replace(/[^0-9]/g, ""), 10);
  const suffix = targetString.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const duration = 1600;

    const animateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const progressRatio = Math.min(progress / duration, 1);
      const easeOutProgress = 1 - Math.pow(1 - progressRatio, 3);

      const currentCount = Math.floor(easeOutProgress * targetNumber);
      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animateCounter);
      }
    };

    requestAnimationFrame(animateCounter);
  }, [isInView, targetNumber]);

  return (
    <span ref={elementRef} className="text-[6rem] md:text-[10rem] tabular-nums">
      {count}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A95DC] to-blue-900 font-black">
        {suffix}
      </span>
    </span>
  );
};

const VerticalStatsSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % stats.length);
    }, 9800);
    return () => clearInterval(slideTimer);
  }, []);

  return (
    <div className="w-full overflow-hidden rounded-[2rem] bg-white border border-gray-100 shadow-[0_15px_45px_rgba(0,0,0,0.02)] relative min-h-[350px] flex items-center">
      <div className="w-full p-8 md:p-12 pr-16 relative">
        <div className="relative min-h-[100px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -35 }}
              transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col space-y-2 select-none"
            >
              <span className="text-5xl md:text-6xl font-black font-mono tracking-wide text-[#003142]">
                <MetricCounter targetString={stats[activeSlide].value} />
              </span>
              <span className="text-xl md:text-2xl font-black uppercase tracking-widest text-gray-400">
                {stats[activeSlide].label}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-20">
          {stats.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setActiveSlide(dotIdx)}
              className="group relative flex items-center justify-center p-1 focus:outline-none"
              aria-label={`Maps to slide index ${dotIdx}`}
            >
              <motion.div
                animate={{ scale: activeSlide === dotIdx ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute w-5 h-5 rounded-full border border-[#0A95DC]/40 pointer-events-none"
              />
              <div
                className={`w-2 h-2 rounded-full transition-all duration-400 ${activeSlide === dotIdx
                  ? "bg-gradient-to-r from-[#0A95DC] to-[#830FBC] scale-125"
                  : "bg-gray-200 group-hover:bg-gray-300"
                  }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const itcStyle = { fontFamily: '"ITCAvantGardeStd", sans-serif' };

  return (
    <HelmetProvider>
      <div className="w-full min-h-screen bg-[#FAFBFD] text-black overflow-x-hidden flex flex-col justify-between" style={itcStyle}>
        <Helmet>
          <title>About Our Agency</title>
          <meta
            name="description"
            content="Explore our extensive full-screen dynamic design portfolio slider showcasing premium case studies, corporate brands, and creative prints."
          />
          <meta property="og:title" content="About Our Agency" />
          <meta
            property="og:description"
            content="Explore our extensive full-screen dynamic design portfolio slider showcasing premium case studies, corporate brands, and creative prints."
          />
        </Helmet>
        <Navbar />

        <div className="w-full flex-1">
          <section className="w-full  h-[50vh] md:h-[65vh]  pt-56 pb-36 px-6 md:px-12 lg:px-20 relative overflow-hidden flex flex-col items-center justify-center text-center ]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-45"
            >
              <source
                src="https://html.aqlova.com/videos/liko/liko.mp4"
                type="video/mp4"
              />
            </video>
            <motion.div
              animate={{ y: [0, -20, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-40%] left-[-15%] w-[600px] h-[600px] bg-[#0A95DC]/15 rounded-full blur-[140px] pointer-events-none z-0"
            />
            <motion.div
              animate={{ y: [0, 20, 0], scale: [1, 0.92, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[-40%] right-[-15%] w-[600px] h-[600px] bg-[#830FBC]/15 rounded-full blur-[140px] pointer-events-none z-0"
            />

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.25, 1, 0.5, 1] }}
              className="relative z-10 flex flex-col items-center space-y-5"
            >
              <motion.h1
                initial={{ scale: 0.94 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-wide text-black drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
              >
                About Our Agency
              </motion.h1>
              <motion.nav
                className="flex items-center gap-2.5 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#830FBC]"
              >
                <Link to="/" className="hover:text-[#830FBC] transition-colors duration-300">Home</Link>
                <ChevronRight size={14} className="text-[#830FBC]" />
                <span className="text-black font-black">About Us</span>
              </motion.nav>
            </motion.div>
          </section>

          <section className="w-full py-14 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
              className="lg:col-span-6 space-y-6"
            >
              <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-wide text-[#003142] ">
                We turn bold ideas <br />
                into impactful <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A95DC] via-[#830FBC] to-pink-500">
                  Digital Realities.
                </span>
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                ADON_ Creative is a high-end digital engineering studio. We combine production-grade code framework structures with immersive UI interactions to help businesses capture market scale and retain user authority.
              </p>
            </motion.div>
            <div className="lg:col-span-6 w-full flex items-center justify-between gap-6 relative min-h-[220px]">
              <VerticalStatsSlider />
            </div>
          </section>

          <section className="w-full py-14 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10 border-t border-gray-100/70">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 15 }}
              className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-6 relative"
              style={{ perspective: "1000px" }}
            >
              <div className="absolute left-[-6%] top-[4%] w-[75%] aspect-[1.1] pointer-events-none z-0 mix-blend-multiply transform-gpu select-none">
                <svg viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path
                    d="M 120 40 L 390 110 C 430 120, 440 160, 410 190 L 190 410 C 160 440, 110 430, 100 390 L 40 120 C 30 80, 80 30, 120 40 Z"
                    fill="url(#founderSvgGrad1)"
                  />
                  <defs>
                    <linearGradient id="founderSvgGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E8EFFF" stopOpacity="0.85" />
                      <stop offset="60%" stopColor="#F3EBFF" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="absolute right-[8%] bottom-[12%] w-[55%] aspect-square pointer-events-none z-0 mix-blend-multiply transform-gpu select-none opacity-60">
                <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path
                    d="M 50 20 L 260 80 C 290 90, 290 130, 270 150 L 130 270 C 110 290, 70 280, 60 250 L 10 70 C 0 40, 20 10, 50 20 Z"
                    fill="url(#founderSvgGrad2)"
                  />
                  <defs>
                    <linearGradient id="founderSvgGrad2" x1="100%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#DCE7FF" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-[0.5rem] overflow-hidden border-2 border-gray-100 shadow-xl shadow-black/[0.02] bg-slate-100 transform-gpu hover:scale-[1.03] transition-transform duration-400 z-10">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
                  alt="Founder Profile"
                  className="w-full h-full object-cover filter saturate-[1.02]"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex items-center gap-4 pl-2 z-10"
              >
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#1877F2] hover:border-[#1877F2]/30 shadow-sm transition-all duration-300 hover:scale-115 hover:-translate-y-1 active:scale-95">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#0A95DC] hover:border-[#0A95DC]/30 shadow-sm transition-all duration-300 hover:scale-115 hover:-translate-y-1 active:scale-95">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#E1306C] hover:border-[#E1306C]/30 shadow-sm transition-all duration-300 hover:scale-115 hover:-translate-y-1 active:scale-95">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-500 hover:text-black hover:border-black/30 shadow-sm transition-all duration-300 hover:scale-115 hover:-translate-y-1 active:scale-95">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
              className="lg:col-span-7 space-y-6 flex flex-col"
            >
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-[12px] text-[#003142]">
                  Meet Our Visionary Founder
                </h3>
                <p className="text-md font-bold text-[#830FBC] capitalize tracking-wider">Chief Executive Officer & Architect</p>
              </div>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                Driven by a profound passion for tactical web architecture and high-end interactive systems, our foundation was established to bridge the gap between creative visual artistry and complex backend execution models.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                We operate under a simple continuous workflow philosophy: eliminate arbitrary framework complexity, focus on absolute performance metrics, and build absolute design architectures that consistently perform for businesses worldwide.
              </p>
            </motion.div>
          </section>

          <section className="w-full py-16 bg-gray-50/40 border-t border-gray-100 relative z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-5 space-y-4"
              >
                <h3 className="text-4xl font-black text-[#003142] uppercase tracking-wide leading-[1.1]">
                  We Work to Help You Grow
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium max-w-sm">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                className="lg:col-span-7 space-y-6 w-full"
              >
                {skillsData.map((skill, idx) => (
                  <div key={idx} className="space-y-2 group">
                    <div className="flex justify-between items-center text-sm font-black text-[#003142] tracking-wide">
                      <span className="group-hover:text-[#830FBC] transition-colors duration-300">{skill.name}</span>
                      <span className="font-mono text-[#830FBC]">{skill.percentage}%</span>
                    </div>
                    <div className="w-full h-[7px] bg-[#830FBC]/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.3, ease: [0.25, 1, 0.5, 1], delay: idx * 0.05 }}
                        className="h-full bg-gradient-to-r from-[#830FBC] to-[#0A95DC] rounded-full transform-gpu"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ================= NEW CLEAN STAGGERED AUTO-SWIPER TEAM SECTION ================= */}
          <section className="w-full py-28 bg-[#FAFBFD] border-t border-gray-100 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
              {/* Left Side Heading */}
              <div className="md:col-span-7">
                <h3 className="text-4xl md:text-6xl font-black text-[#003142] uppercase tracking-tight leading-[1.05]">
                  Meet our <br />awesome team
                </h3>
              </div>
              {/* Right Side Subtext */}
              <div className="md:col-span-5 md:text-right">
                <p className="text-gray-500 text-sm md:text-base font-medium max-w-sm md:ml-auto">
                  Get to know the brilliant minds behind our agency. Our passionate and dedicated team awaits!
                </p>
              </div>
            </div>

            {/* Auto Swiper Main Container */}
            <div className="w-full relative overflow-hidden select-none py-12 flex">
              <motion.div
                className="flex gap-8 px-4 w-max items-center"
                animate={{
                  x: ["0%", "-50%"]
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 55,
                    ease: "linear",
                  }
                }}
              >
                {/* ----------------- FIRST SET OF CARDS ----------------- */}
                {teamMembers.map((member, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <div
                      key={`set1-${idx}`}
                      className={`w-[280px] md:w-[320px] flex-shrink-0 group flex flex-col relative transform-gpu transition-transform duration-700 ${isEven ? "-translate-y-8" : "translate-y-8"
                        }`}
                    >
                      {/* Clean Image Wrapper without any background corner shapes */}
                      <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden relative mb-5 bg-[#E8EFFF] border border-gray-100 shadow-sm transform-gpu">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover filter saturate-[1.02] group-hover:scale-[1.04] transition-transform duration-700 ease-[0.16,1,0.3,1]"
                        />
                      </div>
                      <div className="pl-2 flex flex-col">
                        <h4 className="text-xl font-black text-[#003142] uppercase tracking-wide group-hover:text-[#830FBC] transition-colors duration-400">
                          {member.name}
                        </h4>
                        <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mt-0.5">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {/* ----------------- SECOND DUPLICATE SET ----------------- */}
                {teamMembers.map((member, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <div
                      key={`set2-${idx}`}
                      className={`w-[280px] md:w-[320px] flex-shrink-0 group flex flex-col relative transform-gpu transition-transform duration-700 ${isEven ? "-translate-y-8" : "translate-y-8"
                        }`}
                    >
                      {/* Clean Image Wrapper without any background corner shapes */}
                      <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden relative mb-5 bg-[#E8EFFF] border border-gray-100 shadow-sm transform-gpu">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover filter saturate-[1.02] group-hover:scale-[1.04] transition-transform duration-700 ease-[0.16,1,0.3,1]"
                        />
                      </div>
                      <div className="pl-2 flex flex-col">
                        <h4 className="text-xl font-black text-[#003142] uppercase tracking-wide group-hover:text-[#830FBC] transition-colors duration-400">
                          {member.name}
                        </h4>
                        <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mt-0.5">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </section>
          {/* ================= NEW CLEAN STAGGERED AUTO-SWIPER TEAM SECTION END ================= */}

          <section className="w-full py-14 bg-gray-50/50 border-y border-gray-100 relative overflow-hidden">
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#830FBC]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-wide text-[#003142]">
                  Values That Build Authority
                </h3>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ staggerChildren: 0.06 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full z-10"
                style={{ perspective: "1200px" }}
              >
                {coreValues.map((val, idx) => (
                  <motion.div
                    key={`${val.id}-${idx}`}
                    variants={dynamicCardEngine}
                    whileHover="hover"
                    className="bg-white border border-gray-100 p-8 rounded-[2.2rem] shadow-[0_4px_25px_rgba(0,0,0,0.01)] flex flex-col items-start space-y-5 transition-shadow duration-300 transform-gpu cursor-default origin-center"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center shadow-inner">
                      {val.icon}
                    </div>
                    <h4 className="text-lg font-black capitalize tracking-wide text-[#003142]">
                      {val.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
                      {val.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          <LogoSlider />

          <section className="w-full py-14 px-6 text-center max-w-4xl mx-auto flex flex-col items-center space-y-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 50, damping: 14 }}
              className="flex flex-col items-center space-y-6"
            >
              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-wide text-[#003142] ">
                Ready to construct the next digital architecture?
              </h3>
              <p className="text-gray-500 text-sm sm:text-base font-medium max-w-xl">
                Connect directly with our engineering team panel to spin up high-performance production sprints tailored for your business growth.
              </p>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-[#0A95DC] to-[#830FBC] text-white px-8 py-3.5 rounded-full text-xs font-black capitalize tracking-[0.2em] shadow-lg shadow-[#0A95DC]/20 hover:scale-[1.04] active:scale-95 transition-all duration-300 border border-white/10"
                >
                  Let's build together
                </Link>
              </div>
            </motion.div>
          </section>

        </div>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default About;