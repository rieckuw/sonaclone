
import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => {
    // Only check window.innerWidth on client-side
    if (typeof window !== 'undefined') {
      return window.innerWidth < MOBILE_BREAKPOINT;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    const handleResize = () => {
      setIsMobile(mql.matches);
    };
    
    // Use event listener for better performance
    mql.addEventListener("change", handleResize);
    
    return () => {
      mql.removeEventListener("change", handleResize);
    };
  }, []);

  return isMobile;
}
