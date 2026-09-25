import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, ShieldCheck, Gem, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './WhyChooseUs.module.scss';

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  const perks = [
    { icon: Gem, title: "100% Certified Diamonds", desc: "GIA & IGI verified brilliance" },
    { icon: ShieldCheck, title: "Bespoke Custom Craft", desc: "Handcrafted in-house by master artisans" },
    { icon: Clock, title: "Private Consultation", desc: "One-on-one personalized curation" }
  ];

  return (
    <section className={styles.luxuryConsultSection} ref={sectionRef}>
      <div className={styles.ambientGlow}></div>
      <div className={styles.container}>
        
        {/* Left Column: Editorial Consultation & Newsletter */}
        <motion.div 
          className={styles.leftColumn}
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.badge}>
            <Sparkles size={14} className={styles.sparkleIcon} />
            <span>BESPOKE CONCIERGE</span>
          </div>

          <h2 className={styles.headline}>
            How can we craft <br />
            <span className={styles.goldText}>your legacy?</span>
          </h2>

          <p className={styles.subtext}>
            Whether you are envisioning a one-of-a-kind engagement solitaire, seeking an exquisite high-jewelry heirloom, or custom-engineering a bridal suite, our master jewelers are dedicated to bringing your vision to life.
          </p>

          <div className={styles.perksGrid}>
            {perks.map((perk, i) => (
              <motion.div 
                key={i} 
                className={styles.perkItem}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              >
                <div className={styles.perkIconWrapper}>
                  <perk.icon size={18} />
                </div>
                <div>
                  <h4>{perk.title}</h4>
                  <p>{perk.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className={styles.actionsRow}>
            <Link to="/contact" className={styles.primaryCta}>
              Book A Consultation <ArrowRight size={16} />
            </Link>
          </div>

          {/* Newsletter Box */}
          <form className={styles.newsletterCard} onSubmit={handleSubscribe}>
            <div className={styles.newsletterHeader}>
              <h4>Join The Hemang Circle</h4>
              <p>Receive exclusive invitations to private viewings and seasonal edits.</p>
            </div>
            <div className={styles.inputGroup}>
              <input 
                type="email" 
                placeholder="Enter your private email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <button type="submit" className={styles.submitBtn}>
                {subscribed ? (
                  <span className={styles.successMsg}><CheckCircle2 size={16} /> Subscribed</span>
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>
          </form>
        </motion.div>

        {/* Right Column: Visual Showcase */}
        <motion.div 
          className={styles.rightColumn}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.imageShowcaseCard}>
            <div className={styles.imageWrapper}>
              <img 
                src="/New folder/diamon jwelery.png" 
                alt="High Jewelry Haute Joaillerie" 
              />
              <div className={styles.imageGradientOverlay}></div>
            </div>

            <motion.div 
              className={styles.floatingBadge}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <span className={styles.tag}>HAUTE JOAILLERIE</span>
              <h3>Private Atelier</h3>
              <p>Hand-selected stones with exceptional fire & clarity.</p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
