import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: 'Live Location', icon: '📍', color: '#ef4444' },
    { title: 'SMS Monitoring', icon: '💬', color: '#3b82f6' },
    { title: 'Call Logs', icon: '📞', color: '#10b981' },
    { title: 'WhatsApp Activity', icon: '📱', color: '#22c55e' },
    { title: 'Social Media', icon: '🌐', color: '#8b5cf6' },
    { title: 'Gallery Access', icon: '🖼️', color: '#f59e0b' },
    { title: 'AI Alerts', icon: '🤖', color: '#6366f1' }
  ];

  return (
    <>
      <div className="breadcrumb-wrapper" style={{ backgroundImage: 'url(/assets/images/breadcrumb/breadcrumb1.png)', padding: '120px 0 60px' }}>
        <div className="container">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-title">Parent Dashboard</h1>
          </div>
        </div>
      </div>

      <section style={{ backgroundColor: '#0a0a0a', padding: '60px 0' }}>
        <div className="container">
          <div className="row">
            {/* Left Sidebar / Quick Actions */}
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px',
                padding: '30px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}>
                <h4 style={{ color: '#fff', marginBottom: '24px', fontWeight: '600' }}>Device Management</h4>
                
                <div style={{ marginBottom: '24px', padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ color: '#e5e7eb', fontWeight: '500' }}>Connection Status</span>
                    <span style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '4px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: '600' }}>Disconnected</span>
                  </div>
                  <p style={{ color: '#9ca3af', fontSize: '12px', margin: 0 }}>No child device connected yet.</p>
                </div>

                <button onClick={() => navigate('/child-setup')} style={{
                  background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                  border: 'none',
                  color: '#fff',
                  fontWeight: '600',
                  fontSize: '16px',
                  padding: '14px 24px',
                  width: '100%',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)',
                  transition: 'all 0.3s ease',
                  marginBottom: '16px'
                }}
                onMouseOver={(e) => e.target.style.boxShadow = '0 15px 25px rgba(59, 130, 246, 0.4)'}
                onMouseOut={(e) => e.target.style.boxShadow = '0 10px 20px rgba(59, 130, 246, 0.3)'}
                >
                  <span style={{ marginRight: '8px' }}>+</span> Add Child Device
                </button>

                <button onClick={() => setShowQR(!showQR)} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  fontWeight: '600',
                  fontSize: '16px',
                  padding: '14px 24px',
                  width: '100%',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  marginBottom: '16px'
                }}
                onMouseOver={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                onMouseOut={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.05)'}
                >
                  Generate QR Pair Code
                </button>

                <button onClick={() => navigate('/child-setup')} style={{
                  background: 'transparent',
                  border: '1px dashed rgba(255, 255, 255, 0.2)',
                  color: '#9ca3af',
                  fontWeight: '500',
                  fontSize: '16px',
                  padding: '14px 24px',
                  width: '100%',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => { e.target.style.borderColor = '#8b5cf6'; e.target.style.color = '#fff'; }}
                onMouseOut={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'; e.target.style.color = '#9ca3af'; }}
                >
                  Download Child App
                </button>
              </div>

              {/* QR Code Section - Conditional */}
              {showQR && (
                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '24px',
                  padding: '30px',
                  marginTop: '24px',
                  textAlign: 'center',
                  animation: 'fadeIn 0.3s ease-out'
                }}>
                  <h5 style={{ color: '#fff', marginBottom: '16px' }}>Scan with Child App</h5>
                  <div style={{ background: '#fff', padding: '20px', borderRadius: '16px', display: 'inline-block', marginBottom: '16px' }}>
                    {/* Placeholder for actual QR code */}
                    <div style={{ width: '150px', height: '150px', background: `repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, #fff 25%, #fff 75%, #000 75%, #000)`, backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }}></div>
                  </div>
                  <p style={{ color: '#9ca3af', fontSize: '14px', margin: 0 }}>Or enter pairing code:</p>
                  <h3 style={{ color: '#8b5cf6', letterSpacing: '4px', margin: '8px 0 0 0' }}>X7V-9A2</h3>
                </div>
              )}
            </div>

            {/* Right Main Content */}
            <div className="col-lg-8">
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px',
                padding: '30px',
                height: '100%',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <h4 style={{ color: '#fff', margin: 0, fontWeight: '600' }}>Monitoring Features Overview</h4>
                  <span style={{ color: '#9ca3af', fontSize: '14px' }}>Free Plan</span>
                </div>

                <div className="row">
                  {features.map((feature, idx) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={idx}>
                      <div style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: '16px',
                        padding: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        transition: 'all 0.3s ease',
                        cursor: 'default'
                      }}
                      onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'; }}
                      onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)'; }}
                      >
                        <div style={{ 
                          width: '40px', 
                          height: '40px', 
                          borderRadius: '10px', 
                          background: `rgba(${parseInt(feature.color.slice(1,3),16)}, ${parseInt(feature.color.slice(3,5),16)}, ${parseInt(feature.color.slice(5,7),16)}, 0.1)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '20px'
                        }}>
                          {feature.icon}
                        </div>
                        <div style={{ flex: 1 }}>
                          <h6 style={{ color: '#e5e7eb', margin: 0, fontSize: '14px', fontWeight: '500' }}>{feature.title}</h6>
                          <span style={{ color: '#10b981', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6L9 17L4 12" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Active
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ 
                  marginTop: '16px', 
                  padding: '24px', 
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px'
                }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#8b5cf6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '12px', flexShrink: 0, marginTop: '2px' }}>i</div>
                  <div>
                    <h6 style={{ color: '#fff', marginBottom: '8px' }}>Setup Instructions</h6>
                    <p style={{ color: '#e5e7eb', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>
                      To start monitoring, please click on "Add Child Device" or download the Vigil Child App on your child's phone and scan the QR code to pair it with this dashboard.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
