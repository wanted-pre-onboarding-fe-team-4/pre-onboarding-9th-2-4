import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import DetailModal from '../DetailModal';
import { TravelReserveBox } from './TravelReserveBox';
import { ProductType } from '@src/types';
import { useCart } from '@src/context/cart';

interface Props {
  product: ProductType;
}

export const Reservation = ({ product }: Props) => {
  const {
    idx,
    name,
    spaceCategory,
    mainImage,
    description,
    price,
    maximumPurchases,
  } = product;
  const [modalIsOpen, toggleModal] = useState(false);
  const { cart, updateCount, removeFromCart } = useCart();
  const currentCount = cart.find((c) => c.idx === idx)?.count || 1;
  const toast = useToast();

  const showReservationChanged = (count: number) => {
    toast({
      title: '예약이 수정되었습니다',
      description: `${name} ${count}매`,
      status: 'success',
      duration: 1500,
    });
  };

  const showReservationCanceled = () => {
    toast({
      title: '예약이 취소되었습니다',
      description: name,
      status: 'info',
      duration: 1500,
    });
  };

  const handleCountChange = (count: number) => {
    updateCount(idx, count);
    showReservationChanged(count);
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    removeFromCart(idx);
    showReservationCanceled();
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
        p='2rem 1rem'
        display='flex'
        flexDir='column'
        gap='2rem'
        justifyContent='space-between'
        cursor='pointer'
      >
        <Box display='flex' flexDir='column' alignItems='start' gap='0.5rem'>
          <Heading fontSize='2xl'>{name}</Heading>
          <Text color='gray.500'>{description}</Text>
          <Badge fontSize='lg' p='0 0.5rem' rounded='xl'>
            {spaceCategory}
          </Badge>
        </Box>

        <AspectRatio ratio={1 / 1} width='100%'>
          <Image width='100%' rounded='xl' src={mainImage} alt={description} />
        </AspectRatio>

        <Flex flexDirection='column' gap={2}>
          <TravelReserveBox
            initialCount={currentCount}
            maximumPurchases={maximumPurchases}
            price={price}
            onClick={handleCountChange}
          />
          <Button variant='outline' px='8' onClick={handleCancel}>
            취소
          </Button>
        </Flex>
      </Card>
    </>
  );
};
