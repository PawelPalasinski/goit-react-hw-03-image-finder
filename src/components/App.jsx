// import PropTypes from 'prop-types';
import React, { Component } from 'react';

// import Notiflix from 'notiflix';
// import axios from 'axios';
import fetchPixabayApi from './services/apiPixabay';

// import SpinnerLoader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';

class App extends Component {
  state = {
    images: [],
    page: 1,
    name: '',
  };

//   componentDidMount() {
// console.log(fetchPixabayApi('cat'))
//   }

  // componentDidUpdate(prevState) {

  // }




  render() {
    console.log('dziala');
    // console.log(fetchPixabayApi())

    return (
      <>
        {/* <SpinnerLoader /> */}
        <Searchbar onChange={this.formSubmit} />
        <div>React homework template</div>
      </>
    );
  }
}

export default App;
