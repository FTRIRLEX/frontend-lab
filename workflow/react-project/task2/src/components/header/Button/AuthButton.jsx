import React from 'react';
import classes from './AuthButton.module.css';

function AuthButton({ openModal }) {
  return (
    <button type="button" className={classes.MyButton} onClick={openModal}>
      Get Started
    </button>
  );
}

export default AuthButton;
