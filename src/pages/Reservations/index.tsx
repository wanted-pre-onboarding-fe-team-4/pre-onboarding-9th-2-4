import { Suspense } from 'react';
import ProductList from '@src/components/commons/ProductList';
import ProductLiSkeleton from '@src/components/commons/ProductSkeleton';
import { useCart } from '@src/context/cart';
import { ProductType } from '@src/types';

export const ReservationPage = () => {
  const { cart } = useCart();
  console.log(cart);
  const cartItemsFilter = (p: ProductType) => cart.includes(p.idx);

  return (
    <>
      <Suspense fallback={<ProductLiSkeleton />}>
        <ProductList filterFunction={cartItemsFilter} />
      </Suspense>
    </>
  );
};
