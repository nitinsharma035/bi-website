import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

const Footer = () => { 
  const itcStyle = { 
    fontFamily: '"ITCAvantGardeStd", sans-serif',
    fontWeight: '400' 
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white pt-20 pb-8 px-6 md:px-12" style={itcStyle}>
      <div className="max-w-7xl mx-auto"> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"> 
          <div className="space-y-8">
            <div className="space-y-6">
              <img 
                src="image/webp/logo.webp" 
                alt="Being Ingenious" 
                className="h-14 w-auto"
              />
              <p className="text-[13px] leading-relaxed max-w-xs  text-white tracking-wide">
                The word digital is constantly changing the way people think. with continuous advancements in digital technologies and media, it is far more important to think big about anything and everything you choose.
              </p>
            </div> 
            <div className="flex items-center gap-4">
              <div className="bg-white/5 p-2 rounded-lg border border-white/10">
                <img src="image/webp/google.webp" alt="Google Ads" className="h-30 opacity-100" />
              </div>
              <div className="bg-white/5 p-2 rounded-lg border border-white/10">
                <img src="image/webp/meta.webp" alt="Meta Ads" className="h-30 opacity-100" />
              </div>
            </div>
          </div> 
          <div>
            <h4 className="text-xl font-bold mb-8 uppercase tracking-wide">Company</h4>
            <ul className="space-y-4 text-[14px] text-white uppercase tracking-wider">
              <li><Link to="/about" className="hover:text-[#0A95DC] transition-all">About</Link></li>
              <li><Link to="/services" className="hover:text-[#0A95DC] transition-all">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#0A95DC] transition-all">Portfolio</Link></li>
              <li><Link to="/career" className="hover:text-[#0A95DC] transition-all">Career</Link></li>
              <li><Link to="/contact" className="hover:text-[#0A95DC] transition-all">Contact</Link></li>
            </ul>
          </div> 
          <div>
            <h4 className="text-xl font-bold mb-8 uppercase tracking-wide">Our Services</h4>
            <ul className="space-y-4 text-[14px] text-white uppercase tracking-wider">
              <li><Link to="/services/brand-strategy" className="hover:text-[#0A95DC] transition-all">Branding & Strategy</Link></li>
              <li><Link to="/services/social-media-marketing" className="hover:text-[#0A95DC] transition-all">Social Media Marketing</Link></li>
              <li><Link to="/services/performance-marketing" className="hover:text-[#0A95DC] transition-all">Performance Marketing</Link></li>
              <li><Link to="/services/website-technology" className="hover:text-[#0A95DC] transition-all">Website & Technology</Link></li>
              <li><Link to="/services/public-relations-media" className="hover:text-[#0A95DC] transition-all">Public Relations & Media</Link></li>
            </ul>
          </div> 
          <div className="space-y-6">
            <h4 className="text-xl font-bold mb-8 uppercase tracking-wide">Reach Us</h4>
            <div className="space-y-5 text-[13px] text-white uppercase tracking-wider">
              <div className="flex items-start gap-3">
                <Icons.MapPin size={18} className="text-[#0A95DC] shrink-0" />
                <span className="leading-relaxed">office no. 815, platinum tower, badshahpur sohna rd, malibu town, sector 47, gurugram, haryana 122018</span>
              </div>
              <div className="flex items-center gap-3">
                <Icons.Phone size={16} className="text-[#0A95DC] shrink-0" />
                <a href="tel:+911244917817" className="hover:text-[#0A95DC] transition-all">+91 1244917817</a>
              </div>
              <div className="flex items-center gap-3">
                <Icons.Phone size={16} className="text-[#0A95DC] shrink-0" />
                <a href="tel:+918527840856" className="hover:text-[#0A95DC] transition-all">+91 8527840856</a>
              </div>
              <div className="flex items-center gap-3">
                <Icons.Mail size={16} className="text-[#0A95DC] shrink-0" />
                <a href="mailto:marketing@beingingenious.in" className="hover:text-[#0A95DC] transition-all">marketing@beingingenious.in</a>
              </div>
            </div>
          </div>
        </div> 
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[11px] text-white uppercase tracking-wider order-2 md:order-1">
            copyright @ {currentYear} beingingenious, all right reserved
          </p> 
          <div className="flex items-center gap-6 order-1 md:order-2 tracking-wider">
            {Icons.Instagram && <a href="#" className="text-white hover:opacity-100 hover:text-[#0A95DC] transition-all"><Icons.Instagram size={20} /></a>}
            {Icons.Facebook && <a href="#" className="text-white opacity-50 hover:opacity-100 hover:text-[#0A95DC] transition-all"><Icons.Facebook size={20} /></a>}
            {Icons.Linkedin && <a href="#" className="text-white opacity-50 hover:opacity-100 hover:text-[#0A95DC] transition-all"><Icons.Linkedin size={20} /></a>}
            {Icons.Youtube && <a href="#" className="text-white opacity-50 hover:opacity-100 hover:text-[#0A95DC] transition-all"><Icons.Youtube size={20} /></a>}
            {Icons.Twitter && <a href="#" className="text-white opacity-50 hover:opacity-100 hover:text-[#0A95DC] transition-all"><Icons.Twitter size={20} /></a>}
          </div>

          <div className="flex items-center gap-6 text-[11px] text-white uppercase order-3 tracking-wider">
            <Link to="/terms-conditions" className="hover:text-white transition-all">terms & conditions</Link>
            <Link to="/privacy-policy" className="hover:text-white transition-all">privacy policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;