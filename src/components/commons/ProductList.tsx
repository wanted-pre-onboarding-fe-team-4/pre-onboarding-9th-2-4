import { Grid } from '@chakra-ui/react';
import Product from './Product';
import createResource from '@src/lib/createResource';
import getProductList from '@src/api/getProductList';
import { FilterValueProps } from '@src/types';

const resource = createResource(getProductList());

const ProductList = ({ selectedSpace, priceFilterValue }: FilterValueProps) => {
  const products = resource.read();

  const filteredData = products.filter(
    (el) =>
      el.price >= priceFilterValue[0] &&
      el.price <= priceFilterValue[1] &&
      (selectedSpace.includes(el.spaceCategory) || selectedSpace.length === 0)
  );

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
      {filteredData.map((product) => (
        <Product key={product.idx} product={product} />
      ))}
    </Grid>
  );
};

export default ProductList;
