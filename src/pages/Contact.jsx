import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Building2, Server } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";  
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube, FaWhatsapp} from "react-icons/fa6";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const itcStyle = { fontFamily: '"ITCAvantGardeStd", sans-serif' };
  const navigate = useNavigate();  

  const [formState, setFormState] = useState({ 
    name: "", 
    email: "", 
    phone: "",
    businessName: "",
    services: "",
    message: "" 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("./mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") { 
        navigate("/thankyou"); 
      } else {
        setErrorMessage(result.message || "Failed to transmit message. Please try again.");
      }
    } catch (error) {
      console.error("Transmission Error:", error);
      setErrorMessage("Server communication failed. Please check your network context.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <HelmetProvider> 
    <div className="w-full bg-[#FAFBFD] flex flex-col min-h-screen select-none overflow-x-hidden relative" style={itcStyle}>
        <Helmet>
          <title>Contact Us | Let's Build Something Ingenious Together</title>
          <meta
            name="description"
            content="Get in touch with our expert team panel. Drop us a line for creative web development, high-end digital marketing, and immersive UI/UX design sprints."
          />
        </Helmet>
      <Navbar /> 
      <div className="relative w-full h-[55vh] md:h-[65vh] flex items-center justify-center bg-gray-900 overflow-hidden mt-24">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop" 
          alt="Contact Backdrop Showcase" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60" />

        <div className="relative z-10 text-center flex flex-col items-center justify-center px-6 mt-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-black uppercase text-white tracking-wide drop-shadow-md"
          >
            Connect With Us
          </motion.h1>
          <nav className="flex items-center gap-2 mt-4 text-xs md:text-sm tracking-widest uppercase font-bold text-white/80">
            <Link to="/" className="hover:text-white transition-colors duration-300">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-[#0A95DC]">Contact Us</span>
          </nav>
        </div>
      </div> 
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 md:px-16 py-24 relative z-10">
        <div className="absolute top-[10%] left-[-5%] w-[45vw] h-[45vw] bg-gradient-to-tr from-[#0A95DC]/5 to-[#830FBC]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10"> 
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 1 },
              visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
            }}
            className="lg:col-span-5 flex flex-col gap-10 text-left"
          >
            <div>
              <span className="text-xs Capitalize tracking-[0.4em] text-[#0A95DC] font-black block mb-3">GET IN TOUCH</span>
              <h2 className="text-2xl md:text-4xl font-black text-[#003142] uppercase tracking-wide">
                Let's Start a <br />New Project Together
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              {[
                { icon: <Mail className="w-5 h-5 text-black/60" />, title: "Email Inquiry", value: "marketing@beingingenious.in" },
                { icon: <Phone className="w-5 h-5 text-black/60" />, title: "Call Coordinates", value: "+91 1244917817" },
                { icon: <Phone className="w-5 h-5 text-black/60" />, title: "Call Coordinates", value: "+91 8527840856" },
                { icon: <MapPin className="w-5 h-5 text-black/60" />, title: "Office Address", value: "Office No. 815, Platinum Tower, Badshahpur Sohna Rd Hwy, Malibu Town, Sector 47, Gurugram, Haryana 122018" }
              ].map((coord, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center shadow-sm group-hover:bg-[#0A95DC]/10 transition-colors duration-300 flex-shrink-0">
                    {coord.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-black/40 font-bold tracking-wide">{coord.title}</span>
                    <span className="text-sm md:text-base font-black text-[#003142] mt-0.5">{coord.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-4 pt-4 border-t border-black/5">
              <span className="text-[10px] uppercase text-black/40 font-bold tracking-wide">Follow Our Journey</span>
              <div className="flex items-center gap-3">
                {[
                  { icon: <FaFacebookF className="w-[18px] h-[18px]" />, url: "https://www.facebook.com/beingingenious", color: "hover:bg-blue-600" },
                  { icon: <FaInstagram className="w-5 h-5" />, url: "https://www.instagram.com/beingingeniousmediapvtltd/", color: "hover:bg-pink-600" },
                  { icon: <FaLinkedinIn className="w-5 h-5" />, url: "https://www.linkedin.com/company/being-ingenious/", color: "hover:bg-blue-700" },
                  { icon: <FaYoutube  className="w-5 h-5" />, url: "https://www.youtube.com/channel/UCAAWPjqJpUsvnYRdD5CPzhw", color: "hover:bg-red-700" },
                  { icon: <FaWhatsapp  className="w-5 h-5" />, url: "https://wa.me/918527840856", color: "hover:bg-green-700" },
                  { icon: <FaXTwitter className="w-[18px] h-[18px]" />, url: "https://x.com/beingingenious_", color: "hover:bg-black" }
                ].map((social, sIdx) => (
                  <a 
                    key={sIdx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 rounded-full bg-white border border-black/5 flex items-center justify-center text-black/60 hover:text-white shadow-sm transition-all duration-300 ${social.color} hover:scale-105`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div> 
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 w-full bg-white border border-black/5 rounded-[32px] p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#0A95DC] to-[#830FBC]" />

            <form onSubmit={handleFormSubmit} className="w-full flex flex-col gap-6 text-left">
              <div>
                <span className="text-xs uppercase tracking-[0.35em] text-[#0A95DC] font-black block mb-2">APPLICATION FORM</span>
                <h2 className="text-2xl md:text-3xl font-black text-[#003142] uppercase tracking-wide">Drop Us A Line</h2>
              </div>

              {errorMessage && (
                <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-xs font-semibold">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase text-black/50 tracking-widest font-black">Your Name *</label>
                  <input 
                    required 
                    type="text" 
                    value={formState.name} 
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full px-5 py-4 rounded-xl border border-black/10 text-sm font-semibold outline-none focus:border-[#0A95DC] transition-colors bg-gray-50/30" 
                    placeholder="Your Full Name" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase text-black/50 tracking-widest font-black">Email Address *</label>
                  <input 
                    required 
                    type="email" 
                    value={formState.email} 
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full px-5 py-4 rounded-xl border border-black/10 text-sm font-semibold outline-none focus:border-[#0A95DC] transition-colors bg-gray-50/30" 
                    placeholder="email@example.com" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase text-black/50 tracking-widest font-black">Phone Number *</label>
                  <input 
                    required 
                    type="tel" 
                    value={formState.phone} 
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    className="w-full px-5 py-4 rounded-xl border border-black/10 text-sm font-semibold outline-none focus:border-[#0A95DC] transition-colors bg-gray-50/30" 
                    placeholder="+91 98765 43210" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase text-black/50 tracking-widest font-black">Business Name</label>
                  <div className="relative flex items-center">
                    <Building2 className="absolute left-4 w-4 h-4 text-black/30 pointer-events-none" />
                    <input 
                      type="text" 
                      value={formState.businessName} 
                      onChange={(e) => setFormState({...formState, businessName: e.target.value})}
                      className="w-full pl-11 pr-5 py-4 rounded-xl border border-black/10 text-sm font-semibold outline-none focus:border-[#0A95DC] transition-colors bg-gray-50/30" 
                      placeholder="Acme Corporation" 
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase text-black/50 tracking-widest font-black">Required Service *</label>
                <div className="relative flex items-center">
                  <Server className="absolute left-4 w-4 h-4 text-black/30 pointer-events-none" />
                  <select
                    required
                    value={formState.services}
                    onChange={(e) => setFormState({...formState, services: e.target.value})}
                    className="w-full pl-11 pr-5 py-4 rounded-xl border border-black/10 text-sm font-semibold outline-none focus:border-[#0A95DC] transition-colors bg-gray-50/30 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a core services</option>
                    <option value="branding">Brand Strategy & Identity</option>
                    <option value="influncer">Influencer Marketing</option>
                    <option value="web-dev">Web Design & Development</option>
                    <option value="motion">3D & Motion Visual Content</option>
                    <option value="social">Social Media Management</option>
                    <option value="marketing">Digital Marketing</option> 
                    </select>
                  <div className="absolute right-4 pointer-events-none text-black/40 text-xs">▼</div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase text-black/50 tracking-widest font-black">Your Message *</label>
                <textarea 
                  required 
                  rows={4} 
                  value={formState.message} 
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full px-5 py-4 rounded-xl border border-black/10 text-sm font-semibold outline-none focus:border-[#0A95DC] transition-colors bg-gray-50/30 resize-none" 
                  placeholder="Describe your design vision or project requirements..." 
                />
              </div>

              <div className="flex justify-end mt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-8 py-4 rounded-full bg-[#003142] hover:bg-gradient-to-r hover:from-[#0A95DC] hover:to-[#830FBC] text-white text-xs font-black uppercase tracking-wider flex items-center gap-2.5 transition-all duration-500 shadow-md hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Transmitting..." : "Send Message"} <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </main> 
      <section className="w-full max-w-[1400px] mx-auto px-5 pb-24 relative z-10">
        <div className="w-full h-[400px] rounded-[32px] overflow-hidden  border border-black/5 bg-white">
          <iframe 
            title="Google Studio Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.934980834266!2d77.0404348!3d28.421218699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23a6e10f739d%3A0xfd1e601ecaec5197!2sBEING%20INGENIOUS%20MEDIA%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1780719914228!5m2!1sen!2sin" 
            className="w-full h-full border-0"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <Footer />
    </div>
    </HelmetProvider>
  );
}