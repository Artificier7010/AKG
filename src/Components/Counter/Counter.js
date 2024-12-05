import React, { useEffect, useRef, useState } from 'react';
import './counter.scss';

const Counter = ({ targetNumber, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCount(0); // Reset the count
            startAnimation(); // Trigger the animation
          }
        },
        { threshold: 0.5 } // Trigger when 50% of the element is visible
      );
  
      if (counterRef.current) {
        observer.observe(counterRef.current);
      }
  
      return () => {
        if (counterRef.current) {
          observer.unobserve(counterRef.current);
        }
      };
    }, []);
  
    const startAnimation = () => {
      let start = 0;
      const increment = targetNumber / (duration / 16); // Approx. 16ms per frame
  
      const animate = () => {
        start += increment;
        if (start >= targetNumber) {
          setCount(targetNumber);
          return;
        }
        setCount(Math.ceil(start));
        requestAnimationFrame(animate);
      };
  
      animate();
    };
  
    return (
      <div ref={counterRef} className="counter">
        {count}
      </div>
    );
  };
  
  export default Counter;