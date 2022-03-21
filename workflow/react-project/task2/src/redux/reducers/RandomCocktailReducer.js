import { FETCH_BEGIN, FETCH_SUCCES, FETCH_FAILED } from '../actions/ActionsType';

const initialState = {
  loading: true,
  error: null,
  cocktail: {},
};

export default function randomCocktail(state = initialState, action) {
  switch (action.type) {
    case FETCH_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCES:
      return {
        ...state,
        loading: false,
        error: null,
        cocktail: action.payload,
      };
    case FETCH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
