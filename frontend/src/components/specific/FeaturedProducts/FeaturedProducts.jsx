import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import styles from './FeaturedProducts.module.scss';

gsap.registerPlugin(ScrollTrigger);

const FeaturedProducts = () => {
  const sectionRef = useRef(null);
  const imagesRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const el = sectionRef.current;
      
      // Animate overlapping images
      gsap.fromTo(imagesRef.current.children,
        { opacity: 0, x: 50, scale: 0.9 },
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
        { opacity: 0, x: -50 },
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
    <section className={styles.watchCollections} ref={sectionRef}>
      <div className={styles.container}>
        
        {/* Left Side: Overlapping Images */}
        <div className={styles.imagesWrapper} ref={imagesRef}>
          <div className={styles.bgBox}></div>
          
          <div className={`${styles.watchItem} ${styles.watch1}`}>
            <div className={styles.imageContainer}>
              <img src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=500&auto=format&fit=crop" alt="Omega Watch" />
            </div>
            <div className={styles.watchLabel}>
              <div className={styles.line}></div>
              <div>
                <h4>OMEGA</h4>
                <span>CENTENARY CHRONOMETER</span>
              </div>
            </div>
          </div>

          <div className={`${styles.watchItem} ${styles.watch2}`}>
            <div className={styles.watchLabelRight}>
              <div>
                <h4>ROLEX</h4>
                <span>CHRONOMETER WRISTWATCH</span>
              </div>
              <div className={styles.line}></div>
            </div>
            <div className={styles.imageContainer}>
              <img src="https://images.unsplash.com/photo-1587836374828-cb4387df3c56?q=80&w=500&auto=format&fit=crop" alt="Rolex Watch" />
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className={styles.contentWrapper} ref={contentRef}>
          <div className={styles.titleContainer}>
            <span className={styles.largeNumber}>3</span>
            <h2>Watch Collections For<br/>the best men's watches</h2>
          </div>
          <p>
            Bringing forward a collection with an aesthetic appeal for a broad market while ensuring exceptional results is a challenge for any organization. Hemang Gems provides a systematic approach to creating timeless designs that are consistently reproduced through the company's in-house capabilities.
          </p>
          <Link to="/catalogue" className={styles.viewLink}>
            VIEW CATALOGUE <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;
