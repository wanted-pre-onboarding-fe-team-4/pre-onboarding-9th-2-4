import { getProducts } from './api';
const getProductList = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  try {
    const data = await getProducts();
    return data;
  } catch (e) {
    return null;
  }
};

export default getProductList;
