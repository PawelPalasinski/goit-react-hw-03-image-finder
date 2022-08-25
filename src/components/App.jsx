import PropTypes from "prop-types";
import React, { Component } from "react";

import Notiflix from 'notiflix';
import axios from 'axios';
import apiPixabax from "./services/apiPixabay";

import SpinnerLoader from "./Loader/Loader";


class App extends Component {
  state = {
    page: 1,
    name: '',
  }

  
  fetchPics = () => {
    const name = 'cat';
    const page = this.page;
    apiPixabax(name, page)
    .then(name => {
      let totalPages = name.totalHits;

      if (name.hits.length > 0) {
        Notiflix.Notify.success(`Hooray! We found ${name.totalHits} images.`);
        // renderGallery(name);
        // new SimpleLightbox('.gallery a');
        // closeBtn.style.display = 'block';
        // closeBtn.addEventListener('click', () => {
        //   gallery.innerHTML = '';
        //   closeBtn.style.display = 'none';
        // });

        if (page < totalPages) {
          // loadBtn.style.display = 'block';
        } else {
          // loadBtn.style.display = 'none';
          Notiflix.Notify.info(
            "We're sorry, but you've reached the end of search results."
          );
        }
      } else {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        // gallery.innerHTML = '';
      }
    })
    .catch(error => console.log('ERROR: ' + error));
  }
  // a)piPixabax();


  // componentDidMount() { 

  // }

  // componentDidUpdate(prevState) { 

  // }

  render() { 
  apiPixabax();
    console.log("dziala");
    this.fetchPics();
    return (
    <>
      <SpinnerLoader/>
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
      </div>
      </>
    )
  }
}


export default App;
