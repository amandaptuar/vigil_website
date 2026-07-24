import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ParentDashboard.css';
import { authApi, childrenApi } from '../../utils/apiService';

import DashHome from './pages/DashHome';
import ChildrenPage from './pages/ChildrenPage';
import DevicePairing from './pages/DevicePairing';
import CallLogs from './pages/CallLogs';
import SMSPage from './pages/SMSPage';
import GalleryPage from './pages/GalleryPage';
import LocationPage from './pages/LocationPage';
import GeofencePage from './pages/GeofencePage';
import ScreenTimePage from './pages/ScreenTimePage';
import ContactsPage from './pages/ContactsPage';
import CalendarPage from './pages/CalendarPage';
import AIAnalysisPage from './pages/AIAnalysisPage';
import PermissionsPage from './pages/PermissionsPage';
import ProfilePage from './pages/ProfilePage';

const NAV = [
  { section: 'Overview', items: [
    { id: 'home',        label: 'Dashboard',     emoji: '🏠' },
    { id: 'profile',     label: 'My Profile',    emoji: '👤' },
  ]},
  { section: 'Child Management', items: [
    { id: 'children',    label: 'My Children',   emoji: '👧' },
    { id: 'pairing',     label: 'Device Pairing',emoji: '🔗' },
    { id: 'permissions', label: 'Permissions',   emoji: '🛡️' },
  ]},
  { section: 'Monitoring', items: [
    { id: 'calls',       label: 'Call Logs',     emoji: '📞' },
    { id: 'sms',         label: 'SMS Monitor',   emoji: '💬' },
    { id: 'gallery',     label: 'Gallery',       emoji: '🖼️' },
    { id: 'contacts',    label: 'Contacts',      emoji: '📒' },
    { id: 'calendar',    label: 'Calendar',      emoji: '📅' },
    { id: 'screentime',  label: 'Screen Time',   emoji: '⏱️' },
  ]},
  { section: 'Safety', items: [
    { id: 'location',    label: 'Live Location', emoji: '📍' },
    { id: 'geofence',    label: 'Safe Zones',    emoji: '📡' },
  ]},
  { section: 'Intelligence', items: [
    { id: 'ai',          label: 'AI Analysis',   emoji: '🧠' },
  ]},
];

const PAGE_TITLES = {
  home: 'Dashboard Overview', profile: 'My Profile',
  children: 'My Children', pairing: 'Device Pairing', permissions: 'Permissions',
  calls: 'Call Logs', sms: 'SMS Monitor', gallery: 'Gallery & Files',
  contacts: 'Contacts', calendar: 'Calendar Events', screentime: 'Screen Time',
  location: 'Live Location', geofence: 'Safe Zones', ai: 'AI Behaviour Analysis',
};

