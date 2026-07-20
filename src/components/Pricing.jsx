import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SchemaMarkup from './SchemaMarkup';
import { useCurrency } from '../hooks/useCurrency';
import './Pricing.css';

function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const { currency } = useCurrency();
  const { symbol, rate } = currency;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.AOS) {
      window.AOS.init({ duration: 800, once: true });
    }
  }, []);

  return (
    <>
      <SchemaMarkup schemas={[
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Vigil Pricing",
          "url": "https://vigil-1.com/#/pricing",
          "description": "Explore Vigil pricing plans for parental monitoring, family safety, and device tracking solutions."
        },
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Vigil",
          "applicationCategory": "SecurityApplication",
          "operatingSystem": "Android, iOS",
          "url": "https://vigil-1.com/",
          "image": "https://vigil-1.com/myimg/image.png",
          "publisher": { "@type": "Organization", "name": "Vigil" },
          "description": "Vigil is a parental monitoring and family safety application designed to help parents monitor children's online activities and device usage."
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vigil-1.com/" },
            { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://vigil-1.com/#/pricing" }
          ]
        }
      ]} />
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
                    <span className="pricing-currency">{symbol}</span>
                    <span className="pricing-amount">{(0.00 * rate).toFixed(2)}</span>
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

                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── COMPARE PLANS TABLE ── */}


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
