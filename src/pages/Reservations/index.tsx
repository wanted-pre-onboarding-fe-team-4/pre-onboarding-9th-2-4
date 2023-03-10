import { Suspense } from 'react';
import ProductLiSkeleton from '@src/components/commons/ProductSkeleton';
import { useCart } from '@src/context/cart';
import { ProductType } from '@src/types';
import { ReservationList } from '@src/components/commons/ReservationList';

export const ReservationPage = () => {
  const { cart } = useCart();
  console.log(cart);
  const cartItemsFilter = (p: ProductType) =>
    !!cart.find((cart) => cart.idx === p.idx);

  return (
    <>
      <Suspense fallback={<ProductLiSkeleton />}>
        <ReservationList filterFunction={cartItemsFilter} />
      </Suspense>
    </>
  );
};
