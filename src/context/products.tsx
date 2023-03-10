import { createContext, ReactNode, useEffect, useState } from 'react';
import { InitialType } from './types/products';
import { getProducts } from '@src/api/api';
import { ProductType } from '@src/types';

const InitialValue: InitialType = {
  products: [],
};

export const ProductsContext = createContext<InitialType>(InitialValue);

interface Props {
  children: ReactNode;
}

const ProductsProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getProducts();
      if (data) setProducts(data);
    })();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
