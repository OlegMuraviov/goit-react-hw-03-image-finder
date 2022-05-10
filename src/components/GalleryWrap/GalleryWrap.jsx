import { Component } from 'react';
import { pixabayApi } from 'utils/pixabayApi';
import PropTypes from 'prop-types';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import s from './GalleryWrap.module.css';

class GalleryWrap extends Component {
  state = {
    data: [],
    page: 1,
    total: 0,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ data: [], page: 1 });
    }
    if (
      prevState.page !== this.state.page ||
      (prevProps.query !== this.props.query && this.state.page === 1)
    ) {
      if (this.props.query === '') {
        this.setState({ error: new Error('Please input value') });
      } else {
        this.getImagesFromApi();
      }
    }
  }

  getImagesFromApi = () => {
    this.setState({ isLoading: true, error: null });
    pixabayApi({ query: this.props.query, page: this.state.page })
      .then(({ data, totalHits }) => {
        if (!data.length) {
          throw new Error('No images ');
        }
        this.setState(prev => ({
          data: [...prev.data, ...data],
          totalHits,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() =>
        this.setState({
          isLoading: false,
        })
      );
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { data, isLoading, error, totalHits } = this.state;

    return (
      <div className={s.galleryWrap}>
        {isLoading && <Loader />}
        <ImageGallery data={data} toggleModal={this.props.toggleModal} />
        {data.length > 0 && data.length < totalHits && (
          <Button handleLoadMore={this.handleLoadMore} />
        )}
        {error && <h2>{error.message}</h2>}
      </div>
    );
  }
}

GalleryWrap.propTypes = {
  query: PropTypes.string,
  toggleModal: PropTypes.func,
};

export default GalleryWrap;
