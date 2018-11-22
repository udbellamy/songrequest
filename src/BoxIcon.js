import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

class BoxIcon extends React.Component {

  state = {
    clicked: false,
  }
  
  render() {
    const {filled} = this.props
    if (!filled) {
      return(
        <SearchIcon />
      )
    }
    else {
      return(
        <CloseIcon />
      )
    }
  }

}

export default BoxIcon;