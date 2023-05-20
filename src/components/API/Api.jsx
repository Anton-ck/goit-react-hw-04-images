import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '34828268-d3c9207948fe19a18b525d048';

export const fetchImages = async (searchQuery, page) => {
  const response = await axios
    .get(
      `${BASE_URL}?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12
`
    )
    .catch(error => {
      return new Error(error);
    });
  return response.data;
};
