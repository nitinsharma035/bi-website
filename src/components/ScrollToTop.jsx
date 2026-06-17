import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Har baar jab URL/pathname change hoga, ye window ko top par scroll kar dega
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Yeh component UI me kuch render nahi karega, sirf logic chalayega
};

export default ScrollToTop;