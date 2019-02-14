import React, { Component } from 'react';
import fb from './../config/Firebase.js'

import NavItem from './NavItem'

class Nav extends Component {

  logout(){
    fb.auth().signOut();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="/#/">Game Arena</a>
          <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <NavItem url="/#/" name="Home" />
              <NavItem url="/#/games" name="Game"/>
              <NavItem url="#" name="Login" />
              <button onClick={this.logout}>Logout {this.props.user.email}</button>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
