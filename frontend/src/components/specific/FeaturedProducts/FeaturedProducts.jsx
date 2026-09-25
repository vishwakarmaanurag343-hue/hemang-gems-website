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
              <img src="/New folder/earing.png" alt="Diamond Stud Earrings" />
            </div>
            <div className={styles.watchLabel}>
              <div className={styles.line}></div>
              <div>
                <h4>HEMANG</h4>
                <span>DIAMOND STUD EARRINGS</span>
              </div>
            </div>
          </div>

          <div className={`${styles.watchItem} ${styles.watch2}`}>
            <div className={styles.watchLabelRight}>
              <div>
                <h4>LUXURY</h4>
                <span>CASCADE DROP EARRINGS</span>
              </div>
              <div className={styles.line}></div>
            </div>
            <div className={styles.imageContainer}>
              <img src="/New folder/earing4.png" alt="Cascade Drop Earrings" />
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className={styles.contentWrapper} ref={contentRef}>
          <div className={styles.titleContainer}>
            <h2>Earring Collections For<br/>Every Timeless Moment</h2>
          </div>
          <p>
            From delicate everyday studs to breathtaking chandelier drops, each pair in our earring collection is meticulously sculpted with precision-cut diamonds and luminous precious metals to enhance your natural radiance.
          </p>
          <Link to="/catalogue#earring" className={styles.viewLink}>
            VIEW CATALOGUE <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;
