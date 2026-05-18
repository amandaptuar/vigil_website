import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
  const steps = [
    {
      id: '01',
      title: 'Create Your Account',
      desc: 'Sign up and create your secure Vigil account in just a few minutes.',
      img: '/myimg/screen1.png',
      pillText: '100% Secure & Private',
      pillIcon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    },
    {
      id: '02',
      title: "Add Your Child's Device",
      desc: 'Enter the basic details for the device you want to protect.',
      img: '/myimg/screen2.png',
      pillText: 'Works on Android & iOS',
      pillIcon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      )
    },
    {
      id: '03',
      title: 'Install Vigil on Their Phone',
      desc: 'Scan the QR code or use the link to download and install the app.',
      img: '/myimg/screen3.png',
      pillText: 'Quick & Easy Setup',
      pillIcon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      )
    },
    {
      id: '04',
      title: 'Device Connected',
      desc: 'The app is now active and syncing data securely to your dashboard.',
      img: '/myimg/screen4.png',
      pillText: 'Real-time Syncing',
      pillIcon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      )
    },
    {
      id: '05',
      title: "You're All Set!",
      desc: 'Monitor location, chats, and web activity straight from your phone.',
      img: '/myimg/screen5.png',
      pillText: 'Peace of Mind, Always',
      pillIcon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      )
    }
  ];

  return (
    <section className="vigil-hiw-section">
      <div className="container">
        
        {/* Header Area */}
        <div className="vigil-hiw-header-area" data-aos="fade-up" data-aos-duration="800">
          <div className="vigil-hiw-pre-header">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Get Started in Minutes
          </div>
          <h2 className="vigil-hiw-title">
            How to Sign Up with Vigil &<br />
            Get It on Your Child's Phone
          </h2>
          <p className="vigil-hiw-subtitle">
            Vigil is easy to set up and even easier to use. Follow these simple steps to start protecting your child today.
          </p>
        </div>

        {/* Steps Cards Row */}
        <div className="vigil-hiw-steps-container">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="vigil-hiw-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 100}>
                <div className="vigil-hiw-number-badge">{step.id}</div>
                <div className="vigil-hiw-image-wrap">
                  <img src={step.img} alt={step.title} />
                </div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
                <div className="vigil-hiw-pill">
                  {step.pillIcon}
                  <span>{step.pillText}</span>
                </div>
              </div>
              
              {/* Chevron between cards (Desktop Only) */}
              {index < steps.length - 1 && (
                <div className="vigil-hiw-chevron">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
