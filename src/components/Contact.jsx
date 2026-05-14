import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init();
    }
  }, []);

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-wrapper" style={{ backgroundImage: 'url(/assets/images/contact-us/contact1.png)' }}>
        <div className="container">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-title">Contact Us</h1>
            <div className="breadcrumb-menu-wrapper">
              <div className="breadcrumb-menu-wrap">
                <div className="breadcrumb-menu">
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><img src="/assets/images/breadcrumb/right-arrow.svg" alt="right-arrow" /></li>
                    <li aria-current="page">Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="luminix-padding-section4">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="luminix-contact-us-thumb" data-aos="fade-up" data-aos-duration="700">
                <img src="/assets/images/contact-us/contact2.png" alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="luminix-contact-box">
                <div className="luminix-contact-title">
                  <h2 className="title pb-0 pt-0">Have Questions? We're Here to Help.</h2>
                </div>
                <form action="#">
                  <div className="luminix-main-field">
                    <input type="text" placeholder="Your Full Name" />
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="luminix-main-field">
                        <input type="email" placeholder="Your Email Address" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="luminix-main-field">
                        <input type="text" placeholder="Your Phone Number" />
                      </div>
                    </div>
                  </div>
                  <div className="luminix-main-field-textarea">
                    <textarea className="button-text" name="textarea" placeholder="Tell us how we can help protect your family..."></textarea>
                  </div>

                  <button className="luminix-default-btn extra-btn4 pill" type="button">Send Message — We Respond Within 24 Hours
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.2139 1.5L17.7139 8M17.7139 8L11.2139 14.5M17.7139 8L0.999581 8" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M11.2139 1.5L17.7139 8M17.7139 8L11.2139 14.5M17.7139 8L0.999581 8" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="luminix-contact-us-info-box">
            <div className="row">
              <div className="col-xl-4 col-lg-6">
                <div className="luminix-contact-us-info-wrap">
                  <div className="luminix-contact-us-info-icon">
                    <img src="/assets/images/contact-us/call.svg" alt="" />
                  </div>
                  <div className="luminix-contact-us-info-data">
                    <h5>Call Us</h5>
                    <a href="tel:+18881234567">+1 (888) 123-4567</a>
                    <a href="tel:+18889876543">+1 (888) 987-6543</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="luminix-contact-us-info-wrap">
                  <div className="luminix-contact-us-info-icon">
                    <img src="/assets/images/contact-us/email.svg" alt="" />
                  </div>
                  <div className="luminix-contact-us-info-data">
                    <h5>Send Email</h5>
                    <a href="mailto:support@vigilapp.com">support@vigilapp.com</a>
                    <a href="mailto:hello@vigilapp.com">hello@vigilapp.com</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="luminix-contact-us-info-wrap">
                  <div className="luminix-contact-us-info-icon">
                    <img src="/assets/images/contact-us/location.svg" alt="" />
                  </div>
                  <div className="luminix-contact-us-info-data">
                    <h5>Office Address</h5>
                    <span>Digital Safety Plaza, Suite 100,</span>
                    <span>Global Support Center</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-map">
        <iframe className="luminix-contact-us-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzAwLjAiTiAwwrAwMCcwMC4wIkU!5e0!3m2!1sen!2sus!4v1682432434455!5m2!1sen!2sus" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
      </div>

      <section className="luminix-cta-section section" style={{ backgroundImage: 'url(/assets/images/cta/thumb1.png)' }}>
        <div className="container">
          <div className="luminix-cta-wrap">
            <h2>Your family's digital safety starts with one message. Reach out today.</h2>
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

export default Contact;
