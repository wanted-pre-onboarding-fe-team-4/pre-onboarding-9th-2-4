import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

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

const CART_KEY = 'cart';

const initialCart = JSON.parse(localStorage.getItem(CART_KEY) || '[]');

const persistCart = (cart: number[]) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const CartProvider = (props: React.PropsWithChildren) => {
  const [cart, updateCart] = useState<number[]>(initialCart);

  const addToCart = (newProduct: number) => {
    updateCart((cart) => [newProduct, ...cart]);
  };

  const removeFromCart = (toRemove: number) => {
    updateCart((cart) => cart.filter((product) => product !== toRemove));
  };

  // 영속화 수행
  useEffect(() => {
    persistCart(cart);
  }, [cart]);

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
