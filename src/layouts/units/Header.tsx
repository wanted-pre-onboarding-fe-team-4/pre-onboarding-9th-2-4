import { Button, Flex, Heading, Spacer } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigation = useNavigate();
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
        장바구니 보러가기
      </Button>
    </Flex>
  );
};
