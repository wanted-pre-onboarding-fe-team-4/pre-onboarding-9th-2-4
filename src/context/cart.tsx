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
  price: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (p: number, price: number) => void;
  updateCount: (idx: number, count: number, price: number) => void;
  removeFromCart: (p: number) => void;
}

const initialCartContext: CartContextType = {
  cart: [],
  addToCart: () => undefined,
  updateCount: () => undefined,
  removeFromCart: () => undefined,
};

export const CartContext = createContext<CartContextType>(initialCartContext);

const CART_KEY = 'cart';

const initialCart = JSON.parse(localStorage.getItem(CART_KEY) || '[]');

const persistCart = (cart: CartItem[]) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const CartProvider = (props: React.PropsWithChildren) => {
  const [cart, updateCart] = useState<CartItem[]>(initialCart);

  const updateCount = (newProduct: number, newCount: number, price: number) => {
    const newCartItem = {
      idx: newProduct,
      count: newCount,
      price,
    };
    removeFromCart(newProduct);
    updateCart((cart) => [newCartItem, ...cart]);
  };

  const addToCart = (newProduct: number, price: number) => {
    updateCount(newProduct, 1, price);
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
