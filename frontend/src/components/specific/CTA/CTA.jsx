import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import styles from './CTA.module.scss';
import MaskedText from '../../common/MaskedText/MaskedText';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    
    let ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current.children,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out'
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.ctaSection} ref={sectionRef}>
      <div className={styles.container} ref={contentRef}>
        <h2><MaskedText text="Ready to Create Something Extraordinary?" /></h2>
        <p>Let's discuss how Hemang Gems can elevate your jewelry line.</p>
        
        <div className={styles.btnGroup}>
          <Link to="/contact">
            <button className={styles.primaryBtn}>Start a Project</button>
          </Link>
          <Link to="/catalogue">
            <button className={styles.secondaryBtn}>View Catalogue</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
