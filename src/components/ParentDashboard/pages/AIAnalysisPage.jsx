import React, { useState, useEffect } from 'react';
import { aiApi } from '../../../utils/apiService';

export default function AIAnalysisPage({ selectedChildId }) {
  const [tab, setTab] = useState('run');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [runLoading, setRunLoading] = useState(false);
  const [runResult, setRunResult] = useState(null);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);
  const [relationships, setRelationships] = useState(null);
  const [trends, setTrends] = useState(null);
  const [dataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    if (!selectedChildId) return;
    if (tab === 'history') fetchHistory();
    if (tab === 'relationships') fetchRelationships();
    if (tab === 'trends') fetchTrends();
  }, [tab, selectedChildId]);

  const fetchHistory = async () => {
    setDataLoading(true); setError('');
    const res = await aiApi.listDailyHistory(selectedChildId);
    setDataLoading(false);
    if (res.ok) setHistory(res.data?.data || res.data?.analyses || (Array.isArray(res.data) ? res.data : []));
    else setError('No analysis history available yet.');
  };

  const fetchRelationships = async () => {
    setDataLoading(true); setError('');
    const res = await aiApi.getRelationships(selectedChildId);
    setDataLoading(false);
    if (res.ok) setRelationships(res.data?.data || res.data?.relationships || res.data);
    else setError('No relationship data yet. Run an analysis first.');
  };

  const fetchTrends = async () => {
    setDataLoading(true); setError('');
    const res = await aiApi.getLongitudinal(selectedChildId, 'longitudinal');
    setDataLoading(false);
    if (res.ok) setTrends(res.data?.data || res.data?.trends || res.data);
    else setError('No trend data yet. Run multiple analyses over several days.');
  };

  const runAnalysis = async () => {
    if (!selectedChildId) return setError('Select a child first');
    setRunLoading(true); setError(''); setRunResult(null);
    const res = await aiApi.runAnalysis(selectedChildId, date);
    setRunLoading(false);
    if (res.ok) setRunResult(res.data);
    else setError(res.data?.message || res.data?.msg || 'Analysis failed. No data available for this date, or device is not paired.');
  };

  const downloadPDF = async (d) => {
    const res = await aiApi.downloadReport(selectedChildId, d);
    if (res.blob) {
      const url = URL.createObjectURL(res.blob);
      const a = document.createElement('a');
      a.href = url; a.download = `vigil-ai-report-${d}.pdf`; a.click();
      URL.revokeObjectURL(url);
    } else alert('PDF report not available for this date.');
  };

  const WellnessScore = ({ score, band }) => {
    const color = score >= 80 ? '#4ade80' : score >= 60 ? '#fbbf24' : '#f87171';
    const badgeClass = score >= 80 ? 'vd-badge-success' : score >= 60 ? 'vd-badge-warning' : 'vd-badge-danger';
    return (
      <div style={{ textAlign: 'center', padding: '20px 0 16px' }}>
        <div style={{ fontSize: 68, fontWeight: 900, color, lineHeight: 1 }}>{score?.toFixed(1)}</div>
        <div style={{ marginTop: 10 }}>
          <span className={`vd-badge ${badgeClass}`} style={{ fontSize: 13, padding: '5px 16px' }}>
            {band ? band.charAt(0).toUpperCase() + band.slice(1) : 'Unknown'}
          </span>
        </div>
        <div className="vd-progress-bar" style={{ marginTop: 16, height: 10 }}>
          <div className="vd-progress-fill" style={{ width: `${Math.min(score, 100)}%`, background: color }} />
        </div>
      </div>
    );
  };

  const NoChild = () => (
    <div className="vd-card">
      <div className="vd-empty">
        <div style={{ fontSize: 40, marginBottom: 12 }}>👧</div>
        <div className="vd-empty-title">No child selected</div>
        <div className="vd-empty-desc">Select a child from the sidebar to run AI analysis</div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="vd-page-head">
        <h2>🧠 AI Behaviour Analysis</h2>
        <p>AI-powered wellbeing insights derived from SMS and call patterns</p>
      </div>

      <div className="vd-tabs">
        <button className={`vd-tab ${tab === 'run' ? 'active' : ''}`} onClick={() => { setTab('run'); setError(''); }}>▶ Run Analysis</button>
        <button className={`vd-tab ${tab === 'history' ? 'active' : ''}`} onClick={() => { setTab('history'); setError(''); }}>📋 History</button>
        <button className={`vd-tab ${tab === 'relationships' ? 'active' : ''}`} onClick={() => { setTab('relationships'); setError(''); }}>👥 Relationships</button>
        <button className={`vd-tab ${tab === 'trends' ? 'active' : ''}`} onClick={() => { setTab('trends'); setError(''); }}>📈 Trends</button>
      </div>

      {!selectedChildId ? <NoChild /> : (
        <>
          {error && <div className="vd-error">⚠️ {error}</div>}

          {tab === 'run' && (
            <div style={{ maxWidth: 600 }}>
              <div className="vd-card" style={{ marginBottom: 20 }}>
                <div className="vd-card-header"><span className="vd-card-title">Run Daily Analysis</span></div>
                <div className="vd-card-body">
                  <p style={{ color: 'var(--text-muted)', fontSize: 13.5, marginBottom: 18, lineHeight: 1.6 }}>
                    Select a date and run the AI engine to analyse your child's communication patterns from that day. Results include a wellness score, emotions, concerns, and recommendations.
                  </p>
                  <div className="vd-form-group">
                    <label className="vd-form-label">Analysis Date</label>
                    <input className="vd-input" type="date" value={date}
                      onChange={e => setDate(e.target.value)}
                      max={new Date().toISOString().split('T')[0]} />
                  </div>
                  <button className="vd-btn vd-btn-primary" style={{ width: '100%', justifyContent: 'center' }}
                    onClick={runAnalysis} disabled={runLoading}>
                    {runLoading ? '⏳ Analysing...' : '🧠 Run AI Analysis'}
                  </button>
                </div>
              </div>

              {runResult && (
                <div className="vd-card">
                  <div className="vd-card-header">
                    <span className="vd-card-title">Results — {runResult.date || date}</span>
                    <button className="vd-btn vd-btn-outline vd-btn-sm" onClick={() => downloadPDF(runResult.date || date)}>
                      📥 Download PDF
                    </button>
                  </div>
                  <div className="vd-card-body">
                    {runResult.analyzed === false ? (
                      <div className="vd-empty">
                        <div style={{ fontSize: 40, marginBottom: 12 }}>📊</div>
                        <div className="vd-empty-title">No data for this date</div>
                        <div className="vd-empty-desc">No SMS or call activity found. Try a different date or ensure the device is paired and sending data.</div>
                      </div>
                    ) : runResult.result ? (
                      <>
                        <WellnessScore score={runResult.result.wellness_score} band={runResult.result.wellness_band} />

                        {runResult.result.executive_summary && (
                          <div style={{ background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: 10, padding: '14px 16px', marginTop: 16 }}>
                            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8 }}>
                              Executive Summary
                            </div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: 13.5, lineHeight: 1.7, margin: 0 }}>
                              {runResult.result.executive_summary}
                            </p>
                          </div>
                        )}

                        {runResult.result.dominant_emotions?.length > 0 && (
                          <div style={{ marginTop: 16 }}>
                            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8 }}>
                              Dominant Emotions
                            </div>
                            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                              {runResult.result.dominant_emotions.map(e => (
                                <span key={e} className="vd-badge vd-badge-primary">{e}</span>
                              ))}
                            </div>
                          </div>
                        )}

                        {runResult.result.concerning_findings?.length > 0 && (
                          <div style={{ marginTop: 16, background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: 10, padding: '14px 16px' }}>
                            <div style={{ fontSize: 11, fontWeight: 700, color: '#f87171', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 10 }}>
                              ⚠️ Concerning Findings
                            </div>
                            {runResult.result.concerning_findings.map((f, i) => (
                              <div key={i} style={{ color: '#fca5a5', fontSize: 13.5, marginBottom: 6, paddingLeft: 12, borderLeft: '2px solid rgba(239,68,68,0.4)' }}>
                                {f}
                              </div>
                            ))}
                          </div>
                        )}

                        {runResult.result.recommendations?.length > 0 && (
                          <div style={{ marginTop: 16 }}>
                            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8 }}>
                              💡 Recommendations
                            </div>
                            {runResult.result.recommendations.map((r, i) => (
                              <div key={i} style={{ color: 'var(--text-secondary)', fontSize: 13.5, marginBottom: 6, paddingLeft: 12, borderLeft: '2px solid rgba(99,102,241,0.4)' }}>
                                {r}
                              </div>
                            ))}
                          </div>
                        )}

                        <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid var(--border)', display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                            Confidence: <strong>{((runResult.result.overall_confidence || 0) * 100).toFixed(0)}%</strong>
                          </span>
                          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                            SMS analysed: <strong>{runResult.smsCount || 0}</strong>
                          </span>
                          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                            Calls analysed: <strong>{runResult.callCount || 0}</strong>
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="vd-empty"><div className="vd-empty-title">No results returned</div></div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {tab === 'history' && (
            <div className="vd-card">
              <div className="vd-card-header">
                <span className="vd-card-title">Analysis History <span className="vd-badge vd-badge-primary">{history.length}</span></span>
              </div>
              {dataLoading ? (
                <div className="vd-loading"><div className="vd-spinner" /><span>Loading history...</span></div>
              ) : history.length === 0 ? (
                <div className="vd-empty">
                  <div style={{ fontSize: 40, marginBottom: 12 }}>🧠</div>
                  <div className="vd-empty-title">No analyses run yet</div>
                  <div className="vd-empty-desc">Run your first AI analysis to see history here</div>
                </div>
              ) : (
                <div className="vd-table-wrap">
                  <table className="vd-table">
                    <thead>
                      <tr><th>Date</th><th>Wellness Score</th><th>Band</th><th>SMS</th><th>Calls</th><th>Report</th></tr>
                    </thead>
                    <tbody>
                      {history.map((a, i) => {
                        const score = a.wellness_score ?? a.result?.wellness_score;
                        const band = a.wellness_band ?? a.result?.wellness_band;
                        const badgeClass = score >= 80 ? 'vd-badge-success' : score >= 60 ? 'vd-badge-warning' : 'vd-badge-danger';
                        return (
                          <tr key={a._id || i}>
                            <td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{a.date}</td>
                            <td style={{ fontWeight: 800, color: score >= 80 ? '#4ade80' : score >= 60 ? '#fbbf24' : '#f87171', fontSize: 15 }}>
                              {score !== undefined ? score.toFixed(1) : '—'}
                            </td>
                            <td>{band ? <span className={`vd-badge ${badgeClass}`}>{band}</span> : '—'}</td>
                            <td>{a.smsCount ?? 0}</td>
                            <td>{a.callCount ?? 0}</td>
                            <td>
                              <button className="vd-btn vd-btn-outline vd-btn-sm" onClick={() => downloadPDF(a.date)}>
                                📥 PDF
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {tab === 'relationships' && (
            <div className="vd-card">
              <div className="vd-card-header">
                <span className="vd-card-title">👥 Relationship Analysis</span>
                <button className="vd-btn vd-btn-outline vd-btn-sm" onClick={fetchRelationships}>↻</button>
              </div>
              <div className="vd-card-body">
                {dataLoading ? (
                  <div className="vd-loading"><div className="vd-spinner" /><span>Loading...</span></div>
                ) : !relationships ? (
                  <div className="vd-empty">
                    <div style={{ fontSize: 40, marginBottom: 12 }}>👥</div>
                    <div className="vd-empty-title">No relationship data</div>
                    <div className="vd-empty-desc">Run AI analysis first to generate relationship insights</div>
                  </div>
                ) : (
                  <pre style={{ color: 'var(--text-secondary)', fontSize: 13, overflowX: 'auto', whiteSpace: 'pre-wrap', lineHeight: 1.7 }}>
                    {JSON.stringify(relationships, null, 2)}
                  </pre>
                )}
              </div>
            </div>
          )}

          {tab === 'trends' && (
            <div className="vd-card">
              <div className="vd-card-header">
                <span className="vd-card-title">📈 Longitudinal Trends</span>
                <button className="vd-btn vd-btn-outline vd-btn-sm" onClick={fetchTrends}>↻</button>
              </div>
              <div className="vd-card-body">
                {dataLoading ? (
                  <div className="vd-loading"><div className="vd-spinner" /><span>Loading trends...</span></div>
                ) : !trends ? (
                  <div className="vd-empty">
                    <div style={{ fontSize: 40, marginBottom: 12 }}>📈</div>
                    <div className="vd-empty-title">No trend data yet</div>
                    <div className="vd-empty-desc">Run AI analysis over multiple days to see trends and patterns emerge</div>
                  </div>
                ) : (
                  <pre style={{ color: 'var(--text-secondary)', fontSize: 13, overflowX: 'auto', whiteSpace: 'pre-wrap', lineHeight: 1.7 }}>
                    {JSON.stringify(trends, null, 2)}
                  </pre>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
