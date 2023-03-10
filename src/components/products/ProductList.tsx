import { Grid, Heading, VStack } from '@chakra-ui/react';
import Product from './Product';
import createResource from '@src/lib/createResource';
import getProductList from '@src/api/getProductList';
import { ProductFilterFunction } from '@src/pages/Main';

const resource = createResource(getProductList());

interface ProductListProps {
  filterFunction: ProductFilterFunction;
}

const ProductList = ({ filterFunction }: ProductListProps) => {
  const products = resource.read();
  const filteredProducts = products.filter(filterFunction);

  return (
    <>
      {filteredProducts.length !== 0 && (
        <Grid
          gridTemplateColumns={[
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
            'repeat(3, 1fr)',
            'repeat(4, 1fr)',
          ]}
          gap='2rem'
        >
          {filteredProducts.map((product) => (
            <Product key={product.idx} product={product} />
          ))}
        </Grid>
      )}

      {filteredProducts.length === 0 && (
        <VStack mt={40}>
          <Heading>조건에 맞는 상품이 없습니다</Heading>
        </VStack>
      )}
    </>
  );
};

export default ProductList;
