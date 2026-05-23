import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardShowcase.css';

export default function DashboardShowcase() {
  return (
    <section className="vigil-dashboard-showcase-section">
      <div className="container">
        <div className="row align-items-stretch">
          
          {/* Left Column - Clean Image Showcase */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="vigil-image-showcase-container position-relative" data-aos="fade-right" data-aos-duration="1000">
              <img 
                src="/myimg/image copy 6.png" 
                alt="Vigil Parents and Child Safety Mockup" 
                className="vigil-showcase-main-img img-fluid"
              />

              {/* Floating Widget 1: Suspicious Alert */}
              <div className="vigil-float-card vigil-card-showcase-alert">
                <div className="vigil-fc-icon bg-alert-red">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="13"/>
                    <circle cx="12" cy="17" r="1.5"/>
                  </svg>
                </div>
                <div className="vigil-fc-content">
                  <strong>Suspicious Alert!</strong>
                  <span>Potential inappropriate content detected 2 min ago</span>
                </div>
              </div>

              {/* Floating Widget 2: Live Location */}
              <div className="vigil-float-card vigil-card-showcase-location">
                <div className="vigil-fc-icon bg-alert-green">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="vigil-fc-content">
                  <strong>Live Location</strong>
                  <span>Home • 2 min ago</span>
                </div>
              </div>

              {/* Floating Widget 3: Screen Time */}
              <div className="vigil-float-card vigil-card-showcase-screentime">
                <div className="vigil-fc-icon bg-alert-purple">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div className="vigil-fc-content">
                  <strong>Screen Time</strong>
                  <span>2h 15m Today</span>
                </div>
              </div>

              {/* Floating Widget 4: New Message */}
              <div className="vigil-float-card vigil-card-showcase-message">
                <div className="vigil-fc-icon bg-alert-blue">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <div className="vigil-fc-content">
                  <strong>New Message</strong>
                  <span>On Social App</span>
                  <span className="fc-time">Just now</span>
                </div>
              </div>

              {/* Floating Widget 5: Trust Badge (Stacked Layout) */}
              <div className="vigil-showcase-trust-badge">
                <div className="vstb-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#39D353" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <polyline points="9 12 11 14 15 10"/>
                  </svg>
                </div>
                <div className="vstb-content">
                  <div className="vstb-text-top">Trusted by</div>
                  <div className="vstb-text-mid">50,000+</div>
                  <div className="vstb-text-bot">Families Worldwide</div>
                  <div className="vstb-stars">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-lg-6 ps-lg-5 position-relative">
            <div className="vigil-showcase-content" data-aos="fade-left" data-aos-duration="1000">
              
              <div className="vigil-showcase-pill">
                MADE FOR PARENTS. BUILT FOR SAFETY.
              </div>

              <div className="vigil-title-wrapper">
                <h2 className="vigil-showcase-title">
                  Because Their World<br />
                  Is Online.<br />
                  <span className="text-royal-blue">Your Peace of Mind<br />Should Be Too.</span>
                </h2>
                
                {/* Handwritten Overlay positioned absolute to the wrapper */}
                <div className="vigil-handwritten-overlay">
                  Protect today, empower tomorrow! ♡
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="vigil-hw-arrow">
                    <path d="M7 6C7 6 12 16 20 18" />
                    <polyline points="15 20 21 19 18 13" />
                  </svg>
                </div>
              </div>

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

                <div className="vigil-showcase-feature-item">
                  <div className="vigil-sfi-icon bg-light-orange">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DD6B20" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <div className="vigil-sfi-text">
                    <h5>Build Healthy Digital Habits</h5>
                    <p>Set screen time limits and encourage a balanced lifestyle.</p>
                  </div>
                </div>
              </div>

              <Link to="/pricing" className="vigil-showcase-cta">
                <span className="vigil-cta-icon-left">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <polyline points="9 12 11 14 15 10"/>
                  </svg>
                </span>
                <span>Start Protecting Your Child Today</span>
                <span className="vigil-cta-icon-right">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/>
                    <path d="M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </Link>
              
              <div className="vigil-showcase-trust-row">
                <div className="vstr-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.1 7.1a1 1 0 0 1-1.4 0l-2.83-2.83a1 1 0 0 1 0-1.4l7.1-7.1a6 6 0 0 1 9.36-7.94l-3.77 3.77z"/></svg>
                  <span>Easy Setup in Minutes</span>
                </div>
                <div className="vstr-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                  <span>Works on All Devices</span>
                </div>
                <div className="vstr-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  <span>100% Private & Secure</span>
                </div>
                <div className="vstr-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
                  <span>Made for USA Families</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="vigil-showcase-bottom-banner">
          <div className="vsbb-left">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2C3EC9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <span>Peace of Mind. Stronger Connections. A Safer Future.</span>
          </div>
          <div className="vsbb-right">
            That's the Power of Vigil. ♡
          </div>
        </div>

      </div>
    </section>
  );
}
