import {
  Badge,
  Box,
  Button,
  Card,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { MouseEvent } from 'react';
import { ProductType } from '@src/types';

interface Props {
  product: ProductType;
}

const Product = ({ product }: Props) => {
  const onClick = (e: MouseEvent<HTMLButtonElement>) => e.stopPropagation();

  return (
    <Card
      maxW='20rem'
      p='2rem 1rem'
      display='flex'
      flexDir='column'
      gap='2rem'
      justifyContent='space-between'
      cursor='pointer'
    >
      <Box display='flex' flexDir='column' alignItems='start' gap='0.5rem'>
        <Heading fontSize='2xl'>{product.name}</Heading>
        <Text color='gray.500'>{product.description}</Text>
        <Badge fontSize='lg' p='0 0.5rem' rounded='xl'>
          {product.spaceCategory}
        </Badge>
      </Box>

      <Image rounded='xl' src={product.mainImage} />

      <Box display='flex' alignItems='center' justifyContent='space-between'>
        <Text fontWeight='bold' fontSize='2xl'>
          ₩{product.price}
        </Text>
        <Button
          background='blue.400'
          color='white'
          _hover={{
            background: 'blue.300',
          }}
          px='8'
          onClick={onClick}
        >
          예약
        </Button>
      </Box>
    </Card>
  );
};

export default Product;
