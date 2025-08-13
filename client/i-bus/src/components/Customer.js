import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Customer.css';

const Customer = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginPassword.length < 7) return alert("Password should be at least 7 characters.");
    if (!loginEmail.includes('@')) return alert("Invalid email address.");

    fetch('http://127.0.0.1:5555/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: loginEmail, password: loginPassword }),
    })
    .then(res => res.ok ? navigate('/Book') : alert("Invalid details."))
    .catch(() => alert("Error signing in. Please try again."));
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (signupPassword !== confirmPassword) return alert("Passwords do not match.");
    if (signupPassword.length < 7) return alert("Password should be at least 7 characters.");
    if (!signupEmail.includes('@')) return alert("Invalid email address.");

    fetch('http://127.0.0.1:5555/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: signupEmail, password: signupPassword }),
    })
    .then(res => {
      if (res.ok) {
        alert("Signup successful! A welcome email has been sent.");
        navigate('/Book');
      } else {
        alert("Error signing up.");
      }
    })
    .catch(() => alert("Error signing up. Please try again."));
  };

  return (
    <div className="customer-page">
      <h1 className="page-title">Customer Access</h1>
      <div className="login-container">
        <div className="form-box">
          <h2>Already have an account?</h2>
          <p>Sign in with your email and password</p>
          <form onSubmit={handleLoginSubmit}>
            <label>Email</label>
            <input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
            <label>Password</label>
            <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
            <button type="submit" className="btn-primary">Sign In</button>
          </form>
        </div>
        <div className="form-box">
          <h2>Don't have an account?</h2>
          <p>Sign up today and start booking easily</p>
          <form onSubmit={handleSignupSubmit}>
            <label>Email</label>
            <input type="email" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} />
            <label>Password</label>
            <input type="password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} />
            <label>Confirm Password</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <button type="submit" className="btn-secondary">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Customer;
