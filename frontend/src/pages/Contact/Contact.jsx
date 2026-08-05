import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, PhoneCall } from 'lucide-react';
import styles from './Contact.module.scss';

const Contact = () => {
  const pageRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);
  const ctaRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    agreePrivacy: false
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);

    const tl = gsap.timeline();
    
    tl.fromTo(pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: 'power2.out' }
    )
    .fromTo(formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      "-=0.4"
    )
    .fromTo(infoRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' },
      "-=0.6"
    )
    .fromTo(ctaRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      "-=0.4"
    );
  }, []);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.agreePrivacy) {
      alert("Please agree to the privacy policy");
      return;
    }
    setStatus('Sending...');
    
    setTimeout(() => {
      setStatus('Message sent successfully. We will contact you soon.');
      setFormData({ name: '', email: '', subject: '', message: '', agreePrivacy: false });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <div className={styles.contactPage} ref={pageRef}>
      
      {/* Top Dark Hero Section */}
      <section className={styles.topSection}>
        <div className={styles.topContent}>
          <h1>Feel free to get in touch</h1>
          <p>With over 20 years of experience, we can deliver great results for your jewelry business without additional costs or commitments.</p>
        </div>
      </section>

      {/* Middle Split Section */}
      <section className={styles.middleSection}>
        <div className={styles.middleContainer}>
          
          {/* Floating Form Card (Left) */}
          <div className={styles.formSide} ref={formRef}>
            <h3>Leave your message</h3>
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label>Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label>Message</label>
                <textarea 
                  name="message" 
                  placeholder="Message" 
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <div className={styles.formFooter}>
                <label className={styles.checkboxLabel}>
                  <input 
                    type="checkbox" 
                    name="agreePrivacy"
                    checked={formData.agreePrivacy}
                    onChange={handleChange}
                  />
                  <span>I agree to the privacy policy</span>
                </label>
                
                <button type="submit" disabled={status === 'Sending...'}>
                  {status === 'Sending...' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {status && status !== 'Sending...' && <p className={styles.statusMessage}>{status}</p>}
            </form>
          </div>

          {/* Info Side (Right) */}
          <div className={styles.infoSide} ref={infoRef}>
            <h2>Don't hesitate to contact <span>us</span></h2>
            <p className={styles.infoDesc}>
              Partner with Hemang Gems for unparalleled luxury jewelry manufacturing, bespoke designs, and wholesale inquiries.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <div className={styles.iconBox}><MapPin size={20} /></div>
                <div className={styles.cardText}>
                  <h4>Office</h4>
                  <p>123 Luxury Avenue, Dubai</p>
                </div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.iconBox}><Phone size={20} /></div>
                <div className={styles.cardText}>
                  <h4>Phone</h4>
                  <p>+971 55 123 4567</p>
                </div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.iconBox}><Clock size={20} /></div>
                <div className={styles.cardText}>
                  <h4>Work Hours</h4>
                  <p>Everyday 09 am - 06 pm</p>
                </div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.iconBox}><Mail size={20} /></div>
                <div className={styles.cardText}>
                  <h4>Email</h4>
                  <p>contact@hemanggems.com</p>
                </div>
              </div>
            </div>

            <div className={styles.socialSection}>
              <h4>Social Media :</h4>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialCircle}>Fb</a>
                <a href="#" className={styles.socialCircle}>Tw</a>
                <a href="#" className={styles.socialCircle}>In</a>
                <a href="#" className={styles.socialCircle}>Ig</a>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className={styles.bottomSection} ref={ctaRef}>
        <div className={styles.ctaBadge}>
          <Clock size={14} /> <span>We Reply 24 Hours</span>
        </div>
        <h2>Have a project in mind? <span>Let's Talk</span></h2>
        <p>Let us help you bring your jewelry designs to life with our expert craftsmanship and state-of-the-art facilities.</p>
        
        <a href="tel:+971551234567" className={styles.ctaButton}>
          <span>+971 55 123 4567</span>
          <div className={styles.ctaIcon}><PhoneCall size={18} /></div>
        </a>
      </section>
      
    </div>
  );
};

export default Contact;
