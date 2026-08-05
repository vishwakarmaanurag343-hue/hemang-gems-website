import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import AboutPreview from '../../components/specific/AboutPreview/AboutPreview';
import RotatingText from '../../components/common/RotatingText/RotatingText';
import OurServices from '../../components/specific/OurServices/OurServices';
import ManufacturingProcess from '../../components/specific/ManufacturingProcess/ManufacturingProcess';
import FeaturedCategories from '../../components/specific/FeaturedCategories/FeaturedCategories';
import FeaturedProducts from '../../components/specific/FeaturedProducts/FeaturedProducts';
import WhyChooseUs from '../../components/specific/WhyChooseUs/WhyChooseUs';
import './Home.scss';

const Home = () => {
  const contentRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Luxury Slow Zoom effect on the background
      gsap.fromTo(bgRef.current, 
        { scale: 1.1 }, 
        { scale: 1, duration: 3, ease: 'power2.out' }
      );

      // Fade up the content
      gsap.fromTo(contentRef.current, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: 'power3.out' }
      );
    });

    return () => ctx.revert(); // Cleanup for HMR and unmounting
  }, []);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-background" ref={bgRef}>
          <video src="/home-page-video.mp4" autoPlay loop muted playsInline className="hero-video" />
        </div>
        <div className="hero-content-new" ref={contentRef}>
          <div className="hero-text-left">
            <p>
              Meticulously crafted, <RotatingText words={['enduringly yours.', 'exclusively yours.', 'forever yours.']} className="rotating-black" /> Elevate your daily presence with pieces designed to belong to you alone.
            </p>
            <button className="text-link-btn">START SHOPPING</button>
            <h1>Silent Luxury</h1>
          </div>
        </div>
      </section>
      
      <AboutPreview />
      <OurServices />
      <ManufacturingProcess />
      <FeaturedCategories />
      <FeaturedProducts />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
