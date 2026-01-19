import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about">
            {/* About Hero */}
            <section className="about-hero">
                <h1>About Our Mission</h1>
                <p>Empowering communities through sustainable development and support</p>
            </section>

            {/* Mission Section */}
            <section className="mission-section">
                <div className="container">
                    <div className="mission-content">
                        <div className="mission-text">
                            <h2>Our Mission</h2>
                            <p>
                                We are dedicated to creating lasting positive change in communities 
                                worldwide. Through collaborative efforts with volunteers, donors, 
                                and partners, we address critical social, economic, and environmental 
                                challenges.
                            </p>
                            <p>
                                Our approach combines grassroots community engagement with strategic 
                                programs that deliver measurable impact. We believe in transparency, 
                                accountability, and the power of collective action.
                            </p>
                        </div>
                        <div className="mission-image">
                            <div className="placeholder-image">🌍</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <div className="container">
                    <h2>Our Core Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <h3>💡 Innovation</h3>
                            <p>Constantly seeking new and better ways to serve communities</p>
                        </div>
                        <div className="value-card">
                            <h3>🤲 Integrity</h3>
                            <p>Operating with transparency and accountability in all we do</p>
                        </div>
                        <div className="value-card">
                            <h3>🌟 Impact</h3>
                            <p>Focusing on measurable, sustainable outcomes</p>
                        </div>
                        <div className="value-card">
                            <h3>🤝 Collaboration</h3>
                            <p>Working together with communities and partners</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="stats-section">
                <div className="container">
                    <h2>Our Impact in Numbers</h2>
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-number">10,000+</div>
                            <div className="stat-label">Lives Impacted</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">500+</div>
                            <div className="stat-label">Active Volunteers</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Projects Completed</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">25+</div>
                            <div className="stat-label">Countries Reached</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;