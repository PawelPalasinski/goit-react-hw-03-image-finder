import axios from 'axios';

const fetchPixabayApi = async (query, page) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '28143013-44919de38ad9e5402793063fb';

  try {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
    );
    console.log(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`)
    return response.data;
  } catch (error) {
    console.log('Error: ' + error);
  }
};

export default fetchPixabayApi;
