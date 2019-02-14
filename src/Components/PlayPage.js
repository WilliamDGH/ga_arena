import React, { Component } from 'react'
import fb from './../config/Firebase'

import Tictactoe from './tictactoe/Tictactoe'

class PlayPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      room : "",
      user : {},
      user_position : ''
    }



  }

  componentDidMount(props) {
    this.authListener()
    this.fetchGameRoomInfo(this.props.match.params.id)
  }


  fetchGameRoomInfo (id) {
    const game_roomDB = fb.database().ref().child("game_rooms").child(id)
    game_roomDB.on('value', snap => {
      this.setState({ room : snap.val()})
    })
  }

  authListener() {
    fb.auth().onAuthStateChanged(
      (user) => {
        // console.log(user);
        if (user) {
          this.setState({ user });
          this.joinRoom(this.props.match.params.id)
          // localStorage.setItem('user', user.uid);
        } else {
          this.setState({ user: null })
          // localStorage.removeItem('user')
        }
      }
    )
  }

  joinRoom (id) {
    const user_listDB = fb.database().ref().child("game_rooms").child(id).child("user_list")
    user_listDB.on('value', snap => {
      if (snap.val()[0] === 0 || snap.val()[0] === this.state.user.email) {
        user_listDB.update({
          0 : this.state.user.email,
        })
        this.setState({
          user_position : 0
        })
      } else if (snap.val()[1] === 0 || snap.val()[1] === this.state.user.email) {
        user_listDB.update({
          1 : this.state.user.email
        })
        this.setState({
          user_position : 1
        })
      }
    })
  }


  render() {
    return (
      <div>
        <p>Game Room No: {this.props.match.params.id}</p>
        <p>Player 1: {(this.state.room.user_list !==undefined) ? this.state.room.user_list[0] : ""}</p>
        <p>Player 2: {(this.state.room.user_list !==undefined) ? this.state.room.user_list[1] : ""}</p>
        <button>Start</button>
        <button><a href="/#/games/tictactoe">Leave</a></button>
        <Tictactoe id={this.props.match.params.id}/>
      </div>
    )
  }
}

export default PlayPage
