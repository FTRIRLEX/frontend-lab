import React, { useState } from 'react'
import ContentAbout from './ContentAbout/ContentAbout'
import ImageButton from './ImageButton/ImageButton'
import ModalWindow from '../../ModalWindow/ModalWindow'

import classes from './Content.module.css'

const Content = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <>
      <div className={classes.contentWrapper}>
        <ContentAbout className={classes.content} />
        <ImageButton openModal={openModal} className={classes.img} />
      </div>
      <ModalWindow isShown={isModalOpen} closeModal={closeModal} title='Random Cocktail' />

    </>
  )
}

export default Content