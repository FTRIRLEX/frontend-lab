import React, { useState, useCallback } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';
import AuthButton from './Button/AuthButton';
import Logo from './Logo/Logo';
import classes from './BodyHeader.module.css';

function BodyHeader() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setModalOpen(!isModalOpen);
  }, [isModalOpen]);
  return (
    <>
      <div className={classes.headerWrapper}>
        <Logo />
        <AuthButton openModal={toggleModal} />
      </div>
      <ModalWindow
        isShown={isModalOpen}
        closeModal={toggleModal}
        title="Sign In"
      />
    </>
  );
}

export default BodyHeader;
