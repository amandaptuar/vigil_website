import React, { useState } from 'react';
import { authApi } from '../../../utils/apiService';

export default function ProfilePage({ user, onLogout, onRefresh }) {
  const [tab, setTab] = useState('profile');
  const [pwForm, setPwForm] = useState({ newPassword: '', confirmPassword: '' });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const initials = (name) => name ? name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) : 'P';

  const changePassword = async () => {
    setError(''); setSuccess('');
    if (!pwForm.newPassword) return setError('New password is required');
    if (pwForm.newPassword.length < 8) return setError('Password must be at least 8 characters');
    if (pwForm.newPassword !== pwForm.confirmPassword) return setError('Passwords do not match');
    setSaving(true);
    const res = await authApi.changePasswordFirstTime(pwForm.newPassword);
    setSaving(false);
    if (res.ok) { setSuccess('Password changed successfully!'); setPwForm({ newPassword: '', confirmPassword: '' }); }
    else setError(res.data?.message || res.data?.msg || 'Failed to change password');
  };

  const INFO = [
    ['Full Name', user?.name],
    ['Email Address', user?.email],
    ['Username', user?.username],
    ['Phone', user?.phone],
    ['Role', user?.role],
    ['User ID', user?._id || user?.id],
  ].filter(([, v]) => v);

  return (
    <div style={{ maxWidth: 700 }}>
      <div className="vd-page-head">
        <h2>My Profile</h2>
        <p>Manage your account information and security settings</p>
      </div>

      {/* Profile Banner */}
      <div className="vd-card" style={{ marginBottom: 20 }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(99,102,241,0.18) 0%, rgba(6,182,212,0.08) 100%)',
          padding: '28px 24px', display: 'flex', alignItems: 'center', gap: 20,
          borderBottom: '1px solid var(--border)', flexWrap: 'wrap',
        }}>
          <div style={{
            width: 70, height: 70, borderRadius: '50%',
            background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 900, fontSize: 26, color: '#fff', flexShrink: 0,
            boxShadow: '0 4px 20px rgba(99,102,241,0.4)',
          }}>
            {initials(user?.name)}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: 'var(--text-primary)' }}>
              {user?.name || 'Parent'}
            </h3>
            <p style={{ margin: '4px 0 8px', color: 'var(--text-secondary)', fontSize: 14 }}>
              {user?.email || 'Loading...'}
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {user?.role && <span className="vd-badge vd-badge-cyan">{user.role}</span>}
              {user?.username && <span className="vd-badge vd-badge-primary">@{user.username}</span>}
              {user?.createdAt && (
                <span style={{ color: 'var(--text-muted)', fontSize: 12, alignSelf: 'center' }}>
                  Joined {new Date(user.createdAt).toLocaleDateString('en', { month: 'long', year: 'numeric' })}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="vd-tabs">
        <button className={`vd-tab ${tab === 'profile' ? 'active' : ''}`} onClick={() => setTab('profile')}>👤 Account Info</button>
        <button className={`vd-tab ${tab === 'password' ? 'active' : ''}`} onClick={() => setTab('password')}>🔑 Change Password</button>
        <button className={`vd-tab ${tab === 'danger' ? 'active' : ''}`} onClick={() => setTab('danger')}>⚠️ Danger Zone</button>
      </div>

      {tab === 'profile' && (
        <div className="vd-card">
          <div className="vd-card-header">
            <span className="vd-card-title">Account Information</span>
            <button className="vd-btn vd-btn-outline vd-btn-sm" onClick={onRefresh}>↻ Refresh</button>
          </div>
          <div className="vd-card-body">
            {INFO.length === 0 ? (
              <div className="vd-empty">
                <div className="vd-spinner" style={{ margin: '0 auto 12px' }} />
                <div className="vd-empty-title">Loading profile...</div>
              </div>
            ) : (
              INFO.map(([label, value]) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px 0', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ color: 'var(--text-secondary)', fontSize: 13.5 }}>{label}</span>
                  <span style={{
                    color: 'var(--text-primary)', fontWeight: 600,
                    fontFamily: label === 'User ID' ? 'monospace' : 'inherit',
                    fontSize: label === 'User ID' ? 11 : 13.5,
                    maxWidth: 280, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  }}>
                    {value}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {tab === 'password' && (
        <div className="vd-card">
          <div className="vd-card-header"><span className="vd-card-title">Change Password</span></div>
          <div className="vd-card-body">
            {error && <div className="vd-error">⚠️ {error}</div>}
            {success && (
              <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 9, padding: '12px 14px', color: '#4ade80', fontSize: 13, marginBottom: 16 }}>
                ✅ {success}
              </div>
            )}
            <p style={{ color: 'var(--text-muted)', fontSize: 13.5, marginBottom: 20, lineHeight: 1.6 }}>
              If you registered via the website, you were given a temporary password. Use this form to set your own permanent password.
            </p>
            <div className="vd-form-group">
              <label className="vd-form-label">New Password</label>
              <input className="vd-input" type="password" placeholder="Minimum 8 characters"
                value={pwForm.newPassword} onChange={e => setPwForm(f => ({ ...f, newPassword: e.target.value }))} />
            </div>
            <div className="vd-form-group">
              <label className="vd-form-label">Confirm Password</label>
              <input className="vd-input" type="password" placeholder="Repeat new password"
                value={pwForm.confirmPassword} onChange={e => setPwForm(f => ({ ...f, confirmPassword: e.target.value }))} />
            </div>
            <button className="vd-btn vd-btn-primary" onClick={changePassword} disabled={saving}>
              {saving ? 'Saving...' : '🔑 Change Password'}
            </button>
          </div>
        </div>
      )}

      {tab === 'danger' && (
        <div className="vd-card">
          <div className="vd-card-header">
            <span className="vd-card-title" style={{ color: '#f87171' }}>⚠️ Danger Zone</span>
          </div>
          <div className="vd-card-body">
            <div style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: 12, padding: '20px 22px' }}>
              <h4 style={{ margin: '0 0 8px', color: '#fca5a5', fontSize: 15, fontWeight: 700 }}>Sign Out of Dashboard</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: 13.5, margin: '0 0 18px', lineHeight: 1.6 }}>
                You'll be logged out and your session cleared. You'll need to log in again to access the dashboard.
              </p>
              <button className="vd-btn vd-btn-danger" onClick={onLogout}>🚪 Sign Out</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
