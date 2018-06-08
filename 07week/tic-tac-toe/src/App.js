import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      playerTurn: 'X'
    }
  }

checkForWin = (newState) => {
  const wins = [ [0,1,2],[3,4,5],[6,7,8],
                [0,3,6], [1,4,7],[2,5,8],
                [0,4,8],[2,4,6] ]
    // return wins.some((winCombo) => winCombo.every((index)=> newState[`cell${index}`] === newState.playerTurn ) )

    return wins.some((winCombo) => {
      return winCombo.every((index)=> {
        return newState[`cell${index}`] === newState.playerTurn
      })
    })
  }


handleClick = (cell)=>{
  if (!this.state[cell]) {
  const newState = {...this.state}
  newState[cell] = this.state.playerTurn
  // newState['playerTurn'] = newState['playerTurn'] === 'X' ? 'O' : 'X'
  // if (newState['playerTurn'] === 'X') {
  //   newState['playerTurn'] = 'O'
  // } else { newState['playerTurn'] = 'X'
  if(this.checkForWin(newState)){
    alert(`${this.state.playerTurn} Wins!`)
  } else {
    newState['playerTurn'] = newState['playerTurn'] === 'X' ? 'O' : 'X'
  }
  this.setState(newState)



}

}




  render() {
  return (
    <div>
      <div className="row">
        <div data-cell="0" onClick={()=> this.handleClick('cell0')}>{this.state.cell0}</div>
        <div data-cell="1" onClick={()=> this.handleClick('cell1')}>{this.state.cell1}</div>
        <div data-cell="2" onClick={()=> this.handleClick('cell2')}>{this.state.cell2}</div>
      </div>
      <div className="row">
        <div data-cell="3" onClick={()=> this.handleClick('cell3')}>{this.state.cell3}</div>
        <div data-cell="4" onClick={()=> this.handleClick('cell4')}>{this.state.cell4}</div>
        <div data-cell="5" onClick={()=> this.handleClick('cell5')}>{this.state.cell5}</div>
      </div>
      <div className="row">
        <div data-cell="6" onClick={()=> this.handleClick('cell6')}>{this.state.cell6}</div>
        <div data-cell="7" onClick={()=> this.handleClick('cell7')}>{this.state.cell7}</div>
        <div data-cell="8" onClick={()=> this.handleClick('cell8')}>{this.state.cell8}</div>
      </div>
    </div>
  );
  }
}

export default App;
