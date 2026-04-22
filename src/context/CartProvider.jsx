import React, { useMemo } from 'react';
import { CartContext } from './CartContext';
import { initialProducts } from '../data/product';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  const products = initialProducts;

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id, removeAll = false) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === id);
      if (!existingItem) return prevCart; // Item not found, return current cart

      if (removeAll || existingItem.quantity === 1) {
        return prevCart.filter(item => item.id !== id);
      }
      return prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const cartCount = useMemo(() => cart.reduce((total, item) => total + item.quantity, 0), [cart]);
  const cartTotal = useMemo(() => cart.reduce((total, item) => total + item.price * item.quantity, 0), [cart]);

  return (
    <CartContext.Provider value={{ products, cart, addToCart, removeFromCart, updateQuantity, clearCart, getTotal, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};
