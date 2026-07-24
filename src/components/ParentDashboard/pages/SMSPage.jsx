import React, { useState, useEffect } from 'react';
import { smsApi } from '../../../utils/apiService';
import { getIds } from '../../../utils/dashHelpers';

export default function SMSPage({ selectedChildId, parentId: propParentId }) {
  const { childId, parentId } = getIds(selectedChildId, propParentId);
  const [tab, setTab]         = useState('all');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading]  = useState(false);
  const [page, setPage]        = useState(1);
  const [error, setError]      = useState('');
  const [keyword, setKeyword]  = useState('');
  const [contact, setContact]  = useState('');

  useEffect(() => {
    if (childId && parentId && tab !== 'keyword' && tab !== 'contact') fetchSMS();
  }, [tab, page, childId, parentId]);

  const fetchSMS = async () => {
    setLoading(true); setError('');
    let res;
    if (tab === 'keyword' && keyword) res = await smsApi.searchByKeyword(childId, parentId, keyword, page);
    else if (tab === 'contact' && contact) res = await smsApi.getByAddress(childId, parentId, contact, page);
    else if (tab === 'inbox') res = await smsApi.getInbox(childId, parentId, page);
    else res = await smsApi.getAll(childId, parentId, page);
    setLoading(false);
    if (res?.ok) {
      setMessages(res.data?.data || res.data?.messages || res.data?.sms || (Array.isArray(res.data) ? res.data : []));
    } else setError('Could not load SMS. Device may not be paired or active yet.');
  };

  if (!childId || !parentId) return (
    <div>
      <div className="vd-page-head"><h2>SMS Monitor</h2><p>View all messages from the child's device</p></div>
      <div className="vd-card"><div className="vd-empty"><div style={{fontSize:40,marginBottom:12}}>⚠️</div><div className="vd-empty-title">{!childId ? 'No child selected' : 'Session issue — please re-login'}</div></div></div>
    </div>
  );

  return (
    <div>
      <div className="vd-page-head">
        <h2>SMS Monitor</h2>
        <p>View all messages including AI-flagged keyword alerts from the child's device</p>
      </div>

      <div className="vd-tabs">
        {[{id:'all',label:'💬 All SMS'},{id:'inbox',label:'📥 Inbox'},{id:'contact',label:'👤 By Contact'},{id:'keyword',label:'🔍 Keyword Alert'}].map(t=>(
          <button key={t.id} className={`vd-tab ${tab===t.id?'active':''}`} onClick={()=>{setTab(t.id);setPage(1);setMessages([]);}}>{t.label}</button>
        ))}
      </div>

      {(tab==='keyword'||tab==='contact') && (
        <div style={{display:'flex',gap:10,marginBottom:16}}>
          <input className="vd-input" style={{flex:1,maxWidth:400}}
            placeholder={tab==='keyword'?'Enter keyword e.g. drugs, fight...':'Enter phone number or contact name'}
            value={tab==='keyword'?keyword:contact}
            onChange={e=>tab==='keyword'?setKeyword(e.target.value):setContact(e.target.value)}
            onKeyDown={e=>e.key==='Enter'&&fetchSMS()}/>
          <button className="vd-btn vd-btn-primary" onClick={fetchSMS}>Search</button>
        </div>
      )}

      {error ? <div className="vd-error">⚠️ {error}</div>
      : loading ? <div className="vd-loading"><div className="vd-spinner"/><span>Loading messages...</span></div>
      : (
        <div className="vd-card">
          <div className="vd-card-header">
            <span className="vd-card-title">Messages <span className="vd-badge vd-badge-primary">{messages.length}</span></span>
            <button className="vd-btn vd-btn-outline vd-btn-sm" onClick={fetchSMS}>↻ Refresh</button>
          </div>
          {messages.length===0 ? (
            <div className="vd-empty">
              <div style={{fontSize:40,marginBottom:12}}>💬</div>
              <div className="vd-empty-title">No messages found</div>
              <div className="vd-empty-desc">{(tab==='keyword'||tab==='contact')?'Try a different search term':'Messages appear once the device is active and syncing'}</div>
            </div>
          ) : (
            <>
              <div className="vd-table-wrap">
                <table className="vd-table">
                  <thead><tr><th>From / To</th><th>Message Preview</th><th>Type</th><th>Date</th></tr></thead>
                  <tbody>
                    {messages.map((msg,i)=>(
                      <tr key={msg._id||i}>
                        <td style={{fontWeight:600,color:'var(--text-primary)',maxWidth:140}}>{msg.address||msg.from||msg.to||'—'}</td>
                        <td><div style={{maxWidth:300,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',color:'var(--text-secondary)'}}>{msg.body||msg.message||msg.content||'—'}</div></td>
                        <td><span className={`vd-badge ${msg.type==='inbox'?'vd-badge-success':'vd-badge-cyan'}`}>{msg.type||'—'}</span></td>
                        <td style={{fontSize:12,color:'var(--text-muted)',whiteSpace:'nowrap'}}>{msg.date||msg.timestamp?new Date(msg.date||msg.timestamp).toLocaleString():'—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="vd-pagination">
                <button className="vd-page-btn" disabled={page===1} onClick={()=>setPage(p=>p-1)}>‹ Prev</button>
                <span style={{color:'var(--text-muted)',fontSize:13,padding:'0 8px'}}>Page {page}</span>
                <button className="vd-page-btn" disabled={messages.length<20} onClick={()=>setPage(p=>p+1)}>Next ›</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
