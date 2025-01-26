import React from 'react';
import { Link } from 'react-router-dom';
import "./Auth.css";

function Auth() {

  return (
    <div className="container">
      <div className="login-box">
        <h2>Login</h2>
        <form action="#">
          <div className="input-box">
            <input type="text" required aria-label="User Name" />
            <label>User Name</label>
          </div>
          <div className="input-box">
            <input type="password" required aria-label="Password" />
            <label>Password</label>
          </div>
          <button type="submit" className="btn">Login</button>
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
