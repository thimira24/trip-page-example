import React from 'react';
import './Footer.css';
import { Send, Facebook, Instagram, Twitter, Youtube, Linkedin, ToggleLeft } from 'lucide-react';
import logo from '../../../images/Logo.png';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-container">

                {/* Newsletter Section */}
                <div className="footer-newsletter">
                    <div className="newsletter-text">
                        <h2>Never miss an adventure</h2>
                        <p>Get insider travel tips, exclusive deals, and be the first to know about new tours in your favourite cities.</p>
                    </div>
                    <div className="newsletter-form">
                        <div className="input-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" id="email" placeholder="" />
                        </div>
                        <button className="subscribe-btn">
                            <Send size={16} className="btn-icon" /> Subscribe to emails
                        </button>
                    </div>
                </div>

                {/* Links Section */}
                <div className="footer-links-wrapper">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src={logo} alt="Intrepid Travel" className="footer-logo-img" />
                        </div>
                        <div className="social-links">
                            <a href="#"><Facebook size={18} /></a>
                            <a href="#"><Instagram size={18} /></a>
                            <a href="#"><Twitter size={18} /></a>
                            <a href="#"><Youtube size={18} /></a>
                            <a href="#"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    <div className="footer-nav">
                        <div className="nav-column">
                            <h4>Booking</h4>
                            <ul>
                                <li><a href="#">My Booking</a></li>
                                <li><a href="#">Submit trip feedback</a></li>
                                <li><a href="#">Safe Travels Hub</a></li>
                                <li><a href="#">Travel Alerts</a></li>
                                <li><a href="#">Flexible bookings</a></li>
                                <li><a href="#">Booking conditions</a></li>
                                <li><a href="#">Agent login</a></li>
                            </ul>
                        </div>
                        <div className="nav-column">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">The Good Times</a></li>
                                <li><a href="#">Intrepid DMC</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Privacy policy</a></li>
                                <li className="with-icon"><a href="#"><ToggleLeft size={16} className="privacy-icon" /> Your privacy choices</a></li>
                                <li><a href="#">Intrepidtravel.com<br />accessibility statement</a></li>
                            </ul>
                        </div>
                        <div className="nav-column">
                            <h4>Contact</h4>
                            <ul>
                                <li><a href="#">Get in touch</a></li>
                                <li><a href="#">Live chat</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Reviews</a></li>
                                <li><a href="#">Newsroom</a></li>
                            </ul>
                        </div>
                        <div className="nav-column">
                            <h4>Purpose</h4>
                            <ul>
                                <li><a href="#">B Corp</a></li>
                                <li><a href="#">The Intrepid Foundation</a></li>
                                <li><a href="#">People</a></li>
                                <li><a href="#">Planet</a></li>
                                <li><a href="#">Wildlife</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <div className="bottom-links">
                        <span>© Urban Adventures 2025</span>
                        <a href="#">Privacy policy</a>
                        <a href="#">Terms</a>
                        <a href="#">Cookie settings</a>
                    </div>
                    <div className="currency-selector">
                        <span>🇺🇸 USD $</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
