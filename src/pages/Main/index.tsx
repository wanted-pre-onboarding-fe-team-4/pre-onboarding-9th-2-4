import { Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';
import ProductList from '@src/components/commons/ProductList';

export const MainPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <ProductList />
    </Suspense>
  );
};
