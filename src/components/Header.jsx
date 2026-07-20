import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
    { code: 'ha', name: 'Hausa', flag: '🇳🇬' },
    { code: 'zu', name: 'Zulu', flag: '🇿🇦' }
  ];

  useEffect(() => {
    const getCookie = (cname) => {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    };
    const langCookie = getCookie('googtrans');
    if (langCookie) {
      setCurrentLang(langCookie.split('/').pop());
    }
  }, []);

  const handleLanguageChange = (lang) => {
    const setCookie = (cname, cvalue, exdays) => {
      const d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      let expires = "expires="+d.toUTCString();
      
      let domain = window.location.hostname;
      if (domain.startsWith("www.")) {
        domain = domain.substring(4);
      }
      
      // Set without domain
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      // Set with base domain (dot prefixed)
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;domain=." + domain;
      // Set with exact hostname
      if (window.location.hostname !== 'localhost') {
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;domain=" + window.location.hostname;
      }
    };
    
    setCookie('googtrans', `/en/${lang}`, 30);
    window.location.reload();
  };

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
          width: auto !important; /* Changed from max-content to prevent overflow */
          flex-shrink: 1;
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
          flex-shrink: 1;
        }
        @media (max-width: 1455px) {
          .luminix-header-btn {
            display: none !important;
          }
        }
        @media (max-width: 1399px) {
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
        @media (max-width: 1199px) {
          .site-header .luminix-header-info-wraper2,
          .luminix-header-info-wraper2 {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .header-logo1 img {
            max-height: 55px !important;
          }
        }
        .lang-dropdown {
          position: relative;
          display: inline-block;
          margin-right: 15px;
        }
        .lang-btn {
          background: transparent;
          border: 1px solid rgba(0,26,61,0.2);
          padding: 8px 15px;
          border-radius: 8px;
          color: #001A3D;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s;
        }
        .lang-btn:hover {
          background: rgba(0,26,61,0.05);
        }
        .lang-menu {
          position: absolute;
          top: 120%;
          left: 0;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          min-width: 140px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.3s;
          z-index: 1000;
          padding: 10px 0;
        }
        .lang-dropdown:hover .lang-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .lang-item {
          padding: 8px 20px;
          color: #001A3D;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: 0.3s;
          font-weight: 500;
        }
        .lang-item:hover {
          background: rgba(79, 70, 229, 0.1);
          color: #4f46e5;
        }
        .mobile-lang-wrap {
          padding: 15px 20px;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .mobile-lang-btn {
          padding: 8px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          background: #f8fafc;
          color: #0f172a;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: 0.3s;
        }
        .mobile-lang-btn.active {
          background: #4f46e5;
          color: white;
          border-color: #4f46e5;
        }
        @media (max-width: 991px) {
          .lang-dropdown {
            display: none !important;
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
          <div className="mobile-lang-wrap notranslate">
            {languages.map(lang => (
              <button 
                key={lang.code} 
                className={`mobile-lang-btn ${currentLang === lang.code ? 'active' : ''}`}
                onClick={() => handleLanguageChange(lang.code)}
              >
                <span>{lang.flag}</span> {lang.name}
              </button>
            ))}
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
                  <div className="lang-dropdown d-none d-lg-inline-block notranslate">
                    <button className="lang-btn">
                      <span>{languages.find(l => l.code === currentLang)?.flag || '🇺🇸'}</span> 
                      {languages.find(l => l.code === currentLang)?.code.toUpperCase() || 'EN'}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    <div className="lang-menu">
                      {languages.map(lang => (
                        <div key={lang.code} className="lang-item" onClick={() => handleLanguageChange(lang.code)}>
                          <span>{lang.flag}</span> {lang.name}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link className="luminix-default-btn luminix-header-btn" to="/contact">
                    <span className="btn-text">Contact Us</span>
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '6px'}}>
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
