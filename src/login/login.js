import React, { useState, useEffect } from 'react';
import './login.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      const { email: storedEmail } = JSON.parse(storedFormData);
      setEmail(storedEmail);
    }
  }, []); // Run once on component mount

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Retrieve user credentials from local storage
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      const { email: storedEmail, password: storedPassword } = JSON.parse(storedFormData);
      
      // Check if provided email and password match the stored credentials
      if (email.trim().toLowerCase() === storedEmail.trim().toLowerCase() && password === storedPassword) {
        // Navigate to home page
        navigate('/');
      } else {
        // Display error alert
        setLoginError('Invalid email or password');
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            className={`input-field ${emailError && 'error'}`}
          />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="input-field"
          />
        </div>
        {loginError && <p className="error-message">{loginError}</p>}
       <div> <button type="submit" className="submit-button">Login</button></div>
      </form>
      <button onClick={() => navigate('/register')} className="submit-button">Go to register</button>
    </div>
  );
}

export default Login;
