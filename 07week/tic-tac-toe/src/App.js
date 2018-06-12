import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//initial state is playerTurn X

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      playerTurn: 'X'
    }
  }

// handleClick method takes cell as argument. if cell does not have state create a newState object copy of this.state and enter the playerTurn in the cell. if newState creates a win alert that the playerTurn wins. if newState does not create a win rotate playerTurn and setState to newState.

handleClick = (cell)=>{
    if (!this.state[cell]) {
      const newState = {...this.state}
          newState[cell] = this.state.playerTurn

    if(this.checkForWin(newState)){
      alert(`${this.state.playerTurn} Wins!`)
    } else {

// newState['playerTurn'] = newState['playerTurn'] === 'X' ? 'O' : 'X'

      if (newState['playerTurn'] === 'X') {
        newState['playerTurn'] = 'O'
      } else { newState['playerTurn'] = 'X'

    }
    this.setState(newState)
  }

  }


// checkForWin method
// wins array of all array winning indexed combinations
// the some function takes in each win(one array in the wins array) and checks if the value of every item in that win array is equal to the current playerTurn by checking the newState objects cell key values

checkForWin = (newState) => {
  const wins = [
                 [0,1,2],[3,4,5],[6,7,8],
                 [0,3,6],[1,4,7],[2,5,8],
                 [0,4,8],[2,4,6]
               ]

// return wins.some((win) => win.every((index)=> newState[`cell${index}`] === newState.playerTurn ) )

    return wins.some((win) => {
      return win.every((i)=> {
        return newState[`cell${i}`] === newState.playerTurn
      })
    })
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
