import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54210933-10e757df1700daa886d01a2cd';

export async function getImagesByQuery (query){
    const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response.data;
}
