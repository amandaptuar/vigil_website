import React, { useState, useEffect } from 'react';
import { locationApi } from '../../../utils/apiService';
import { getIds } from '../../../utils/dashHelpers';

export default function LocationPage({ selectedChildId, parentId: propParentId }) {
  const { childId, parentId } = getIds(selectedChildId, propParentId);
  const [tab, setTab] = useState('live');
  const [liveLocation, setLiveLocation] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hours, setHours] = useState(24);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (childId) fetchData();
  }, [childId, tab, hours, page]);

  const fetchData = async () => {
    setLoading(true); setError('');
    if (tab === 'live') {
      const res = await locationApi.getLive(childId);
      if (res.ok) setLiveLocation(res.data?.data || res.data?.location || res.data);
      else setError('Live location unavailable. Device must be paired and location permission granted.');
    } else if (tab === 'history') {
      const res = await locationApi.getHistoryByHours(childId, hours);
      if (res.ok) setHistory(res.data?.data || res.data?.history || res.data?.locations || (Array.isArray(res.data) ? res.data : []));
      else setError('Location history unavailable.');
    } else {
      const res = await locationApi.getAllRecords(childId, parentId, page);
      if (res.ok) setHistory(res.data?.data || res.data?.locations || (Array.isArray(res.data) ? res.data : []));
      else setError('Could not load location records.');
    }
    setLoading(false);
  };

  const coords = (loc) => {
    if (!loc) return '—';
    const lat = loc.lat ?? loc.latitude ?? loc.coordinates?.[1];
    const lng = loc.lng ?? loc.longitude ?? loc.coordinates?.[0];
    if (lat !== undefined && lng !== undefined)
      return `${Number(lat).toFixed(6)}, ${Number(lng).toFixed(6)}`;
    return JSON.stringify(loc);
  };

  const mapsUrl = (loc) => {
    const lat = loc?.lat ?? loc?.latitude ?? loc?.coordinates?.[1];
    const lng = loc?.lng ?? loc?.longitude ?? loc?.coordinates?.[0];
    return `https://maps.google.com/?q=${lat || 0},${lng || 0}`;
  };

  return (
    <div>
      <div className="vd-page-head">
        <h2>Live Location</h2>
        <p>Track the child's real-time GPS position and movement history</p>
      </div>

      <div className="vd-tabs">
        <button className={`vd-tab ${tab === 'live' ? 'active' : ''}`} onClick={() => setTab('live')}>📍 Live Location</button>
        <button className={`vd-tab ${tab === 'history' ? 'active' : ''}`} onClick={() => setTab('history')}>🕐 Recent History</button>
        <button className={`vd-tab ${tab === 'all' ? 'active' : ''}`} onClick={() => setTab('all')}>📋 All Records</button>
      </div>

      {tab === 'history' && (
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
          <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>Show last:</span>
          {[3, 6, 12, 24, 48].map(h => (
            <button key={h} className={`vd-tab ${hours === h ? 'active' : ''}`}
              style={{ padding: '5px 12px' }} onClick={() => setHours(h)}>
              {h}h
            </button>
          ))}
        </div>
      )}

      {!selectedChildId ? (
        <div className="vd-card">
          <div className="vd-empty">
            <div style={{ fontSize: 40, marginBottom: 12 }}>👧</div>
            <div className="vd-empty-title">No child selected</div>
            <div className="vd-empty-desc">Select a child from the sidebar to track location</div>
          </div>
        </div>
      ) : error ? (
        <div className="vd-error">⚠️ {error}</div>
      ) : loading ? (
        <div className="vd-loading"><div className="vd-spinner" /><span>Fetching location data...</span></div>
      ) : tab === 'live' ? (
        <div className="vd-card">
          <div className="vd-card-header">
            <span className="vd-card-title">📍 Current Location</span>
            <button className="vd-btn vd-btn-outline vd-btn-sm" onClick={fetchData}>↻ Refresh</button>
          </div>
          <div className="vd-card-body">
            {!liveLocation ? (
              <div className="vd-empty">
                <div style={{ fontSize: 40, marginBottom: 12 }}>🗺️</div>
                <div className="vd-empty-title">No location data</div>
                <div className="vd-empty-desc">Device must be active with location permission granted</div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{
                  background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.15)',
                  borderRadius: 12, padding: '20px 22px',
                  display: 'flex', alignItems: 'center', gap: 18,
                }}>
                  <div style={{ fontSize: 44 }}>📍</div>
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'monospace' }}>
                      {coords(liveLocation)}
                    </div>
                    {liveLocation.address && (
                      <div style={{ color: 'var(--text-secondary)', fontSize: 13, marginTop: 5 }}>
                        📌 {liveLocation.address}
                      </div>
                    )}
                    {(liveLocation.updatedAt || liveLocation.timestamp) && (
                      <div style={{ color: 'var(--text-muted)', fontSize: 11, marginTop: 6 }}>
                        Last updated: {new Date(liveLocation.updatedAt || liveLocation.timestamp).toLocaleString()}
                      </div>
                    )}
                  </div>
                </div>
                <a href={mapsUrl(liveLocation)} target="_blank" rel="noopener noreferrer"
                  className="vd-btn vd-btn-primary" style={{ width: 'fit-content', textDecoration: 'none' }}>
                  🗺️ Open in Google Maps
                </a>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="vd-card">
          <div className="vd-card-header">
            <span className="vd-card-title">
              Location Records <span className="vd-badge vd-badge-primary">{history.length}</span>
            </span>
            <button className="vd-btn vd-btn-outline vd-btn-sm" onClick={fetchData}>↻ Refresh</button>
          </div>
          {history.length === 0 ? (
            <div className="vd-empty">
              <div style={{ fontSize: 40, marginBottom: 12 }}>🗺️</div>
              <div className="vd-empty-title">No location records</div>
              <div className="vd-empty-desc">Location history will appear once the device is active</div>
            </div>
          ) : (
            <>
              <div className="vd-table-wrap">
                <table className="vd-table">
                  <thead>
                    <tr><th>#</th><th>Coordinates</th><th>Address</th><th>Time</th><th>Map</th></tr>
                  </thead>
                  <tbody>
                    {history.map((loc, i) => (
                      <tr key={loc._id || i}>
                        <td style={{ color: 'var(--text-muted)', fontSize: 12 }}>{(page - 1) * 20 + i + 1}</td>
                        <td style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--accent)' }}>{coords(loc)}</td>
                        <td style={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {loc.address || '—'}
                        </td>
                        <td style={{ fontSize: 12, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                          {loc.timestamp || loc.createdAt ? new Date(loc.timestamp || loc.createdAt).toLocaleString() : '—'}
                        </td>
                        <td>
                          <a href={mapsUrl(loc)} target="_blank" rel="noopener noreferrer"
                            className="vd-btn vd-btn-outline vd-btn-sm" style={{ textDecoration: 'none' }}>
                            🗺️
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {tab === 'all' && (
                <div className="vd-pagination">
                  <button className="vd-page-btn" disabled={page === 1} onClick={() => setPage(p => p - 1)}>‹ Prev</button>
                  <span style={{ color: 'var(--text-muted)', fontSize: 13, padding: '0 8px' }}>Page {page}</span>
                  <button className="vd-page-btn" disabled={history.length < 20} onClick={() => setPage(p => p + 1)}>Next ›</button>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
