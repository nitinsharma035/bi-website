import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MediaHubPage() {
  const itcStyle = { fontFamily: '"ITCAvantGardeStd", sans-serif' }; 
  const showcaseSections = [
    {
      id: 1,
      title: "Real Estate",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1966 background loops.",
      bgImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
      links: {
        creatives: "/realestatecreative",
        shortVideo: "/realestateshortvideo",
        longVideo: "/realestatelongvideo"
      } 
    },
    {
      id: 2,
      title: "Product",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1966 background loops.",
      bgImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
      links: {
        creatives: "https://google.com/creatives-2",
        shortVideo: "https://youtube.com/short-2",
        longVideo: "https://youtube.com/long-2"
      }
    },
    {
      id: 3,
      title: "Marketing",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1966 background loops.",
      bgImage: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1600&auto=format&fit=crop",
      links: {
        creatives: "https://google.com/creatives-3",
        shortVideo: "https://youtube.com/short-3",
        longVideo: "https://youtube.com/long-3"
      }
    },
    {
      id: 4,
      title: "Fashion",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1966 background loops.",
      bgImage: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1600&auto=format&fit=crop",
      links: {
        creatives: "https://google.com/creatives-3",
        shortVideo: "https://youtube.com/short-3",
        longVideo: "https://youtube.com/long-3"
      }
    },
    {
      id: 5,
      title: "Salon & Spa",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1966 background loops.",
      bgImage: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1600&auto=format&fit=crop",
      links: {
        creatives: "https://google.com/creatives-3",
        shortVideo: "https://youtube.com/short-3",
        longVideo: "https://youtube.com/long-3"
      }
    },
    {
      id: 6,
      title: "Education",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1966 background loops.",
      bgImage: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1600&auto=format&fit=crop",
      links: {
        creatives: "https://google.com/creatives-3",
        shortVideo: "https://youtube.com/short-3",
        longVideo: "https://youtube.com/long-3"
      }
    },
    {
      id: 7,
      title: " NGO",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1966 background loops.",
      bgImage: "https://images.unsplash.com/photo-1472214222541-d510753a4707?q=80&w=1600&auto=format&fit=crop",
      links: {
        creatives: "https://google.com/creatives-4",
        shortVideo: "https://youtube.com/short-4",
        longVideo: "https://youtube.com/long-4"
      }
    }
  ];

  return (
    <HelmetProvider> 
      <div className="w-full bg-[#FAFBFD] flex flex-col min-h-screen select-none overflow-x-hidden relative" style={itcStyle}>
         <Helmet>
          <title>Portfolio Our Agency</title>
          <meta
            name="description"
            content="Explore our extensive full-screen dynamic design portfolio slider showcasing premium case studies, corporate brands, and creative prints."
          />
          <meta property="og:title" content="Portfolio Our Agency" />
          <meta
            property="og:description"
            content="Explore our extensive full-screen dynamic design portfolio slider showcasing premium case studies, corporate brands, and creative prints."
          />
        </Helmet>
        
        <Navbar />
        
        <div className="relative w-full h-[50vh] md:h-[65vh] flex items-center justify-center bg-gray-900 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1600&auto=format&fit=crop"
            alt="Showcase Breadcrumb Backdrop"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30" />

          <div className="relative z-10 text-center flex flex-col items-center justify-center px-6 mt-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-black uppercase text-white tracking-normal drop-shadow-md"
            >
              Media Portfolio
            </motion.h1>
            <nav className="flex items-center gap-2 mt-4 text-xs md:text-sm tracking-normal uppercase font-bold text-white/80">
              <Link to="/" className="hover:text-white transition-colors duration-300">Home</Link>
              <span className="text-white/40">/</span>
              <span className="text-[#0A95DC]">Showcase</span>
            </nav>
          </div>
        </div>

        <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 md:px-16 py-20 flex flex-col gap-16 relative z-10">
          {showcaseSections.map((section, idx) => (
            <motion.div
              key={section.id}
              id={section.title.toLowerCase().replace(/\s+/g, "")}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="w-full aspect-[4/3] sm:aspect-[21/9] md:h-[500px] rounded-[24px] overflow-hidden shadow-2xl relative border border-black/5 group bg-gray-900"
            > 
            <img
                src={section.bgImage}
                alt={section.title}
                className="absolute inset-0 w-full h-full object-cover opacity-75 transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/55" />
              
              <div className="absolute inset-0 p-4 sm:p-8 md:p-16 flex flex-col justify-center items-center text-center text-white z-10 pointer-events-none">
                <h2 className="text-2xl sm:text-5xl md:text-6xl font-black tracking-wide uppercase drop-shadow-md">
                  {section.title}
                </h2>

                <p className="text-white/80 text-[11px] sm:text-sm md:text-base font-medium max-w-3xl mt-2 sm:mt-4 leading-relaxed drop-shadow-sm line-clamp-3 sm:line-clamp-none">
                  {section.desc}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 mt-6 sm:mt-8 w-full pointer-events-auto">
                  
                  <a
                    href={section.links.creatives} 
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full bg-gradient-to-r from-[#0A95DC] to-[#830FBC] text-white text-[10px] sm:text-xs md:text-sm font-black capitalize tracking-wide flex items-center gap-1.5 sm:gap-2 shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
                  >
                    Creatives <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                   <a
                    href={section.links.shortVideo} 
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full bg-gradient-to-r from-[#0A95DC] to-[#830FBC] text-white text-[10px] sm:text-xs md:text-sm font-black capitalize tracking-wide flex items-center gap-1.5 sm:gap-2 shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
                  >
                    Short Video <ArrowRight className="w-3.5 h-3.5" />
                  </a> 
                  <a
                    href={section.links.longVideo} 
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full bg-gradient-to-r from-[#0A95DC] to-[#830FBC] text-white text-[10px] sm:text-xs md:text-sm font-black capitalize tracking-wide flex items-center gap-1.5 sm:gap-2 shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
                  >
                    Long Video <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                </div>
              </div>
            </motion.div>
          ))}
        </main>

        {/* 4. BRAND FOOTER */}
        <Footer />
      </div>
    </HelmetProvider>
  );
}