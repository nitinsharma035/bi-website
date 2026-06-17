import { motion } from 'framer-motion';

const HeroSection = () => {
  const itcStyle = { fontFamily: '"ITCAvantGardeStd", sans-serif' }; 
  const videoSource = "video/bg.mp4"; 
  const line1 = "Build on".split(" ");
  const line2 = "decentralized".split(" ");
  const line3 = "crypto protocol".split(" "); 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  }; 
  const wordFadeUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 45
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.35, 
        ease: [0.115, 0.510, 0.25, 0.355]
      }
    }
  };

  return (
    <section className="flex md:hidden relative w-full min-h-screen text-white items-center overflow-hidden px-6 md:px-16 lg:px-24" style={itcStyle}>
       <div className="absolute inset-0 w-full h-full object-cover z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-transparent" />
      </div> 
      <div className="w-full max-w-7xl mx-auto z-10 relative pt-24 pb-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl md:max-w-4xl space-y-8 text-left"
        > 
          <motion.div 
            variants={wordFadeUpVariants}
            className="inline-flex items-center gap-3 bg-white/10 border border-white/20 p-1.5 pr-4 rounded-full max-w-full backdrop-blur-md shadow-lg"
          >
            <span className="bg-white text-black text-[10px] font-black capitalize tracking-widest px-3 py-1 rounded-full shrink-0 shadow-sm">
              New
            </span>
            <span className="text-[11px] text-white font-medium tracking-wide truncate">
              Introducing our new most advanced Web3 hosting
            </span>
          </motion.div> 
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black capitalize tracking-wide leading-[0.95] text-white flex flex-col gap-3">
             <div className="flex flex-wrap gap-x-3 w-full">
              {line1.map((word, i) => (
                <motion.span key={`l1-${i}`} variants={wordFadeUpVariants} className="inline-block text-white">
                  {word}
                </motion.span>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-3 w-full">
              {line2.map((word, i) => (
                <motion.span 
                  key={`l2-${i}`} 
                  variants={wordFadeUpVariants} 
                  className="inline-block text-white"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-3 w-full">
              {line3.map((word, i) => (
                <motion.span 
                  key={`l3-${i}`} 
                  variants={wordFadeUpVariants} 
                  className="inline-block text-white"
                >
                  {word}
                </motion.span>
              ))}
            </div>

          </h1>
          <motion.p 
            variants={wordFadeUpVariants}
            className="text-white drop-shadow-md text-sm md:text-base max-w-lg leading-relaxed font-medium pt-1"
          >
            Nebula Core is a leading provider of cutting-edge decentralized solutions, powering the next generation of NFT, GameFi, and Metaverse projects.
          </motion.p>
          <motion.div variants={wordFadeUpVariants} className="pt-2">
            <button className="px-8 py-4 bg-gradient-to-r from-[#0A95DC] to-[#830FBC] text-white font-mono font-black capitalize text-[14px] tracking-[0.15em] rounded-full shadow-[0_15px_35px_rgba(10,149,220,0.3)] hover:shadow-[0_20px_45px_rgba(131,15,188,0.4)] transition-all duration-500 flex items-center gap-4 group border border-white/20">
              Schedule demo
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-black transition-transform duration-500 group-hover:translate-x-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </button>
          </motion.div>

        </motion.div>
      </div>

      

    </section>
  );
};

export default HeroSection;