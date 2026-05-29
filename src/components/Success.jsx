import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

function Success() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showEmailToast, setShowEmailToast] = useState(false);
  const emailSent = useRef(false);

  const accountDetails = location.state?.accountDetails || {
    username: 'parent@example.com',
    password: '54321',
    plan: 'Free Family Protection',
    devices: '1 Device',
    status: 'Active',
    parentName: 'Parent',
    email: 'test@example.com'
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Send Real Email using EmailJS
    if (!emailSent.current && accountDetails.email !== 'test@example.com') {
      emailSent.current = true;
      
      const templateParams = {
        to_email: accountDetails.email,
        to_name: accountDetails.parentName,
        username: accountDetails.username,
        password: accountDetails.password,
        subject: 'Welcome to Vigil – Your Account Has Been Created Successfully',
        message: `Hi ${accountDetails.parentName},\n\nYour Vigil account has been created successfully. You’re now ready to start protecting and monitoring your child with Vigil.\n\nHere are your login details:\n\nUsername: ${accountDetails.username}\nPassword: ${accountDetails.password}\n\nFor security reasons, we recommend changing your password after your first login.\n\nIf you need any assistance, feel free to contact our support team.\n\nWelcome aboard!\n\nBest regards,\nTeam Vigil`
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

  return (
    <>
      <div style={{
        background: 'radial-gradient(circle, #f8fafc 0%, #e2e8f0 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        fontFamily: "'Inter', 'Plus Jakarta Sans', sans-serif"
      }}>
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 8px 15px -6px rgba(0, 0, 0, 0.05)',
          maxWidth: '1000px',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}>
          {/* Header Image */}
          <img src="/myimg/image copy 11.png" alt="Vigil Banner" style={{ width: '100%', objectFit: 'cover' }} />

          <div style={{ padding: '0 24px 24px 24px', textAlign: 'center', position: 'relative', marginTop: '-24px' }}>
            {/* Envelope Badge */}
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#eef2f6',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto',
              border: '4px solid #ffffff'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Typography */}
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#111827', margin: '0 0 8px 0' }}>
              Welcome to <span style={{ color: '#4f46e5' }}>VIGIL!</span>
            </h2>
            <p style={{ color: '#4b5563', fontWeight: 500, margin: '0 0 12px 0', fontSize: '15px' }}>
              Your account has been created successfully.
            </p>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.5, margin: '0 auto 24px auto', maxWidth: '85%' }}>
              Thank you for joining VIGIL. You're now part of a community of parents committed to building a safer digital world for kids.
            </p>

            {/* Account Details Box */}
            <div style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'left',
              marginBottom: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ color: '#4f46e5', fontWeight: 600, fontSize: '14px' }}>Your Account Details</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ color: '#4b5563', fontWeight: 500, fontSize: '14px' }}>Email (Username)</span>
                <span style={{
                  backgroundColor: '#eef2f6',
                  color: '#4f46e5',
                  borderRadius: '9999px',
                  padding: '6px 16px',
                  fontFamily: 'monospace',
                  fontWeight: 600,
                  fontSize: '13px'
                }}>{accountDetails.username}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ color: '#4b5563', fontWeight: 500, fontSize: '14px' }}>Password</span>
                <span style={{
                  backgroundColor: '#eef2f6',
                  color: '#4f46e5',
                  borderRadius: '9999px',
                  padding: '6px 16px',
                  fontFamily: 'monospace',
                  fontWeight: 600,
                  fontSize: '13px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  {accountDetails.password}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}>
                    <path d="M8 16H6C5.46957 16 4.96086 15.7893 4.58579 15.4142C4.21071 15.0391 4 14.5304 4 14V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H14C14.5304 4 15.0391 4.21071 15.4142 4.58579C15.7893 4.96086 16 5.46957 16 6V8" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V10C20 9.46957 19.7893 8.96086 19.4142 8.58579C19.0391 8.21071 18.5304 8 18 8H10C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10V18C8 18.5304 8.21071 19.0391 8.58579 19.4142C8.96086 19.7893 9.46957 20 10 20Z" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>

              {/* Security Alert Banner */}
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '12px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                fontSize: '12px',
                color: '#4b5563',
                lineHeight: 1.4
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <strong style={{ color: '#111827', display: 'block', marginBottom: '2px' }}>For your security</strong>
                  We recommend changing your password after your first login.
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => navigate('/dashboard')}
              style={{
                backgroundColor: '#4f46e5',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '15px',
                padding: '14px 24px',
                borderRadius: '8px',
                width: '100%',
                border: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4338ca'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4f46e5'}
            >
              Login to Your Account
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
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
            <div style={{ marginBottom: '4px' }}><strong>Email (Username):</strong> {accountDetails.username}</div>
            <div><strong>Password:</strong> {accountDetails.password}</div>
          </div>
          <p style={{ color: '#ef4444', fontSize: '11px', margin: 0 }}>* For security reasons, please change your password after first login.</p>
        </div>
      </div>
    </>
  );
}

export default Success;
