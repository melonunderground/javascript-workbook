import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        list: [],
        inputValue: '',
      }
  }

handleInputChange = (e)=>{
  this.setState({inputValue: e.target.value})
};

handleClear = ()=>{
  this.setState({inputValue: ''})
};

handleSubmit = ()=> {

  const newList = this.state.list;
  newList.push(this.state.inputValue);
  this.setState({list: newList, inputValue: ''});
};

renderList() {
  return this.state.list.map((item)=> {
    return <p>{item}</p>
  })
}



//user has to add items to list using input text field
//show user updated list

  render() {
    return (

        <div>
        <input value = {this.state.inputValue} onChange={this.handleInputChange} type="text" />
        <button onClick={this.handleSubmit}>submit</button>
        <button onClick={this.handleClear}>clear</button>
        {this.renderList()}
        </div>
    );
  }
}


export default App;
