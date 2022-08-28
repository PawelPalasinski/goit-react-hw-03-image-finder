import React, { Component } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY, SEARCH_PARAMS } from './utils/utils';
import Searchbar from './Searchbar/Searchbar';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';
import SpinnerLoader from './Loader/Loader';

class App extends Component {
  state = {
    hits: [],
    name: '',
    page: 1,
    showModal: false,
    loading: false,
    largeImageURL: '',
    tags: '',
  };

  toggleModal = (imageURL, tag, id) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL: imageURL,
      tags: tag,
    }));
    console.log('modal', imageURL, 'tag', tag);
    console.log('id: ', id);
  };

  getValue = ({ name, page }) => {
    this.setState({ loading: true });
    try {
      axios
        .get(
          `${BASE_URL}?key=${API_KEY}&q=${name}&page=${page}&${SEARCH_PARAMS}`
        )
        .then(response => {
          if (!response.data.hits.length) {
            throw new Error('No results');
          }
          this.setState(state => ({
            hits: [...state.hits, ...response.data.hits],
            name: name,
            page: state.page + 1,
          }));
        });
    } catch (error) {
      console.error(error.message);
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  loadMore = () => {
    this.getValue(this.state);
  };

  render() {
    const { hits, showModal, loading, largeImageURL, tags } = this.state;

    return (
      <div>
        <Searchbar onSubmitHandler={this.getValue} />

        {loading && <SpinnerLoader />}

        {hits && (
          <ImageGallery>
            <ImageGalleryItem articles={hits} onImage={this.toggleModal} />
          </ImageGallery>
        )}

        {showModal && (
          <Modal onClose={this.toggleModal} url={largeImageURL} alt={tags} />
        )}

        {hits.length > 0 && (
          <LoadMoreBtn onButtonClick={() => this.loadMore()} />
        )}
      </div>
    );
  }
}
export default App;