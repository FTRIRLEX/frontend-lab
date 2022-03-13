import React from 'react';
import CloseModalButton from './CloseModalButton/CloseModalButton';
import classes from './ModalHeader.module.css';

function ModalHeader({ closeModal, title }) {
  return (
    <div className={classes.headerWrapper}>
      <h2 className={classes.title}>{title}</h2>
      <CloseModalButton className={classes.icon} onClick={closeModal} />
    </div>
  );
}

export default ModalHeader;
