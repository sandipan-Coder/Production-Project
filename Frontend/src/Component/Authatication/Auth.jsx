import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import "./Auth.css";

function Auth() {

  const[email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!email || !password){
      enqueueSnackbar('Please fill in all required fields.', { variant: 'warning' });
      return;
    }

    const data = {email, password};

    axios
    .post('https://ambhika-jwellers.onrender.com/cards/auth', data)
    .then(() => {
      enqueueSnackbar('Authenticated successfully', { variant: 'success' });
      navigate('/cards/create');
    })
    .catch((error) => {
      enqueueSnackbar('Error', { variant: 'error'});
      navigate('/');
      console.log(error)
    });

  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Authentication</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email" 
            required 
            aria-label="User email" />
            <label>User Email</label>
          </div>
          <div className="input-box">
            <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password" 
            required 
            aria-label="Password" />
            <label>Password</label>
          </div>
          <button 
          type="submit" 
          className="btn">Login</button>
          <div className="Go-back">
            <button className="back" >
              <Link to={`/`}>
                <i className="fa-solid fa-arrow-left"/>
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;
