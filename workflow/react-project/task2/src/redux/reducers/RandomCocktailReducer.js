import { createReducer } from '@reduxjs/toolkit';
import { fetchRandomCocktailStarted, fetchRandomCocktailSuccess, fetchRandomCocktailFailure } from '../FetchCocktail';

const initialState = {
  loading: false,
  error: null,
  cocktail: {},
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(fetchRandomCocktailStarted, (state) => {
      state.loading = true;
    })
    .addCase(fetchRandomCocktailSuccess, (state, action) => {
      state.loading = false;
      state.cocktail = action.payload;
    })
    .addCase(fetchRandomCocktailFailure, (state, action) => {
      state.loading = false;
      state.cocktail = null;
      state.error = action.payload;
    });
});
