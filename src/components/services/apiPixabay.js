import axios from "axios";

async function apiPixabax(name, page) {
  const baseURL = 'https://pixabay.com/api/';
  const key = '28143013-44919de38ad9e5402793063fb';

  try {
    const response = await axios.get(
      `${baseURL}?key=${key}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
    );
    return response.data;
  } catch (error) {
    console.log('ERROR: ' + error);
  }
}

export default apiPixabax;