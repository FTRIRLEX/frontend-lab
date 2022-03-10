import React from 'react'
import classes from './ImageButton.module.css'

const ImageButton = ({openModal}) => {
  return (
    <div className={classes.imgButton}  onClick={openModal}>
        <div className={classes.text}>
            Press on glass to get a random coctail
        </div>
    </div>
  )
}

export default ImageButton