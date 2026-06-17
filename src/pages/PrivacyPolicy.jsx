import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
    const itcStyle = { fontFamily: '"ITCAvantGardeStd", sans-serif' };

    const legalContent = [
        {
            num: "01",
            title: "Information Collection",
            content: "We may collect and process the following categories of data:" +
                "\n\n Personal information: identifiable data including, but not limited to, name, email address, telephone number, company affiliation, and other contact details voluntarily submitted via our communication forms." +
                "\n Business information: professional details concerning your organizational structure, specific marketing objectives, and project-related data points." +
                "\n Technical information: analytical data such as internet protocol (ip) addresses, browser specifications, operating system details, referring urls, and comprehensive website engagement metrics."
        },
        {
            num: "02",
            title: "Utilization of Information",
            content: "The data collected by being ingenious media private limited is utilized for the following purposes:" +
                "\n\n Facilitating and managing the delivery of our digital marketing services." +
                "\n Addressing inquiries and providing comprehensive customer support." +
                "\n Optimizing website performance, service offerings, and the overall user experience." +
                "\n Disseminating promotional communications, industry newsletters, or pertinent service updates." +
                "\n Ensuring strict adherence to applicable legal and regulatory obligations."
        },
        {
            num: "03",
            title: "Cookies and Tracking Technologies",
            content: "Our digital platforms may employ cookies and analogous tracking technologies to enhance user interface functionality, analyze traffic patterns, and refine our marketing strategies. Users maintain the prerogative to disable cookies through their individual browser configurations; however, this may affect certain website functionalities."
        },
        {
            num: "04",
            title: "Disclosure of Information",
            content: "Being ingenious media private limited does not sell, trade, or rent personal information to third parties. Disclosure of information is limited to the following circumstances:" +
                "\n\n Service providers: sharing with vetted third-party partners who assist in our." +
                "\n Legal mandates: disclosure to legal authorities when required by law or when necessary to protect the rights, property, and safety of the firm."
        },
        {
            num: "05",
            title: "Data Security",
            content: "We employ rigorous technical and organizational security measures designed to protect personal data against unauthorized access, alteration, disclosure, or destruction. While we strive to use commercially acceptable means to protect your information, it should be noted that no method of electronic transmission or storage is 100% secure."
        },
        {
            num: "06",
            title: "Third-Party Links",
            content: "Our website may feature links to external, third-party websites. Being ingenious media private limited does not assume responsibility for the privacy practices or the content of such external entities. We advise users to review the privacy protocols of any third-party site they visit."
        },
        {
            num: "07",
            title: "Individual Privacy Rights",
            content: "You reserve the right to access, rectify, or request the erasure of your personal information held by us. To exercise these rights, please submit a formal request via the contact information provided below."
        },
        {
            num: "08",
            title: "Amendments to This Policy",
            content: "Being ingenious media private limited reserves the right to modify or update this privacy policy at its discretion. Any such amendments shall become effective immediately upon their publication on this page."
        },
        {
            num: "09",
            title: "Contact Information",
            content: "For inquiries or concerns regarding this privacy policy or our data handling practices, please contact us at:" +
                "\n\n Entity: [Being Ingenious Media Private Limited]" +
                "\n Address: [ Office No. 815, Platinum Tower, Badshahpur Sohna Rd, Malibu Town, Sector 47, Gurugram, Haryana 122018]" +
                "\n Email: [marketing@beingingenious.in]" +
                "\n Telephone: [+91 8527840856]"
        }
    ];

    return (
        <HelmetProvider>
            <div className="w-full min-h-screen bg-white text-black select-none flex flex-col justify-between" style={itcStyle}>

                <Helmet>
                    <title>Privacy Policy | Data Protection & User Rights</title>
                    <meta
                        name="description"
                        content="Understand how we collect, use, and protect your personal information in accordance with our privacy policy."
                    />
                </Helmet>

                <Navbar />
                <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24 pt-48 pb-20 grid grid-cols-1 lg:grid-cols-12 items-stretch gap-16 lg:gap-24 flex-1 relative">
                    <div className="w-full lg:col-span-4 lg:sticky lg:top-36 h-fit flex flex-col text-left gap-6 z-10 mb-10 lg:mb-0">
                        <div className="absolute -top-12 -left-20 w-[250px] h-[250px] bg-gradient-to-tr from-[#0A95DC]/10 to-[#830FBC]/5 rounded-full blur-[80px] pointer-events-none -z-10" />

                        <div className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.4em] text-transparent bg-clip-text bg-gradient-to-r from-[#0A95DC] to-[#830FBC] uppercase">
                            // Legal Architecture Statement
                        </div>

                        <h1 className="text-3xl sm:text-5xl font-black text-black uppercase tracking-wide leading-[0.9]">
                            Privacy <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-black/70 to-black/30">Policy</span>
                        </h1>

                        <p className="text-gray-500 text-sm md:text-base leading-relaxed pt-2 font-medium">
                            At Being Ingenious Media Private Limited, a digital marketing agency headquartered in gurgaon, haryana, india, we are committed to maintaining the highest standards of privacy and data protection. This privacy policy outlines our practices regarding the collection, utilization, disclosure, and safeguarding of your information when you interact with our website or engage our professional services.
                        </p>

                        <div className="pt-4 font-mono text-[10px] font-bold text-black/40 tracking-wide uppercase">
                            Last Updated Context // June 2026
                        </div>
                    </div>
                    <div className="w-full lg:col-span-8 flex flex-col gap-16 text-left relative z-20">
                        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-black/5 hidden lg:block -translate-x-12" />

                        {legalContent.map((section, idx) => (
                            <motion.article
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.6, delay: idx * 0.05 }}
                                className="flex flex-col gap-4 group border-b border-black/5 pb-10 last:border-none last:pb-0"
                            >
                                <div className="flex items-baseline gap-4">
                                    <span className="text-xs font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0A95DC] to-[#830FBC]">
                                        {section.num} //
                                    </span>
                                    <h2 className="text-lg md:text-xl font-black text-black capitalize tracking-wide group-hover:text-[#0A95DC] transition-colors duration-300">
                                        {section.title}
                                    </h2>
                                </div>

                                <p className="whitespace-pre-line text-gray-500 text-sm md:text-base leading-relaxed font-medium transition-colors duration-300 group-hover:text-black/80 pl-0 md:pl-10">
                                    {section.content}
                                </p>
                            </motion.article>
                        ))}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pl-0 md:pl-10"
                        >
                            <p className="text-gray-400 text-xs font-medium max-w-xs leading-relaxed">
                                Have complex inquiries or corporate compliance clauses to integrate? Connect with our desk.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-black hover:text-[#0A95DC] transition-colors duration-300 border-b-2 border-black hover:border-[#0A95DC] pb-1"
                            >
                                Return To Contact <ArrowUpRight size={14} strokeWidth={2.5} />
                            </Link>
                        </motion.div>
                    </div>

                </div>
                <div className="relative w-full bg-white z-30">
                    <Footer />
                </div>
            </div>
        </HelmetProvider>
    );
}