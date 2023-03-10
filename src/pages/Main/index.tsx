import { Suspense, useState } from 'react';
import ProductList from '@src/components/commons/ProductList';
import ProductLiSkeleton from '@src/components/commons/ProductSkeleton';
import { ProductFilter } from '@src/components/commons/ProductFilter';
import { ProductType } from '@src/types';

export type ProductFilterFunction = (product: ProductType) => boolean;
const defaultFilter = (product: ProductType) => !!product;

export const MainPage = () => {
  console.log('MainPage');

  // 렌더링 최적화는 나중에
  const [filterFunction, setFilterFunction] = useState<ProductFilterFunction>(
    () => defaultFilter
  );

  return (
    <>
      <ProductFilter setFilterFunction={setFilterFunction} />
      <Suspense fallback={<ProductLiSkeleton />}>
        <ProductList filterFunction={filterFunction} />
      </Suspense>
    </>
  );
};