export default function ParentDashboard() {
  const navigate   = useNavigate();
  const [activePage, setActivePage]       = useState('home');
  const [sidebarOpen, setSidebarOpen]     = useState(false);
  const [isMobile, setIsMobile]           = useState(window.innerWidth < 900);
  const [children, setChildren]           = useState([]);
  const [selectedChildId, setSelectedChildId] = useState(() => localStorage.getItem('vigil_childId') || '');
  const [user, setUser]                   = useState(null);

  /* ── auth guard + resize ── */
  useEffect(() => {
    const token = localStorage.getItem('vigil_token');
    if (!token) { navigate('/login'); return; }
    loadProfile();
    loadChildren();
    const onResize = () => {
      setIsMobile(window.innerWidth < 900);
      if (window.innerWidth >= 900) setSidebarOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [navigate]);

  const loadProfile = async () => {
    const res = await authApi.getMe();
    if (res.ok) setUser(res.data?.data || res.data?.user || res.data);
  };

  const loadChildren = async () => {
    const res = await childrenApi.getAll();
    if (res.ok) {
      const list = res.data?.children || res.data?.data || (Array.isArray(res.data) ? res.data : []);
      setChildren(list);
      if (list.length > 0) {
        const stored = localStorage.getItem('vigil_childId');
        // Validate stored childId still exists in the fresh list
        const stillValid = stored && list.some(c => c._id === stored);
        if (!stillValid) {
          // Pick first child and persist
          localStorage.setItem('vigil_childId', list[0]._id);
          setSelectedChildId(list[0]._id);
        } else {
          setSelectedChildId(stored);
        }
      }
    }
  };

  const handleChildChange = (e) => {
    const id = e.target.value;
    localStorage.setItem('vigil_childId', id);
    setSelectedChildId(id);
  };

  const handleLogout = async () => {
    await authApi.logout().catch(() => {});
    ['vigil_token','vigil_parentId','vigil_childId','vigil_refreshToken','vigil_user','vigil_deviceKey']
      .forEach(k => localStorage.removeItem(k));
    navigate('/login');
  };

  const goTo = (id) => {
    setActivePage(id);
    if (isMobile) setSidebarOpen(false);
    window.scrollTo(0, 0);
  };

  const initials = (name) => name ? name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) : 'P';
  const currentChild = children.find(c => c._id === selectedChildId);
  const deviceKey = localStorage.getItem('vigil_deviceKey') || '';
  const sharedProps  = {
    selectedChildId,
    parentId: localStorage.getItem('vigil_parentId'),
    currentChild,
    deviceKey,
    refreshChildren: loadChildren,
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':        return <DashHome {...sharedProps} user={user} />;
      case 'profile':     return <ProfilePage user={user} onLogout={handleLogout} onRefresh={loadProfile} />;
      case 'children':    return <ChildrenPage {...sharedProps} />;
      case 'pairing':     return <DevicePairing {...sharedProps} />;
      case 'permissions': return <PermissionsPage {...sharedProps} />;
      case 'calls':       return <CallLogs {...sharedProps} />;
      case 'sms':         return <SMSPage {...sharedProps} />;
      case 'gallery':     return <GalleryPage {...sharedProps} />;
      case 'contacts':    return <ContactsPage {...sharedProps} />;
      case 'calendar':    return <CalendarPage {...sharedProps} />;
      case 'screentime':  return <ScreenTimePage {...sharedProps} />;
      case 'location':    return <LocationPage {...sharedProps} />;
      case 'geofence':    return <GeofencePage {...sharedProps} />;
      case 'ai':          return <AIAnalysisPage {...sharedProps} />;
      default:            return <DashHome {...sharedProps} user={user} />;
    }
  };

  return (
    <div className="vd-wrapper">
      {/* Vigil watermark */}
      <div className="vd-watermark">
        <img src="/myimg/image.png" alt="Vigil watermark" draggable={false} />
      </div>

      {/* Mobile overlay */}
      {isMobile && (
        <div
          className={`vd-overlay ${sidebarOpen ? 'show' : ''}`}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── SIDEBAR ── */}
      <nav className={`vd-sidebar ${isMobile ? (sidebarOpen ? 'open' : '') : ''}`}>

        {/* Logo — real Vigil logo from /myimg/image.png */}
        <div className="vd-sidebar-logo">
          <img src="/myimg/image.png" alt="Vigil" />
        </div>

        {/* Child selector */}
        <div className="vd-child-selector">
          <div className="vd-child-label">Monitoring Child</div>
          <select className="vd-child-select" value={selectedChildId} onChange={handleChildChange}>
            {children.length === 0
              ? <option value="">No children yet</option>
              : children.map(c => (
                  <option key={c._id} value={c._id}>
                    {c.name} · Age {c.age}
                  </option>
                ))
            }
          </select>
        </div>

        {/* Nav */}
        <div className="vd-nav">
          {NAV.map(sec => (
            <div className="vd-nav-section" key={sec.section}>
              <span className="vd-nav-title">{sec.section}</span>
              {sec.items.map(item => (
                <div
                  key={item.id}
                  className={`vd-nav-item ${activePage === item.id ? 'active' : ''}`}
                  onClick={() => goTo(item.id)}
                >
                  <span style={{ fontSize: 14, lineHeight: 1, flexShrink: 0 }}>{item.emoji}</span>
                  {item.label}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* User footer */}
        <div className="vd-sidebar-footer">
          <div className="vd-user-card" onClick={() => goTo('profile')}>
            <div className="vd-avatar">{initials(user?.name)}</div>
            <div className="vd-user-info">
              <div className="vd-user-name">{user?.name || 'Parent'}</div>
              <div className="vd-user-email">{user?.email || 'Loading...'}</div>
            </div>
          </div>
        </div>
      </nav>

      {/* ── MAIN ── */}
      <div
        className="vd-main"
        style={!isMobile ? { marginLeft: 'var(--sidebar-width)' } : {}}
      >
        {/* Topbar */}
        <header className="vd-topbar">
          <div className="vd-topbar-left">
            <button
              className="vd-hamburger"
              onClick={() => setSidebarOpen(s => !s)}
              aria-label="Toggle sidebar"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
            <span className="vd-page-title">{PAGE_TITLES[activePage]}</span>
          </div>

          <div className="vd-topbar-right">
            {currentChild && (
              <div className="vd-online-badge">
                <span className="vd-dot" />
                {currentChild.name}
              </div>
            )}
            {/* Device pairing status badge */}
            {deviceKey ? (
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)',
                borderRadius: 20, padding: '3px 10px', fontSize: 11, fontWeight: 600, color: '#4ade80',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
                Device Linked
              </div>
            ) : (
              <div
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  background: 'rgba(251,146,60,0.12)', border: '1px solid rgba(251,146,60,0.25)',
                  borderRadius: 20, padding: '3px 10px', fontSize: 11, fontWeight: 600, color: '#fb923c',
                  cursor: 'pointer',
                }}
                title="Go to Device Pairing to link a child device"
                onClick={() => goTo('pairing')}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fb923c', display: 'inline-block' }} />
                Not Paired
              </div>
            )}
            <button
              className="vd-btn-icon"
              title="Sign out"
              onClick={handleLogout}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                <polyline points="16 17 21 12 16 7"/>
                <line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="vd-content">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
