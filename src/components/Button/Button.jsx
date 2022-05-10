import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ handleLoadMore }) => {
  return (
    <div>
      <button onClick={handleLoadMore} type="button" className={s.button}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  handleLoadMore: PropTypes.func,
};

export default Button;
