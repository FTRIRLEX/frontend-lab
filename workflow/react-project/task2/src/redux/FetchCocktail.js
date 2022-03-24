import { createAction } from '@reduxjs/toolkit';
import { openModalAction } from './reducers/Reducer';

export const fetchRandomCocktailSuccess = createAction('FETCH_SUCCES', (data) => ({
  payload: {
    ...data,
  },
}));

export const fetchRandomCocktailStarted = createAction('FETCH_BEGIN');

export const fetchRandomCocktailFailure = createAction('FETCH_FAILDE', (error) => ({
  payload: {
    error,
  },
}));

export const fetchRandomCocktail = () => (dispatch) => {
  dispatch(openModalAction());
  dispatch(fetchRandomCocktailStarted());
  fetch('http://stdlab-api.herokuapp.com/api/cocktails/random/')
    .then((result) => result.json())
    .then((res) => dispatch(fetchRandomCocktailSuccess(res.drinks)))
    .catch((err) => dispatch(fetchRandomCocktailFailure(err.message)));
};

export default fetchRandomCocktail;
