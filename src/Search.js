import React from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import BoxIcon from './BoxIcon.js'
import { inject, observer } from 'mobx-react';
import StoreFunctions from './utils/StoreFunctions.js';

@inject('SearchStore', 'UserStore')
@observer
class Search extends React.Component {

  render() {
    const { SearchStore, UserStore } = this.props;
    return(
      <TextField
        name={this.props.name}
        id={this.props.name}
        label={this.props.label}
        placeholder={this.props.placeholder}
        value={this.props.store[this.props.name]}
        variant="outlined"
        onChange={e => StoreFunctions.changeStoreValue({
          storeKey: this.props.name,
          value: e.target.value,
          store: this.props.storename
        })}
        fullWidth
        InputProps={{
          endAdornment: (
          <InputAdornment position={'end'} >
            <BoxIcon field={this.props.name} search={this.props.search}/>
          </InputAdornment>)
        }}
      />
    )
  }

}

export default Search;