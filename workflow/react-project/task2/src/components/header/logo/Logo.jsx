import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import classes from './Logo.module.css';

function Logo() {
  return (
    <div className={classes.logoWrapper}>
      <FontAwesomeIcon className={classes.icon} icon={faCocktail} />
      <span className={classes.textLogo}>Cocktail App</span>
    </div>
  );
}

export default Logo;
