import { Suspense } from 'react';
import { Heading, VStack } from '@chakra-ui/react';
import ProductLiSkeleton from '@src/components/products/ProductSkeleton';
import { ReservationList } from '@src/components/reservation/ReservationList';
import { useCart } from '@src/context/cart';
import { ProductType } from '@src/types';

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
      {cart.length !== 0 && (
        <>
          <VStack mb={20}>
            <Heading>
              예약 총액은 {cartValueSum.toLocaleString()}원 입니다.
            </Heading>
          </VStack>
          <Suspense fallback={<ProductLiSkeleton />}>
            <ReservationList filterFunction={cartItemsFilter} />
          </Suspense>
        </>
      )}

      {cart.length === 0 && (
        <VStack mt={40}>
          <Heading>장바구니에 아무것도 담겨있지 않습니다</Heading>
        </VStack>
      )}
    </>
  );
};
