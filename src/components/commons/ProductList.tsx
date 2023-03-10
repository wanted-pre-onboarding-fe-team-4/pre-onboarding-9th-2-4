import { Grid } from '@chakra-ui/react';
import Product from './Product';
import createResource from '@src/lib/createResource';
import getProductList from '@src/api/getProductList';

const resource = createResource(getProductList());

const ProductList = () => {
  const products = resource.read();

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
