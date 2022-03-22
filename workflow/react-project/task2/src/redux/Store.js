import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import modalReducer from './reducers/Reducer';
import randomCocktail from './reducers/RandomCocktailReducer';

const RootReducers = combineReducers(
  {
    modal: modalReducer,
    cocktail: randomCocktail,
  },
);

const store = configureStore({
  reducer: RootReducers,
  middleware: [thunk],
});
export default store;
