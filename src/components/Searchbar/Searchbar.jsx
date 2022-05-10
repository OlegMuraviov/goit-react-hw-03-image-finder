import { Component } from 'react';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  onChangeInput = event => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form
          className={s.form}
          onSubmit={e => {
            e.preventDefault();
            this.props.onSubmitSearch(this.state.inputValue);
          }}
        >
          <button type="submit" className={s.button}>
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.onChangeInput}
            value={this.state.inputValue}
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
