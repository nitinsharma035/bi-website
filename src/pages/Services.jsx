import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const servicesData = [
  {
    "id": "01",
    "title": "Branding & Strategy", 
    "slug": "brand-strategy",
    "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    "features": ["Brand Positioning", "Naming & Tagline Creation", "Brand Guidelines", "Competitor Analysis", "Market Research"]
  },
  {
    "id": "02",
    "title": "Social Media Marketing", 
    "slug": "social-media-marketing",
    "image": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
    "features": ["Content Creation", "Community Management", "Influencer Collaborations", "Social Media Growth"]
  },
  {
    "id": "03",
    "title": "Performance Marketing", 
    "slug": "performance-marketing",
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    "features": ["Google Ads", "Meta Ads", "Lead Generation", "Retargeting Campaigns", "Conversion Optimization"]
  },
  {
    "id": "04",
    "title": "Content Production", 
    "slug": "content-production",
    "image": "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=800",
    "features": ["Podcast Production", "Product Shoots", "Real Estate Walkthroughs", "Motion Graphics", "Corporate Videos"]
  },
  {
    "id": "05",
    "title": "Website & Technology", 
    "slug": "website-technology",
    "image": "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
    "features": ["Website Development", "E-commerce Website", "SEO", "UI/UX Design", "Website Maintenance"]
  },
  {
    "id": "06",
    "title": "Public Relations & Media", 
    "slug": "public-relations-media",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    "features": ["Press Release Distribution", "PR Campaigns", "Media Coverage", "Founder Branding", "Reputation Management"]
  },
  {
    "id": "07",
    "title": "Offline Marketing", 
    "slug": "offline-marketing",
    "image": "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
    "features": ["Event Branding", "Stall & Exhibition Design", "Hoardings & Outdoor Ads", "Brochure & Catalogue", "Activation Campaigns"]
  },
  {
    "id": "08",
    "title": "Influencer & Creator Marketing", 
    "slug": "influencer-creator-marketing",
    "image": "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=800",
    "features": ["Influencer Outreach", "UGC Campaigns", "Celebrity Partnerships", "Creator Collaborations"]
  },
  {
    "id": "09",
    "title": "Sales & CRM Support", 
    "slug": "sales-crm-support",
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    "features": ["Sales Pitch Decks", "CRM Implementation", "WhatsApp Marketing", "Marketing Automation", "Lead Nurturing"]
  },
  {
    "id": "10",
    "title": "AI & Emerging Services", 
    "slug": "ai-emerging-services",
    "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    "features": ["AI Video Creation", "AI Content Automation", "AI Avatars", "AI-Powered Ad Creatives"]
  }
];
const ServiceCard = ({ service, index, hoveredIndex, setHoveredIndex }) => {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    x.set((e.clientX - rect.left) / width - 0.5);
    y.set((e.clientY - rect.top) / height - 0.5);
  };

  const handleMouseLeave = () => {
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
        perspective: "1200px"
      }}
      animate={{
        scale: isThisCardHovered ? 1.02 : 1,
        opacity: 1,
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="relative h-[400px] md:h-[430px] rounded-[12px] bg-[#EBEBEB] overflow-hidden group border-2 border-[#0A95DC] cursor-pointer shadow-purple-900 shadow-sm"
    >
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <motion.img
          src={service.image}
          alt={service.title}
          animate={{
            opacity: isThisCardHovered ? 0.35 : 1,
            scale: isThisCardHovered ? 1.05 : 1,
            filter: isThisCardHovered ? "blur(6px)" : "blur(0px)"
          }}
          transition={{ duration: 0.4 }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
      </div>
      <div className="relative z-10 w-full h-full p-8 md:p-10 flex flex-col justify-between" style={{ transform: "translateZ(30px)" }}>
        <div className="flex justify-between items-start w-full">
          <h3 className="text-xl md:text-[20px] font-black uppercase tracking-wide text-white leading-[1.2] max-w-[100%]">
            {service.title}
          </h3> 
        </div>
        <div className="w-full flex flex-col justify-end items-start mt-auto space-y-5">
          <div className="w-full flex flex-col items-start gap-2 max-h-[220px] overflow-hidden">
            {service.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                animate={{
                  opacity: isThisCardHovered ? 1 : 0,
                  y: isThisCardHovered ? 0 : 25
                }}
                transition={{
                  duration: 0.3,
                  delay: isThisCardHovered ? i * 0.03 : 0,
                  ease: "easeOut"
                }}
                className="px-4 py-1.5 bg-white border  text-blue-600 text-[12px] capitalize tracking-[.1rem] rounded-full"
              >
                {feature}
              </motion.div>
            ))}
          </div>
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

            <Link
              to={`/services/${service.slug}`}
              className="text-[14px] font-black capitalize tracking-[.1rem] text-white bg-gradient-to-r from-[#0A95DC] to-[#830FBC] px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 hover:bg-white"
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
    <HelmetProvider>
      <div className="w-full bg-[#FAFBFD] flex flex-col min-h-screen select-none" style={itcStyle}>
        <Helmet>
          <title>Services Our Agency</title>
          <meta
            name="description"
            content="Explore our extensive full-screen dynamic design portfolio slider showcasing premium case studies, corporate brands, and creative prints."
          />
          <meta property="og:title" content="Services Our Agency" />
          <meta
            property="og:description"
            content="Explore our extensive full-screen dynamic design portfolio slider showcasing premium case studies, corporate brands, and creative prints."
          />
        </Helmet>
        <Navbar />
        <div className="relative w-full h-[50vh] md:h-[65vh] flex items-center justify-center bg-gray-900 overflow-hidden pt-16">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600"
            alt="Services Breadcrumb Backdrop"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30" />
          <div className="relative z-10 text-center flex flex-col items-center justify-center px-6 mt-6">
            <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight drop-shadow-md">
              Our Expertise
            </h1>
            <nav className="flex items-center gap-2 mt-4 text-xs md:text-sm tracking-widest uppercase font-bold text-white/80">
              <Link to="/" className="hover:text-white transition-colors duration-300">Home</Link>
              <span className="text-white/40">/</span>
              <span className="text-[#0A95DC]">Services</span>
            </nav>
          </div>
        </div>
        <main className="flex-1 py-16 px-6 md:px-12 lg:px-16 max-w-[1550px] mx-auto w-full">
          <div className="w-full flex flex-col items-start gap-4 mb-16">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-wide text-[#003142] leading-[0.9]">
              Services that drive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A95DC] to-[#830FBC]">Real Impact.</span>
            </h2>
          </div>
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

        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Services;