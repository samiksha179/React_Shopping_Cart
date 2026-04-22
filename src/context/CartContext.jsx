import { createContext, useContext, useMemo, useState } from 'react';

export const CartContext = createContext();
import { initialProducts } from '../data/product';

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const products = initialProducts; // This should come from state in a real implementation   

    // Add to cart function
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        })
    };

    // Remove from cart function
    const removeFromCart = (productId, removeAll = false) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.id === productId);
            if (!existingItem) return prevCart; // Item not found, return current cart

            if (removeAll || existingItem.quantity === 1) {
                return prevCart.filter(item => item.id !== productId);
            }
            return prevCart.map(item =>
                item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
            );
        })
    };

    const clearCart = () => {
        setCart([]);
    };

    const cartCount = useMemo(() => cart.reduce((total, item) => total + item.quantity, 0), [cart]);

    const cartTotal = useMemo(() => cart.reduce((total, item) => total + item.price * item.quantity, 0), [cart]);

    console.log(cart);

    return (
        <CartContext.Provider value={{ products, cart, addToCart, removeFromCart, clearCart, cartCount, cartTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);
