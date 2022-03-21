import {
  FETCH_BEGIN, FETCH_SUCCES, FETCH_FAILED, openModalAction,
} from './actions/ActionsType';

const fetchRandomCocktailSuccess = (data) => ({
  type: FETCH_SUCCES,
  payload: {
    ...data,
  },
});

const fetchRandomCocktailStarted = () => ({
  type: FETCH_BEGIN,
});

const fetchRandomCocktailFailure = (error) => ({
  type: FETCH_FAILED,
  payload: {
    error,
  },
});

const fetchRandomCocktail = () => (dispatch) => {
  dispatch(openModalAction());
  dispatch(fetchRandomCocktailStarted());
  fetch('http://stdlab-api.herokuapp.com/api/cocktails/random/')
    .then((result) => result.json())
    .then((res) => dispatch(fetchRandomCocktailSuccess(res.drinks)))
    .catch((err) => dispatch(fetchRandomCocktailFailure(err.message)));
};

export default fetchRandomCocktail;
