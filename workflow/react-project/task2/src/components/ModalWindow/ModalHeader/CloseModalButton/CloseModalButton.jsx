import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import classes from './CloseModalButton.module.css';

const CloseModalButton = ({ onClick }) => (
  <button type="button" onClick={onClick} className={classes.button}>
    <FontAwesomeIcon className={classes.icon} icon={faTimes} />
  </button>
);

export default CloseModalButton;
