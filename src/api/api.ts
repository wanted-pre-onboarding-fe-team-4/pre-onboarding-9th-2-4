import axios from 'axios';

export const getProducts = () =>
  axios.get('/apiMockData.json').then(({ data }) => data);
