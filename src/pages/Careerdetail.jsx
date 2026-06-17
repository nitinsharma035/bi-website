import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Briefcase, ClipboardClock, Clock, Calendar, ShieldCheck, ArrowRight, Upload } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CareerDetailsPage() {
  const itcStyle = { fontFamily: '"ITCAvantGardeStd", sans-serif' };
  const formRef = useRef(null);
  const navigate = useNavigate();  
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", portfolio: "", message: "" });
  const [selectedFile, setSelectedFile] = useState(null); 
  const [fileName, setFileName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const scrollToForm = (e) => {
    e.preventDefault();
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage("File size exceeds 5MB limit structure.");
        return;
      }
      setSelectedFile(file);
      setFileName(file.name);
      setErrorMessage("");
    }
  }; 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    if (!selectedFile) {
      setErrorMessage("Please upload your Resume (PDF) to proceed.");
      setIsSubmitting(false);
      return;
    } 
    const submissionPayload = new FormData();
    submissionPayload.append("name", formData.name);
    submissionPayload.append("email", formData.email);
    submissionPayload.append("phone", formData.phone);
    submissionPayload.append("portfolio", formData.portfolio);
    submissionPayload.append("message", formData.message);
    submissionPayload.append("resume", selectedFile);

    try {
      const response = await fetch("./career_mail.php", {
        method: "POST",
        body: submissionPayload,  
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        navigate("/thankyou");
      } else {
        setErrorMessage(result.message || "Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error("Application Engine Error:", error);
      setErrorMessage("Server communication failed. Please check your network context.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <HelmetProvider> 
    <div className="w-full bg-[#fff] flex flex-col min-h-screen select-none overflow-x-hidden relative" style={itcStyle}>
        <Helmet>
          <title>Product Designer Job Opening | Apply Now</title>
          <meta
            name="description"
            content="Join our design experience framework panel as a full-time product designer. Submit your portfolio and resume application tracking directly today."
          />
        </Helmet> 
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-gradient-to-tr from-[#0A95DC]/5 to-[#830FBC]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[40vw] h-[40vw] bg-gradient-to-bl from-[#830FBC]/5 to-[#0A95DC]/5 rounded-full blur-[120px]" />
      </div>

      <Navbar />  
      <main className="w-full max-w-[1400px] mx-auto px-6 md:px-16 pt-44 pb-16 relative z-10 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch"> 
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 1 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="lg:col-span-8 flex flex-col gap-10 text-left h-full"
          > 
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs font-black tracking-[0.3em] text-[#0A95DC] capitalize">
                <span className="w-2 h-2 rounded-full bg-purple-500 inline-block animate-pulse" />
                Design
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-[#003142] uppercase tracking-wide leading-none">
                Product Designer
              </h1>
              
              <div className="flex flex-wrap gap-x-10 gap-y-3 text-xs md:text-sm font-semibold text-black/50 mt-4 border-b border-black/5 pb-6">
                <div><span className="block text-[10px] capitalize text-black tracking-wide font-bold mb-1">Location:</span> Gurugram, Haryana (On-site/Hybrid)</div> 
                <div><span className="block text-[10px] capitalize text-black tracking-wide font-bold mb-1">Job Type:</span> Full time</div>
              </div>
            </motion.div> 
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-black text-[#003142] capitalize tracking-wide">
                Job Summary
              </h2>
              <p className="text-black/60 text-sm md:text-base leading-relaxed font-medium max-w-3xl">
                We are seeking a Product Designer to join our team. In this role, you will help craft the visual and interactive elements of our software products, ensuring a seamless and intuitive user experience. You will collaborate with our product and development teams to create innovative, user-centered designs.
              </p>
            </motion.div> 
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-black text-[#003142] capitalize tracking-wide">
                Key Responsibilities
              </h2>
              <ul className="flex flex-col gap-3.5 pl-1 text-sm md:text-base text-black/70 font-medium">
                {[
                  "Design intuitive and user-friendly interfaces for our digital products.",
                  "Develop wireframes, storyboards, and user flows to communicate design ideas.",
                  "Conduct user research and evaluate feedback to refine UI/UX design.",
                  "Apply and maintain design guidelines and standards across all products.",
                  "Stay updated on the latest UI/UX design trends and technologies."
                ].map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#0A95DC] mt-1 font-black text-sm">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div> 
          <div className="lg:col-span-4 w-full relative">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full bg-white border border-black/5 rounded-[24px] p-8 shadow-xl flex flex-col gap-8 sticky top-32 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#0A95DC] to-[#830FBC]" />

              <div className="flex flex-col text-left border-b border-black/5 pb-4">
                <span className="text-[10px] capitalize text-black/40 font-bold tracking-wide">Avg. Salary</span>
                <span className="text-2xl md:text-3xl uppercase font-black text-[#003142] tracking-wide mt-1">
                  Best in Industry
                </span>
              </div>

              <div className="flex flex-col gap-5 text-left">
                {[
                  { icon: <Briefcase className="w-5 h-5 text-black/50" />, title: "Experience", value: "2+ Years Experience" },
                  { icon: <Clock className="w-5 h-5 text-black/50" />, title: "Working Hours", value: "09:30 AM to 06:30 PM" },
                  { icon: <ShieldCheck className="w-5 h-5 text-black/50" />, title: "Job Category", value: "Product Designer" },
                  { icon: <Calendar className="w-5 h-5 text-black/50" />, title: "Working Days", value: "Weekly 5 days (Mon. to Fri.)" },
                  { icon: <ClipboardClock className="w-5 h-5 text-black/50" />, title: "Deadline", value: "Open Framework" }
                ].map((spec, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-black/5 flex-shrink-0 group-hover:bg-[#0A95DC]/10 transition-colors duration-300">
                      {spec.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] capitalize text-black/40 font-bold tracking-wide">{spec.title}</span>
                      <span className="text-sm font-black text-[#003142] mt-0.5">{spec.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <a href="#apply-form" onClick={scrollToForm} className="w-full block">
                <button className="w-full py-4 rounded-full bg-[#003142] hover:bg-gradient-to-r hover:from-[#0A95DC] hover:to-[#830FBC] text-white text-xs font-black capitalize tracking-wider flex items-center justify-center gap-2 transition-all duration-500 shadow-lg shadow-gray-200 hover:shadow-xl hover:scale-[1.02]">
                  Apply for the Job <ArrowRight className="w-4 h-4" />
                </button>
              </a>
            </motion.div>
          </div>

        </div>
      </main> 
      <section ref={formRef} id="apply-form" className="w-full max-w-[1400px] mx-auto px-6 md:px-16 pb-32 pt-16 relative z-10 scroll-mt-24">
        <div className="w-full max-w-4xl bg-white border border-black/5 rounded-[32px] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#0A95DC] to-[#830FBC]" />
          
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8 text-left">
            <div>
              <span className="text-xs capitalize tracking-[0.35em] text-[#0A95DC] font-black block mb-2">APPLICATION FORM</span>
              <h2 className="text-2xl md:text-4xl font-black text-[#003142] uppercase tracking-wide">Submit Your Application</h2>
            </div>

            {errorMessage && (
              <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-xs font-semibold">
                {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] capitalize text-black/50 tracking-wide font-black">Full Name *</label>
                <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-5 py-4 rounded-xl border border-black/10 text-sm font-semibold outline-none focus:border-[#0A95DC] transition-colors bg-gray-50/20" placeholder="John Doe" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] capitalize text-black/50 tracking-wide font-black">Email Address *</label>
                <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-5 py-4 rounded-xl border border-black/10 text-sm font-semibold outline-none focus:border-[#0A95DC] transition-colors bg-gray-50/20" placeholder="johndoe@example.com" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] capitalize text-black/50 tracking-wide font-black">Phone Number *</label>
                <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-5 py-4 rounded-xl border border-black/10 text-sm font-semibold outline-none focus:border-[#0A95DC] transition-colors bg-gray-50/20" placeholder="+91 98765 43210" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] capitalize text-black/50 tracking-wide font-black">Portfolio Link</label>
                <input type="url" value={formData.portfolio} onChange={(e) => setFormData({...formData, portfolio: e.target.value})} className="w-full px-5 py-4 rounded-xl border border-black/10 text-sm font-semibold outline-none focus:border-[#0A95DC] transition-colors bg-gray-50/20" placeholder="https://behance.net/yourprofile" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] capitalize text-black/50 tracking-wide font-black">Upload Resume (PDF) *</label>
              <div className="w-full relative border-2 border-dashed border-black/10 hover:border-[#0A95DC]/40 rounded-xl p-8 flex flex-col items-center justify-center text-center group transition-colors bg-gray-50/50 cursor-pointer">
                <input type="file" accept=".pdf" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                <Upload className="w-8 h-8 text-black/30 group-hover:text-[#0A95DC] transition-colors mb-2" />
                <span className="text-sm font-black text-[#003142] capitalize tracking-wide">
                  {fileName ? fileName : "Choose Document or Drag Here"}
                </span>
                <span className="text-xs text-black/40 font-semibold mt-1">Limit 5MB • PDF Format Only</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] capitalize text-black/50 tracking-wide font-black">Message / Cover Letter</label>
              <textarea rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-5 py-4 rounded-xl border border-black/10 text-sm font-semibold outline-none focus:border-[#0A95DC] transition-colors bg-gray-50/20 resize-none" placeholder="Tell us about yourself..." />
            </div>

            <div className="flex justify-end">
              <button type="submit" disabled={isSubmitting} className="px-8 py-4 rounded-full bg-[#003142] hover:bg-gradient-to-r hover:from-[#0A95DC] hover:to-[#830FBC] text-white text-xs font-black capitalize tracking-wider flex items-center gap-2 transition-all duration-500 shadow-md disabled:opacity-50">
                {isSubmitting ? "Processing..." : "Send Application"} <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
    </HelmetProvider> 
  );
}