import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeSections() {
  return (
    <>
      {/* --- SECTION 1: GET STARTED IN MINUTES --- */}
      <section className="vigil-get-started-section">
        <div className="container">
          <div className="vigil-section-title-wrap">
            <span className="vigil-section-tag">Get Started in Minutes</span>
            <h2 className="vigil-section-main-title">How to Sign Up with Vigil & Get It on Your Child's Phone</h2>
            <p className="vigil-section-desc">
              Vigil is easy to set up and even easier to use. Follow these simple steps to start protecting your child today.
            </p>
          </div>

          <div className="vigil-steps-container">
            {/* Step 1 */}
            <div className="vigil-step-card-wrapper">
              <div className="vigil-step-card">
                <div className="vigil-step-badge">1</div>
                <div className="vigil-mockup-graphic">
                  <div className="vigil-step-signup-mock">
                    <div style={{ color: '#001A3D', fontWeight: '800', fontSize: '10px', marginBottom: '8px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#3F26D9" />
                        <path d="M12 6V13L16 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                      VIGIL
                    </div>
                    <div className="vigil-step-input" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', color: '#718096' }}>
                      parent@email.com
                    </div>
                    <div className="vigil-step-input" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', color: '#718096' }}>
                      ••••••••••••
                    </div>
                    <button className="vigil-step-btn" type="button" disabled>Sign Up</button>
                  </div>
                </div>
                <h5 className="vigil-step-title">Create Your Account</h5>
                <p className="vigil-step-desc">Sign up in less than 2 minutes with your email. No credit card required.</p>
                <div className="vigil-step-pill">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#3F26D9" />
                    <path d="M7.5 12.5L10.5 15.5L16.5 9.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  100% Secure & Private
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="vigil-step-card-wrapper">
              <div className="vigil-step-card">
                <div className="vigil-step-badge">2</div>
                <div className="vigil-mockup-graphic">
                  <div className="vigil-step-device-mock">
                    <h6>Add Child</h6>
                    <div className="vigil-step-label">Child's Name</div>
                    <div className="vigil-step-input" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', color: '#001A3D', fontWeight: '700' }}>
                      John
                    </div>
                    <div className="vigil-step-label">Device Type</div>
                    <div className="vigil-step-input" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#001A3D', fontWeight: '700' }}>
                      Android <span>▼</span>
                    </div>
                    <button className="vigil-step-btn" type="button" style={{ background: '#39D353' }} disabled>Continue</button>
                  </div>
                </div>
                <h5 className="vigil-step-title">Add Your Child's Device</h5>
                <p className="vigil-step-desc">Enter basic details about your child and the device they use.</p>
                <div className="vigil-step-pill">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 16H13V18H11V16ZM11 6H13V14H11V6Z" fill="#3F26D9" />
                  </svg>
                  Works on Android & iOS
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="vigil-step-card-wrapper">
              <div className="vigil-step-card">
                <div className="vigil-step-badge">3</div>
                <div className="vigil-mockup-graphic">
                  <div className="vigil-step-qr-mock">
                    <h6>Scan to Download</h6>
                    <div className="vigil-qr-code">
                      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2H9V9H2V2ZM4 4V7H7V4H4ZM2 15H9V22H2V15ZM4 17V20H7V17H4ZM15 2H22V9H15V2ZM17 4V7H20V4H17ZM15 15H18V18H15V15ZM18 18H20V20H18V18ZM20 15H22V18H20V15ZM15 20H18V22H15V20ZM18 20H20V22H18V20ZM20 20H22V22H20V20Z" fill="#001A3D" />
                      </svg>
                    </div>
                    <span className="vigil-qr-link">Share install link</span>
                  </div>
                </div>
                <h5 className="vigil-step-title">Install Vigil on Their Phone</h5>
                <p className="vigil-step-desc">Follow the simple instructions to install Vigil on your child's device remotely.</p>
                <div className="vigil-step-pill">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16 13H13V16C13 16.55 12.55 17 12 17C11.45 17 11 16.55 11 16V13H8C7.45 13 7 12.55 7 12C7 11.45 7.45 11 8 11H11V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V11H16C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13Z" fill="#3F26D9" />
                  </svg>
                  Quick & Easy Setup
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="vigil-step-card-wrapper">
              <div className="vigil-step-card">
                <div className="vigil-step-badge">4</div>
                <div className="vigil-mockup-graphic">
                  <div className="vigil-step-connected-mock">
                    <div className="vigil-check-circle">✓</div>
                    <span style={{ fontSize: '10px', fontWeight: '800', color: '#001A3D' }}>Device Connected</span>
                    <ul className="vigil-step-list-mini">
                      <li><span>App Logs</span> <span className="vigil-mini-check">Active</span></li>
                      <li><span>Live GPS</span> <span className="vigil-mini-check">Active</span></li>
                      <li><span>AI Alerts</span> <span className="vigil-mini-check">Active</span></li>
                    </ul>
                  </div>
                </div>
                <h5 className="vigil-step-title">Device Connected</h5>
                <p className="vigil-step-desc">Once installed, the device connects securely to your Vigil parent dashboard.</p>
                <div className="vigil-step-pill">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#3F26D9" />
                  </svg>
                  Real-time Protection
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="vigil-step-card-wrapper">
              <div className="vigil-step-card">
                <div className="vigil-step-badge">5</div>
                <div className="vigil-mockup-graphic">
                  <div className="vigil-step-dash-mock">
                    <div className="vigil-mock-lap">
                      <div className="vigil-mock-lap-title">Vigil Parents</div>
                      <div className="vigil-mock-lap-item">✓ 24 Alerts today</div>
                      <div className="vigil-mock-lap-item">✓ Live Location: Home</div>
                    </div>
                    <div className="vigil-mock-mob">
                      <div className="vigil-mock-mob-icon">✓</div>
                    </div>
                  </div>
                </div>
                <h5 className="vigil-step-title">You're All Set!</h5>
                <p className="vigil-step-desc">Start monitoring activity, get smart alerts, view location, and keep your child safe 24/7.</p>
                <div className="vigil-step-pill">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 17.5 3C20.58 3 23 5.42 23 8.5C23 12.28 19.6 15.36 14.45 20.04L12 21.35Z" fill="#3F26D9" />
                  </svg>
                  Peace of Mind, Always
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Banner Row */}
          <div className="vigil-trust-banner">
            <div className="vigil-trust-banner-left">
              <svg className="vigil-trust-shield-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L3 5V11C3 16.55 6.84 21.74 12 22C17.16 21.74 21 16.55 21 11V5L12 2Z" fill="#3F26D9" />
                <path d="M9 11L11 13L15 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p>Thousands of families across the USA trust Vigil every single day to protect what matters most.</p>
            </div>
            <div className="vigil-trust-divider"></div>
            <div className="vigil-trust-banner-stats">
              {/* Trust Metric 1 */}
              <div className="vigil-trust-badge-item">
                <div className="vigil-trust-badge-icon-box" style={{ backgroundColor: '#F0FFF4', color: '#38A169' }}>✓</div>
                <span>Bank-Level Security</span>
                <p>256-Bit Encryption</p>
              </div>
              {/* Trust Metric 2 */}
              <div className="vigil-trust-badge-item">
                <div className="vigil-trust-badge-icon-box" style={{ backgroundColor: '#FFF5F5', color: '#E53E3E' }}>🔒</div>
                <span>100% Private</span>
                <p>Data Confidentiality</p>
              </div>
              {/* Trust Metric 3 */}
              <div className="vigil-trust-badge-item">
                <div className="vigil-trust-badge-icon-box" style={{ backgroundColor: '#EBF8FF', color: '#3182CE' }}>☁</div>
                <span>Secure Cloud</span>
                <p>Real-Time Sync</p>
              </div>
              {/* Trust Metric 4 */}
              <div className="vigil-trust-badge-item">
                <div className="vigil-trust-badge-icon-box" style={{ backgroundColor: '#EDF2F7', color: '#4A5568' }}>🇺🇸</div>
                <span>Made in USA</span>
                <p>Proudly US Owned</p>
              </div>
              {/* Trust Metric 5 */}
              <div className="vigil-trust-badge-item">
                <div className="vigil-trust-badge-icon-box" style={{ backgroundColor: '#F0F4FF', color: '#3F26D9' }}>🎧</div>
                <span>24/7 Expert Support</span>
                <p>US Based Specialists</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: TRUSTED BY FAMILIES ACROSS THE USA --- */}
      <section className="vigil-trusted-parents-section">
        <div className="container">
          <div className="vigil-section-title-wrap text-center">
            <div className="vigil-stories-badge mx-auto">
              <span role="img" aria-label="US Flag" style={{ fontSize: '16px' }}>🇺🇸</span> Real Parents. Real Stories. Real Protection.
            </div>
            <h2 className="vigil-section-main-title">
              Trusted by Families Across the <span className="vigil-gradient-text-usa">USA</span>
            </h2>
            <p className="vigil-section-desc mx-auto">
              See how Vigil's AI-powered protection helps parents across the country keep their kids safe, informed, and one step ahead.
            </p>
          </div>

          <div className="vigil-testimonials-row-5col">
            {/* Card 1: AI-Powered Protection */}
            <div className="vigil-ai-sidebar-card">
              <div className="vigil-ai-sidebar-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ color: '#E9D8FD', fontSize: '18px' }}>✦</span>
                  <span className="vigil-ai-glow-tag" style={{ margin: 0 }}>AI-Powered</span>
                </div>
                <h4>AI-Powered Protection</h4>
                <p>Real-time. Smart. Always On.</p>
              </div>
              <div className="vigil-ai-list">
                <div className="vigil-ai-list-item">
                  <div className="vigil-ai-list-icon">🤖</div>
                  <div className="vigil-ai-list-content">
                    <h6>AI Threat Detection <span className="vigil-ai-list-mini-badge">AI</span></h6>
                    <p>Detects cyberbullying, dangerous content & online predators in real time.</p>
                  </div>
                </div>
                <div className="vigil-ai-list-item">
                  <div className="vigil-ai-list-icon">💬</div>
                  <div className="vigil-ai-list-content">
                    <h6>Smart Chat Analysis <span className="vigil-ai-list-mini-badge">AI</span></h6>
                    <p>AI reads between the lines to identify concerning conversations or emotional distress.</p>
                  </div>
                </div>
                <div className="vigil-ai-list-item">
                  <div className="vigil-ai-list-icon">📍</div>
                  <div className="vigil-ai-list-content">
                    <h6>Behavior & Location <span className="vigil-ai-list-mini-badge">AI</span></h6>
                    <p>AI learns routines & flags unusual activities or risky locations instantly.</p>
                  </div>
                </div>
                <div className="vigil-ai-list-item">
                  <div className="vigil-ai-list-icon">📊</div>
                  <div className="vigil-ai-list-content">
                    <h6>Weekly AI Reports <span className="vigil-ai-list-mini-badge">AI</span></h6>
                    <p>Get easy-to-understand insights with AI summaries & actionable recommendations.</p>
                  </div>
                </div>
              </div>
              <div className="vigil-ai-sidebar-footer">
                <span style={{ fontSize: '20px' }}>🧠</span>
                <p>Vigil's AI works 24/7 so you don't have to. Smarter protection for a safer digital world.</p>
              </div>
            </div>

            {/* Card 2: Jessica M. */}
            <div className="vigil-testimony-card">
              <div className="vigil-testimony-header">
                <div className="vigil-testimony-author-group">
                  <img className="vigil-testimony-photo" src="/myimg/parent1.png" alt="Jessica M." />
                  <div>
                    <h6 className="vigil-testimony-author-name">Jessica M.</h6>
                    <div className="vigil-testimony-pin">
                      <span role="img" aria-label="Pin">📍</span> Austin, TX
                    </div>
                  </div>
                </div>
                <span className="vigil-quote-mark">“</span>
              </div>
              <div className="vigil-stars-row">★★★★★</div>
              <p className="vigil-testimony-quote">
                "Vigil's AI detected a concerning conversation in my son's chat before it escalated. I got an alert right away and was able to talk to him. I honestly don't know what I'd do without it."
              </p>
              <div style={{ marginTop: 'auto' }}>
                <span className="vigil-use-case-btn">Use Case</span>
                <div className="vigil-context-bar">
                  <div className="vigil-context-icon">💬</div>
                  <p>AI Chat Analysis detected potential cyberbullying and flagged it instantly.</p>
                </div>
              </div>
              <div className="vigil-testimony-footer">
                <span className="vigil-testimony-relation">Mother of 2</span>
                <div className="vigil-testimony-flag-pill">
                  <span role="img" aria-label="US Flag">🇺🇸</span> USA
                </div>
              </div>
            </div>

            {/* Card 3: Mark R. */}
            <div className="vigil-testimony-card">
              <div className="vigil-testimony-header">
                <div className="vigil-testimony-author-group">
                  <img className="vigil-testimony-photo" src="/myimg/parent2.png" alt="Mark R." />
                  <div>
                    <h6 className="vigil-testimony-author-name">Mark R.</h6>
                    <div className="vigil-testimony-pin">
                      <span role="img" aria-label="Pin">📍</span> Denver, CO
                    </div>
                  </div>
                </div>
                <span className="vigil-quote-mark">“</span>
              </div>
              <div className="vigil-stars-row">★★★★★</div>
              <p className="vigil-testimony-quote">
                "The location AI is spot on! I get notified the moment my daughter leaves school or enters an unfamiliar area. It gives me real peace of mind while she's on the go."
              </p>
              <div style={{ marginTop: 'auto' }}>
                <span className="vigil-use-case-btn">Use Case</span>
                <div className="vigil-context-bar">
                  <div className="vigil-context-icon">📍</div>
                  <p>AI Location Intelligence tracked routines and alerted unusual deviations.</p>
                </div>
              </div>
              <div className="vigil-testimony-footer">
                <span className="vigil-testimony-relation">Father of 1</span>
                <div className="vigil-testimony-flag-pill">
                  <span role="img" aria-label="US Flag">🇺🇸</span> USA
                </div>
              </div>
            </div>

            {/* Card 4: Amanda L. */}
            <div className="vigil-testimony-card">
              <div className="vigil-testimony-header">
                <div className="vigil-testimony-author-group">
                  <img className="vigil-testimony-photo" src="/myimg/parent3.png" alt="Amanda L." />
                  <div>
                    <h6 className="vigil-testimony-author-name">Amanda L.</h6>
                    <div className="vigil-testimony-pin">
                      <span role="img" aria-label="Pin">📍</span> Chicago, IL
                    </div>
                  </div>
                </div>
                <span className="vigil-quote-mark">“</span>
              </div>
              <div className="vigil-stars-row">★★★★★</div>
              <p className="vigil-testimony-quote">
                "The weekly AI report is a game changer. It shows me what's trending, what to watch out for, and even gives tips. I actually look forward to reading it every Sunday!"
              </p>
              <div style={{ marginTop: 'auto' }}>
                <span className="vigil-use-case-btn">Use Case</span>
                <div className="vigil-context-bar">
                  <div className="vigil-context-icon">📊</div>
                  <p>AI Weekly Report summarized screen time, app usage & content risks.</p>
                </div>
              </div>
              <div className="vigil-testimony-footer">
                <span className="vigil-testimony-relation">Mother of 3</span>
                <div className="vigil-testimony-flag-pill">
                  <span role="img" aria-label="US Flag">🇺🇸</span> USA
                </div>
              </div>
            </div>

            {/* Card 5: Daniel K. */}
            <div className="vigil-testimony-card">
              <div className="vigil-testimony-header">
                <div className="vigil-testimony-author-group">
                  <img className="vigil-testimony-photo" src="/myimg/parent4.png" alt="Daniel K." />
                  <div>
                    <h6 className="vigil-testimony-author-name">Daniel K.</h6>
                    <div className="vigil-testimony-pin">
                      <span role="img" aria-label="Pin">📍</span> Seattle, WA
                    </div>
                  </div>
                </div>
                <span className="vigil-quote-mark">“</span>
              </div>
              <div className="vigil-stars-row">★★★★★</div>
              <p className="vigil-testimony-quote">
                "Vigil's AI blocked a harmful website my son tried to visit. It's like having a digital guardian watching over him 24/7. Worth every penny."
              </p>
              <div style={{ marginTop: 'auto' }}>
                <span className="vigil-use-case-btn">Use Case</span>
                <div className="vigil-context-bar">
                  <div className="vigil-context-icon">🛡️</div>
                  <p>AI Web Protection blocked access to explicit content in real time.</p>
                </div>
              </div>
              <div className="vigil-testimony-footer">
                <span className="vigil-testimony-relation">Father of 2</span>
                <div className="vigil-testimony-flag-pill">
                  <span role="img" aria-label="US Flag">🇺🇸</span> USA
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Metrics Trust Pill Banner */}
          <div className="vigil-trust-stats-pill-banner">
            <div className="vigil-trust-stats-pill-banner-left">
              <div className="shield-icon">🛡️</div>
              <div className="text-box">
                <h6>Trusted by Thousands of Families Across the USA</h6>
                <p>Because your child's safety deserves the best.</p>
              </div>
            </div>
            
            <div className="vigil-trust-stats-pill-divider"></div>

            <div className="vigil-trust-stats-pill-item">
              <div className="icon-box" style={{ backgroundColor: '#F3E8FF', color: '#8B5CF6' }}>👥</div>
              <div className="text-box">
                <h6>12,000+</h6>
                <p>Happy Families Protected & Growing</p>
              </div>
            </div>

            <div className="vigil-trust-stats-pill-divider"></div>

            <div className="vigil-trust-stats-pill-item">
              <div className="icon-box" style={{ backgroundColor: '#DCFCE7', color: '#16A34A' }}>✓</div>
              <div className="text-box">
                <h6>99.9%</h6>
                <p>AI Detection Accuracy You Can Rely On</p>
              </div>
            </div>

            <div className="vigil-trust-stats-pill-divider"></div>

            <div className="vigil-trust-stats-pill-item">
              <div className="icon-box" style={{ backgroundColor: '#FFEDD5', color: '#EA580C' }}>🔔</div>
              <div className="text-box">
                <h6>2M+</h6>
                <p>Real-time Alerts Delivered</p>
              </div>
            </div>

            <div className="vigil-trust-stats-pill-divider"></div>

            <div className="vigil-trust-stats-pill-item">
              <div className="icon-box" style={{ backgroundColor: '#DBEAFE', color: '#2563EB' }}>🔒</div>
              <div className="text-box">
                <h6>100%</h6>
                <p>Private & Secure Your Data Stays Yours</p>
              </div>
            </div>

            <div className="vigil-trust-stats-pill-divider"></div>

            <div className="vigil-trust-stats-pill-item">
              <div className="icon-box" style={{ backgroundColor: '#FFE4E6', color: '#E11D48' }}>💖</div>
              <div className="text-box">
                <h6>24/7</h6>
                <p>AI Monitoring Always On Guard</p>
              </div>
            </div>

            <div className="vigil-trust-stats-pill-divider"></div>

            <div className="vigil-trust-stats-pill-banner-right">
              <div className="map-icon">🗺️</div>
              <p>Proudly protecting families in every state across the USA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: THE DIGITAL WORLD CAN BE RISKY --- */}
      <section className="vigil-risky-world-section">
        <div className="container">
          <div className="vigil-section-title-wrap">
            <span className="vigil-section-tag">The Reality for Parents in the USA</span>
            <h2 className="vigil-section-main-title">The Digital World Can Be Risky. We Help You Stay Ahead.</h2>
            <p className="vigil-section-desc">
              Kids today face online dangers more than ever. Vigil gives you real insights and powerful tools to keep them protected 24/7.
            </p>
          </div>

          <div className="row g-5 align-items-center">
            {/* Left Column (Stats & Progress) */}
            <div className="col-lg-6">
              <div className="vigil-risky-left">
                {/* 3 mini stat cards */}
                <div className="vigil-stat-cards-row">
                  {/* Stat Card 1 */}
                  <div className="vigil-statistic-mini-card">
                    <div className="vigil-stat-mini-icon-row">
                      <div className="vigil-mini-icon-box" style={{ backgroundColor: '#FFF5F5' }}>📊</div>
                      <div className="vigil-mini-alert-icon">!</div>
                    </div>
                    <div className="vigil-stat-num">73%</div>
                    <div className="vigil-stat-label">of kids in the USA experience online risk.</div>
                    <div className="vigil-stat-source">Pew Research</div>
                  </div>

                  {/* Stat Card 2 */}
                  <div className="vigil-statistic-mini-card">
                    <div className="vigil-stat-mini-icon-row">
                      <div className="vigil-mini-icon-box" style={{ backgroundColor: '#FFF5F5' }}>📱</div>
                      <div className="vigil-mini-alert-icon">!</div>
                    </div>
                    <div className="vigil-stat-num">50%</div>
                    <div className="vigil-stat-label">of online risks happen on mobile phones.</div>
                    <div className="vigil-stat-source">Bark Technologies</div>
                  </div>

                  {/* Stat Card 3 */}
                  <div className="vigil-statistic-mini-card">
                    <div className="vigil-stat-mini-icon-row">
                      <div className="vigil-mini-icon-box" style={{ backgroundColor: '#FFF5F5' }}>👀</div>
                      <div className="vigil-mini-alert-icon">!</div>
                    </div>
                    <div className="vigil-stat-num">1 in 3</div>
                    <div className="vigil-stat-label">exposed to inappropriate content before age 12.</div>
                    <div className="vigil-stat-source">Common Sense Media</div>
                  </div>
                </div>

                {/* 3 Progress Bars */}
                <div className="vigil-progress-bars-container">
                  {/* Bar 1 */}
                  <div className="vigil-progress-bar-item">
                    <div className="vigil-progress-bar-info">
                      <h6>Online Threat Detection</h6>
                      <span className="vigil-progress-bar-percent">80%</span>
                    </div>
                    <div className="vigil-progress-track">
                      <div className="vigil-progress-fill" style={{ width: '80%', backgroundColor: '#3F26D9' }}></div>
                    </div>
                    <span className="vigil-progress-bar-desc">AI-powered smart engine scanning accuracy</span>
                  </div>

                  {/* Bar 2 */}
                  <div className="vigil-progress-bar-item">
                    <div className="vigil-progress-bar-info">
                      <h6>Parent Peace of Mind</h6>
                      <span className="vigil-progress-bar-percent">75%</span>
                    </div>
                    <div className="vigil-progress-track">
                      <div className="vigil-progress-fill" style={{ width: '75%', backgroundColor: '#39D353' }}></div>
                    </div>
                    <span className="vigil-progress-bar-desc">Reported increase in family security satisfaction</span>
                  </div>

                  {/* Bar 3 */}
                  <div className="vigil-progress-bar-item">
                    <div className="vigil-progress-bar-info">
                      <h6>Child Privacy Protection</h6>
                      <span className="vigil-progress-bar-percent">99.9%</span>
                    </div>
                    <div className="vigil-progress-track">
                      <div className="vigil-progress-fill" style={{ width: '99.9%', backgroundColor: '#001A3D' }}></div>
                    </div>
                    <span className="vigil-progress-bar-desc">Encrypted local client security protocol</span>
                  </div>
                </div>

                {/* Bottom Avatars Badge */}
                <div className="vigil-avatars-trust-badge">
                  <div className="vigil-avatar-group">
                    <div className="vigil-avatar-group-img" style={{ backgroundColor: '#3F26D9', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>A</div>
                    <div className="vigil-avatar-group-img" style={{ backgroundColor: '#39D353', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>B</div>
                    <div className="vigil-avatar-group-img" style={{ backgroundColor: '#001A3D', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>C</div>
                    <div className="vigil-avatar-group-plus">+12k</div>
                  </div>
                  <p className="vigil-avatar-trust-text">
                    Trusted by 12,000+ parents who actively safeguard their kids with Vigil's technology.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (Glowing Card) */}
            <div className="col-lg-6">
              <div className="vigil-truth-glowing-card">
                <div className="vigil-truth-header">
                  <h4>The Truth About Online Risks in the USA</h4>
                  <p>While Your Child Is on Their Phone</p>
                </div>

                <div className="vigil-truth-map-container">
                  {/* US Map Background Vector Outline */}
                  <svg className="vigil-usa-contour-map" viewBox="0 0 1000 600" fill="none" stroke="#3F26D9" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 150 L120 120 L200 100 L300 90 L400 100 L500 110 L600 100 L700 90 L800 100 L900 140 L950 200 L930 300 L850 400 L800 450 L750 430 L700 480 L600 500 L500 480 L400 450 L300 460 L200 480 L150 430 L100 400 L80 300 L60 200 Z" />
                  </svg>
                  
                  {/* Radar Circles */}
                  <div className="vigil-phone-radar"></div>
                  
                  {/* Neon Phone Alert Mockup */}
                  <div className="vigil-alert-phone-mockup">
                    <div className="vigil-phone-notch"></div>
                    <div className="vigil-phone-alert-icon">!</div>
                    <span style={{ fontSize: '8px', color: '#FF3333', fontWeight: '800', display: 'block', textTransform: 'uppercase', letterSpacing: '1px' }}>ALERT DETECTED</span>
                    <span style={{ fontSize: '7px', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>Unsafe Contact</span>
                  </div>
                </div>

                {/* 4 Stats Items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div className="vigil-truth-metric-item">
                    <span className="vigil-truth-metric-num" style={{ color: '#E53E3E' }}>67%</span>
                    <div className="vigil-truth-metric-icon-box" style={{ backgroundColor: 'rgba(229, 62, 62, 0.1)' }}>💬</div>
                    <p className="vigil-truth-metric-desc">
                      of kids received <strong>inappropriate messages</strong> without parental awareness.
                    </p>
                  </div>

                  <div className="vigil-truth-metric-item">
                    <span className="vigil-truth-metric-num" style={{ color: '#DD6B20' }}>35%</span>
                    <div className="vigil-truth-metric-icon-box" style={{ backgroundColor: 'rgba(221, 107, 32, 0.1)' }}>🎮</div>
                    <p className="vigil-truth-metric-desc">
                      have been contacted by <strong>unsafe strangers</strong> while gaming online.
                    </p>
                  </div>

                  <div className="vigil-truth-metric-item">
                    <span className="vigil-truth-metric-num" style={{ color: '#3182CE' }}>60%</span>
                    <div className="vigil-truth-metric-icon-box" style={{ backgroundColor: 'rgba(49, 130, 206, 0.1)' }}>⏰</div>
                    <p className="vigil-truth-metric-desc">
                      spend more <strong>unmonitored screen time</strong> than recommended.
                    </p>
                  </div>

                  <div className="vigil-truth-metric-item">
                    <span className="vigil-truth-metric-num" style={{ color: '#38A169' }}>70%</span>
                    <div className="vigil-truth-metric-icon-box" style={{ backgroundColor: 'rgba(56, 161, 105, 0.1)' }}>⚠️</div>
                    <p className="vigil-truth-metric-desc">
                      of parents are <strong>unaware</strong> of the real dangers their kids encounter online.
                    </p>
                  </div>
                </div>

                {/* Truth Action Row */}
                <div className="vigil-truth-footer-row">
                  <div className="vigil-truth-footer-left">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 16H13V18H11V16ZM11 6H13V14H11V6Z" fill="#39D353" />
                    </svg>
                    <p>Vigil keeps you informed, so you can take action before it's too late.</p>
                  </div>
                  <Link to="/service" className="vigil-truth-white-btn">
                    Explore All Features <span>➔</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: POWERFUL FEATURES. TOTAL PEACE OF MIND --- */}
      <section className="vigil-features-grid-section">
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* Left Column (Description & Phone Mockups) */}
            <div className="col-lg-5">
              <div style={{ textAlign: 'left' }}>
                <span className="vigil-section-tag">Feature Overview</span>
                <h2 className="vigil-section-main-title" style={{ fontSize: '38px' }}>Powerful Features. Total Peace of Mind.</h2>
                <p className="vigil-section-desc" style={{ fontSize: '16px', margin: '0' }}>
                  Vigil gives parents in the USA the tools they need to keep their children safe in today's digital world — all in one place.
                </p>

                {/* Overlapping Phones Mockup Graphic */}
                <div className="vigil-dual-phones-container">
                  {/* Left Phone Mockup */}
                  <div className="vigil-phone-mock-left">
                    <div style={{ background: '#3F26D9', height: '10px', borderRadius: '5px', marginBottom: '10px' }}></div>
                    <span style={{ fontSize: '8px', color: '#001A3D', fontWeight: '800', display: 'block', marginBottom: '4px' }}>Dashboard Home</span>
                    <div style={{ backgroundColor: '#F7FAFC', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', color: '#718096', border: '1px solid #E2E8F0', marginBottom: '8px' }}>
                      ⚡ System Online & Protecting
                    </div>
                    <div style={{ backgroundColor: '#F7FAFC', height: '90px', borderRadius: '8px', padding: '6px', border: '1px solid #E2E8F0', fontSize: '7px', color: '#4A5568', textAlign: 'left' }}>
                      <strong style={{ display: 'block', fontSize: '8px', color: '#001A3D', marginBottom: '4px' }}>Recent Alerts</strong>
                      • Blocked 1 adult content site<br/>
                      • Cyberbullying warning (SMS)<br/>
                      • Left Safe Zone: School<br/>
                      • High screen time (3.5 hours)
                    </div>
                  </div>

                  {/* Right Phone Mockup */}
                  <div className="vigil-phone-mock-right">
                    <div style={{ background: '#39D353', height: '10px', borderRadius: '5px', marginBottom: '10px' }}></div>
                    <span style={{ fontSize: '8px', color: '#001A3D', fontWeight: '800', display: 'block', marginBottom: '4px' }}>Live Location Tracking</span>
                    <div style={{ backgroundColor: '#EDF2F7', height: '150px', borderRadius: '8px', padding: '6px', border: '1px solid #E2E8F0', position: 'relative', overflow: 'hidden' }}>
                      {/* Grid representation */}
                      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, background: 'radial-gradient(circle, #3F26D9 1px, transparent 1px) 0 0/10px 10px' }}></div>
                      
                      {/* Map Marker Pin Icon */}
                      <div style={{ position: 'absolute', top: '40%', left: '45%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#3F26D9', border: '2px solid #FFFFFF', boxShadow: '0 2px 10px rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '7px', fontWeight: '700' }}>👦</div>
                        <span style={{ fontSize: '5px', backgroundColor: '#001A3D', color: '#FFF', padding: '1px 3px', borderRadius: '3px', marginTop: '2px', fontWeight: '700' }}>John (School)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Checklist */}
                <div className="vigil-checklist-wrap">
                  <div className="vigil-checklist-item">
                    <div className="vigil-checklist-icon-box">✓</div>
                    <span>Trusted by Thousands of Parents in USA</span>
                  </div>
                  <div className="vigil-checklist-item">
                    <div className="vigil-checklist-icon-box">✓</div>
                    <span>Made specifically for Families in the USA</span>
                  </div>
                  <div className="vigil-checklist-item">
                    <div className="vigil-checklist-icon-box">✓</div>
                    <span>Secure. Private. 100% Confidential Data Protection</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (8 Grid Cards) */}
            <div className="col-lg-7">
              <div className="vigil-feature-grid">
                {/* Card 1 */}
                <div className="vigil-feature-grid-card">
                  <div className="vigil-feature-card-icon-box" style={{ backgroundColor: '#F0FFF4', color: '#38A169' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h5>Call Access</h5>
                  <p>View incoming and outgoing calls on their device with exact contact names, call timestamps, and call durations.</p>
                  <Link to="/service" className="vigil-feature-card-link">
                    Learn More <span>➔</span>
                  </Link>
                </div>

                {/* Card 2 */}
                <div className="vigil-feature-grid-card">
                  <div className="vigil-feature-card-icon-box" style={{ backgroundColor: '#EBF8FF', color: '#3182CE' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM6 9H18V11H6V9ZM6 5H18V7H6V5ZM14 13H6V15H14V13Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h5>SMS Access</h5>
                  <p>See all sent and received SMS messages. Get instant alerts if texts contain cyberbullying, drugs, or unsafe context.</p>
                  <Link to="/service" className="vigil-feature-card-link">
                    Learn More <span>➔</span>
                  </Link>
                </div>

                {/* Card 3 */}
                <div className="vigil-feature-grid-card">
                  <div className="vigil-feature-card-icon-box" style={{ backgroundColor: '#F0FFF4', color: '#25D366' }}>
                    <span style={{ fontSize: '20px', fontWeight: '800' }}>W</span>
                  </div>
                  <h5>WhatsApp Access</h5>
                  <p>Track WhatsApp chats, shared photos, audio recordings, and calls. Keep tabs on their main modern communications.</p>
                  <Link to="/service" className="vigil-feature-card-link">
                    Learn More <span>➔</span>
                  </Link>
                </div>

                {/* Card 4 */}
                <div className="vigil-feature-grid-card">
                  <div className="vigil-feature-card-icon-box" style={{ backgroundColor: '#FAF5FF', color: '#805AD5' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 8H20V5H4V8ZM20 10H4V19H20V10ZM20 3C21.1 3 22 3.9 22 5V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V5C2 3.9 2.9 3 4 3H20Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h5>Social Media Access</h5>
                  <p>Monitor social chats and posts on Instagram, Snapchat, Facebook Messenger, TikTok, and more with our custom AI tool.</p>
                  <Link to="/service" className="vigil-feature-card-link">
                    Learn More <span>➔</span>
                  </Link>
                </div>

                {/* Card 5 */}
                <div className="vigil-feature-grid-card">
                  <div className="vigil-feature-card-icon-box" style={{ backgroundColor: '#FFF5F5', color: '#E53E3E' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h5>Child Phone Gallery</h5>
                  <p>Remotely browse all photos and video files stored on their device. Flag inappropriate media uploads instantly.</p>
                  <Link to="/service" className="vigil-feature-card-link">
                    Learn More <span>➔</span>
                  </Link>
                </div>

                {/* Card 6 */}
                <div className="vigil-feature-grid-card">
                  <div className="vigil-feature-card-icon-box" style={{ backgroundColor: '#EBF8FF', color: '#3182CE' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h5>Live Location</h5>
                  <p>View live GPS coordinates on an interactive map. Set custom virtual boundary zones and receive entry/exit notifications.</p>
                  <Link to="/service" className="vigil-feature-card-link">
                    Learn More <span>➔</span>
                  </Link>
                </div>

                {/* Card 7 */}
                <div className="vigil-feature-grid-card">
                  <div className="vigil-feature-card-icon-box" style={{ backgroundColor: '#FFF5F5', color: '#E53E3E' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 14C13.66 14 15 12.66 15 11V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 12.66 10.34 14 12 14ZM17.3 11C17.3 14 14.76 16.1 12 16.1C9.24 16.1 6.7 14 6.7 11H5C5 14.42 7.72 17.23 11 17.72V21H13V17.72C16.28 17.23 19 14.42 19 11H17.3Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h5>Call Recording</h5>
                  <p>Record phone calls made on their device and listen to recordings remotely anytime from your dashboard.</p>
                  <Link to="/service" className="vigil-feature-card-link">
                    Learn More <span>➔</span>
                  </Link>
                </div>

                {/* Card 8 */}
                <div className="vigil-feature-grid-card">
                  <div className="vigil-feature-card-icon-box" style={{ backgroundColor: '#F0F4FF', color: '#3F26D9' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h5>And Much More</h5>
                  <p>Vigil provides browser history logs, app blocking, wifi logs, calendar events, contact logs, device status tracking, and more.</p>
                  <Link to="/service" className="vigil-feature-card-link">
                    Explore All Features <span>➔</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Full-Width Banner Section 4 */}
          <div className="vigil-footer-banner">
            <div className="vigil-footer-banner-left">
              <svg className="vigil-trust-shield-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '42px', height: '42px' }}>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#3F26D9" />
                <path d="M7.5 12.5L10.5 15.5L16.5 9.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <h5>Protect What Matters Most</h5>
                <p>Vigil is 100% legal, discreet, and designed for parents who care.</p>
              </div>
            </div>
            <div className="vigil-trust-divider"></div>
            <div className="vigil-footer-banner-stats">
              <div className="vigil-footer-stat-box">
                <span className="vigil-footer-stat-num">100%</span>
                <p>USA Based Support</p>
              </div>
              <div className="vigil-footer-stat-box">
                <span className="vigil-footer-stat-num">24/7</span>
                <p>Customer Support</p>
              </div>
              <div className="vigil-footer-stat-box">
                <span className="vigil-footer-stat-num">100%</span>
                <p>Secure & Private</p>
              </div>
            </div>
            <div className="vigil-trust-divider"></div>
            <div style={{ gridColumn: 'span 1' }}>
              <Link to="/pricing" className="vigil-footer-blue-btn">
                Get Started Now <span>➔</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
