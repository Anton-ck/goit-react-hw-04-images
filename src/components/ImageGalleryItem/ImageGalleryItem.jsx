import PropTypes from 'prop-types';
import { Component } from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';


class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toogleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { id, webformatURL, largeImageURL } = this.props;
    const { showModal } = this.state;

    return (
      <>
        <GalleryItem key={id}>
          <GalleryItemImage
            src={webformatURL}
            onClick={this.toogleModal}
            loading="lazy"
          />
        </GalleryItem>
  
        {showModal && (
          <Modal imageURL={largeImageURL} onClose={this.toogleModal} />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
