import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { login, registration } from '@redux/Auth';
import classes from './AuthModal.module.css';
import 'react-toastify/dist/ReactToastify.css';

const Joi = require('joi');

const AuthModal = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [authToggle, setAuthToggle] = useState(true);
  const [dataError, setDataError] = useState(true);
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30)
      .required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  }).with('username', 'password');
  const validateData = () => {
    const validation = schema.validate({
      username,
      password,
    });
    if (validation.error) {
      const error = validation.error.details[0];
      toast(error.context.key === 'username'
        ? 'Wrong username!'
        : 'Wrong password!');
      setDataError(true);
    }
    if (confirmPassword !== password && !authToggle) {
      toast('confrim password != password');
      setDataError(true);
    }
    if (!validation.error) {
      setDataError(false);
    }
  };

  const postData = () => {
    if (!dataError) {
      const data = {
        name: username,
        password: password,
      };
      authToggle ? dispatch(login(data)) : dispatch(registration(data));
    }
  };

  return (
    <div className={classes.authWrapper}>
      <div className={classes.authTitle}>
        {authToggle ? 'Sign In' : 'Sign Up'}
      </div>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Username" id="username" onChange={(e) => setUsername(e.target.value)} onBlur={validateData} />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} id="password" onBlur={validateData} />
        {!authToggle && (
          <>
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              id="confirm_password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={validateData}
            />
          </>
        )}
        <p className={classes.toggleAuth}>
          {authToggle
            ? 'Don\'t have an account? '
            : 'Already signed up? '}
          <span
            onClick={() => setAuthToggle(!authToggle)}
          >
            {authToggle ? 'Sign up' : 'Go to login'}
          </span>
        </p>
        <button
          className={classes.succesBtn}
          onClick={(e) => {
            e.preventDefault();
            validateData();
            postData();
          }}
        >
          {authToggle ? 'Sign In' : 'Sign Up'}
        </button>
      </form>

      <ToastContainer autoClose={2000} />

    </div>
  );
};

export default AuthModal;
