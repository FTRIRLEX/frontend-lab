import React from 'react';
import ModalHeader from './ModalHeader/ModalHeader';
import classes from './ModalWindow.module.css';

function ModalWindow({ closeModal, isShown, title }) {
  return (
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
}

export default ModalWindow;
