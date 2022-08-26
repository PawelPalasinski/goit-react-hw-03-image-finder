// import PropTypes from 'prop-types';

// import Notiflix from 'notiflix';
// // import axios from 'axios';
// import fetchPixabayApi from './services/apiPixabay';

// import SpinnerLoader from './Loader/Loader';
// import Searchbar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';
// import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
// import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';

import React, { Component } from 'react';
import Notiflix from 'notiflix';
// import './App.css';
import Searchbar from './Searchbar/Searchbar';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from "./Modal/Modal";
import SpinnerLoader from './Loader/Loader';
import axios from 'axios';

class App extends Component {
  state = {
    hits: [],
    name: '',
    page: 1,
    showModal: false,
    loading: false,
    tags: '',
    largeImageURL: '',
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  getValue = data => {
    console.log(data);
    this.setState({ name: data.name, page: data.page });
    const { name } = data;
    const { page } = this.state;
    const response = this.pixabayApi(name, page);
    return response;
  };

  async pixabayApi(name, page) {
    this.setState({ loading: true });

    const searchParams = new URLSearchParams({
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
    });

    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '28143013-44919de38ad9e5402793063fb';

    try {
      const response = await axios(
        `${BASE_URL}/?key=${API_KEY}&q=${name}&page=${page}&${searchParams}`
      );
      if (response.data.hits.length < 1) {
        this.setState({ loading: false });
        Notiflix.failure('FAILURE MESSAGE');
        return;
      }
      console.log(response);
      console.log(this.state.page);
      this.setState({
        loading: false,
        hits: response.data.hits,
        page: page + 1,
      });
      console.log(this.state.page);
      return response.data.hits;
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    const { hits,
      showModal,
      name,
      page,
      loading,
      largeImageURL,
      tags,
    } = this.state;

    return (
      <div>
        <Searchbar onSubmitHandler={this.getValue} />

        {loading && <SpinnerLoader />}

        {hits && (
          <ImageGallery>
            <ImageGalleryItem articles={hits} onImage={this.toggleModal} />
          </ImageGallery>
        )}

        {showModal && <Modal onClose={this.toggleModal} url={largeImageURL} alt={tags} />}

        {hits.length > 0 && (
          <LoadMoreBtn onButtonClick={() => this.pixabayApi(name, page)} />
        )}
      </div>
    );
  }
}
export default App;
