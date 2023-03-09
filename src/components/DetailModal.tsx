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
  } from "@chakra-ui/react";
  
  interface DetailModalProps {
    onClose: () => void;
    isOpen: boolean;
    item: {
      idx: number;
      name: string;
      mainImage: string;
      description: string;
      spaceCategory: string;
      price: number;
      maximumPurchases: number;
      registrationDate: string;
    };
  }
  
  const ModalComponent = ({ onClose, isOpen, item }: DetailModalProps) => {
    return (
      <Modal onClose={onClose} isOpen={isOpen} size="xl" scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing="4px" mb="10px">
              <Text fontSize="sm" as="b" color="gray.500">
                대한민국 &gt; {item?.spaceCategory}
              </Text>
              <Text fontSize="xl" as="b">
                {item?.name}
              </Text>
              <Text fontSize="sm" color="gray.700" textAlign="right">
                {item?.registrationDate}
              </Text>
            </Stack>
            <Stack spacing="14px">
              <Box position="relative">
                <Image
                  src={item.mainImage}
                  width={528}
                  height={300}
                  objectFit="cover"
                  alt={item?.name + "이미지"}
                />
                <Badge
                  colorScheme="purple"
                  position="absolute"
                  top="15px"
                  left="15px"
                  fontSize="16px"
                >
                  #{item?.idx}
                </Badge>
              </Box>
              <Flex direction="column">
                <Text fontSize="2xl" color="tomato" textAlign="right">
                  가격 {item?.price}원
                </Text>
                <Badge colorScheme="red" textAlign="right" ml="auto" mt="5px">
                  최대 {item?.maximumPurchases}장 구매 가능
                </Badge>
              </Flex>
              <Divider />
              <Text>{item?.description}</Text>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>닫기</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default ModalComponent;
  