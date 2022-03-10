import React from 'react'
import classes from './MyButton.module.css'


const MyButton = ({openModal}) => {
  return (
    <button className= {classes.MyButton} onClick={openModal}>
      Get Started
    </button>
  )
}

export default MyButton