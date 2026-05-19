import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ChildSetup() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const permissions = [
    { title: 'Accessibility Access', desc: 'Allows monitoring of screen content and key logs for safety alerts.', icon: '👁️' },
    { title: 'Notification Access', desc: 'Required to capture social media messages and alerts.', icon: '🔔' },
    { title: 'SMS Permission', desc: 'Monitors text messages for bullying or inappropriate content.', icon: '✉️' },
    { title: 'Call Logs Access', desc: 'Keeps track of incoming and outgoing calls to unknown numbers.', icon: '📞' },
    { title: 'Storage & Gallery Access', desc: 'Scans photos and media for explicit content.', icon: '🖼️' },
    { title: 'Microphone Access', desc: 'Allows remote audio recording in emergency situations.', icon: '🎙️' },
    { title: 'Location Access', desc: 'Provides real-time GPS tracking and geofencing alerts.', icon: '📍' },
    { title: 'Background Activity', desc: 'Ensures Vigil runs continuously without interruption.', icon: '⚙️' },
    { title: 'Disable Battery Optimization', desc: 'Prevents the operating system from closing the app to save battery.', icon: '🔋' }
  ];

  const handleNext = () => {
    if (currentStep < permissions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      navigate('/dashboard');
    }
  };

  const handleSkip = () => {
    navigate('/dashboard');
  };

  return (
    <>
      <div className="breadcrumb-wrapper" style={{ backgroundImage: 'url(/assets/images/breadcrumb/breadcrumb1.png)', padding: '120px 0 60px' }}>
        <div className="container">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-title">Device Setup</h1>
          </div>
        </div>
      </div>

      <section style={{ backgroundColor: '#0a0a0a', padding: '60px 0', minHeight: '80vh' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2 style={{ color: '#fff', fontSize: '28px', fontWeight: 'bold' }}>Child Device Permissions</h2>
                <p style={{ color: '#9ca3af' }}>Please grant the following permissions on the child's device to enable full protection.</p>
              </div>

              {/* Step Indicators */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '40px' }}>
                {permissions.map((_, idx) => (
                  <div key={idx} style={{
                    width: '30px',
                    height: '4px',
                    borderRadius: '2px',
                    background: idx <= currentStep ? '#8b5cf6' : 'rgba(255, 255, 255, 0.1)',
                    transition: 'background 0.3s ease'
                  }}></div>
                ))}
              </div>

              {/* Animated Permission Card */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px',
                padding: '40px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                animation: 'slideUp 0.4s ease-out'
              }} key={currentStep}>
                
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '40px',
                  margin: '0 auto 24px',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  boxShadow: '0 0 20px rgba(139, 92, 246, 0.2)'
                }}>
                  {permissions[currentStep].icon}
                </div>

                <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>
                  {permissions[currentStep].title}
                </h3>
                <p style={{ color: '#e5e7eb', fontSize: '16px', lineHeight: '1.6', marginBottom: '32px', height: '50px' }}>
                  {permissions[currentStep].desc}
                </p>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <button onClick={handleNext} style={{
                    flex: 1,
                    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                    border: 'none',
                    color: '#fff',
                    fontWeight: '600',
                    fontSize: '16px',
                    padding: '16px 24px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.boxShadow = '0 15px 25px rgba(59, 130, 246, 0.4)'}
                  onMouseOut={(e) => e.target.style.boxShadow = '0 10px 20px rgba(59, 130, 246, 0.3)'}
                  >
                    {currentStep === permissions.length - 1 ? 'FINISH SETUP' : 'GRANT PERMISSION'}
                  </button>
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '24px' }}>
                <button onClick={handleSkip} style={{
                  background: 'none',
                  border: 'none',
                  color: '#9ca3af',
                  fontSize: '14px',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}>
                  Skip for now
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
      
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

export default ChildSetup;
