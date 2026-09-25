import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';
import styles from './About.module.scss';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const handRef = useRef(null);
  const heroTextRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    let ctx = gsap.context(() => {
      // Premium Hero Text Stagger Animation
      if (heroTextRef.current) {
        const heroLines = heroTextRef.current.children;
        gsap.fromTo(heroLines,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1.5,
            ease: "power4.out",
            delay: 0.3
          }
        );
      }

      // Slide in from left tied to scroll
      if (text1Ref.current) {
        gsap.from(text1Ref.current, {
          x: -500,
          opacity: 0,
          scrollTrigger: {
            trigger: text1Ref.current,
            start: "top 95%",
            end: "top 30%",
            scrub: 1, // 1 second smoothing
          }
        });
      }

      // Slide in from right tied to scroll
      if (text2Ref.current) {
        gsap.from(text2Ref.current, {
          x: 500,
          opacity: 0,
          scrollTrigger: {
            trigger: text2Ref.current,
            start: "top 95%",
            end: "top 30%",
            scrub: 1,
          }
        });
      }

      // Slide hand image up tied to scroll
      if (handRef.current) {
        gsap.from(handRef.current, {
          y: 200,
          opacity: 0,
          scrollTrigger: {
            trigger: handRef.current,
            start: "top 100%",
            end: "top 50%",
            scrub: 1,
          }
        });
      }

      // Premium Stagger for all text elements with .animateText class
      const textElements = gsap.utils.toArray('.animateText');
      textElements.forEach((el) => {
        gsap.fromTo(el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              toggleActions: "play none none none"
            }
          }
        );
      });

      // Give ScrollTrigger a moment to refresh after DOM paints
      setTimeout(() => ScrollTrigger.refresh(), 100);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.aboutPage}>
      {/* Background Grid Lines */}
      <div className={styles.bgGrid}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroLeft}>
          <div ref={heroTextRef} className={styles.heroTextWrapper}>
            <div className={styles.overflowHidden}>
              <h1>finest<br />jewelry,</h1>
            </div>
            <div className={styles.overflowHidden}>
              <p className={styles.subtitle}>inspired by our life.</p>
            </div>
            <div className={styles.overflowHidden}>
              <button className={styles.exploreBtn}>
                <span className={styles.btnLine}></span> EXPLORE NOW
              </button>
            </div>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.heroImageContainer}>
            <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop" alt="Model wearing jewelry" />
          </div>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className={styles.storySection}>
        <div ref={text1Ref} className={styles.watermarkText}>jewelry</div>
        <div className={styles.storyContent}>
          <div className={styles.overflowHidden}>
            <p className="animateText">Crafting timeless brilliance and bespoke elegance<br />designed for the sophistication of the<br />modern muse.</p>
          </div>
        </div>
        <div ref={text2Ref} className={styles.watermarkTextBottom}>selection</div>
      </section>

      {/* 3. Modular About Us Section */}
      <section className={styles.modularSection}>
        {/* Background Grid Lines */}
        <div className={styles.gridLines}>
          <div></div><div></div><div></div><div></div><div></div>
        </div>

        <div className={styles.modularContainer}>
          <div className={styles.modularColLeft}>
            <div className={styles.imgWrapperLeft}>
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop" alt="Woman smiling" />
            </div>
          </div>

          <div className={styles.modularColCenter}>
            <div className={styles.overflowHidden}>
              <h4 className={`${styles.sectionLabel} animateText`}>ABOUT US</h4>
            </div>
            <div className={styles.overflowHidden}>
              <h2 className={`${styles.sectionTitle} animateText`}>Modular fine jewelry</h2>
            </div>
            <div className={styles.overflowHidden}>
              <p className={`${styles.sectionText} animateText`}>
                With Bijoux, we've built a clever,<br />
                customizable jewelry line that morphs with<br />
                you. A necklace becomes a pair of anklets;<br />
                an earring turns into a ring. Crafted from the<br />
                finest materials and precious stones,<br />
                Bijoux's contemporary fine jewelry can be<br />
                modified to match your mood, no matter<br />
                where you are.
              </p>
            </div>
          </div>

          <div className={styles.modularColRight}>
            <div className={styles.imgWrapperRight}>
              <img src="https://images.unsplash.com/photo-1599643478514-4a820c56a8e8?q=80&w=600&auto=format&fit=crop" alt="Necklaces" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Perfect Match Section */}
      <section className={`${styles.splitSection} ${styles.reverse}`}>
        <div className={styles.splitLeft}>
          <div className={styles.textContent}>
            <div className={styles.overflowHidden}>
              <h2 className="animateText">Perfect Match<br />for Every Occasion</h2>
            </div>
            <div className={styles.overflowHidden}>
              <p className="animateText">coordinate with other pieces from<br />the collection for a classic look.</p>
            </div>
            <div className={styles.overflowHidden}>
              <button className={`${styles.discoverBtn} animateText`}>
                <span className={styles.btnLine}></span> DISCOVER THE SET
              </button>
            </div>
          </div>
        </div>
        <div className={styles.splitRight}>
          <div className={styles.imageWrapperAlt}>
            <img src="/WhatsApp Image 2026-09-23 at 9.08.30 M.jpeg" alt="Perfect Match" />
          </div>
        </div>
      </section>

      {/* 5. Collections Section */}
      <section className={styles.collectionsSection}>
        <div className={styles.hugeWatermark}>collections</div>
        <div ref={handRef} className={styles.centerImage}>
          <img src="/hand.png" alt="Hand jewelry" />
        </div>
      </section>

      {/* 6. Inspired Categories Section */}
      <section className={styles.inspiredSection}>
        {/* Background Grid Lines */}
        <div className={styles.gridLines}>
          <div></div><div></div><div></div><div></div><div></div>
        </div>

        <div className={styles.inspiredHeader}>
          <div className={styles.overflowHidden}>
            <h2 className="animateText">Inspired by our multi-ethnic life,<br />we create fine jewelry to share our wonderful tales...</h2>
          </div>
        </div>

        <div className={styles.inspiredGrid}>
          <Link to="/catalogue#south-collection" className={styles.categoryCard}>
            <img src="/New folder/earing4.png" alt="Necklaces" />
            <h3>Necklaces</h3>
          </Link>
          <Link to="/catalogue#ring" className={styles.categoryCard}>
            <img src="/New folder/ring1.png" alt="Rings" />
            <h3>Rings</h3>
          </Link>
          <Link to="/catalogue#earring" className={styles.categoryCard}>
            <img src="/WhatsApp Image 2026-09-23 at 9.08.29 PM.jpeg" alt="Earrings" />
            <h3>Earrings</h3>
          </Link>
        </div>
      </section>
    </div>
  );
};
export default About;
