import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SchemaMarkup from './SchemaMarkup';
import './CaseStudy.css';

// ---------------------------------------------------------
// SVG ICONS (Clean outline SVGs, rounded strokes)
// ---------------------------------------------------------
const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const BellIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);

const LocationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const EyeOffIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
    <line x1="1" y1="1" x2="23" y2="23"></line>
  </svg>
);

const UserAlertIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="8.5" cy="7" r="4"></circle>
    <line x1="20" y1="8" x2="20" y2="14"></line>
    <line x1="20" y1="18" x2="20.01" y2="18"></line>
  </svg>
);

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const FamilyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const QuoteIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

function CaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="casestudy-modern-wrapper">
      <SchemaMarkup schemas={[
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Vigil Case Studies",
          "url": "https://vigil-1.com/#/casestudy",
          "description": "Explore real-world case studies and success stories showing how Vigil helps families with parental monitoring, digital safety, device tracking, and online protection."
        },
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Vigil",
          "url": "https://vigil-1.com/",
          "logo": "https://vigil-1.com/myimg/image.png",
          "email": "support@vigil-1.com",
          "telephone": "+1 (404) 555-0293",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "7454 Old Alexandria Ferry Road",
            "addressLocality": "Clinton",
            "addressRegion": "MD",
            "postalCode": "20744",
            "addressCountry": "US"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vigil-1.com/" },
            { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://vigil-1.com/#/casestudy" }
          ]
        }
      ]} />
      <Helmet>
        <title>Case Studies | Vigil - Real Stories. Real Impact.</title>
        <meta name="description" content="See how parents across the USA used Vigil to protect their children and bring peace of mind back to their homes." />
      </Helmet>

      {/* 1. HERO SECTION */}
      <section className="cs-hero-section">
        
        <div className="container-fluid px-4 px-xl-5" style={{ position: 'relative', zIndex: 2 }}>
          <div className="cs-hero-row">
            {/* LEFT SIDE */}
            <div className="cs-hero-left">
              <span className="cs-hero-badge">CASE STUDIES</span>
              <h1 className="cs-headline-64">
                Real Stories.<br />
                <span className="cs-text-purple">Real Impact.</span><br />
                Safer Kids.
              </h1>
              <div className="cs-hero-underline"></div>
              <p className="cs-body-18">
                Online fraud targeting children in the USA has surged, with the FBI reporting over 13,000 complaints from minors in 2025 alone, totaling more than $12 million in financial losses. Scammers often exploit children's active digital presence to access family data or commit long-term identity theft.
              </p>
              
              <div className="cs-hero-minicards">
                <div className="cs-minicard">
                  <div className="cs-minicard-icon green">
                    <FamilyIcon />
                  </div>
                  <div className="cs-minicard-text">
                    <h4>Real Families</h4>
                    <p>Verified stories</p>
                  </div>
                </div>
                <div className="cs-minicard">
                  <div className="cs-minicard-icon orange">
                    <ShieldIcon />
                  </div>
                  <div className="cs-minicard-text">
                    <h4>Real Results</h4>
                    <p>Proven protection</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER BAR */}
      <section className="cs-filter-section">
        <div className="container-fluid px-4 px-xl-5">
          <div className="cs-filter-container">
            <button className="cs-filter-btn active">
              <ShieldIcon /> All Cases
            </button>
            <button className="cs-filter-btn">
              <UserAlertIcon /> Cyberbullying
            </button>
            <button className="cs-filter-btn">
              <EyeOffIcon /> Inappropriate Content
            </button>
            <button className="cs-filter-btn">
              <BellIcon /> Online Predators
            </button>
            <button className="cs-filter-btn">
              <ClockIcon /> Screen Time
            </button>
            <button className="cs-filter-btn">
              <PhoneIcon /> Social Media Risks
            </button>
          </div>
        </div>
      </section>

      {/* 3. CASE STUDIES GRID */}
      <section className="cs-grid-section">
        <div className="cs-grid-bg-shapes"></div>
        <div className="cs-container">
          <div className="cs-grid">
            
            {/* Card 1 */}
            <div className="cs-card theme-cyberbullying">
              <div className="cs-card-header">
                <div className="cs-card-icon-wrap">
                  <ShieldIcon />
                </div>
                <div className="cs-card-header-text">
                  <h3 className="cs-card-title">Sextortion & Coercion</h3>
                  <div className="cs-card-location">
                    <LocationIcon /> National Trend
                  </div>
                </div>
              </div>
              <span className="cs-category-pill">Sextortion</span>
              <p className="cs-card-desc">A critical rising trend where predators threaten to release explicit images unless the victim sends money or more content. Some violent groups escalate this to coercing self-harm.</p>
              <Link to="/casestudy/sextortion" className="cs-card-link">Read full story <ArrowRightIcon /></Link>
            </div>

            {/* Card 2 */}
            <div className="cs-card theme-content">
              <div className="cs-card-header">
                <div className="cs-card-icon-wrap">
                  <EyeOffIcon />
                </div>
                <div className="cs-card-header-text">
                  <h3 className="cs-card-title">Gaming Scams</h3>
                  <div className="cs-card-location">
                    <LocationIcon /> Online Platforms
                  </div>
                </div>
              </div>
              <span className="cs-category-pill">Gaming Fraud</span>
              <p className="cs-card-desc">Fraudsters offer fake in-game currency (e.g., free V-Bucks or Robux) to trick kids into sharing login credentials or parent credit card details.</p>
              <Link to="/casestudy/gaming-scams" className="cs-card-link">Read full story <ArrowRightIcon /></Link>
            </div>

            {/* Card 3 */}
            <div className="cs-card theme-predators">
              <div className="cs-card-header">
                <div className="cs-card-icon-wrap">
                  <UserAlertIcon />
                </div>
                <div className="cs-card-header-text">
                  <h3 className="cs-card-title">Identity Theft</h3>
                  <div className="cs-card-location">
                    <LocationIcon /> Nationwide Risk
                  </div>
                </div>
              </div>
              <span className="cs-category-pill">Identity Theft</span>
              <p className="cs-card-desc">Because children have "clean" credit histories and their credit is rarely monitored, they are 50 times more likely to be targets for long-term identity fraud used to open accounts.</p>
              <Link to="/casestudy/identity-theft" className="cs-card-link">Read full story <ArrowRightIcon /></Link>
            </div>

            {/* Card 4 */}
            <div className="cs-card theme-screentime">
              <div className="cs-card-header">
                <div className="cs-card-icon-wrap">
                  <ClockIcon />
                </div>
                <div className="cs-card-header-text">
                  <h3 className="cs-card-title">Cyber Kidnapping</h3>
                  <div className="cs-card-location">
                    <LocationIcon /> Global Scam
                  </div>
                </div>
              </div>
              <span className="cs-category-pill">Cyber Kidnapping</span>
              <p className="cs-card-desc">A sophisticated scam where perpetrators convince a child to isolate themselves and then send fake ransom demands and photos to parents.</p>
              <Link to="/casestudy/cyber-kidnapping" className="cs-card-link">Read full story <ArrowRightIcon /></Link>
            </div>

            {/* Card 5 */}
            <div className="cs-card theme-social">
              <div className="cs-card-header">
                <div className="cs-card-icon-wrap">
                  <BellIcon />
                </div>
                <div className="cs-card-header-text">
                  <h3 className="cs-card-title">Social Media Deception</h3>
                  <div className="cs-card-location">
                    <LocationIcon /> Social Networks
                  </div>
                </div>
              </div>
              <span className="cs-category-pill">Social Media Risks</span>
              <p className="cs-card-desc">Scammers use fake friend requests or AI-cloned voices to impersonate peers or relatives, often leading to phishing or financial extortion.</p>
              <Link to="/casestudy/social-media-deception" className="cs-card-link">Read full story <ArrowRightIcon /></Link>
            </div>

          </div>
        </div>
      </section>

      {/* 4. STATISTICS SECTION - MAKE A DIFFERENCE ACROSS THE USA */}
      <section className="cs-stats-section">
        <div className="cs-container">
          <div className="cs-stats-container">
            <div className="cs-stats-header">
              <h2 className="cs-headline-40">Making a Difference Across the USA</h2>
              <div className="cs-hero-underline" style={{ margin: '0 auto' }}></div>
            </div>
            
            <div className="cs-stats-grid">
              <div className="cs-stat-item theme-blue">
                <div className="cs-stat-icon"><FamilyIcon /></div>
                <div className="cs-stat-num">12K+</div>
                <div className="cs-stat-label-primary">Families Protected</div>
                <div className="cs-stat-label-secondary">Across all 50 states</div>
              </div>
              <div className="cs-stat-item theme-green">
                <div className="cs-stat-icon"><ShieldIcon /></div>
                <div className="cs-stat-num">99.9%</div>
                <div className="cs-stat-label-primary">Threats Detected</div>
                <div className="cs-stat-label-secondary">Before they became serious</div>
              </div>
              <div className="cs-stat-item theme-orange">
                <div className="cs-stat-icon"><BellIcon /></div>
                <div className="cs-stat-num">2M+</div>
                <div className="cs-stat-label-primary">Alerts Sent</div>
                <div className="cs-stat-label-secondary">Keeping parents informed</div>
              </div>
              <div className="cs-stat-item theme-pink">
                <div className="cs-stat-icon"><HeartIcon /></div>
                <div className="cs-stat-num">98%</div>
                <div className="cs-stat-label-primary">Parents Feel Safer</div>
                <div className="cs-stat-label-secondary">With Vigil by their side</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIAL SECTION */}
      <section className="cs-testi-section">
        <div className="cs-container">
          <div className="cs-testi-flex-container">
            {/* Left Arrow */}
            <button className="cs-testi-arrow-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </button>

            {/* Center Content */}
            <div className="cs-testi-content-center">
              <div className="cs-testi-quote-mark">“</div>
              <h2 className="cs-testi-text">
                Vigil gave me the peace of mind I was missing. Now I know my kids are safer, and we talk more openly about online life.”
              </h2>
              <div className="cs-stars">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <div className="cs-testi-author">
                Jessica T.<br/>
                <span style={{fontWeight: 400}}>Mother of two, Texas</span>
              </div>
            </div>

            {/* Right Arrow */}
            <button className="cs-testi-arrow-btn">
              <ArrowRightIcon />
            </button>
          </div>

          <div className="cs-testi-dots-container">
            <div className="cs-testi-dot active"></div>
            <div className="cs-testi-dot"></div>
            <div className="cs-testi-dot"></div>
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="cs-cta-section">
        <div className="cs-container">
          <div className="cs-cta-card">
            <div className="cs-cta-left">
              <div className="cs-cta-icon-circle">
                <ShieldIcon />
              </div>
              <div className="cs-cta-text-block">
                <h2 className="cs-cta-title">Your Story Could Be Next</h2>
                <p className="cs-cta-desc">
                  Thousands of parents across the USA trust Vigil to keep their children safe online. Take control today and be the reason for a safer tomorrow.
                </p>
              </div>
            </div>
            <div className="cs-cta-right">
              <Link to="/contact" className="cs-btn-primary">
                Get Started with Vigil <ArrowRightIcon style={{ marginLeft: '8px' }} />
              </Link>
              <div className="cs-cta-guarantees">
                <span className="cs-guarantee">
                  <CheckIcon /> No setup fees &bull; Cancel anytime
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default CaseStudy;
