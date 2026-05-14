import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Pricing() {
  useEffect(() => {
    let $brandSlider;
    if (window.jQuery && window.jQuery.fn.slick) {
      setTimeout(() => {
        $brandSlider = window.jQuery('.luminix-brand-slider-wrap');
        if ($brandSlider.length > 0) {
          if ($brandSlider.hasClass('slick-initialized')) {
            $brandSlider.slick('unslick');
          }
          $brandSlider.slick({
            slidesToShow: 7,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 8000,
            arrows: false,
            pauseOnHover: false,
            cssEase: 'linear',
            responsive: [
              { breakpoint: 1399, settings: { slidesToShow: 5 } },
              { breakpoint: 1199, settings: { slidesToShow: 4 } },
              { breakpoint: 991, settings: { slidesToShow: 3 } },
              { breakpoint: 767, settings: { slidesToShow: 2 } }
            ]
          });
        }
      }, 100);
    }

    if (window.AOS) {
      window.AOS.init();
      window.AOS.refresh();
    }

    return () => {
      if ($brandSlider && $brandSlider.hasClass('slick-initialized')) {
        $brandSlider.slick('unslick');
      }
    };
  }, []);
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-wrapper" style={{ backgroundImage: 'url(/assets/images/pricing/pricing1.png)' }}>
        <div className="container">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-title">Pricing</h1>
            <div className="breadcrumb-menu-wrapper">
              <div className="breadcrumb-menu-wrap">
                <div className="breadcrumb-menu">
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><img src="/assets/images/breadcrumb/right-arrow.svg" alt="right-arrow" /></li>
                    <li aria-current="page">Pricing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End breadcrumb */}

      {/* Pricing Section */}
      <section className="luminix-padding-section4">
        <div className="container">
          <div className="luminix-section-title center">
            <h2>Simple, Transparent Pricing. No Hidden Fees. Cancel Anytime.</h2>
          </div>
          <div className="row">
            {/* Plan 1 */}
            <div className="col-xl-4 col-lg-6">
              <div className="luminix-pricing-wrap light-bg1" data-aos="fade-up" data-aos-duration="500">
                <div className="luminix-pricing-header">
                  <h5>BASIC</h5>
                </div>
                <div className="luminix-pricing-price">
                  <h2>$39</h2>
                  <span>$45</span>
                </div>
                <div className="luminix-pricing-text">
                  <p>Perfect for families with one child and one device. Everything you need to get started with digital safety.</p>
                </div>
                <div className="luminix-pricing-body">
                  <div className="luminix-list-icon-content">
                    <ul>
                      <li>
                        <img src="/assets/images/about-us/icon1.svg" alt="" />
                        1 Managed Device
                      </li>
                      <li>
                        <img src="/assets/images/about-us/icon1.svg" alt="" />
                        Basic Web Filtering
                      </li>
                      <li>
                        <img src="/assets/images/about-us/icon1.svg" alt="" />
                        Real-time Location
                      </li>
                      <li>
                        <img src="/assets/images/about-us/icon1.svg" alt="" />
                        7-Day Activity History
                      </li>
                      <li>
                        <img src="/assets/images/about-us/icon1.svg" alt="" />
                        Standard Support
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="luminix-pricing-footer mt-50">
                  <Link to="/contact" className="luminix-default-btn pill d-block">Choose The Plan</Link>
                </div>
              </div>
            </div>
            {/* Plan 2 */}
            <div className="col-xl-4 col-lg-6">
              <div className="luminix-pricing-wrap active" data-aos="fade-up" data-aos-duration="700">
                <div className="luminix-pricing-header">
                  <h5>STANDARD</h5>
                </div>
                <div className="luminix-pricing-price">
                  <h2>$45</h2>
                  <span>$99</span>
                </div>
                <div className="luminix-pricing-text">
                  <p>Our most popular plan. Complete protection for families with up to 5 children across all their devices.</p>
                </div>
                <div className="luminix-pricing-body">
                  <div className="luminix-list-icon-content">
                    <ul>
                      <li>
                        <img src="/assets/images/about-us/icon1.svg" alt="" />
                        Up to 5 Managed Devices
                      </li>
                      <li>
                        <img src="/assets/images/about-us/icon1.svg" alt="" />
                        Advanced Content Filtering
                      </li>
                      <li>
                        <img src="/assets/images/about-us/icon1.svg" alt="" />
                        Geofencing Alerts
                      </li>
                      <li>
                        <img src="/assets/images/about-us/icon1.svg" alt="" />
                        30-Day Activity History
                      </li>
                      <li>
                        <img src="/assets/images/about-us/icon1.svg" alt="" />
                        Priority 24/7 Support
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="luminix-pricing-footer mt-50">
                  <Link to="/contact" className="luminix-default-btn pill d-block">Choose The Plan</Link>
                </div>
              </div>
            </div>
            {/* Plan 3 */}
            <div className="col-xl-4 col-lg-6">
              <div className="luminix-pricing-wrap light-bg1" data-aos="fade-up" data-aos-duration="900">
                <div className="luminix-pricing-header">
                  <h5>PREMIUM</h5>
                </div>
                <div className="luminix-pricing-price">
                  <h2>$100</h2>
                  <span>$200</span>
                </div>
                <div className="luminix-pricing-text">
                  <p>The ultimate family safety suite. Unlimited devices, unlimited children, unlimited peace of mind.</p>
                </div>
                <div className="luminix-pricing-body">
                  <div className="luminix-list-icon-content">
                    <ul>
                      <li>
                        <img src="/assets/images/about-us/icon1.svg" alt="" />
                        Unlimited Managed Devices
                      </li>
                      <li>
                        <img src="/assets/images/about-us/icon1.svg" alt="" />
                        AI-Powered Threat Detection
                      </li>
                      <li>
                        <img src="/assets/images/about-us/icon1.svg" alt="" />
                        Panic Button & SOS
                      </li>
                      <li>
                        <img src="/assets/images/about-us/icon1.svg" alt="" />
                        Unlimited Activity History
                      </li>
                      <li>
                        <img src="/assets/images/about-us/icon1.svg" alt="" />
                        Dedicated Safety Expert
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="luminix-pricing-footer mt-50">
                  <Link to="/contact" className="luminix-default-btn pill d-block">Choose The Plan</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}

      {/* Brand Section */}
      <div className="luminix-brand-section2">
        <div className="luminix-brand-slider-wrap">
          <div className="luminix-brand-item">
            <img src="/assets/images/brand/brand1.svg" alt="" />
          </div>
          <div className="luminix-brand-item">
            <img src="/assets/images/brand/brand2.svg" alt="" />
          </div>
          <div className="luminix-brand-item">
            <img src="/assets/images/brand/brand3.svg" alt="" />
          </div>
          <div className="luminix-brand-item">
            <img src="/assets/images/brand/brand4.svg" alt="" />
          </div>
          <div className="luminix-brand-item">
            <img src="/assets/images/brand/brand5.svg" alt="" />
          </div>
          <div className="luminix-brand-item">
            <img src="/assets/images/brand/brand4.svg" alt="" />
          </div>
          <div className="luminix-brand-item">
            <img src="/assets/images/brand/brand3.svg" alt="" />
          </div>
          <div className="luminix-brand-item">
            <img src="/assets/images/brand/brand2.svg" alt="" />
          </div>
          <div className="luminix-brand-item">
            <img src="/assets/images/brand/brand3.svg" alt="" />
          </div>
          <div className="luminix-brand-item">
            <img src="/assets/images/brand/brand4.svg" alt="" />
          </div>
          <div className="luminix-brand-item">
            <img src="/assets/images/brand/brand5.svg" alt="" />
          </div>
          <div className="luminix-brand-item">
            <img src="/assets/images/brand/brand4.svg" alt="" />
          </div>
          <div className="luminix-brand-item">
            <img src="/assets/images/brand/brand3.svg" alt="" />
          </div>
          <div className="luminix-brand-item">
            <img src="/assets/images/brand/brand2.svg" alt="" />
          </div>
          <div className="luminix-brand-item">
            <img src="/assets/images/brand/brand3.svg" alt="" />
          </div>
          <div className="luminix-brand-item">
            <img src="/assets/images/brand/brand4.svg" alt="" />
          </div>
          <div className="luminix-brand-item">
            <img src="/assets/images/brand/brand5.svg" alt="" />
          </div>
          <div className="luminix-brand-item">
            <img src="/assets/images/brand/brand4.svg" alt="" />
          </div>
          <div className="luminix-brand-item">
            <img src="/assets/images/brand/brand3.svg" alt="" />
          </div>
          <div className="luminix-brand-item">
            <img src="/assets/images/brand/brand2.svg" alt="" />
          </div>
          <div className="luminix-brand-item">
            <img src="/assets/images/brand/brand3.svg" alt="" />
          </div>
          <div className="luminix-brand-item">
            <img src="/assets/images/brand/brand4.svg" alt="" />
          </div>
          <div className="luminix-brand-item">
            <img src="/assets/images/brand/brand5.svg" alt="" />
          </div>
          <div className="luminix-brand-item">
            <img src="/assets/images/brand/brand4.svg" alt="" />
          </div>
          <div className="luminix-brand-item">
            <img src="/assets/images/brand/brand3.svg" alt="" />
          </div>
          <div className="luminix-brand-item">
            <img src="/assets/images/brand/brand2.svg" alt="" />
          </div>
        </div>
      </div>
      {/* end brand */}

      {/* CTA Section */}
      <section className="luminix-cta-section section" style={{ backgroundImage: 'url(/assets/images/cta/thumb1.png)' }}>
        <div className="container">
          <div className="luminix-cta-wrap">
            <h2>Join 50,000+ families worldwide protecting their kids with Vigil.</h2>
            <div className="luminix-cta-btn-title mt-50">
              <Link to="/contact" className="luminix-default-btn pill extra-btn2" data-aos="fade-up" data-aos-duration="700">Get In Touch
                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.2139 1.5L17.7139 8M17.7139 8L11.2139 14.5M17.7139 8L0.999581 8" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M11.2139 1.5L17.7139 8M17.7139 8L11.2139 14.5M17.7139 8L0.999581 8" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </Link>
              <Link to="/contact" className="luminix-default-btn pill cta-btn3" data-aos="fade-up" data-aos-duration="900">Still have questions?</Link>
            </div>
          </div>
        </div>
      </section>
      {/* end cta */}
    </>
  );
}

export default Pricing;
