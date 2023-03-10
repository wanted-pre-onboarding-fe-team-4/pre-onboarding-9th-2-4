import {
  Text,
  Flex,
  Tag,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  RangeSliderMark,
} from '@chakra-ui/react';
import { useState } from 'react';

const spaceOptions = ['서울', '강원', '부산', '대구', '제주'];

const Filter = () => {
  const [selectedSpace, setSelectedSpace] = useState<string[]>([]);
  const [priceFilterValue, setPriceFilterValue] = useState([0, 30000]);

  const spaceFilter = (space: string) => {
    if (!selectedSpace.includes(space)) {
      setSelectedSpace([...selectedSpace, space]);
    } else {
      setSelectedSpace(selectedSpace.filter((el) => el !== space));
    }
  };

  return (
    <>
      <Flex mb={'10px'} alignItems='center'>
        <Text fontSize='lg' as='b' mr={10}>
          지역
        </Text>
        {spaceOptions.map((space: string) => {
          return (
            <Tag
              key={space}
              size='lg'
              variant='solid'
              colorScheme={selectedSpace.includes(space) ? 'teal' : 'gray'}
              mr={'3px'}
              cursor='pointer'
              onClick={() => spaceFilter(space)}
            >
              {space}
            </Tag>
          );
        })}
      </Flex>
      <Flex my={50} alignItems='center'>
        <Text fontSize='lg' as='b' mr={10}>
          가격
        </Text>
        <RangeSlider
          aria-label={['min', 'max']}
          defaultValue={[0, 30000]}
          min={0}
          max={30000}
          step={1000}
          w={300}
          onChange={(priceValue) => setPriceFilterValue(priceValue)}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderMark value={0} mt='1' ml='-2.5' fontSize='sm'>
            0
          </RangeSliderMark>
          <RangeSliderMark value={10000} mt='1' ml='-2.5' fontSize='sm'>
            10,000
          </RangeSliderMark>
          <RangeSliderMark value={20000} mt='1' ml='-2.5' fontSize='sm'>
            20,000
          </RangeSliderMark>
          <RangeSliderMark value={30000} mt='1' fontSize='sm'>
            30,000
          </RangeSliderMark>
          <RangeSliderMark
            value={priceFilterValue[0]}
            textAlign='center'
            bg='blue.500'
            color='white'
            mt='-10'
            ml='-5'
            w='20'
            borderRadius={5}
          >
            {priceFilterValue[0].toLocaleString('kr')}원
          </RangeSliderMark>
          <RangeSliderMark
            value={priceFilterValue[1]}
            textAlign='center'
            bg='blue.500'
            color='white'
            mt='-10'
            ml='-5'
            w='20'
            borderRadius={5}
          >
            {priceFilterValue[1].toLocaleString('kr')}원
          </RangeSliderMark>
          <RangeSliderThumb index={0} border={'1px solid gray'} />
          <RangeSliderThumb index={1} border={'1px solid gray'} />
        </RangeSlider>
      </Flex>
    </>
  );
};

export default Filter;
