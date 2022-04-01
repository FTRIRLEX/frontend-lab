import { createReducer } from '@reduxjs/toolkit';
import {
  loginBegin,
  loginSuccess,
  loginFailure,
  registrationBegin,
  registrationSuccess,
  registrationFailure,
  setUsername,
} from '../Auth';

const initialState = {
  error: null,
  user: {},
  token: null,
  loading: false,
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(loginBegin, (state) => {
      state.loading = true;
    })
    .addCase(loginSuccess, (state, action) => {
      state.loading = false;
      state.token = action.payload.data.token;
    })
    .addCase(loginFailure, (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.payload.error;
    })
    .addCase(registrationBegin, (state) => {
      state.loading = true;
    })
    .addCase(registrationSuccess, (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
    })
    .addCase(registrationFailure, (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.payload.error;
    })
    .addCase(setUsername, (state, action) => {
      state.user.username = action.payload.data;
    });
});
