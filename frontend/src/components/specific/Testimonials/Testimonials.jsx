import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Testimonials.module.scss';
import MaskedText from '../../common/MaskedText/MaskedText';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    text: "Their attention to detail and ability to scale production without compromising quality is unmatched. A true partner for our global brand.",
    author: "Elena Rossi",
    company: "Milano Fine Jewelry"
  },
  {
    text: "From CAD design to final polishing, the craftsmanship is simply flawless. They have elevated our product line to new luxury standards.",
    author: "James Sterling",
    company: "Sterling & Co. London"
  },
  {
    text: "The best private label manufacturer we've ever worked with. Discreteness, precision, and stunning execution every single time.",
    author: "Claire Dupont",
    company: "Maison Cartier Boutique"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const slideRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    let ctx = gsap.context(() => {
      gsap.fromTo(el, 
        { opacity: 0 }, 
        { scrollTrigger: { trigger: el, start: 'top 75%' }, opacity: 1, duration: 1.5, ease: 'power2.out' }
      );
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Fade animation on slide change
      gsap.fromTo(slideRef.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );
    });
    return () => ctx.revert();
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.testimonialsSection} ref={sectionRef}>
      <div className={styles.header}>
        <h2><MaskedText text="What Our Clients Say" /></h2>
      </div>
      
      <div className={styles.sliderContainer}>
        <div className={styles.quoteIcon}>"</div>
        
        <div ref={slideRef}>
          <p className={styles.review}>{reviews[current].text}</p>
          <div className={styles.author}>
            <h4>{reviews[current].author}</h4>
            <p>{reviews[current].company}</p>
          </div>
        </div>

        <div className={styles.controls}>
          {reviews.map((_, index) => (
            <div 
              key={index} 
              className={`${styles.dot} ${index === current ? styles.active : ''}`}
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
