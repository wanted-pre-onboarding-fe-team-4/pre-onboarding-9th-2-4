import { getProducts } from './api';

const delay = (millis: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, millis);
  });

const getProductList = async () => {
  await delay(1000);
  return getProducts();
};

export default getProductList;
