import axios from 'axios';

const API_KEY = '26705242-dfe8a614970af38263da25f99';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const pixabayApi = ({ query, page = 1 }) => {
  axios.defaults.params = {
    q: query,
    page,
    key: API_KEY,
    per_page: 12,
    imageType: 'photo',
    orientation: 'horizontal',
  };

  return axios
    .get()
    .then(({ data }) => ({ data: data.hits, totalHits: data.totalHits }));
};
