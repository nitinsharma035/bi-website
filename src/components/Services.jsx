import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const servicesData = [
   {
    id: "01",
    title: "Branding & Strategy", 
    slug: "brand-strategy",
    image: "https://unsplash.com/s/photos/random?auto=format&fit=crop&q=80&w=800",
    features: ["Brand Positioning", "Naming & Tagline Creation", "Brand Guidelines", "Competitor Analysis", "Market Research"]
  },
  {
    id: "02",
    title: "Social Media Marketing", 
    slug: "social-media-marketing",
    image: "https://unsplash.com/s/photos/random?auto=format&fit=crop&q=80&w=800",
    features: ["Content Creation", "Community Management", "Paid Advertising", "Analytics & Reporting", "Influencer Partnerships"]
  },
  {
    id: "03",
    title: "Performance Marketing", 
    slug: "performance-marketing",
    image: "https://unsplash.com/s/photos/random?auto=format&fit=crop&q=80&w=800",
    features: ["Google Ads", "Meta Ads", "Lead Generation", "Retargeting Campaigns", "Conversion Optimization"]
  },
  {
    id: "04",
    title: "Content Production", 
    slug: "content-production",
    image: "https://unsplash.com/s/photos/random?auto=format&fit=crop&q=80&w=800",
    features: ["Podcast Production", "Product Shoots", "Real Estate Walkthroughs", "Motion Graphics", "Corporate Videos"]
  }
];

// Individual Interactive Card Component
const ServiceCard = ({ service, index, hoveredIndex, setHoveredIndex }) => {
  const cardRef = useRef(null);

  // Initialize Motion Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // OPTIMIZED SPRING CONFIG: Damping increase kiya hai smooth flow ke liye aur stiffness stabilize ki hai
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 30, mass: 0.8 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 30, mass: 0.8 });

  // Map spring outputs to degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Smooth fractional calculations over boundaries
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set((mouseX / width) - 0.5);
    y.set((mouseY / height) - 0.5);
  };

  const handleMouseLeave = () => {
    // Elegant spring reset back to base center state
    x.set(0);
    y.set(0);
    setHoveredIndex(null);
  };

  const isThisCardHovered = hoveredIndex === index;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={(e) => {
        handleMouseMove(e);
        setHoveredIndex(index);
      }}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isThisCardHovered ? rotateX : 0,
        rotateY: isThisCardHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
        perspective: "1200px",
        transformOrigin: "center center" // Dynamic center focal lock
      }}
      animate={{
        scale: isThisCardHovered ? 1.03 : 1,
        opacity: 1, 
      }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="relative h-[400px] md:h-[430px] rounded-[12px] bg-[#EBEBEB] overflow-hidden group border-2 border-[#0A95DC] cursor-pointer shadow-purple-900/30 shadow-md"
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <motion.img
          src={service.image}
          alt={service.title}
          animate={{
            opacity: isThisCardHovered ? 0.35 : 1, 
            scale: isThisCardHovered ? 1.08 : 1,
            filter: isThisCardHovered ? "blur(4px)" : "blur(0px)" 
          }}
          transition={{ duration: 0.5, ease: "easeOut" }} // Smooth linear to spring transition transition
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
      </div>

      {/* ================= CONTENT STRUCTURE SYSTEM ================= */}
      <div className="relative z-10 w-full h-full p-8 md:p-10 flex flex-col justify-between" style={{ transform: "translateZ(40px)" }}>

        {/* TOP PANEL */}
        <div className="flex justify-between items-start w-full">
          <h3 className="text-xl md:text-[20px] font-black uppercase tracking-wide text-white leading-[1.2] max-w-[100%] drop-shadow-md">
            {service.title}
          </h3> 
        </div>

        {/* BOTTOM CONTAINER */}
        <div className="w-full flex flex-col justify-end items-start mt-auto space-y-5">
          
          {/* Detailed Features Layer List */}
          <div className="w-full flex flex-col items-start gap-2 max-h-[220px] overflow-hidden">
            {service.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{
                  opacity: isThisCardHovered ? 1 : 0,
                  y: isThisCardHovered ? 0 : 15
                }}
                transition={{
                  duration: 0.35,
                  delay: isThisCardHovered ? i * 0.04 : 0,
                  ease: [0.215, 0.610, 0.355, 1.000] 
                }}
                className="px-4 py-1.5 bg-white border  text-blue-600 text-[12px] capitalize tracking-[.1rem] rounded-full"
              >
                {feature}
              </motion.div>
            ))}
          </div>

          {/* Symmetrical Accent Vector Indicators & Dynamic Link */}
          <div className="w-full flex justify-between items-center pt-2">
            <div className="opacity-40 transition-opacity duration-300">
              {index % 2 === 0 ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                  <circle cx="2" cy="2" r="1.5" fill="currentColor" /><circle cx="10" cy="2" r="1.5" fill="currentColor" /><circle cx="18" cy="2" r="1.5" fill="currentColor" />
                  <circle cx="2" cy="10" r="1.5" fill="currentColor" /><circle cx="18" cy="10" r="1.5" fill="currentColor" />
                  <circle cx="2" cy="18" r="1.5" fill="currentColor" /><circle cx="10" cy="18" r="1.5" fill="currentColor" /><circle cx="18" cy="18" r="1.5" fill="currentColor" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white">
                  <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
                </svg>
              )}
            </div>

            {/* Link styling */}
            <Link 
              to={`/services/${service.slug}`}
              className="text-[14px] font-black capitalize tracking-[.1rem] text-white bg-gradient-to-r from-[#0A95DC] to-[#830FBC] px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 hover:scale-105"
            >
              See More
            </Link>
          </div>

        </div>

      </div> 
    </motion.div>
  );
};

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const itcStyle = { fontFamily: '"ITCAvantGardeStd", sans-serif' };

  return (
    <section className="bg-[#FAFBFD] py-14 px-6 md:px-12 lg:px-16 overflow-hidden select-none" style={itcStyle}>
      <div className="max-w-[1550px] mx-auto">

        {/* Section Headline */}
        <div className="w-full flex flex-col items-start gap-4 mb-16"> 
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-wide text-[#003142] leading-[0.9]">
            Services that drive <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A95DC] to-[#830FBC]">Real Impact.</span>
          </h2>
        </div>

        {/* 4-Column Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-20 text-center">
          <Link 
            to="/services"
            className="inline-block px-12 py-4 text-white font-mono font-bold capitalize text-[15px] tracking-wide rounded-full shadow-md bg-gradient-to-r from-[#0A95DC] to-[#830FBC] hover:scale-105 transition-all duration-300"
          >
            All Services
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;