import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';
import Terms from './components/Terms';
import Pricing from './components/Pricing';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.AOS) {
      setTimeout(() => {
        window.AOS.init();
      }, 100);
    }
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    // Re-initialize AOS if it's available globally
    if (window.AOS) {
      window.AOS.init();
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="luminix-preloader-wrap">
        <div className="luminix-preloader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar"></div>
      </div>

      <div className="paginacontainer">
        <div className="progress-wrap">
          <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
          <div className="top-arrow">
            <svg width="12" height="20" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.999999 1L8 8L1 15" stroke="#2920D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-conditions" element={<Terms />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

