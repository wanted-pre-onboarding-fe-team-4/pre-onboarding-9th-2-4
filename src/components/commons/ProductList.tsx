import { Grid } from '@chakra-ui/react';
import Product from './Product';
import { ProductType } from '@src/types';

interface Props {
  products: ProductType[];
}

const ProductList = ({ products }: Props) => {
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
      {products.map((product) => (
        <Product key={product.idx} product={product} />
      ))}
    </Grid>
  );
};

export default ProductList;
