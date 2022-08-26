import axios from "axios";


  const baseURL = 'https://pixabay.com/api/';
const key = '28143013-44919de38ad9e5402793063fb';
const page = 1;




export const fetchPixabayApi = async searchQuery => {
  const response = axios.get(
    `${baseURL}?key=${key}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
  );
  return response.data;
};



export default fetchPixabayApi;