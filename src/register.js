import React, { useState } from 'react';
import './index.css'; 
import registerImage from './start2.png'
import axios from 'axios';
import { backendUrl } from './constants/config';
import { useNavigate } from "react-router-dom";


function RegistrationForm() {
  const navigate = useNavigate();
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name:Name,
      email:email,
      phone:phoneNumber,
      password:password
    };
    try {
      const res = await axios.post(`${backendUrl}/api/user/create`,data,{headers:{
        "Content-Type":"application/json"
      }});
      alert("Register");
      navigate("#register");
    } catch (error) {
      if(error.response.status===400){
        alert(error.response.data[0]);
      }else{
        alert(error.response.data.msg);
      }
      
      console.log(error);
    }
  };

  return (
    <div id="register" className="container">

        <div className='registerimage'>
            <img src={registerImage} alt='Image' />
        </div>

        <div className="form">
            <h2>Get started absolutely free.</h2>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <p style={{ marginTop: '0', marginBottom: '0.4rem'}}>Already have an account?</p>
                <a href='#login'>Sign In</a>
            </div>
            <form onSubmit={handleSubmit}>

            <div className="form-group">
                <label htmlFor="Name">Name:</label>
                <input
                type="text"
                id="Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </div>
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
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
            <button type="submit">Create Account</button>
            <p style={{ margin: '0', fontSize: '0.7rem'}}>By signing up, I agree to <a href='#'>Terms & Conditions</a> and <a href='#'>Privacy Policy</a></p>
            </form>
        </div>
    </div>
  );
}

export default RegistrationForm;
