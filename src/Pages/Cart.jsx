import React from 'react';
import './Cart.css';
import { useCart } from '../Context/CartContext';

const Cart = () => {
    const { cartItems, removeFromCart, getTotal } = useCart();

    return (
        <div className="cart-page">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} />
                                <div className="details">
                                    <h4>{item.title}</h4>
                                    <p>${item.price}</p>
                                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h3>Total: ${getTotal()}</h3>
                        <h4>Choose Payment Method</h4>
                        <button className="upi">Pay via UPI</button>
                        <button className="card">Pay with Card</button>
                        <button className="cod">Cash on Delivery</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
