import React, { Component } from 'react';
import logo from './../img/logo.svg';
import Nav from './Nav';
import Header from './Header';
import GameList from './GameList';
import Footer from './Footer';

class LandingPage extends Component {
  render() {
    return (
      <div className="App" id="page-top">
        <div className="wrapper">
          <Nav user={this.props.user}/>
          <Header />
          <GameList />
        </div>
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
