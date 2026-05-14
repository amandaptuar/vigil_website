import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Terms() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init();
    }
  }, []);

  return (
    <>
      <div className="breadcrumb-wrapper" style={{ backgroundImage: 'url(/assets/images/v3/thumb3.png)' }}>
        <div className="container">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-title">Terms &amp; Conditions</h1>
            <div className="breadcrumb-menu-wrapper">
              <div className="breadcrumb-menu-wrap">
                <div className="breadcrumb-menu">
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><img src="/assets/images/breadcrumb/right-arrow.svg" alt="right-arrow" /></li>
                    <li aria-current="page">Terms &amp; Conditions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="luminix-padding-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <nav id="scroll-btn" className="scroll-btn" data-aos="fade-up" data-aos-duration="700">
                <ul className="nav-menu">
                  <li>
                    <a data-scroll="home" href="#home" className="luminix-default-btn pill faq-btn active">Terms & Conditions
                      <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2139 1.5L17.7139 8M17.7139 8L11.2139 14.5M17.7139 8L0.999581 8" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M11.2139 1.5L17.7139 8M17.7139 8L11.2139 14.5M17.7139 8L0.999581 8" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a data-scroll="about" href="#about" className="luminix-default-btn pill faq-btn">Privacy Policy
                      <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2139 1.5L17.7139 8M17.7139 8L11.2139 14.5M17.7139 8L0.999581 8" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M11.2139 1.5L17.7139 8M17.7139 8L11.2139 14.5M17.7139 8L0.999581 8" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-9">
              <section id="home" className="section">
                <div className="luminix-term-condition-content">
                  <p className="title-text">These Terms &amp; Conditions govern your use of Vigil's parental monitoring services (the "Service"). By creating an account or activating monitoring on any device, you agree to be bound by these terms.</p>
                  <h3>Services Provided:</h3>
                  <p>Vigil offers a suite of parental monitoring tools including, but not limited to, real-time screen activity tracking, GPS location monitoring, web content filtering, app usage controls, cyberbullying detection, and weekly family reports, as specified in your selected subscription plan.</p>
                </div>
                <div className="luminix-term-condition-content">
                  <h3>Subscription &amp; Billing:</h3>
                  <p>Vigil subscriptions are billed monthly or annually. Your subscription renews automatically unless cancelled before the next billing date. You may cancel at any time through your account dashboard. No refunds are provided for partial billing periods. We reserve the right to update pricing with 30 days' advance notice.</p>
                </div>
                <div className="luminix-term-condition-content">
                  <h3>Parental Consent &amp; Legal Use:</h3>
                  <p>Vigil's services are intended exclusively for parents and legal guardians of minor children. By activating monitoring on a device, you confirm that you are the parent or legal guardian of the child using that device and that you have the legal right to monitor it under applicable global data protection laws. Vigil is not intended to monitor adults without their knowledge.</p>
                </div>
                <div className="luminix-term-condition-content">
                  <h3>Privacy Compliance:</h3>
                  <p>Vigil fully complies with universal children's online privacy protection standards. We do not knowingly collect personal information from children under 13 directly. All child-related data is collected through the parent's account and is used solely to provide the monitoring service.</p>
                </div>
                <div className="luminix-term-condition-content">
                  <h3>Cancellation &amp; Termination:</h3>
                  <p>You may cancel your Vigil subscription at any time. Upon cancellation, your access will continue until the end of your current billing period. Vigil reserves the right to suspend or terminate accounts that violate these Terms, engage in illegal activity, or misuse monitoring features for unauthorized purposes.</p>
                </div>
                <div className="luminix-term-condition-content">
                  <h3>Dispute Resolution:</h3>
                  <p>Any disputes arising from your use of Vigil's services will first be addressed through our customer support team. Unresolved disputes shall be settled through binding arbitration in accordance with established international arbitration rules, and shall not be brought as class action lawsuits.</p>
                </div>
                <div className="luminix-term-condition-content">
                  <h3>Governing Law:</h3>
                  <p>These Terms &amp; Conditions are governed by international data protection principles and the laws of the jurisdiction in which the Service is primary provided. Any legal proceedings not subject to arbitration shall be brought in the competent courts of that jurisdiction.</p>
                </div>
              </section>

              <section id="about" className="section">
                <div className="luminix-term-condition-content">
                  <p className="title-text">This Privacy Policy explains how Vigil collects, uses, and protects your personal information and your child's data. We are committed to the highest global standards of data privacy and child safety.</p>
                  <h3>What We Collect:</h3>
                  <p>We collect the information you provide at signup (name, email, billing info) and the monitoring data generated by your child's device (app usage, websites visited, location, screen activity). All data is encrypted in transit and at rest using AES-256 encryption.</p>
                </div>
                <div className="luminix-term-condition-content">
                  <h3>How We Use Your Data:</h3>
                  <p>Your data is used solely to provide, improve, and support the Vigil service. We never sell, rent, or share your personal information or your child's data with third-party advertisers. We may share anonymized, aggregated statistics to improve online child safety research.</p>
                </div>
                <div className="luminix-term-condition-content">
                  <h3>Data Retention:</h3>
                  <p>Activity logs and location history are retained for the duration of your subscription as specified by your plan (7 days, 30 days, or unlimited, depending on your tier). Upon account cancellation, all personal data is deleted within 30 days.</p>
                </div>
                <div className="luminix-term-condition-content">
                  <h3>Your Privacy Rights:</h3>
                  <p>Regardless of your location, you have the right to request access to the personal data we hold about you, request deletion of that data, and opt out of any future data usage. We do not sell your personal data to third parties. To exercise these rights, contact us at privacy@vigilapp.com.</p>
                </div>
                <div className="luminix-term-condition-content">
                  <h3>Security:</h3>
                  <p>Vigil employs industry-leading security practices including end-to-end encryption, two-factor authentication, regular third-party security audits, and secure, distributed data centers. In the unlikely event of a data breach, we will notify affected users within 72 hours as required by applicable data protection laws.</p>
                </div>
                <div className="luminix-term-condition-content">
                  <h3>Contact Our Privacy Team:</h3>
                  <p>For any privacy-related questions or requests, please contact us at privacy@vigilapp.com or through our global support center as listed on our Contact page.</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <section className="luminix-cta-section section" style={{ backgroundImage: 'url(/assets/images/cta/thumb1.png)' }}>
        <div className="container">
          <div className="luminix-cta-wrap">
            <h2>Your kids deserve a safer internet. Start protecting them with Vigil today.</h2>
            <div className="luminix-cta-btn-title mt-50">
              <Link to="/contact" className="luminix-default-btn pill extra-btn2">Get In Touch
                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.2139 1.5L17.7139 8M17.7139 8L11.2139 14.5M17.7139 8L0.999581 8" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M11.2139 1.5L17.7139 8M17.7139 8L11.2139 14.5M17.7139 8L0.999581 8" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </Link>
              <Link to="/contact" className="luminix-default-btn pill cta-btn3">Still have questions?</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Terms;
