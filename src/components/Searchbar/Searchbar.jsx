import React, { Component } from 'react';
import styles from './Searchbar/Searchbar.module.css';

class Searchbar extends Component {
  handleFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.input.value;
    return console.log(input);
  };

  render() {
    return (
      <header
      className={styles.searchbar}
      >
        <form
          onChange={this.handleFormSubmit}
          className={styles.form}
        >
          <button
            type="submit"
            className={styles.button}
          >
            <span
            className={styles.buttonLabel}
            >
              Search
            </span>
          </button>

          <input
            name="input"
            className={styles.input}
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
