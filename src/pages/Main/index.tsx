import ProductList from '@src/components/commons/ProductList';
import dummy from '@src/dummy/travel_list.json';

export const MainPage = () => {
  return <ProductList products={dummy} />;
};
