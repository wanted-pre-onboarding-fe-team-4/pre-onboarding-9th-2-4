interface FilterProps {
  selectedSpace: string[];
  setSelectedSpace: React.Dispatch<React.SetStateAction<string[]>>;
  priceFilterValue: number[];
  setPriceFilterValue: React.Dispatch<React.SetStateAction<number[]>>;
}

export default FilterProps;
