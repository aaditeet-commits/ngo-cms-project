import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    {/* About Section */}
                    <div className="footer-section">
                        <h3>NGO CMS</h3>
                        <p>
                            Making a difference together through sustainable 
                            development and community support.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/register">Get Involved</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <ul>
                            <li>📍 123 NGO Street, Mumbai</li>
                            <li>📧 info@ngocms.org</li>
                            <li>📞 +91 123 456 7890</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="footer-section">
                        <h4>Follow Us</h4>
                        <div className="social-links">
                            <a href="#" className="social-icon">📘</a>
                            <a href="#" className="social-icon">🐦</a>
                            <a href="#" className="social-icon">📸</a>
                            <a href="#" className="social-icon">💼</a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p>&copy; 2026 NGO CMS. All rights reserved. | Developed for Social Good</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;