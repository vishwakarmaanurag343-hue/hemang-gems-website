import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import styles from './ProductDetail.module.scss';

// Mock DB
const db = {
  1: { name: 'Aura Gold Necklace', category: 'Gold Jewelry', price: 'Contact for Pricing', description: 'An exquisite 18k gold necklace crafted for elegance and everyday luxury. Features a flawless clasp mechanism and interlocking links that catch the light beautifully.', specs: ['18K Solid Gold', 'Length: 18 inches', 'Weight: 45g', 'Hand-polished finish'], images: ['https://images.unsplash.com/photo-1599643478514-4a820c56a8e8?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop'] },
  2: { name: 'Eternity Diamond Ring', category: 'Diamond Collection', price: 'Contact for Pricing', description: 'Brilliant cut diamond ring set in pristine platinum for the perfect moment. Center stone features VVS1 clarity and D color grading.', specs: ['Platinum 950', '2.5 Carat Center Stone', 'VVS1 Clarity, D Color', 'Excellent Cut'], images: ['https://images.unsplash.com/photo-1605100804763-247f6793132e?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop'] },
  // fallback for others
  default: { name: 'Luxury Piece', category: 'Collection', price: 'Contact for Pricing', description: 'A masterfully crafted piece representing the pinnacle of our manufacturing capabilities.', specs: ['Premium Materials', 'Hand-finished', 'Certified Quality', 'Customizable'], images: ['https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1573408301145-b98c4af3066e?q=80&w=1000&auto=format&fit=crop'] }
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = db[id] || db.default;
  const [activeImage, setActiveImage] = useState(0);
  
  const imageRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    let ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
      );

      gsap.fromTo(infoRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, delay: 0.2, ease: 'power3.out' }
      );
    });

    return () => ctx.revert();
  }, [id]);

  return (
    <div className={styles.productDetailPage}>
      <div className={styles.container}>
        <div className={styles.imageGallery} ref={imageRef}>
          <div className={styles.mainImage}>
            <img src={product.images[activeImage]} alt={product.name} />
          </div>
          <div className={styles.thumbnailStrip}>
            {product.images.map((img, idx) => (
              <div 
                key={idx} 
                className={`${styles.thumbnail} ${activeImage === idx ? styles.active : ''}`}
                onClick={() => setActiveImage(idx)}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.productInfo} ref={infoRef}>
          <span className={styles.category}>{product.category}</span>
          <h1>{product.name}</h1>
          <span className={styles.price}>{product.price}</span>
          
          <p className={styles.description}>{product.description}</p>
          
          <div className={styles.specifications}>
            <h4>Specifications</h4>
            <ul>
              {product.specs.map((spec, idx) => (
                <li key={idx}>{spec}</li>
              ))}
            </ul>
          </div>

          <div className={styles.actions}>
            <Link to="/contact">
              <button className={styles.inquireBtn}>Inquire Now</button>
            </Link>
            <button className={styles.downloadBtn}>Download Specs</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
