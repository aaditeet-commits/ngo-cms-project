import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you would send this to your backend
        console.log('Contact form submitted:', formData);
        setSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', message: '' });
            setSubmitted(false);
        }, 3000);
    };

    return (
        <div className="contact">
            {/* Contact Hero */}
            <section className="contact-hero">
                <h1>Get In Touch</h1>
                <p>We'd love to hear from you. Send us a message!</p>
            </section>

            {/* Contact Content */}
            <section className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <div className="contact-form-section">
                            <h2>Send us a Message</h2>
                            
                            {submitted && (
                                <div className="success-message">
                                    Thank you! Your message has been sent successfully.
                                </div>
                            )}
                            
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label>Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Subject *</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="Message Subject"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Message *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        placeholder="Your message here..."
                                    />
                                </div>

                                <button type="submit" className="submit-btn">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info-section">
                            <h2>Contact Information</h2>
                            
                            <div className="info-card">
                                <div className="info-icon">📍</div>
                                <div className="info-content">
                                    <h3>Address</h3>
                                    <p>123 NGO Street<br/>Mumbai, Maharashtra<br/>India</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">📧</div>
                                <div className="info-content">
                                    <h3>Email</h3>
                                    <p>info@ngocms.org<br/>support@ngocms.org</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">📞</div>
                                <div className="info-content">
                                    <h3>Phone</h3>
                                    <p>+91 123 456 7890<br/>+91 098 765 4321</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">⏰</div>
                                <div className="info-content">
                                    <h3>Working Hours</h3>
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM<br/>Saturday: 10:00 AM - 4:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;