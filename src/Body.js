import React from 'react';
import SearchBlock from './SearchBlock';
import NicknamePrompt from './NicknamePrompt';

class Body extends React.Component {

  state = {
    nickname: false,
  }
  
  render() {
    if ( !this.state.nickname ) {
      return(
        <NicknamePrompt />
      )
    }
    else {
      return(
        <SearchBlock />
      )
    }
  }
}

export default Body;