import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Pricing.css';

function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.AOS) {
      window.AOS.init({ duration: 800, once: true });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Affordable Parental Control Plans for Families in USA | Vigil1</title>
        <meta name="description" content="Choose Vigil1 pricing plans for child safety, family protection, and smart parental controls designed to keep children safe online in the USA." />
      </Helmet>
      {/* ── HERO BANNER ── */}
      <section 
        className="pricing-hero-section"
        style={{ backgroundImage: 'url(/myimg/pricingbanner.png)' }}
      >
        <div className="container">
          <div className="pricing-hero-content" data-aos="fade-right">
            <div className="pricing-badge">SIMPLE, TRANSPARENT PRICING</div>
            <h1 className="pricing-hero-title">Choose the Plan<br/>That's Right for You</h1>
            <p className="pricing-hero-desc">
              Powerful parental monitoring tools to keep your family safe across all devices.
            </p>
            
            <div className="pricing-features-row">
              <div className="pricing-feature-item">
                <div className="pricing-feature-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="pricing-feature-text">All plans include<br/>core monitoring<br/>features</p>
              </div>
              
              <div className="pricing-feature-item">
                <div className="pricing-feature-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="21.5 2 21.5 7 16.5 7"></polyline>
                    <polyline points="2.5 22 2.5 17 7.5 17"></polyline>
                    <path d="M21.5 7a10 10 0 0 1-19 5"></path>
                    <path d="M2.5 17a10 10 0 0 1 19-5"></path>
                  </svg>
                </div>
                <p className="pricing-feature-text">Easy setup<br/>and 24/7<br/>support</p>
              </div>

              <div className="pricing-feature-item">
                <div className="pricing-feature-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <p className="pricing-feature-text">Secure, private<br/>and 100%<br/>confidential</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLANS SECTION ── */}
      <section className="pricing-plans-section">
        <div className="container">
          
          <div className="pricing-toggle-wrap" data-aos="fade-up">
            <div className="pricing-toggle">
              <button 
                className={`pricing-toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button 
                className={`pricing-toggle-btn ${billingCycle === 'yearly' ? 'active' : ''}`}
                onClick={() => setBillingCycle('yearly')}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                Yearly
                <span className="pricing-toggle-badge">Save up to 20%</span>
              </button>
            </div>
          </div>

          <div className="row justify-content-center">
            {/* FREE PLAN */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="pricing-card popular">
                <div className="pricing-popular-badge">MOST POPULAR</div>
                <div className="pricing-card-header">
                  <h3 className="pricing-card-title">Free Plan</h3>
                  <p className="pricing-card-subtitle">Essential protection for your family.</p>
                  
                  <div className="pricing-price">
                    <span className="pricing-currency">$</span>
                    <span className="pricing-amount">0.00</span>
                    <span className="pricing-period">/month</span>
                  </div>
                  <p className="pricing-billing">Forever, no credit card required</p>
                </div>

                <Link to="/register" className="pricing-btn solid">
                  Get Started Free
                </Link>

                <ul className="pricing-features-list">
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Parent Dashboard Access
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Child Device Monitoring
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Live Location Tracking
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    WhatsApp Activity Monitoring
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    AI Alerts
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Social Media Monitoring
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── COMPARE PLANS TABLE ── */}
      <section className="compare-section">
        <div className="container">
          <h2 className="compare-title" data-aos="fade-up">Compare Plans</h2>
          
          <div className="compare-table-wrapper" data-aos="fade-up" data-aos-delay="100">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Features</th>
                  <th>
                    <div className="compare-plan-name">Basic</div>
                    <div className="compare-plan-price">$9.99 <span>/month</span></div>
                  </th>
                  <th>
                    <div className="compare-plan-name" style={{ color: '#4F46E5' }}>Premium</div>
                    <div className="compare-plan-price">$19.99 <span>/month</span></div>
                  </th>
                  <th>
                    <div className="compare-plan-name">Family</div>
                    <div className="compare-plan-price">$29.99 <span>/month</span></div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="compare-feature-name">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                      Monitor Children
                    </div>
                  </td>
                  <td className="compare-text">1 Child</td>
                  <td className="compare-text">Up to 3 Children</td>
                  <td className="compare-text">Up to 5 Children</td>
                </tr>
                <tr>
                  <td>
                    <div className="compare-feature-name">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                      Web & App Activity Monitoring
                    </div>
                  </td>
                  <td><span className="compare-check">✔</span></td>
                  <td><span className="compare-check">✔</span></td>
                  <td><span className="compare-check">✔</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="compare-feature-name">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      Location Tracking
                    </div>
                  </td>
                  <td><span className="compare-check">✔</span></td>
                  <td><span className="compare-check">✔</span></td>
                  <td><span className="compare-check">✔</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="compare-feature-name">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      Screen Time Management
                    </div>
                  </td>
                  <td><span className="compare-check">✔</span></td>
                  <td><span className="compare-check">✔</span></td>
                  <td><span className="compare-check">✔</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="compare-feature-name">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                      Social Media Monitoring
                    </div>
                  </td>
                  <td><span className="compare-dash">—</span></td>
                  <td><span className="compare-check">✔</span></td>
                  <td><span className="compare-check">✔</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="compare-feature-name">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 11.9a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      Calls & SMS Monitoring
                    </div>
                  </td>
                  <td><span className="compare-dash">—</span></td>
                  <td><span className="compare-check">✔</span></td>
                  <td><span className="compare-check">✔</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="compare-feature-name">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                      Unlimited Device Support
                    </div>
                  </td>
                  <td><span className="compare-dash">—</span></td>
                  <td><span className="compare-dash">—</span></td>
                  <td><span className="compare-check">✔</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="compare-feature-name">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                      Advanced Reports & Data Export
                    </div>
                  </td>
                  <td><span className="compare-dash">—</span></td>
                  <td><span className="compare-dash">—</span></td>
                  <td><span className="compare-check">✔</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="compare-feature-name">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 12H16c-.7 2-2 3-4 3s-3.3-1-4-3H2.5"></path><path d="M5.5 5.1L2 12v6c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.9A2 2 0 0 0 16.8 4H7.2a2 2 0 0 0-1.7 1.1z"></path></svg>
                      Priority Support
                    </div>
                  </td>
                  <td><span className="compare-dash">—</span></td>
                  <td className="compare-text">Email & Chat</td>
                  <td className="compare-text">24/7 Priority Support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="faq-section">
        <div className="container">
          <h2 className="faq-title" data-aos="fade-up">Frequently Asked Questions</h2>
          
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="faq-card">
                <div className="faq-question">
                  Is there a free trial available?
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
                <p className="faq-answer">Yes! You can try any plan free for 7 days. No credit card required.</p>
              </div>
            </div>
            
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="faq-card">
                <div className="faq-question">
                  Can I change or cancel my plan anytime?
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
                <p className="faq-answer">Absolutely. You can upgrade, downgrade, or cancel anytime.</p>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <div className="faq-card">
                <div className="faq-question">
                  Which devices are supported?
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
                <p className="faq-answer">Vigil works on Android, iOS, Windows, and macOS devices.</p>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="faq-card">
                <div className="faq-question">
                  Is my data safe and private?
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
                <p className="faq-answer">Yes, we use enterprise-grade encryption to keep your data 100% secure.</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

    </>
  );
}

export default Pricing;
