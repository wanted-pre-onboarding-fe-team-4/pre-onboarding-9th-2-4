import { Text, useDisclosure } from '@chakra-ui/react';
import { useContext } from 'react';
import { ProductsContext } from '@src/context/products';
import DetailModal from '@src/components/DetailModal';

export const MainPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { products } = useContext(ProductsContext);

  console.log(products);

  return (
    <>
      <Text>메인 페이지 입니다.</Text>
      <button onClick={onOpen}>modal button</button>
      <DetailModal detailData={products[0]} onClose={onClose} isOpen={isOpen} />
    </>
  );
};
