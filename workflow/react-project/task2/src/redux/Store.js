import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import modalReducer from './reducers/Reducer';
import randomCocktail from './reducers/RandomCocktailReducer';

const RootReducers = combineReducers(
  {
    modal: modalReducer,
    cocktail: randomCocktail,
  },
);

const store = createStore(
  RootReducers,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);
export default store;
