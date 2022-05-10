import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

const ImageGallery = ({ data, toggleModal }) => {
  return (
    <ul className={s.imageGallery}>
      {data.map(element => (
        <ImageGalleryItem
          key={element.id}
          element={element}
          toggleModal={toggleModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.array,
  toggleModal: PropTypes.func,
};
export default ImageGallery;
