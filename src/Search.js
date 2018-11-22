import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import BoxIcon from './BoxIcon.js'

class Search extends React.Component {

  state = {
    value: "",
  }

  render() {
    return(
      <TextField
        name="artist"
        id="artist"
        label="Artiste"
        placeholder="ACDC"
        value={this.state.value}
        variant="outlined"
        onChange={e => this.setState({value: e.target.value}) }
        InputProps={{
          endAdornment: (<InputAdornment position={'end'}>
            <BoxIcon filled={this.state.value}/>
          </InputAdornment>)
        }}
      />
    )
  }

}

export default Search;