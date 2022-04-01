import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import modalReducer from './reducers/Reducer';
import randomCocktail from './reducers/RandomCocktailReducer';
import AuthReducer from './reducers/AuthReducer';

const RootReducers = combineReducers(
  {
    modal: modalReducer,
    cocktail: randomCocktail,
    auth: AuthReducer,
  },
);

const store = configureStore({
  reducer: RootReducers,
  middleware: [thunk],
});
export default store;
