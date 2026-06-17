import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from '../components/Navbar'; 
import Carousel from '../components/Carousel';
import LogoSlider from '../components/LogoSlider';  
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';
import Footer from '../components/Footer'; 
import WorkProcess from '../components/WorkProcess'; 
import HeroAnimate from '../components/HeroAnimate'; 

const Home = () => (
  <HelmetProvider>
    <> 
      <Helmet>
        <title>Being Inginious Media Pvt. Ltd. | Premium Digital Engineering & Design Agency</title>
        <meta 
          name="description" 
          content="Welcome to Being Inginious Media Pvt. Ltd. We build production-grade websites, high-end digital marketing strategies, and immersive UI/UX experiences that drive exponential business growth." 
        />
        <meta property="og:title" content="Being Inginious Media Pvt. Ltd. | Premium Digital Engineering & Design Agency" />
        <meta 
          property="og:description" 
          content="Welcome to Being Inginious Media Pvt. Ltd. We build production-grade websites, high-end digital marketing strategies, and immersive UI/UX experiences that drive exponential business growth." 
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />  
      <HeroAnimate /> 
      <Carousel /> 
      <LogoSlider />
      <WorkProcess />
      <Services />
      <Testimonials />
      <Faq />
      <Footer /> 
    </>
  </HelmetProvider>
);

export default Home;