import React from 'react';
import Search from './Search.js';

class SearchBlock extends React.Component {
  
  render() {
    return(
      <div className="App-searchBlock">
        <div className="App-searchBox">
          <Search />
        </div>
        <div className="App-searchBox">
          <Search />
        </div>
      </div>
    )
  }
}

export default SearchBlock;