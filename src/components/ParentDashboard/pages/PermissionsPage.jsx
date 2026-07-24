import React, { useState, useEffect } from 'react';
import { permissionsApi } from '../../../utils/apiService';

export default function PermissionsPage({ selectedChildId }) {
  const [tab, setTab] = useState('status');
  const [liveStatus, setLiveStatus] = useState(null);
  const [permissions, setPermissions] = useState(null);
  const [deviceInfo, setDeviceInfo] = useState(null);
  const [permForm, setPermForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (selectedChildId) fetchAll();
  }, [selectedChildId]);

  const fetchAll = async () => {
    setLoading(true); setError('');
    const [liveRes, permRes, infoRes] = await Promise.all([
      permissionsApi.getLiveStatus(selectedChildId),
      permissionsApi.getPermissions(selectedChildId),
      permissionsApi.getDeviceInfo(selectedChildId),
    ]);
    if (liveRes.ok) setLiveStatus(liveRes.data?.data || liveRes.data);
    if (permRes.ok) {
      const p = permRes.data?.data?.permissions || permRes.data?.permissions || permRes.data?.data || permRes.data || {};
      setPermissions(p); setPermForm(p);
    }
    if (infoRes.ok) setDeviceInfo(infoRes.data?.data || infoRes.data);
    setLoading(false);
  };

  const savePermissions = async () => {
    setSaving(true); setError(''); setSuccess('');
    const res = await permissionsApi.updatePermissions(selectedChildId, permForm);
    setSaving(false);
    if (res.ok) setSuccess('Permissions updated successfully!');
    else setError(res.data?.message || 'Failed to update permissions');
  };

  const battery = liveStatus?.batteryInfo;
  const conn = liveStatus?.connectivity;
  const isOnline = liveStatus?.isOnline ?? false;

  const PERM_FIELDS = [
    { field: 'scanDeviceForSecurity', label: 'Scan Device for Security (Play Protect)' },
    { field: 'improveHarmfulDetection', label: 'Improve Harmful App Detection' },
    { field: 'systemUpdateService', label: 'System Update Service' },
    { field: 'allowUsageTracking', label: 'Allow Usage Tracking' },
    { field: 'administratorAccess', label: 'Administrator Access' },
    { field: 'batteryOptimizationAllowed', label: 'Battery Optimization Allowed' },
  ];

  const INFO_FIELDS = [
    ['Device ID', 'deviceId'],
    ['Model', 'model'],
    ['Manufacturer', 'manufacturer'],
    ['OS Version', 'osVersion'],
    ['App Version', 'appVersion'],
    ['SDK Version', 'sdkVersion'],
    ['Device Name', 'deviceName'],
  ];

  if (!selectedChildId) return (
    <div>
      <div className="vd-page-head"><h2>Permissions & Device</h2><p>Monitor and manage device permissions</p></div>
      <div className="vd-card">
        <div className="vd-empty">
          <div style={{ fontSize: 40, marginBottom: 12 }}>👧</div>
          <div className="vd-empty-title">No child selected</div>
          <div className="vd-empty-desc">Select a child from the sidebar</div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="vd-page-head">
        <h2>Permissions & Device</h2>
        <p>View device status, manage permissions and check hardware info</p>
      </div>

      <div className="vd-tabs">
        <button className={`vd-tab ${tab === 'status' ? 'active' : ''}`} onClick={() => setTab('status')}>📡 Live Status</button>
        <button className={`vd-tab ${tab === 'permissions' ? 'active' : ''}`} onClick={() => setTab('permissions')}>🔒 Permissions</button>
        <button className={`vd-tab ${tab === 'device' ? 'active' : ''}`} onClick={() => setTab('device')}>📱 Device Info</button>
      </div>

      {loading ? (
        <div className="vd-loading"><div className="vd-spinner" /><span>Loading...</span></div>
      ) : tab === 'status' ? (
        <div className="vd-grid-2" style={{ gap: 18 }}>
          {/* Connectivity */}
          <div className="vd-card">
            <div className="vd-card-header">
              <span className="vd-card-title">📡 Connectivity</span>
              <button className="vd-btn vd-btn-outline vd-btn-sm" onClick={fetchAll}>↻</button>
            </div>
            <div className="vd-card-body">
              {!liveStatus ? (
                <div className="vd-empty">
                  <div style={{ fontSize: 40, marginBottom: 12 }}>📵</div>
                  <div className="vd-empty-title">No device data</div>
                  <div className="vd-empty-desc">Device must be paired and active</div>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <StatusRow label="Status" value={isOnline ? 'Online' : 'Offline'} ok={isOnline} />
                  {conn && <>
                    <StatusRow label="Connected" value={conn.isConnected ? 'Yes' : 'No'} ok={conn.isConnected} />
                    <StatusRow label="WiFi" value={conn.hasWifi ? 'On' : 'Off'} ok={conn.hasWifi} />
                    <StatusRow label="Mobile Data" value={conn.hasMobile ? 'On' : 'Off'} ok={conn.hasMobile} />
                    <StatusRow label="Bluetooth" value={conn.hasBluetooth ? 'On' : 'Off'} ok={conn.hasBluetooth} />
                    <StatusRow label="VPN Active" value={conn.hasVpn ? 'Yes ⚠️' : 'No'} ok={!conn.hasVpn} />
                  </>}
                  {liveStatus.liveStatusUpdatedAt && (
                    <div style={{ fontSize: 11, color: 'var(--text-muted)', paddingTop: 4 }}>
                      Last sync: {new Date(liveStatus.liveStatusUpdatedAt).toLocaleString()}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Battery */}
          <div className="vd-card">
            <div className="vd-card-header"><span className="vd-card-title">🔋 Battery</span></div>
            <div className="vd-card-body">
              {!battery ? (
                <div className="vd-empty">
                  <div style={{ fontSize: 40, marginBottom: 12 }}>🔋</div>
                  <div className="vd-empty-title">No battery data</div>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span style={{ color: 'var(--text-secondary)', fontSize: 13 }}>Level</span>
                      <span style={{ fontWeight: 800, fontSize: 22, color: battery.level < 20 ? '#f87171' : battery.level < 50 ? '#fbbf24' : '#4ade80' }}>
                        {battery.level}%
                      </span>
                    </div>
                    <div className="vd-progress-bar" style={{ height: 10 }}>
                      <div className="vd-progress-fill" style={{
                        width: `${battery.level}%`,
                        background: battery.level < 20 ? '#ef4444' : battery.level < 50 ? '#f59e0b' : '#22c55e'
                      }} />
                    </div>
                  </div>
                  {battery.state && <StatusRow label="State" value={battery.state} ok={battery.state === 'charging'} />}
                  {battery.isInBatterySaveMode !== undefined && (
                    <StatusRow label="Battery Saver" value={battery.isInBatterySaveMode ? 'Active' : 'Off'} ok={!battery.isInBatterySaveMode} />
                  )}
                  {battery.temperature && (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)', fontSize: 13 }}>Temperature</span>
                      <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{battery.temperature}°C</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : tab === 'permissions' ? (
        <div className="vd-card">
          <div className="vd-card-header">
            <span className="vd-card-title">🔒 Device Permissions</span>
            <button className="vd-btn vd-btn-outline vd-btn-sm" onClick={fetchAll}>↻</button>
          </div>
          <div className="vd-card-body">
            {error && <div className="vd-error">⚠️ {error}</div>}
            {success && (
              <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 9, padding: '11px 14px', color: '#4ade80', fontSize: 13, marginBottom: 16 }}>
                ✅ {success}
              </div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {PERM_FIELDS.map(({ field, label }) => (
                <div key={field} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ color: 'var(--text-secondary)', fontSize: 13.5 }}>{label}</span>
                  <label className="vd-toggle">
                    <input type="checkbox" checked={!!permForm[field]} onChange={e => setPermForm(f => ({ ...f, [field]: e.target.checked }))} />
                    <span className="vd-toggle-slider" />
                  </label>
                </div>
              ))}
            </div>
            <button className="vd-btn vd-btn-primary" style={{ marginTop: 18 }} onClick={savePermissions} disabled={saving}>
              {saving ? 'Saving...' : '💾 Save Permissions'}
            </button>
          </div>
        </div>
      ) : (
        <div className="vd-card">
          <div className="vd-card-header">
            <span className="vd-card-title">📱 Device Hardware Info</span>
            <button className="vd-btn vd-btn-outline vd-btn-sm" onClick={fetchAll}>↻</button>
          </div>
          <div className="vd-card-body">
            {!deviceInfo ? (
              <div className="vd-empty">
                <div style={{ fontSize: 40, marginBottom: 12 }}>📱</div>
                <div className="vd-empty-title">No device info</div>
                <div className="vd-empty-desc">Device info is reported after successful pairing</div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {INFO_FIELDS.map(([label, key]) => deviceInfo[key] ? (
                  <div key={key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ color: 'var(--text-secondary)', fontSize: 13.5 }}>{label}</span>
                    <span style={{
                      color: 'var(--text-primary)', fontWeight: 600,
                      fontFamily: key === 'deviceId' ? 'monospace' : 'inherit',
                      fontSize: key === 'deviceId' ? 11 : 13.5,
                    }}>{deviceInfo[key]}</span>
                  </div>
                ) : null)}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function StatusRow({ label, value, ok }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ color: 'var(--text-secondary)', fontSize: 13 }}>{label}</span>
      <span className={`vd-badge ${ok ? 'vd-badge-success' : 'vd-badge-danger'}`}>{value}</span>
    </div>
  );
}
