import React, { Component } from 'react';
import fb from './../config/Firebase'

import Nav from './Nav';
import GameList from './GameList';
import Footer from './Footer';
import GameRoom from './GameRoom'

const games = {
  tictactoe : {
    name : "Tic Tac Toe",
    board : [0,0,0,0,0,0,0,0,0],
    capacity : 2,
  }
}

class GameRoomListPage extends Component {
  constructor(){
    super()
    this.state = {
      rooms : {},
      newRoomName: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.createNewRoom = this.createNewRoom.bind(this)
  }

  fetchGameRooms(){
    const game_roomsDB = fb.database().ref().child("game_rooms")
    game_roomsDB.on('value', snap => {
      this.setState({ rooms : snap.val()})
    })
  }

  createNewRoom (e) {
    e.preventDefault()
    const game_roomsDB = fb.database().ref().child("game_rooms")
    let newRoomRef = game_roomsDB.push({
      game_board : [0,0,0,0,0,0,0,0,0],
      status: "before",
      user_list: [0,0],
      name: this.state.newRoomName
    })
    newRoomRef.update({
      id: newRoomRef.key
    })
  }

  handleChange (e) {
    this.setState({
      newRoomName: e.target.value
    })
  }

  componentDidMount(){
    this.fetchGameRooms()
  }



  render() {
    return (
      <div className="App" id="page-top">
        <div className="wrapper">
        <Nav user={this.props.user}/>
          <section className="portfolio" id="portfolio">
            <div className="container">
              <h2 className="text-center text-uppercase text-secondary mb-0">{games[this.props.match.params.name]["name"]}</h2>
                <hr className="star-dark mb-5" />
                <div className="row">
                  <form onSubmit={this.createNewRoom}>
                    <h3>Create new room</h3>
                    <input onChange={this.handleChange} placeholder="enter room name" />
                    <input type="submit" value="Create" />
                  </form>
                  {Object.keys(this.state.rooms).map((key) => {
                    return (<GameRoom key={key} roomId={key} room={this.state.rooms[key]} user={this.props.user}/>)
                    })
                  }
                </div>
              </div>
          </section>
        </div>
        <div className="pusher">
        </div>
        <Footer />
      </div>
    );
  }
}

export default GameRoomListPage;
