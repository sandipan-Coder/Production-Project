import React from 'react';
import './Footer.css';
import logo from './logo.png';

const Footer = () => {
  const bubbles = Array.from({ length: 25 }).map((_, i) => {
    const size = 2 + Math.random() * 4;
    const distance = 6 + Math.random() * 4;
    const position = -5 + Math.random() * 110;
    const time = 2 + Math.random() * 2;
    const delay = -1 * (2 + Math.random() * 2);

    return (
      <div
        key={i}
        className="bubble"
        style={{
          '--size': `${size}rem`,
          '--distance': `${distance}rem`,
          '--position': `${position}%`,
          '--time': `${time}s`,
          '--delay': `${delay}s`,
        }}
      />
    );
  });

  return (
    <footer className="footer">
      <div className="bubbles">{bubbles}</div>
      <div className="content">
        <div className="logo-section">
          <div className="img-item">
            <img src={logo} alt="Logo" />
            <h1 className="headingName">AMBHIKA JEWELLERS</h1>
        </div>
          <p>Ambika Jewellers - Celebrating the art of fine craftsmanship since 2015. Discover timeless elegance and unmatched quality with every piece.<br/>
          'Jewelry is not just an accessory, it's a reflection of your unique story.'</p>
          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-square-x-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
        <div className="Services">
          <h2>Services</h2>
          <ul>
            <li>Buy and Seal Gold</li>
            <li>Buy and Seal Silver</li>
            <li>Manufacturing Stylis Ornaments</li>
            <li>Repapring Gold Ornaments</li>
          </ul>
        </div>
        <div className="contact-info">
          <h2>Contact Info</h2>
          <ul>
            <li><a href="tel:+91xx">+91 xxxx</a></li>
            <li><a href="mailto:sandipanpal254@gmail.com">xyz@gmail.com</a></li>
            <li>Jahalda @ Belda @ Paschim Medinipur</li>
          </ul>
        </div>
      </div>
      <div className="bottom-bar">
        <p>© 2025 AMBHIKA JEWELLERS</p>
        <p>[🎨 UI Designer: Mostakin] 
        [💻 Backend & Routing: Sandipan]</p>
      
      </div>
    </footer>
  );
};

export default Footer;
