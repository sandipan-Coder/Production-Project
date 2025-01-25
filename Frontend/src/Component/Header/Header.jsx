import React, { useState } from 'react';
import './Header.css';
import { MenuData } from './MenuData';
import logo from './logo.png';

function Header() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="navbarItems">
      <div className="img-item">
        <img src={logo} alt="Logo" />
        <h1 className="headingName">AMBHIKA JEWELLERS</h1>
      </div>
      <div className={`menu-icon ${clicked ? 'rotate' : ''}`} onClick={handleClick}>
        <i className={clicked ?'fa-solid fa-xmark':'fas fa-bars'}></i>
      </div>
      <ul className={clicked ? 'nav-menu-active' : 'nav-menu'}>
        {MenuData.map((item, index) => (
          <li key={index}>
            <a href={item.url} className={item.cName}>
              <i className={item.icon}></i>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Header;
