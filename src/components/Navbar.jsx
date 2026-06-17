import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = ["Home", "About", "Portfolio", "Services", "CaseStudy", "Career", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+911234567890";
  };

  const itcStyle = { fontFamily: '"ITCAvantGardeStd", sans-serif' };

  return (
    <div 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "px-0" : "px-4 sm:px-8 md:px-12"
      }`} 
      style={itcStyle}
    > 
      <nav
        className={`
          w-full items-center justify-between flex px-6 md:px-10 py-3.5 transition-all duration-500 border
          ${
            scrolled
              ? "max-w-full mx-auto mt-0 rounded-none bg-white/95 border-black/5  backdrop-blur-2xl"
              : "max-w-8xl mx-auto mt-5 rounded-full  border-white/10 backdrop-blur-md bg-blue-950"
          }
        `}
      > 
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <img
            src="images/logo.png"
            alt="Logo"
            width="42"
            height="42"
            className="group-hover:scale-105 transition-transform duration-300"
          />
          <span className={`text-[12px] md:text-[14px] font-black capitalize tracking-[0.1em] transition-colors duration-300 ${
            scrolled ? "text-[#020B1E]" : "text-white"
          }`}>
            We help businesses grow
          </span>
        </Link>
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`relative text-[14px] font-black uppercase tracking-[0.25em] transition-colors duration-300 py-1.5 group ${
                scrolled ? "text-[#020B1E]/80 hover:text-[#020B1E]" : "text-white hover:text-white"
              }`}
            >
              {item}
               <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-[#0A95DC] to-[#830FBC] transition-all duration-300 -translate-x-1/2 group-hover:w-full rounded-full" />
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={handleCall}
            className="hidden sm:flex items-center gap-2.5 bg-gradient-to-r from-[#0A95DC] to-[#830FBC] text-white px-6 py-2.5 rounded-full text-[14px] font-black capitalize tracking-wide   active:scale-95 hover:scale-[1.02] transition-all duration-300"
          >
            <Phone size={14} strokeWidth={3} className="animate-pulse" />
            Book a call
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className={`lg:hidden w-10 h-10 rounded-full border transition-all duration-300 flex items-center justify-center ${
              scrolled 
                ? "bg-black/5 border-black/5 text-[#020B1E] hover:bg-black/10" 
                : "bg-white/5 border-white/10 text-white hover:bg-white/10"
            }`}
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <>
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[110]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-[380px] bg-[#00394E] z-[120] p-8 flex flex-col justify-between border-l border-white/5 shadow-2xl"
            >
              <div className="flex justify-between items-center pb-6 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <img src="image/webp/logo.webp" alt="Logo" width="40" height="40" />
                  <span className="text-[10px] font-black capitalize tracking-wide text-white"> We help businesses grow</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-white border border-white/10 transition-colors"
                >
                  <X size={22} />
                </button>
              </div>
              <div className="flex flex-col gap-5 my-auto py-12">
                {menuItems.map((item, idx) => (
                  <motion.div
                    key={`mob-${item}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="text-white text-xl font-black capitalize tracking-[0.2em] block hover:text-[#0A95DC] transition-colors"
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-auto">
                <button
                  onClick={handleCall}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#0A95DC] to-[#830FBC] text-white py-4 rounded-full font-black capitalize text-[11px] tracking-[0.2em] "
                >
                  <Phone size={14} strokeWidth={3} />
                  Book a call now
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;