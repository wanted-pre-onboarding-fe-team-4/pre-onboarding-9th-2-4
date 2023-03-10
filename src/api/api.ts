import axios from 'axios';
import { ProductType } from '@src/types';

export const getProducts = () =>
  axios.get<ProductType[]>('/apiMockData.json').then(({ data }) => data);
