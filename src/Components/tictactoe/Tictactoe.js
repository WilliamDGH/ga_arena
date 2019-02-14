import React, { Component } from 'react';
import './tictactoe.css'
import Board from './Board'

class Game extends Component {
  render() {
    return (
      <div className="board-wrapper">
        <div className="game">
          <div className="game-board">
            <Board id={this.props.id}/>
          </div>
          <div className="game-info">
            <div>{}</div>
            <div>{}</div>
          </div>
        </div>
    </div>
    );
  }
}

export default Game;
