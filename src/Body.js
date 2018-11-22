import React from 'react';
import SearchBlock from './SearchBlock';
import NicknamePrompt from './NicknamePrompt';

import { inject, observer } from 'mobx-react';

@inject('UserStore')
@observer
class Body extends React.Component {

  render() {
    const { UserStore } = this.props;
    if ( !UserStore.nicknameSet ) {
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