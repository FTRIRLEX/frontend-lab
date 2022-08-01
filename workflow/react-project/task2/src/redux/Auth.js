import { createAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { closeModalAction } from './reducers/Reducer';

const axios = require('axios');

export const loginBegin = createAction('LOGIN_BEGIN');
export const loginSuccess = createAction('LOGIN_SUCCES', (data) => ({
  payload: {
    ...data,
  },
}));
export const loginFailure = createAction('LOGIN_FAILURE', (error) => ({
  payload: {
    error,
  },
}));
export const registrationBegin = createAction('REGISTRATION_BEGIN');
export const registrationSuccess = createAction('REGISTRATION_SUCCES', (data) => ({
  payload: {
    ...data,
  },
}));
export const registrationFailure = createAction('REGISTRATION_FAILURE', (error) => ({
  payload: {
    error,
  },
}));

export const setUsername = createAction('SET_USERNAME', (data) => ({
  payload: {
    data,
  },
}));

export const login = (data) => (dispatch) => {
  dispatch(loginBegin());
  axios
    .post('http://stdlab-api.herokuapp.com/api/sign-in/', data)
    .then((res) => dispatch(loginSuccess(res)))
    .then(() => {
      dispatch(setUsername(data.name));
    })
    .then(() => dispatch(closeModalAction()))
    .catch((error) => {
      toast.error(error.response.data.message.toString());
      dispatch(loginFailure(error));
    });
};

export const registration = (data) => (dispatch) => {
  dispatch(registrationBegin());
  axios
    .post('http://stdlab-api.herokuapp.com/api/sign-up/', data)
    .then((res) => {
      dispatch(setUsername(data.name));
      dispatch(registrationSuccess(res.data));
    })
    .then(() => dispatch(closeModalAction()))
    .catch((err) => {
      toast.error(err.response.data.error.message.toString());
      dispatch(registrationFailure(err));
    });
};
