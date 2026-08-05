import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './MaskedText.module.scss';

gsap.registerPlugin(ScrollTrigger);

const MaskedText = ({ text, className = "", delay = 0, duration = 1 }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(textRef.current,
        { y: '100%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: duration,
          delay: delay,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    return () => ctx.revert();
  }, [delay, duration]);

  return (
    <div className={`${styles.maskContainer} ${className}`} ref={containerRef}>
      <div className={styles.maskContent} ref={textRef}>
        {text}
      </div>
    </div>
  );
};

export default MaskedText;
