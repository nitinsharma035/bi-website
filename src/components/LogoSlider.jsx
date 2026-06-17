const clientLogos = [
  { src: "./image/webp/amity-punjab.webp", alt: "Amity University Punjab" },
  { src: "./image/webp/dhulai.webp", alt: "Dhulai" },
  { src: "./image/webp/subh.webp", alt: "Subhhousing" },
  { src: "./image/webp/farmique.webp", alt: "Farmique" },
  { src: "./image/webp/amity.webp", alt: "Amity International School" },
  { src: "./image/webp/ananta.webp", alt: "Ananta" },
  { src: "./image/webp/ar.webp", alt: "Alpha Resources" },
  { src: "./image/webp/arg-grpoup.webp", alt: "ARG Group" },
  { src: "./image/webp/arg-punam.webp", alt: "ARG Puram" },
  { src: "./image/webp/ashiana-foundation.webp", alt: "Ashiana Foundation" },
  { src: "./image/webp/atta.webp", alt: "Attavita" },
  { src: "./image/webp/av.webp", alt: "Alumvista" },
  { src: "./image/webp/awe.webp", alt: "Ageing With Ease" },
  { src: "./image/webp/bc.webp", alt: "Bhiwadi Connect" },
  { src: "./image/webp/cg.webp", alt: "CG Developers" },
  { src: "./image/webp/dupl.webp", alt: "Digital Upsho" },
  { src: "./image/webp/ekatran.webp", alt: "eKatrans" },
  { src: "./image/webp/gd.webp", alt: "GD Goenka School" },
  { src: "./image/webp/icobn.webp", alt: "ICOBN" },
  { src: "./image/webp/k-group.webp", alt: "Krish Group" },
  { src: "./image/webp/krish-heights.webp", alt: "Krish Heights" },
  { src: "./image/webp/kuldhara.webp", alt: "Kuldhara Realestate" },
  { src: "./image/webp/lavanya.webp", alt: "Lavanya" },
  { src: "./image/webp/macc.webp", alt: "MACC" },
  { src: "./image/webp/mg.webp", alt: "Mogli Group" },
  { src: "./image/webp/mo.webp", alt: "MO" },
  { src: "./image/webp/msalon.webp", alt: "M Salon" },
  { src: "./image/webp/nh-8.webp", alt: "NH8 nhbakehouse" },
  { src: "./image/webp/nikunj.webp", alt: "Krish Nikunj" },
  { src: "./image/webp/rc.webp", alt: "RC Palace Hotel" },
  { src: "./image/webp/rhn.webp", alt: "Rasoi NH-8" },
  { src: "./image/webp/rt.webp", alt: "Royal Retreat" },
  { src: "./image/webp/seasn.webp", alt: "Krish Seasons" },
  { src: "./image/webp/squre.webp", alt: "Krish Square" },
  { src: "./image/webp/te.webp", alt: "Tera Elegance" },
  { src: "./image/webp/tth.webp", alt: "Tick talk homes" },
  { src: "./image/webp/uj.webp", alt: "urbana jewels" },
  { src: "./image/webp/Untitled-1.webp", alt: "Krish Harmony" },
  { src: "./image/webp/vsambar.webp", alt: "Manglam's vishamber" },
  { src: "./image/webp/Westway.webp", alt: "Ananta Westway Heights" },
  { src: "./image/webp/7.webp", alt: "7th heaven" },
  { src: "./image/webp/aavas.webp", alt: "Aavas Housing" },
  { src: "./image/webp/aditi.webp", alt: "Aditi Beauty School" },
  { src: "./image/webp/ah.webp", alt: "Krish Aura Height" }
];

const middleIndex = Math.ceil(clientLogos.length / 2);
const row1Logos = [...clientLogos.slice(0, middleIndex), ...clientLogos.slice(0, middleIndex)];
const row2Logos = [...clientLogos.slice(middleIndex), ...clientLogos.slice(middleIndex)];

const ClientLogoSlider = () => {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 overflow-hidden relative">
      
      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-20 px-4"> 
        <h2 className="text-3xl md:text-5xl uppercase font-extrabold text-[#003142] tracking-wide">
          Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Industry Leaders</span>
        </h2>
        <p className="text-gray-500 text-sm md:text-base mt-3 max-w-xl mx-auto">
          We collaborate with top enterprises, schools, and real-estate groups to build impactful digital solutions.
        </p>
      </div>

      {/* MARQUEE CARDS WRAPPER CONTAINER */}
      <div className="relative w-full mx-auto px-4">
        
        {/* Soft Transparent Gradient Side Edges Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-44 bg-gradient-to-r from-gray-50 via-gray-50/40 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-44 bg-gradient-to-l from-gray-50 via-gray-50/40 to-transparent z-10 pointer-events-none" />

        <div className="flex flex-col gap-10 md:gap-14">
          
          {/* ROW 1: MARQUEE LEFT */}
          <div className="w-full overflow-hidden flex">
            <div className="custom-marquee-left flex whitespace-nowrap gap-10 md:gap-14 items-center py-3">
              {row1Logos.map((logo, index) => (
                <div 
                  key={`row1-${index}`} 
                  className="bg-white rounded-[2rem] shadow-[0_10px_35px_-6px_rgba(0,0,0,0.03)] border border-gray-100/80 transition-all duration-300 transform hover:-translate-y-2 flex-shrink-0 flex items-center justify-center min-w-[250px] md:min-w-[300px] h-[90px] md:h-[130px]"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    className="h-12 md:h-16 w-auto object-contain filter transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2: MARQUEE RIGHT */}
          <div className="w-full overflow-hidden flex">
            <div className="custom-marquee-right flex whitespace-nowrap gap-10 md:gap-14 items-center py-3">
              {row2Logos.map((logo, index) => (
                <div 
                  key={`row2-${index}`} 
                  className="bg-white rounded-[2rem] shadow-[0_10px_35px_-6px_rgba(0,0,0,0.03)] border border-gray-100/80 transition-all duration-300 transform hover:-translate-y-2 flex-shrink-0 flex items-center justify-center min-w-[250px] md:min-w-[300px] h-[90px] md:h-[130px]"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    className="h-12 md:h-16 w-auto object-contain filter transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* FIXED SYSTEM CSS INJECTION */}
      <style>{`
        .custom-marquee-left {
          animation: marqueeLeft 35s linear infinite;
        }
        .custom-marquee-right {
          animation: marqueeRight 35s linear infinite;
        }
        /* Hover target optimization */
        .custom-marquee-left:hover,
        .custom-marquee-right:hover {
          animation-play-state: paused !important;
        }

        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

    </section>
  );
};

export default ClientLogoSlider;