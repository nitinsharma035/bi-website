import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RealestateVideo = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 991);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const awardsData = [
    {
      year: "2024", 
      org: "National Real Estate Awards",
      img: "https://images.unsplash.com/photo-1530076886461-ce58ea8abe24?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://images.unsplash.com/photo-1530076886461-ce58ea8abe24?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },
    {
      year: "2023", 
      org: "North India Property Awards",
      img: "https://images.unsplash.com/photo-1530076886461-ce58ea8abe24?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://images.unsplash.com/photo-1530076886461-ce58ea8abe24?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      year: "2023", 
      org: "Property Showcase",
      img: "https://images.unsplash.com/photo-1530076886461-ce58ea8abe24?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://images.unsplash.com/photo-1530076886461-ce58ea8abe24?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      year: "2022", 
      org: "Luxury Housing Meet",
      img: "https://images.unsplash.com/photo-1530076886461-ce58ea8abe24?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://images.unsplash.com/photo-1530076886461-ce58ea8abe24?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      year: "2022", 
      org: "地产 Excellence",
      img: "https://images.unsplash.com/photo-1530076886461-ce58ea8abe24?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://images.unsplash.com/photo-1530076886461-ce58ea8abe24?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <HelmetProvider>
      <section className="relative bg-white w-full font-['ITC'] select-none">
         <Helmet>
          <title>Premium Real Estate Cinematic Videos & Corporate Films</title>
          <meta 
            name="description" 
            content="Watch our award-winning real estate video projects, walkthrough reels, and luxury commercial asset structural highlights." 
          />
          <meta property="og:title" content="Premium Real Estate Cinematic Videos & Corporate Films" />
          <meta 
            property="og:description" 
            content="Watch our award-winning real estate video projects, walkthrough reels, and luxury commercial asset structural highlights." 
          />
        </Helmet>

        <Navbar />
        <div className="w-full">
          <div className="max-w-[1600px] pt-32 mx-auto flex flex-col items-center px-2 md:gap-0">
            {awardsData.map((award, index) => (
              <div
                key={index}
                className={`
                  w-full max-w-[1300px] aspect-[16/9] md:h-[550px] rounded-[24px] overflow-hidden  
                  sticky max-[991px]:relative max-[991px]:top-0 max-[991px]:mx-auto mb-[20px] md:mb-[150px]
                  transition-all duration-300 group bg-white 
                `}
                style={{ 
                  top: isDesktop ? `${120 + index * 45}px` : '0px',
                  zIndex: 10 + index 
                }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={award.img}
                    alt={`${award.org || "Real Estate Film"} ${award.year}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  />
                  <a
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-all duration-500"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/95 flex items-center justify-center backdrop-blur-md shadow-2xl transform scale-100 group-hover:scale-110 transition-all duration-500 cursor-pointer">
                      <Play className="w-8 h-8 md:w-10 md:h-10 fill-black text-black ml-1.5 transition-colors duration-300 group-hover:text-purple-600 group-hover:fill-purple-600" />
                    </div>
                  </a>
                  <div className="absolute bottom-8 left-8 z-20 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] pointer-events-none">
                    <span className="text-sm tracking-[0.25em] font-medium opacity-90 uppercase block">
                      {award.year} • {award.org || "FILM"}
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </section>
    </HelmetProvider>
  );
};

export default RealestateVideo;