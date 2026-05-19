import React, { useEffect } from 'react';
import './Contact.css';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.AOS) {
      window.AOS.init({ duration: 800, once: true });
    }
  }, []);

  return (
    <div className="contact-page-wrapper">

      {/* ── HERO BANNER — uses contactbanner.png as background ── */}
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
                      <p>+1 (888) 123-4567</p>
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
                      <p>support@vigil.com</p>
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
                      <p>123 Security Lane, Suite 100<br />Austin, TX 73301, USA</p>
                    </div>
                  </div>

                  <div className="contact-info-card">
                    <div className="contact-info-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                    </div>
                    <div className="contact-info-text">
                      <h6>Business Hours</h6>
                      <p>Mon - Fri: 9:00 AM - 6:00 PM (CT)<br />Sat - Sun: Closed</p>
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

                <form>
                  {/* Row 1: Full Name + Email */}
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <div className="form-field-group">
                        <label>Full Name</label>
                        <input
                          type="text"
                          className="premium-input"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-field-group">
                        <label>Email Address</label>
                        <input
                          type="email"
                          className="premium-input"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Subject */}
                  <div className="form-field-group mb-3">
                    <label>Subject</label>
                    <select className="premium-input premium-select" defaultValue="">
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
                      className="premium-input premium-textarea"
                      rows="5"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <button type="submit" className="premium-submit-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    <span>Send Message</span>
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
