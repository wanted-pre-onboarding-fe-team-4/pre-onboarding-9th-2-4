import { Suspense } from 'react';
import { Heading, VStack } from '@chakra-ui/react';
import ProductLiSkeleton from '@src/components/commons/ProductSkeleton';
import { useCart } from '@src/context/cart';
import { ProductType } from '@src/types';
import { ReservationList } from '@src/components/commons/ReservationList';

export const ReservationPage = () => {
  const { cart } = useCart();
  const cartItemsFilter = (p: ProductType) =>
    !!cart.find((cart) => cart.idx === p.idx);
  const cartValueSum = cart.reduce(
    (acc, cur) => acc + cur.price * cur.count,
    0
  );

  return (
    <>
      <VStack mb={20}>
        <Heading>예약 총액은 {cartValueSum.toLocaleString()}원 입니다.</Heading>
      </VStack>
      <Suspense fallback={<ProductLiSkeleton />}>
        <ReservationList filterFunction={cartItemsFilter} />
      </Suspense>
    </>
  );
};
