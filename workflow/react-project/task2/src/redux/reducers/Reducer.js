import { createReducer, createAction } from '@reduxjs/toolkit';

export const openModalAction = createAction('OPEN MODAL');
export const closeModalAction = createAction('CLOSE_MODAL');

const defaultState = {
  isModalOpen: false,
  cocktail: {},
};

export default createReducer(defaultState, (builder) => {
  builder
    .addCase(openModalAction, (state) => {
      state.isModalOpen = true;
    })
    .addCase(closeModalAction, (state) => {
      state.isModalOpen = false;
    });
});
