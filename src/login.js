import React, { useState } from 'react';
import './index.css';
import registerImage from './start2.png'
import axios from 'axios';
import { backendUrl } from './constants/config';
import { useNavigate } from "react-router-dom";
function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    try {
      const res = await axios.post(`${backendUrl}/api/user/login`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      navigate("/feed");
      //alert('Logged in');
      // Redirect to the user dashboard or perform other actions after successful login
    } catch (error) {
      if (error.response.status === 400) {
        alert(error.response.data[0]);
      } else {
        alert(error.response.data.msg);
      }

      console.log(error);
    }
  };

  return (
    <div id="login" className="container">
      

      <div className="form">
        <h2>Log in to your account.</h2>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <p style={{ marginTop: '0', marginBottom: '0.4rem' }}>Don't have an account?</p>
          <a href="#register">Sign Up</a>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Log In</button>
          <p style={{ margin: '8px 0 0 0', fontSize: '0.8rem' }}>
            <a href="#">Forget Log-in credentials</a> 
          </p>
        </form>
      </div>
      <div className="loginimage">
        <img src={registerImage} alt="Image" />
      </div>
    </div>
  );
}

export default LoginForm;
