import React from 'react';
// import { useSelector } from 'react-redux';
import ModalContent from './ModalContent/ModalContent';
import ModalHeader from './ModalHeader/ModalHeader';
import classes from './ModalWindow.module.css';

const ModalWindow = ({
  closeModal, isShown, title,
}) => (
  // const cocktail = useSelector((state) => state.cocktail);

  isShown && (
    <div aria-hidden="true" className={classes.modal} onClick={closeModal}>
      <div
        aria-hidden="true"
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader title={title} closeModal={closeModal} />
        <ModalContent />
      </div>
    </div>
  )
);
export default ModalWindow;
