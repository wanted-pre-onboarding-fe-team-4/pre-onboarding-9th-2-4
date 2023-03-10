import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Divider,
  Box,
  Badge,
  Stack,
  Image,
  Flex,
} from '@chakra-ui/react';
import { ProductType } from '@src/types';

interface DetailModalProps {
  onClose: () => void;
  isOpen: boolean;
  product: ProductType;
}

const DetailModal = ({ onClose, isOpen, product }: DetailModalProps) => {
  const {
    spaceCategory,
    name,
    registrationDate,
    mainImage,
    idx,
    price,
    maximumPurchases,
    description,
  } = product;

  return (
    <Modal onClose={onClose} isOpen={isOpen} size='xl' scrollBehavior='inside'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader />
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing='4px' mb='10px'>
            <Text fontSize='sm' as='b' color='gray.500'>
              대한민국 &gt; {spaceCategory}
            </Text>
            <Text fontSize='xl' as='b'>
              {name}
            </Text>
            <Text fontSize='sm' color='gray.700' textAlign='right'>
              {registrationDate.substring(0, 10)}
            </Text>
          </Stack>
          <Stack spacing='14px'>
            <Box position='relative'>
              <Image
                src={mainImage}
                width={528}
                height={300}
                objectFit='cover'
                alt={description}
              />
              <Badge
                colorScheme='blue'
                position='absolute'
                top='15px'
                left='15px'
                fontSize='16px'
              >
                #{idx}
              </Badge>
            </Box>
            <Flex direction='column'>
              <Text fontSize='xl' textAlign='right' as='b'>
                가격 {price.toLocaleString()}원
              </Text>
              <Badge colorScheme='red' textAlign='right' ml='auto' mt='5px'>
                최대 {maximumPurchases}장 구매 가능
              </Badge>
            </Flex>
            <Divider />
            <Text>{description}</Text>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>닫기</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DetailModal;
