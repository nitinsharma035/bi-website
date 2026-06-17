import { useState } from "react";
import { Plus, Minus, MessageSquare } from "lucide-react";

const faqData = [
  {
    id: 1, 
    question: "How does the onboarding process look like?",
    answer: "We kick off with a deep engineering audit of your existing assets, map out the technical workflow blueprints, and establish secure shared communication channels inside our production sprints within 48 hours.",
  },
  {
    id: 2, 
    question: "Which technologies do you specialize in?",
    answer: "Our core engineering ecosystem leverages premium client frameworks centered strictly around React.js, Tailwind CSS, Framer Motion for high-end immersion physics, and real-time Firebase scalable architectures.",
  },
  {
    id: 3, 
    question: "What is the typical turnaround time for a custom portal?",
    answer: "A production-ready responsive system prototype maps anywhere between 2 to 4 weeks depending entirely on structural parameters, interactive components depth, and custom integration requirements.",
  },
  {
    id: 4, 
    question: "Do you provide post-launch optimization tracking?",
    answer: "Absolutely. We deploy live performance analytics tracking framework models combined with robust continuous cloud monitoring systems to continuously audit and optimize real-time ROI scaling loops.",
  }
];

const FaqCreative = () => {
  const [openId, setOpenId] = useState(1);
  const itcStyle = { fontFamily: '"ITCAvantGardeStd", sans-serif' };

  return (
    <section className="relative w-full h-auto bg-gray-100 text-black py-14 px-6 md:px-12 lg:px-20 overflow-hidden select-none" style={itcStyle}>
       <div className="absolute left-0 top-[8%] w-[30%] max-w-[400px] pointer-events-none z-0 hidden md:block select-none">
        <img 
          src="image/left-faq.svg" 
          alt="Background Left Vector" 
          className="w-full h-auto object-contain"
        />
      </div> 
      <div className="absolute right-0 bottom-[5%] w-[35%] max-w-[450px] pointer-events-none z-0 hidden md:block select-none">
        <img 
          src="image/right-faq.svg" 
          alt="Background Right Vector" 
          className="w-full h-auto object-contain"
        />
      </div> 
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10"> 
        <div className="lg:col-span-5 flex flex-col justify-start items-start lg:sticky lg:top-32 h-fit space-y-8">
          <div className="flex flex-col items-start space-y-3">  
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide text-[#003142] leading-[1.0]">
              Frequently <br />
              Asked <br />
              Questions.
            </h2>
          </div>

          <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium normal-case tracking-wide max-w-sm">
            Can't find the specific structural answer you are looking for? Connect directly with our core engineering engine panel.
          </p>

          <div className="w-full max-w-xs bg-white border border-gray-100 p-5 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex items-center gap-4 group hover:border-[#0A95DC]/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#0A95DC] to-[#830FBC] flex items-center justify-center text-white shadow-md relative shrink-0">
              <MessageSquare size={20} className="group-hover:rotate-12 transition-transform" />
              <span className="absolute top-[-2px] right-[-2px] w-3 h-3 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xs font-black tracking-wider text-[#003142]">Support Active</span>
              <a href="mailto:marketing@beingingenious.in" className="text-[11px]  text-black hover:text-[#0A95DC] mt-0.5 transition-colors">
                marketing@beingingenious.in
              </a>
            </div>
          </div>
        </div> 
        <div className="lg:col-span-7 flex flex-col w-full space-y-4">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`w-full rounded-[2rem] overflow-hidden border transition-all duration-500 transform-gpu will-change-[background-color,shadow,border-color] ${
                  isOpen
                    ? "bg-[#3467d1cc] border-white/5 shadow-2xl shadow-black/20"
                    : "bg-[#FAFBFD] border-gray-100 hover:border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.01)]"
                }`}
              > 
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none select-none"
                >
                  <div className="flex flex-col items-start space-y-2 pr-4">
                    <span className={`text-base sm:text-lg font-black tracking-wide leading-snug transition-colors duration-300 ${
                      isOpen ? "text-white" : "text-[#003142]"
                    }`}>
                      {faq.question}
                    </span>
                  </div> 
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-all duration-500 transform-gpu ${
                    isOpen
                      ? "border-white/20 bg-white/5 text-white rotate-180"
                      : "border-gray-200 bg-gray-50 text-[#003142]"
                  }`}>
                    {isOpen ? <Minus size={15} strokeWidth={3} /> : <Plus size={15} strokeWidth={3} />}
                  </div>
                </button> 
                <div 
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] transform-gpu ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden min-h-0">
                    <div className="px-6 pb-7 sm:px-8 sm:pb-8 text-xs sm:text-sm text-white normal-case leading-relaxed font-medium tracking-wide">
                      {faq.answer}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FaqCreative;