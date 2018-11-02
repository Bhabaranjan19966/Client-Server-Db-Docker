import React, { Component } from 'react';
import logo from './gitlab.png';
import './App.css';


class App extends Component {

  test() {
    console.log("clicked");
    const url = "https://github.com/yravinderkumar33/portfolio.git";
    fetch(`/deploy`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: url
    })
      .then(res => { return res.json() })
      .then(res => console.log(res))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a className="App-link" id="loginButton" href="http://localhost:5000/auth"> Connect to Gitlab </a>
          {/* <button onClick={this.test}> test </button> */}
        </header>
      </div>
    );
  }
}

export default App;
