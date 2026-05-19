import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    country: 'USA',
    agree: false
  });
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid Email Address is required';
    if (!formData.mobile.trim() || formData.mobile.length < 5) newErrors.mobile = 'Valid Mobile Number is required (min 5 digits)';
    if (!formData.agree) newErrors.agree = 'You must agree to the Terms & Privacy Policy';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Account Generation Logic
    const phoneStr = formData.mobile.replace(/\D/g, ''); // Extract digits
    const first5Phone = phoneStr.length >= 5 ? phoneStr.substring(0, 5) : phoneStr.padEnd(5, '0');
    const emailPrefix = formData.email.split('@')[0];
    const first5Email = emailPrefix.length >= 5 ? emailPrefix.substring(0, 5) : emailPrefix.padEnd(5, 'x');
    const username = (first5Phone + first5Email).toLowerCase();
    
    const last5Mobile = phoneStr.length >= 5 ? phoneStr.slice(-5) : phoneStr.padStart(5, '0');
    const password = last5Mobile;

    const accountDetails = {
      username,
      password,
      plan: 'Free Family Protection',
      devices: '1 Device',
      status: 'Active',
      parentName: formData.fullName,
      email: formData.email
    };

    // Redirect to Success Page and pass the credentials
    navigate('/success', { state: { accountDetails } });
  };

  const inputStyle = (name) => ({
    width: '100%',
    background: 'rgba(255, 255, 255, 0.03)',
    border: `1px solid ${focusedField === name ? '#8b5cf6' : 'rgba(255, 255, 255, 0.1)'}`,
    color: '#fff',
    padding: '16px 20px',
    borderRadius: '12px',
    fontSize: '16px',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxShadow: focusedField === name ? '0 0 0 4px rgba(139, 92, 246, 0.1)' : 'none',
  });

  const labelStyle = {
    display: 'block',
    color: '#9ca3af',
    fontSize: '14px',
    marginBottom: '8px',
    fontWeight: '500'
  };

  return (
    <>
      <div className="breadcrumb-wrapper" style={{ backgroundImage: 'url(/assets/images/breadcrumb/breadcrumb1.png)', padding: '120px 0 60px' }}>
        <div className="container">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-title">Create Account</h1>
          </div>
        </div>
      </div>

      <div className="luminix-padding-section4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="luminix-contact-box" style={{ padding: '50px', borderRadius: '15px' }}>
                <div className="luminix-contact-title text-center mb-5">
                  <h2 className="title pb-0 pt-0">Create Parent Account</h2>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12">
                      <div className="luminix-main-field">
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Your Full Name"
                        />
                        {errors.fullName && <div style={{ color: '#ef4444', fontSize: '14px', marginTop: '4px', textAlign: 'left' }}>{errors.fullName}</div>}
                      </div>
                    </div>
                    
                    <div className="col-lg-6">
                      <div className="luminix-main-field">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email Address"
                        />
                        {errors.email && <div style={{ color: '#ef4444', fontSize: '14px', marginTop: '4px', textAlign: 'left' }}>{errors.email}</div>}
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="luminix-main-field">
                        <input
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          placeholder="Mobile Number"
                        />
                        {errors.mobile && <div style={{ color: '#ef4444', fontSize: '14px', marginTop: '4px', textAlign: 'left' }}>{errors.mobile}</div>}
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="luminix-main-field">
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          style={{
                            width: '100%',
                            height: '60px',
                            border: '1px solid #EBEBEB',
                            borderRadius: '5px',
                            padding: '0 20px',
                            color: '#767676',
                            background: '#fff',
                            appearance: 'none',
                            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'12\' height=\'8\' viewBox=\'0 0 12 8\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1.5L6 6.5L11 1.5\' stroke=\'%23767676\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 20px center'
                          }}
                        >
                          <option value="USA">United States</option>
                          <option value="Canada">Canada</option>
                          <option value="UK">United Kingdom</option>
                          <option value="Australia">Australia</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 d-flex align-items-center" style={{ textAlign: 'left' }}>
                    <input
                      type="checkbox"
                      name="agree"
                      id="agree"
                      checked={formData.agree}
                      onChange={handleChange}
                      style={{ width: '18px', height: '18px', cursor: 'pointer', marginRight: '10px' }}
                    />
                    <label htmlFor="agree" style={{ color: '#555', fontSize: '15px', cursor: 'pointer', margin: 0 }}>
                      I agree to the <Link to="/terms-conditions" style={{ color: '#2920D2', fontWeight: '500' }}>Terms & Privacy Policy</Link>
                    </label>
                  </div>
                  {errors.agree && <div style={{ color: '#ef4444', fontSize: '14px', marginTop: '-15px', marginBottom: '15px', textAlign: 'left' }}>{errors.agree}</div>}

                  <button type="submit" className="luminix-default-btn pill extra-btn4 w-100" style={{ border: 'none', cursor: 'pointer' }}>
                    CREATE FREE ACCOUNT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
