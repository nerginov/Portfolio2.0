import { useState, useEffect, useRef } from "react";

const useIntersectionObserver = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isIntersectedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!isIntersectedRef.current && entry.isIntersecting) {
          setIsVisible(true);
          isIntersectedRef.current = true;
          observer.unobserve(ref.current);
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

export default useIntersectionObserver;
