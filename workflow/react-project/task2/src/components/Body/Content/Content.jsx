import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContentAbout from './ContentAbout/ContentAbout';
import ImageButton from './ImageButton/ImageButton';
import ModalWindow from '../../ModalWindow/ModalWindow';
import classes from './Content.module.css';
import { closeModalAction } from '../../../redux/actions/ActionsType';
import fetchRandomCocktail from '../../../redux/FetchCocktail';

const Content = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

  const openModal = () => {
    dispatch(fetchRandomCocktail());
  };
  const closeModal = () => {
    dispatch(closeModalAction());
  };

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
