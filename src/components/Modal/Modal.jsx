import PropTypes from 'prop-types';
import { Overlay, ModalArea, ModalImg, CloseButton } from './Modal.styled';
import { PureComponent } from 'react';
import { VscChromeClose } from 'react-icons/vsc';

class Modal extends PureComponent {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    const { imageURL, onClose } = this.props;

    return (
      <Overlay onClick={this.handleBackDropClick}>
        <ModalArea>
          <CloseButton type="submit" onClick={onClose}>
            <VscChromeClose size="34px" fill="#fff" />
          </CloseButton>

          <ModalImg src={imageURL} alt="Something img" width="100%" />
        </ModalArea>
      </Overlay>
    );
  }
}

export default Modal;

Modal.propTypes = {
  imageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
