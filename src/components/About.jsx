import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true
      });
    }
  }, []);

  return (
    <div className="about-page-wrapper">
      <Helmet>
        <title>About Vigil1 – Child Safety &amp; Family Monitoring App USA</title>
        <meta name="description" content="Learn how Vigil1 helps American parents protect children online with trusted family monitoring and digital safety solutions across the USA." />
      </Helmet>
      {/* 1. HERO SECTION */}
      <section className="about-hero-section">
        <div className="about-container">
          <div className="row align-items-center">
            {/* Left text column */}
            <div className="col-lg-7 col-xl-6" data-aos="fade-right">
              <div className="about-hero-text-wrap">
                <span className="about-badge">ABOUT VIGIL</span>
                <h1 className="about-hero-title">
                  We’re on a mission <br />
                  to make every child <br />
                  <span className="highlight">safer online.</span>
                </h1>
                <div className="accent-line"></div>
                <p className="about-hero-paragraph">
                  Vigil is an AI-powered kids monitoring system that helps parents protect their children from online threats, track real-time activity, and build a safer digital future.
                </p>
                <div className="about-hero-buttons">
                  <Link to="/contact" className="btn-vigil-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    Our Mission
                  </Link>
                  <a href="https://www.youtube.com/watch?v=zE_WFiHnSlY" target="_blank" rel="noopener noreferrer" className="btn-vigil-secondary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    Watch Our Story
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FLOATING STATS SECTION */}
      <section className="stats-overlap-container">
        <div className="about-container">
          <div className="stats-overlap-card" data-aos="fade-up">
            <div className="row g-4 align-items-center">
              {/* Column 1: Total Clients */}
              <div className="col-md-6 col-lg-3 stat-col">
                <div className="stat-item">
                  <div className="stat-item-header">
                    <div className="stat-icon-wrap stat-icon-blue">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="7"></circle>
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                      </svg>
                    </div>
                    <h2 className="stat-number blue">12K+</h2>
                  </div>
                  <h3 className="stat-title">Total Clients</h3>
                  <p className="stat-desc">We serve 12,000+ clients with proven results.</p>
                </div>
              </div>

              {/* Column 2: Families Protected */}
              <div className="col-md-6 col-lg-3 stat-col">
                <div className="stat-item">
                  <div className="stat-item-header">
                    <div className="stat-icon-wrap stat-icon-green">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <h2 className="stat-number green">50K+</h2>
                  </div>
                  <h3 className="stat-title">Families Protected</h3>
                  <p className="stat-desc">Trusted by 50,000+ families around the world.</p>
                </div>
              </div>

              {/* Column 3: Safety Commitment */}
              <div className="col-md-6 col-lg-3 stat-col">
                <div className="stat-item">
                  <div className="stat-item-header">
                    <div className="stat-icon-wrap stat-icon-orange">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <h2 className="stat-number orange">99.9%</h2>
                  </div>
                  <h3 className="stat-title">Safety Commitment</h3>
                  <p className="stat-desc">We are committed to your child's digital safety.</p>
                </div>
              </div>

              {/* Column 4: Countries */}
              <div className="col-md-6 col-lg-3 stat-col">
                <div className="stat-item">
                  <div className="stat-item-header">
                    <div className="stat-icon-wrap stat-icon-blue">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                    </div>
                    <h2 className="stat-number blue">120+</h2>
                  </div>
                  <h3 className="stat-title">Countries</h3>
                  <p className="stat-desc">Helping parents protect kids in 120+ countries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY SECTION */}
      <section className="about-story-section">
        <div className="about-container">
          <div className="row align-items-center">
            {/* Left narrative content */}
            <div className="col-lg-6" data-aos="fade-right">
              <span className="about-badge story-badge">OUR STORY</span>
              <h2 className="story-heading">
                Built by parents,<br />
                for parents.
              </h2>
              <div className="accent-line"></div>
              <p className="story-paragraph">
                Vigil was founded by parents who experienced firsthand how quickly the internet can become a dangerous place for kids. We set out to build the tool we wished we had — and what we built changed everything.
              </p>
              <p className="story-paragraph">
                Today, Vigil is used by thousands of families worldwide. We combine cutting-edge AI threat detection with an effortlessly simple interface so every parent can take action — not just tech-savvy ones.
              </p>
            </div>

            {/* Right dark blue summary card */}
            <div className="col-lg-6" data-aos="fade-left">
              <div className="story-dark-card">
                {/* Upper segment */}
                <div className="story-card-top">
                  <div className="story-card-top-icon">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                  </div>
                  <div className="story-card-top-content">
                    <h4>Our Mission</h4>
                    <p>To create a safer environment for every child by combining technology, innovation, and care.</p>
                  </div>
                </div>

                <div className="story-card-divider"></div>

                {/* Bottom 3 columns grid */}
                <div className="story-card-grid">
                  <div className="story-grid-item">
                    <div className="story-grid-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </div>
                    <h5 className="story-grid-title">Our Vision</h5>
                    <p className="story-grid-desc">A world where every child can explore, learn, and grow online — safely.</p>
                  </div>

                  <div className="story-grid-item">
                    <div className="story-grid-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                        <line x1="4" y1="22" x2="4" y2="15"></line>
                      </svg>
                    </div>
                    <h5 className="story-grid-title">Our Goal</h5>
                    <p className="story-grid-desc">Empower parents with smart insights to prevent risks before they happen.</p>
                  </div>

                  <div className="story-grid-item">
                    <div className="story-grid-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        <path d="M12 14.5c.3-.3.8-.7 1.3-1.2.7-.7 1.2-1.4 1.2-2.1 0-1.1-.9-2-2-2s-2 .9-2 2c0 .7.5 1.4 1.2 2.1.5.5 1 1 1.3 1.2z"></path>
                      </svg>
                    </div>
                    <h5 className="story-grid-title">Our Promise</h5>
                    <p className="story-grid-desc">Your child's safety comes first. Always. No exceptions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR CORE VALUES SECTION */}
      <section className="about-values-section">
        <div className="about-container">
          <div className="about-values-header" data-aos="fade-up">
            <span className="about-badge values-badge">WHAT DRIVES US</span>
            <h2 className="about-values-title">Our Core Values</h2>
            <div className="accent-line center"></div>
          </div>

          <div className="values-flex-row" data-aos="fade-up">
            {/* Value 1: Safety First */}
            <div className="value-card">
              <div className="value-icon-wrap">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h4 className="value-title">Safety First</h4>
              <p className="value-desc">We put children's safety above everything else.</p>
            </div>

            {/* Value 2: Privacy & Trust */}
            <div className="value-card">
              <div className="value-icon-wrap">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h4 className="value-title">Privacy & Trust</h4>
              <p className="value-desc">We respect your privacy and build with transparency.</p>
            </div>

            {/* Value 3: Innovation */}
            <div className="value-card">
              <div className="value-icon-wrap">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .6 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                  <line x1="9" y1="18" x2="15" y2="18"></line>
                  <line x1="10" y1="22" x2="14" y2="22"></line>
                </svg>
              </div>
              <h4 className="value-title">Innovation</h4>
              <p className="value-desc">We use AI and smart technology to stay ahead of online threats.</p>
            </div>

            {/* Value 4: Empathy */}
            <div className="value-card">
              <div className="value-icon-wrap">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h4 className="value-title">Empathy</h4>
              <p className="value-desc">We understand parents because we are parents too.</p>
            </div>

            {/* Value 5: Global Impact */}
            <div className="value-card">
              <div className="value-icon-wrap">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h4 className="value-title">Global Impact</h4>
              <p className="value-desc">We're creating a safer digital world for families everywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CEO TESTIMONIAL */}
      <section className="about-testimonial-section">
        <div className="about-container">
          <div className="testimonial-card-container" data-aos="fade-up">
            <div className="row g-0">
              {/* Left Portrait Column */}
              <div className="col-lg-5 testimonial-img-col">
                <img 
                  src="/assets/images/about-us/author.png" 
                  alt="James Bennett - Founder & CEO of Vigil" 
                  className="testimonial-img"
                />
              </div>

              {/* Right Quote Column */}
              <div className="col-lg-7 testimonial-content-col">
                <div className="testimonial-quote-icon">“</div>
                
                <p className="testimonial-text">
                  As a father, I know the worry never goes away. That's why we built Vigil — to give every parent peace of mind and every child the freedom to explore the digital world safely.
                </p>

                <div className="testimonial-signature">James Bennett</div>
                
                <h4 className="testimonial-author-name">James Bennett</h4>
                <p className="testimonial-author-title">Founder & CEO, Vigil</p>

                {/* Translucent overlay watermark shield */}
                <div className="testimonial-watermark">
                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <circle cx="12" cy="11" r="3"></circle>
                    <path d="M12 22V12"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER CTA SECTION */}
      <section className="about-cta-section">
        <div className="about-cta-world-dots"></div>
        <div className="about-container">
          <div className="about-cta-wrap">
            <div className="about-cta-icon-wrap">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            
            <h2 className="about-cta-title">Let's build a safer digital future together.</h2>
            <p className="about-cta-desc">Join thousands of parents who trust Vigil to protect what matters most.</p>
            
            <Link to="/contact" className="btn-vigil-green">
              Get Started Today
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
