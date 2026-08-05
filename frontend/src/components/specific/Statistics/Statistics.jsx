import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Statistics.module.scss';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { target: 15, suffix: '+', label: 'Years Experience' },
  { target: 1000, suffix: '+', label: 'Products Manufactured' },
  { target: 250, suffix: '+', label: 'Business Clients' },
  { target: 35, suffix: '+', label: 'Countries Served' },
];

const Statistics = () => {
  const sectionRef = useRef(null);
  const countersRef = useRef([]);

  useEffect(() => {
    const el = sectionRef.current;

    countersRef.current.forEach((counter, i) => {
      const target = stats[i].target;
      
      gsap.to(counter, {
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
        innerHTML: target,
        duration: 2.5,
        ease: 'power3.out',
        snap: { innerHTML: 1 },
        onUpdate: function() {
          // Keep the suffix outside of the animating part if possible, 
          // or just append it after snap if GSAP overwrites innerHTML
          // For a cleaner look, we let GSAP animate a data object instead.
        }
      });
    });
    
    // Better GSAP counter approach:
    countersRef.current.forEach((counter, i) => {
      let obj = { val: 0 };
      gsap.to(obj, {
        scrollTrigger: {
          trigger: el,
          start: 'top 80%'
        },
        val: stats[i].target,
        duration: 2.5,
        ease: 'power3.out',
        onUpdate: () => {
          counter.innerText = Math.floor(obj.val) + stats[i].suffix;
        }
      });
    });

  }, []);

  return (
    <section className={styles.statistics} ref={sectionRef}>
      <div className={styles.container}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <div className={styles.number} ref={el => countersRef.current[index] = el}>
              0{stat.suffix}
            </div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
