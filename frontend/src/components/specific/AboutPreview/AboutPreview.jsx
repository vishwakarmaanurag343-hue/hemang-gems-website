import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './AboutPreview.module.scss';
import ScrambleText from '../../common/ScrambleText/ScrambleText';

gsap.registerPlugin(ScrollTrigger);

const AboutPreview = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const el = sectionRef.current;
      
      // Fade up animation for text
      gsap.to(contentRef.current, {
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Image reveal animation
      gsap.fromTo(imageRef.current, 
        { clipPath: 'inset(100% 0 0 0)' },
        {
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
          },
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.5,
          ease: 'power4.inOut'
        }
      );
    });
    
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.aboutPreview} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.imageWrapper} ref={imageRef}>
          <video 
            src="/document_6177043783541071700.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className={styles.videoPlayer}
          />
        </div>
        <div className={styles.contentWrapper} ref={contentRef}>
          <div className={styles.titleContainer}>
            <h2>Product Custom<br/>Design Engineering</h2>
          </div>
          
          <div className={styles.textColumns}>
            <p>
              Bringing forward a collection with an aesthetic appeal for a broad market while ensuring exceptional results is a challenge for any organization. Hemang Gems provides a systematic approach to creating timeless designs that are consistently reproduced through the company's in-house capabilities.
            </p>
            <p>
              This is only the beginning of what makes Hemang Gems the right choice—the trusted choice—as a business partner. The world's leading jewelry retailers have worked with Hemang Gems for over two decades because they demand the exceptional results that only a global leader in jewelry manufacturing can provide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
