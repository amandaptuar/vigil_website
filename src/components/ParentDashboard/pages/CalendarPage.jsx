import React, { useState, useEffect } from 'react';
import { eventsApi } from '../../../utils/apiService';
import { getIds } from '../../../utils/dashHelpers';

export default function CalendarPage({ selectedChildId, parentId: propParentId }) {
  const { childId, parentId } = getIds(selectedChildId, propParentId);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');
  const [page, setPage]       = useState(1);

  useEffect(() => { if (childId && parentId) fetchEvents(); }, [childId, parentId, page]);

  const fetchEvents = async () => {
    setLoading(true); setError('');
    const res = await eventsApi.getAll(childId, parentId, page);
    setLoading(false);
    if (res?.ok) setEvents(res.data?.data||res.data?.events||(Array.isArray(res.data)?res.data:[]));
    else setError('Could not load calendar events. Device may not be paired yet.');
  };

  const fmt = dt => { if(!dt)return'—'; const d=new Date(dt); return isNaN(d)?dt:d.toLocaleString(); };
  const monthAbbr = dt => { if(!dt)return'?'; const d=new Date(dt); return isNaN(d)?'?':d.toLocaleDateString('en',{month:'short'}); };
  const dayNum = dt => { if(!dt)return'—'; const d=new Date(dt); return isNaN(d)?'—':d.getDate(); };

  if (!childId||!parentId) return (
    <div><div className="vd-page-head"><h2>Calendar Events</h2></div>
    <div className="vd-card"><div className="vd-empty"><div style={{fontSize:40,marginBottom:12}}>⚠️</div><div className="vd-empty-title">{!childId?'No child selected':'Session issue — please re-login'}</div></div></div></div>
  );

  return (
    <div>
      <div className="vd-page-head"><h2>Calendar Events</h2><p>View calendar entries saved on the child's device</p></div>
      {error?<div className="vd-error">⚠️ {error}</div>
      :loading?<div className="vd-loading"><div className="vd-spinner"/><span>Loading events...</span></div>
      :(
        <div className="vd-card">
          <div className="vd-card-header">
            <span className="vd-card-title">📅 Events <span className="vd-badge vd-badge-primary">{events.length}</span></span>
            <button className="vd-btn vd-btn-outline vd-btn-sm" onClick={fetchEvents}>↻ Refresh</button>
          </div>
          {events.length===0?(
            <div className="vd-empty"><div style={{fontSize:40,marginBottom:12}}>📅</div><div className="vd-empty-title">No calendar events</div><div className="vd-empty-desc">Calendar data syncs once the device is connected</div></div>
          ):(
            <>
              <div style={{padding:'10px 12px',display:'flex',flexDirection:'column',gap:10}}>
                {events.map((ev,i)=>{const startDt=ev.dtstart||ev.start; return(
                  <div key={ev._id||i} style={{background:'rgba(0,0,0,0.02)',border:'1px solid var(--border)',borderRadius:10,padding:'14px 16px',display:'flex',alignItems:'flex-start',gap:14}}>
                    <div style={{width:46,height:52,borderRadius:10,background:'rgba(79,70,229,0.1)',border:'1px solid rgba(79,70,229,0.18)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                      <div style={{fontSize:9,fontWeight:700,color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:1}}>{monthAbbr(startDt)}</div>
                      <div style={{fontSize:20,fontWeight:800,color:'var(--primary)',lineHeight:1.1}}>{dayNum(startDt)}</div>
                    </div>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{fontWeight:700,color:'var(--text-primary)',fontSize:14,marginBottom:4}}>{ev.title||ev.summary||ev.event_name||'Untitled Event'}</div>
                      <div style={{color:'var(--text-muted)',fontSize:12}}>{fmt(startDt)}{(ev.dtend||ev.end)?` → ${fmt(ev.dtend||ev.end)}`:''}</div>
                      {ev.location&&<div style={{color:'var(--text-muted)',fontSize:12,marginTop:3}}>📍 {ev.location}</div>}
                      {(ev.description||ev.notes)&&<div style={{color:'var(--text-muted)',fontSize:12,marginTop:3,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',maxWidth:400}}>{ev.description||ev.notes}</div>}
                    </div>
                    {ev.calendar_name&&<span className="vd-badge vd-badge-primary">{ev.calendar_name}</span>}
                  </div>
                );})}
              </div>
              <div className="vd-pagination">
                <button className="vd-page-btn" disabled={page===1} onClick={()=>setPage(p=>p-1)}>‹ Prev</button>
                <span style={{color:'var(--text-muted)',fontSize:13,padding:'0 8px'}}>Page {page}</span>
                <button className="vd-page-btn" disabled={events.length<20} onClick={()=>setPage(p=>p+1)}>Next ›</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
