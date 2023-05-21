import PropTypes from 'prop-types';
import { useState } from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';


const ImageGalleryItem = ({ id, webformatURL, largeImageURL}) => {
  
  const [showModal, setShowModal] = useState(false);

  const toogleModal = () => {
    return setShowModal(prevsetShowModal => !showModal);
  };

    return (
      <>
        <GalleryItem key={id}>
          <GalleryItemImage
            src={webformatURL}
            onClick={toogleModal}
            loading="lazy"
          />
        </GalleryItem>
  
        {showModal && (
          <Modal imageURL={largeImageURL} onClose={toogleModal} />
        )}
      </>
    );
  }

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
