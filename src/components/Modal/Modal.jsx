import { createPortal } from 'react-dom';
import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.getElementById('modal');

class Modal extends Component {
  handleEscape = event => {
    if (event.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscape);
  }

  render() {
    const { modalData, toggleModal } = this.props;
    return createPortal(
      <div
        onClick={() => {
          toggleModal();
        }}
        className={s.overlay}
      >
        <img
          className={s.modal}
          src={modalData.largeImageURL}
          alt={modalData.tags}
        />
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  modalImage: PropTypes.object,
  toggleModal: PropTypes.func,
};

export default Modal;
