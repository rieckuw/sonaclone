
import { useState, useEffect, RefObject } from 'react';

interface UseInViewOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

export function useInView(options: UseInViewOptions = {}) {
  const [ref, setRef] = useState<Element | null>(null);
  const [inView, setInView] = useState(false);
  
  const { root = null, rootMargin = '0px', threshold = 0, triggerOnce = false } = options;

  useEffect(() => {
    if (!ref) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setInView(isIntersecting);
        
        if (isIntersecting && triggerOnce) {
          observer.unobserve(ref);
        }
      },
      { root, rootMargin, threshold }
    );
    
    observer.observe(ref);
    
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, root, rootMargin, threshold, triggerOnce]);
  
  return [setRef, inView] as [(node: Element | null) => void, boolean];
}
