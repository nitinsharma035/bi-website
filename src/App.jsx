import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio'; 
import Realestate from './pages/Realestate';
import Realestatecreative from './pages/Realestatecreative'
import Realestateshortvideo from './pages/Realestateshortvideo'
import Realestatelongvideo from './pages/Realestatelongvideo'
import Services from './pages/Services';
import Servicesdetail from './pages/Servicesdetail';
import Career from './pages/Career';
import Careerdetail from './pages/Careerdetail';
import Contact from './pages/Contact';
import ScrollToTop from "./components/ScrollToTop";
import Thankyou from './pages/Thankyou';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Casestudy from './pages/Casestudy';
import Casestudydetail from './pages/Casestudydetail';
function App() {
  return ( 
    <main className="bg-white">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/realestate" element={<Realestate />} />
         <Route path="/realestatecreative" element={<Realestatecreative />} />
         <Route path="/realestateshortvideo" element={<Realestateshortvideo/>} />
         <Route path="/realestatelongvideo" element={<Realestatelongvideo/>} />
          <Route path="/servicesdetail" element={<Servicesdetail />} />
        <Route path="/career" element={<Career />} />
        <Route path="/careerdetail" element={<Careerdetail />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/casestudy" element={<Casestudy />} />
        <Route path="/casestudydetail" element={<Casestudydetail />} />
      </Routes>
    </main> 
  );
}

export default App;