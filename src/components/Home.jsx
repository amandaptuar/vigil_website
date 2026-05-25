import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Testimonials.css';
import './Features.css';
import './OnlineRisks.css';
import HowItWorks from './HowItWorks';
import DashboardShowcase from './DashboardShowcase';


function Home() {
  useEffect(() => {
    let $slider;
    if (window.jQuery && window.jQuery.fn.slick) {
      setTimeout(() => {
        $slider = window.jQuery('.luminix-testimonial-slider');
        if ($slider.length > 0) {
          if ($slider.hasClass('slick-initialized')) {
            $slider.slick('unslick');
          }
          $slider.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            dots: true,
            centerMode: true,
            speed: 500,
            centerPadding: "180px",
            responsive: [
              { breakpoint: 1349, settings: { slidesToShow: 2 } },
              { breakpoint: 991, settings: { slidesToShow: 1 } },
              { breakpoint: 767, settings: { slidesToShow: 1, centerPadding: "100px" } },
              { breakpoint: 575, settings: { slidesToShow: 1, centerPadding: "0px" } }
            ]
          });
        }
      }, 100);
    }

    return () => {
      if ($slider && $slider.hasClass('slick-initialized')) {
        $slider.slick('unslick');
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Best Parental Control App for Child Safety in USA | Vigil1</title>
        <meta name="description" content="Protect your family with Vigil1, the best parental control app for child safety, online protection, and smart family monitoring in the USA." />
      </Helmet>
      <div className="luminix-hero-section section" style={{ backgroundImage: 'url("/myimg/image copy 7.png")' }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column - Content */}
            <div className="col-lg-6 col-md-12">
              <div className="vigil-hero-content" data-aos="fade-right" data-aos-duration="1000">

                {/* Families Pill Badge */}
                <div className="vigil-hero-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span>Trusted by 50,000+ Families Worldwide</span>
                </div>

                {/* Title */}
                <h1 className="vigil-hero-title">
                  Peace of Mind for You.<br />
                  <span className="vigil-text-green">A Safer World</span><br />
                  <span className="vigil-text-green vigil-underline-wrapper">
                    for Your Child.
                    <svg className="vigil-accent-underline" width="220" height="15" viewBox="0 0 220 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 10C50 4 150 3 215 11" stroke="#3F26D9" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="vigil-hero-subtitle">
                  Vigil is your all-in-one parental monitoring system that lets you know where your child is, what they're viewing, and who they're talking to — in real time. Simple to use. Powerful in protection.
                </p>

                {/* Horizontal Features (5 icons in row) */}
                <ul className="vigil-features-row">
                  <li className="vigil-feature-item">
                    <div className="vigil-feature-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 11 2 2 4-4" />
                      </svg>
                    </div>
                    <span>Real-Time Monitoring</span>
                  </li>
                  <li className="vigil-feature-item">
                    <div className="vigil-feature-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <span>Location Tracking</span>
                  </li>
                  <li className="vigil-feature-item">
                    <div className="vigil-feature-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        <path d="M8 10h.01M12 10h.01M16 10h.01" />
                      </svg>
                    </div>
                    <span>App & Chat Monitoring</span>
                  </li>
                  <li className="vigil-feature-item">
                    <div className="vigil-feature-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                    </div>
                    <span>Web & Content Filtering</span>
                  </li>
                  <li className="vigil-feature-item">
                    <div className="vigil-feature-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                      </svg>
                    </div>
                    <span>Instant Alerts</span>
                  </li>
                </ul>

                {/* Actions (CTA Button + Setup Info) */}
                <div className="vigil-actions-block">
                  <Link to="/pricing" className="vigil-cta-btn">
                    <span>Start Protecting Your Child Today</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                  <div className="vigil-setup-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>Setup in Under 5 Minutes</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column - Shield and Floating Badges */}
            <div className="col-lg-6 col-md-12 position-relative">
              <div className="vigil-hero-graphic-area" data-aos="fade-left" data-aos-duration="1000">

                {/* Cyber-Security glowing SVG shield outline overlay */}
                <div className="vigil-shield-svg-container">
                  <svg width="100%" height="100%" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Glowing outer shield */}
                    <path className="vigil-shield-path" d="M250 80 C 190 55, 130 55, 120 55 C 80 180, 90 340, 250 460 C 410 340, 420 180, 380 55 C 370 55, 310 55, 250 80 Z" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="3" strokeLinecap="round" filter="url(#shieldGlow)" />
                    {/* Glowing inner shield */}
                    <path className="vigil-shield-path" d="M250 100 C 200 78, 150 78, 140 78 C 105 190, 115 325, 250 435 C 385 325, 395 190, 360 78 C 350 78, 300 78, 250 100 Z" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.5" strokeLinecap="round" />

                    <defs>
                      <filter id="shieldGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="8" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                  </svg>
                </div>

                {/* Floating Widget 1: Location Update */}
                <div className="vigil-glass-card vigil-card-location">
                  <div className="vigil-card-icon-wrapper" style={{ backgroundColor: 'rgba(40, 167, 69, 0.1)', borderColor: 'rgba(40, 167, 69, 0.2)', color: '#28a745' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="vigil-card-content">
                    <span className="vigil-card-title">Location Update</span>
                    <span className="vigil-card-sub">Home • 2 min ago</span>
                  </div>
                </div>

                {/* Floating Widget 2: Alert */}
                <div className="vigil-glass-card vigil-card-alert">
                  <div className="vigil-card-icon-wrapper" style={{ backgroundColor: 'rgba(40, 167, 69, 0.1)', borderColor: 'rgba(40, 167, 69, 0.2)', color: '#28a745' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                    </svg>
                  </div>
                  <div className="vigil-card-content">
                    <span className="vigil-card-title">Alert</span>
                    <span className="vigil-card-sub">New Activity Detected</span>
                  </div>
                </div>

                {/* Floating Widget 3: Screen Time */}
                <div className="vigil-glass-card vigil-card-screentime">
                  <div className="vigil-card-icon-wrapper" style={{ backgroundColor: 'rgba(40, 167, 69, 0.1)', borderColor: 'rgba(40, 167, 69, 0.2)', color: '#28a745' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="vigil-card-content">
                    <span className="vigil-card-title">Screen Time</span>
                    <span className="vigil-card-sub">2h 15m Today</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Calligraphy Area (bottom-right of hero) */}
        <div className="vigil-calligraphy-area">
          <div className="vigil-calligraphy-text-1">Because every click matters. Every moment counts.</div>
          <div className="vigil-calligraphy-signature">
            <span>We've got your back!</span>
            <svg width="230" height="20" viewBox="0 0 230 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 15C60 7 150 6 225 15" stroke="#39D353" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        </div>

      </div>

      {/* --- DASHBOARD SHOWCASE SECTION --- */}
      <DashboardShowcase />

      {/* Powerful Features Section */}
      <section className="vigil-features-section" style={{ backgroundImage: 'url("/myimg/image copy 3.png")' }}>
        <div className="container">
          <div className="vigil-features-split">
            {/* Left Column: Branding */}
            <div className="vigil-features-left">
              <h2>
                <span style={{ color: '#0F172A', whiteSpace: 'nowrap' }}>Powerful Features.</span> <br />
                <span style={{ color: '#4F46E5', whiteSpace: 'nowrap' }}>Total Peace of Mind.</span>
              </h2>
            </div>

            {/* Right Column: 4x2 Grid */}
            <div className="vigil-features-right">
              <div className="vigil-features-header-flex">
                <Link to="/features" className="vigil-features-right-top-pill">
                  Explore All Features →
                </Link>
              </div>

              <div className="vigil-features-grid">
                {/* Card 1 */}
                <div className="vigil-feature-card">
                  <div className="vigil-feature-icon-wrap bg-pastel-green">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <h5>Call Access</h5>
                  <p>View all incoming, outgoing & missed calls to ensure your child is communicating safely with known contacts.</p>
                  <Link to="/features" className="vigil-feature-link">Learn More →</Link>
                </div>
                {/* Card 2 */}
                <div className="vigil-feature-card">
                  <div className="vigil-feature-icon-wrap bg-pastel-blue">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                  </div>
                  <h5>SMS Access</h5>
                  <p>Read sent, received & deleted text messages to quickly identify bullying or inappropriate conversations.</p>
                  <Link to="/features" className="vigil-feature-link">Learn More →</Link>
                </div>
                {/* Card 3 */}
                <div className="vigil-feature-card">
                  <div className="vigil-feature-icon-wrap bg-pastel-green">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                  </div>
                  <h5>WhatsApp Access</h5>
                  <p>Monitor WhatsApp chats, media, and voice notes to keep an eye on their most active messaging app.</p>
                  <Link to="/features" className="vigil-feature-link">Learn More →</Link>
                </div>
                {/* Card 4 */}
                <div className="vigil-feature-card">
                  <div className="vigil-feature-icon-wrap bg-pastel-purple">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                  </div>
                  <h5>Social Media Access</h5>
                  <p>Track activity on Instagram, Facebook, and Snapchat to protect them from dangerous online predators.</p>
                  <Link to="/features" className="vigil-feature-link">Learn More →</Link>
                </div>
                {/* Card 5 */}
                <div className="vigil-feature-card">
                  <div className="vigil-feature-icon-wrap bg-pastel-purple">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                  </div>
                  <h5>Child Phone Gallery</h5>
                  <p>View photos and videos stored on their device to ensure they are not exposed to explicit material.</p>
                  <Link to="/features" className="vigil-feature-link">Learn More →</Link>
                </div>
                {/* Card 6 */}
                <div className="vigil-feature-card">
                  <div className="vigil-feature-icon-wrap bg-pastel-green">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <h5>Live Location</h5>
                  <p>Track your child's real-time location on a map so you always know exactly where they are.</p>
                  <Link to="/features" className="vigil-feature-link">Learn More →</Link>
                </div>
                {/* Card 7 */}
                <div className="vigil-feature-card">
                  <div className="vigil-feature-icon-wrap bg-pastel-red">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="22" /></svg>
                  </div>
                  <h5>Call Recording</h5>
                  <p>Record and listen to phone calls happening on the device if you suspect dangerous interactions.</p>
                  <Link to="/features" className="vigil-feature-link">Learn More →</Link>
                </div>
                {/* Card 8 */}
                <div className="vigil-feature-card">
                  <div className="vigil-feature-icon-wrap bg-pastel-blue">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>
                  </div>
                  <h5>And Much More</h5>
                  <p>Web filtering, screen time control, keylogger, and dozens of other features designed for safety.</p>
                  <Link to="/features" className="vigil-feature-link" style={{ color: '#4F46E5' }}>Explore All Features →</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="vigil-features-bottom-banner">
            <div className="vigil-fb-left">
              <div className="vigil-fb-stat-icon-custom">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="#16A34A" strokeWidth="2.5" fill="none" />
                  <path d="M20 5C20 5 13 8 13 16C13 24 20 33 20 33C20 33 27 24 27 16C27 8 20 5 20 5Z" fill="#1E3A8A" />
                  <path d="M17 17L19.5 19.5L24 14" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="vigil-fb-stat-text">
                <h6>Protect What Matters Most</h6>
                <p>Vigil is 100% legal, discreet, and designed for parents who care.</p>
              </div>
            </div>

            <div className="vigil-fb-center">
              <div className="vigil-fb-stat">
                <h6>100%</h6>
                <p>USA Based Support</p>
              </div>
              <div className="vigil-fb-divider"></div>
              <div className="vigil-fb-stat">
                <h6>24/7</h6>
                <p>Customer Support</p>
              </div>
              <div className="vigil-fb-divider"></div>
              <div className="vigil-fb-stat">
                <h6>100%</h6>
                <p>Secure & Private</p>
              </div>
            </div>

            <div className="vigil-fb-right">
              <Link to="/pricing" className="vigil-btn-solid">
                Get Started Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Online Risks Section */}
      <section className="online-risks-section">
        <div className="container">
          <div className="or-split-layout">
            {/* Left Column */}
            <div className="or-left">
              <h4 className="or-subheading">The Reality for Parents in the USA</h4>
              <h2 className="or-heading">The World<br />Can Be Risky.<br /><span className="highlight">We Help You Stay Ahead.</span></h2>
              <p className="or-description">Kids today face online dangers more than ever. Vigil gives you real insights and powerful tools to keep them protected 24/7.</p>

              {/* Stats Grid */}
              <div className="or-stats-grid">
                <div className="or-stat-card">
                  <div className="or-stat-card-header">
                    <div className="or-icon-wrap or-icon-blue">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <div>
                      <div className="or-stat-number">73%</div>
                      <div className="or-stat-subtitle">of kids in the USA</div>
                    </div>
                  </div>
                  <p className="or-stat-text">aged 8-17 have experienced some form of online risk.</p>
                  <p className="or-stat-source">Source: Pew Research Center</p>
                </div>

                <div className="or-stat-card">
                  <div className="or-stat-card-header">
                    <div className="or-icon-wrap or-icon-red">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                    </div>
                    <div>
                      <div className="or-stat-number">50%</div>
                      <div className="or-stat-subtitle">of online risks</div>
                    </div>
                  </div>
                  <p className="or-stat-text">happen while children are using mobile phones.</p>
                  <p className="or-stat-source">Source: Bark Technologies</p>
                </div>

                <div className="or-stat-card">
                  <div className="or-stat-card-header">
                    <div className="or-icon-wrap or-icon-yellow">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    </div>
                    <div>
                      <div className="or-stat-number">1 in 3</div>
                      <div className="or-stat-subtitle">children</div>
                    </div>
                  </div>
                  <p className="or-stat-text">are exposed to inappropriate content before age 12.</p>
                  <p className="or-stat-source">Source: Common Sense Media</p>
                </div>
              </div>

              {/* Progress Stack */}
              <div className="or-progress-stack">
                <div className="or-progress-item">
                  <div className="or-progress-header">
                    <div className="or-progress-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg>
                    </div>
                    <div className="or-progress-text">
                      <h6>Online Threat Detection</h6>
                      <p>Detects risky activity before it becomes harmful.</p>
                    </div>
                    <div className="or-progress-value">80%</div>
                  </div>
                  <div className="or-progress-bar-container">
                    <div className="or-progress-bar-fill" style={{ width: '80%' }}></div>
                  </div>
                </div>

                <div className="or-progress-item">
                  <div className="or-progress-header">
                    <div className="or-progress-icon green">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                    </div>
                    <div className="or-progress-text">
                      <h6>Parent Peace of Mind</h6>
                      <p>Parents feel more confident with real-time monitoring.</p>
                    </div>
                    <div className="or-progress-value">75%</div>
                  </div>
                  <div className="or-progress-bar-container">
                    <div className="or-progress-bar-fill green" style={{ width: '75%' }}></div>
                  </div>
                </div>

                <div className="or-progress-item">
                  <div className="or-progress-header">
                    <div className="or-progress-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    </div>
                    <div className="or-progress-text">
                      <h6>Child Privacy Protection</h6>
                      <p>Your child's data is 100% private and never shared.</p>
                    </div>
                    <div className="or-progress-value">99.9%</div>
                  </div>
                  <div className="or-progress-bar-container">
                    <div className="or-progress-bar-fill" style={{ width: '99.9%' }}></div>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="or-trust-badge">
                <div className="or-trust-left">
                  <img src="/myimg/us-flag-icon.png" alt="USA Flag" className="or-flag-icon" onError={(e) => { e.target.onerror = null; e.target.src = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" }} />
                  <p>Proudly helping <strong>thousands of families across the USA</strong> create a safer digital environment for their children.</p>
                </div>
                <div className="or-trust-right">
                  <div className="or-avatars">
                    <img src="https://i.pravatar.cc/100?img=11" alt="Avatar 1" className="or-avatar" />
                    <img src="https://i.pravatar.cc/100?img=12" alt="Avatar 2" className="or-avatar" />
                    <img src="https://i.pravatar.cc/100?img=13" alt="Avatar 3" className="or-avatar" />
                    <div className="or-avatar-count">+12K</div>
                  </div>
                  <div className="or-trust-text">
                    Trusted by<br /><strong>12,000+ Parents</strong>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column */}
            <div className="or-right" style={{ position: 'relative' }}>
              <img src="/myimg/image copy 4.png" alt="Online Risks Map" className="or-asset-image" />
              {/* Invisible overlay over the baked-in button */}
              <Link to="/features" style={{ position: 'absolute', bottom: '4%', right: '4%', width: '40%', height: '10%', zIndex: 10, cursor: 'pointer' }} aria-label="Explore All Features"></Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: TRUSTED BY FAMILIES ACROSS THE USA --- */}
      <section className="vigil-trusted-parents-section" style={{ backgroundImage: 'url("/myimg/image copy 2.png")' }}>
        <div className="container">
          <div className="vigil-section-title-wrap text-center">
            <div className="vigil-stories-badge mx-auto">
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '6px' }}>
                <rect width="16" height="12" rx="1" fill="white" />
                <mask id="flag_mask" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="12">
                  <rect width="16" height="12" rx="1" fill="white" />
                </mask>
                <g mask="url(#flag_mask)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 0H16V1.71429H0V0ZM0 3.42857H16V5.14286H0V3.42857ZM0 6.85714H16V8.57143H0V6.85714ZM0 10.2857H16V12H0V10.2857Z" fill="#E31D1C" />
                  <rect width="7.61905" height="6.85714" fill="#1D2F6F" />
                  <circle cx="1.5" cy="1.5" r="0.4" fill="white" />
                  <circle cx="3.5" cy="1.5" r="0.4" fill="white" />
                  <circle cx="5.5" cy="1.5" r="0.4" fill="white" />
                  <circle cx="2.5" cy="3" r="0.4" fill="white" />
                  <circle cx="4.5" cy="3" r="0.4" fill="white" />
                  <circle cx="1.5" cy="4.5" r="0.4" fill="white" />
                  <circle cx="3.5" cy="4.5" r="0.4" fill="white" />
                  <circle cx="5.5" cy="4.5" r="0.4" fill="white" />
                </g>
              </svg>
              Real Parents. Real Stories. Real Protection.
            </div>

            {/* Sparkles Decorative SVG */}
            <svg className="vigil-section-sparkles" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>

            {/* Dotted Map Decorative SVG */}
            <svg className="vigil-section-map" width="120" height="80" viewBox="0 0 120 80" fill="currentColor">
              <circle cx="10" cy="20" r="1.5" />
              <circle cx="20" cy="15" r="1.5" />
              <circle cx="30" cy="25" r="1.5" />
              <circle cx="15" cy="35" r="1.5" />
              <circle cx="25" cy="45" r="1.5" />
              <circle cx="40" cy="10" r="1.5" />
              <circle cx="50" cy="20" r="1.5" />
              <circle cx="60" cy="15" r="1.5" />
              <circle cx="45" cy="30" r="1.5" />
              <circle cx="55" cy="40" r="1.5" />
              <circle cx="70" cy="25" r="1.5" />
              <circle cx="80" cy="15" r="1.5" />
              <circle cx="90" cy="20" r="1.5" />
              <circle cx="75" cy="35" r="1.5" />
              <circle cx="85" cy="45" r="1.5" />
              <circle cx="100" cy="10" r="1.5" />
              <circle cx="110" cy="25" r="1.5" />
              <circle cx="105" cy="40" r="1.5" />
              <circle cx="35" cy="55" r="1.5" />
              <circle cx="45" cy="65" r="1.5" />
              <circle cx="65" cy="55" r="1.5" />
              <circle cx="75" cy="65" r="1.5" />
              <circle cx="95" cy="55" r="1.5" />
            </svg>

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
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3F26D9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span className="vigil-ai-glow-tag" style={{ margin: 0 }}>AI-Powered Protection</span>
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: '800' }}>AI-Powered Protection</h4>
                <p>Real-time. Smart. Always On.</p>
              </div>
              <div className="vigil-ai-list">
                <div className="vigil-ai-list-item">
                  <div className="vigil-ai-list-icon vigil-icon-threat">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <div className="vigil-ai-list-content">
                    <h6>AI Threat Detection <span className="vigil-ai-list-mini-badge">AI</span></h6>
                    <p>Detects cyberbullying, dangerous content & online predators in real time.</p>
                  </div>
                </div>
                <div className="vigil-ai-list-item">
                  <div className="vigil-ai-list-icon vigil-icon-chat">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div className="vigil-ai-list-content">
                    <h6>Smart Chat Analysis <span className="vigil-ai-list-mini-badge">AI</span></h6>
                    <p>AI reads between the lines to identify concerning conversations or emotional distress.</p>
                  </div>
                </div>
                <div className="vigil-ai-list-item">
                  <div className="vigil-ai-list-icon vigil-icon-behavior">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="vigil-ai-list-content">
                    <h6>Behavior & Location <span className="vigil-ai-list-mini-badge">AI</span></h6>
                    <p>AI learns routines & flags unusual activities or risky locations instantly.</p>
                  </div>
                </div>
                <div className="vigil-ai-list-item">
                  <div className="vigil-ai-list-icon vigil-icon-reports">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                  </div>
                  <div className="vigil-ai-list-content">
                    <h6>Weekly AI Reports <span className="vigil-ai-list-mini-badge">AI</span></h6>
                    <p>Get easy-to-understand insights with AI summaries & actionable recommendations.</p>
                  </div>
                </div>
              </div>
              <div className="vigil-ai-sidebar-footer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-3.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2Z" />
                  <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-3.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2Z" />
                </svg>
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
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '3px', flexShrink: 0 }}>
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Austin, TX
                    </div>
                  </div>
                </div>
                <svg width="28" height="22" viewBox="0 0 48 38" fill="rgba(63, 38, 217, 0.08)" style={{ position: 'absolute', top: '-5px', right: 0 }}>
                  <path d="M19.2 0C10.7 7.4 5.3 16.4 5.3 24.3C5.3 32.1 10.3 37.1 16.8 37.1C22.6 37.1 27.2 32.5 27.2 26.7C27.2 20.9 22.8 16.5 17.1 16.5C16 16.5 14.4 16.8 13.9 17.1C14.7 11.2 19.5 5.1 24.3 1.4L19.2 0ZM42.7 0C34.1 7.4 28.8 16.4 28.8 24.3C28.8 32.1 33.9 37.1 40.3 37.1C46.1 37.1 50.7 32.5 50.7 26.7C50.7 20.9 46.3 16.5 40.5 16.5C39.5 16.5 37.9 16.8 37.3 17.1C38.1 11.2 43 5.1 47.7 1.4L42.7 0Z" />
                </svg>
              </div>
              <div className="vigil-stars-row">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#FFB800" stroke="#FFB800" style={{ marginRight: '2px', display: 'inline-block' }}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="vigil-testimony-quote">
                "Vigil's AI detected a highly concerning conversation in my 13-year-old son's direct chats before the situation could escalate. I received an instant notification on my phone, which allowed me to intervene immediately, sit down, and have an open conversation with him. It saved us from a really painful experience, and I honestly don't know how any modern parent manages without this peace of mind."
              </p>
              <div style={{ marginTop: 'auto' }}>
                <span className="vigil-use-case-btn">Use Case</span>
                <div className="vigil-context-bar">
                  <div className="vigil-context-icon">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <p>AI Chat Analysis detected potential cyberbullying and flagged it instantly.</p>
                </div>
              </div>
              <div className="vigil-testimony-footer">
                <span className="vigil-testimony-relation">Mother of 2</span>
                <div className="vigil-testimony-flag-pill">
                  <svg width="12" height="9" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                    <rect width="16" height="12" rx="1" fill="white" />
                    <mask id="flag_mask2" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="12">
                      <rect width="16" height="12" rx="1" fill="white" />
                    </mask>
                    <g mask="url(#flag_mask2)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 0H16V1.71429H0V0ZM0 3.42857H16V5.14286H0V3.42857ZM0 6.85714H16V8.57143H0V6.85714ZM0 10.2857H16V12H0V10.2857Z" fill="#E31D1C" />
                      <rect width="7.61905" height="6.85714" fill="#1D2F6F" />
                    </g>
                  </svg>
                  USA
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
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '3px', flexShrink: 0 }}>
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Denver, CO
                    </div>
                  </div>
                </div>
                <svg width="28" height="22" viewBox="0 0 48 38" fill="rgba(63, 38, 217, 0.08)" style={{ position: 'absolute', top: '-5px', right: 0 }}>
                  <path d="M19.2 0C10.7 7.4 5.3 16.4 5.3 24.3C5.3 32.1 10.3 37.1 16.8 37.1C22.6 37.1 27.2 32.5 27.2 26.7C27.2 20.9 22.8 16.5 17.1 16.5C16 16.5 14.4 16.8 13.9 17.1C14.7 11.2 19.5 5.1 24.3 1.4L19.2 0ZM42.7 0C34.1 7.4 28.8 16.4 28.8 24.3C28.8 32.1 33.9 37.1 40.3 37.1C46.1 37.1 50.7 32.5 50.7 26.7C50.7 20.9 46.3 16.5 40.5 16.5C39.5 16.5 37.9 16.8 37.3 17.1C38.1 11.2 43 5.1 47.7 1.4L42.7 0Z" />
                </svg>
              </div>
              <div className="vigil-stars-row">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#FFB800" stroke="#FFB800" style={{ marginRight: '2px', display: 'inline-block' }}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="vigil-testimony-quote">
                "The real-time location tracking is absolutely flawless! As a busy parent, getting automatic alerts the second my daughter leaves school, arrives at soccer practice, or enters an unfamiliar zone has completely changed my daily routine. I no longer have to constantly text her for updates while she's on the go, which gives both of us a lot more independence and confidence."
              </p>
              <div style={{ marginTop: 'auto' }}>
                <span className="vigil-use-case-btn">Use Case</span>
                <div className="vigil-context-bar">
                  <div className="vigil-context-icon">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <p>AI Location Intelligence tracked routines and alerted unusual deviations.</p>
                </div>
              </div>
              <div className="vigil-testimony-footer">
                <span className="vigil-testimony-relation">Father of 1</span>
                <div className="vigil-testimony-flag-pill">
                  <svg width="12" height="9" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                    <rect width="16" height="12" rx="1" fill="white" />
                    <mask id="flag_mask3" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="12">
                      <rect width="16" height="12" rx="1" fill="white" />
                    </mask>
                    <g mask="url(#flag_mask3)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 0H16V1.71429H0V0ZM0 3.42857H16V5.14286H0V3.42857ZM0 6.85714H16V8.57143H0V6.85714ZM0 10.2857H16V12H0V10.2857Z" fill="#E31D1C" />
                      <rect width="7.61905" height="6.85714" fill="#1D2F6F" />
                    </g>
                  </svg>
                  USA
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
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '3px', flexShrink: 0 }}>
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Chicago, IL
                    </div>
                  </div>
                </div>
                <svg width="28" height="22" viewBox="0 0 48 38" fill="rgba(63, 38, 217, 0.08)" style={{ position: 'absolute', top: '-5px', right: 0 }}>
                  <path d="M19.2 0C10.7 7.4 5.3 16.4 5.3 24.3C5.3 32.1 10.3 37.1 16.8 37.1C22.6 37.1 27.2 32.5 27.2 26.7C27.2 20.9 22.8 16.5 17.1 16.5C16 16.5 14.4 16.8 13.9 17.1C14.7 11.2 19.5 5.1 24.3 1.4L19.2 0ZM42.7 0C34.1 7.4 28.8 16.4 28.8 24.3C28.8 32.1 33.9 37.1 40.3 37.1C46.1 37.1 50.7 32.5 50.7 26.7C50.7 20.9 46.3 16.5 40.5 16.5C39.5 16.5 37.9 16.8 37.3 17.1C38.1 11.2 43 5.1 47.7 1.4L42.7 0Z" />
                </svg>
              </div>
              <div className="vigil-stars-row">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#FFB800" stroke="#FFB800" style={{ marginRight: '2px', display: 'inline-block' }}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="vigil-testimony-quote">
                "The weekly AI insights report is a total game changer for our family. It summarizes screen time, highlights trending apps they are downloading, flags potential risk zones, and even provides professional parenting tips on how to address digital challenges. I actually look forward to reading the PDF report every Sunday morning over coffee!"
              </p>
              <div style={{ marginTop: 'auto' }}>
                <span className="vigil-use-case-btn">Use Case</span>
                <div className="vigil-context-bar">
                  <div className="vigil-context-icon">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <p>AI Weekly Report summarized screen time, app usage & content risks.</p>
                </div>
              </div>
              <div className="vigil-testimony-footer">
                <span className="vigil-testimony-relation">Mother of 3</span>
                <div className="vigil-testimony-flag-pill">
                  <svg width="12" height="9" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                    <rect width="16" height="12" rx="1" fill="white" />
                    <mask id="flag_mask4" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="12">
                      <rect width="16" height="12" rx="1" fill="white" />
                    </mask>
                    <g mask="url(#flag_mask4)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 0H16V1.71429H0V0ZM0 3.42857H16V5.14286H0V3.42857ZM0 6.85714H16V8.57143H0V6.85714ZM0 10.2857H16V12H0V10.2857Z" fill="#E31D1C" />
                      <rect width="7.61905" height="6.85714" fill="#1D2F6F" />
                    </g>
                  </svg>
                  USA
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
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '3px', flexShrink: 0 }}>
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Seattle, WA
                    </div>
                  </div>
                </div>
                <svg width="28" height="22" viewBox="0 0 48 38" fill="rgba(63, 38, 217, 0.08)" style={{ position: 'absolute', top: '-5px', right: 0 }}>
                  <path d="M19.2 0C10.7 7.4 5.3 16.4 5.3 24.3C5.3 32.1 10.3 37.1 16.8 37.1C22.6 37.1 27.2 32.5 27.2 26.7C27.2 20.9 22.8 16.5 17.1 16.5C16 16.5 14.4 16.8 13.9 17.1C14.7 11.2 19.5 5.1 24.3 1.4L19.2 0ZM42.7 0C34.1 7.4 28.8 16.4 28.8 24.3C28.8 32.1 33.9 37.1 40.3 37.1C46.1 37.1 50.7 32.5 50.7 26.7C50.7 20.9 46.3 16.5 40.5 16.5C39.5 16.5 37.9 16.8 37.3 17.1C38.1 11.2 43 5.1 47.7 1.4L42.7 0Z" />
                </svg>
              </div>
              <div className="vigil-stars-row">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#FFB800" stroke="#FFB800" style={{ marginRight: '2px', display: 'inline-block' }}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="vigil-testimony-quote">
                "Vigil's smart web filter blocked a highly explicit, phishing website my son tried to access through a shared link in a group chat. The protection works seamlessly behind the scenes 24/7 without slowing down his phone or feeling invasive. It is like having a private, digital guardian always watching over his shoulder, and it is worth every single penny."
              </p>
              <div style={{ marginTop: 'auto' }}>
                <span className="vigil-use-case-btn">Use Case</span>
                <div className="vigil-context-bar">
                  <div className="vigil-context-icon">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                      <circle cx="12" cy="12" r="10" />
                      <path d="m8.5 12.5 3 3 6-6" />
                    </svg>
                  </div>
                  <p>AI Web Protection blocked access to explicit content in real time.</p>
                </div>
              </div>
              <div className="vigil-testimony-footer">
                <span className="vigil-testimony-relation">Father of 2</span>
                <div className="vigil-testimony-flag-pill">
                  <svg width="12" height="9" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                    <rect width="16" height="12" rx="1" fill="white" />
                    <mask id="flag_mask5" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="12">
                      <rect width="16" height="12" rx="1" fill="white" />
                    </mask>
                    <g mask="url(#flag_mask5)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 0H16V1.71429H0V0ZM0 3.42857H16V5.14286H0V3.42857ZM0 6.85714H16V8.57143H0V6.85714ZM0 10.2857H16V12H0V10.2857Z" fill="#E31D1C" />
                      <rect width="7.61905" height="6.85714" fill="#1D2F6F" />
                    </g>
                  </svg>
                  USA
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Metrics Trust Pill Banner */}
          <div className="vigil-trust-stats-pill-banner">
            <div className="vigil-trust-stats-pill-banner-left">
              <div className="shield-icon" style={{ backgroundColor: '#3F26D9', color: '#FFFFFF', padding: '12px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 11 11 13 15 9" />
                </svg>
              </div>
              <div className="text-box">
                <h6>Trusted by Thousands of Families Across the USA</h6>
                <p>Because your child's safety deserves the best.</p>
              </div>
            </div>

            <div className="vigil-trust-stats-pill-divider"></div>

            <div className="vigil-trust-stats-pill-item">
              <div className="icon-box" style={{ backgroundColor: '#F3E8FF', color: '#8B5CF6' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
              </div>
              <div className="text-box">
                <h6>12,000+</h6>
                <p>Happy Families Protected & Growing</p>
              </div>
            </div>

            <div className="vigil-trust-stats-pill-divider"></div>

            <div className="vigil-trust-stats-pill-item">
              <div className="icon-box" style={{ backgroundColor: '#DCFCE7', color: '#16A34A' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="8 12 11 15 16 9" />
                </svg>
              </div>
              <div className="text-box">
                <h6>99.9%</h6>
                <p>AI Detection Accuracy You Can Rely On</p>
              </div>
            </div>

            <div className="vigil-trust-stats-pill-divider"></div>

            <div className="vigil-trust-stats-pill-item">
              <div className="icon-box" style={{ backgroundColor: '#FFEDD5', color: '#EA580C' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </div>
              <div className="text-box">
                <h6>2M+</h6>
                <p>Real-time Alerts Delivered</p>
              </div>
            </div>

            <div className="vigil-trust-stats-pill-divider"></div>

            <div className="vigil-trust-stats-pill-item">
              <div className="icon-box" style={{ backgroundColor: '#DBEAFE', color: '#2563EB' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div className="text-box">
                <h6>100%</h6>
                <p>Private & Secure Your Data Stays Yours</p>
              </div>
            </div>

            <div className="vigil-trust-stats-pill-divider"></div>

            <div className="vigil-trust-stats-pill-item">
              <div className="icon-box" style={{ backgroundColor: '#FFE4E6', color: '#E11D48' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <div className="text-box">
                <h6>24/7</h6>
                <p>AI Monitoring Always On Guard</p>
              </div>
            </div>

            <div className="vigil-trust-stats-pill-divider"></div>

            <div className="vigil-trust-stats-pill-banner-right">
              <div className="map-icon">
                <svg width="32" height="20" viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <circle cx="8" cy="8" r="2" fill="currentColor" />
                  <circle cx="16" cy="14" r="2" fill="currentColor" />
                  <circle cx="24" cy="6" r="2" fill="currentColor" />
                  <circle cx="32" cy="16" r="2" fill="currentColor" />
                  <line x1="8" y1="8" x2="16" y2="14" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="16" y1="14" x2="24" y2="6" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="24" y1="6" x2="32" y2="16" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                </svg>
              </div>
              <p>Proudly protecting families in every state across the USA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS SECTION --- */}
      <HowItWorks />
    </>
  );
}

export default Home;
