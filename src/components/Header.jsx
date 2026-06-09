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
        .luminix-menu-mobile-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 30px;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          padding-bottom: 15px;
        }
        .luminix-mobile-menu ul li a {
          display: block;
          padding: 15px 20px;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          color: #001A3D;
          font-weight: 500;
        }
        .luminix-menu-toggle {
          display: flex !important;
          flex-direction: column !important;
          justify-content: center !important;
          align-items: center !important;
          gap: 4px !important;
          background: transparent !important;
          border: none !important;
          outline: none !important;
          cursor: pointer !important;
          padding: 8px !important;
          width: 40px !important;
          height: 40px !important;
        }
        .luminix-menu-toggle::before,
        .luminix-menu-toggle::after,
        .luminix-menu-toggle span::before,
        .luminix-menu-toggle span::after {
          display: none !important;
          content: none !important;
        }
        .luminix-menu-toggle span {
          display: block !important;
          width: 22px !important;
          height: 2.5px !important;
          background: #4F46E5 !important; /* Indigo theme color */
          transition: 0.3s !important;
          margin: 0 !important;
        }
        .luminix-menu-toggle.mobile {
          font-size: 28px;
          color: #001A3D;
          border: none;
          background: transparent;
          cursor: pointer;
          display: inline-flex !important;
        }
        .main-menu ul {
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: nowrap !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 12px !important;
          margin: 0 !important;
          padding: 0 !important;
          list-style: none !important;
        }
        .main-menu ul li {
          white-space: nowrap !important;
          display: inline-block !important;
        }
        .luminix-header-info-wraper2 {
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          flex-wrap: nowrap !important;
          gap: 20px !important;
          width: max-content !important;
        }
        .luminix-header-info-wrap2 {
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          gap: 10px !important;
          white-space: nowrap !important;
        }
        .luminix-header-info-content ul {
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          gap: 6px !important;
          margin: 0 !important; 
          padding: 0 !important; 
          list-style: none !important;
        }
        .luminix-header-info-content ul li {
          line-height: 1 !important;
          white-space: nowrap !important;
        }
        .luminix-default-btn {
          white-space: nowrap !important;
          display: inline-flex !important;
          align-items: center !important;
        }
        @media (max-width: 1199px) {
          .luminix-hero-section, .breadcrumb-wrapper {
            margin-top: 65px !important;
          }
          .luminix-header-info-wrap2 {
            display: none !important;
          }
          .luminix-header-menu {
            display: block !important;
          }
        }
        @media (max-width: 767px) {
          .luminix-header-info-wraper2 {
            display: none !important;
          }
          .header-logo1 img {
            max-height: 60px !important;
          }
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
                <Link to="/casestudy" onClick={closeMenu}>Case Study</Link>
              </li>
              <li>
                <Link to="/features" onClick={closeMenu}>Our Features</Link>
              </li>
              <li>
                <Link to="/pricing" onClick={closeMenu}>Pricing Plans</Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="luminix-mobile-menu-btn" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px', padding: '0 20px' }}>
            <Link to="/login" onClick={closeMenu} style={{
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              padding: '12px 20px', borderRadius: '8px', fontWeight: '600',
              background: '#f1f5f9', color: '#4f46e5', border: '1px solid #c7d2fe',
              textDecoration: 'none'
            }}>Login to VIGIL</Link>
            
            <Link to="/register" onClick={closeMenu} style={{
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              padding: '12px 20px', borderRadius: '8px', fontWeight: '600',
              background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', color: '#fff',
              border: 'none', textDecoration: 'none'
            }}>Create Account</Link>
          </div>
        </div>
      </div>

      <header className={`site-header luminix-header-section ${isSticky ? 'sticky-menu' : ''}`} id="sticky-menu">
        <div className="luminix-header-bottom white-bg1">
          <div className="container-fluid px-4 px-xl-5">
            <div className="row gx-3 align-items-center justify-content-between flex-nowrap">
              <div className="col-auto">
                <div className="header-logo1 ">
                  <Link to="/">
                    <img src="/myimg/image.png" alt="logo" style={{ maxHeight: '90px' }} />
                  </Link>
                </div>
              </div>
              <div className="col d-none d-xl-block">
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
                        <Link to="/casestudy">Case Study</Link>
                      </li>
                      <li>
                        <Link to="/features">Our Features</Link>
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
                        <li><a href="tel:+14045550293" style={{ color: '#000000' }}>+1 (404) 555-0293</a></li>
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
                    <button className="luminix-menu-toggle d-inline-flex d-xl-none" onClick={toggleMenu} aria-label="Toggle Menu">
                      <span></span>
                      <span></span>
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
