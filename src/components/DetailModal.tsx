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
  detailData: ProductType;
}

const DetailModal = ({ onClose, isOpen, detailData }: DetailModalProps) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} size='xl' scrollBehavior='inside'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader />
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing='4px' mb='10px'>
            <Text fontSize='sm' as='b' color='gray.500'>
              대한민국 &gt; {detailData?.spaceCategory}
            </Text>
            <Text fontSize='xl' as='b'>
              {detailData?.name}
            </Text>
            <Text fontSize='sm' color='gray.700' textAlign='right'>
              {detailData?.registrationDate}
            </Text>
          </Stack>
          <Stack spacing='14px'>
            <Box position='relative'>
              <Image
                src={detailData?.mainImage}
                width={528}
                height={300}
                objectFit='cover'
                alt={detailData?.name + '이미지'}
              />
              <Badge
                colorScheme='blue'
                position='absolute'
                top='15px'
                left='15px'
                fontSize='16px'
              >
                #{detailData?.idx}
              </Badge>
            </Box>
            <Flex direction='column'>
              <Text fontSize='xl' color='red.700' textAlign='right' as='b'>
                가격{' '}
                {detailData?.price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </Text>
              <Badge colorScheme='red' textAlign='right' ml='auto' mt='5px'>
                최대 {detailData?.maximumPurchases}장 구매 가능
              </Badge>
            </Flex>
            <Divider />
            <Text>{detailData?.description}</Text>
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
