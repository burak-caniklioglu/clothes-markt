import React from 'react';
import './modal.scss';
import propTypes from 'prop-types';

function Modal({ onClose, isVisible, children }) {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose(false);
  };
  return (
    <div className="modal-section" id="wrapper" onClick={handleClose}>
      <div className="modal-container">
        <div className="model-wrapper">{children}</div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: propTypes.node.isRequired,
  isVisible: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired,
};

export default Modal;



