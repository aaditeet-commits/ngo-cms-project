import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Making a Difference Together</h1>
                    <p>Join us in our mission to create positive change in communities worldwide</p>
                    <div className="hero-buttons">
                        <Link to="/register" className="btn btn-primary">Get Involved</Link>
                        <Link to="/about" className="btn btn-secondary">Learn More</Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <div className="container">
                    <h2>What We Do</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🤝</div>
                            <h3>Volunteer Programs</h3>
                            <p>Join our community of volunteers making real impact in local communities</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">💝</div>
                            <h3>Donation Management</h3>
                            <p>Transparent donation tracking and allocation to ensure maximum impact</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📊</div>
                            <h3>Impact Tracking</h3>
                            <p>See the real-time impact of your contributions and volunteer work</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="cta">
                <div className="container">
                    <h2>Ready to Make a Difference?</h2>
                    <p>Join thousands of volunteers and donors creating positive change</p>
                    <Link to="/register" className="btn btn-large">Join Us Today</Link>
                </div>
            </section>
        </div>
    );
}

export default Home;