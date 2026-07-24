import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';
import Terms from './components/Terms';
import PrivacyPolicy from './components/PrivacyPolicy';
import Pricing from './components/Pricing';
import Register from './components/Register';
import Login from './components/Login';
import RegistrationSuccess from './components/RegistrationSuccess';
import SetPassword from './components/SetPassword';
import ParentDashboard from './components/ParentDashboard/ParentDashboard';
import ChildSetup from './components/ChildSetup';
import Features from './components/Features';
import BlogPost from './components/BlogPost';
import CaseStudy from './components/CaseStudy';
import CaseStudySingle from './components/CaseStudySingle';

// Routes where Header & Footer should NOT be shown
const NO_CHROME_PATHS = ['/dashboard', '/login', '/register', '/register/success', '/set-password', '/child-setup'];

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.AOS) {
      setTimeout(() => { window.AOS.init(); }, 100);
    }
  }, [pathname]);

  return null;
}

function AppShell() {
  const { pathname } = useLocation();
  const hideChrome = NO_CHROME_PATHS.some(p => pathname === p || pathname.startsWith(p + '/'));

  return (
    <>
      {!hideChrome && (
        <>
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
        </>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Features />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/success" element={<RegistrationSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/dashboard" element={<ParentDashboard />} />
        <Route path="/child-setup" element={<ChildSetup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-conditions" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/casestudy" element={<CaseStudy />} />
        <Route path="/casestudy/:id" element={<CaseStudySingle />} />
        <Route path="/blog/how-to-keep-children-safe-online-2026" element={<BlogPost />} />
      </Routes>

      {!hideChrome && <Footer />}
    </>
  );
}

// Deployed at both vigil-1.com (root) and 160-153-179-249.sslip.io/parentsaccess
// (VPS mirror) — pick the basename that matches wherever we're actually loaded.
function getBasename() {
  const p = window.location.pathname;
  if (p.startsWith('/parentsaccess')) return '/parentsaccess';
  return '';
}

function App() {
  useEffect(() => {
    if (window.AOS) window.AOS.init();
  }, []);

  return (
    <Router basename={getBasename()}>
      <ScrollToTop />
      <AppShell />
    </Router>
  );
}

export default App;
