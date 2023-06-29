import React from 'react';
import './index.css'

// function handleClick(i) {
//   this.setState({
//     value: i
//   })
// }
class Square extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value:null
    }
  }
    render() {
      return (
        <button className="square" onClick={this.props.onClick.bind(this, 'hh')}>
          {this.props.value}  
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        squares: Array(9).fill(null),
        isNext: true
      }
    }

    handleClick(i, msg) {
      console.log('this', this)
      console.log('>>>i', i, msg) // 0 hh
      let squares = this.state.squares.slice()
      squares[i] = this.state.isNext ? 'X' : 'O'
      this.setState({
        squares: squares,
        isNext: !this.state.isNext
      })
    }

    // 是否 需要更新 DOM
    shouldComponentUpdate(nextProps, nextState) {
      console.log('>>>nextState', nextState)
      if (nextState.isNext) {
        return true;
      }
      return false;
    }

    handleClick2() {
      console.log('>>handleClick2', this) //undefined
    }
    renderSquare(i) {
      return <Square value={this.state.squares[i]} onClick={this.handleClick.bind(this, i)} />;
    }
  
    render() {
      const status = 'Next player: X';
      
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
          <button onClick={this.handleClick2}>click</button>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  export default Game;
  
  