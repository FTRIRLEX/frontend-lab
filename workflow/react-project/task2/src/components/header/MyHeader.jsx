import React, { useState } from 'react'
import ModalWindow from '../ModalWindow/ModalWindow'
import MyButton from './button/MyButton'
import Logo from './logo/Logo'
import classes from './MyHeader.module.css'

const MyHeader = () => {

  const [isModalOpen, setModalOpen] = useState(false)


  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }
  return (
    <>
    <div className={classes.headerWrapper}>
        <Logo></Logo>
        <MyButton openModal={openModal}></MyButton>
    </div>
    <ModalWindow isShown={isModalOpen} closeModal={closeModal} title='Sign In'/> 
    </>
  )
}

export default MyHeader