import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FeaturesPage.css';

function Features() {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true
      });
    }
  }, []);

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  const faqData = [
    {
      question: "How does Vigil monitor social media?",
      answer: "Vigil connects securely to popular social platforms like Instagram, WhatsApp, Snapchat, and TikTok to analyze conversations for signs of cyberbullying, online predators, and inappropriate content. Our advanced AI scans messaging content in real-time, alerting you immediately if suspicious activity is detected, while respecting your child's general digital privacy."
    },
    {
      question: "Is the installation difficult?",
      answer: "Not at all. Vigil is designed for everyday parents. Setting up the application takes under 5 minutes. After signing up, simply download the parent app on your device, scan the QR code on your child's device to link them, and configure your monitoring preferences. Step-by-step instructions are provided during setup."
    },
    {
      question: "Can my child detect Vigil on their phone?",
      answer: "Vigil is designed to run discreetly in the background of your child's device, ensuring they can use their phone naturally without constant distractions. While we encourage parents to have open conversations about digital safety, the app does not send intrusive alerts or slow down the device."
    },
    {
      question: "Does it work on iOS and Android?",
      answer: "Yes, Vigil offers cross-platform support. You can manage everything from a single parent dashboard, regardless of whether you are on an iPhone, Android phone, tablet, laptop, or desktop computer. The child monitoring app is fully compatible with both iOS and Android platforms."
    },
    {
      question: "Is our family's data safe and secure?",
      answer: "Absolutely. Security is our top priority. All monitored data, messages, locations, and call logs are encrypted end-to-end using bank-grade AES-256 encryption. Only you have access to this information. We never sell, lease, or share your family's personal data with third-party advertising companies."
    },
    {
      question: "How does real-time location tracking work?",
      answer: "Using the GPS module on your child's device, Vigil sends periodic location updates to your parent dashboard. You can define custom 'Geo-Fences' (safe zones) such as 'Home', 'School', or 'Soccer Field'. If your child enters or leaves these predefined zones, you will receive an instant push notification."
    }
  ];

  return (
    <div className="features-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="features-hero-section">
        <div className="features-container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-xl-6" data-aos="fade-right">
              <div className="features-hero-text-wrap">
                <span className="features-badge primary">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  VIGIL FEATURES
                </span>
                <h1 className="features-hero-title">
                  Powerful Features.<br />
                  <span className="highlight">Complete Protection.</span>
                </h1>
                <div className="features-accent-line"></div>
                <p className="features-hero-subtitle">
                  Explore VIGIL's advanced monitoring and AI-powered safety tools designed to help parents protect children in today's digital world.
                </p>
                <div className="features-hero-buttons">
                  <button 
                    onClick={() => {
                      document.getElementById('features-grid')?.scrollIntoView({ behavior: 'smooth' });
                    }} 
                    className="btn-vigil-primary"
                    style={{ border: 'none' }}
                  >
                    Explore Features
                  </button>
                  <Link to="/contact" className="btn-vigil-secondary">
                    Contact Sales
                  </Link>
                </div>
                <div className="features-hero-checklist">
                  <div className="features-hero-check-item">
                    <span className="features-hero-check-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    50K+ Families Protected
                  </div>
                  <div className="features-hero-check-item">
                    <span className="features-hero-check-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    AI Powered Monitoring
                  </div>
                  <div className="features-hero-check-item">
                    <span className="features-hero-check-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    Real-Time Alerts
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GRID SECTION */}
      <section className="features-grid-section" id="features-grid">
        <div className="features-container">
          <div className="features-grid-header" data-aos="fade-up">
            <span className="features-badge">CORE PROTECTION</span>
            <h2 className="features-grid-title">Everything You Need To Keep Kids Safe</h2>
            <div className="features-accent-line center"></div>
            <p className="features-grid-subtitle">
              All-in-one monitoring tools built for modern parents. Run silently in the background while feeding insights straight to your dashboard.
            </p>
          </div>

          <div className="features-grid-layout" data-aos="fade-up">
            {/* Card 1 */}
            <div className="features-card">
              <div className="features-card-icon-wrap bg-light-blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor" /></svg>
              </div>
              <h3 className="features-card-title">Real-Time Location</h3>
              <ul className="features-card-bullets">
                <li className="features-card-bullet-item">
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  Live GPS tracking coordinates updated every 60 seconds
                </li>
                <li className="features-card-bullet-item">
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  Geofencing zones for school, home, and custom locations
                </li>
                <li className="features-card-bullet-item">
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  Historic travel routes and location timestamps
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="features-card">
              <div className="features-card-icon-wrap bg-light-green">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor" /></svg>
              </div>
              <h3 className="features-card-title">Call Monitoring</h3>
              <ul className="features-card-bullets">
                <li className="features-card-bullet-item">
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  Track incoming and outgoing calls with full details
                </li>
                <li className="features-card-bullet-item">
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  Detailed logs showing durations and contact names
                </li>
                <li className="features-card-bullet-item">
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  Block spam and restricted caller numbers remotely
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="features-card">
              <div className="features-card-icon-wrap bg-light-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM6 9H18V11H6V9ZM6 5H18V7H6V5ZM14 13H6V15H14V13Z" fill="currentColor" /></svg>
              </div>
              <h3 className="features-card-title">SMS & Text Logs</h3>
              <ul className="features-card-bullets">
                <li className="features-card-bullet-item">
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  Read sent and received SMS messages instantly
                </li>
                <li className="features-card-bullet-item">
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  Recover deleted texts and messaging histories
                </li>
                <li className="features-card-bullet-item">
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  Keyword alerts for custom flagged words
                </li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="features-card">
              <div className="features-card-icon-wrap bg-light-orange">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 8H20V5H4V8ZM20 10H4V19H20V10ZM20 3C21.1 3 22 3.9 22 5V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V5C2 3.9 2.9 3 4 3H20Z" fill="currentColor" /></svg>
              </div>
              <h3 className="features-card-title">Social Media Tracker</h3>
              <ul className="features-card-bullets">
                <li className="features-card-bullet-item">
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  Monitor chats on Instagram, Snapchat, and WhatsApp
                </li>
                <li className="features-card-bullet-item">
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  View shared media, links, voice notes, and posts
                </li>
                <li className="features-card-bullet-item">
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  Flag cyberbullying, predator flags, and distress
                </li>
              </ul>
            </div>

            {/* Card 5 */}
            <div className="features-card">
              <div className="features-card-icon-wrap bg-light-red">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="currentColor" /></svg>
              </div>
              <h3 className="features-card-title">Gallery & Media Access</h3>
              <ul className="features-card-bullets">
                <li className="features-card-bullet-item">
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  View photos and videos stored on the device
                </li>
                <li className="features-card-bullet-item">
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  Monitor newly captured and downloaded media files
                </li>
                <li className="features-card-bullet-item">
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  Automatic flagging of potentially sensitive materials
                </li>
              </ul>
            </div>

            {/* Card 6 */}
            <div className="features-card">
              <div className="features-card-icon-wrap bg-light-cyan">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 className="features-card-title">AI Threat Detection</h3>
              <ul className="features-card-bullets">
                <li className="features-card-bullet-item">
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  Real-time pattern analysis for dangerous keywords
                </li>
                <li className="features-card-bullet-item">
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  Instantly flags adult content and self-harm searches
                </li>
                <li className="features-card-bullet-item">
                  <span style={{ color: '#10B981', marginRight: '8px' }}>✓</span>
                  Send emergency warnings straight to parent phones
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SMART MONITORING SECTION */}
      <section className="features-smart-section">
        <div className="features-container">
          <div className="row justify-content-end">
            <div className="col-lg-6 col-xl-5" data-aos="fade-left">
              <div className="features-smart-text-wrap">
                <span className="features-badge cyan">EASY DASHBOARD</span>
                <h2 className="features-smart-title">Smart Monitoring Made Simple</h2>
                <div className="features-accent-line"></div>
                <p className="features-smart-desc">
                  VIGIL combines advanced AI technology with a simple interface to give parents complete peace of mind. Check locations, limit apps, and view chats in one unified hub.
                </p>
                <ul className="features-checklist">
                  <li className="features-checklist-item">
                    <span className="features-checklist-icon blue">✓</span>
                    Easy-to-use dashboard with interactive maps and charts
                  </li>
                  <li className="features-checklist-item">
                    <span className="features-checklist-icon blue">✓</span>
                    Secure encrypted system protecting child privacy
                  </li>
                  <li className="features-checklist-item">
                    <span className="features-checklist-icon blue">✓</span>
                    Real-time synchronization across all linked apps
                  </li>
                  <li className="features-checklist-item">
                    <span className="features-checklist-icon blue">✓</span>
                    Multi-device support for parents with several children
                  </li>
                  <li className="features-checklist-item">
                    <span className="features-checklist-icon blue">✓</span>
                    Instant notifications when safety rules are triggered
                  </li>
                </ul>
                <Link to="/contact" className="btn-vigil-primary">
                  Start Monitoring
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS SECTION */}
      <section className="features-works-section">
        <div className="features-container">
          <div className="features-works-header" data-aos="fade-up">
            <span className="features-badge">3 SIMPLE STEPS</span>
            <h2 className="features-works-title">How <span className="highlight">VIGIL</span> Works</h2>
            <div className="features-accent-line center"></div>
          </div>

          <div className="features-works-steps" data-aos="fade-up">
            {/* Step 1 */}
            <div className="features-step-item">
              <div className="features-step-number-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path></svg>
                <span className="features-step-badge">1</span>
              </div>
              <h4 className="features-step-title">Install VIGIL</h4>
              <p className="features-step-desc">Download and install the lightweight app on your child's mobile device.</p>
            </div>

            {/* Step 2 */}
            <div className="features-step-item">
              <div className="features-step-number-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="3"></rect><rect x="14" y="7" width="3" height="3"></rect><rect x="7" y="14" width="3" height="3"></rect><rect x="14" y="14" width="3" height="3"></rect></svg>
                <span className="features-step-badge">2</span>
              </div>
              <h4 className="features-step-title">Connect Devices</h4>
              <p className="features-step-desc">Link devices instantly by scanning the QR code inside your parent dashboard.</p>
            </div>

            {/* Step 3 */}
            <div className="features-step-item">
              <div className="features-step-number-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                <span className="features-step-badge">3</span>
              </div>
              <h4 className="features-step-title">Monitor & Protect</h4>
              <p className="features-step-desc">Receive smart updates, view chats, and set usage limits from anywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AI FAMILY PROTECTION SECTION */}
      <section className="features-ai-section">
        <div className="features-container">
          <div className="row">
            <div className="col-lg-6 col-xl-5" data-aos="fade-right">
              <div className="features-ai-text-wrap">
                <span className="features-badge primary">AI SECURITY</span>
                <h2 className="features-ai-title">AI Powered Family Protection</h2>
                <div className="features-accent-line"></div>
                <p className="features-ai-desc">
                  Advanced AI analyzes behavioral patterns and instantly alerts parents about suspicious or risky digital activity, without invading your child's general conversations.
                </p>
                <ul className="features-checklist">
                  <li className="features-checklist-item">
                    <span className="features-checklist-icon cyan">✓</span>
                    Behavioral analysis mapping normal device routines
                  </li>
                  <li className="features-checklist-item">
                    <span className="features-checklist-icon cyan">✓</span>
                    Emergency notifications for potential grooming signs
                  </li>
                  <li className="features-checklist-item">
                    <span className="features-checklist-icon cyan">✓</span>
                    Smart alerts grouping similar digital trends
                  </li>
                  <li className="features-checklist-item">
                    <span className="features-checklist-icon cyan">✓</span>
                    Real-time AI monitoring keeping kids safe 24/7
                  </li>
                </ul>
                <Link to="/contact" className="btn-vigil-primary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MORE POWERFUL FEATURES SECTION */}
      <section className="features-carousel-section">
        <div className="features-container">
          <div className="features-carousel-header" data-aos="fade-up">
            <span className="features-badge">EXPLORE MORE</span>
            <h2 className="features-carousel-title">More Powerful Features</h2>
            <div className="features-accent-line center"></div>
          </div>

          <div className="features-carousel-grid" data-aos="fade-up">
            {/* Item 1 */}
            <div className="features-mini-card">
              <div className="features-mini-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h4 className="features-mini-title">Screen Time limits</h4>
              <p className="features-mini-desc">Set limits for app usage or schedule bedtime blocks to promote healthier offline habits.</p>
            </div>
            {/* Item 2 */}
            <div className="features-mini-card">
              <div className="features-mini-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
              <h4 className="features-mini-title">Website Filtering</h4>
              <p className="features-mini-desc">Automatically block explicit sites and adult searches with customizable category blocks.</p>
            </div>
            {/* Item 3 */}
            <div className="features-mini-card">
              <div className="features-mini-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
              </div>
              <h4 className="features-mini-title">Geo Fencing</h4>
              <p className="features-mini-desc">Receive immediate push alerts when your child exits safe zones like home or school.</p>
            </div>
            {/* Item 4 */}
            <div className="features-mini-card">
              <div className="features-mini-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              </div>
              <h4 className="features-mini-title">Emergency SOS</h4>
              <p className="features-mini-desc">An instant SOS panic button on your child's phone shares their live location and records ambient audio.</p>
            </div>
            {/* Item 5 */}
            <div className="features-mini-card">
              <div className="features-mini-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <h4 className="features-mini-title">Cloud Sync</h4>
              <p className="features-mini-desc">Device logs upload securely to your private cloud storage for offline review at any time.</p>
            </div>
            {/* Item 6 */}
            <div className="features-mini-card">
              <div className="features-mini-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
              </div>
              <h4 className="features-mini-title">Privacy Protection</h4>
              <p className="features-mini-desc">All user logs are stored using AES-256 encryption. We never sell your children's data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. STATS BANNER */}
      <section className="features-stats-section">
        <div className="features-container">
          <div className="features-stats-flex">
            <div className="features-stat-item">
              <div className="features-stat-num">50K+</div>
              <div className="features-stat-label">Families Protected</div>
            </div>
            <div className="features-stat-item">
              <div className="features-stat-num">120+</div>
              <div className="features-stat-label">Countries</div>
            </div>
            <div className="features-stat-item">
              <div className="features-stat-num">Real-Time</div>
              <div className="features-stat-label">Monitoring</div>
            </div>
            <div className="features-stat-item">
              <div className="features-stat-num">99.9%</div>
              <div className="features-stat-label">Security Commitment</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="features-testimonials-section">
        <div className="features-container">
          <div className="features-testi-header" data-aos="fade-up">
            <span className="features-badge">PARENT REVIEWS</span>
            <h2 className="features-testi-title">Trusted By Parents Worldwide</h2>
            <div className="features-accent-line center"></div>
          </div>

          <div className="features-testi-grid" data-aos="fade-up">
            {/* Testimonial 1 */}
            <div className="features-testi-card">
              <div className="features-testi-stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill"></i>
                ))}
              </div>
              <p className="features-testi-quote">
                "VIGIL's location tracking gives me total peace of mind. I know exactly when my children arrive at school and when they leave. I highly recommend it!"
              </p>
              <div className="features-testi-author">
                <img src="/myimg/parent1.png" alt="Sarah Johnson" className="features-testi-avatar" />
                <div>
                  <h4 className="features-testi-name">Sarah Johnson</h4>
                  <p className="features-testi-role">Mother of 2</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="features-testi-card">
              <div className="features-testi-stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill"></i>
                ))}
              </div>
              <p className="features-testi-quote">
                "Setting up VIGIL was incredibly simple. The dashboard provides clean reports on chat activity, letting me easily protect my son from cyberbullying."
              </p>
              <div className="features-testi-author">
                <img src="/myimg/parent2.png" alt="Michael Carter" className="features-testi-avatar" />
                <div>
                  <h4 className="features-testi-name">Michael Carter</h4>
                  <p className="features-testi-role">Father of 1</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="features-testi-card">
              <div className="features-testi-stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill"></i>
                ))}
              </div>
              <p className="features-testi-quote">
                "The screen time controls and app filter changed our household dynamics. Bedtimes are now phone-free and peaceful. Excellent product."
              </p>
              <div className="features-testi-author">
                <img src="/myimg/parent3.png" alt="Emily Roberts" className="features-testi-avatar" />
                <div>
                  <h4 className="features-testi-name">Emily Roberts</h4>
                  <p className="features-testi-role">Mother of 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="features-faq-section">
        <div className="features-container">
          <div className="features-faq-header" data-aos="fade-up">
            <span className="features-badge">COMMON QUESTIONS</span>
            <h2 className="features-faq-title">Frequently Asked Questions</h2>
            <div className="features-accent-line center"></div>
          </div>

          <div className="features-faq-grid" data-aos="fade-up">
            {faqData.map((faq, index) => (
              <div key={index} className={`features-faq-item ${activeFaq === index ? 'active' : ''}`}>
                <button className="features-faq-question" onClick={() => toggleFaq(index)}>
                  {faq.question}
                  <span className="features-faq-icon">+</span>
                </button>
                <div className="features-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FOOTER CTA SECTION */}
      <section className="features-cta-section">
        <div className="features-cta-glow"></div>
        <div className="features-container">
          <div className="features-cta-wrap">
            <div className="features-cta-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h2 className="features-cta-title">Start Protecting Your Family Today</h2>
            <p className="features-cta-desc">
              Join thousands of families using VIGIL to create a safer, healthier digital environment for their children. Setup takes under 5 minutes.
            </p>
            <div className="features-cta-buttons">
              <Link to="/contact" className="btn-vigil-green">
                Get Started Today
              </Link>
              <Link to="/contact" className="btn-vigil-secondary" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#FFFFFF !important' }}>
                Book A Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
