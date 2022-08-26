// import PropTypes from 'prop-types';
import React, { Component } from 'react';

// import Notiflix from 'notiflix';
// import axios from 'axios';
import fetchPixabayApi from './services/apiPixabay';

import SpinnerLoader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';

class App extends Component {
  state = {
    images: [],
    page: 1,
    query: 'cat',
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await fetchPixabayApi(this.query, this.page);
    this.setState({
      articles: response.data.hits,
      isLoading: false,
    });
  }



  //   componentDidMount() {
  // console.log(fetchPixabayApi('cat'))
  //   }

  // componentDidUpdate(prevState) {

  // }

  render() {
    console.log('dziala');
    console.log(fetchPixabayApi());

    return (
      <>
        {/* <SpinnerLoader /> */}
        <Searchbar onChange={this.formSubmit} />
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
        <LoadMoreBtn />
      </>
    );
  }
}

export default App;
