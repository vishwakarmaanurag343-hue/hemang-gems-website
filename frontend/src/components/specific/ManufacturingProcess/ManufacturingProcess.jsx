import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ManufacturingProcess.module.scss';
import ScrambleText from '../../common/ScrambleText/ScrambleText';

gsap.registerPlugin(ScrollTrigger);

const ManufacturingProcess = () => {
  const sectionRef = useRef(null);
  const imagesRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const el = sectionRef.current;
      
      // Animate overlapping images
      gsap.fromTo(imagesRef.current.children,
        { opacity: 0, x: -50, scale: 0.9 },
        {
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
          },
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out'
        }
      );

      // Animate text content
      gsap.fromTo(contentRef.current,
        { opacity: 0, x: 50 },
        {
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
          },
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out'
        }
      );
    });
    
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.worldOfCustomMade} ref={sectionRef}>
      <div className={styles.bgOverlay}></div>
      <div className={styles.container}>
        
        {/* Left Side: Overlapping Images */}
        <div className={styles.imagesWrapper} ref={imagesRef}>
          <div className={`${styles.imageBox} ${styles.imageBox1}`}>
            <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=500&auto=format&fit=crop" alt="Custom Earrings" />
          </div>
          <div className={`${styles.imageBox} ${styles.imageBox2}`}>
            <img src="https://images.unsplash.com/photo-1599643478514-4a820c56a8e8?q=80&w=500&auto=format&fit=crop" alt="Custom Ring" />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className={styles.contentWrapper} ref={contentRef}>
          <div className={styles.titleContainer}>
            <span className={styles.largeNumber}><ScrambleText text="02" /></span>
            <h2>World Of<br/>Custom Made</h2>
          </div>
          <p>
            Bringing forward a collection with an aesthetic appeal for a broad market while ensuring exceptional results is a challenge for any organization. Hemang Gems provides a systematic approach to creating timeless designs that are consistently reproduced through the company's in-house capabilities.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ManufacturingProcess;
