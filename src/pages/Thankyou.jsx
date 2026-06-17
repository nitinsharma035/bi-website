import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { CheckCircle, ArrowLeft, Sparkles } from "lucide-react";
 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ThankYou = () => {
  const itcStyle = { fontFamily: '"ITCAvantGardeStd", sans-serif' };

  return (
    <HelmetProvider>
      <div className="w-full min-h-screen bg-[#FAFBFD] text-black overflow-x-hidden flex flex-col justify-between" style={itcStyle}>
         
        <Helmet>
          <title>Thank You | Message Received Successfully </title>
          <meta 
            name="description" 
            content="Thank you for reaching out to Being Inginiouse. Our expert engineering team has received your message and will connect with you within 24 hours." 
          />
          <meta property="og:title" content="Thank You | Message Received Successfully Being Inginiouse" />
          <meta 
            property="og:description" 
            content="Thank you for reaching out to Being Inginiouse. Our expert engineering team has received your message and will connect with you within 24 hours." 
          />
          <meta property="og:type" content="website" />
          <meta name="robots" content="noindex, follow" />
        </Helmet>

        <Navbar /> 
        <div className="w-full flex-1 flex items-center justify-center px-6 pt-40 pb-20 relative z-10">
           
          <div className="absolute top-[30%] left-[20%] -translate-x-1/2 w-[400px] h-[400px] bg-[#0A95DC]/10 rounded-full blur-[120px] pointer-events-none z-0" />
          <div className="absolute bottom-[30%] right-[20%] translate-x-1/2 w-[400px] h-[400px] bg-[#830FBC]/10 rounded-full blur-[120px] pointer-events-none z-0" />

          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            className="w-full max-w-2xl bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.02)] text-center relative z-10 overflow-hidden"
          > 
            <div className="relative flex justify-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                className="w-24 h-24 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-green-500 shadow-inner"
              >
                <CheckCircle size={48} strokeWidth={1.5} />
              </motion.div>
              
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 text-amber-400 opacity-70 pointer-events-none"
              >
                <Sparkles size={24} className="translate-x-12 -translate-y-2" />
              </motion.div>
            </div> 
            <div className="space-y-4 mb-10">
              <h1 className="text-4xl md:text-5xl font-black text-[#003142] tracking-wide capitalize">
                Thank You!
              </h1>
              <p className="text-[#830FBC] text-sm font-mono font-bold uppercase tracking-widest">
                Submission Received Successfully
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium max-w-md mx-auto pt-2">
                We appreciate you reaching out to us. Our digital engineering team is already reviewing your details and will get back to you within 24 hours.
              </p>
            </div> 
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0A95DC] to-[#830FBC] text-white px-8 py-4 rounded-full text-xs font-black capitalize tracking-[0.15em] shadow-lg shadow-[#0A95DC]/10 hover:scale-[1.03] active:scale-95 transition-all duration-300 border border-white/10"
              >
                <ArrowLeft size={14} strokeWidth={2.5} />
                Back To Home
              </Link>
              <Link
                to="/portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full text-xs font-black capitalize tracking-[0.15em] hover:scale-[1.03] active:scale-95 transition-all duration-300"
              >
                Explore Case Studies
              </Link>
            </div>

          </motion.div>
        </div>

        <Footer />
      </div>
    </HelmetProvider>
  );
};
 

export default ThankYou;