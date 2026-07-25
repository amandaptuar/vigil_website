import React, { useState, useEffect } from 'react';
import { callsApi } from '../../../utils/apiService';
import { getIds } from '../../../utils/dashHelpers';

const TABS = [
  { id: 'all',      label: '📞 All Calls',  type: null },
  { id: 'incoming', label: '📲 Incoming',   type: 'incoming' },
  { id: 'outgoing', label: '📤 Outgoing',   type: 'outgoing' },
  { id: 'missed',   label: '❌ Missed',     type: 'missed' },
];

const TYPE_BADGE = { incoming: 'vd-badge-success', outgoing: 'vd-badge-cyan', missed: 'vd-badge-danger' };

export default function CallLogs({ selectedChildId, parentId: propParentId }) {
  const { childId, parentId } = getIds(selectedChildId, propParentId);

  const [tab, setTab]       = useState('all');
  const [logs, setLogs]     = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage]     = useState(1);
  const [error, setError]   = useState('');

  useEffect(() => {
    if (childId && parentId) fetchLogs();
  }, [tab, page, childId, parentId]);

  const fetchLogs = async () => {
    setLoading(true); setError('');
    const current = TABS.find(t => t.id === tab);
    const res = current.type
      ? await callsApi.getByType(childId, parentId, current.type, page)
      : await callsApi.getAll(childId, parentId, page);
    setLoading(false);
    if (res.ok) {
      setLogs(res.data?.callLogs || res.data?.data || res.data?.logs || res.data?.calllogs || (Array.isArray(res.data) ? res.data : []));
    } else {
      setError('Could not load call logs. Device may not be paired or syncing yet.');
    }
  };

  const formatDuration = (sec) => {
    if (!sec) return '—';
    const m = Math.floor(sec / 60), s = sec % 60;
    return m > 0 ? `${m}m ${s}s` : `${s}s`;
  };

  if (!childId) return (
    <div>
      <div className="vd-page-head"><h2>Call Logs</h2><p>Monitor all incoming, outgoing and missed calls</p></div>
      <div className="vd-card"><div className="vd-empty"><div style={{fontSize:40,marginBottom:12}}>👧</div><div className="vd-empty-title">No child selected</div><div className="vd-empty-desc">Select a child from the sidebar to view call logs</div></div></div>
    </div>
  );

  if (!parentId) return (
    <div>
      <div className="vd-page-head"><h2>Call Logs</h2></div>
      <div className="vd-card"><div className="vd-empty"><div style={{fontSize:40,marginBottom:12}}>⚠️</div><div className="vd-empty-title">Session issue</div><div className="vd-empty-desc">Please log out and log in again to restore your session.</div></div></div>
    </div>
  );

  return (
    <div>
      <div className="vd-page-head">
        <h2>Call Logs</h2>
        <p>Monitor all incoming, outgoing and missed calls from the child's device</p>
      </div>

      <div className="vd-tabs">
        {TABS.map(t => (
          <button key={t.id} className={`vd-tab ${tab === t.id ? 'active' : ''}`}
            onClick={() => { setTab(t.id); setPage(1); }}>
            {t.label}
          </button>
        ))}
      </div>

      {error ? (
        <div className="vd-error">⚠️ {error}</div>
      ) : loading ? (
        <div className="vd-loading"><div className="vd-spinner" /><span>Loading call logs...</span></div>
      ) : (
        <div className="vd-card">
          <div className="vd-card-header">
            <span className="vd-card-title">
              {TABS.find(t => t.id === tab)?.label}&nbsp;
              <span className="vd-badge vd-badge-primary">{logs.length}</span>
            </span>
            <button className="vd-btn vd-btn-outline vd-btn-sm" onClick={fetchLogs}>↻ Refresh</button>
          </div>
          {logs.length === 0 ? (
            <div className="vd-empty">
              <div style={{fontSize:40,marginBottom:12}}>📵</div>
              <div className="vd-empty-title">No call logs found</div>
              <div className="vd-empty-desc">Calls appear here once the device is active and syncing</div>
            </div>
          ) : (
            <>
              <div className="vd-table-wrap">
                <table className="vd-table">
                  <thead><tr><th>Contact / Number</th><th>Type</th><th>Duration</th><th>Date & Time</th></tr></thead>
                  <tbody>
                    {logs.map((log, i) => {
                      const name = log.name || log.number || log.phoneNumber || '—';
                      const number = log.name ? (log.number || log.phoneNumber) : null;
                      const type = log.type || log.callType;
                      return (
                        <tr key={log._id || i}>
                          <td>
                            <div style={{fontWeight:600, color:'var(--text-primary)'}}>{name}</div>
                            {number && <div style={{fontSize:12, color:'var(--text-muted)'}}>{number}</div>}
                          </td>
                          <td><span className={`vd-badge ${TYPE_BADGE[type] || 'vd-badge-primary'}`}>{type || 'unknown'}</span></td>
                          <td style={{fontFamily:'monospace', color:'var(--text-secondary)'}}>{formatDuration(log.duration)}</td>
                          <td style={{fontSize:12, color:'var(--text-muted)', whiteSpace:'nowrap'}}>
                            {log.date || log.timestamp ? new Date(log.date || log.timestamp).toLocaleString() : '—'}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="vd-pagination">
                <button className="vd-page-btn" disabled={page===1} onClick={()=>setPage(p=>p-1)}>‹ Prev</button>
                <span style={{color:'var(--text-muted)',fontSize:13,padding:'0 8px'}}>Page {page}</span>
                <button className="vd-page-btn" disabled={logs.length<20} onClick={()=>setPage(p=>p+1)}>Next ›</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
