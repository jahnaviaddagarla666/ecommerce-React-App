import React from 'react';
import './ContactUs.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <div className="contact-container">
            <h2 className="contact-title">Get in Touch</h2>

            <div className="contact-content">
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p><FaPhoneAlt /> +91 98765 43210</p>
                    <p><FaEnvelope /> support@example.com</p>
                    <p><FaMapMarkerAlt /> Hyderabad, India</p>

                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>

                <form className="contact-form">
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <input type="text" name="subject" placeholder="Subject" />
                    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
