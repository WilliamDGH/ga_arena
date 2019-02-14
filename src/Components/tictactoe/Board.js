import React, {Component} from 'react';
import Square from './Square'
import fb from './../../config/Firebase'

//import './Board.css';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      squares: Array(9).fill(null),
      xIsNext: false,
      myTurn: true
    };
    this.fetchGameBoard(props.id)
  }

  componentDidMount(){
    this.authListener()
    this.fetchPlayTurn()
  }

  fetchGameBoard (id) {
    const game_boardDB = fb.database().ref().child("game_rooms").child(id).child("game_board")
    game_boardDB.on('value', snap => {
      this.setState({ squares : snap.val()})
      if (this.state.myTurn) {
        this.setState({ myTurn: false })
      } else {
        this.setState({ myTurn: true })
      }
      if (this.state.xIsNext) {
        this.setState({ xIsNext: false })
      } else {
        this.setState({ xIsNext: true })
      }
    })
  }

  fetchPlayTurn () {
    const game_boardDB = fb.database().ref().child("game_rooms").child(this.props.id).child("user_list")
    game_boardDB.on('value', snap => {
      if (snap.val()[0] === this.state.user.email) {
        console.log("first")
        this.setState({
          myTurn: true
        })
        return
      } else {
        this.setState({
          myTurn: false
        })
      }

    })
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

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i] || !this.state.myTurn) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
    fb.database().ref().child("game_rooms").child(this.props.id).update({
      "game_board" : squares
    })
  }



  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      /> // props of Square
    );
  }



  render () {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    return squares[a];
    }
  }
  return null;
}

export default Board;
