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
import { useEffect, useState } from 'react';
import { ProductFilterFunction } from '@src/pages/Main';

const spaceOptions = ['서울', '강원', '부산', '대구', '제주'];
const minPriceRange = 0;
const maxPriceRange = 30000;
const initialPriceRange = [minPriceRange, maxPriceRange];
const priceStep = 1000;

interface ProductFilterProps {
  setFilterFunction: (newFunction: () => ProductFilterFunction) => void;
}

const createFilterFunction = (
  spaces: string[],
  range: number[]
): (() => ProductFilterFunction) => {
  return () => (product) =>
    spaces.includes(product.spaceCategory) &&
    product.price >= range[0] &&
    product.price <= range[1];
};

export const ProductFilter = ({ setFilterFunction }: ProductFilterProps) => {
  const [selectedSpace, setSelectedSpace] = useState<string[]>(spaceOptions);
  const [priceFilterValue, setPriceFilterValue] = useState(initialPriceRange);
  const [minPrice, maxPrice] = priceFilterValue;
  const isAllOption = selectedSpace.length === 5;

  useEffect(() => {
    setFilterFunction(createFilterFunction(selectedSpace, priceFilterValue));
  }, [selectedSpace, priceFilterValue]);

  const handleSelectedSpaceChange = (space: string) => {
    const removing = selectedSpace.includes(space);
    if (removing) {
      return setSelectedSpace(selectedSpace.filter((el) => el !== space));
    }
    setSelectedSpace([...selectedSpace, space]);
  };

  const handlePriceRangeChange = (newRange: number[]) => {
    setPriceFilterValue(newRange);
  };

  const allSelectButton = () => {
    if (isAllOption) {
      setSelectedSpace([]);
      return;
    }
    setSelectedSpace(spaceOptions);
  };

  return (
    <>
      <Flex flexDirection='column' alignItems='start'>
        <Text fontSize='lg' as='b' mb={5}>
          지역
        </Text>
        <Tag
          size='lg'
          mb={3}
          variant='solid'
          colorScheme={!isAllOption ? 'teal' : 'gray'}
          cursor='pointer'
          onClick={allSelectButton}
        >
          전체 선택/해제
        </Tag>
        <Flex mb='10px' alignItems='center'>
          {spaceOptions.map((space: string) => {
            return (
              <Tag
                key={space}
                size='lg'
                variant='solid'
                colorScheme={selectedSpace.includes(space) ? 'teal' : 'gray'}
                mr='3px'
                cursor='pointer'
                onClick={() => handleSelectedSpaceChange(space)}
              >
                {space}
              </Tag>
            );
          })}
        </Flex>
      </Flex>
      <Flex flexDirection='column' alignItems='start'>
        <Text fontSize='lg' as='b' mt={10}>
          가격
        </Text>
        <Flex my={50} alignItems='center'>
          <RangeSlider
            aria-label={['min', 'max']}
            defaultValue={initialPriceRange}
            min={minPriceRange}
            max={maxPriceRange}
            step={priceStep}
            minW={210}
            ml={5}
            mb={10}
            onChange={handlePriceRangeChange}
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
            <StyledMarker value={minPrice} />
            <StyledMarker value={maxPrice} />
            <RangeSliderThumb index={0} border='1px solid gray' />
            <RangeSliderThumb index={1} border='1px solid gray' />
          </RangeSlider>
        </Flex>
      </Flex>
    </>
  );
};

const StyledMarker = ({ value }: { value: number }) => (
  <RangeSliderMark
    value={value}
    textAlign='center'
    bg='blue.500'
    color='white'
    mt='-10'
    ml='-5'
    w='20'
    borderRadius={5}
  >
    {value.toLocaleString()}원
  </RangeSliderMark>
);
