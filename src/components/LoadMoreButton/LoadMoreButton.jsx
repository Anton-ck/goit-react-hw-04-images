import PropTypes from 'prop-types';
import { LoadMoreBtn } from './LoadMoreButton.styled';

const LoadMoreButton = ({ onClick }) => {
  return (
    <LoadMoreBtn type="button" onClick={onClick}>
      Load more
    </LoadMoreBtn>
  );
};

export default LoadMoreButton;

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
