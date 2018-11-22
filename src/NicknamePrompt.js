import React from 'react';
import PropTypes from 'prop-types';

import { inject, observer } from 'mobx-react';
import StoreFunctions from './utils/StoreFunctions.js';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: '10rem',
  },
  input: {
    display: 'none',
  },
});

@inject('UserStore')
@observer
class NicknamePrompt extends React.Component {

  render() {
    const { classes } = this.props;
    return(
      <Button
        onClick={e => StoreFunctions.changeStoreValue({
            storeKey: "nickname",
            value: "toto",
            store: "UserStore"
        })}
        variant="contained"
        color="primary"
        className={classes.button}
      > Go </Button>

    )
  }
}

NicknamePrompt.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles) (NicknamePrompt);