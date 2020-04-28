import React from 'react';
import logo from './../../logo.svg';
import './Header.css';

export default class Header extends React.Component {
  
  render () {

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
}