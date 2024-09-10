import React, { Component } from 'react';
import chunky from './chunky.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="background-container"> </div>
          <div className="content">
          <div className="flex-container">
          <img src={chunky} className="ChunkyDog" alt="chunky" />
          <img src={chunky} className="ChunkyDog" alt="chunky" />
          </div>
          <p>
            Kosti was here!
          </p>

          </div>
        </header>
      </div>
    );
  }
}

export default App;
