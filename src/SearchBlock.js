import React from 'react';
import Search from './Search.js';
import { inject, observer } from 'mobx-react';

@inject('SearchStore', 'UserStore')
@observer
class SearchBlock extends React.Component {

  state = {
    clicked: false
  }
  
  render() {
    const { SearchStore } = this.props;
    return(
      <div className="App-searchBlock">
        <div className="App-searchInner">

          <div className="App-searchBox">
            <Search name="artist" label="Artiste" placeholder="AC/DC" store="SearchStore" />
          </div>

          <div className="App-searchBox">
            <Search name="song" label="Chanson" placeholder="Highway to hell" store="SearchStore" />
          </div>
          
        </div>
      </div>
    )
  }
}

export default SearchBlock;