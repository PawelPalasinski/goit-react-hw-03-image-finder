import axios from 'axios';

const pixabayApi = (query, pageNum) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '28143013-44919de38ad9e5402793063fb';

  const SEARCH_PARAMS = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
  });
  
  axios
    .get(
      `${BASE_URL}?key=${API_KEY}&q=${query}&page=${pageNum}&${SEARCH_PARAMS}`
    )
    .then(response => {
      console.log('API: ', response.data);
      console.log(query + ' z API');
      return response;
    });
};

export default pixabayApi;
