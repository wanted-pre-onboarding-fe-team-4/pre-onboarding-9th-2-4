import React, { createContext, useContext, useMemo, useState } from 'react';

interface CartContextType {
  cart: number[];
  addToCart: (p: number) => void;
  removeFromCart: (p: number) => void;
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
  const [cart, updateCart] = useState<number[]>(initialCart);

  const addToCart = (newProduct: number) => {
    updateCart((cart) => [newProduct, ...cart]);
  };

  const removeFromCart = (toRemove: number) => {
    updateCart((cart) => cart.filter((product) => product !== toRemove));
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
