 
import { motion } from "framer-motion"; 
import { Check, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function ServiceDetailsPage() { 

  const itcStyle = { fontFamily: '"ITCAvantGardeStd", sans-serif' };
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <HelmetProvider>
    <div className="w-full bg-[#FAFBFD] flex flex-col min-h-screen select-none overflow-x-hidden relative" style={itcStyle}> 
              <Helmet>
                <title>Services details Our Agency</title>
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
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-gradient-to-tr from-[#0A95DC]/5 to-[#830FBC]/5 rounded-full blur-[120px] animate-[pulse_8s_infinite_alternate]" />
        <div className="absolute bottom-[30%] right-[-10%] w-[60vw] h-[60vw] bg-gradient-to-bl from-[#830FBC]/5 to-[#0A95DC]/5 rounded-full blur-[140px] animate-[pulse_10s_infinite_alternate]" />
      </div>

      <Navbar /> 
      <motion.header 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="w-full pt-40 pb-12 px-6 md:px-16 max-w-[1400px] mx-auto text-center relative z-10"
      >
        <div className="relative inline-block mb-4">
          <span className="text-xs capitalize tracking-[0.4em] text-black/40 font-black px-4 py-1.5 rounded-full border border-black/10 bg-white/50 backdrop-blur-sm">
            SERVICE DETAILS
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-wide text-[#003142] uppercase leading-[1.2] lg:leading-[1.2] max-w-5xl mx-auto mt-6">
          Website Designs That Turn Clicks into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A95DC] to-[#830FBC]">Customers.</span>
        </h1>
        <p className="text-black/50 text-xs md:text-sm tracking-widest capitalize font-bold mt-8">
          Crafting your website content with professional UX architecture
        </p>
      </motion.header> 
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[1400px] mx-auto px-5 mb-24 relative z-10"
      >
        <div className="w-full aspect-[21/9] md:h-[500px] rounded-[32px] overflow-hidden shadow-2xl bg-gray-900 relative group">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop" 
            alt="Cinematic Creative Showcase" 
            className="w-full h-full object-cover opacity-85 transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-600/10 via-transparent to-transparent pointer-events-none" />
        </div>
      </motion.div> 
      <section className="w-full max-w-[1400px] mx-auto px-5 mb-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-6 flex flex-col items-start gap-8"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-black tracking-wide text-[#003142] uppercase leading-[1.2]">
              Our Approach <br />to Branding
            </motion.h2>
            
            <div className="flex flex-col gap-6 w-full">
              {[
                { title: "Discovery & Research", desc: "Understanding your business, target audience, and direct competitors thoroughly." },
                { title: "Concept Development", desc: "Creating unique layout options, color mapping and signature architecture ideas." },
                { title: "Refinement & Testing", desc: "Perfecting layout visuals based on live prototyping tools and team alignment." },
                { title: "Final Implementation", desc: "Delivering a branded luxury asset with full style guidelines and code support." }
              ].map((item, idx) => (
                <motion.div 
                  variants={fadeInUp}
                  key={idx} 
                  className="flex items-start gap-4 border-b border-black/5 pb-4 last:border-none group/item"
                >
                  <div className="text-[#0A95DC] font-black text-sm mt-1 transition-transform group-hover/item:translate-x-1">✓</div>
                  <div>
                    <h4 className="text-lg font-black text-[#003142] capitalize tracking-wide group-hover/item:text-[#0A95DC] transition-colors duration-300">{item.title} —</h4>
                    <p className="text-black/60 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-xl bg-white group/img"
            >
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800" alt="Team Research" className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-xl bg-white sm:translate-y-12 group/img2"
            >
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800" alt="Design Sprints" className="w-full h-full object-cover transition-transform duration-700 group-hover/img2:scale-105" />
            </motion.div>
          </div>

        </div>
      </section> 
      <section className="w-full bg-[#fcfcfd]/80 backdrop-blur-md border-y border-black/5 py-24 mb-24 relative z-10">
        <div className="max-w-[1400px] mx-auto px-5">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative"
          >
            {[
              { num: "01", name: "Research And Analysis", body: "Detailed deep dive into user behavioral metrics, search targets and domain requirements." },
              { num: "02", name: "Design And Prototype", body: "Translating wireframe architectures into fluid luxury responsive components." },
              { num: "03", name: "Testing And Iteration", body: "Rigorous interface evaluation across screens for speed validation and stability." },
              { num: "04", name: "Prepare For Delivery", body: "Deploying high-performing modular build structures perfectly configured." }
            ].map((step, i) => (
              <motion.div 
                variants={fadeInUp}
                key={i} 
                className="flex flex-col items-center text-center px-4 group"
              >
                <div className="w-14 h-14 rounded-full bg-white border-2 border-[#0A95DC]/40 text-black text-base font-black flex items-center justify-center shadow-md relative overflow-hidden transition-all duration-500 group-hover:border-transparent group-hover:text-white group-hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A95DC] to-[#830FBC] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                  <span className="relative z-10">{step.num}</span>
                </div>
                <h3 className="text-lg font-black text-[#003142] capitalize tracking-wide max-w-[80%] mb-3 mt-6 transition-colors group-hover:text-[#0A95DC] duration-300">
                  {step.name}
                </h3>
                <p className="text-black/50 text-xs md:text-sm leading-relaxed max-w-[90%]">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> 
      <section className="w-full max-w-[1200px] mx-auto px-5 mb-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-[#0A95DC] font-black block mb-2">PRICING TIERS</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#003142] uppercase tracking-wide">Flexible Service Plans</h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col gap-6 w-full max-w-4xl mx-auto"
        >
          {[
            {
              tier: "UI Design",
              price: "$450",
              features: ["Creative Portfolio Layout", "Modern Concept Development", "Standard Modular Dashboard", "10 Team Management Seats", "Custom Asset Elements Layout"]
            },
            {
              tier: "Research & Development",
              price: "$890",
              features: ["Detailed Strategy Blueprint", "Custom Component Frameworks", "Full System Brand Integration", "Complete Asset Elements Layout", "24/7 Dedicated Server Support"]
            }
          ].map((plan, index) => (
            <motion.div 
              variants={fadeInUp}
              key={index} 
              className="w-full bg-white/90 backdrop-blur-md border border-black/5 hover:border-[#0A95DC]/30 rounded-[20px] p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-8 group"
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-black text-[#003142] capitalize tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0A95DC] group-hover:to-[#830FBC] transition-all duration-300">
                  {plan.tier}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 mt-2">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-sm text-black/60 font-medium group-hover:text-black transition-colors">
                      <Check className="w-4 h-4 text-[#0A95DC] flex-shrink-0" strokeWidth={3} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end justify-center min-w-[160px] pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-black/5 md:pl-8">
                <span className="text-4xl font-black text-[#003142] tracking-wide group-hover:scale-105 transition-transform duration-300">{plan.price}</span>
                <span className="text-[10px] capitalize text-black/40 font-bold tracking-widest mt-1">PER PROJECT</span>
                <button className="mt-4 px-6 py-3 rounded-full bg-[#003142] text-white hover:bg-gradient-to-r hover:from-[#0A95DC] hover:to-[#830FBC] text-xs font-black capitalize tracking-wider flex items-center gap-2 transition-all duration-500 shadow-md hover:shadow-lg hover:scale-102">
                  Select <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
    </HelmetProvider>
  );
}