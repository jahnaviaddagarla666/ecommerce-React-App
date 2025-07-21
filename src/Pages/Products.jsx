import React, { useEffect, useState } from 'react';
import './Products.css';
import { useCart } from '../Context/CartContext';

const Products = () => {
    const [products, setProducts] = useState([]);
    const { cartItems, addToCart } = useCart();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const isInCart = (id) => cartItems.some(item => item.id === id);

    return (
        <div className="products-page">
            <h1 className="products-title">Our Products</h1>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>${product.price}</p>
                        <button
                            onClick={() => addToCart(product)}
                            disabled={isInCart(product.id)}
                        >
                            {isInCart(product.id) ? "Added to Cart" : "Add to Cart"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
