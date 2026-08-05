import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import styles from './FeaturedCategories.module.scss';

gsap.registerPlugin(ScrollTrigger);

const FeaturedCategories = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const el = sectionRef.current;
      
      gsap.fromTo(itemsRef.current,
        { opacity: 0, scale: 0.95 },
        {
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
          },
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out'
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.productSpecsSection} ref={sectionRef}>
      <div className={styles.bentoGrid}>
        
        {/* Top Row */}
        <div 
          className={`${styles.bentoItem} ${styles.span2} ${styles.specsBox}`}
          ref={el => itemsRef.current[0] = el}
        >
          <div className={styles.specsContent}>
            <h2>Product Specifications</h2>
            <p>
              Bringing forward a collection with an aesthetic appeal for a broad market while ensuring exceptional results is a challenge for any organization. Hemang Gems provides a systematic approach to creating timeless designs that are consistently reproduced through the company's in-house capabilities.
            </p>
            <Link to="/catalogue" className={styles.viewLink}>
              VIEW CATALOGUE <ArrowRight size={18} />
            </Link>
          </div>
          <div className={styles.redArc}></div>
        </div>
        
        <div 
          className={`${styles.bentoItem} ${styles.imageItem}`}
          ref={el => itemsRef.current[1] = el}
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1605100804763-247f67b2548e?q=80&w=800&auto=format&fit=crop')` }}
        >
          <div className={styles.gradientOverlay}></div>
          <h3>Metals, Techniques and Wastage</h3>
        </div>
        
        <div 
          className={`${styles.bentoItem} ${styles.imageItem} ${styles.darkBg}`}
          ref={el => itemsRef.current[2] = el}
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop')` }}
        >
          <div className={styles.gradientOverlay}></div>
          <h3>Watches</h3>
        </div>

        {/* Bottom Row */}
        <div 
          className={`${styles.bentoItem} ${styles.span2} ${styles.imageItem}`}
          ref={el => itemsRef.current[3] = el}
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop')` }}
        >
          <div className={styles.gradientOverlay}></div>
          <h3>Plating and Texture</h3>
        </div>
        
        <div 
          className={`${styles.bentoItem} ${styles.imageItem}`}
          ref={el => itemsRef.current[4] = el}
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1599643478514-4a820c56a8e8?q=80&w=800&auto=format&fit=crop')` }}
        >
          <div className={styles.gradientOverlay}></div>
          <h3>Gemstones</h3>
        </div>
        
        <div 
          className={`${styles.bentoItem} ${styles.imageItem}`}
          ref={el => itemsRef.current[5] = el}
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop')` }}
        >
          <div className={styles.gradientOverlay}></div>
          <h3>Pearl Jewelry</h3>
        </div>

      </div>
    </section>
  );
};

export default FeaturedCategories;
