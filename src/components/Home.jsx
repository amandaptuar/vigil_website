import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      <div className="luminix-hero-section section" style={{ backgroundImage: 'url(/assets/images/hero/hero-01.png)' }}>
        <div className="container">
          <div className="luminix-hero-content">
            <h5 data-aos="fade-up" data-aos-duration="700">Trusted by 50,000+ Families Worldwide</h5>
            <h1 data-aos="fade-up" data-aos-duration="900" className="hero-title">Keep Your Kids Safe Online — 24/7</h1>
            <p data-aos="fade-up" data-aos-duration="1100" className="text">Vigil is the leading parental monitoring system. Know where your child is, what they're viewing, and who they're talking to — all in real time. Setup takes under 5 minutes. Cancel anytime.</p>
            <div className="mt-50" data-aos="fade-up" data-aos-duration="700">
              <Link to="/contact" className="luminix-default-btn pill luminix-hero-btn">Contact Us
                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.2139 1.5L17.7139 8M17.7139 8L11.2139 14.5M17.7139 8L0.999581 8" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11.2139 1.5L17.7139 8M17.7139 8L11.2139 14.5M17.7139 8L0.999581 8" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="luminix-padding-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="luminix-about-thumb" data-aos="fade-up" data-aos-duration="700">
                <img src="/assets/images/about-us/about-01.png" alt="" />
                <div className="luminix-about-card">
                  <h2 className="">12+</h2>
                  <h5>Years of experience</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="luminix-default-content">
                <h6>Trusted Around the World</h6>
                <h2 className="title">The Smarter Way to Protect Your Child Online</h2>
                <p className="text">Parents today are facing an unprecedented digital threat landscape. Vigil gives you complete visibility into your child's online world — from apps and websites to location and screen time — so you can act before problems escalate.</p>
                <div className="luminix-list-icon-content">
                  <ul>
                    <li><img src="/assets/images/about-us/icon1.svg" alt="" />Real-Time Screen & App Monitoring</li>
                    <li><img src="/assets/images/about-us/icon1.svg" alt="" />Instant Alerts for Suspicious Activity</li>
                    <li><img src="/assets/images/about-us/icon1.svg" alt="" />Live GPS Location & Safe Zone Alerts</li>
                  </ul>
                </div>
                <div className="mt-50">
                  <Link to="/about" className="luminix-default-btn pill">About Us
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.2139 1.5L17.7139 8M17.7139 8L11.2139 14.5M17.7139 8L0.999581 8" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M11.2139 1.5L17.7139 8M17.7139 8L11.2139 14.5M17.7139 8L0.999581 8" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <section className="luminix-counter-wrap">
            <div className="luminix-counter-item">
              <h2 className="luminix-counter-data" aria-label="50K+">50K+</h2>
              <p>Families Protected</p>
            </div>
            <div className="luminix-counter-item">
              <h2 className="luminix-counter-data" aria-label="98%">98%</h2>
              <p>Parent Satisfaction Rate</p>
            </div>
            <div className="luminix-counter-item">
              <h2 className="luminix-counter-data" aria-label="3M+">3M+</h2>
              <p>Threats Blocked Monthly</p>
            </div>
            <div className="luminix-counter-item">
              <h2 className="luminix-counter-data" aria-label="24/7">24/7</h2>
              <p>Live Expert Support</p>
            </div>
          </section>
        </div>
      </div>

      <div className="luminix-padding-section2 light-bg1">
        <div className="container">
          <div className="luminix-section-title">
            <div className="row">
              <div className="col-xl-7 col-lg-8">
                <h6>Everything You Need</h6>
                <h2 className="title pb-0 ml-20">Complete Protection for Every Family</h2>
              </div>
              <div className="col-xl-5 col-lg-4 d-flex align-items-center justify-content-end">
                <div className="luminix-title-btn">
                  <Link to="/service" className="luminix-default-btn pill">Explore All Features
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.2139 1.5L17.7139 8M17.7139 8L11.2139 14.5M17.7139 8L0.999581 8" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M11.2139 1.5L17.7139 8M17.7139 8L11.2139 14.5M17.7139 8L0.999581 8" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="luminix-about-thumb" data-aos="fade-up" data-aos-duration="700">
                <img src="/assets/images/v1/thumb-01.png" alt="" />
                <div className="luminix-service-card">
                  <img src="/assets/images/v1/thumb-02.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="luminix-list-icon-wraper">
                <div className="luminix-list-icon-wrap">
                  <div className="luminix-list-icon-icon2"><img src="/assets/images/iconbox/icon1.svg" alt="" /></div>
                  <div className="luminix-list-icon-data">
                    <Link to="/service"><h5>Smart Screen Monitoring</h5></Link>
                    <p>See every app, text, and website your child visits — in real time, from any device, anywhere in the world.</p>
                  </div>
                </div>
                <div className="luminix-list-icon-btn">
                  <Link to="/service">
                    <svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25.1667 2.41602L39.75 16.9993M39.75 16.9993L25.1667 31.5827M39.75 16.9993L2.25 16.9993" stroke="#001A3D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M25.1667 2.41602L39.75 16.9993M39.75 16.9993L25.1667 31.5827M39.75 16.9993L2.25 16.9993" stroke="#001A3D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="luminix-list-icon-wraper">
                <div className="luminix-list-icon-wrap">
                  <div className="luminix-list-icon-icon2"><img src="/assets/images/iconbox/icon2.svg" alt="" /></div>
                  <div className="luminix-list-icon-data">
                    <Link to="/service"><h5>Instant Danger Alerts</h5></Link>
                    <p>Get notified the moment your child encounters cyberbullying, adult content, or unsafe contacts — before it's too late.</p>
                  </div>
                </div>
                <div className="luminix-list-icon-btn">
                  <Link to="/service">
                    <svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25.1667 2.41602L39.75 16.9993M39.75 16.9993L25.1667 31.5827M39.75 16.9993L2.25 16.9993" stroke="#001A3D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M25.1667 2.41602L39.75 16.9993M39.75 16.9993L25.1667 31.5827M39.75 16.9993L2.25 16.9993" stroke="#001A3D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="luminix-list-icon-wraper">
                <div className="luminix-list-icon-wrap">
                  <div className="luminix-list-icon-icon2"><img src="/assets/images/iconbox/icon3.svg" alt="" /></div>
                  <div className="luminix-list-icon-data">
                    <Link to="/service"><h5>Content & Web Filtering</h5></Link>
                    <p>Block thousands of harmful websites, restrict adult content, and customize safe browsing rules for each child by age.</p>
                  </div>
                </div>
                <div className="luminix-list-icon-btn">
                  <Link to="/service">
                    <svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25.1667 2.41602L39.75 16.9993M39.75 16.9993L25.1667 31.5827M39.75 16.9993L2.25 16.9993" stroke="#001A3D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M25.1667 2.41602L39.75 16.9993M39.75 16.9993L25.1667 31.5827M39.75 16.9993L2.25 16.9993" stroke="#001A3D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="luminix-list-icon-wraper">
                <div className="luminix-list-icon-wrap">
                  <div className="luminix-list-icon-icon2"><img src="/assets/images/iconbox/icon4.svg" alt="" /></div>
                  <div className="luminix-list-icon-data">
                    <Link to="/service"><h5>Weekly Family Reports</h5></Link>
                    <p>Receive easy-to-read weekly summaries of your child's screen time, top apps used, and any flagged activity — sent straight to your inbox.</p>
                  </div>
                </div>
                <div className="luminix-list-icon-btn">
                  <Link to="/service">
                    <svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25.1667 2.41602L39.75 16.9993M39.75 16.9993L25.1667 31.5827M39.75 16.9993L2.25 16.9993" stroke="#001A3D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M25.1667 2.41602L39.75 16.9993M39.75 16.9993L25.1667 31.5827M39.75 16.9993L2.25 16.9993" stroke="#001A3D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="luminix-padding-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-lg-2">
              <div className="luminix-video-thumb">
                <img src="/assets/images/v1/thumb-03.png" alt="" />
                <a className="luminix-popup-video video-init" href="https://www.youtube.com/watch?v=zE_WFiHnSlY">
                  <img src="/assets/images/v2/play-btn1.svg" alt="" />
                  <div className="waves wave-1"></div>
                  <div className="waves wave-2"></div>
                  <div className="waves wave-3"></div>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="luminix-default-content">
                <h6>Why Parents Choose Vigil</h6>
                <h2 className="title">Protection That Works As Hard As You Do</h2>
                <p className="text">Vigil is built for modern families, with military-grade data privacy, global safety standards, and a simple dashboard that any parent can use — no tech skills required.</p>
                <div className="luminix-skill-wrap mt-50">
                  <div className="luminix-skill-item">
                    <div className="luminix-skill-title"><h5>Threat Detection Accuracy</h5></div>
                    <div className="luminix-skill-line"><div className="luminix-skill-bar bar-one"></div></div>
                  </div>
                  <div className="luminix-skill-item">
                    <div className="luminix-skill-title"><h5>Parent Ease of Use</h5></div>
                    <div className="luminix-skill-line2"><div className="luminix-skill-bar2 bar-two"></div></div>
                  </div>
                  <div className="luminix-skill-item">
                    <div className="luminix-skill-title"><h5>Child Privacy Protection</h5></div>
                    <div className="luminix-skill-line2"><div className="luminix-skill-bar2 bar-three"></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="luminix-padding-section3 light-bg1">
        <div className="container">
          <div className="luminix-section-title center">
            <h6>Real Parents. Real Stories.</h6>
            <h2 className="title">Trusted by Families Worldwide</h2>
            <p className="text2">From busy cities to quiet suburbs, thousands of parents rely on Vigil every day to keep their children safe online. Here's what some of them have to say.</p>
          </div>
        </div>
        <div className="luminix-testimonial-slider">
          <div className="luminix-t-wrap">
            <div className="luminix-t-header">
              <img src="/assets/images/v1/rating.svg" alt="" />
              <img src="/assets/images/v1/quote1.svg" alt="" />
            </div>
            <div className="luminix-t-content">
              <p>"Vigil gave me peace of mind I didn't know I was missing. I can see exactly what my 13-year-old is doing online without invading her privacy. It's been a total game-changer for our family."</p>
            </div>
            <div className="luminix-t-author">
              <div className="luminix-t-author-thumb"><img src="/assets/images/v1/test1.png" alt="" /></div>
              <div className="luminix-t-author-data"><h6>Daniel Turner</h6><p>Father of 2</p></div>
            </div>
          </div>
          <div className="luminix-t-wrap">
            <div className="luminix-t-header">
              <img src="/assets/images/v1/rating.svg" alt="" />
              <img src="/assets/images/v1/quote1.svg" alt="" />
            </div>
            <div className="luminix-t-content">
              <p>"I set it up in under 10 minutes and immediately started getting alerts. When Vigil flagged a suspicious contact my son had added, I was able to step in immediately. I can't imagine parenting without it now."</p>
            </div>
            <div className="luminix-t-author">
              <div className="luminix-t-author-thumb"><img src="/assets/images/v1/test2.png" alt="" /></div>
              <div className="luminix-t-author-data"><h6>Ashley Johnson</h6><p>Mother of 3</p></div>
            </div>
          </div>
          <div className="luminix-t-wrap">
            <div className="luminix-t-header">
              <img src="/assets/images/v1/rating.svg" alt="" />
              <img src="/assets/images/v1/quote1.svg" alt="" />
            </div>
            <div className="luminix-t-content">
              <p>"The location tracking is incredibly accurate and the geofence alerts work flawlessly. I know the moment my daughter leaves school. Vigil has made me a more confident parent in the digital age."</p>
            </div>
            <div className="luminix-t-author">
              <div className="luminix-t-author-thumb"><img src="/assets/images/v1/test3.png" alt="" /></div>
              <div className="luminix-t-author-data"><h6>Michael Ramirez</h6><p>Father of 1</p></div>
            </div>
          </div>
          <div className="luminix-t-wrap">
            <div className="luminix-t-header">
              <img src="/assets/images/v1/rating.svg" alt="" />
              <img src="/assets/images/v1/quote1.svg" alt="" />
            </div>
            <div className="luminix-t-content">
              <p>"The weekly report is something I actually look forward to reading. It tells me what my kids are into, what to watch out for, and gives me real talking points for family conversations about online safety."</p>
            </div>
            <div className="luminix-t-author">
              <div className="luminix-t-author-thumb"><img src="/assets/images/v1/test4.png" alt="" /></div>
              <div className="luminix-t-author-data"><h6>Sarah Ferrari</h6><p>Mother of 4</p></div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="luminix-padding-section4">
        <div className="container">
          <div className="luminix-section-title center">
            <h6>The Vigil Team</h6>
            <h2 className="title">Built by Parents. Engineered by Experts.</h2>
            <p className="text2">Our team combines deep expertise in child online safety, cybersecurity, and family wellness. We're parents ourselves — and we built the product we wished existed.</p>
          </div>
          <div className="row">
            {/* Member 1 */}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="luminix-team-wrap" data-aos="fade-up" data-aos-duration="500">
                <div className="luminix-team-thumb">
                  <img src="/assets/images/team/team1.png" alt="" />
                  <div className="luminix-team-content">
                    <Link to="/about"><h5>James Bennett</h5></Link>
                    <p>Founder & CEO — Child Safety Advocate</p>
                    <div className="luminix-team-social">
                      <ul>
                        <li><a href="#"><svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.34435 12.0845V6.72723H0.541504V4.63938H2.34435V3.09965C2.34435 1.31281 3.43569 0.339844 5.02968 0.339844C5.79321 0.339844 6.44943 0.396691 6.64067 0.422099V2.28945L5.53516 2.28995C4.66826 2.28995 4.5004 2.70189 4.5004 3.30638V4.63938H6.56788L6.29868 6.72723H4.5004V12.0845H2.34435Z" fill="#fff" /></svg></a></li>
                        <li><a href="#"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.18878 5.0021L11.1996 0.339844H10.2492L6.76657 4.38801L3.98503 0.339844H0.776855L4.98309 6.46139L0.776855 11.3505H1.72735L5.40505 7.07548L8.34256 11.3505H11.5507L7.18854 5.0021H7.18878ZM5.88695 6.51533L5.46077 5.90576L2.06982 1.05536H3.52972L6.26626 4.96979L6.69243 5.57935L10.2496 10.6675H8.78971L5.88695 6.51556V6.51533Z" fill="#fff" /></svg></a></li>
                        <li><a href="#"><svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.3599 0.607213C7.81519 0.605466 8.27048 0.610042 8.72565 0.620939L8.84669 0.625307C8.98644 0.630298 9.12433 0.636537 9.29091 0.644024C9.95476 0.67522 10.4077 0.780038 10.8052 0.934145C11.2169 1.09262 11.5638 1.30725 11.9107 1.65414C12.2279 1.96585 12.4734 2.34291 12.6301 2.7591C12.7842 3.15653 12.889 3.61012 12.9202 4.27396C12.9277 4.43992 12.934 4.57843 12.9389 4.71819L12.9427 4.83923C12.9538 5.29418 12.9586 5.74927 12.957 6.20435L12.9577 6.6698V7.48712C12.9592 7.94242 12.9544 8.39771 12.9433 8.85287L12.9396 8.97391C12.9346 9.11367 12.9283 9.25155 12.9209 9.41814C12.8897 10.082 12.7836 10.5349 12.6301 10.9324C12.4739 11.349 12.2284 11.7264 11.9107 12.038C11.5988 12.3551 11.2215 12.6006 10.8052 12.7573C10.4077 12.9114 9.95476 13.0163 9.29091 13.0475C9.12433 13.0549 8.98644 13.0612 8.84669 13.0662L8.72565 13.0699C8.27049 13.081 7.81519 13.0858 7.3599 13.0843L6.89446 13.0849H6.07775C5.62246 13.0864 5.16716 13.0816 4.712 13.0705L4.59096 13.0668C4.44285 13.0614 4.29477 13.0552 4.14674 13.0481C3.48289 13.0169 3.02993 12.9108 2.63187 12.7573C2.21552 12.6009 1.8384 12.3554 1.52692 12.038C1.20937 11.7262 0.963662 11.3489 0.806919 10.9324C0.652812 10.5349 0.547995 10.082 0.516799 9.41814C0.50985 9.27009 0.503611 9.12202 0.498081 8.97391L0.494962 8.85287C0.483459 8.39772 0.478259 7.94242 0.479364 7.48712V6.20435C0.477623 5.74927 0.482198 5.29418 0.49309 4.83923L0.497457 4.71819C0.502449 4.57843 0.508688 4.43992 0.516175 4.27396C0.547371 3.60949 0.652188 3.15715 0.806295 2.7591C0.96313 2.34271 1.20932 1.96575 1.52754 1.65477C1.83881 1.33704 2.2157 1.0911 2.63187 0.934145C3.02993 0.780038 3.48227 0.67522 4.14674 0.644024L4.59096 0.625307L4.712 0.622187C5.16695 0.61069 5.62204 0.60549 6.07713 0.606589L7.3599 0.607213ZM6.71851 3.72679C6.30517 3.72094 5.89479 3.79731 5.51122 3.95144C5.12765 4.10557 4.77854 4.33441 4.48418 4.62464C4.18981 4.91487 3.95607 5.26071 3.79652 5.64206C3.63698 6.02341 3.55482 6.43267 3.55482 6.84605C3.55482 7.25943 3.63698 7.66869 3.79652 8.05004C3.95607 8.4314 4.18981 8.77724 4.48418 9.06747C4.77854 9.3577 5.12765 9.58653 5.51122 9.74066C5.89479 9.8948 6.30517 9.97116 6.71851 9.96531C7.54588 9.96531 8.33935 9.63665 8.92439 9.05161C9.50942 8.46658 9.83809 7.6731 9.83809 6.84574C9.83809 6.01838 9.50942 5.2249 8.92439 4.63987C8.33935 4.05483 7.54588 3.72679 6.71851 3.72679ZM6.71851 4.97462C6.96715 4.97004 7.2142 5.01505 7.44525 5.10702C7.67629 5.19899 7.88669 5.33608 8.06416 5.51028C8.24163 5.68448 8.3826 5.89229 8.47885 6.12159C8.5751 6.35088 8.6247 6.59706 8.62474 6.84573C8.62478 7.09441 8.57527 7.3406 8.4791 7.56993C8.38292 7.79925 8.24201 8.00712 8.06461 8.18138C7.8872 8.35563 7.67684 8.49279 7.44583 8.58484C7.21481 8.67689 6.96777 8.72198 6.71914 8.71748C6.22272 8.71748 5.74663 8.52028 5.39561 8.16926C5.04459 7.81824 4.84739 7.34216 4.84739 6.84574C4.84739 6.34932 5.04459 5.87324 5.39561 5.52221C5.74663 5.17119 6.22272 4.97399 6.71914 4.97399L6.71851 4.97462ZM9.99407 2.79092C9.79279 2.79897 9.60243 2.8846 9.46287 3.02986C9.32331 3.17512 9.24536 3.36874 9.24536 3.57018C9.24536 3.77163 9.32331 3.96525 9.46287 4.11051C9.60243 4.25577 9.79279 4.3414 9.99407 4.34945C10.2009 4.34945 10.3993 4.26729 10.5455 4.12103C10.6918 3.97477 10.774 3.7764 10.774 3.56956C10.774 3.36272 10.6918 3.16435 10.5455 3.01809C10.3993 2.87183 10.2009 2.78967 9.99407 2.78967V2.79092Z" fill="#fff" /></svg></a></li>
                        <li><a href="#"><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.52482 1.91199C3.52465 2.25807 3.387 2.5899 3.14217 2.8345C2.89733 3.07909 2.56536 3.2164 2.21928 3.21623C1.8732 3.21606 1.54136 3.07841 1.29677 2.83357C1.05218 2.58874 0.914866 2.25676 0.915039 1.91069C0.915212 1.56461 1.05286 1.23277 1.29769 0.988178C1.54253 0.743586 1.8745 0.606272 2.22058 0.606445C2.56666 0.606619 2.8985 0.744264 3.14309 0.989101C3.38768 1.23394 3.525 1.56591 3.52482 1.91199ZM3.56397 4.1825H0.954186V12.3511H3.56397V4.1825ZM7.68743 4.1825H5.09069V12.3511H7.66133V8.06456C7.66133 5.6766 10.7735 5.45477 10.7735 8.06456V12.3511H13.3507V7.17723C13.3507 3.15164 8.74439 3.3017 7.66133 5.27861L7.68743 4.1825Z" fill="#fff" /></svg></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Member 2 */}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="luminix-team-wrap" data-aos="fade-up" data-aos-duration="700">
                <div className="luminix-team-thumb">
                  <img src="/assets/images/team/team2.png" alt="" />
                  <div className="luminix-team-content">
                    <Link to="/about"><h5>Henry Collins</h5></Link>
                    <p>Head of Product — Digital Safety Expert</p>
                    <div className="luminix-team-social">
                      <ul>
                        <li><a href="#"><svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.34435 12.0845V6.72723H0.541504V4.63938H2.34435V3.09965C2.34435 1.31281 3.43569 0.339844 5.02968 0.339844C5.79321 0.339844 6.44943 0.396691 6.64067 0.422099V2.28945L5.53516 2.28995C4.66826 2.28995 4.5004 2.70189 4.5004 3.30638V4.63938H6.56788L6.29868 6.72723H4.5004V12.0845H2.34435Z" fill="#fff" /></svg></a></li>
                        <li><a href="#"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.18878 5.0021L11.1996 0.339844H10.2492L6.76657 4.38801L3.98503 0.339844H0.776855L4.98309 6.46139L0.776855 11.3505H1.72735L5.40505 7.07548L8.34256 11.3505H11.5507L7.18854 5.0021H7.18878ZM5.88695 6.51533L5.46077 5.90576L2.06982 1.05536H3.52972L6.26626 4.96979L6.69243 5.57935L10.2496 10.6675H8.78971L5.88695 6.51556V6.51533Z" fill="#fff" /></svg></a></li>
                        <li><a href="#"><svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.3599 0.607213C7.81519 0.605466 8.27048 0.610042 8.72565 0.620939L8.84669 0.625307C8.98644 0.630298 9.12433 0.636537 9.29091 0.644024C9.95476 0.67522 10.4077 0.780038 10.8052 0.934145C11.2169 1.09262 11.5638 1.30725 11.9107 1.65414C12.2279 1.96585 12.4734 2.34291 12.6301 2.7591C12.7842 3.15653 12.889 3.61012 12.9202 4.27396C12.9277 4.43992 12.934 4.57843 12.9389 4.71819L12.9427 4.83923C12.9538 5.29418 12.9586 5.74927 12.957 6.20435L12.9577 6.6698V7.48712C12.9592 7.94242 12.9544 8.39771 12.9433 8.85287L12.9396 8.97391C12.9346 9.11367 12.9283 9.25155 12.9209 9.41814C12.8897 10.082 12.7836 10.5349 12.6301 10.9324C12.4739 11.349 12.2284 11.7264 11.9107 12.038C11.5988 12.3551 11.2215 12.6006 10.8052 12.7573C10.4077 12.9114 9.95476 13.0163 9.29091 13.0475C9.12433 13.0549 8.98644 13.0612 8.84669 13.0662L8.72565 13.0699C8.27049 13.081 7.81519 13.0858 7.3599 13.0843L6.89446 13.0849H6.07775C5.62246 13.0864 5.16716 13.0816 4.712 13.0705L4.59096 13.0668C4.44285 13.0614 4.29477 13.0552 4.14674 13.0481C3.48289 13.0169 3.02993 12.9108 2.63187 12.7573C2.21552 12.6009 1.8384 12.3554 1.52692 12.038C1.20937 11.7262 0.963662 11.3489 0.806919 10.9324C0.652812 10.5349 0.547995 10.082 0.516799 9.41814C0.50985 9.27009 0.503611 9.12202 0.498081 8.97391L0.494962 8.85287C0.483459 8.39772 0.478259 7.94242 0.479364 7.48712V6.20435C0.477623 5.74927 0.482198 5.29418 0.49309 4.83923L0.497457 4.71819C0.502449 4.57843 0.508688 4.43992 0.516175 4.27396C0.547371 3.60949 0.652188 3.15715 0.806295 2.7591C0.96313 2.34271 1.20932 1.96575 1.52754 1.65477C1.83881 1.33704 2.2157 1.0911 2.63187 0.934145C3.02993 0.780038 3.48227 0.67522 4.14674 0.644024L4.59096 0.625307L4.712 0.622187C5.16695 0.61069 5.62204 0.60549 6.07713 0.606589L7.3599 0.607213ZM6.71851 3.72679C6.30517 3.72094 5.89479 3.79731 5.51122 3.95144C5.12765 4.10557 4.77854 4.33441 4.48418 4.62464C4.18981 4.91487 3.95607 5.26071 3.79652 5.64206C3.63698 6.02341 3.55482 6.43267 3.55482 6.84605C3.55482 7.25943 3.63698 7.66869 3.79652 8.05004C3.95607 8.4314 4.18981 8.77724 4.48418 9.06747C4.77854 9.3577 5.12765 9.58653 5.51122 9.74066C5.89479 9.8948 6.30517 9.97116 6.71851 9.96531C7.54588 9.96531 8.33935 9.63665 8.92439 9.05161C9.50942 8.46658 9.83809 7.6731 9.83809 6.84574C9.83809 6.01838 9.50942 5.2249 8.92439 4.63987C8.33935 4.05483 7.54588 3.72679 6.71851 3.72679ZM6.71851 4.97462C6.96715 4.97004 7.2142 5.01505 7.44525 5.10702C7.67629 5.19899 7.88669 5.33608 8.06416 5.51028C8.24163 5.68448 8.3826 5.89229 8.47885 6.12159C8.5751 6.35088 8.6247 6.59706 8.62474 6.84573C8.62478 7.09441 8.57527 7.3406 8.4791 7.56993C8.38292 7.79925 8.24201 8.00712 8.06461 8.18138C7.8872 8.35563 7.67684 8.49279 7.44583 8.58484C7.21481 8.67689 6.96777 8.72198 6.71914 8.71748C6.22272 8.71748 5.74663 8.52028 5.39561 8.16926C5.04459 7.81824 4.84739 7.34216 4.84739 6.84574C4.84739 6.34932 5.04459 5.87324 5.39561 5.52221C5.74663 5.17119 6.22272 4.97399 6.71914 4.97399L6.71851 4.97462ZM9.99407 2.79092C9.79279 2.79897 9.60243 2.8846 9.46287 3.02986C9.32331 3.17512 9.24536 3.36874 9.24536 3.57018C9.24536 3.77163 9.32331 3.96525 9.46287 4.11051C9.60243 4.25577 9.79279 4.3414 9.99407 4.34945C10.2009 4.34945 10.3993 4.26729 10.5455 4.12103C10.6918 3.97477 10.774 3.7764 10.774 3.56956C10.774 3.36272 10.6918 3.16435 10.5455 3.01809C10.3993 2.87183 10.2009 2.78967 9.99407 2.78967V2.79092Z" fill="#fff" /></svg></a></li>
                        <li><a href="#"><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.52482 1.91199C3.52465 2.25807 3.387 2.5899 3.14217 2.8345C2.89733 3.07909 2.56536 3.2164 2.21928 3.21623C1.8732 3.21606 1.54136 3.07841 1.29677 2.83357C1.05218 2.58874 0.914866 2.25676 0.915039 1.91069C0.915212 1.56461 1.05286 1.23277 1.29769 0.988178C1.54253 0.743586 1.8745 0.606272 2.22058 0.606445C2.56666 0.606619 2.8985 0.744264 3.14309 0.989101C3.38768 1.23394 3.525 1.56591 3.52482 1.91199ZM3.56397 4.1825H0.954186V12.3511H3.56397V4.1825ZM7.68743 4.1825H5.09069V12.3511H7.66133V8.06456C7.66133 5.6766 10.7735 5.45477 10.7735 8.06456V12.3511H13.3507V7.17723C13.3507 3.15164 8.74439 3.3017 7.66133 5.27861L7.68743 4.1825Z" fill="#fff" /></svg></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Member 3 */}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="luminix-team-wrap" data-aos="fade-up" data-aos-duration="900">
                <div className="luminix-team-thumb">
                  <img src="/assets/images/team/team3.png" alt="" />
                  <div className="luminix-team-content">
                    <Link to="/about"><h5>Oliver Wilson</h5></Link>
                    <p>Chief Technology Officer — Cybersecurity Lead</p>
                    <div className="luminix-team-social">
                      <ul>
                        <li><a href="#"><svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.34435 12.0845V6.72723H0.541504V4.63938H2.34435V3.09965C2.34435 1.31281 3.43569 0.339844 5.02968 0.339844C5.79321 0.339844 6.44943 0.396691 6.64067 0.422099V2.28945L5.53516 2.28995C4.66826 2.28995 4.5004 2.70189 4.5004 3.30638V4.63938H6.56788L6.29868 6.72723H4.5004V12.0845H2.34435Z" fill="#fff" /></svg></a></li>
                        <li><a href="#"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.18878 5.0021L11.1996 0.339844H10.2492L6.76657 4.38801L3.98503 0.339844H0.776855L4.98309 6.46139L0.776855 11.3505H1.72735L5.40505 7.07548L8.34256 11.3505H11.5507L7.18854 5.0021H7.18878ZM5.88695 6.51533L5.46077 5.90576L2.06982 1.05536H3.52972L6.26626 4.96979L6.69243 5.57935L10.2496 10.6675H8.78971L5.88695 6.51556V6.51533Z" fill="#fff" /></svg></a></li>
                        <li><a href="#"><svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.3599 0.607213C7.81519 0.605466 8.27048 0.610042 8.72565 0.620939L8.84669 0.625307C8.98644 0.630298 9.12433 0.636537 9.29091 0.644024C9.95476 0.67522 10.4077 0.780038 10.8052 0.934145C11.2169 1.09262 11.5638 1.30725 11.9107 1.65414C12.2279 1.96585 12.4734 2.34291 12.6301 2.7591C12.7842 3.15653 12.889 3.61012 12.9202 4.27396C12.9277 4.43992 12.934 4.57843 12.9389 4.71819L12.9427 4.83923C12.9538 5.29418 12.9586 5.74927 12.957 6.20435L12.9577 6.6698V7.48712C12.9592 7.94242 12.9544 8.39771 12.9433 8.85287L12.9396 8.97391C12.9346 9.11367 12.9283 9.25155 12.9209 9.41814C12.8897 10.082 12.7836 10.5349 12.6301 10.9324C12.4739 11.349 12.2284 11.7264 11.9107 12.038C11.5988 12.3551 11.2215 12.6006 10.8052 12.7573C10.4077 12.9114 9.95476 13.0163 9.29091 13.0475C11.2169 1.09262 11.5638 1.30725 11.9107 1.65414C12.2279 1.96585 12.4734 2.34291 12.6301 2.7591C12.7842 3.15653 12.889 3.61012 12.9202 4.27396C12.9277 4.43992 12.934 4.57843 12.9389 4.71819L12.9427 4.83923C12.9538 5.29418 12.9586 5.74927 12.957 6.20435L12.9577 6.6698V7.48712C12.9592 7.94242 12.9544 8.39771 12.9433 8.85287L12.9396 8.97391C12.9346 9.11367 12.9283 9.25155 12.9209 9.41814C12.8897 10.082 12.7836 10.5349 12.6301 10.9324C12.4739 11.349 12.2284 11.7264 11.9107 12.038C11.5988 12.3551 11.2215 12.6006 10.8052 12.7573C10.4077 12.9114 9.95476 13.0163 9.29091 13.0475C9.12433 13.0549 8.98644 13.0612 8.84669 13.0662L8.72565 13.0699C8.27049 13.081 7.81519 13.0858 7.3599 13.0843L6.89446 13.0849H6.07775C5.62246 13.0864 5.16716 13.0816 4.712 13.0705L4.59096 13.0668C4.44285 13.0614 4.29477 13.0552 4.14674 13.0481C3.48289 13.0169 3.02993 12.9108 2.63187 12.7573C2.21552 12.6009 1.8384 12.3554 1.52692 12.038C1.20937 11.7262 0.963662 11.3489 0.806919 10.9324C0.652812 10.5349 0.547995 10.082 0.516799 9.41814C0.50985 9.27009 0.503611 9.12202 0.498081 8.97391L0.494962 8.85287C0.483459 8.39772 0.478259 7.94242 0.479364 7.48712V6.20435C0.477623 5.74927 0.482198 5.29418 0.49309 4.83923L0.497457 4.71819C0.502449 4.57843 0.508688 4.43992 0.516175 4.27396C0.547371 3.60949 0.652188 3.15715 0.806295 2.7591C0.96313 2.34271 1.20932 1.96575 1.52754 1.65477C1.83881 1.33704 2.2157 1.0911 2.63187 0.934145C3.02993 0.780038 3.48227 0.67522 4.14674 0.644024L4.59096 0.625307L4.712 0.622187C5.16695 0.61069 5.62204 0.60549 6.07713 0.606589L7.3599 0.607213ZM6.71851 3.72679C6.30517 3.72094 5.89479 3.79731 5.51122 3.95144C5.12765 4.10557 4.77854 4.33441 4.48418 4.62464C4.18981 4.91487 3.95607 5.26071 3.79652 5.64206C3.63698 6.02341 3.55482 6.43267 3.55482 6.84605C3.55482 7.25943 3.63698 7.66869 3.79652 8.05004C3.95607 8.4314 4.18981 8.77724 4.48418 9.06747C4.77854 9.3577 5.12765 9.58653 5.51122 9.74066C5.89479 9.8948 6.30517 9.97116 6.71851 9.96531C7.54588 9.96531 8.33935 9.63665 8.92439 9.05161C9.50942 8.46658 9.83809 7.6731 9.83809 6.84574C9.83809 6.01838 9.50942 5.2249 8.92439 4.63987C8.33935 4.05483 7.54588 3.72679 6.71851 3.72679ZM6.71851 4.97462C6.96715 4.97004 7.2142 5.01505 7.44525 5.10702C7.67629 5.19899 7.88669 5.33608 8.06416 5.51028C8.24163 5.68448 8.3826 5.89229 8.47885 6.12159C8.5751 6.35088 8.6247 6.59706 8.62474 6.84573C8.62478 7.09441 8.57527 7.3406 8.4791 7.56993C8.38292 7.79925 8.24201 8.00712 8.06461 8.18138C7.8872 8.35563 7.67684 8.49279 7.44583 8.58484C7.21481 8.67689 6.96777 8.72198 6.71914 8.71748C6.22272 8.71748 5.74663 8.52028 5.39561 8.16926C5.04459 7.81824 4.84739 7.34216 4.84739 6.84574C4.84739 6.34932 5.04459 5.87324 5.39561 5.52221C5.74663 5.17119 6.22272 4.97399 6.71914 4.97399L6.71851 4.97462ZM9.99407 2.79092C9.79279 2.79897 9.60243 2.8846 9.46287 3.02986C9.32331 3.17512 9.24536 3.36874 9.24536 3.57018C9.24536 3.77163 9.32331 3.96525 9.46287 4.11051C9.60243 4.25577 9.79279 4.3414 9.99407 4.34945C10.2009 4.34945 10.3993 4.26729 10.5455 4.12103C10.6918 3.97477 10.774 3.7764 10.774 3.56956C10.774 3.36272 10.6918 3.16435 10.5455 3.01809C10.3993 2.87183 10.2009 2.78967 9.99407 2.78967V2.79092Z" fill="#fff" /></svg></a></li>
                        <li><a href="#"><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.52482 1.91199C3.52465 2.25807 3.387 2.5899 3.14217 2.8345C2.89733 3.07909 2.56536 3.2164 2.21928 3.21623C1.8732 3.21606 1.54136 3.07841 1.29677 2.83357C1.05218 2.58874 0.914866 2.25676 0.915039 1.91069C0.915212 1.56461 1.05286 1.23277 1.29769 0.988178C1.54253 0.743586 1.8745 0.606272 2.22058 0.606445C2.56666 0.606619 2.8985 0.744264 3.14309 0.989101C3.38768 1.23394 3.525 1.56591 3.52482 1.91199ZM3.56397 4.1825H0.954186V12.3511H3.56397V4.1825ZM7.68743 4.1825H5.09069V12.3511H7.66133V8.06456C7.66133 5.6766 10.7735 5.45477 10.7735 8.06456V12.3511H13.3507V7.17723C13.3507 3.15164 8.74439 3.3017 7.66133 5.27861L7.68743 4.1825Z" fill="#fff" /></svg></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Member 4 */}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="luminix-team-wrap" data-aos="fade-up" data-aos-duration="1100">
                <div className="luminix-team-thumb">
                  <img src="/assets/images/team/team4.png" alt="" />
                  <div className="luminix-team-content">
                    <Link to="/about"><h5>Thomas Graham</h5></Link>
                    <p>VP of Customer Success — Parent Liaison</p>
                    <div className="luminix-team-social">
                      <ul>
                        <li><a href="#"><svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.34435 12.0845V6.72723H0.541504V4.63938H2.34435V3.09965C2.34435 1.31281 3.43569 0.339844 5.02968 0.339844C5.79321 0.339844 6.44943 0.396691 6.64067 0.422099V2.28945L5.53516 2.28995C4.66826 2.28995 4.5004 2.70189 4.5004 3.30638V4.63938H6.56788L6.29868 6.72723H4.5004V12.0845H2.34435Z" fill="#fff" /></svg></a></li>
                        <li><a href="#"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.18878 5.0021L11.1996 0.339844H10.2492L6.76657 4.38801L3.98503 0.339844H0.776855L4.98309 6.46139L0.776855 11.3505H1.72735L5.40505 7.07548L8.34256 11.3505H11.5507L7.18854 5.0021H7.18878ZM5.88695 6.51533L5.46077 5.90576L2.06982 1.05536H3.52972L6.26626 4.96979L6.69243 5.57935L10.2496 10.6675H8.78971L5.88695 6.51556V6.51533Z" fill="#fff" /></svg></a></li>
                        <li><a href="#"><svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.3599 0.607213C7.81519 0.605466 8.27048 0.610042 8.72565 0.620939L8.84669 0.625307C8.98644 0.630298 9.12433 0.636537 9.29091 0.644024C9.95476 0.67522 10.4077 0.780038 10.8052 0.934145C11.2169 1.09262 11.5638 1.30725 11.9107 1.65414C12.2279 1.96585 12.4734 2.34291 12.6301 2.7591C12.7842 3.15653 12.889 3.61012 12.9202 4.27396C12.9277 4.43992 12.934 4.57843 12.9389 4.71819L12.9427 4.83923C12.9538 5.29418 12.9586 5.74927 12.957 6.20435L12.9577 6.6698V7.48712C12.9592 7.94242 12.9544 8.39771 12.9433 8.85287L12.9396 8.97391C12.9346 9.11367 12.9283 9.25155 12.9209 9.41814C12.8897 10.082 12.7836 10.5349 12.6301 10.9324C12.4739 11.349 12.2284 11.7264 11.9107 12.038C11.5988 12.3551 11.2215 12.6006 10.8052 12.7573C10.4077 12.9114 9.95476 13.0163 9.29091 13.0475C9.12433 13.0549 8.98644 13.0612 8.84669 13.0662L8.72565 13.0699C8.27049 13.081 7.81519 13.0858 7.3599 13.0843L6.89446 13.0849H6.07775C5.62246 13.0864 5.16716 13.0816 4.712 13.0705L4.59096 13.0668C4.44285 13.0614 4.29477 13.0552 4.14674 13.0481C3.48289 13.0169 3.02993 12.9108 2.63187 12.7573C2.21552 12.6009 1.8384 12.3554 1.52692 12.038C1.20937 11.7262 0.963662 11.3489 0.806919 10.9324C0.652812 10.5349 0.547995 10.082 0.516799 9.41814C0.50985 9.27009 0.503611 9.12202 0.498081 8.97391L0.494962 8.85287C0.483459 8.39772 0.478259 7.94242 0.479364 7.48712V6.20435C0.477623 5.74927 0.482198 5.29418 0.49309 4.83923L0.497457 4.71819C0.502449 4.57843 0.508688 4.43992 0.516175 4.27396C0.547371 3.60949 0.652188 3.15715 0.806295 2.7591C0.96313 2.34271 1.20932 1.96575 1.52754 1.65477C1.83881 1.33704 2.2157 1.0911 2.63187 0.934145C3.02993 0.780038 3.48227 0.67522 4.14674 0.644024L4.59096 0.625307L4.712 0.622187C5.16695 0.61069 5.62204 0.60549 6.07713 0.606589L7.3599 0.607213ZM6.71851 3.72679C6.30517 3.72094 5.89479 3.79731 5.51122 3.95144C5.12765 4.10557 4.77854 4.33441 4.48418 4.62464C4.18981 4.91487 3.95607 5.26071 3.79652 5.64206C3.63698 6.02341 3.55482 6.43267 3.55482 6.84605C3.55482 7.25943 3.63698 7.66869 3.79652 8.05004C3.95607 8.4314 4.18981 8.77724 4.48418 9.06747C4.77854 9.3577 5.12765 9.58653 5.51122 9.74066C5.89479 9.8948 6.30517 9.97116 6.71851 9.96531C7.54588 9.96531 8.33935 9.63665 8.92439 9.05161C9.50942 8.46658 9.83809 7.6731 9.83809 6.84574C9.83809 6.01838 9.50942 5.2249 8.92439 4.63987C8.33935 4.05483 7.54588 3.72679 6.71851 3.72679ZM6.71851 4.97462C6.96715 4.97004 7.2142 5.01505 7.44525 5.10702C7.67629 5.19899 7.88669 5.33608 8.06416 5.51028C8.24163 5.68448 8.3826 5.89229 8.47885 6.12159C8.5751 6.35088 8.6247 6.59706 8.62474 6.84573C8.62478 7.09441 8.57527 7.3406 8.4791 7.56993C8.38292 7.79925 8.24201 8.00712 8.06461 8.18138C7.8872 8.35563 7.67684 8.49279 7.44583 8.58484C7.21481 8.67689 6.96777 8.72198 6.71914 8.71748C6.22272 8.71748 5.74663 8.52028 5.39561 8.16926C5.04459 7.81824 4.84739 7.34216 4.84739 6.84574C4.84739 6.34932 5.04459 5.87324 5.39561 5.52221C5.74663 5.17119 6.22272 4.97399 6.71914 4.97399L6.71851 4.97462ZM9.99407 2.79092C9.79279 2.79897 9.60243 2.8846 9.46287 3.02986C9.32331 3.17512 9.24536 3.36874 9.24536 3.57018C9.24536 3.77163 9.32331 3.96525 9.46287 4.11051C9.60243 4.25577 9.79279 4.3414 9.99407 4.34945C10.2009 4.34945 10.3993 4.26729 10.5455 4.12103C10.6918 3.97477 10.774 3.7764 10.774 3.56956C10.774 3.36272 10.6918 3.16435 10.5455 3.01809C10.3993 2.87183 10.2009 2.78967 9.99407 2.78967V2.79092Z" fill="#fff" /></svg></a></li>
                        <li><a href="#"><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.52482 1.91199C3.52465 2.25807 3.387 2.5899 3.14217 2.8345C2.89733 3.07909 2.56536 3.2164 2.21928 3.21623C1.8732 3.21606 1.54136 3.07841 1.29677 2.83357C1.05218 2.58874 0.914866 2.25676 0.915039 1.91069C0.915212 1.56461 1.05286 1.23277 1.29769 0.988178C1.54253 0.743586 1.8745 0.606272 2.22058 0.606445C2.56666 0.606619 2.8985 0.744264 3.14309 0.989101C3.38768 1.23394 3.525 1.56591 3.52482 1.91199ZM3.56397 4.1825H0.954186V12.3511H3.56397V4.1825ZM7.68743 4.1825H5.09069V12.3511H7.66133V8.06456C7.66133 5.6766 10.7735 5.45477 10.7735 8.06456V12.3511H13.3507V7.17723C13.3507 3.15164 8.74439 3.3017 7.66133 5.27861L7.68743 4.1825Z" fill="#fff" /></svg></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default Home;
