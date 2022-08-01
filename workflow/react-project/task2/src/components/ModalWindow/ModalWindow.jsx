import React from 'react';
import ModalHeader from './ModalHeader/ModalHeader';
import classes from './ModalWindow.module.css';

const ModalWindow = ({ closeModal, isShown, title }) => (
  isShown && (
  <div aria-hidden="true" className={classes.modal} onClick={closeModal}>
    <div
      aria-hidden="true"
      className={classes.modalContent}
      onClick={(e) => e.stopPropagation()}
    >
      <ModalHeader title={title} closeModal={closeModal} />
    </div>
  </div>
  )
);

export default ModalWindow;
