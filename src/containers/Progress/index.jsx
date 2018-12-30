import React, { PureComponent } from 'react';
import { LinearProgress } from '@material-ui/core';
import { connect } from 'react-redux';

class Prog extends PureComponent {
  render() {
    if (this.props.progressing) {
      return (
        <div className="progressFixed">
          <LinearProgress className="zProgress" />
        </div>
      );
    }
    return null;
  }
}

export default connect(state => ({
  progressing: state.progressing,
}))(Prog);
