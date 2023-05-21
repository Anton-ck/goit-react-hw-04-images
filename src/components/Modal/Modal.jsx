import PropTypes from 'prop-types';
import { Overlay, ModalArea, ModalImg, CloseButton } from './Modal.styled';
import { useEffect } from 'react';
import { VscChromeClose } from 'react-icons/vsc';

const Modal = ({ imageURL, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleBackDropClick}>
      <ModalArea>
        <CloseButton type="submit" onClick={onClose}>
          <VscChromeClose size="34px" fill="#fff" />
        </CloseButton>

        <ModalImg src={imageURL} alt="Something img" width="100%" />
      </ModalArea>
    </Overlay>
  );
};

export default Modal;

Modal.propTypes = {
  imageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
