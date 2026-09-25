import React, { useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Heart, ShoppingBag } from 'lucide-react';
import styles from './Catalogue.module.scss';
import { catalogueSections } from './catalogueData';

const CategorySection = ({ section, isReversed }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      // Check if user is scrolling vertically
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && e.deltaY !== 0) {
        const atStart = el.scrollLeft <= 5 && e.deltaY < 0;
        const atEnd = (el.scrollLeft + el.clientWidth) >= (el.scrollWidth - 5) && e.deltaY > 0;
        
        // Convert vertical scroll to horizontal card movement until boundary is hit
        if (!atStart && !atEnd) {
          e.preventDefault();
          el.scrollLeft += e.deltaY * 1.2;
        }
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section id={section.id} className={section.theme === 'dark' ? styles.darkSection : styles.lightSection}>
      <div className={styles.sectionContainer}>
        {/* Editorial Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitleBlock}>
            <span className={styles.sectionCategoryTag}>{section.categoryLabel}</span>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </div>
          <div className={styles.carouselNavWrapper}>
            <div className={styles.navArrows}>
              <button onClick={scrollLeft} aria-label="Previous items"><ArrowLeft size={18}/></button>
              <button onClick={scrollRight} aria-label="Next items"><ArrowRight size={18}/></button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div className={styles.carouselWrapper}>
          <div className={styles.productCarousel} ref={carouselRef}>
            {section.images.map((img, index) => (
              <div className={styles.catalogueCard} key={index}>
                <div className={styles.cardMedia}>
                  <img src={img} alt={`${section.categoryLabel} - Item ${index + 1}`} loading="lazy" />
                  <span className={styles.itemBadge}>№ {String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className={styles.cardDetails}>
                  <span className={styles.cardCategory}>{section.categoryLabel}</span>
                  <h4 className={styles.cardTitle}>Artisan Edition {index + 1}</h4>
                  <Link to="/contact" className={styles.viewDetailsText}>Inquire Design &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Catalogue = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className={styles.cataloguePage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg}></div>
        <div className={styles.heroContainer}>
          <div className={styles.magazineHeroHeader}>
            <div className={styles.editorialTag}>
              <span className={styles.vol}>VOL. 02 — 2026</span>
              <span className={styles.line}></span>
              <span className={styles.collectionTitle}>SPRING / SUMMER EDIT</span>
            </div>
            <h1 className={styles.magazineTitle}>
              Discover <br />
              <span className={styles.highlightText}>Your Sparkle</span>
            </h1>
          </div>

          <div className={styles.magazineHeroBottom}>
            <div className={styles.magazineDescriptionCol}>
              <span className={styles.accentBar}></span>
              <p>
                Welcoming In The Spring Season With An Enchanting Emerald, Diamond & Gold Lace With Earrings. Curated luxury crafted to redefine grace and eternal radiance.
              </p>
            </div>
            <div className={styles.magazineCtaCol}>
              <div className={styles.heroButtons}>
                <a href="#diamond-jewelry" className={styles.buyBtn}>Explore Collections</a>
                <a href="#south-collection" className={styles.exploreBtn}>South Heritage</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Sections */}
      {catalogueSections.map((section, index) => (
        <CategorySection key={section.id} section={section} isReversed={index % 2 !== 0} />
      ))}
    </div>
  );
};

export default Catalogue;
