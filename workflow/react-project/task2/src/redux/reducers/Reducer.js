import { createReducer, createAction } from '@reduxjs/toolkit';

export const openModalAction = createAction('OPEN MODAL');
export const closeModalAction = createAction('CLOSE_MODAL');
export const openAuthModal = createAction('OPEN_AUTH_MODAL');

const defaultState = {
  isModalOpen: false,
  isAuthModal: false,
};

export default createReducer(defaultState, (builder) => {
  builder
    .addCase(openModalAction, (state) => {
      state.isModalOpen = true;
      state.isAuthModal = false;
    })
    .addCase(closeModalAction, (state) => {
      state.isModalOpen = false;
      state.isAuthModal = false;
    })
    .addCase(openAuthModal, (state) => {
      state.isModalOpen = true;
      state.isAuthModal = true;
    });
});
