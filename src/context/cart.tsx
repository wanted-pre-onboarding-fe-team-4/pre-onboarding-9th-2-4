import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface CartItem {
  idx: number;
  count: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (p: number) => void;
  updateCount: (idx: number, count: number) => void;
  removeFromCart: (p: number) => void;
}

const initialCartContext: CartContextType = {
  cart: [],
  /* eslint-disable-next-line */
  addToCart: (p) => {},
  /* eslint-disable-next-line */
  updateCount: (idx, count) => {},
  /* eslint-disable-next-line */
  removeFromCart: (p) => {},
};

export const CartContext = createContext<CartContextType>(initialCartContext);

const CART_KEY = 'cart';

const initialCart = JSON.parse(localStorage.getItem(CART_KEY) || '[]');

const persistCart = (cart: CartItem[]) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const CartProvider = (props: React.PropsWithChildren) => {
  const [cart, updateCart] = useState<CartItem[]>(initialCart);

  const updateCount = (newProduct: number, newCount: number) => {
    const newCartItem = {
      idx: newProduct,
      count: newCount,
    };
    removeFromCart(newProduct);
    updateCart((cart) => [newCartItem, ...cart]);
  };

  const addToCart = (newProduct: number) => {
    updateCount(newProduct, 1);
  };

  const removeFromCart = (toRemove: number) => {
    updateCart((cart) => cart.filter((product) => product.idx !== toRemove));
  };

  // 영속화 수행
  useEffect(() => {
    persistCart(cart);
  }, [cart]);

  const contextValue = useMemo(
    () => ({
      cart,
      addToCart,
      updateCount,
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
