import {
  Badge,
  Button,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';

interface TravelReserveBoxProps {
  initialCount?: number;
  maximumPurchases: number;
  price: number;
  onClick: (count: number) => void;
}

export function TravelReserveBox({
  initialCount,
  maximumPurchases,
  price,
  onClick,
}: TravelReserveBoxProps) {
  const [count, setCount] = useState(initialCount || 1);
  const handleCounterChange = (_: string, value: number) => {
    setCount(value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick(count);
    e.stopPropagation();
  };

  return (
    <>
      <Badge colorScheme='red' textAlign='right' ml='auto' mt='5px'>
        최대 {maximumPurchases}장 구매 가능
      </Badge>
      <HStack
        width='100%'
        justifyContent='flex-end'
        onClick={(e) => e.stopPropagation()}
      >
        <Text fontSize='xl'>총</Text>
        <NumberInput
          size='md'
          mr={2}
          width={100}
          min={1}
          max={maximumPurchases}
          value={count}
          onChange={handleCounterChange}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Text color='#343C38' fontSize='xl'>
          회
        </Text>
        <Text color='#343C38' fontSize='xl' fontWeight='bold'>
          {(price * count).toLocaleString()}원
        </Text>
      </HStack>
      <Button
        background='blue.400'
        color='white'
        _hover={{
          background: 'blue.300',
        }}
        px='8'
        onClick={handleClick}
      >
        예약 변경
      </Button>
    </>
  );
}
