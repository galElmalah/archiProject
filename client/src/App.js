import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = { text:"", subString:""};
  onChange = e => {
    this.setState({text: e.target.value})
    console.log(this.state.text);
  }

  addDot = () => {
    const text = this.state.text;
    axios.post('http://localhost:3000', {text}).then((data) => {
      this.setState({text:data.data})
    })
  } 
  capitalizeWords = () => {
    const text = this.state.text;
    axios.post('http://localhost:3001', {text}).then((data) => {
      this.setState({text:data.data})
    })
  } 

  filterDigits = () => {
    const text = this.state.text;
    axios.post('http://localhost:3002', {text}).then((data) => {
      this.setState({text:data.data})
    })
  }

  filterSpaces = () => {
    const text = this.state.text;
    axios.post('http://localhost:3003', {text}).then((data) => {
      this.setState({text:data.data})
    })
  } 
  filterSpecialChars = () => {
    const text = this.state.text;
    axios.post('http://localhost:3004', {text}).then((data) => {
      this.setState({text:data.data})
    })
  } 
  removeSubString = () => {
    const {text, subString} = this.state;
    axios.post('http://localhost:3005', {text, subString}).then((data) => {
      this.setState({text:data.data})
    })
  }  
  render() {
    const {text, subString} = this.state;
    return (
      <div className="App">
        <div>
          <h1 className="headerPage">
              Microservices Architecture Project
          </h1>
        </div>
        <input value={text} onChange={this.onChange} id={"mainInput"}/>
        <div className={"buttons-container"}>
          <div className={"buttons"}>
            <button onClick={this.addDot}>Add dot</button>
            <button onClick={this.capitalizeWords}>Capitalize words</button>
            <button onClick={this.filterDigits}>Filter digits</button>
            <button onClick={this.filterSpaces}>Filter double spaces</button>
            <button onClick={this.filterSpecialChars}>Filter special chars</button>

          </div>
            <div className={"buttons"}>
              <button onClick={this.removeSubString}>Remove a substring</button>
              <input value={subString} onChange={(e) => this.setState({subString:e.target.value})}/>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
