import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <header className="header">
      <div className="search-bar">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search..." />
      </div>
      <div className="icons">
        <div className="icon notifications">
          <i className="fa-solid fa-bell"></i>
        </div>
        <div className="icon profile">
          <i className="fa-solid fa-circle-user"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
