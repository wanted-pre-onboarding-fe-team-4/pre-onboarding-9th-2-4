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
import DetailModal from '../DetailModal';
import { ProductType } from '@src/types';
import { useCart } from '@src/context/cart';

interface Props {
  product: ProductType;
}

const Product = ({ product }: Props) => {
  const { idx, name, spaceCategory, mainImage, description, price } = product;
  const [modalIsOpen, toggleModal] = useState(false);
  const { addToCart } = useCart();
  const toast = useToast();

  const showReservationSuccess = () => {
    toast({
      title: '예약이 완료되었습니다',
      description: name,
      status: 'success',
      duration: 1500,
    });
  };

  const handleReservationClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    addToCart(idx);
    showReservationSuccess();
    e.stopPropagation();
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
          <AspectRatio position='relative' ratio={1 / 1} width='100%'>
            <Image
              width='100%'
              rounded='xl'
              src={mainImage}
              alt={description}
            />
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
            background='blue.400'
            color='white'
            _hover={{
              background: 'blue.300',
            }}
            px='8'
            onClick={handleReservationClick}
          >
            예약
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default Product;
