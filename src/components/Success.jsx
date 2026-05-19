import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

function Success() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showEmailToast, setShowEmailToast] = useState(false);
  const [animateIcon, setAnimateIcon] = useState(false);
  const emailSent = useRef(false);

  const accountDetails = location.state?.accountDetails || {
    username: '98765johns',
    password: '54321',
    plan: 'Free Family Protection',
    devices: '1 Device',
    status: 'Active',
    parentName: 'Parent',
    email: 'test@example.com'
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setAnimateIcon(true), 100);
    
    // Send Real Email using EmailJS
    if (!emailSent.current && accountDetails.email !== 'test@example.com') {
      emailSent.current = true;
      
      const templateParams = {
        to_email: accountDetails.email,
        to_name: accountDetails.parentName,
        username: accountDetails.username,
        password: accountDetails.password,
      };

      // REPLACE THESE PLACEHOLDERS WITH YOUR ACTUAL EMAILJS KEYS
      const SERVICE_ID = 'YOUR_SERVICE_ID';
      const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
      const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

      emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
        .then((response) => {
          console.log('SUCCESS! Email sent.', response.status, response.text);
          setShowEmailToast(true); // Show the toast once the email is sent successfully
        })
        .catch((err) => {
          console.error('FAILED to send email...', err);
        });
    } else if (accountDetails.email === 'test@example.com') {
        // Fallback for direct navigation testing
        setTimeout(() => setShowEmailToast(true), 2000);
    }
  }, [accountDetails]);

  const detailStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '16px 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
  };

  const labelStyle = { color: '#9ca3af', fontWeight: '500' };
  const valueStyle = { color: '#fff', fontWeight: '600' };

  return (
    <>
      <div className="luminix-padding-section4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="luminix-contact-box" style={{ padding: '50px', borderRadius: '15px', textAlign: 'center' }}>
                {/* Celebration Icon */}
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  background: 'rgba(41, 32, 210, 0.1)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 24px',
                  transform: animateIcon ? 'scale(1)' : 'scale(0.5)',
                  opacity: animateIcon ? 1 : 0,
                  transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#2920D2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div className="luminix-contact-title mb-4">
                  <h2 className="title pb-0 pt-0">🎉 Welcome to Vigil!</h2>
                  <p style={{ color: '#2920D2', fontSize: '18px', fontWeight: '500', marginTop: '10px' }}>Your free subscription has been activated successfully.</p>
                </div>

                <div style={{ 
                  background: '#f8f9fa', 
                  border: '1px solid #EBEBEB',
                  borderRadius: '10px', 
                  padding: '20px 30px', 
                  textAlign: 'left',
                  marginBottom: '40px'
                }}>
                  <div style={{ ...detailStyle, borderBottomColor: '#EBEBEB' }}>
                    <span style={{ color: '#555', fontWeight: '500' }}>Username</span>
                    <span style={{ color: '#000', fontWeight: '600' }}>{accountDetails.username}</span>
                  </div>
                  <div style={{ ...detailStyle, borderBottomColor: '#EBEBEB' }}>
                    <span style={{ color: '#555', fontWeight: '500' }}>Temporary Password</span>
                    <span style={{ color: '#000', fontWeight: '600' }}>{accountDetails.password}</span>
                  </div>
                  <div style={{ ...detailStyle, borderBottomColor: '#EBEBEB' }}>
                    <span style={{ color: '#555', fontWeight: '500' }}>Plan</span>
                    <span style={{ color: '#2920D2', fontWeight: '600' }}>{accountDetails.plan}</span>
                  </div>
                  <div style={{ ...detailStyle, borderBottomColor: '#EBEBEB' }}>
                    <span style={{ color: '#555', fontWeight: '500' }}>Devices Allowed</span>
                    <span style={{ color: '#000', fontWeight: '600' }}>{accountDetails.devices}</span>
                  </div>
                  <div style={{ ...detailStyle, borderBottom: 'none' }}>
                    <span style={{ color: '#555', fontWeight: '500' }}>Status</span>
                    <span style={{ color: '#10b981', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></span>
                      {accountDetails.status}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                  <button onClick={() => navigate('/')} className="luminix-default-btn pill extra-btn4 w-100" style={{ border: 'none', cursor: 'pointer' }}>
                    GO TO HOME PAGE
                  </button>
                  <button onClick={() => navigate('/child-setup')} className="luminix-default-btn pill w-100" style={{ background: '#fff', color: '#2920D2', border: '2px solid #2920D2', cursor: 'pointer' }}>
                    DOWNLOAD CHILD APP
                  </button>
                  <Link to="/contact" style={{ color: '#555', textDecoration: 'none', fontSize: '15px', marginTop: '10px', fontWeight: '500' }}>
                    VIEW SETUP GUIDE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Email Toast Mockup */}
        <div style={{
          position: 'fixed',
          top: showEmailToast ? '20px' : '-400px',
          right: '20px',
          width: '350px',
          background: '#fff',
          border: '1px solid #EBEBEB',
          borderRadius: '10px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          zIndex: 9999,
          transition: 'top 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '30px', height: '30px', background: '#2920D2', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span style={{ color: '#000', fontWeight: '600', fontSize: '14px' }}>New Email</span>
            </div>
            <button onClick={() => setShowEmailToast(false)} style={{ background: 'none', border: 'none', color: '#555', cursor: 'pointer', fontSize: '20px', padding: 0 }}>&times;</button>
          </div>
          <h4 style={{ color: '#000', fontSize: '14px', marginBottom: '8px', fontWeight: '600' }}>Welcome to Vigil — Your Family Protection is Now Active</h4>
          <p style={{ color: '#555', fontSize: '13px', lineHeight: '1.5', marginBottom: '12px' }}>
            Welcome to Vigil, {accountDetails.parentName}! Your free subscription has been activated successfully.
          </p>
          <div style={{ background: '#f8f9fa', padding: '12px', borderRadius: '8px', fontSize: '13px', color: '#000', marginBottom: '12px', border: '1px solid #EBEBEB' }}>
            <div style={{ marginBottom: '4px' }}><strong>Username:</strong> {accountDetails.username}</div>
            <div><strong>Password:</strong> {accountDetails.password}</div>
          </div>
          <p style={{ color: '#ef4444', fontSize: '11px', margin: 0 }}>* For security reasons, please change your password after first login.</p>
        </div>
      </div>
    </>
  );
}

export default Success;
