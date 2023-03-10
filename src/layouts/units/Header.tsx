import { Button, Flex, Heading, Spacer } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@src/context/cart';

export const Header = () => {
  const navigation = useNavigate();
  const { cart } = useCart();

  return (
    <Flex
      alignItems='center'
      borderBottom='1px'
      borderBottomColor='gray.300'
      h='100%'
      pr='50px'
    >
      <Heading
        pl={10}
        size='lg'
        height='100%'
        display='flex'
        alignItems='center'
        onClick={() => navigation('/main')}
        cursor='pointer'
      >
        Like a local
      </Heading>
      <Spacer />
      <Button onClick={() => navigation('/reservations')} colorScheme='brand'>
        장바구니({cart.length}개 담김)
      </Button>
    </Flex>
  );
};
