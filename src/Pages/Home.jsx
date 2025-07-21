import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="home-container">
            <div className="hero-section">
                <div className="hero-text">
                    <h1>Welcome to <span>J!shop</span></h1>
                    <p>Your one-stop destination for the best deals on electronics, fashion, and more!</p>
                    <Link to="/products" className="shop-now-button">
                        <FaShoppingBag className="icon" /> Shop Now
                    </Link>
                </div>
                <div className="hero-image">
                    <img
                        src="https://cdn.pixabay.com/photo/2015/12/23/01/14/edit-1105049_1280.png"
                        alt="Shopping Banner"
                    />
                </div>
            </div>

            <section className="features">
                <div className="feature-card">
                    <h3>🚀 Fast Delivery</h3>
                    <p>Lightning-fast delivery to your doorstep – shop stress-free!</p>
                </div>
                <div className="feature-card">
                    <h3>🔒 Secure Payments</h3>
                    <p>Multiple payment options with the highest encryption standards.</p>
                </div>
                <div className="feature-card">
                    <h3>💬 24/7 Support</h3>
                    <p>Have a question? Our support team is here for you anytime.</p>
                </div>
            </section>

            <section className="top-categories">
                <h2>Top Categories</h2>
                <div className="categories-grid">
                    <div className="category-card">👕 Fashion</div>
                    <div className="category-card">📱 Electronics</div>
                    <div className="category-card">🏠 Home & Living</div>
                    <div className="category-card">📚 Books</div>
                    <div className="category-card">👟 Footwear</div>
                    <div className="category-card">🎮 Gaming</div>
                </div>
            </section>
        </div>
    );
};

export default Home;
