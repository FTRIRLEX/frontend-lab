import React from 'react';
import classes from './AuthButton.module.css';

const AuthButton = ({ openModal }) => (
  <button type="button" className={classes.MyButton} onClick={openModal}>
    Get Started
  </button>
);

export default AuthButton;
