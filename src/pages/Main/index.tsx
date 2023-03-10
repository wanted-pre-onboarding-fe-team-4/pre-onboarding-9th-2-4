import { Suspense } from 'react';
import ProductList from '@src/components/commons/ProductList';
import ProductLiSkeleton from '@src/components/commons/ProductSkeleton';

export const MainPage = () => {
  return (
    <Suspense fallback={<ProductLiSkeleton />}>
      <ProductList />
    </Suspense>
  );
};
