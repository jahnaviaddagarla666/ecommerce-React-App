// /context/CartContext.jsx
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prev => {
            if (prev.find(item => item.id === product.id)) return prev;
            return [...prev, product];
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const getTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotal }}>
            {children}
        </CartContext.Provider>
    );
};
