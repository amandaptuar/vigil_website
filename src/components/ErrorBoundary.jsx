import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error('React Error Boundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          fontFamily: 'sans-serif',
          background: '#f8f9fa',
          padding: '40px',
          textAlign: 'center'
        }}>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '40px',
            maxWidth: '600px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)'
          }}>
            <h2 style={{ color: '#e74c3c', marginBottom: '16px' }}>Something went wrong</h2>
            <p style={{ color: '#666', marginBottom: '24px' }}>
              The app failed to load. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                background: '#2920D2',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 28px',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              Refresh Page
            </button>
            {import.meta.env.DEV && this.state.error && (
              <pre style={{
                marginTop: '24px',
                background: '#fff3f3',
                border: '1px solid #fcc',
                borderRadius: '8px',
                padding: '16px',
                textAlign: 'left',
                fontSize: '12px',
                overflow: 'auto',
                color: '#c0392b'
              }}>
                {this.state.error.toString()}
                {this.state.errorInfo?.componentStack}
              </pre>
            )}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
