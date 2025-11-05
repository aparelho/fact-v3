import { useState, useEffect, Suspense, lazy } from "react";
import { LogotypeShort, HeaderMenu } from "./imports/Header";

const Component1512WLight = lazy(() => import("./imports/1512WLight"));

function PageLoadingFallback() {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className="text-white text-lg">Loading...</div>
    </div>
  );
}

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

      <Suspense fallback={<PageLoadingFallback />}>
        <Component1512WLight />
      </Suspense>
    </div>
  );
}
