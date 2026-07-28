import React, { useState, useEffect } from 'react';
import { childrenApi, permissionsApi, callsApi, smsApi, appsApi, parentDataApi } from '../../../utils/apiService';

export default function DashHome({ selectedChildId, parentId, currentChild, user, deviceKey }) {
  const [liveStatus, setLiveStatus] = useState(null);
  const [children, setChildren] = useState([]);
  const [loading, setLoading] = useState(true);
  const [counts, setCounts] = useState({ calls: null, sms: null, apps: null, screenTime: null });
  const [alerts, setAlerts] = useState([]);
  const [dashSummary, setDashSummary] = useState(null);

  const hasPairing = !!(deviceKey || localStorage.getItem('vigil_deviceKey'));

  useEffect(() => { loadData(); }, [selectedChildId, parentId]);

  const loadData = async () => {
    setLoading(true);

    // Always load children list
    const childrenRes = await childrenApi.getAll();
    if (childrenRes.ok) {
      const list = childrenRes.data?.children || childrenRes.data?.data || (Array.isArray(childrenRes.data) ? childrenRes.data : []);
      setChildren(list);
    }

    // Dashboard summary + alerts (no device key required)
    const [summaryRes, alertsRes] = await Promise.all([
      parentDataApi.getDashboardSummary(),
      parentDataApi.getAlerts(10),
    ]);
    if (summaryRes.ok) setDashSummary(summaryRes.data?.data || summaryRes.data);
    if (alertsRes.ok) {
      const al = alertsRes.data?.alerts || alertsRes.data?.data || (Array.isArray(alertsRes.data) ? alertsRes.data : []);
      setAlerts(al);
    }

    if (selectedChildId && parentId) {
      // Fetch live status (no device key required)
      const liveRes = await permissionsApi.getLiveStatus(selectedChildId);
      if (liveRes.ok) setLiveStatus(liveRes.data?.data || liveRes.data);

      // Only fetch monitoring counts if device is paired
      if (hasPairing) {
        const [callRes, smsRes, appsRes, ovRes] = await Promise.all([
          callsApi.getAll(selectedChildId, parentId, 1, 100),
          smsApi.getAll(selectedChildId, parentId, 1, 100),
          appsApi.getAll(selectedChildId, parentId, 1, 100),
          childrenApi.activityOverview(selectedChildId),
        ]);

        // activity-overview nests its counts under `activity` (not top-level).
        const ov = ovRes.ok ? (ovRes.data?.activity || ovRes.data?.data || ovRes.data || {}) : {};
        // getCallLogs returns `callLogs` (capital L) + `total`; getSms returns `sms`/`messages` + `total`.
        const callList = callRes.ok ? (callRes.data?.callLogs || callRes.data?.data || callRes.data?.logs || callRes.data?.calllogs || (Array.isArray(callRes.data) ? callRes.data : [])) : [];
        const smsList  = smsRes.ok  ? (smsRes.data?.data  || smsRes.data?.messages|| smsRes.data?.sms       || (Array.isArray(smsRes.data)  ? smsRes.data  : [])) : [];
        const appsList = appsRes.ok ? (appsRes.data?.data || appsRes.data?.apps   || (Array.isArray(appsRes.data) ? appsRes.data : [])) : [];
        const totalMins = appsList.reduce((s, a) => s + (a.usage_minutes || a.usageMinutes || 0), 0);

        setCounts({
          // Prefer the backend's `total` (counts all matching records, not just the fetched page).
          calls:      ov.totalCallsToday ?? ov.calls_today ?? ov.callCount ?? callRes.data?.total ?? callList.length ?? null,
          sms:        ov.totalSmsToday   ?? ov.sms_today   ?? ov.smsCount  ?? smsRes.data?.total  ?? smsList.length  ?? null,
          apps:       ov.appCount        ?? ov.app_count   ?? appsRes.data?.total ?? appsList.length ?? null,
          screenTime: ov.appUsageMinutes ?? ov.screen_time_minutes ?? (totalMins > 0 ? totalMins : null),
        });
      }
    }

    setLoading(false);
  };

  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
  const isOnline = liveStatus?.isOnline ?? false;
  const battery = liveStatus?.batteryInfo?.level ?? null;

  const fmtTime = (mins) => mins ? `${Math.floor(mins/60)}h ${mins%60}m` : '—';

  const stats = [
    { label: 'Calls Today',  value: counts.calls      ?? '—', emoji: '📞', color: '#4338ca', bg: 'rgba(79,70,229,0.08)',  accent: 'linear-gradient(90deg,#6366f1,#818cf8)' },
    { label: 'SMS Today',    value: counts.sms        ?? '—', emoji: '💬', color: '#0e7490', bg: 'rgba(8,145,178,0.08)', accent: 'linear-gradient(90deg,#0891b2,#22d3ee)' },
    { label: 'Apps',         value: counts.apps       ?? '—', emoji: '📱', color: '#15803d', bg: 'rgba(22,163,74,0.08)', accent: 'linear-gradient(90deg,#16a34a,#4ade80)' },
    { label: 'Screen Time',  value: fmtTime(counts.screenTime), emoji: '⏱️', color: '#b45309', bg: 'rgba(217,119,6,0.08)', accent: 'linear-gradient(90deg,#d97706,#fbbf24)' },
  ];

  return (
    <div>
      {/* Welcome Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #4f46e5 0%, #0891b2 100%)',
        borderRadius: '14px', padding: '22px 24px',
        marginBottom: '20px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px',
        boxShadow: '0 4px 20px rgba(79,70,229,0.25)',
      }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 800, color: '#ffffff' }}>
            {greeting}, {user?.name?.split(' ')[0] || 'Parent'} 👋
          </h2>
          <p style={{ margin: '5px 0 0', color: 'rgba(255,255,255,0.8)', fontSize: '13.5px' }}>
            {currentChild ? `Monitoring ${currentChild.name}'s device activity` : 'Add a child to start monitoring'}
          </p>
        </div>
        {liveStatus && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'rgba(255,255,255,0.2)', borderRadius: 20, padding: '5px 14px',
              fontSize: 12, fontWeight: 600, color: '#ffffff', border: '1px solid rgba(255,255,255,0.3)',
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: isOnline ? '#86efac' : '#fca5a5', flexShrink: 0, display: 'inline-block' }}/>
              {isOnline ? 'Device Online' : 'Device Offline'}
            </span>
            {battery !== null && (
              <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '13px', opacity: 0.9 }}>
                🔋 {battery}%
              </span>
            )}
          </div>
        )}
      </div>

      {loading ? (
        <div className="vd-loading"><div className="vd-spinner"/><span>Loading dashboard data...</span></div>
      ) : (
        <>
          {/* ── Not-Paired Warning Banner ── */}
          {!hasPairing && (
            <div style={{
              background: 'rgba(251,146,60,0.08)', border: '1px solid rgba(251,146,60,0.25)',
              borderRadius: 12, padding: '14px 18px', marginBottom: 18,
              display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
            }}>
              <span style={{ fontSize: 22 }}>📱</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, color: '#fb923c', fontSize: 14, marginBottom: 2 }}>
                  No Device Paired Yet
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: 13 }}>
                  Monitoring data (Calls, SMS, Apps, etc.) is only available after you pair a child's Android device.
                  Go to <strong>Device Pairing</strong> in the sidebar to complete setup.
                </div>
              </div>
            </div>
          )}

          {/* Stats */}
          <div className="vd-stat-grid">
            {stats.map((s, i) => (
              <div key={i} className="vd-stat-card" style={{'--card-accent': s.accent}}>
                <div className="vd-stat-icon" style={{ background: s.bg }}>
                  <span>{s.emoji}</span>
                </div>
                <div className="vd-stat-info">
                  <div className="vd-stat-label">{s.label}</div>
                  <div className="vd-stat-value" style={{ color: s.color }}>{s.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Two columns */}
          <div className="vd-grid-2">
            {/* Children */}
            <div className="vd-card">
              <div className="vd-card-header">
                <span className="vd-card-title">👨‍👩‍👧 Children ({children.length})</span>
              </div>
              <div style={{ padding: '10px' }}>
                {children.length === 0 ? (
                  <div className="vd-empty"><div className="vd-empty-title">No children yet</div><div className="vd-empty-desc">Go to "My Children" to add a profile</div></div>
                ) : children.map(child => (
                  <div key={child._id} style={{
                    display: 'flex', alignItems: 'center', gap: '11px',
                    padding: '10px 10px', borderRadius: '9px', marginBottom: '4px',
                    background: child._id === selectedChildId ? 'rgba(79,70,229,0.07)' : 'transparent',
                    border: `1px solid ${child._id === selectedChildId ? 'rgba(79,70,229,0.18)' : 'transparent'}`,
                  }}>
                    <div style={{ width:36, height:36, borderRadius:'50%', background:'linear-gradient(135deg,#6366f1,#06b6d4)', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, fontSize:14, color:'white', flexShrink:0 }}>
                      {child.name?.charAt(0)?.toUpperCase()}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '13.5px' }}>{child.name}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '12px' }}>Age {child.age} · {child.gender || 'Unknown'}</div>
                    </div>
                    {child._id === selectedChildId && <span className="vd-badge vd-badge-primary">Active</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Device Status */}
            <div className="vd-card">
              <div className="vd-card-header">
                <span className="vd-card-title">📡 Device Status</span>
                <button className="vd-btn vd-btn-outline vd-btn-sm" onClick={loadData}>↻</button>
              </div>
              <div className="vd-card-body">
                {!liveStatus ? (
                  <div className="vd-empty">
                    <div style={{ fontSize:'40px', marginBottom:'12px' }}>📵</div>
                    <div className="vd-empty-title">No device connected</div>
                    <div className="vd-empty-desc">Pair a device to see live status</div>
                  </div>
                ) : (
                  <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
                    <Row label="Connection" value={isOnline?'Online':'Offline'} ok={isOnline}/>
                    {battery !== null && (
                      <div>
                        <div style={{ display:'flex', justifyContent:'space-between', fontSize:'13px', marginBottom:'6px' }}>
                          <span style={{ color: 'var(--text-secondary)' }}>Battery</span>
                          <span style={{ fontWeight: 700, color: battery < 20 ? '#dc2626' : battery < 50 ? '#d97706' : '#16a34a' }}>{battery}%</span>
                        </div>
                        <div className="vd-progress-bar">
                          <div className="vd-progress-fill" style={{ width:`${battery}%`, background: battery<20?'#ef4444':battery<50?'#f59e0b':'#22c55e' }}/>
                        </div>
                      </div>
                    )}
                    {liveStatus?.connectivity && <>
                      <Row label="WiFi" value={liveStatus.connectivity.hasWifi?'Connected':'Off'} ok={liveStatus.connectivity.hasWifi}/>
                      <Row label="Mobile Data" value={liveStatus.connectivity.hasMobile?'Connected':'Off'} ok={liveStatus.connectivity.hasMobile}/>
                    </>}
                    {liveStatus?.liveStatusUpdatedAt && (
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>Last sync: {new Date(liveStatus.liveStatusUpdatedAt).toLocaleString()}</div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Alerts Section */}
          {alerts.length > 0 && (
            <div className="vd-card" style={{ marginTop: 20 }}>
              <div className="vd-card-header">
                <span className="vd-card-title">🔔 Recent Alerts ({alerts.length})</span>
                <button className="vd-btn vd-btn-outline vd-btn-sm" onClick={loadData}>↻</button>
              </div>
              <div style={{ padding: '10px' }}>
                {alerts.slice(0, 5).map((alert, i) => {
                  const typeColors = {
                    sos_panic: { bg: 'rgba(239,68,68,0.08)', border: 'rgba(239,68,68,0.2)', dot: '#ef4444', badge: 'vd-badge-danger' },
                    geofence_violation: { bg: 'rgba(251,146,60,0.08)', border: 'rgba(251,146,60,0.2)', dot: '#fb923c', badge: 'vd-badge-warning' },
                    device_offline: { bg: 'rgba(148,163,184,0.08)', border: 'rgba(148,163,184,0.2)', dot: '#94a3b8', badge: 'vd-badge-primary' },
                    low_battery: { bg: 'rgba(234,179,8,0.08)', border: 'rgba(234,179,8,0.2)', dot: '#eab308', badge: 'vd-badge-warning' },
                  };
                  const c = typeColors[alert.type] || typeColors['device_offline'];
                  return (
                    <div key={alert._id || i} style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      padding: '10px 12px', borderRadius: 9, marginBottom: 6,
                      background: c.bg, border: `1px solid ${c.border}`,
                    }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: c.dot, flexShrink: 0 }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--text-primary)' }}>
                          {alert.message || alert.type || 'Alert'}
                        </div>
                        {alert.childName && (
                          <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Child: {alert.childName}</div>
                        )}
                      </div>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                        {alert.createdAt ? new Date(alert.createdAt).toLocaleString() : ''}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function Row({ label, value, ok }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>{label}</span>
      <span className={`vd-badge ${ok ? 'vd-badge-success' : 'vd-badge-danger'}`}>{value}</span>
    </div>
  );
}
