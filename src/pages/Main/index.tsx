import { Suspense, useState } from 'react';
import Filter from './Filter';
import ProductList from '@src/components/commons/ProductList';
import ProductLiSkeleton from '@src/components/commons/ProductSkeleton';

export const MainPage = () => {
  const [selectedSpace, setSelectedSpace] = useState<string[]>([]);
  const [priceFilterValue, setPriceFilterValue] = useState<number[]>([
    0, 30000,
  ]);

  return (
    <Suspense fallback={<ProductLiSkeleton />}>
      <Filter
        selectedSpace={selectedSpace}
        setSelectedSpace={setSelectedSpace}
        priceFilterValue={priceFilterValue}
        setPriceFilterValue={setPriceFilterValue}
      />
      <ProductList
        selectedSpace={selectedSpace}
        priceFilterValue={priceFilterValue}
      />
    </Suspense>
  );
};
