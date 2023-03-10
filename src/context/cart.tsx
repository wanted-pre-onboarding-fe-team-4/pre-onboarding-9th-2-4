import React, { createContext, useContext, useMemo, useState } from 'react';
import { ProductType } from '@src/types';

interface CartContextType {
  cart: ProductType[];
  addToCart: (p: ProductType) => void;
  removeFromCart: (p: ProductType) => void;
}

const initialCartContext: CartContextType = {
  cart: [],
  /* eslint-disable-next-line */
  addToCart: (p) => {},
  /* eslint-disable-next-line */
  removeFromCart: (p) => {},
};

export const CartContext = createContext<CartContextType>(initialCartContext);

const initialCart = JSON.parse(localStorage.getItem('cart') || '[]');

export const CartProvider = (props: React.PropsWithChildren) => {
  const [cart, updateCart] = useState<ProductType[]>(initialCart);

  const addToCart = (newProduct: ProductType) => {
    updateCart((cart) => [newProduct, ...cart]);
  };

  const removeFromCart = (toRemove: ProductType) => {
    updateCart((cart) =>
      cart.filter((product) => product.idx !== toRemove.idx)
    );
  };

  const contextValue = useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
    }),
    [cart]
  );

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
