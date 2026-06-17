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
            title: "Scope of Services",
            content: "Being ingenious media private limited offers a comprehensive suite of digital marketing services, including but not limited to search engine optimization (seo), social media marketing, paid advertising, content marketing, website development, branding, and online reputation management. The specific scope of work for any engagement shall be defined and governed by a formal written proposal, service agreement, or electronic confirmation."
        },
        {
            num: "02",
            title: "Client Obligations",
            content: "The client assumes responsibility for providing accurate data, timely approvals, necessary account access, and all essential materials required for the successful execution of services. Being ingenious media private limited shall not be held liable for any deviations from projected timelines or performance outcomes resulting from client-side delays or insufficient information."
        },
        {
            num: "03",
            title: "Payment Terms and Fees",
            content: "All service fees are payable in accordance with the schedule stipulated in the relevant proposal or invoice. Unless explicitly stated otherwise in writing, all payments are non-refundable. The company reserves the right to suspend or terminate services in the event of overdue or delinquent payments."
        },
        {
            num: "04",
            title: "Intellectual Property Rights",
            content: "All content, designs, strategic frameworks, creatives, and collateral developed by being ingenious media private limited remain the exclusive intellectual property of the firm until receipt of full and final payment. Upon the successful clearance of all outstanding dues, ownership rights shall be transferred to the client, unless an alternative arrangement has been established in writing."
        },
        {
            num: "05",
            title: "Confidentiality",
            content: "Both parties commit to maintaining the strict confidentiality of all proprietary or sensitive information disclosed during the term of the project. Neither party shall disclose such confidential information to any third party without obtaining prior written consent from the disclosing party."
        },
        {
            num: "06",
            title: "Performance Disclaimer",
            content: "While being ingenious media private limited is dedicated to delivering high-caliber results, we do not guarantee specific search engine rankings, lead generation volumes, sales figures, or revenue outcomes. Digital marketing performance is subject to various external variables and algorithmic changes that remain beyond our direct control."
        },
        {
            num: "07",
            title: "Third-Party Platforms",
            content: "The firm shall not be held responsible for policy amendments, account suspensions, or punitive actions taken by third-party platforms, including but not limited to google, meta, instagram, or other advertising and social media networks."
        },
        {
            num: "08",
            title: "Limitation of Liability",
            content: "To the maximum extent permitted by law, being ingenious media private limited shall not be liable for any indirect, incidental, or consequential damages arising from the utilization of our services. Our aggregate liability for any claim shall not exceed the total amount paid by the client for the specific services in question."
        },
        {
            num: "09",
            title: "Termination of Service",
            content: "Either party may terminate the service agreement by providing written notice in accordance with the agreed-upon notice period. Upon termination, all outstanding financial obligations must be settled immediately."
        },
        {
            num: "10",
            title: "Governing Law and Jurisdiction",
            content: "These terms & conditions shall be governed by and construed in accordance with the laws of india. Any legal disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts located in gurgaon, haryana."
        },
        {
            num: "11",
            title: "Amendments to Terms",
            content: "Being ingenious media private limited reserves the right to modify these terms & conditions at its sole discretion. Any updates shall be deemed effective immediately upon their publication on our official website."
        },
        {
            num: "12",
            title: "Contact Information",
            content: "For inquiries regarding these terms & conditions, please direct your correspondence to:" +
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
                    <title>Terms and Conditions | Legal Agreement</title>
                    <meta
                        name="description"
                        content="Review the terms and conditions governing the use of our digital marketing services."
                    />
                </Helmet>

                <Navbar />
                <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24 pt-48 pb-20 grid grid-cols-1 lg:grid-cols-12 items-stretch gap-16 lg:gap-24 flex-1 relative">
                    <div className="w-full lg:col-span-4 lg:sticky lg:top-36 h-fit flex flex-col text-left gap-6 z-10 mb-10 lg:mb-0">
                        <div className="absolute -top-12 -left-20 w-[250px] h-[250px] bg-gradient-to-tr from-[#0A95DC]/10 to-[#830FBC]/5 rounded-full blur-[80px] pointer-events-none -z-10" />

                        <div className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.4em] text-transparent bg-clip-text bg-gradient-to-r from-[#0A95DC] to-[#830FBC] uppercase">
                            // Legal Architecture Statement
                        </div>

                        <h1 className="text-3xl sm:text-5xl font-black text-black uppercase leading-[1.2]">
                            Terms <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-black/70 to-black/30">Conditions</span>
                        </h1>

                        <p className="text-gray-500 text-sm md:text-base leading-relaxed pt-2 font-medium">
                            Welcome to Being Ingenious Media Private Limited. By accessing our website or engaging our digital marketing services, you hereby agree to comply with and be bound by the following terms & conditions. We advise that you review these terms thoroughly before proceeding.
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