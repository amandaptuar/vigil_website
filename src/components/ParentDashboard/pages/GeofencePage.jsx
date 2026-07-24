import React, { useState, useEffect } from 'react';
import { geofenceApi } from '../../../utils/apiService';

export default function GeofencePage({ selectedChildId, parentId }) {
  const [zones, setZones] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ label: '', centerLat: '', centerLng: '', radiusMeters: '200' });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (parentId) loadZones();
  }, [parentId, selectedChildId]);

  const loadZones = async () => {
    setLoading(true);
    const res = selectedChildId
      ? await geofenceApi.getForChild(parentId, selectedChildId)
      : await geofenceApi.getForParent(parentId);
    setLoading(false);
    if (res.ok) {
      setZones(res.data?.data || res.data?.geozones || res.data?.zones || (Array.isArray(res.data) ? res.data : []));
    }
  };

  const handleCreate = async () => {
    if (!form.label || !form.centerLat || !form.centerLng) { setError('Label, latitude and longitude are required'); return; }
    setSaving(true); setError('');
    const res = await geofenceApi.create(
      form.label, parseFloat(form.centerLat), parseFloat(form.centerLng),
      parseInt(form.radiusMeters), selectedChildId, parentId
    );
    setSaving(false);
    if (res.ok || res.status === 201) {
      setShowModal(false);
      setForm({ label: '', centerLat: '', centerLng: '', radiusMeters: '200' });
      loadZones();
    } else {
      setError(res.data?.message || res.data?.msg || 'Failed to create zone. Check your inputs.');
    }
  };

  const handleToggle = async (zone) => {
    const res = await geofenceApi.toggle(zone._id);
    if (res.ok) loadZones();
    else alert('Failed to toggle zone');
  };

  const handleDelete = async (zone) => {
    if (!window.confirm(`Delete zone "${zone.label}"? This cannot be undone.`)) return;
    const res = await geofenceApi.delete(zone._id);
    if (res.ok) loadZones();
    else alert('Failed to delete zone');
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
        <div className="vd-page-head" style={{ marginBottom: 0 }}>
          <h2>Safe Zones</h2>
          <p>Create geo-fenced safe zones and get notified when the child leaves or enters</p>
        </div>
        <button className="vd-btn vd-btn-primary" onClick={() => { setError(''); setShowModal(true); }}>
          + Create Zone
        </button>
      </div>

      {!parentId ? (
        <div className="vd-card"><div className="vd-empty"><div className="vd-empty-title">Not logged in properly</div></div></div>
      ) : loading ? (
        <div className="vd-loading"><div className="vd-spinner" /><span>Loading zones...</span></div>
      ) : zones.length === 0 ? (
        <div className="vd-card">
          <div className="vd-empty" style={{ padding: '60px 20px' }}>
            <div style={{ fontSize: 56, marginBottom: 16 }}>🗺️</div>
            <div className="vd-empty-title">No safe zones created</div>
            <div className="vd-empty-desc" style={{ marginBottom: 20 }}>
              Create zones around home, school or other locations to monitor when your child arrives or leaves
            </div>
            <button className="vd-btn vd-btn-primary" onClick={() => setShowModal(true)}>Create First Zone</button>
          </div>
        </div>
      ) : (
        <div className="vd-grid-3">
          {zones.map(zone => (
            <div key={zone._id} className="vd-card">
              <div style={{
                padding: '18px 18px 14px',
                background: zone.active !== false
                  ? 'linear-gradient(135deg, rgba(34,197,94,0.06), transparent)'
                  : 'linear-gradient(135deg, rgba(239,68,68,0.04), transparent)',
                borderBottom: '1px solid var(--border)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                  <div style={{ fontSize: 28 }}>📍</div>
                  <label className="vd-toggle">
                    <input type="checkbox" checked={zone.active !== false} onChange={() => handleToggle(zone)} />
                    <span className="vd-toggle-slider" />
                  </label>
                </div>
                <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-primary)', marginBottom: 4 }}>
                  {zone.label}
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                  Radius: {zone.radiusMeters || zone.radius || '—'}m
                </div>
                <div style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--text-muted)', marginTop: 4 }}>
                  {zone.centerLat || zone.center?.lat}, {zone.centerLng || zone.center?.lng}
                </div>
              </div>
              <div style={{ padding: '10px 12px', display: 'flex', gap: 8 }}>
                <a
                  href={`https://maps.google.com/?q=${zone.centerLat || zone.center?.lat},${zone.centerLng || zone.center?.lng}`}
                  target="_blank" rel="noopener noreferrer"
                  className="vd-btn vd-btn-outline vd-btn-sm" style={{ flex: 1, textDecoration: 'none', justifyContent: 'center' }}>
                  🗺️ Map
                </a>
                <button className="vd-btn vd-btn-danger vd-btn-sm" onClick={() => handleDelete(zone)}>🗑️</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <div className="vd-modal-overlay">
          <div className="vd-modal">
            <div className="vd-modal-header">
              <span className="vd-modal-title">📍 Create Safe Zone</span>
              <button className="vd-modal-close" onClick={() => setShowModal(false)}>✕</button>
            </div>
            <div className="vd-modal-body">
              {error && <div className="vd-error">⚠️ {error}</div>}
              <div className="vd-form-group">
                <label className="vd-form-label">Zone Label</label>
                <input className="vd-input" placeholder="e.g. Home, School, Grandma's" value={form.label} onChange={e => setForm(f => ({ ...f, label: e.target.value }))} />
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <div className="vd-form-group" style={{ flex: 1 }}>
                  <label className="vd-form-label">Latitude</label>
                  <input className="vd-input" type="number" step="any" placeholder="31.5204" value={form.centerLat} onChange={e => setForm(f => ({ ...f, centerLat: e.target.value }))} />
                </div>
                <div className="vd-form-group" style={{ flex: 1 }}>
                  <label className="vd-form-label">Longitude</label>
                  <input className="vd-input" type="number" step="any" placeholder="74.3587" value={form.centerLng} onChange={e => setForm(f => ({ ...f, centerLng: e.target.value }))} />
                </div>
              </div>
              <div className="vd-form-group">
                <label className="vd-form-label">Radius (meters)</label>
                <input className="vd-input" type="number" min="50" max="10000" value={form.radiusMeters} onChange={e => setForm(f => ({ ...f, radiusMeters: e.target.value }))} />
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: -8 }}>
                Tip: Open Google Maps, right-click your location to copy coordinates.
              </div>
            </div>
            <div className="vd-modal-footer">
              <button className="vd-btn vd-btn-outline" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="vd-btn vd-btn-primary" onClick={handleCreate} disabled={saving}>
                {saving ? 'Creating...' : '📍 Create Zone'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
