import { useRef, useEffect } from 'react';

const Smooth = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.transition = 'opacity 0.5s ease-out, transform 1s ease-out';
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    const element = ref.current;

    if (element) {
      element.style.opacity = 0;
      element.style.transform = 'translateY(20px)';
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [ref]);

  return {
    ref
  };
};

export default  Smooth;
