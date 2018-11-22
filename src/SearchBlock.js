import React from 'react';
import Search from './Search.js';

class SearchBlock extends React.Component {

  state = {
    clicked: false
  }
  
  render() {
    return(
      <div className="App-searchBlock">
        <div className="App-searchInner">

          <div className="App-searchBox">
            <Search name="artist" label="Artiste" placeholder="AC/DC" />
          </div>

          <div className="App-searchBox">
            <Search name="song" label="Chanson" placeholder="Highway to Hell" />
          </div>
          
        </div>
      </div>
    )
  }
}

export default SearchBlock;