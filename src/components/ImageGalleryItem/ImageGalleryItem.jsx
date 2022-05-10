import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ element, toggleModal }) => {
  const { webformatURL, largeImageURL, tags } = element;

  return (
    <li className={s.imageGalleryItem}>
      <img
        onClick={() => {
          toggleModal({ largeImageURL, tags });
        }}
        className={s.imageGalleryItemImage}
        src={webformatURL}
        alt={tags}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  element: PropTypes.object,
  toggleModal: PropTypes.func,
};

export default ImageGalleryItem;
