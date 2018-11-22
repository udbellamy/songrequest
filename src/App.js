import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import SearchBlock from './SearchBlock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-body">
          <div>
            <SearchBlock />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
