import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalWindow from '../ModalWindow/ModalWindow';
import AuthButton from './Button/AuthButton';
import Logo from './Logo/Logo';
import classes from './BodyHeader.module.css';
import { closeModalAction, openAuthModal } from '../../redux/reducers/Reducer';

const BodyHeader = () => {
  const dispatch = useDispatch();
  const openModal = useCallback(() => {
    dispatch(openAuthModal());
  }, []);
  const isAuth = useSelector((state) => state.modal.isAuthModal);
  const title = isAuth ? 'Authentication' : 'Random Cocktail';

  const closeModal = useCallback(() => {
    dispatch(closeModalAction());
  }, []);
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const userName = useSelector((state) => state.auth.user?.username);
  return (
    <>
      <div className={classes.headerWrapper}>
        <Logo />
        {userName
          ? (
            <p className={classes.userName}>
              {userName}
            </p>
          )
          : <AuthButton openModal={openModal} />}
      </div>
      <ModalWindow
        isShown={isModalOpen}
        closeModal={closeModal}
        title={title}
      />
    </>
  );
};

export default BodyHeader;
