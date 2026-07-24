import React, { useState, useEffect } from 'react';
import { childrenApi } from '../../../utils/apiService';

const GENDERS = ['male', 'female', 'other'];

export default function ChildrenPage({ selectedChildId, parentId, refreshChildren }) {
  const [children, setChildren] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [editChild, setEditChild] = useState(null);
  const [form, setForm] = useState({ name: '', age: '', gender: 'male' });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => { loadChildren(); }, []);

  const loadChildren = async () => {
    setLoading(true);
    const res = await childrenApi.getAll();
    if (res.ok) setChildren(res.data?.children || res.data?.data || (Array.isArray(res.data) ? res.data : []));
    setLoading(false);
  };

  const resetForm = () => setForm({ name: '', age: '', gender: 'male' });

  const handleAdd = async () => {
    if (!form.name.trim()) return setError('Name is required');
    if (!form.age || form.age < 1 || form.age > 18) return setError('Age must be between 1 and 18');
    setSaving(true); setError('');
    const res = await childrenApi.create(form.name.trim(), parseInt(form.age), form.gender);
    setSaving(false);
    if (res.ok || res.status === 201) {
      setShowAdd(false); resetForm(); loadChildren(); refreshChildren?.();
    } else setError(res.data?.message || res.data?.msg || 'Failed to add child');
  };

  const handleRename = async () => {
    if (!form.name.trim()) return setError('Name is required');
    setSaving(true); setError('');
    const res = await childrenApi.updateName(editChild._id, form.name.trim());
    setSaving(false);
    if (res.ok) { setEditChild(null); resetForm(); loadChildren(); refreshChildren?.(); }
    else setError(res.data?.message || 'Failed to update name');
  };

  const handleDelete = async (child) => {
    if (!window.confirm(`Delete "${child.name}"? All monitoring data for this child will be removed.`)) return;
    const res = await childrenApi.delete(child._id);
    if (res.ok) { loadChildren(); refreshChildren?.(); }
    else alert('Failed to delete child. Please try again.');
  };

  const genderEmoji = (g) => g === 'female' ? '👧' : g === 'male' ? '👦' : '🧒';

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
        <div className="vd-page-head" style={{ marginBottom: 0 }}>
          <h2>My Children</h2>
          <p>Manage child profiles linked to your parent account</p>
        </div>
        <button className="vd-btn vd-btn-primary" onClick={() => { setError(''); resetForm(); setShowAdd(true); }}>
          + Add Child
        </button>
      </div>

      {loading ? (
        <div className="vd-loading"><div className="vd-spinner" /><span>Loading children...</span></div>
      ) : children.length === 0 ? (
        <div className="vd-card">
          <div className="vd-empty" style={{ padding: '80px 20px' }}>
            <div style={{ fontSize: 72, marginBottom: 16 }}>👨‍👩‍👧</div>
            <div className="vd-empty-title">No children added yet</div>
            <div className="vd-empty-desc" style={{ marginBottom: 20 }}>
              Add a child profile, then pair their Android device to start monitoring
            </div>
            <button className="vd-btn vd-btn-primary" onClick={() => { resetForm(); setShowAdd(true); }}>
              Add Your First Child
            </button>
          </div>
        </div>
      ) : (
        <div className="vd-grid-3">
          {children.map(child => (
            <div key={child._id} className="vd-card" style={{
              outline: child._id === selectedChildId ? '2px solid rgba(99,102,241,0.4)' : 'none',
            }}>
              {/* Card Header */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(6,182,212,0.06))',
                padding: '24px 20px 18px',
                textAlign: 'center',
                borderBottom: '1px solid var(--border)',
                position: 'relative',
              }}>
                {child._id === selectedChildId && (
                  <div style={{ position: 'absolute', top: 12, right: 12 }}>
                    <span className="vd-badge vd-badge-primary">Monitoring</span>
                  </div>
                )}
                <div style={{
                  width: 66, height: 66, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 12px',
                  fontWeight: 900, fontSize: 26, color: '#fff',
                  boxShadow: '0 4px 16px rgba(99,102,241,0.3)',
                }}>
                  {child.name?.charAt(0)?.toUpperCase()}
                </div>
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: 'var(--text-primary)' }}>
                  {child.name}
                </h3>
                <p style={{ margin: '5px 0 0', color: 'var(--text-muted)', fontSize: 13 }}>
                  {genderEmoji(child.gender)} {child.gender ? child.gender.charAt(0).toUpperCase() + child.gender.slice(1) : 'Unknown'} · Age {child.age}
                </p>
              </div>

              {/* Card Footer */}
              <div style={{ padding: '12px 14px' }}>
                <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                  <button className="vd-btn vd-btn-outline vd-btn-sm" style={{ flex: 1 }}
                    onClick={() => { setEditChild(child); setForm({ name: child.name, age: child.age, gender: child.gender || 'male' }); setError(''); }}>
                    ✏️ Rename
                  </button>
                  <button className="vd-btn vd-btn-danger vd-btn-sm" onClick={() => handleDelete(child)} title="Delete">
                    🗑️
                  </button>
                </div>
                <div style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: 'monospace', wordBreak: 'break-all' }}>
                  ID: {child._id}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Modal */}
      {showAdd && (
        <div className="vd-modal-overlay">
          <div className="vd-modal">
            <div className="vd-modal-header">
              <span className="vd-modal-title">👧 Add Child Profile</span>
              <button className="vd-modal-close" onClick={() => setShowAdd(false)}>✕</button>
            </div>
            <div className="vd-modal-body">
              {error && <div className="vd-error">⚠️ {error}</div>}
              <div className="vd-form-group">
                <label className="vd-form-label">Child's Name</label>
                <input className="vd-input" placeholder="e.g. Arya, Zara, Ali..."
                  value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  onKeyDown={e => e.key === 'Enter' && handleAdd()} autoFocus />
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <div className="vd-form-group" style={{ flex: 1 }}>
                  <label className="vd-form-label">Age</label>
                  <input className="vd-input" type="number" min="1" max="18" placeholder="e.g. 12"
                    value={form.age} onChange={e => setForm(f => ({ ...f, age: e.target.value }))} />
                </div>
                <div className="vd-form-group" style={{ flex: 1 }}>
                  <label className="vd-form-label">Gender</label>
                  <select className="vd-select" value={form.gender} onChange={e => setForm(f => ({ ...f, gender: e.target.value }))}>
                    {GENDERS.map(g => <option key={g} value={g}>{g.charAt(0).toUpperCase() + g.slice(1)}</option>)}
                  </select>
                </div>
              </div>
            </div>
            <div className="vd-modal-footer">
              <button className="vd-btn vd-btn-outline" onClick={() => { setShowAdd(false); setError(''); }}>Cancel</button>
              <button className="vd-btn vd-btn-primary" onClick={handleAdd} disabled={saving}>
                {saving ? 'Adding...' : '+ Add Child'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Rename Modal */}
      {editChild && (
        <div className="vd-modal-overlay">
          <div className="vd-modal">
            <div className="vd-modal-header">
              <span className="vd-modal-title">✏️ Rename {editChild.name}</span>
              <button className="vd-modal-close" onClick={() => { setEditChild(null); setError(''); }}>✕</button>
            </div>
            <div className="vd-modal-body">
              {error && <div className="vd-error">⚠️ {error}</div>}
              <div className="vd-form-group">
                <label className="vd-form-label">New Name</label>
                <input className="vd-input" placeholder="Enter new name"
                  value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  onKeyDown={e => e.key === 'Enter' && handleRename()} autoFocus />
              </div>
            </div>
            <div className="vd-modal-footer">
              <button className="vd-btn vd-btn-outline" onClick={() => { setEditChild(null); setError(''); }}>Cancel</button>
              <button className="vd-btn vd-btn-primary" onClick={handleRename} disabled={saving}>
                {saving ? 'Saving...' : '✔ Save Name'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
