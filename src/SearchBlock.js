import React from 'react';
import Search from './InputBox.js';
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
          <Search name="artist" label="Artiste" placeholder="AC/DC" storename="SearchStore" store={SearchStore} search={true} />
          <Search name="song" label="Chanson" placeholder="Highway to hell" storename="SearchStore" store={SearchStore} search={true} />
        </div>
      </div>
    )
  }
}

export default SearchBlock;