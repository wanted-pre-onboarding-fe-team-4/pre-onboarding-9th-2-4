import { createContext, ReactNode, useEffect, useState } from 'react';
import { InitialType } from './types/products';
import { getProducts } from '@src/api/api';
import Product from '@src/types/Product';

const InitialValue: InitialType = {
  products: [],
};

export const ProductsContext = createContext<InitialType>(InitialValue);

interface Props {
  children: ReactNode;
}

const ProductsProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);

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
