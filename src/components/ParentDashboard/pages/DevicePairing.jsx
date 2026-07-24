import React, { useState } from 'react';
import { childrenApi } from '../../../utils/apiService';

export default function DevicePairing({ refreshChildren }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ email: '', password: '', otp: '', childName: '', childAge: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [lookupEmail, setLookupEmail] = useState('');
  const [lookupResults, setLookupResults] = useState([]);
  const [lookupLoading, setLookupLoading] = useState(false);

  const f = (field) => form[field];
  const set = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }));

  const sendOtp = async () => {
    if (!f('email') || !f('password')) return setError('Email and password are required');
    setLoading(true); setError('');
    const res = await childrenApi.loginAndSendOtp(f('email'), f('password'));
    setLoading(false);
    if (res.ok || res.status === 200 || res.status === 201) {
      setStep(2);
      setSuccess('OTP sent! Check your email inbox.');
    } else {
      setError(res.data?.message || res.data?.msg || 'Failed to send OTP. Check your credentials.');
    }
  };

  const verifyAndPair = async () => {
    if (!f('otp')) return setError('OTP is required');
    if (!f('childName')) return setError('Child name is required');
    if (!f('childAge')) return setError('Child age is required');
    setLoading(true); setError(''); setSuccess('');
    const res = await childrenApi.verifyOtpAndPair(f('email'), f('otp'), f('childName'), parseInt(f('childAge')));
    setLoading(false);
    if (res.ok || res.status === 200 || res.status === 201) {
      const d = res.data || {};

      // Store deviceKey — unlocks all monitoring endpoints (x-device-key header)
      const deviceKey = d.deviceKey || d.device_key || d.token_device || '';
      if (deviceKey) {
        localStorage.setItem('vigil_deviceKey', deviceKey);
        console.log('[Vigil Pairing] deviceKey stored:', deviceKey);
      } else {
        console.warn('[Vigil Pairing] No deviceKey in pairing response — monitoring endpoints may return 401');
      }

      // Store childId
      const childId =
        d.childId || d.child_id || d.child?._id || d.child?.id ||
        d.data?.childId || d.data?.child_id || '';
      if (childId) {
        localStorage.setItem('vigil_childId', childId);
        console.log('[Vigil Pairing] childId stored:', childId);
      }

      // Store parentId (may be returned here too)
      const parentId =
        d.parentId || d.parent_id || d.userId ||
        d.data?.parentId || d.data?.userId || '';
      if (parentId) {
        localStorage.setItem('vigil_parentId', parentId);
        console.log('[Vigil Pairing] parentId refreshed:', parentId);
      }

      setStep(3);
      setSuccess('Device paired successfully! Monitoring is now active.');
      refreshChildren?.();
    } else {
      setError(res.data?.message || res.data?.msg || 'Pairing failed. Check OTP and try again.');
    }
  };

  const lookupChildren = async () => {
    if (!lookupEmail) return;
    setLookupLoading(true);
    const res = await childrenApi.getByEmail(lookupEmail);
    setLookupLoading(false);
    if (res.ok) {
      setLookupResults(res.data?.children || res.data?.data || (Array.isArray(res.data) ? res.data : []));
    }
  };

  const STEPS = [
    { n: 1, label: 'Verify Account' },
    { n: 2, label: 'Enter OTP & Details' },
    { n: 3, label: 'Paired!' },
  ];

  return (
    <div>
      <div className="vd-page-head">
        <h2>Device Pairing</h2>
        <p>Link a child's Android device to your parent account using a secure OTP flow</p>
      </div>

      {/* Step indicator */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 28, maxWidth: 500 }}>
        {STEPS.map((s, i) => (
          <React.Fragment key={s.n}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, fontSize: 14,
                background: step > s.n ? 'var(--success)' : step === s.n ? 'var(--primary)' : 'rgba(255,255,255,0.07)',
                color: step >= s.n ? '#fff' : 'var(--text-muted)',
                border: `2px solid ${step >= s.n ? (step > s.n ? 'var(--success)' : 'var(--primary)') : 'var(--border-bright)'}`,
                transition: 'all 0.3s',
              }}>
                {step > s.n ? '✓' : s.n}
              </div>
              <span style={{ fontSize: 11, color: step >= s.n ? 'var(--text-primary)' : 'var(--text-muted)', fontWeight: step === s.n ? 600 : 400, whiteSpace: 'nowrap' }}>
                {s.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div style={{ flex: 1, height: 2, background: step > s.n ? 'var(--success)' : 'rgba(255,255,255,0.07)', margin: '0 6px', marginBottom: 22, transition: 'background 0.3s' }} />
            )}
          </React.Fragment>
        ))}
      </div>

      <div style={{ maxWidth: 520 }}>
        {error && <div className="vd-error" style={{ marginBottom: 16 }}>⚠️ {error}</div>}
        {success && (
          <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 9, padding: '12px 14px', color: '#4ade80', fontSize: 13, marginBottom: 16 }}>
            ✅ {success}
          </div>
        )}

        <div className="vd-card">
          <div className="vd-card-body">
            {step === 1 && (
              <>
                <p style={{ color: 'var(--text-muted)', fontSize: 13.5, marginBottom: 20, lineHeight: 1.6 }}>
                  Verify your parent account by entering your credentials. An OTP will be sent to your email.
                </p>
                <div className="vd-form-group">
                  <label className="vd-form-label">Parent Email</label>
                  <input className="vd-input" type="email" placeholder="your@email.com"
                    value={f('email')} onChange={set('email')} autoFocus />
                </div>
                <div className="vd-form-group">
                  <label className="vd-form-label">Password</label>
                  <input className="vd-input" type="password" placeholder="Your account password"
                    value={f('password')} onChange={set('password')}
                    onKeyDown={e => e.key === 'Enter' && sendOtp()} />
                </div>
                <button className="vd-btn vd-btn-primary" style={{ width: '100%', justifyContent: 'center' }}
                  onClick={sendOtp} disabled={loading}>
                  {loading ? '⏳ Sending...' : '📧 Send OTP to Email'}
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <p style={{ color: 'var(--text-muted)', fontSize: 13.5, marginBottom: 20, lineHeight: 1.6 }}>
                  Enter the OTP from your email, then provide the child's details to complete pairing.
                </p>
                <div className="vd-form-group">
                  <label className="vd-form-label">OTP Code</label>
                  <input className="vd-input" placeholder="Enter 6-digit OTP"
                    value={f('otp')} onChange={set('otp')} maxLength={6} autoFocus />
                </div>
                <div className="vd-form-group">
                  <label className="vd-form-label">Child's Name</label>
                  <input className="vd-input" placeholder="e.g. Arya"
                    value={f('childName')} onChange={set('childName')} />
                </div>
                <div className="vd-form-group">
                  <label className="vd-form-label">Child's Age</label>
                  <input className="vd-input" type="number" min="1" max="18" placeholder="e.g. 12"
                    value={f('childAge')} onChange={set('childAge')} />
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  <button className="vd-btn vd-btn-outline" onClick={() => { setStep(1); setError(''); }}>← Back</button>
                  <button className="vd-btn vd-btn-primary" style={{ flex: 1, justifyContent: 'center' }}
                    onClick={verifyAndPair} disabled={loading}>
                    {loading ? '⏳ Pairing...' : '🔗 Verify & Pair Device'}
                  </button>
                </div>
              </>
            )}

            {step === 3 && (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <div style={{ fontSize: 72, marginBottom: 16 }}>🎉</div>
                <h3 style={{ color: 'var(--text-primary)', fontWeight: 800, fontSize: 20, marginBottom: 8 }}>
                  Device Paired Successfully!
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
                  The child's Android device is now linked. Monitoring is active — you can view data from the dashboard.
                </p>
                <button className="vd-btn vd-btn-outline" style={{ margin: '0 auto' }}
                  onClick={() => { setStep(1); setForm({ email: '', password: '', otp: '', childName: '', childAge: '' }); setError(''); setSuccess(''); }}>
                  🔗 Pair Another Device
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Lookup section */}
        <div className="vd-card" style={{ marginTop: 20 }}>
          <div className="vd-card-header">
            <span className="vd-card-title">🔍 Lookup Children by Email</span>
          </div>
          <div className="vd-card-body">
            <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
              <input className="vd-input" type="email" placeholder="Parent email to look up"
                value={lookupEmail} onChange={e => setLookupEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && lookupChildren()} style={{ flex: 1 }} />
              <button className="vd-btn vd-btn-outline" onClick={lookupChildren} disabled={lookupLoading}>
                {lookupLoading ? '...' : 'Search'}
              </button>
            </div>
            {lookupResults.length > 0 && (
              <div className="vd-table-wrap">
                <table className="vd-table">
                  <thead><tr><th>Name</th><th>Age</th><th>Gender</th><th>Child ID</th></tr></thead>
                  <tbody>
                    {lookupResults.map(c => (
                      <tr key={c._id}>
                        <td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{c.name}</td>
                        <td>{c.age}</td>
                        <td>{c.gender || '—'}</td>
                        <td style={{ fontFamily: 'monospace', fontSize: 11, color: 'var(--text-muted)' }}>{c._id}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
