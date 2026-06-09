import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function RegistrationSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, email } = location.state || {};

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!email) {
      navigate('/');
    }
  }, [email, navigate]);

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
              Hi <strong>{name || 'there'}</strong>! Thank you for joining VIGIL. Your unique username and temporary password have been sent to your email address.
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
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span style={{ color: '#4f46e5', fontWeight: 600, fontSize: '14px' }}>Credentials Sent To</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ color: '#4b5563', fontWeight: 500, fontSize: '14px' }}>Email Address</span>
                <span style={{
                  backgroundColor: '#eef2f6',
                  color: '#4f46e5',
                  borderRadius: '9999px',
                  padding: '6px 16px',
                  fontFamily: 'monospace',
                  fontWeight: 600,
                  fontSize: '13px'
                }}>{email || '—'}</span>
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
                  <strong style={{ color: '#111827', display: 'block', marginBottom: '2px' }}>Check your inbox</strong>
                  Your username and temporary password have been emailed to you. Please save them before logging in.
                </div>
              </div>
            </div>

            {/* Back to Home Button */}
            <Link
              to="/"
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
                textDecoration: 'none',
                transition: 'background-color 0.2s ease',
                boxSizing: 'border-box'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4338ca'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4f46e5'}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="9 22 9 12 15 12 15 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
