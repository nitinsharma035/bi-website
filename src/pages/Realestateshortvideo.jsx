import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Play, ChevronRight } from "lucide-react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const SECTIONS_DATA = [
  {
    title: "Pellente\ndapibus",
    subtitle: "DEC 2025 • CREATIVE",
    img1: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200",
    img2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200",
    link1: "https://video-link-1.com",
    link2: "https://video-link-2.com",
    gradient: "from-purple-500 via-pink-400 to-pink-100",
  },
  {
    title: "Future\nMotion",
    subtitle: "JAN 2026 • DESIGN",
    img1: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1200",
    img2: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1200",
    link1: "https://video-link-3.com",
    link2: "https://video-link-4.com",
    gradient: "from-cyan-500 via-blue-500 to-blue-100",
  },
  {
    title: "Minimal\nVision",
    subtitle: "FEB 2026 • MODERN",
    img1: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=1200",
    img2: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1200",
    link1: "https://video-link-5.com",
    link2: "https://video-link-6.com",
    gradient: "from-orange-400 via-pink-400 to-purple-200",
  },
];

const ScrollSection = ({
  title,
  subtitle,
  img1,
  img2,
  link1,
  link2,
  gradient,
  index,
  isDesktop
}) => {
  return (
    <div
      className={`${isDesktop ? "absolute opacity-0 invisible" : "relative"} inset-0 pt-0 md:pt-64 pb-0 md:pb-20 w-full h-full flex flex-col md:flex-row md:items-center md:justify-center px-4 md:px-10 bg-white section-panel-${index}`}
    >
      <div className="relative w-full max-w-[1600px] h-full flex flex-col md:flex-row md:items-center md:justify-center gap-8 md:gap-0">
        <div className={`relative z-10 order-1 md:order-none flex flex-col items-center justify-center text-center px-4 text-layer-${index}`}>
          <span className="uppercase tracking-[0.35em] text-[11px] text-black/70 font-medium">
            {subtitle}
          </span>

          <h1 className="text-[2rem] md:text-[4rem] lg:text-[5rem] leading-[1] uppercase font-black text-black tracking-normal whitespace-pre-line mt-4 md:mt-6">
            {title}
          </h1>

          <Link
            to="/contact"
            className="mt-6 md:mt-8 px-8 py-4 rounded-full border border-black/10 bg-white text-black font-medium hover:bg-black hover:text-white transition-all duration-300 inline-block text-center"
          >
            Get Started
          </Link>

          <div className={`mt-8 md:mt-10 w-44 h-3 rounded-full bg-gradient-to-r ${gradient}`} />
        </div>
        <div
          style={{ zIndex: 20, left: isDesktop ? "50%" : "auto" }}
          className={`relative md:absolute order-2 md:order-none w-full max-w-[340px] md:max-w-[440px] aspect-[9/16] md:h-[580px] rounded-[28px] overflow-hidden shadow-2xl bg-white group cursor-pointer mx-auto md:mx-0 left-card-${index}`}
        >
          <img src={img1} alt={`${title.replace("\n", " ")} Left Visual Showcase`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <a href={link1} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all duration-500">
            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center backdrop-blur-md shadow-lg">
              <Play className="w-5 h-5 fill-black ml-1" strokeWidth={0} />
            </div>
          </a>
        </div>
        <div
          style={{ zIndex: 25, left: isDesktop ? "50%" : "auto" }}
          className={`relative md:absolute order-3 md:order-none w-full max-w-[340px] md:max-w-[440px] aspect-[9/16] md:h-[580px] rounded-[28px] overflow-hidden shadow-2xl bg-white group cursor-pointer mx-auto md:mx-0 right-card-${index}`}
        >
          <img src={img2} alt={`${title.replace("\n", " ")} Right Visual Showcase`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <a href={link2} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all duration-500">
            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center backdrop-blur-md shadow-lg">
              <Play className="w-5 h-5 fill-black ml-1" strokeWidth={0} />
            </div>
          </a>
        </div>

      </div>
    </div>
  );
};

export default function App() {
  const [isDesktop, setIsDesktop] = useState(() => typeof window !== "undefined" ? window.innerWidth >= 768 : false);
  const triggerRef = useRef(null);
  useGSAP(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleMediaQueryChange = (e) => setIsDesktop(e.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);
  useGSAP(() => {
    if (!isDesktop) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: `+=${SECTIONS_DATA.length * 150}%`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
      }
    });

    SECTIONS_DATA.forEach((_, index) => {
      gsap.set(`.section-panel-${index}`, {
        opacity: index === 0 ? 1 : 0,
        autoAlpha: index === 0 ? 1 : 0,
        zIndex: 10 + index
      });
      gsap.set(`.left-card-${index}`, { xPercent: -50, x: "0vw" });
      gsap.set(`.right-card-${index}`, { xPercent: -50, x: "0vw" });
      gsap.set(`.text-layer-${index}`, { opacity: 1, scale: 1 });

      if (index > 0) {
        timeline.to(`.section-panel-${index}`, {
          opacity: 1,
          autoAlpha: 1,
          duration: 0.1
        }, `section-${index}-start`);
      }
      timeline.to(`.left-card-${index}`, {
        xPercent: -170, 
        ease: "none",
        duration: 1
      }, `section-${index}-mid`);

      timeline.to(`.right-card-${index}`, {
        xPercent: 70,
        ease: "none",
        duration: 1
      }, `section-${index}-mid`);

      if (index < SECTIONS_DATA.length - 1) {
        timeline.to(`.section-panel-${index}`, {
          opacity: 0,
          autoAlpha: 0,
          duration: 0.1
        }, `section-${index}-end`);
      }
    });
  }, { dependencies: [isDesktop], scope: triggerRef });

  return (
    <HelmetProvider>
      <div className="w-full bg-white flex flex-col min-h-screen select-none overflow-x-hidden">
        <Helmet>
          <title>Short Videos & Cinematic Reels Showcase</title>
          <meta name="description" content="Explore premium architectural real estate short videos..." />
        </Helmet>

        <Navbar />

        <div className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center bg-gray-900 overflow-hidden z-20">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
            alt="Showcase Breadcrumb Backdrop"
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
          <div className="relative z-10 text-center flex flex-col items-center justify-center px-6 mt-4">
            <h1 className="text-2xl md:text-5xl font-black uppercase text-white tracking-normal drop-shadow-md">
              Real Estate Short Videos
            </h1>
            <nav className="flex items-center gap-2 mt-4 text-xs md:text-sm tracking-normal uppercase font-bold text-white/80">
              <Link to="/" className="hover:text-white transition-colors duration-300">Home</Link>
              <ChevronRight className="w-3 h-3 text-white/40" />
              <span className="text-[#0A95DC]">Real Estate Short Videos</span>
            </nav>
          </div>
        </div>
        <main ref={triggerRef} className="relative w-full h-screen md:h-[calc(100vh-96px)] z-10 mt-2">
          {isDesktop ? (
            <div className="absolute inset-0 w-full h-full">
              {SECTIONS_DATA.map((section, idx) => (
                <ScrollSection
                  key={idx}
                  {...section}
                  index={idx}
                  isDesktop={isDesktop}
                />
              ))}
            </div>
          ) : (
            <div className="w-full h-auto overflow-y-auto px-0 py-4 flex flex-col gap-4 md:gap-32">
              {SECTIONS_DATA.map((section, idx) => (
                <div key={idx} className="relative w-full h-auto mb-12">
                  <ScrollSection {...section} index={idx} isDesktop={false} />
                </div>
              ))}
              <Footer />
            </div>
          )}
        </main>
        {isDesktop && (
          <div className="relative w-full bg-[#f5f5f3] z-30 mt-44">
            <Footer />
          </div>
        )}
      </div>
    </HelmetProvider>
  );
}