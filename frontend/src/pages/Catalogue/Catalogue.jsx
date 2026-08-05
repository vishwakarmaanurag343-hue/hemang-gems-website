import React, { useEffect } from 'react';
import { ArrowRight, ArrowLeft, Heart, ShoppingBag } from 'lucide-react';
import styles from './Catalogue.module.scss';

const Catalogue = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.cataloguePage}>
      {/* 1. Dark Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg}></div>
        <div className={styles.heroContent}>
          <h1>Discover Your Sparkle</h1>
          <div className={styles.leftAlignedBox}>
            <p>
              Welcoming In The Spring Season With An Enchanting Emerald, Diamond & Gold Lace With Earrings
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.buyBtn}>Buy Now</button>
              <button className={styles.exploreBtn}>Explore</button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overlapping Categories Row */}
      <section className={styles.overlapCategories}>
        <div className={styles.categoryCards}>
          <div className={styles.catCard}>
            <div className={styles.catInfo}>
              <span className={styles.catLabel}>Categories</span>
              <h3>Rings</h3>
            </div>
            <img src="https://images.unsplash.com/photo-1599643478514-4a820c56a8e8?q=80&w=400&auto=format&fit=crop" alt="Rings" />
            <button className={styles.moreBtn}>Check More Product &rarr;</button>
          </div>
          <div className={styles.catCard}>
            <div className={styles.catInfo}>
              <span className={styles.catLabel}>Categories</span>
              <h3>Couple Rings</h3>
            </div>
            <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop" alt="Couple Rings" />
            <button className={styles.moreBtn}>Check More Product &rarr;</button>
          </div>
          <div className={styles.catCard}>
            <div className={styles.catInfo}>
              <span className={styles.catLabel}>Categories</span>
              <h3>Earrings</h3>
            </div>
            <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=400&auto=format&fit=crop" alt="Earrings" />
            <button className={styles.moreBtn}>Check More Product &rarr;</button>
          </div>
        </div>
      </section>

      {/* 3. Diamonds & Engagement Ring */}
      <section className={styles.lightSection}>
        <div className={styles.contentLeft}>
          <h2>Diamonds & <br/>Engagement Ring</h2>
          <p>
            Experience the beauty of diamond jewellery and find your perfect piece for a special occasion. Find the perfect diamond for any special occasion, from engagement rings and wedding bands to anniversary and Christmas gifts
          </p>
          <button className={styles.darkBtn}>More Product</button>
        </div>
        <div className={styles.carouselRight}>
          <div className={styles.carouselHeader}>
             <div className={styles.navArrows}>
               <button><ArrowLeft size={20}/></button>
               <button><ArrowRight size={20}/></button>
             </div>
          </div>
          <div className={styles.productCarousel}>
             <div className={styles.prodCard}>
               <Heart className={styles.heartIcon} size={18}/>
               <div className={styles.prodHeader}>
                 <span className={styles.catLabel}>Categories</span>
                 <h4>Rings</h4>
                 <span className={styles.saleTag}>Sale</span>
               </div>
               <img src="https://images.unsplash.com/photo-1605100804763-247f6793132e?q=80&w=300&auto=format&fit=crop" alt="Ring"/>
               <div className={styles.prodFooter}>
                 <div className={styles.price}>
                   <span className={styles.current}>$999</span>
                   <span className={styles.old}>$1200</span>
                 </div>
                 <button className={styles.cartBtn}>Add To Cart <ShoppingBag size={14}/></button>
               </div>
             </div>
             <div className={styles.prodCard}>
               <Heart className={styles.heartIcon} size={18}/>
               <div className={styles.prodHeader}>
                 <span className={styles.catLabel}>Categories</span>
                 <h4>Rings</h4>
                 <span className={styles.saleTag}>Sale</span>
               </div>
               <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=300&auto=format&fit=crop" alt="Ring"/>
               <div className={styles.prodFooter}>
                 <div className={styles.price}>
                   <span className={styles.current}>$799</span>
                   <span className={styles.old}>$899</span>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Find The Perfect Diamond For */}
      <section className={styles.darkSection}>
        <div className={styles.contentLeft}>
          <h2>Find The Perfect Diamond For</h2>
        </div>
        <div className={styles.carouselRight}>
          <div className={styles.carouselHeader}>
             <div className={styles.navArrows}>
               <button><ArrowLeft size={20}/></button>
               <button><ArrowRight size={20}/></button>
             </div>
          </div>
          <div className={styles.productCarousel}>
             <div className={styles.prodCard}>
               <Heart className={styles.heartIcon} size={18}/>
               <div className={styles.prodHeader}>
                 <span className={styles.catLabel}>Categories</span>
                 <h4>Rings</h4>
                 <span className={styles.saleTag}>Sale</span>
               </div>
               <img src="https://images.unsplash.com/photo-1605100804763-247f6793132e?q=80&w=300&auto=format&fit=crop" alt="Ring"/>
             </div>
             <div className={styles.prodCard}>
               <Heart className={styles.heartIcon} size={18}/>
               <div className={styles.prodHeader}>
                 <span className={styles.catLabel}>Categories</span>
                 <h4>Couple Rings</h4>
                 <span className={styles.saleTag}>Sale</span>
               </div>
               <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=300&auto=format&fit=crop" alt="Couple Rings"/>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalogue;
