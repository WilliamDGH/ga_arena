import React, { Component } from 'react';

import Game from './Game'

import tictactoe from './../img/portfolio/tic-tac.png';
import gomoku1 from './../img/portfolio/gomoku1.png';
import coming1 from './../img/portfolio/coming1.png';



class GameList extends Component {
  render () {
    return (
      <section className="portfolio" id="portfolio">
        <div className="container">
          <h2 className="text-center text-uppercase text-secondary mb-0">Game</h2>
            <hr className="star-dark mb-5" />
            <div className="row">
              <Game game="tictactoe" image={tictactoe} />
              <Game game="tictactoe" image={gomoku1} />
              <Game game="tictactoe" image={coming1} />
            </div>
          </div>
      </section>
    );
  }
}

export default GameList
