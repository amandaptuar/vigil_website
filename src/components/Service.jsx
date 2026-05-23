import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Service() {
  useEffect(() => {
    // Re-initialize AOS if it's available globally
    if (window.AOS) {
      window.AOS.init();
    }

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
      {/* Breadcrumb Section */}
      <div className="breadcrumb-wrapper" style={{ backgroundImage: 'url(/assets/images/service/s3.png)' }}>
        <div className="container">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-title">Our Protection Features</h1>
            <div className="breadcrumb-menu-wrapper">
              <div className="breadcrumb-menu-wrap">
                <div className="breadcrumb-menu">
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><img src="/assets/images/breadcrumb/right-arrow.svg" alt="right-arrow" /></li>
                    <li aria-current="page">Our Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End breadcrumb */}

      {/* Service Section */}
      <section className="luminix-padding-section">
        <div className="container">
          <div className="luminix-section-title center">
            <h2>Everything you need to keep your kids safe in the digital world</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="luminix-service-wrap" data-aos="fade-up" data-aos-duration="500">
                <div className="luminix-service-icon">
                  <img src="/assets/images/service/icon3.svg" alt="" />
                </div>
                <div className="luminix-service-content">
                  <h5>Data Privacy & Security</h5>
                  <p>Your family's data is encrypted end-to-end and never sold. Vigil is fully privacy-compliant — built to meet the strictest global child safety standards.</p>
                </div>
                <div className="luminix-blog-btn">
                  <Link to="/features">Read More
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.50024 0.75L14.7502 6M14.7502 6L9.50024 11.25M14.7502 6L1.25024 6" stroke="#001A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.50024 0.75L14.7502 6M14.7502 6L9.50024 11.25M14.7502 6L1.25024 6" stroke="#001A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="luminix-service-wrap" data-aos="fade-up" data-aos-duration="700">
                <div className="luminix-service-icon">
                  <img src="/assets/images/service/icon4.svg" alt="" />
                </div>
                <div className="luminix-service-content">
                  <h5>Smart Web Filtering</h5>
                  <p>Block adult content, gambling sites, and social dangers automatically. Create custom allow/block lists tailored to each child's age and maturity level.</p>
                </div>
                <div className="luminix-blog-btn">
                  <Link to="/features">Read More
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.50024 0.75L14.7502 6M14.7502 6L9.50024 11.25M14.7502 6L1.25024 6" stroke="#001A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.50024 0.75L14.7502 6M14.7502 6L9.50024 11.25M14.7502 6L1.25024 6" stroke="#001A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="luminix-service-wrap" data-aos="fade-up" data-aos-duration="900">
                <div className="luminix-service-icon">
                  <img src="/assets/images/service/icon5.svg" alt="" />
                </div>
                <div className="luminix-service-content">
                  <h5>Weekly Activity Reports</h5>
                  <p>Get plain-English weekly summaries of your child's screen time, top apps, and flagged activity — emailed directly to you every Sunday morning.</p>
                </div>
                <div className="luminix-blog-btn">
                  <Link to="/features">Read More
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.50024 0.75L14.7502 6M14.7502 6L9.50024 11.25M14.7502 6L1.25024 6" stroke="#001A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.50024 0.75L14.7502 6M14.7502 6L9.50024 11.25M14.7502 6L1.25024 6" stroke="#001A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="luminix-service-wrap" data-aos="fade-up" data-aos-duration="500">
                <div className="luminix-service-icon">
                  <img src="/assets/images/service/icon6.svg" alt="" />
                </div>
                <div className="luminix-service-content">
                  <h5>Live GPS Location Tracking</h5>
                  <p>Know exactly where your child is at any moment. Set safe zones around home, school, and friends' houses — get instant alerts if they leave.</p>
                </div>
                <div className="luminix-blog-btn">
                  <Link to="/features">Read More
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.50024 0.75L14.7502 6M14.7502 6L9.50024 11.25M14.7502 6L1.25024 6" stroke="#001A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.50024 0.75L14.7502 6M14.7502 6L9.50024 11.25M14.7502 6L1.25024 6" stroke="#001A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="luminix-service-wrap" data-aos="fade-up" data-aos-duration="700">
                <div className="luminix-service-icon">
                  <img src="/assets/images/service/icon1.svg" alt="" />
                </div>
                <div className="luminix-service-content">
                  <h5>Screen Time & App Control</h5>
                  <p>Set daily limits for specific apps, block distracting games during homework hours, and schedule device-free family time — all from your parent dashboard.</p>
                </div>
                <div className="luminix-blog-btn">
                  <Link to="/features">Read More
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.50024 0.75L14.7502 6M14.7502 6L9.50024 11.25M14.7502 6L1.25024 6" stroke="#001A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.50024 0.75L14.7502 6M14.7502 6L9.50024 11.25M14.7502 6L1.25024 6" stroke="#001A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="luminix-service-wrap" data-aos="fade-up" data-aos-duration="900">
                <div className="luminix-service-icon">
                  <img src="/assets/images/service/icon2.svg" alt="" />
                </div>
                <div className="luminix-service-content">
                  <h5>Safe Search Enforcement</h5>
                  <p>Force safe search mode on Google, Bing, and YouTube across all devices so your child's search results stay clean, no matter what they look up.</p>
                </div>
                <div className="luminix-blog-btn">
                  <Link to="/features">Read More
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.50024 0.75L14.7502 6M14.7502 6L9.50024 11.25M14.7502 6L1.25024 6" stroke="#001A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.50024 0.75L14.7502 6M14.7502 6L9.50024 11.25M14.7502 6L1.25024 6" stroke="#001A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="luminix-service-wrap" data-aos="fade-up" data-aos-duration="500">
                <div className="luminix-service-icon">
                  <img src="/assets/images/service/icon7.svg" alt="" />
                </div>
                <div className="luminix-service-content">
                  <h5>Cyberbullying Detection</h5>
                  <p>Vigil's AI scans texts and social messages for signs of bullying, predatory behavior, or emotional distress — alerting you the moment something concerning appears.</p>
                </div>
                <div className="luminix-blog-btn">
                  <Link to="/features">Read More
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.50024 0.75L14.7502 6M14.7502 6L9.50024 11.25M14.7502 6L1.25024 6" stroke="#001A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.50024 0.75L14.7502 6M14.7502 6L9.50024 11.25M14.7502 6L1.25024 6" stroke="#001A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="luminix-service-wrap" data-aos="fade-up" data-aos-duration="700">
                <div className="luminix-service-icon">
                  <img src="/assets/images/service/icon8.svg" alt="" />
                </div>
                <div className="luminix-service-content">
                  <h5>Multi-Device Management</h5>
                  <p>Manage every phone, tablet, laptop, and gaming console in your home from one unified parent dashboard. Works on iOS, Android, Windows, and Mac.</p>
                </div>
                <div className="luminix-blog-btn">
                  <Link to="/features">Read More
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.50024 0.75L14.7502 6M14.7502 6L9.50024 11.25M14.7502 6L1.25024 6" stroke="#001A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.50024 0.75L14.7502 6M14.7502 6L9.50024 11.25M14.7502 6L1.25024 6" stroke="#001A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="luminix-service-wrap" data-aos="fade-up" data-aos-duration="900">
                <div className="luminix-service-icon">
                  <img src="/assets/images/service/icon9.svg" alt="" />
                </div>
                <div className="luminix-service-content">
                  <h5>Instant Danger Alerts</h5>
                  <p>Get real-time push notifications the moment your child encounters adult content, receives a message from an unknown contact, or crosses a safe zone boundary.</p>
                </div>
                <div className="luminix-blog-btn">
                  <Link to="/features">Read More
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.50024 0.75L14.7502 6M14.7502 6L9.50024 11.25M14.7502 6L1.25024 6" stroke="#001A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.50024 0.75L14.7502 6M14.7502 6L9.50024 11.25M14.7502 6L1.25024 6" stroke="#001A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End service */}

      {/* Testimonial Section */}
      <div className="luminix-padding-section3 light-bg1">
        <div className="container">
          <div className="luminix-section-title center">
            <h2 className="title pt-0">Real Stories from Real Parents</h2>
            <p className="text2">Families all over the world trust Vigil to keep their kids safe online every single day. Here's what they have to say.</p>
          </div>
        </div>
        <div className="luminix-testimonial-slider">
          <div className="luminix-t-wrap">
            <div className="luminix-t-header">
              <img src="/assets/images/v1/rating.svg" alt="" />
              <img src="/assets/images/v1/quote1.svg" alt="" />
            </div>
            <div className="luminix-t-content">
              <p>"I never realized how much my daughter was being exposed to until Vigil flagged it. The cyberbullying detection saved her from a situation that could have gone very badly. I'm incredibly grateful."</p>
            </div>
            <div className="luminix-t-author">
              <div className="luminix-t-author-thumb">
                <img src="/assets/images/v1/test2.png" alt="" />
              </div>
              <div className="luminix-t-author-data">
                <h6>Linda Carter</h6>
                <p>Mother of 2</p>
              </div>
            </div>
          </div>
          <div className="luminix-t-wrap">
            <div className="luminix-t-header">
              <img src="/assets/images/v1/rating.svg" alt="" />
              <img src="/assets/images/v1/quote1.svg" alt="" />
            </div>
            <div className="luminix-t-content">
              <p>"The GPS tracking gives me real peace of mind. I know the second my son leaves school grounds. Setup was simple and the dashboard is really easy to navigate — even for someone like me who's not great with tech."</p>
            </div>
            <div className="luminix-t-author">
              <div className="luminix-t-author-thumb">
                <img src="/assets/images/v1/test1.png" alt="" />
              </div>
              <div className="luminix-t-author-data">
                <h6>Mark Thompson</h6>
                <p>Father of 3</p>
              </div>
            </div>
          </div>
          <div className="luminix-t-wrap">
            <div className="luminix-t-header">
              <img src="/assets/images/v1/rating.svg" alt="" />
              <img src="/assets/images/v1/quote1.svg" alt="" />
            </div>
            <div className="luminix-t-content">
              <p>"We've tried other parental control apps, but Vigil is the only one that felt complete. It does everything in one place and the weekly reports have actually helped us start better conversations with our kids about the internet."</p>
            </div>
            <div className="luminix-t-author">
              <div className="luminix-t-author-thumb">
                <img src="/assets/images/v1/test3.png" alt="" />
              </div>
              <div className="luminix-t-author-data">
                <h6>Patricia Hayes</h6>
                <p>Mother of 4</p>
              </div>
            </div>
          </div>
          <div className="luminix-t-wrap">
            <div className="luminix-t-header">
              <img src="/assets/images/v1/rating.svg" alt="" />
              <img src="/assets/images/v1/quote1.svg" alt="" />
            </div>
            <div className="luminix-t-content">
              <p>"Setting up Vigil was the best parenting decision we've made this year. The content filtering alone has made a huge difference. Our kids are safer online and we're not constantly worried."</p>
            </div>
            <div className="luminix-t-author">
              <div className="luminix-t-author-thumb">
                <img src="/assets/images/v1/test2.png" alt="" />
              </div>
              <div className="luminix-t-author-data">
                <h6>Bonsey Johnson</h6>
                <p>Parent of 2</p>
              </div>
            </div>
          </div>
          <div className="luminix-t-wrap">
            <div className="luminix-t-header">
              <img src="/assets/images/v1/rating.svg" alt="" />
              <img src="/assets/images/v1/quote1.svg" alt="" />
            </div>
            <div className="luminix-t-content">
              <p>"Setting up Vigil was the best parenting decision we've made this year. The content filtering alone has made a huge difference. Our kids are safer online and we're not constantly worried."</p>
            </div>
            <div className="luminix-t-author">
              <div className="luminix-t-author-thumb">
                <img src="/assets/images/v1/test4.png" alt="" />
              </div>
              <div className="luminix-t-author-data">
                <h6>Robert Jenkins</h6>
                <p>Father of 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End testimonial */}

      {/* CTA Section */}
      <section className="luminix-cta-section section" style={{ backgroundImage: 'url(/assets/images/cta/thumb1.png)' }}>
        <div className="container">
          <div className="luminix-cta-wrap">
            <h2>Stop worrying. Start knowing. Contact Vigil today.</h2>
            <div className="luminix-cta-btn-title mt-50">
              <Link to="/contact" className="luminix-default-btn pill extra-btn2" data-aos="fade-up" data-aos-duration="700">Get In Touch
                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.2139 1.5L17.7139 8M17.7139 8L11.2139 14.5M17.7139 8L0.999581 8" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11.2139 1.5L17.7139 8M17.7139 8L11.2139 14.5M17.7139 8L0.999581 8" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link to="/contact" className="luminix-default-btn pill cta-btn3" data-aos="fade-up" data-aos-duration="900">Still have questions?</Link>
            </div>
          </div>
        </div>
      </section>
      {/* End cta */}
    </>
  );
}

export default Service;
