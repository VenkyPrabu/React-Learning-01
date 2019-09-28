import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    length : 0,
    text: ''
  }

  inputChangeHandler = (event) => {
    this.setState({length: event.target.value.length, text:event.target.value })
  }

  deleteCharHandler = (index) => {
    const text = this.state.text.split('');
    text.splice(index,1);
    this.setState({length: text.join('').length, text: text.join('')});
  }

  render () {
      
    const charComps = this.state.text.split('').map((char,index) => {
      return <CharComponent char={char} key={index} click={() => this.deleteCharHandler(index)} />
    });

    return (
        <div className="App" >
            <input type="text" onChange={this.inputChangeHandler} value={this.state.text} />
            <p>{this.state.text}</p>
            <p>Length : {this.state.length}</p>
            <ValidationComponent length={this.state.length} />
            {charComps}
        </div>
    )
  };




  //Assignment 1
  // state = {
  //   username: 'default'
  // }

  // userNameChangehandler = (event) => {
  //   this.setState({username: event.target.value});
  // };

  // render() {
  //   return (
  //     <div className="App">
  //       <UserInput username={this.state.username} change={this.userNameChangehandler}/>
       
  //       <UserOutput username={this.state.username} />
  //       <UserOutput username={this.state.username} />
  //       <UserOutput username="static username" />
  //     </div>
  //   );
  // }
}

export default App;
