import React, { useState } from 'react';
import './Contact.css'; // Make sure to import your CSS file
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FaFacebook, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
    // Create state to handle form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    useGSAP(() => {
        // gsap code here...
        gsap.from('.contact-page-left-info', {
            scrollTrigger: {
                trigger: '.contact-page-main-container',
                start: '20% bottom',
                end: '10% top',
                markers: true,
            },
            opacity: 0,
            x: -100,
            duration: 0.5,
            stagger: 0.8,
        });
        gsap.from('.main', {
            scrollTrigger: {
                trigger: '.contact-page-main-container',
                start: '20% bottom',
                markers: true,
            },
            opacity: 0,
            x: 100,
            duration: 1,
            ease: 'power2.inOut',
        });
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwUFZEpCYvcw5wR48u9tEYGt2yvErAXDPDpF99IgYluWu_lq2qKAetloLssbawWy7yS/exec';
    
        // Convert form data to URLSearchParams for x-www-form-urlencoded format
        const formParams = new URLSearchParams();
        for (const key in formData) {
            formParams.append(key, formData[key]);
        }
    
        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formParams.toString(),
            });
    
            console.log("Response: ", response);
    
            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            } else {
                setStatus('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.log("Error: ", error);
            setStatus('Error occurred. Please try again.');
        }
    };
    return (
        <>
            <div className="contact-page">
                <div className="contact-page-main-container">
                    <div className="contact-page-left">
                        <div className="contact-page-left-info1">
                            <div className="contact-page-left-info">
                                <div className="contact-page-left-info-img">
                                    <FaPhoneAlt className="call-icon" />
                                </div>
                                <div className="contact-page-left-info-text">
                                    <h2>Phone Number:</h2>
                                    <p>Head-Office : (+011) 948-5481</p>
                                    <p>Branch-Office : (+011) 948-56487</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-page-left-info2">
                            <div className="contact-page-left-info">
                                <div className="contact-page-left-info-img">
                                    <FaInstagram className="call-icon" />
                                </div>
                                <div className="contact-page-left-info-text">
                                    <h2>Instagram</h2>
                                    <p>@instagram.com</p>
                                </div>
                            </div>
                            <div className="contact-page-left-info">
                                <div className="contact-page-left-info-img">
                                    <FaFacebook className="call-icon" />
                                </div>
                                <div className="contact-page-left-info-text">
                                    <h2>Facebook</h2>
                                    <p>@facebook.com</p>
                                </div>
                            </div>
                            <div className="contact-page-left-info">
                                <div className="contact-page-left-info-img">
                                    <FaWhatsapp className="call-icon" />
                                </div>
                                <div className="contact-page-left-info-text">
                                    <h2>Whatsapp</h2>
                                    <p>+011 948-5481</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main">
                        <div className="contact-form">
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name.."
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email.."
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-row">
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone Number.."
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Your Subject.."
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <textarea
                                    name="message"
                                    placeholder="Enter Your Message.."
                                    value={formData.message}
                                    onChange={handleInputChange}
                                />
                                <button type="submit">SUBMIT MESSAGE</button>
                            </form>
                            {status && <p className="form-status">{status}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
