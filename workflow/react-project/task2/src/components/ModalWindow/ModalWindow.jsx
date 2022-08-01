import React from 'react';
import { useSelector } from 'react-redux';
import AuthModal from './AuthModal/AuthModal';
import ModalHeader from './ModalHeader/ModalHeader';
import classes from './ModalWindow.module.css';
import RandomCocktailModal from './RandomCcktailModal/RandomCocktailModal';

const ModalWindow = ({
  closeModal, isShown, title,
}) => {
  const isAuth = useSelector((state) => state.modal.isAuthModal);

  return (

    isShown && (
    <div aria-hidden="true" className={classes.modal} onClick={closeModal}>
      <div
        aria-hidden="true"
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader title={title} closeModal={closeModal} />
        {isAuth ? <AuthModal /> : <RandomCocktailModal />}
      </div>
    </div>
    )
  );
};
export default ModalWindow;
