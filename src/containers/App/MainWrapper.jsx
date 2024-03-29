import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ThemeProps } from '../../shared/prop-types/ReducerProps';
import Progress from 'Root/containers/Progress';
import ModalHandler from 'Root/containers/ModalHandler';

class MainWrapper extends PureComponent {
  static propTypes = {
    theme: ThemeProps.isRequired,
    children: PropTypes.element.isRequired,
  };

  render() {
    const { theme } = this.props;

    return (
      <div className={theme.className}>
        <Progress />
        <ModalHandler />
        <div className="wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  theme: state.theme,
}))(MainWrapper);
