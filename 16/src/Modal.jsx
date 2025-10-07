import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
class Modal extends React.Component {
  render() {
    const { isOpen, children } = this.props;
    const modalClass = isOpen ? 'modal fade show' : 'modal';
    const modalStyle = isOpen ? { display: 'block' } : { display: 'none' };

    return (
      <div className={modalClass} style={modalStyle} role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

class ModalHeader extends React.Component {
  render() {
    const { toggle, children } = this.props;
    return (
      <div className="modal-header">
        <div className="modal-title">{children}</div>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={toggle}
        ></button>
      </div>
    );
  }
}

class ModalBody extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="modal-body">
        {children}
      </div>
    );
  }
}

class ModalFooter extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="modal-footer">
        {children}
      </div>
    );
  }
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
// END
