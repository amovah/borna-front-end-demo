import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, ButtonToolbar } from 'reactstrap';
import classNames from 'classnames';

class ModalHandler extends PureComponent {
  toggle = () => {
    console.log('toggle');
    // store.dispatch(closeModal())
  }

  render() {
    if (this.props.modal.isOpen) {
      const {
        color, btn, title, message, colored, header,
      } = this.props.modal;
      let Icon;

      switch (color) {
        case 'primary':
          Icon = <span className="lnr lnr-pushpin modal__title-icon" />;
          break;
        case 'success':
          Icon = <span className="lnr lnr-thumbs-up modal__title-icon" />;
          break;
        case 'warning':
          Icon = <span className="lnr lnr-flag modal__title-icon" />;
          break;
        case 'danger':
          Icon = <span className="lnr lnr-cross-circle modal__title-icon" />;
          break;
        default:
          break;
      }
      const modalClass = classNames({
        'modal-dialog--colored': colored,
        'modal-dialog--header': header,
      });

      return (
        <Modal
          isOpen={this.props.modal.isOpen}
          toggle={this.toggle}
          className={`modal-dialog--${color} ${modalClass}`}
        >
          <div className="modal__header">
            <h4 className="bold-text  modal__title">{title}</h4>
          </div>
          <div className="modal__body">
            {message}
          </div>
          <ButtonToolbar className="modal__footer">
            <Button onClick={this.toggle}>Cancel</Button>{' '}
            <Button outline={colored} color={color} onClick={this.toggle}>Ok</Button>
          </ButtonToolbar>
        </Modal>
      );
    }

    return null;
  }
}

export default connect(state => ({
  modal: state.modal,
}))(ModalHandler);
