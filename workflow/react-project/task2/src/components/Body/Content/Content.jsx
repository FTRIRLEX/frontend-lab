import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import fetchRandomCocktail from '@redux/FetchCocktail';
import ContentAbout from './ContentAbout/ContentAbout';
import ImageButton from './ImageButton/ImageButton';
import classes from './Content.module.css';

const Content = () => {
  const dispatch = useDispatch();

  const openModal = useCallback(() => {
    dispatch(fetchRandomCocktail());
  }, []);

  return (
    <div className={classes.contentWrapper}>
      <ContentAbout className={classes.content} />
      <ImageButton openModal={openModal} className={classes.img} />
    </div>
  );
};

export default Content;
