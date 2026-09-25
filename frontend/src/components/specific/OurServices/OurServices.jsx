import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
          <h2><MaskedText text="Gold Diamond Jewellery" /></h2>
          <div className={styles.imageWrapper}>
            <img 
              src="/New folder/diamon jwelery1.png" 
              alt="Diamond Promise Ring" 
            />
          </div>
          <span className={styles.productName}>Diamond Promise Ring</span>
          <Link to="/catalogue#ring" className={styles.detailsBtn}>VIEW RINGS</Link>
        </div>

        {/* Center Column */}
        <div className={styles.centerCol} ref={centerRef}>
          <div className={styles.imageGrid}>
            <Link to="/catalogue#diamond-jewelry" className={styles.gridItem}>
              <img src="/New folder/diamon jwelery2.png" alt="Diamond Jewelry 1" />
            </Link>
            <Link to="/catalogue#diamond-jewelry" className={styles.gridItem}>
              <div className={styles.searchOverlay}>
                <div className={styles.searchCircle}><Search size={20} /></div>
              </div>
              <img src="/New folder/diamon jwelery3.png" alt="Diamond Jewelry 2" />
            </Link>
            <Link to="/catalogue#diamond-jewelry" className={styles.gridItem}>
              <img src="/New folder/diamon jwelery4.png" alt="Diamond Jewelry 3" />
            </Link>
            <Link to="/catalogue#diamond-jewelry" className={styles.gridItem}>
              <img src="/New folder/diamon jwelery5.png" alt="Diamond Jewelry 4" />
            </Link>
          </div>
          <div className={styles.carouselArrows}>
            <Link to="/catalogue#diamond-jewelry" className={styles.exploreGridLink}>EXPLORE ALL DESIGNS &rarr;</Link>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.productCol} ref={rightRef}>
          <h2><MaskedText text="Silver Jewellery" /></h2>
          <div className={styles.imageWrapper}>
            <img 
              src="/New folder/diamon jwelery6.png" 
              alt="Princess-Cut Diamond" 
            />
          </div>
          <span className={styles.productName}>Princess-Cut Diamond</span>
          <Link to="/catalogue#diamond-jewelry" className={styles.detailsBtn}>VIEW PIECES</Link>
        </div>

      </div>
    </section>
  );
};

export default OurServices;
