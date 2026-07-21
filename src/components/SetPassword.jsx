import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function SetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = location.state?.token;

  useEffect(() => {
    window.scrollTo(0, 0);
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';
    
    if (!token) {
      navigate('/login');
    }

    return () => {
      if (header) header.style.display = '';
      if (footer) footer.style.display = '';
    };
  }, [token, navigate]);

  const [formData, setFormData] = useState({ newPassword: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const validate = () => {
    const e = {};
    const pw = formData.newPassword;
    
    if (pw.length < 8) e.newPassword = 'Min 8 characters';
    else if (!/[A-Z]/.test(pw)) e.newPassword = 'Must contain uppercase';
    else if (!/[a-z]/.test(pw)) e.newPassword = 'Must contain lowercase';
    else if (!/[0-9]/.test(pw)) e.newPassword = 'Must contain number';
    else if (!/[^A-Za-z0-9]/.test(pw)) e.newPassword = 'Must contain symbol';
    
    if (pw !== formData.confirmPassword) {
      e.confirmPassword = 'Passwords do not match';
    }
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    
    setLoading(true);
    try {
      const response = await fetch('/api/auth/change-password-first-time', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          newPassword: formData.newPassword
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.msg || 'Failed to update password. Please try again.');
      }

      navigate('/dashboard', {
        state: {
          accountDetails: {
            token
          }
        }
      });
    } catch (error) {
      setApiError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const features = [
    { icon: 'shield', color: '#818cf8', bg: 'rgba(79,70,229,0.2)', label: 'Real-time Monitoring', desc: "Stay updated with your child's online activities in real-time." },
    { icon: 'alert', color: '#f97316', bg: 'rgba(249,115,22,0.2)', label: 'Smart Alerts', desc: 'Get instant alerts for concerning activities or risks.' },
    { icon: 'bar', color: '#0ea5e9', bg: 'rgba(14,165,233,0.2)', label: 'Usage Insights', desc: 'Understand screen time, app usage, and digital habits.' },
    { icon: 'users', color: '#a855f7', bg: 'rgba(168,85,247,0.2)', label: 'Family Protection', desc: 'Powerful tools to keep your child safe online.' },
  ];

  const getIcon = (type) => {
    switch(type) {
      case 'shield': return <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></>;
      case 'alert': return <><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>;
      case 'bar': return <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>;
      case 'users': return <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>;
      default: return null;
    }
  };

  return (
    <>
      <style>{`
        .reg-wrapper {
          display: flex;
          min-height: 100vh;
          font-family: 'Inter', 'Plus Jakarta Sans', sans-serif;
          background: #fff;
        }

        /* LEFT PANEL */
        .reg-left {
          flex: 1.3;
          background-image: url('/myimg/image copy 13.png');
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 40px 60px;
          overflow: hidden;
        }

        .reg-left-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(145deg, rgba(6,9,19,0.92) 0%, rgba(10,15,37,0.85) 50%, rgba(6,9,19,0.95) 100%);
          z-index: 1;
        }

        .reg-logo {
          display: flex; align-items: center; gap: 12px; position: relative; z-index: 2; margin-bottom: 40px; margin-left: 30px;
        }

        .reg-content-row {
          display: flex; gap: 40px; align-items: center; position: relative; z-index: 2; flex: 1;
        }

        .reg-text-col {
          flex: 1; max-width: 600px;
        }
        .reg-tag {
          color: #38bdf8; font-size: 13px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin: 0 0 10px;
        }
        .reg-title {
          font-size: 42px; font-weight: 800; color: #fff; line-height: 1.15; margin: 0 0 16px;
        }
        .reg-title span {
          background: linear-gradient(to right, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .reg-subtitle {
          color: rgba(255,255,255,0.7); font-size: 15px; margin: 0 0 32px; line-height: 1.6;
        }

        .feat-list {
          display: flex; flex-direction: column; gap: 20px;
        }
        .feat-item {
          display: flex; gap: 16px; align-items: flex-start;
        }
        .feat-icon-box {
          width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .feat-label {
          color: #fff; font-size: 15px; font-weight: 700; margin: 0 0 4px;
        }
        .feat-desc {
          color: rgba(255,255,255,0.5); font-size: 13px; margin: 0; line-height: 1.4;
        }

        .reg-badges {
          display: flex; justify-content: space-between; gap: 16px; padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.08); position: relative; z-index: 2; margin-top: 40px;
        }
        .badge-item {
          flex: 1; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05);
          border-radius: 16px; padding: 16px; display: flex; gap: 12px; align-items: flex-start;
          backdrop-filter: blur(10px);
        }
        .badge-label { color: #f8fafc; font-size: 13px; font-weight: 700; margin: 0 0 4px; }
        .badge-desc { color: rgba(255,255,255,0.4); font-size: 11px; margin: 0; line-height: 1.3; }

        /* RIGHT PANEL */
        .reg-right {
          flex: 1; background: #ffffff; display: flex; align-items: center; justify-content: center; padding: 40px;
        }
        .form-card {
          width: 100%; max-width: 480px;
        }

        .form-h2 {
          font-size: 28px; font-weight: 800; color: #0f172a; margin: 0 0 6px;
        }
        .form-h3 {
          font-size: 18px; font-weight: 700; color: #6366f1; margin: 0 0 8px;
        }
        .form-p {
          color: #64748b; font-size: 14px; margin: 0 0 24px;
        }
        
        .form-divider {
          display: flex; align-items: center; margin: 0 0 24px;
        }
        .form-divider::before, .form-divider::after {
          content: ''; flex: 1; height: 1px; background: #e2e8f0;
        }
        .form-divider svg { margin: 0 12px; color: #cbd5e1; }

        .pw-wrap { position: relative; margin-bottom: 24px; }
        .pw-eye { position: absolute; right: 14px; top: 50%; transform: translateY(-50%); cursor: pointer; color: #94a3b8; display: flex; z-index: 10; }
        .pw-icon { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: #94a3b8; width: 18px; height: 18px; pointer-events: none; z-index: 10; }

        .reg-inp {
          width: 100%; padding: 14px 14px 14px 44px !important; box-sizing: border-box;
          border: 1px solid #cbd5e1; border-radius: 12px; background: #fff;
          color: #0f172a; font-size: 14px; outline: none; transition: all 0.2s; font-weight: 500;
          height: auto !important; line-height: normal; margin: 0;
        }
        .reg-inp::placeholder { color: #94a3b8; font-weight: 400; }
        .reg-inp:focus { border-color: #6366f1; box-shadow: 0 0 0 4px rgba(99,102,241,0.1); }
        .err { color: #ef4444; font-size: 11px; font-weight: 500; display: block; margin-top: 4px; padding-left: 4px; }

        .hints { display: flex; flex-direction: column; gap: 8px; margin-bottom: 24px; }
        .hint { display: flex; align-items: center; gap: 8px; color: #64748b; font-size: 13px; }
        .hint-check { width: 16px; height: 16px; border-radius: 50%; background: #dcfce7; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

        .reg-btn {
          width: 100%; padding: 16px; border-radius: 12px; border: none;
          background: linear-gradient(135deg, #4f46e5, #7c3aed); color: #fff;
          font-size: 15px; font-weight: 700; cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          box-shadow: 0 8px 25px rgba(79,70,229,0.3); transition: transform 0.2s, box-shadow 0.2s;
          margin-bottom: 16px;
        }
        .reg-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(79,70,229,0.4); }

        .privacy-note { display: flex; align-items: center; justify-content: center; gap: 6px; color: #94a3b8; font-size: 12px; margin-top: 24px; text-align: center; }

        @media (max-width: 1024px) {
          .reg-wrapper { flex-direction: column; }
          .reg-left, .reg-right { width: 100%; flex: none; }
          .reg-left { padding: 30px 20px 20px !important; }
          .reg-right { padding: 20px !important; }
          .reg-content-row { flex-direction: column; text-align: center; }
          .reg-text-col { max-width: 100%; }
          .feat-list, .reg-badges, .reg-subtitle { display: none !important; }
          .reg-logo { justify-content: center; margin-left: 0 !important; margin-bottom: 20px !important; }
          .reg-title { font-size: 32px; margin-bottom: 0; }
        }
      `}</style>

      <div className="reg-wrapper">
        <div className="reg-left">
          <div className="reg-left-overlay"></div>
          <div className="reg-logo">
            <Link to="/">
              <img src="/myimg/image.png" alt="Vigil" style={{ height: '50px', width: 'auto' }} />
            </Link>
          </div>

          <div className="reg-content-row">
            <div className="reg-text-col">
              <p className="reg-tag">Welcome to VIGIL</p>
              <h2 className="reg-title">Peace of Mind<br/>for <span>Every Parent.</span></h2>
              <p className="reg-subtitle">Monitor, protect, and guide your child's digital journey — all in one place.</p>
              
              <div className="feat-list">
                {features.map((f, i) => (
                  <div className="feat-item" key={i}>
                    <div className="feat-icon-box" style={{ background: f.bg }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={f.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        {getIcon(f.icon)}
                      </svg>
                    </div>
                    <div>
                      <p className="feat-label">{f.label}</p>
                      <p className="feat-desc">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="reg-badges">
            {[
              { icon: 'M3 11h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V11z M7 11V7a5 5 0 0 1 10 0v4', color: '#a855f7', label: '100% Secure', desc: 'Your data is safe and encrypted' },
              { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4', color: '#0ea5e9', label: 'Trusted by Parents', desc: 'Thousands of parents trust VIGIL' },
              { icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z M8 14s1.5 2 4 2 4-2 4-2 M9 9h.01 M15 9h.01', color: '#f97316', label: 'Made for Families', desc: 'Proudly designed in the USA' },
            ].map((b, i) => (
              <div className="badge-item" key={i}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={b.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  {b.icon.split(' M').map((d, j) => <path key={j} d={j === 0 ? d : 'M' + d}/>)}
                </svg>
                <div>
                  <p className="badge-label">{b.label}</p>
                  <p className="badge-desc">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reg-right">
          <div className="form-card">
            
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <h2 className="form-h2">Secure Your Account</h2>
              <h3 className="form-h3">Set New Password</h3>
              <p className="form-p">For your security, please choose a new, strong password.</p>
            </div>

            <div className="form-divider">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="pw-wrap" style={{ marginBottom: '16px' }}>
                <svg className="pw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <input type={showPassword ? 'text' : 'password'} name="newPassword" value={formData.newPassword} onChange={handleChange} placeholder="New Password" className="reg-inp" style={{ paddingRight: '48px !important' }} />
                <div className="pw-eye" onClick={() => setShowPassword(!showPassword)}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {showPassword ? <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></> : <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></>}
                  </svg>
                </div>
                {errors.newPassword && <span className="err">{errors.newPassword}</span>}
              </div>

              <div className="pw-wrap">
                <svg className="pw-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <input type={showPassword ? 'text' : 'password'} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" className="reg-inp" style={{ paddingRight: '48px !important' }} />
                {errors.confirmPassword && <span className="err">{errors.confirmPassword}</span>}
              </div>

              <div className="hints">
                {['At least 8 characters', 'Include uppercase & lowercase letters', 'Include a number or special character'].map((h, i) => {
                  let isMet = false;
                  const pw = formData.newPassword;
                  if (i === 0) isMet = pw.length >= 8;
                  if (i === 1) isMet = /[A-Z]/.test(pw) && /[a-z]/.test(pw);
                  if (i === 2) isMet = /[0-9]/.test(pw) || /[^A-Za-z0-9]/.test(pw);

                  return (
                    <div className="hint" key={i}>
                      <div className="hint-check" style={{ background: isMet ? '#dcfce7' : '#f1f5f9' }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={isMet ? '#16a34a' : '#cbd5e1'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      {h}
                    </div>
                  );
                })}
              </div>

              {apiError && (
                <div style={{ color: '#ef4444', fontSize: '13px', fontWeight: '500', marginBottom: '16px', textAlign: 'center', background: '#fef2f2', padding: '10px', borderRadius: '8px', border: '1px solid #fee2e2' }}>
                  {apiError}
                </div>
              )}

              <button type="submit" className="reg-btn" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
                {loading ? 'Updating...' : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
                    Set Password & Access Dashboard
                  </>
                )}
              </button>
            </form>

            <p className="privacy-note">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              VIGIL is committed to protecting your family's privacy and keeping your data secure.
            </p>
            
          </div>
        </div>

      </div>
    </>
  );
}
