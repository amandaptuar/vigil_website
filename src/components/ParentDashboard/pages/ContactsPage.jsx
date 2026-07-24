import React, { useState, useEffect } from 'react';
import { contactsApi } from '../../../utils/apiService';
import { getIds } from '../../../utils/dashHelpers';

export default function ContactsPage({ selectedChildId, parentId: propParentId }) {
  const { childId, parentId } = getIds(selectedChildId, propParentId);
  const [contacts, setContacts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');
  const [page, setPage]         = useState(1);
  const [search, setSearch]     = useState('');

  useEffect(() => { if (childId && parentId) fetchContacts(); }, [childId, parentId, page]);
  useEffect(() => {
    if (!search.trim()) { setFiltered(contacts); return; }
    const q = search.toLowerCase();
    setFiltered(contacts.filter(c => (c.name||c.display_name||'').toLowerCase().includes(q) || (c.phone||c.number||c.phoneNumber||'').toLowerCase().includes(q)));
  }, [search, contacts]);

  const fetchContacts = async () => {
    setLoading(true); setError('');
    const res = await contactsApi.getAll(childId, parentId, page);
    setLoading(false);
    if (res?.ok) { const d=res.data?.data||res.data?.contacts||(Array.isArray(res.data)?res.data:[]); setContacts(d); setFiltered(d); }
    else setError('Could not load contacts. Device may not be paired yet.');
  };

  const avatarColor = n => `hsl(${((n||'?').charCodeAt(0)*47)%360},50%,42%)`;

  if (!childId||!parentId) return (
    <div><div className="vd-page-head"><h2>Contacts</h2></div>
    <div className="vd-card"><div className="vd-empty"><div style={{fontSize:40,marginBottom:12}}>⚠️</div><div className="vd-empty-title">{!childId?'No child selected':'Session issue — please re-login'}</div></div></div></div>
  );

  return (
    <div>
      <div className="vd-page-head"><h2>Contacts</h2><p>View all contacts saved on the child's device</p></div>
      <div style={{display:'flex',gap:12,marginBottom:16,flexWrap:'wrap',alignItems:'center'}}>
        <input className="vd-input" style={{maxWidth:320}} placeholder="🔍 Search by name or number..." value={search} onChange={e=>setSearch(e.target.value)}/>
        <button className="vd-btn vd-btn-outline vd-btn-sm" onClick={fetchContacts}>↻ Refresh</button>
        <span style={{color:'var(--text-muted)',fontSize:13,marginLeft:'auto'}}>{filtered.length} contacts</span>
      </div>
      {error?<div className="vd-error">⚠️ {error}</div>
      :loading?<div className="vd-loading"><div className="vd-spinner"/><span>Loading contacts...</span></div>
      :(
        <div className="vd-card">
          <div className="vd-card-header"><span className="vd-card-title">📒 Phone Contacts <span className="vd-badge vd-badge-primary">{filtered.length}</span></span></div>
          {filtered.length===0?(
            <div className="vd-empty"><div style={{fontSize:40,marginBottom:12}}>📒</div><div className="vd-empty-title">{search?'No contacts match':'No contacts found'}</div><div className="vd-empty-desc">Contacts sync once the device is connected</div></div>
          ):(
            <>
              <div className="vd-table-wrap">
                <table className="vd-table">
                  <thead><tr><th></th><th>Name</th><th>Phone Number</th><th>Type</th></tr></thead>
                  <tbody>
                    {filtered.map((c,i)=>{const name=c.name||c.display_name||'Unknown'; return(
                      <tr key={c._id||i}>
                        <td style={{width:44}}><div style={{width:34,height:34,borderRadius:'50%',background:avatarColor(name),display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,color:'#fff',fontSize:13}}>{name.charAt(0).toUpperCase()}</div></td>
                        <td style={{fontWeight:600,color:'var(--text-primary)'}}>{name}</td>
                        <td style={{fontFamily:'monospace',color:'var(--primary)'}}>{c.phone||c.number||c.phoneNumber||'—'}</td>
                        <td><span className="vd-badge vd-badge-primary">{c.type||'Contact'}</span></td>
                      </tr>
                    );})}
                  </tbody>
                </table>
              </div>
              <div className="vd-pagination">
                <button className="vd-page-btn" disabled={page===1} onClick={()=>setPage(p=>p-1)}>‹ Prev</button>
                <span style={{color:'var(--text-muted)',fontSize:13,padding:'0 8px'}}>Page {page}</span>
                <button className="vd-page-btn" disabled={contacts.length<50} onClick={()=>setPage(p=>p+1)}>Next ›</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
