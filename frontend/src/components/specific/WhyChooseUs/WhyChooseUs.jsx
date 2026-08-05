import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './WhyChooseUs.module.scss';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const el = sectionRef.current;

      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -50 },
        { scrollTrigger: { trigger: el, start: 'top 75%' }, opacity: 1, x: 0, duration: 1.5, ease: 'power3.out' }
      );

      gsap.fromTo(rightRef.current,
        { opacity: 0, x: 50 },
        { scrollTrigger: { trigger: el, start: 'top 75%' }, opacity: 1, x: 0, duration: 1.5, ease: 'power3.out', delay: 0.2 }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.contactSection} ref={sectionRef}>
      <div className={styles.bgPattern}></div>
      <div className={styles.container}>
        
        <div className={styles.leftColumn} ref={leftRef}>
          <div className={styles.bgText}>Contact</div>
          <div className={styles.textContent}>
            <h2>How can we help you?</h2>
            <p>
              Whether it be to add to your collection, that first special wristwatch or the restoration of a much loved heirloom we are here to help.
            </p>
            <button className={styles.getInTouchBtn}>GET IN TOUCH</button>
          </div>

          <div className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">SUBSCRIBE NEWSLETTER</button>
          </div>
        </div>

        <div className={styles.rightColumn} ref={rightRef}>
          <div className={styles.imageWrapper}>
            <img 
              src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop" 
              alt="Classic Watch" 
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
