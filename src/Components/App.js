import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import fb from './../config/Firebase'

import LandingPage from './LandingPage'
import GameRoomListPage from './GameRoomListPage'
import Login from './Login'
import PlayPage from './PlayPage'
import Tictactoe from './tictactoe/Tictactoe'

class App extends Component {

  constructor(){
    super();
    this.state = {
      user : {}
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fb.auth().onAuthStateChanged(
      (user) => {
        // console.log(user);
        if (user) {
          this.setState({ user });
          // localStorage.setItem('user', user.uid);
        } else {
          this.setState({ user: null })
          // localStorage.removeItem('user')
        }
      }
    )
  }

  render() {
    return (
      <div>
      { this.state.user ? (<Switch>
      <Route exact path="/" render={ (props) => <LandingPage user={this.state.user} /> } />
      <Route path="/games/:name" render={ (props) => <GameRoomListPage {...props} user={this.state.user} /> } />
      <Route path="/session/:id" render={(props) => <PlayPage {...props} user={this.state.user} />} />
      <Route path="/tictactoe" render={(props) => <Tictactoe {...props} />} />
      </Switch>) : (<Login />) }
      </div>
    );
  }
}

export default App;
