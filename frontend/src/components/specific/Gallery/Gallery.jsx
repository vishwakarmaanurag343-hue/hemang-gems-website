import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Gallery.module.scss';
import MaskedText from '../../common/MaskedText/MaskedText';

gsap.registerPlugin(ScrollTrigger);

const images = [
  'https://images.unsplash.com/photo-1599643478514-4a820c56a8e8?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1605100804763-247f6793132e?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1573408301145-b98c4af3066e?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop',
];

const Gallery = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const el = sectionRef.current;
    
    let ctx = gsap.context(() => {
      gsap.fromTo(itemsRef.current,
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out'
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.gallerySection} ref={sectionRef}>
      <div className={styles.header}>
        <h2><MaskedText text="Our Craftsmanship" /></h2>
      </div>
      
      <div className={styles.masonryGrid}>
        {images.map((src, index) => (
          <div 
            key={index} 
            className={styles.galleryItem}
            ref={el => itemsRef.current[index] = el}
          >
            <img src={src} alt={`Gallery ${index + 1}`} />
            <div className={styles.overlay}>
              <span>View Image</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
