import { useState, useEffect } from "react";
import Component1512WLight from "./imports/1512WLight";
import { LogotypeShort, HeaderMenu } from "./imports/Header";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 945);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Logo with blend mode */}
      <div 
        className="fixed top-[36px] left-[36px] z-50"
        style={{ mixBlendMode: scrolled ? 'difference' : 'normal' }}
      >
        <LogotypeShort />
      </div>
      
      {/* Menu without blend mode */}
      <div className="fixed top-[36px] right-[36px] z-50">
        <HeaderMenu />
      </div>
      
      <Component1512WLight />
    </div>
  );
}
