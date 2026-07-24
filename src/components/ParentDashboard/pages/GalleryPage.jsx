import React, { useState, useEffect } from 'react';
import { filesApi } from '../../../utils/apiService';
import { getIds } from '../../../utils/dashHelpers';

export default function GalleryPage({ selectedChildId, parentId: propParentId }) {
  const { childId, parentId } = getIds(selectedChildId, propParentId);
  const [tab, setTab]   = useState('all');
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');

  useEffect(() => {
    if (childId && parentId) fetchFiles();
  }, [tab, page, childId, parentId]);

  const fetchFiles = async () => {
    setLoading(true); setError('');
    const res = tab==='images' ? await filesApi.getImages(childId, parentId, page)
              : tab==='videos' ? await filesApi.getVideos(childId, parentId, page)
              : await filesApi.getAll(childId, parentId, page);
    setLoading(false);
    if (res?.ok) setFiles(res.data?.data || res.data?.files || (Array.isArray(res.data)?res.data:[]));
    else setError('Could not load files. Device may not be paired yet.');
  };

  const getIcon = (t,m) => { const s=t||m||''; if(s.includes('image'))return'🖼️'; if(s.includes('video'))return'🎬'; if(s.includes('audio'))return'🎵'; if(s.includes('pdf'))return'📄'; return'📎'; };
  const fileSize = b => { if(!b)return'—'; if(b<1024)return`${b}B`; if(b<1048576)return`${(b/1024).toFixed(1)}KB`; return`${(b/1048576).toFixed(1)}MB`; };

  if (!childId||!parentId) return (
    <div><div className="vd-page-head"><h2>Gallery & Files</h2></div>
    <div className="vd-card"><div className="vd-empty"><div style={{fontSize:40,marginBottom:12}}>⚠️</div><div className="vd-empty-title">{!childId?'No child selected':'Session issue — please re-login'}</div></div></div></div>
  );

  return (
    <div>
      <div className="vd-page-head"><h2>Gallery & Files</h2><p>View photos, videos and files from the child's device</p></div>
      <div className="vd-tabs">
        {[{id:'all',l:'📁 All Files'},{id:'images',l:'🖼️ Photos'},{id:'videos',l:'🎬 Videos'}].map(t=>(
          <button key={t.id} className={`vd-tab ${tab===t.id?'active':''}`} onClick={()=>{setTab(t.id);setPage(1);}}>{t.l}</button>
        ))}
      </div>
      {error?<div className="vd-error">⚠️ {error}</div>
      :loading?<div className="vd-loading"><div className="vd-spinner"/><span>Loading files...</span></div>
      :(
        <div className="vd-card">
          <div className="vd-card-header">
            <span className="vd-card-title">Files <span className="vd-badge vd-badge-primary">{files.length}</span></span>
            <button className="vd-btn vd-btn-outline vd-btn-sm" onClick={fetchFiles}>↻ Refresh</button>
          </div>
          {files.length===0?(
            <div className="vd-empty"><div style={{fontSize:40,marginBottom:12}}>📂</div><div className="vd-empty-title">No files found</div><div className="vd-empty-desc">Files appear once the device is active and syncing</div></div>
          ):(
            <>
              <div className="vd-table-wrap">
                <table className="vd-table">
                  <thead><tr><th>Type</th><th>File Name</th><th>Path</th><th>Size</th><th>Date</th></tr></thead>
                  <tbody>
                    {files.map((f,i)=>(
                      <tr key={f._id||i}>
                        <td style={{fontSize:22}}>{getIcon(f.file_type||f.type,f.mime_type)}</td>
                        <td style={{fontWeight:600,color:'var(--text-primary)',maxWidth:200,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{f.name||f.file_name||f.path?.split('/').pop()||'—'}</td>
                        <td style={{fontSize:11,color:'var(--text-muted)',fontFamily:'monospace',maxWidth:180,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{f.path||'—'}</td>
                        <td style={{whiteSpace:'nowrap'}}>{fileSize(f.size||f.file_size)}</td>
                        <td style={{fontSize:12,color:'var(--text-muted)',whiteSpace:'nowrap'}}>{f.date||f.created_at?new Date(f.date||f.created_at).toLocaleDateString():'—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="vd-pagination">
                <button className="vd-page-btn" disabled={page===1} onClick={()=>setPage(p=>p-1)}>‹ Prev</button>
                <span style={{color:'var(--text-muted)',fontSize:13,padding:'0 8px'}}>Page {page}</span>
                <button className="vd-page-btn" disabled={files.length<20} onClick={()=>setPage(p=>p+1)}>Next ›</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
