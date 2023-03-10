import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Card,
  Heading,
  Image,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import DetailModal from '../modal/DetailModal';
import { ProductType } from '@src/types';
import { useCart } from '@src/context/cart';

interface Props {
  product: ProductType;
}

const Product = ({ product }: Props) => {
  const { idx, name, spaceCategory, mainImage, description, price } = product;
  const [modalIsOpen, toggleModal] = useState(false);
  const { addToCart, cart } = useCart();
  const toast = useToast();
  const isInCart = cart.find((i) => i.idx === product.idx);

  const showReservationSuccess = () => {
    toast({
      title: '예약이 완료되었습니다',
      description: name,
      status: 'success',
      duration: 1500,
      position: 'top-right',
    });
  };

  const handleReservationClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isInCart) return;

    addToCart(idx, price);
    showReservationSuccess();
  };

  const handleToggleModal = () => {
    toggleModal((status) => !status);
  };

  return (
    <>
      <DetailModal
        isOpen={modalIsOpen}
        onClose={handleToggleModal}
        product={product}
      />
      <Card
        onClick={handleToggleModal}
        maxW='20rem'
        p='1rem'
        display='flex'
        flexDir='column'
        justifyContent='space-between'
        cursor='pointer'
        gap='2rem'
      >
        <Box display='flex' flexDir='column' gap='1rem' alignItems='start'>
          <AspectRatio ratio={1 / 1} width='100%'>
            <Box width='100%' height='100%' position='relative'>
              <Badge padding='0 0.5rem' position='absolute' top={5} left={3}>
                {product.idx}
              </Badge>
              <Image
                width='100%'
                rounded='xl'
                src={mainImage}
                alt={description}
              />
            </Box>
          </AspectRatio>

          <Heading fontSize='2xl'>{name}</Heading>

          <Badge fontSize='lg' p='0 0.5rem' rounded='xl'>
            {spaceCategory}
          </Badge>
        </Box>

        <Box display='flex' alignItems='center' justifyContent='space-between'>
          <Text fontWeight='bold' fontSize='2xl'>
            {price.toLocaleString()}원
          </Text>
          <Button
            background={isInCart ? 'gray.400' : 'blue.400'}
            color='white'
            disabled={!!isInCart}
            _hover={{
              background: isInCart ? '' : 'blue.300',
            }}
            cursor={isInCart ? 'auto' : 'pointer'}
            px='3'
            onClick={handleReservationClick}
          >
            {isInCart ? '예약 완료' : '예약'}
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default Product;
