import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.brandInfo}>
          <h3>HEMANG GEMS</h3>
          <p>
            Hemang Gems is a full-service luxury jewelry manufacturer specializing in bespoke and commercial design.
          </p>
        </div>
        <div className={styles.linksSection}>
          <div className={styles.linkGroup}>
            <h4>Quick link</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact us</Link>
            <Link to="/license">License</Link>
          </div>
          <div className={styles.linkGroup}>
            <h4>Company</h4>
            <Link to="/services">Service</Link>
            <Link to="/services/details">Service details</Link>
            <Link to="/process">Project</Link>
            <Link to="/process/details">Project details</Link>
          </div>
          <div className={styles.linkGroup}>
            <h4>Others</h4>
            <Link to="/blog">Blog</Link>
            <Link to="/blog/details">Blog details</Link>
            <Link to="/404">404</Link>
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
