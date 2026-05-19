import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardShowcase.css';

export default function DashboardShowcase() {
  return (
    <section className="vigil-dashboard-showcase-section">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Column - Content */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="vigil-showcase-content" data-aos="fade-right" data-aos-duration="1000">
              
              <div className="vigil-showcase-pill">
                MADE FOR PARENTS. BUILT FOR SAFETY.
              </div>

              <h2 className="vigil-showcase-title">
                Because Their World <br />
                Is Online. <br />
                <span className="text-royal-blue">Your Peace of Mind <br />Should Be Too.</span>
              </h2>

              <p className="vigil-showcase-desc">
                The digital world is full of amazing opportunities—and hidden dangers. Vigil gives parents in the USA complete control, real-time insights, and instant alerts to <strong>keep their children safe, healthy, and happy online.</strong>
              </p>

              <div className="vigil-showcase-features-list">
                <div className="vigil-showcase-feature-item">
                  <div className="vigil-sfi-icon bg-light-blue">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2C3EC9" strokeWidth="2.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  </div>
                  <div className="vigil-sfi-text">
                    <h5>See Everything in Real-Time</h5>
                    <p>Monitor apps, websites, and screen activity as it happens.</p>
                  </div>
                </div>

                <div className="vigil-showcase-feature-item">
                  <div className="vigil-sfi-icon bg-light-red">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E53E3E" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  </div>
                  <div className="vigil-sfi-text">
                    <h5>Stop Problems Before They Start</h5>
                    <p>Instant alerts for risky content, strangers, and suspicious activity.</p>
                  </div>
                </div>

                <div className="vigil-showcase-feature-item">
                  <div className="vigil-sfi-icon bg-light-green">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38A169" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div className="vigil-sfi-text">
                    <h5>Always Know Where They Are</h5>
                    <p>Live GPS tracking & safe zone alerts for total peace of mind.</p>
                  </div>
                </div>
              </div>

              <Link to="/contact" className="vigil-showcase-cta">
                ✓ Start Protecting Your Child Today ➔
              </Link>
              
              <div className="vigil-showcase-trust-row">
                <div className="vstr-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.1 7.1a1 1 0 0 1-1.4 0l-2.83-2.83a1 1 0 0 1 0-1.4l7.1-7.1a6 6 0 0 1 9.36-7.94l-3.77 3.77z"/></svg>
                  <span>Easy Setup</span>
                </div>
                <div className="vstr-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                  <span>All Devices</span>
                </div>
                <div className="vstr-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  <span>100% Secure</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column - Clean Image Showcase */}
          <div className="col-lg-6 position-relative">
            <div className="vigil-image-showcase-container" data-aos="fade-left" data-aos-duration="1000">
              <img 
                src="/myimg/image copy 6.png" 
                alt="Vigil Parents and Child Safety Mockup" 
                className="vigil-showcase-main-img img-fluid"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
