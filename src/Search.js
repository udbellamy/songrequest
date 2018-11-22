import React from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import BoxIcon from './BoxIcon.js'

class Search extends React.Component {

  state = {
    value: "",
    clicked: false
  }

  handleClick() {
    this.setState({
      clicked: true,
    })
  }

  render() {
    return(
      <TextField
        name={this.props.name}
        id={this.props.name}
        label={this.props.label}
        placeholder={this.props.placeholder}
        value={this.state.value}
        variant="outlined"
        onChange={e => this.setState({value: e.target.value}) }
        fullWidth
        InputProps={{
          endAdornment: (
          <InputAdornment position={'end'} >
            <BoxIcon />
          </InputAdornment>)
        }}
      />
    )
  }

}

export default Search;