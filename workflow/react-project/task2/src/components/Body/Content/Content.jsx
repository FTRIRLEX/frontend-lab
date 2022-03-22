import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalAction } from '@redux/reducers/Reducer';
import fetchRandomCocktail from '@redux/FetchCocktail';
import ContentAbout from './ContentAbout/ContentAbout';
import ImageButton from './ImageButton/ImageButton';
import ModalWindow from '../../ModalWindow/ModalWindow';
import classes from './Content.module.css';

const Content = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

  const openModal = useCallback(() => {
    dispatch(fetchRandomCocktail());
  }, [isModalOpen]);

  const closeModal = useCallback(() => {
    dispatch(closeModalAction());
  }, [isModalOpen]);

  return (
    <>
      <div className={classes.contentWrapper}>
        <ContentAbout className={classes.content} />
        <ImageButton openModal={openModal} className={classes.img} />
      </div>
      <ModalWindow
        isShown={isModalOpen}
        closeModal={closeModal}
        title="Random Cocktail"
      />
    </>
  );
};

export default Content;
