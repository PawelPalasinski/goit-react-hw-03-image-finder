import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';
import SpinnerLoader from './Loader/Loader';
import axios from 'axios';
import pixabayApi from './services/apiPixabay';

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

  getValue = data => {
    this.setState({ loading: true });
    // try {
      const response = pixabayApi(data.name, data.page);
      console.log('ODP: ', response);

    //   if (response.hits.length < 1) {
    //     throw new Error('dupa');
    //   }
    //   this.setState({
    //     hits: response.hits,
    //     page: data.page + 1,
    //   });
    // } catch (error) {
    //   this.setState({ hits: [], });
    // } finally {
    //   this.setState({
    //     loading: false,
    //   });
    //   console.log('finally');
    // }
    // console.log('getValue: ', data);
    // this.setState({ name: data.name, page: data.page });
    // const { name } = data;
    // const { page } = this.state;
    // const response = this.getData(name, page);
    // console.log('getValue: ', response)
    // return response;
  };

  // getData(name, page) {
  // }

  render() {
    const { hits, showModal, name, page, loading, largeImageURL, tags } =
      this.state;

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
          <LoadMoreBtn onButtonClick={() => this.pixabayApi(name, page)} />
        )}
      </div>
    );
  }
}
export default App;
