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
import Register from './components/Register';
import Success from './components/Success';
import Dashboard from './components/Dashboard';
import ChildSetup from './components/ChildSetup';
import Features from './components/Features';
import BlogPost from './components/BlogPost';
import CaseStudy from './components/CaseStudy';

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
        <Route path="/service" element={<Features />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/child-setup" element={<ChildSetup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-conditions" element={<Terms />} />
        <Route path="/casestudy" element={<CaseStudy />} />
        <Route path="/blog/how-to-keep-children-safe-online-2026" element={<BlogPost />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

