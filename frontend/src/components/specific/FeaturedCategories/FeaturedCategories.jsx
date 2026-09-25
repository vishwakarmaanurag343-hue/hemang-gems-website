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
            <Link to="/catalogue#south-collection" className={styles.viewLink}>
              VIEW CATALOGUE <ArrowRight size={18} />
            </Link>
          </div>
          <div className={styles.redArc}></div>
        </div>
        
        <Link 
          to="/catalogue#south-collection"
          className={`${styles.bentoItem} ${styles.imageItem}`}
          ref={el => itemsRef.current[1] = el}
          style={{ backgroundImage: `url('/New folder/south4.png')` }}
        >
          <div className={styles.gradientOverlay}></div>
          <h3>South Collection</h3>
        </Link>
        
        <Link 
          to="/catalogue#earring"
          className={`${styles.bentoItem} ${styles.imageItem} ${styles.darkBg}`}
          ref={el => itemsRef.current[2] = el}
          style={{ backgroundImage: `url('/New folder/south5.png')` }}
        >
          <div className={styles.gradientOverlay}></div>
          <h3>Earrings</h3>
        </Link>

        {/* Bottom Row */}
        <Link 
          to="/catalogue#diamond-jewelry"
          className={`${styles.bentoItem} ${styles.span2} ${styles.imageItem}`}
          ref={el => itemsRef.current[3] = el}
          style={{ backgroundImage: `url('/New folder/south6.png')` }}
        >
          <div className={styles.gradientOverlay}></div>
          <h3>Diamond Jewelry</h3>
        </Link>
        
        <Link 
          to="/catalogue#ring"
          className={`${styles.bentoItem} ${styles.imageItem}`}
          ref={el => itemsRef.current[4] = el}
          style={{ backgroundImage: `url('/New folder/south7.png')` }}
        >
          <div className={styles.gradientOverlay}></div>
          <h3>Rings</h3>
        </Link>
        
        <Link 
          to="/catalogue#mangalsutra"
          className={`${styles.bentoItem} ${styles.imageItem}`}
          ref={el => itemsRef.current[5] = el}
          style={{ backgroundImage: `url('/New folder/south8.png')` }}
        >
          <div className={styles.gradientOverlay}></div>
          <h3>Mangalsutras</h3>
        </Link>

      </div>
    </section>
  );
};

export default FeaturedCategories;
