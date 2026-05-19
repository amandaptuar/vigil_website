import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <style>{`
        .luminix-header-bottom {
          padding-top: 0px !important;
          padding-bottom: 0px !important;
          transition: all 0.3s ease;
        }
        .header-logo1 img {
          padding-top: 5px !important;
          padding-bottom: 5px !important;
          transition: all 0.3s ease;
        }
        .site-header {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
        }
        .site-header.sticky-menu .luminix-header-bottom {
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          background: #fff !important;
        }
        .luminix-hero-section, .breadcrumb-wrapper {
          margin-top: 75px !important; /* Reduced from 90px */
        }
        @media (max-width: 1199px) {
          .luminix-hero-section, .breadcrumb-wrapper {
            margin-top: 65px !important; /* Reduced from 80px */
          }
        }
        .luminix-menu-wrapper {
          visibility: hidden;
          opacity: 0;
          transition: all 0.4s ease;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.7);
          z-index: 9999;
        }
        .luminix-menu-wrapper.luminix-body-visible {
          visibility: visible;
          opacity: 1;
        }
        .luminix-menu-wrapper.luminix-body-visible .luminix-menu-area {
          transform: translateX(0);
        }
        .luminix-menu-area {
          position: absolute;
          top: 0;
          right: 0;
          width: 300px;
          height: 100%;
          background: #fff;
          transform: translateX(100%);
          transition: transform 0.4s ease;
          padding: 30px;
          overflow-y: auto;
        }
        .luminix-mobile-menu ul li a {
          display: block;
          padding: 15px 20px;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          color: #001A3D;
          font-weight: 500;
        }
        .luminix-menu-toggle span {
          display: block;
          width: 25px;
          height: 2px;
          background: #001A3D;
          margin: 5px 0;
          transition: 0.3s;
        }
      `}</style>
      <div className={`luminix-menu-wrapper ${isMenuOpen ? 'luminix-body-visible' : ''}`} onClick={closeMenu}>
        <div className="luminix-menu-area text-center" onClick={(e) => e.stopPropagation()}>
          <div className="luminix-menu-mobile-top">
            <div className="mobile-logo">
              <Link to="/">
                <img src="/myimg/image.png" alt="logo" style={{ maxHeight: '80px' }} />
              </Link>
            </div>
            <button className="luminix-menu-toggle mobile" onClick={closeMenu}>
              <i className="ri-close-line"></i>
            </button>
          </div>
          <div className="luminix-mobile-menu">
            <ul>
              <li>
                <Link to="/" onClick={closeMenu}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={closeMenu}>About Vigil</Link>
              </li>
              <li>
                <Link to="/service" onClick={closeMenu}>Our Features</Link>
              </li>
              <li>
                <Link to="/pricing" onClick={closeMenu}>Pricing Plans</Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="luminix-mobile-menu-btn">
            <Link className="luminix-default-btn sm-size" to="/contact" onClick={closeMenu} data-text="Contact Us"><span className="btn-wraper">Contact Us</span></Link>
          </div>
        </div>
      </div>

      <header className={`site-header luminix-header-section ${isSticky ? 'sticky-menu' : ''}`} id="sticky-menu">
        <div className="luminix-header-bottom white-bg1">
          <div className="container">
            <div className="row gx-3 align-items-center justify-content-between">
              <div className="col-8 col-sm-auto ">
                <div className="header-logo1 ">
                  <Link to="/">
                    <img src="/myimg/image.png" alt="logo" style={{ maxHeight: '90px' }} />
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="luminix-main-menu-item">
                  <nav className="main-menu menu-style1 d-none d-xl-block menu-left">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About Vigil</Link>
                      </li>
                      <li>
                        <Link to="/service">Our Features</Link>
                      </li>
                      <li>
                        <Link to="/pricing">Pricing Plans</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-auto d-flex align-items-center">
                <div className="luminix-header-info-wraper2">
                  <div className="luminix-header-info-wrap2">
                    <div className="luminix-header-info-icon">
                      <img src="/assets/images/iconbox/call-icon.svg" alt="" />
                    </div>
                    <div className="luminix-header-info-content">
                      <ul>
                        <li>Call Any Time</li>
                        <li><a href="tel:+18881234567">+1 (888) 123-4567</a></li>
                      </ul>
                    </div>
                  </div>
                  <Link className="luminix-default-btn luminix-header-btn" to="/contact">Contact Us
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.2139 1.5L17.7139 8M17.7139 8L11.2139 14.5M17.7139 8L0.999581 8" stroke="#001A3D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M11.2139 1.5L17.7139 8M17.7139 8L11.2139 14.5M17.7139 8L0.999581 8" stroke="#001A3D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
                <div className="luminix-header-menu">
                  <nav className="navbar site-navbar justify-content-between">
                    <button className="luminix-menu-toggle d-inline-block d-xl-none" onClick={toggleMenu}>
                      <span></span>
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
