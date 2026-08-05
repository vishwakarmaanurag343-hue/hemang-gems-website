CREATE DATABASE IF NOT EXISTS luxury_jewelry;
USE luxury_jewelry;

CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    image_url VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    short_description VARCHAR(500),
    material VARCHAR(255),
    weight VARCHAR(255),
    dimensions VARCHAR(255),
    stone VARCHAR(255),
    primary_image_url VARCHAR(255),
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS product_images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    image_url VARCHAR(255) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert mock data
INSERT INTO categories (name, slug, image_url) VALUES 
('Gold Jewelry', 'gold-jewelry', '/uploads/cat-gold.jpg'),
('Diamond Jewelry', 'diamond-jewelry', '/uploads/cat-diamond.jpg'),
('Silver Jewelry', 'silver-jewelry', '/uploads/cat-silver.jpg'),
('Custom Jewelry', 'custom-jewelry', '/uploads/cat-custom.jpg'),
('Wedding Collection', 'wedding-collection', '/uploads/cat-wedding.jpg'),
('Luxury Watches', 'luxury-watches', '/uploads/cat-watches.jpg');

INSERT INTO products (category_id, name, description, short_description, material, weight, dimensions, stone, primary_image_url) VALUES 
(1, 'Aura Gold Necklace', 'An exquisite 18k gold necklace crafted for elegance.', '18k gold elegance.', '18k Gold', '15g', '45cm length', 'None', '/uploads/prod-gold-1.jpg'),
(2, 'Eternity Diamond Ring', 'Brilliant cut diamond ring set in platinum.', 'Brilliant cut diamond.', 'Platinum', '5g', 'Size 6,7,8', 'Diamond (2 carat)', '/uploads/prod-diamond-1.jpg'),
(6, 'Chronos Elite Watch', 'Precision engineered mechanical watch.', 'Precision mechanical watch.', 'Stainless Steel / Sapphire Glass', '150g', '42mm case', 'None', '/uploads/prod-watch-1.jpg');
