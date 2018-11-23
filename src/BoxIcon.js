import React from 'react';
import './Material.css';

import { inject, observer } from 'mobx-react';
import StoreFunctions from './utils/StoreFunctions.js';

@inject('SearchStore')
@observer
class BoxIcon extends React.Component {

  render() {
    const { SearchStore, field, search } = this.props;
    if ( !SearchStore[field] && search ) {
      return(
        <i className="material-icons md-dark md-inactive">search</i>
      )  
    }
    else {
      return(
        <i 
          className="material-icons md-dark md-inactiveclose"
          onClick={e => StoreFunctions.changeStoreValue({
            storeKey: field,
            value: "",
            store: this.props.storename
          })}  
        >close</i>
      )
    }
  }

}

export default BoxIcon;