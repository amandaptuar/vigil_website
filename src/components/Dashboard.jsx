import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const BENEFITS = [
  { icon: '🛡️', title: 'Real-time Monitoring', desc: 'Live tracking of all device activity' },
  { icon: '💬', title: 'SMS & Call Logs', desc: 'View messages and call history' },
  { icon: '📱', title: 'App Usage Tracking', desc: 'Time spent on each app' },
  { icon: '🌐', title: 'Web Filter', desc: 'Block inappropriate websites' },
  { icon: '📍', title: 'Live Location', desc: 'Real-time GPS tracking' },
  { icon: '🤖', title: 'AI Smart Alerts', desc: 'Instant alerts for risky behavior' },
  { icon: '🖼️', title: 'Gallery Access', desc: 'View photos taken on device' },
  { icon: '⏱️', title: 'Screen Time Control', desc: 'Set daily screen time limits' },
];

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user || {};
  const name = user.name || 'Parent';
  const email = user.email || '—';
  const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) || 'P';

  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';
    return () => {
      if (header) header.style.display = '';
      if (footer) footer.style.display = '';
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        .db { min-height: 100vh; background: #f0f2f8; font-family: 'Inter', sans-serif; }

        /* ── TOPBAR ── */
        .db-top {
          background: #fff;
          border-bottom: 1px solid #e4e7f0;
          padding: 0 40px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 12px rgba(79,70,229,0.06);
        }
        .db-logo { height: 46px; }
        .db-top-right { display: flex; align-items: center; gap: 16px; }
        .db-avatar-pill {
          display: flex; align-items: center; gap: 10px;
          background: #f5f3ff; border: 1px solid #e0d9ff;
          border-radius: 50px; padding: 6px 18px 6px 6px;
        }
        .db-avatar {
          width: 38px; height: 38px; border-radius: 50%;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          color: #fff; font-size: 14px; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 10px rgba(79,70,229,0.3);
        }
        .db-user-name { font-size: 14px; font-weight: 700; color: #1e1b4b; }
        .db-signout {
          display: flex; align-items: center; gap: 6px;
          color: #94a3b8; font-size: 13px; font-weight: 600;
          background: none; border: none; cursor: pointer;
          padding: 8px 14px; border-radius: 10px; transition: all 0.2s;
        }
        .db-signout:hover { background: #fef2f2; color: #ef4444; }

        /* ── CONTENT ── */
        .db-content { max-width: 1380px; margin: 0 auto; padding: 40px 32px 60px; }

        /* ── HERO BANNER ── */
        .db-hero {
          background: linear-gradient(135deg, #4338ca 0%, #6d28d9 60%, #7c3aed 100%);
          border-radius: 24px;
          padding: 36px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 28px;
          box-shadow: 0 12px 40px rgba(79,70,229,0.25);
          position: relative;
          overflow: hidden;
        }
        .db-hero::before {
          content: '';
          position: absolute;
          top: -40px; right: -40px;
          width: 220px; height: 220px;
          background: rgba(255,255,255,0.07);
          border-radius: 50%;
        }
        .db-hero::after {
          content: '';
          position: absolute;
          bottom: -60px; right: 120px;
          width: 180px; height: 180px;
          background: rgba(255,255,255,0.05);
          border-radius: 50%;
        }
        .db-hero-left { position: relative; z-index: 1; }
        .db-hero-tag {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25);
          border-radius: 20px; padding: 4px 14px; font-size: 12px; font-weight: 700;
          color: #fff; letter-spacing: 0.5px; margin-bottom: 14px;
        }
        .db-hero-title { font-size: 36px; font-weight: 900; color: #fff; margin: 0 0 10px; line-height: 1.2; }
        .db-hero-sub { font-size: 16px; color: rgba(255,255,255,0.75); margin: 0; }
        .db-hero-card {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 16px; padding: 20px 28px;
          text-align: center; backdrop-filter: blur(10px);
          position: relative; z-index: 1; flex-shrink: 0;
        }
        .db-hero-card-label { color: rgba(255,255,255,0.7); font-size: 13px; font-weight: 600; letter-spacing: 0.8px; text-transform: uppercase; margin: 0 0 8px; }
        .db-hero-card-value { color: #fff; font-size: 20px; font-weight: 800; margin: 0; }

        /* ── STAT CARDS ── */
        .db-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 28px; }
        .db-stat {
          background: #fff; border-radius: 18px;
          padding: 22px 24px;
          display: flex; align-items: center; gap: 16px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
          border: 1px solid #eef0f8;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .db-stat:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.08); }
        .db-stat-icon {
          width: 52px; height: 52px; border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          font-size: 24px; flex-shrink: 0;
        }
        .db-stat-label { font-size: 14px; color: #94a3b8; font-weight: 600; margin: 0 0 6px; text-transform: uppercase; letter-spacing: 0.5px; }
        .db-stat-value { font-size: 26px; font-weight: 800; color: #0f172a; margin: 0; }

        /* ── TWO-COL GRID ── */
        .db-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }

        /* ── CARDS ── */
        .db-card {
          background: #fff; border-radius: 20px;
          padding: 26px; border: 1px solid #eef0f8;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
        }
        .db-card-head {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 22px;
        }
        .db-card-head-icon {
          width: 36px; height: 36px; border-radius: 10px;
          background: #f0f0ff;
          display: flex; align-items: center; justify-content: center;
        }
        .db-card-title { font-size: 18px; font-weight: 800; color: #0f172a; margin: 0; }

        /* Account rows */
        .db-row { display: flex; justify-content: space-between; align-items: center; padding: 13px 0; border-bottom: 1px solid #f1f5f9; }
        .db-row:last-child { border-bottom: none; padding-bottom: 0; }
        .db-row-label { font-size: 15px; color: #94a3b8; font-weight: 500; }
        .db-row-value { font-size: 15px; font-weight: 700; color: #1e293b; }
        .db-plan-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          color: #fff; font-size: 11px; font-weight: 700;
          padding: 4px 12px; border-radius: 20px; letter-spacing: 0.3px;
        }
        .db-active-badge {
          display: inline-flex; align-items: center; gap: 5px;
          background: #f0fdf4; color: #16a34a;
          font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 20px;
        }

        /* Benefits */
        .db-benefits-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .db-benefit {
          display: flex; align-items: center; gap: 10px;
          padding: 11px 14px; background: #f8fafc;
          border: 1px solid #eef0f8; border-radius: 12px;
          transition: all 0.2s;
        }
        .db-benefit:hover { background: #f0f0ff; border-color: #c7d2fe; }
        .db-benefit-emoji { font-size: 20px; }
        .db-benefit-name { font-size: 14px; font-weight: 700; color: #1e293b; margin: 0 0 3px; }
        .db-benefit-sub { font-size: 13px; color: #94a3b8; margin: 0; }

        /* Device section */
        .db-device-empty {
          background: #f8fafc; border: 2px dashed #e2e8f0;
          border-radius: 16px; padding: 36px 24px; text-align: center;
        }
        .db-device-empty p { color: #94a3b8; font-size: 16px; margin: 0 0 20px; line-height: 1.6; }
        .db-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          color: #fff; border: none; border-radius: 12px;
          padding: 13px 24px; font-size: 14px; font-weight: 700; cursor: pointer;
          box-shadow: 0 6px 18px rgba(79,70,229,0.3); transition: all 0.2s;
        }
        .db-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(79,70,229,0.4); }
        .db-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff; color: #4f46e5;
          border: 2px solid #e0d9ff; border-radius: 12px;
          padding: 11px 24px; font-size: 14px; font-weight: 700; cursor: pointer;
          transition: all 0.2s;
        }
        .db-btn-ghost:hover { background: #f5f3ff; border-color: #c7d2fe; }

        /* Steps */
        .db-steps { display: flex; flex-direction: column; gap: 14px; margin-top: 22px; }
        .db-step { display: flex; align-items: flex-start; gap: 14px; }
        .db-step-num {
          width: 30px; height: 30px; border-radius: 50%; flex-shrink: 0;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          color: #fff; font-size: 12px; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          margin-top: 1px;
        }
        .db-step-title { font-size: 15px; font-weight: 700; color: #1e293b; margin: 0 0 3px; }
        .db-step-sub { font-size: 14px; color: #94a3b8; margin: 0; }

        .db-qr-box {
          margin-top: 20px; background: #f8fafc;
          border: 1px solid #e2e8f0; border-radius: 16px;
          padding: 28px; text-align: center;
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

        @media (max-width: 900px) {
          .db-stats { grid-template-columns: 1fr 1fr; }
          .db-grid { grid-template-columns: 1fr; }
          .db-benefits-grid { grid-template-columns: 1fr; }
          .db-hero { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 600px) {
          .db-top { padding: 0 16px; height: 60px; }
          .db-logo { height: 32px; }
          .db-top-right { gap: 10px; }
          .db-user-name { display: none; }
          .db-avatar-pill { padding: 0; background: transparent; border: none; }
          .db-avatar { width: 34px; height: 34px; font-size: 13px; }
          .db-signout { padding: 8px; border-radius: 8px; }
          .db-signout span { display: none; }
          .db-signout svg { width: 18px; height: 18px; }
          .db-content { padding: 20px 16px 48px; }
          .db-stats { grid-template-columns: 1fr; }
          .db-hero { padding: 28px 24px; }
          .db-hero-title { font-size: 22px; }
        }
      `}</style>

      <div className="db">
        {/* TOPBAR */}
        <div className="db-top">
          <Link to="/"><img src="/myimg/image.png" alt="Vigil" className="db-logo" /></Link>
          <div className="db-top-right">
            <div className="db-avatar-pill">
              <div className="db-avatar">{initials}</div>
              <span className="db-user-name">{name}</span>
            </div>
            <button className="db-signout" onClick={() => navigate('/')}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        <div className="db-content">

          {/* HERO */}
          <div className="db-hero">
            <div className="db-hero-left">
              <div className="db-hero-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Parent Dashboard
              </div>
              <h1 className="db-hero-title">Welcome back, {name.split(' ')[0]}! 👋</h1>
              <p className="db-hero-sub">Your family protection is active. Set up a child device to start monitoring.</p>
            </div>
            <div className="db-hero-card">
              <p className="db-hero-card-label">Current Plan</p>
              <p className="db-hero-card-value">🛡️ Free Family Plan</p>
            </div>
          </div>

          {/* STATS */}
          <div className="db-stats">
            <div className="db-stat">
              <div className="db-stat-icon" style={{ background: '#f0f0ff' }}>📱</div>
              <div>
                <p className="db-stat-label">Devices</p>
                <p className="db-stat-value">0</p>
              </div>
            </div>
            <div className="db-stat">
              <div className="db-stat-icon" style={{ background: '#f0fdf4' }}>✅</div>
              <div>
                <p className="db-stat-label">Status</p>
                <p className="db-stat-value" style={{ fontSize: '16px', color: '#16a34a' }}>Active</p>
              </div>
            </div>
            <div className="db-stat">
              <div className="db-stat-icon" style={{ background: '#fff7ed' }}>🔔</div>
              <div>
                <p className="db-stat-label">Alerts Today</p>
                <p className="db-stat-value">0</p>
              </div>
            </div>
          </div>

          {/* TWO COLUMN */}
          <div className="db-grid">
            {/* Account Info */}
            <div className="db-card">
              <div className="db-card-head">
                <div className="db-card-head-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <p className="db-card-title">Account Info</p>
              </div>
              <div className="db-row">
                <span className="db-row-label">Name</span>
                <span className="db-row-value">{name}</span>
              </div>
              <div className="db-row">
                <span className="db-row-label">Email</span>
                <span className="db-row-value" style={{ fontSize: '12px', maxWidth: '180px', wordBreak: 'break-all', textAlign: 'right' }}>{email}</span>
              </div>
              <div className="db-row">
                <span className="db-row-label">Plan</span>
                <span className="db-plan-badge">🛡️ Free Plan</span>
              </div>
              <div className="db-row">
                <span className="db-row-label">Status</span>
                <span className="db-active-badge">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  Active
                </span>
              </div>
            </div>

            {/* Plan Benefits */}
            <div className="db-card">
              <div className="db-card-head">
                <div className="db-card-head-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
                </div>
                <p className="db-card-title">Your Benefits</p>
                <span style={{ marginLeft: 'auto', fontSize: '11px', fontWeight: 700, background: '#f0f0ff', color: '#4f46e5', padding: '3px 10px', borderRadius: '20px' }}>8 Features</span>
              </div>
              <div className="db-benefits-grid">
                {BENEFITS.map((b, i) => (
                  <div className="db-benefit" key={i}>
                    <span className="db-benefit-emoji">{b.icon}</span>
                    <div>
                      <p className="db-benefit-name">{b.title}</p>
                      <p className="db-benefit-sub">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* DEVICE SETUP — FULL WIDTH */}
          <div className="db-card">
            <div className="db-card-head">
              <div className="db-card-head-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
              </div>
              <p className="db-card-title">Child Device Setup</p>
            </div>

            <div className="db-device-empty">
              <div style={{ fontSize: '44px', marginBottom: '12px' }}>📱</div>
              <p>No child device connected yet.<br/>Connect a device to start real-time monitoring.</p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button className="db-btn-primary" onClick={() => setShowQR(!showQR)}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="5" height="5"/><rect x="16" y="3" width="5" height="5"/><rect x="3" y="16" width="5" height="5"/><line x1="16" y1="16" x2="21" y2="16"/><line x1="16" y1="21" x2="21" y2="21"/><line x1="21" y1="16" x2="21" y2="21"/></svg>
                  {showQR ? 'Hide QR Code' : 'Generate QR Code'}
                </button>
                <button className="db-btn-ghost">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download Child App
                </button>
              </div>

              {showQR && (
                <div className="db-qr-box">
                  <p style={{ fontSize: '14px', fontWeight: 700, color: '#1e293b', marginBottom: '16px' }}>Scan with Vigil Child App</p>
                  <div style={{ background: '#fff', padding: '16px', borderRadius: '12px', display: 'inline-block', marginBottom: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
                    <div style={{ width: '140px', height: '140px', background: `repeating-linear-gradient(45deg,#000 25%,transparent 25%,transparent 75%,#000 75%,#000),repeating-linear-gradient(45deg,#000 25%,#fff 25%,#fff 75%,#000 75%,#000)`, backgroundPosition: '0 0,10px 10px', backgroundSize: '20px 20px' }}></div>
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '8px' }}>Or use pairing code</p>
                  <div style={{ fontSize: '22px', fontWeight: 900, color: '#4f46e5', letterSpacing: '8px' }}>X7V-9A2</div>
                </div>
              )}
            </div>

            <div className="db-steps">
              {[
                { title: 'Download Vigil Child App', sub: 'Install the app on your child\'s Android device from Play Store' },
                { title: 'Scan QR or Enter Code', sub: 'Use the QR above or type the pairing code in the child app' },
                { title: 'Grant Permissions', sub: 'Allow the required permissions on the child\'s device' },
                { title: 'Start Monitoring', sub: 'Activity will appear in your dashboard in real-time' },
              ].map((s, i) => (
                <div className="db-step" key={i}>
                  <div className="db-step-num">{i + 1}</div>
                  <div>
                    <p className="db-step-title">{s.title}</p>
                    <p className="db-step-sub">{s.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
