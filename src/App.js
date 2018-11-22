import React, { Component } from 'react';
import './App.css';
import './Material.css';

import Header from './Header.js';
import Body from './Body.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-body">
          <Body />
        </div>
      </div>
    );
  }
}

export default App;
