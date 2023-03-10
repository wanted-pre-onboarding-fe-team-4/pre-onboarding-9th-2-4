import { Grid } from '@chakra-ui/react';
import { Reservation } from './Reservation';
import createResource from '@src/lib/createResource';
import getProductList from '@src/api/getProductList';
import { ProductFilterFunction } from '@src/pages/Main';

const resource = createResource(getProductList());

interface ProductListProps {
  filterFunction: ProductFilterFunction;
}

export const ReservationList = ({ filterFunction }: ProductListProps) => {
  const products = resource.read();
  const filteredCarts = products.filter(filterFunction);

  return (
    <Grid
      gridTemplateColumns={[
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
        'repeat(4, 1fr)',
      ]}
      gap='2rem'
    >
      {filteredCarts.map((product) => (
        <Reservation key={product.idx} product={product} />
      ))}
    </Grid>
  );
};
