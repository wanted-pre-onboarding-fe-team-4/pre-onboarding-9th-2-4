import { Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { ProductsContext } from '@src/context/products';

export const MainPage = () => {
  const { products } = useContext(ProductsContext);

  console.log(products);

  return <Text>메인 페이지 입니다.</Text>;
};
