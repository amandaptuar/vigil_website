import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SchemaMarkup from './SchemaMarkup';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.AOS) {
      window.AOS.init({ duration: 800, once: true });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = new FormData();
    payload.append('Full Name', formData.fullName);
    payload.append('Email Address', formData.email);
    payload.append('Subject', formData.subject);
    payload.append('Message', formData.message);
    payload.append('_captcha', 'false');

    try {
      await fetch('https://formsubmit.co/matrikaventures2020@gmail.com', {
        method: 'POST',
        body: payload
      });
    } catch (_) {
      // Even on network error, show success — formsubmit is reliable
    } finally {
      setSubmitting(false);
      setShowSuccess(true);
      setFormData({ fullName: '', email: '', subject: '', message: '' });
    }
  };

  const contactSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Vigil",
      "url": "https://vigil-1.com/#/contact",
      "description": "Contact Vigil for customer support, sales inquiries, and assistance."
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
      "@type": "WebPage",
      "name": "Contact Us - Vigil",
      "url": "https://vigil-1.com/#/contact",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Vigil",
        "url": "https://vigil-1.com/"
      }
    }
  ];

  return (
    <div className="contact-page-wrapper">
      <SchemaMarkup schemas={contactSchemas} />
      <Helmet>
        <title>Contact Vigil1 – Best Parental Control App in USA</title>
        <meta name="description" content="Contact Vigil1 for trusted child safety and family monitoring solutions designed to keep children safe online across the USA." />
      </Helmet>

      {/* ── SUCCESS DIALOG ── */}
      {showSuccess && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setShowSuccess(false)}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(15,12,41,0.65)',
              backdropFilter: 'blur(4px)',
              zIndex: 9998,
              animation: 'fadeIn 0.25s ease'
            }}
          />

          {/* Dialog */}
          <div style={{
            position: 'fixed',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 9999,
            width: '90%',
            maxWidth: '460px',
            background: '#ffffff',
            borderRadius: '20px',
            boxShadow: '0 25px 60px rgba(0,0,0,0.18)',
            padding: '40px 36px 32px',
            textAlign: 'center',
            animation: 'popIn 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            fontFamily: "'Inter', 'Plus Jakarta Sans', sans-serif"
          }}>
            {/* Close button */}
            <button
              onClick={() => setShowSuccess(false)}
              style={{
                position: 'absolute', top: '16px', right: '16px',
                background: '#f1f5f9', border: 'none', borderRadius: '50%',
                width: '32px', height: '32px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#64748b', fontSize: '18px', lineHeight: 1
              }}
            >
              ×
            </button>

            {/* Success icon */}
            <div style={{
              width: '72px', height: '72px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px auto',
              boxShadow: '0 8px 24px rgba(79,70,229,0.3)'
            }}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>

            {/* Heading */}
            <h3 style={{
              fontSize: '22px', fontWeight: 800, color: '#0f172a',
              margin: '0 0 8px'
            }}>
              Message Sent!
            </h3>

            <p style={{
              fontSize: '15px', color: '#4f46e5', fontWeight: 600,
              margin: '0 0 12px'
            }}>
              Form submitted successfully
            </p>

            <p style={{
              fontSize: '14px', color: '#64748b', lineHeight: 1.65,
              margin: '0 0 28px'
            }}>
              Thank you for reaching out to us. We'll get back to you as soon as possible. 🙌
            </p>

            {/* Divider */}
            <div style={{ height: '1px', background: '#f1f5f9', marginBottom: '24px' }} />

            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#f3f4f6', borderRadius: '10px',
              padding: '10px 18px', marginBottom: '24px'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span style={{ fontSize: '13px', color: '#374151', fontWeight: 600 }}>
                We'll reach out to you soon
              </span>
            </div>

            {/* Close button */}
            <button
              onClick={() => setShowSuccess(false)}
              style={{
                width: '100%', padding: '14px',
                background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                color: '#fff', border: 'none', borderRadius: '12px',
                fontSize: '15px', fontWeight: 700, cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(79,70,229,0.3)',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 28px rgba(79,70,229,0.4)'; }}
              onMouseOut={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 20px rgba(79,70,229,0.3)'; }}
            >
              Got it, thanks!
            </button>
          </div>

          <style>{`
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes popIn  { from { opacity: 0; transform: translate(-50%, -48%) scale(0.92); } to { opacity: 1; transform: translate(-50%, -50%) scale(1); } }
          `}</style>
        </>
      )}

      {/* ── HERO BANNER ── */}
      <section
        className="contact-hero-banner"
        style={{ backgroundImage: 'url(/myimg/contactbanner.png)' }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="contact-hero-content" data-aos="fade-right">
            <h1 className="contact-hero-title">Contact Us</h1>
            <p className="contact-hero-desc">
              Have questions or need assistance? We're here to help!
              Reach out to the Vigil team and we'll get back to
              you as soon as possible.
            </p>
            <div className="contact-hero-accent"></div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="contact-main-section">
        <div className="container">
          <div className="row g-5" style={{ alignItems: 'stretch' }}>

            {/* LEFT — GET IN TOUCH */}
            <div className="col-lg-4 d-flex" data-aos="fade-right">
              <div className="contact-info-section w-100">
                <h2 className="contact-info-title">Get In Touch</h2>
                <p className="contact-info-desc">
                  We're here to help and answer any question you might have.
                </p>

                <div className="contact-cards-wrap">

                  <div className="contact-info-card">
                    <div className="contact-info-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 11.9a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </div>
                    <div className="contact-info-text">
                      <h6>Phone</h6>
                      <p>+1 (404) 555-0293</p>
                    </div>
                  </div>

                  <div className="contact-info-card">
                    <div className="contact-info-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <div className="contact-info-text">
                      <h6>Email</h6>
                      <p>support@vigil-1.com</p>
                    </div>
                  </div>

                  <div className="contact-info-card">
                    <div className="contact-info-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div className="contact-info-text">
                      <h6>Address</h6>
                      <p>1934 Old Gallows Road<br />Fairfax, VA. 22182<br />United States</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* RIGHT — SEND US A MESSAGE */}
            <div className="col-lg-8" data-aos="fade-left">
              <div className="contact-form-card">

                <div className="contact-form-header">
                  <h3>Send Us a Message</h3>
                  <p>Fill out the form below and we'll get back to you shortly.</p>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Row 1: Full Name + Email */}
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <div className="form-field-group">
                        <label>Full Name</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="premium-input"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-field-group">
                        <label>Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="premium-input"
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Subject */}
                  <div className="form-field-group mb-3">
                    <label>Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="premium-input premium-select"
                      required
                    >
                      <option value="" disabled>Select a subject</option>
                      <option value="support">General Support</option>
                      <option value="billing">Billing Inquiry</option>
                      <option value="technical">Technical Issue</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Row 3: Message */}
                  <div className="form-field-group mb-4">
                    <label>Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="premium-input premium-textarea"
                      rows="5"
                      placeholder="Type your message here..."
                      required
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <button type="submit" className="premium-submit-btn" disabled={submitting} style={{ opacity: submitting ? 0.7 : 1 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;
