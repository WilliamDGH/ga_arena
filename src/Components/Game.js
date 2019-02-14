import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Game extends Component {
  render () {
    return (
      <div className="col-md-6 col-lg-4">
        <Link className="portfolio-item d-block mx-auto" to={`/games/${this.props.game}`}>
          <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
            <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
            <i className="fas fa-search-plus fa-3x"></i>
            </div>
          </div>
          <img className="img-fluid" src={this.props.image} />
        </Link>
      </div>
    )
  }
}

export default Game
