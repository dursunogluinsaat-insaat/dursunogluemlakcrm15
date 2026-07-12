import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">Real Estate</span>
          <h1>Dursunoglu Emlak CRM</h1>
        </div>
        <nav className="nav">
          <a href="#home">Ana Sayfa</a>
          <a href="#properties">Ilanlari</a>
          <a href="#about">Hakkinda</a>
          <a href="#contact">Iletisim</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
