import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import GalleryWrap from './GalleryWrap/GalleryWrap';
import Modal from './Modal/Modal';
import s from './App.module.css';

class App extends Component {
  state = {
    query: '',
    isModalOpen: false,
    modalImage: null,
  };

  onSubmitSearch = query => {
    this.setState({ query });
  };

  toggleModal = (modalData = null) => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
      modalImage: modalData,
    }));
  };

  render() {
    const { query, modalImage } = this.state;

    return (
      <div className={s.app}>
        <Searchbar onSubmitSearch={this.onSubmitSearch} />
        <GalleryWrap query={query} toggleModal={this.toggleModal} />
        {this.state.isModalOpen && (
          <Modal modalData={modalImage} toggleModal={this.toggleModal} />
        )}
      </div>
    );
  }
}

export default App;
