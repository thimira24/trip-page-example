import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { Heart, CircleUser, Phone } from 'lucide-react';
import Logo from '../../../images/Logo.png';

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'itinerary', label: 'Itinerary' },
  { id: 'meeting-point', label: "Where we'll meet" },
  { id: 'inclusions', label: 'Inclusions' },
  { id: 'departure-dates', label: 'Departures' },
  { id: 'faq', label: 'FAQ' },
  { id: 'reviews', label: 'Reviews' },
];

const Navbar = () => {
  const [showSubNav, setShowSubNav] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('trip-hero');
      if (heroEl) {
        const heroBottom = heroEl.getBoundingClientRect().bottom;
        setShowSubNav(heroBottom < 0);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionEls = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean);
    if (sectionEls.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    sectionEls.forEach(el => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 56;
      const y = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Main navbar — NOT sticky, scrolls with the page */}
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/" aria-label="Home">
            <img src={Logo} alt="Intrepid Logo" className="navbar-logo" />
          </a>
        </div>
        <div className="navbar-center">
          <a href="#destinations" className="nav-item"><span>Destinations</span></a>
          <a href="#ways-to-travel" className="nav-item"><span>Ways to travel</span></a>
          <a href="#deals" className="nav-item"><span>Deals</span></a>
          <a href="#about" className="nav-item"><span>About</span></a>
        </div>
        <div className="navbar-right">
          <a href="#favorites" className="action-item" aria-label="Favorites"><Heart size={20} strokeWidth={2} /></a>
          <a href="#account" className="action-item" aria-label="Account"><CircleUser size={20} strokeWidth={2} /></a>
          <a href="#contact" className="action-item" aria-label="Contact"><Phone size={20} strokeWidth={2} /></a>
        </div>
      </nav>

      {/* Sub-navbar — sticky at top, appears when scrolled past hero */}
      <div className={`sub-navbar ${showSubNav ? 'visible' : ''}`}>
        <div className="sub-navbar-inner">
          <div className="sub-navbar-links">
            {SECTIONS.map(section => (
              <button
                key={section.id}
                className={`sub-nav-link ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </button>
            ))}
          </div>
          <div className="sub-navbar-trip-info">
            <span className="sub-nav-trip-name">Bali's hidden rice terraces</span>
            <span className="sub-nav-price">From AUD <strong>$2,499</strong></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
