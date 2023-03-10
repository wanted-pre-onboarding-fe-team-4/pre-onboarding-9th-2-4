import { Suspense, useState } from 'react';
import ProductList from '@src/components/products/ProductList';
import ProductLiSkeleton from '@src/components/products/ProductSkeleton';
import { ProductFilter } from '@src/components/products/ProductFilter';
import { ProductType } from '@src/types';

export type ProductFilterFunction = (product: ProductType) => boolean;
const defaultFilter = (product: ProductType) => !!product;

export const MainPage = () => {
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
