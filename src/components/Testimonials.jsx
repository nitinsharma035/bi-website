import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonialsData = [
  {
    id: 1,
    name: "Dhruv Chauhan",
    role: "Head of marketing, r c palace & nh8 hospitality",
    rating: "4.9",
    date: "26 Aug, 2017",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    text: "We had little to no digital presence before being ingenious took over. In the span of 2 years, they have built our brand from the ground up so much, so that our social media presence has helped us more than double our sales… they have gone beyond their call of duty and supported us with events, offline marketing, sales so forth. We are extremely fortunate to have found them and strongly recommend their services to anyone just starting out or looking to build a brand.",
  },
  {
    id: 2,
    name: "Ankita Aggarwal",
    role: "Chairperson at vallores pre-school suncity gurugram",
    rating: "5.0",
    date: "12 Sep, 2017",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    text: "We have used mr manoj’s digital company for our preschool launch. It is wonderful to see how much effort they put in. They would consider your venture as one of their own and would take it to another level. From social media management to content creation they handle everything with finesse. Its hard to find such digilent team. Would surely recommend to everyone looking for distinguished services.",
  }, 
  {
    id: 3,
    name: "Dhruv Chauhan",
    role: "Head of marketing, r c palace & nh8 hospitality",
    rating: "4.9",
    date: "26 Aug, 2017",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    text: "We had little to no digital presence before being ingenious took over. In the span of 2 years, they have built our brand from the ground up so much, so that our social media presence has helped us more than double our sales… they have gone beyond their call of duty and supported us with events, offline marketing, sales so forth. We are extremely fortunate to have found them and strongly recommend their services to anyone just starting out or looking to build a brand.",
  },
  {
    id: 4,
    name: "Ankita Aggarwal",
    role: "Chairperson at vallores pre-school suncity gurugram",
    rating: "5.0",
    date: "12 Sep, 2017",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    text: "We have used mr manoj’s digital company for our preschool launch. It is wonderful to see how much effort they put in. They would consider your venture as one of their own and would take it to another level. From social media management to content creation they handle everything with finesse. Its hard to find such digilent team. Would surely recommend to everyone looking for distinguished services.",
  }
];

const Testimonials = () => {
  const [list, setList] = useState(testimonialsData);
  const activeUser = list[1]; // Center element matches dynamic text block

  useEffect(() => {
    const timer = setInterval(() => {
      setList((prevList) => {
        const [first, ...rest] = prevList;
        return [...rest, first];
      });
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-16 bg-white border-t border-gray-100 relative z-10 overflow-hidden select-none">
      
      {/* ====== CENTERED HEADING BLOCK ====== */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20 flex justify-center text-center">
        <h3 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase  tracking-wide leading-none">
          <span className="text-[#003142] mr-3">CLIENT</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A95DC] via-[#5B51D8] to-[#830FBC]">
            TESTIMONIALS
          </span>
        </h3>
      </div>

      {/* INNER WRAPPER DIV */}
      <div className="max-w-7xl mx-auto">
        <div className="w-full bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative shadow-[0_20px_50px_rgba(0,0,0,0.01)]">
          
          {/* Decorative Background Accents */}
          <div className="absolute top-0 left-0 w-44 h-44 bg-[#0A95DC]/5 rounded-br-full pointer-events-none z-0" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#830FBC]/5 rounded-tl-full pointer-events-none z-0" />

          {/* ================= LEFT CONTROLLER PANEL ================= */}
          <div className="md:col-span-5 relative flex flex-col z-10">
             

            <div className="flex flex-col gap-4 h-[280px] justify-center relative overflow-hidden px-2">
              <AnimatePresence mode="popLayout">
                {list.slice(0, 3).map((user, index) => {
                  const isActive = index === 1;

                  return (
                    <motion.div
                      key={user.id}
                      layout
                      initial={{ opacity: 0, y: 50, scale: 0.85 }}
                      animate={{
                        opacity: isActive ? 1 : 0.4,
                        scale: isActive ? 1.05 : 0.95,
                        y: 0,
                      }}
                      exit={{ opacity: 0, y: -50, scale: 0.85 }}
                      transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 20,
                        mass: 1,
                      }}
                      className={`flex items-center gap-4 p-4 rounded-2xl border transition-shadow duration-300 ${
                        isActive
                          ? "bg-[#FAFBFD] border-gray-100 shadow-[0_15px_35px_rgba(0,0,0,0.02)]"
                          : "border-transparent bg-transparent"
                      }`}
                    >
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                        <img
                          src={user.image}
                          alt={user.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex flex-col">
                        <span className="text-2xl font-black text-[#003142] tracking-wide">
                          {user.name}
                        </span>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs font-mono text-amber-500 font-bold">
                            ★ {user.rating}
                          </span>
                          <span className="text-[10px] font-medium text-gray-400">
                            on {user.date}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Vertical Separator Column */}
          <div className="hidden md:block md:col-span-1 h-52 w-[1px] bg-gray-100 justify-self-center z-10" />

          {/* ================= RIGHT TEXT PANEL ================= */}
          <div className="md:col-span-6 flex flex-col justify-center min-h-[180px] relative z-10 lg:pl-6">
            

            <AnimatePresence mode="wait">
              <motion.div
                key={activeUser.id}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="space-y-5"
              >
                <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed font-medium italic pl-4 border-l-2 border-[#0A95DC]/40">
                  "{activeUser.text}"
                </p>
                <div className="pt-1">
                  <p className="text-sm font-bold uppercase tracking-widest text-[#0A95DC]">
                    {activeUser.role}
                  </p>
                </div>   
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;