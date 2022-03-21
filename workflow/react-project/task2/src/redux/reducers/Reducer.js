import { OPEN_MODAL, CLOSE_MODAL, OPEN_RANDOM_COCKTAIL } from '../actions/ActionsType';

const defaultState = {
  isModalOpen: false,
  cocktail: {},
};

const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_MODAL: return { ...state, isModalOpen: true };
    case CLOSE_MODAL: return { ...state, isModalOpen: false };
    case OPEN_RANDOM_COCKTAIL: return { ...state, isModalOpen: true, cocktail: action.payload };
    default: return state;
  }
};

export default modalReducer;
