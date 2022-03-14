import React from 'react';
import classes from './ImageButton.module.css';

const ImageButton = ({ openModal }) => (
  <div aria-hidden="true" className={classes.imgButton} onClick={openModal} onKeyDown={() => {}}>
    <div className={classes.text}>Press on glass to get a random coctail</div>
  </div>
);

export default ImageButton;
