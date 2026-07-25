import React, { useState, useEffect } from 'react';
import { appsApi } from '../../../utils/apiService';
import { getIds } from '../../../utils/dashHelpers';

export default function ScreenTimePage({ selectedChildId, parentId: propParentId }) {
  const { childId, parentId } = getIds(selectedChildId, propParentId);
  const [apps, setApps]     = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError]   = useState('');
  const [page, setPage]     = useState(1);
  const [sortBy, setSortBy] = useState('usage');
  const [search, setSearch] = useState('');

  useEffect(() => { if (childId && parentId) fetchApps(); }, [childId, parentId, page]);

  const fetchApps = async () => {
    setLoading(true); setError('');
    const res = await appsApi.getAll(childId, parentId, page);
    setLoading(false);
    if (res?.ok) setApps(res.data?.data||res.data?.apps||(Array.isArray(res.data)?res.data:[]));
    else setError('Could not load apps. Device may not be paired yet.');
  };

  // Backend shape: { appName, packageName, usageInfo: { displayMinutes|dailyMinutes|usageMinutes } }
  const appMins = (a) => a.usageInfo?.displayMinutes ?? a.usageInfo?.dailyMinutes ?? a.usageInfo?.usageMinutes ?? a.usage_minutes ?? a.usageMinutes ?? 0;
  const appLabel = (a) => a.appName || a.app_name || a.name || '';
  const totalMinutes = apps.reduce((s,a)=>s+appMins(a),0);
  const sorted = [...apps]
    .filter(a=>!search||appLabel(a).toLowerCase().includes(search.toLowerCase()))
    .sort((a,b)=>sortBy==='usage'?appMins(b)-appMins(a):appLabel(a).localeCompare(appLabel(b)));

  if (!childId||!parentId) return (
    <div><div className="vd-page-head"><h2>Screen Time & Apps</h2></div>
    <div className="vd-card"><div className="vd-empty"><div style={{fontSize:40,marginBottom:12}}>⚠️</div><div className="vd-empty-title">{!childId?'No child selected':'Session issue — please re-login'}</div></div></div></div>
  );

  const totalH = Math.floor(totalMinutes/60), totalM = totalMinutes%60;

  return (
    <div>
      <div className="vd-page-head"><h2>Screen Time & Apps</h2><p>Monitor installed apps and time spent on each</p></div>

      {/* Summary stats */}
      <div className="vd-stat-grid" style={{gridTemplateColumns:'repeat(3,1fr)',marginBottom:18}}>
        {[
          {label:'Total Apps',value:apps.length,emoji:'📱',color:'var(--primary)',bg:'rgba(79,70,229,0.08)',accent:'linear-gradient(90deg,#6366f1,#818cf8)'},
          {label:'Total Screen Time',value:`${totalH}h ${totalM}m`,emoji:'⏱️',color:'#b45309',bg:'rgba(217,119,6,0.08)',accent:'linear-gradient(90deg,#d97706,#fbbf24)'},
          {label:'Most Used',value:(sorted[0]&&appLabel(sorted[0]))||'—',emoji:'🏆',color:'#15803d',bg:'rgba(22,163,74,0.08)',accent:'linear-gradient(90deg,#16a34a,#4ade80)'},
        ].map((s,i)=>(
          <div key={i} className="vd-stat-card" style={{'--card-accent':s.accent}}>
            <div className="vd-stat-icon" style={{background:s.bg}}><span>{s.emoji}</span></div>
            <div className="vd-stat-info">
              <div className="vd-stat-label">{s.label}</div>
              <div className="vd-stat-value" style={{color:s.color,fontSize:i===2?14:24}}>{s.value}</div>
            </div>
          </div>
        ))}
      </div>

      {error?<div className="vd-error">⚠️ {error}</div>
      :loading?<div className="vd-loading"><div className="vd-spinner"/><span>Loading apps...</span></div>
      :(
        <div className="vd-card">
          <div className="vd-card-header">
            <span className="vd-card-title">📲 Installed Apps <span className="vd-badge vd-badge-primary">{sorted.length}</span></span>
            <div style={{display:'flex',gap:8,alignItems:'center',flexWrap:'wrap'}}>
              <input className="vd-input" style={{width:170}} placeholder="🔍 Search app..." value={search} onChange={e=>setSearch(e.target.value)}/>
              <button className={`vd-tab ${sortBy==='usage'?'active':''}`} onClick={()=>setSortBy('usage')}>By Usage</button>
              <button className={`vd-tab ${sortBy==='name'?'active':''}`} onClick={()=>setSortBy('name')}>A–Z</button>
              <button className="vd-btn vd-btn-outline vd-btn-sm" onClick={fetchApps}>↻</button>
            </div>
          </div>
          {sorted.length===0?(
            <div className="vd-empty"><div style={{fontSize:40,marginBottom:12}}>📱</div><div className="vd-empty-title">{search?'No apps match':'No apps data'}</div><div className="vd-empty-desc">App data syncs once the device is connected</div></div>
          ):(
            <>
              <div className="vd-table-wrap">
                <table className="vd-table">
                  <thead><tr><th>#</th><th>App Name</th><th>Package</th><th>Usage</th><th>Share</th><th>Installed</th></tr></thead>
                  <tbody>
                    {sorted.map((app,i)=>{
                      const mins=appMins(app);
                      const pct=totalMinutes>0?Math.round((mins/totalMinutes)*100):0;
                      return(
                        <tr key={app._id||i}>
                          <td style={{color:'var(--text-muted)',fontSize:12}}>{i+1}</td>
                          <td style={{fontWeight:600,color:'var(--text-primary)'}}>{appLabel(app)||'—'}</td>
                          <td style={{fontFamily:'monospace',fontSize:11,color:'var(--text-muted)',maxWidth:180,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{app.package_name||app.packageName||'—'}</td>
                          <td style={{fontWeight:700,color:'#b45309',whiteSpace:'nowrap'}}>{mins>0?`${Math.floor(mins/60)}h ${mins%60}m`:'—'}</td>
                          <td style={{minWidth:120}}>
                            <div style={{display:'flex',alignItems:'center',gap:8}}>
                              <div className="vd-progress-bar" style={{flex:1,height:5}}><div className="vd-progress-fill" style={{width:`${pct}%`}}/></div>
                              <span style={{fontSize:11,color:'var(--text-muted)',width:28,textAlign:'right'}}>{pct}%</span>
                            </div>
                          </td>
                          <td style={{fontSize:12,color:'var(--text-muted)',whiteSpace:'nowrap'}}>{app.install_date||app.installDate?new Date(app.install_date||app.installDate).toLocaleDateString():'—'}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="vd-pagination">
                <button className="vd-page-btn" disabled={page===1} onClick={()=>setPage(p=>p-1)}>‹ Prev</button>
                <span style={{color:'var(--text-muted)',fontSize:13,padding:'0 8px'}}>Page {page}</span>
                <button className="vd-page-btn" disabled={apps.length<50} onClick={()=>setPage(p=>p+1)}>Next ›</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
