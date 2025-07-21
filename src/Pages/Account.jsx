import React, { useState } from "react";
import "./Account.css";

const Account = () => {
    const [isSignup, setIsSignup] = useState(false);

    const toggleMode = () => setIsSignup(!isSignup);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add login/signup logic here
    };

    return (
        <div className="account-container">
            <div className="account-card">
                <h2>{isSignup ? "Create Account" : "Login to Account"}</h2>
                <form onSubmit={handleSubmit} className="account-form">
                    {isSignup && (
                        <input type="text" placeholder="Full Name" required />
                    )}
                    <input type="email" placeholder="Email Address" required />
                    <input type="password" placeholder="Password" required />
                    {isSignup && (
                        <input type="password" placeholder="Confirm Password" required />
                    )}
                    <button type="submit" className="primary-btn">
                        {isSignup ? "Sign Up" : "Login"}
                    </button>
                </form>

                <div className="toggle-link" onClick={toggleMode}>
                    {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
                </div>

                <div className="or-divider">
                    <span>OR</span>
                </div>

                <button className="google-btn">Continue with Google</button>
            </div>
        </div>
    );
};

export default Account;
