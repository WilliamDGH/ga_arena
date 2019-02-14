import React, { Component } from 'react'
import fb from './../config/Firebase'

class GameRoom extends Component {


  componentWillMount () {
    const roomDB = fb.database().ref().child("game_rooms").child(this.props.roomId)
    roomDB.on('value', snap => {
      const players = snap.val().user_list
      if (players[0] !== 0 && players[1] !== 0) {
        roomDB.update({
          "status" : "full"
        })
      }
    })

  }

  render () {
    return (
      <div>
        <h3>{this.props.room.name}</h3>
        <p>Player 1: {this.props.room.user_list[0]}</p>
        <p>Player 2: {this.props.room.user_list[1]}</p>
        {<button><a href={`#/session/${this.props.roomId}`}>Join</a></button>}
      </div>
    )
  }
}

export default GameRoom
