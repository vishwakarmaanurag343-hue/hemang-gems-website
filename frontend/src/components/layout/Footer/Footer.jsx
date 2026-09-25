import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.brandInfo}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
            <img src="/logo.png" alt="HG Logo" style={{ height: '42px', width: 'auto', objectFit: 'contain' }} />
            <h3 style={{ margin: 0 }}>HEMANG GEMS</h3>
          </div>
          <p>
            Hemang Gems is a full-service luxury jewelry manufacturer specializing in bespoke and commercial design.
          </p>
          <p style={{ marginTop: '0.8rem', color: '#c89b3c', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            <a href="mailto:support@hemanggems.com" style={{ color: 'inherit', textDecoration: 'none' }}>
              ✉ support@hemanggems.com
            </a>
            <a href="mailto:hitesh@hemanggems.com" style={{ color: 'inherit', textDecoration: 'none' }}>
              ✉ hitesh@hemanggems.com
            </a>
          </p>
        </div>
        <div className={styles.linksSection}>
          <div className={styles.linkGroup}>
            <h4>Collections</h4>
            <Link to="/catalogue#south-collection">South Heritage</Link>
            <Link to="/catalogue#diamond-jewelry">Diamond Jewelry</Link>
            <Link to="/catalogue#earring">Earrings</Link>
            <Link to="/catalogue#ring">Rings</Link>
            <Link to="/catalogue#mangalsutra">Mangalsutras</Link>
            <Link to="/catalogue#nosepin">Nosepins</Link>
          </div>
          <div className={styles.linkGroup}>
            <h4>Company</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/catalogue">Catalogue</Link>
            <Link to="/contact">Contact & Concierge</Link>
          </div>
          <div className={styles.linkGroup}>
            <h4>Social</h4>
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>


      <div className={styles.bottomGiantText}>
        HEMANG
      </div>
    </footer>
  );
};

export default Footer;
