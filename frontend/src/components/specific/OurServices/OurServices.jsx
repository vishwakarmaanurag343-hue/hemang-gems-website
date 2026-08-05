import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, ArrowLeft, ArrowRight } from 'lucide-react';
import styles from './OurServices.module.scss';
import MaskedText from '../../common/MaskedText/MaskedText';

gsap.registerPlugin(ScrollTrigger);

const OurServices = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const centerRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const el = sectionRef.current;
      
      gsap.fromTo([leftRef.current, centerRef.current, rightRef.current],
        { opacity: 0, y: 40 },
        {
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
          },
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out'
        }
      );
    });
    
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.showcaseSection} ref={sectionRef}>
      <div className={styles.container}>
        
        {/* Left Column */}
        <div className={styles.productCol} ref={leftRef}>
          <h2><MaskedText text="Gold Metal" /></h2>
          <div className={styles.imageWrapper}>
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b2548e?q=80&w=600&auto=format&fit=crop" 
              alt="Diamond Promise Ring" 
            />
          </div>
          <span className={styles.productName}>Diamond Promise Ring</span>
          <button className={styles.detailsBtn}>DETAILS</button>
        </div>

        {/* Center Column */}
        <div className={styles.centerCol} ref={centerRef}>
          <div className={styles.imageGrid}>
            <div className={styles.gridItem}>
              <img src="https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=500&auto=format&fit=crop" alt="Process 1" />
            </div>
            <div className={styles.gridItem}>
              <div className={styles.searchOverlay}>
                <div className={styles.searchCircle}><Search size={20} /></div>
              </div>
              <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=500&auto=format&fit=crop" alt="Process 2" />
            </div>
            <div className={styles.gridItem}>
              <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=500&auto=format&fit=crop" alt="Process 3" />
            </div>
            <div className={styles.gridItem}>
              <img src="https://images.unsplash.com/photo-1599643478514-4a820c56a8e8?q=80&w=500&auto=format&fit=crop" alt="Process 4" />
            </div>
          </div>
          <div className={styles.carouselArrows}>
            <button><ArrowLeft size={18} /></button>
            <button><ArrowRight size={18} /></button>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.productCol} ref={rightRef}>
          <h2><MaskedText text="Silver Pieces" /></h2>
          <div className={styles.imageWrapper}>
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop" 
              alt="Princess-Cut Diamond" 
            />
          </div>
          <span className={styles.productName}>Princess-Cut Diamond</span>
          <button className={styles.detailsBtn}>DETAILS</button>
        </div>

      </div>
    </section>
  );
};

export default OurServices;
