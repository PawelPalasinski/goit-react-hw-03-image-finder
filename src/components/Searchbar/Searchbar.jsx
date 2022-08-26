import React, { Component } from 'react';

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
      // class="searchbar"
      >
        <form
          onChange={this.handleFormSubmit}
          // class="form"
        >
          <button
            type="submit"
            // class="button"
          >
            <span
            // class="button-label"
            >
              Search
            </span>
          </button>

          <input
            name="input"
            // className="input"
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
