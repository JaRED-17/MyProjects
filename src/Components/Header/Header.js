import React from 'react';
import logo from './../../logo.svg';
import './Header.css';

function Header() {
  return (
    <div className="Header">
        <div className="Header-left"></div>
        <div className="Header-center Logo">
            <img src={logo} className="App-logo" alt="logo" />
        </div>   
        <div className="Header-rigth"></div>
    </div>
  );
}

export default Header;
