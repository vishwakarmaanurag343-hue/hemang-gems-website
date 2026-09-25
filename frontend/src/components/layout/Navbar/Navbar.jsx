import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.scss';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Make navbar solid on pages other than home by default
  const isHome = location.pathname === '/';
  const navClass = `navbar ${scrolled || !isHome ? 'scrolled' : ''}`;

  return (
    <nav className={navClass}>
      <div className="nav-container">
        
        {/* Left Side: Logo */}
        <Link to="/" className="logo">
          <img src="/logo.png" alt="HG Logo" style={{ height: '40px', width: 'auto' }} />
          <span>Hemang Gems</span>
        </Link>
        
        {/* Center: Navigation Links in a Pill */}
        <div className="nav-pill">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          <Link to="/catalogue" className={location.pathname === '/catalogue' ? 'active' : ''}>Catalogue</Link>
        </div>

        {/* Right Side: Contact Page Button & Mobile Toggle */}
        <div className="right-section">
          <Link to="/contact" className="contact-btn">
            Contact
          </Link>

          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={location.pathname === '/about' ? 'active' : ''}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/catalogue" 
            className={location.pathname === '/catalogue' ? 'active' : ''}
            onClick={() => setMobileMenuOpen(false)}
          >
            Catalogue
          </Link>
          <Link 
            to="/contact" 
            className={`contact-mobile-link ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
