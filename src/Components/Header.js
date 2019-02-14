import React, { Component } from 'react';
//import logo from './../img/profile.png';
import logo from './../img/ga-logo.png';

class Header extends Component {
  render () {
    return (
      <header className="masthead bg-primary text-white text-center">
        <div className="container">
          <img className="img-fluid mb-5 d-block mx-auto" src={logo}  />

          <h1 className="text-uppercase mb-0">Welcome to Game Arena</h1>
          <hr className="star-light" />

        </div>
      </header>
    );
  }
}

export default Header;
