import React, { useCallback, useState } from 'react';
import ContentAbout from './ContentAbout/ContentAbout';
import ImageButton from './ImageButton/ImageButton';
import ModalWindow from '../../ModalWindow/ModalWindow';

import classes from './Content.module.css';

function Content() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setModalOpen(!isModalOpen);
  }, [isModalOpen]);

  return (
    <>
      <div className={classes.contentWrapper}>
        <ContentAbout className={classes.content} />
        <ImageButton openModal={toggleModal} className={classes.img} />
      </div>
      <ModalWindow
        isShown={isModalOpen}
        closeModal={toggleModal}
        title="Random Cocktail"
      />
    </>
  );
}

export default Content;
