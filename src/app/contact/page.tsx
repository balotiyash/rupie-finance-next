/** 
 * File: src/app/contact/page.tsx
 * Author: Yash Balotiya, Neha Balotia
 * Description: This file contains the Contact page for the application.
 * Created on: 04/10/2025
 * Last Modified: 26/10/2025
*/

"use client";

// Importing required modules & libraries
import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { useState, useEffect } from 'react';

// Contact Page Component
const page = () => {
    // On load focus name input field
    useEffect(() => {
        const nameInput = document.getElementById('fullName');
        if (nameInput) {
            nameInput.focus();
        }
    }, []);

    // State variables for form inputs
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !phone || !address) {
            alert('Please fill in all fields.');
            return;
        }

        // Phone number validation regex indian format
        const phoneRegex = /^[6-9]\d{9}$/;

        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid 10-digit Indian phone number.');
            return;
        }

        // Send data to whatsapp
        const message = `Hello Rupie Finance Team\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\nI would like to get in touch with you for a loan.`;

        const whatsappUrl = `https://wa.me/918691030707?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        // Clear form fields
        setName('');
        setPhone('');
        setAddress('');

        alert('Your message has been sent successfully!');
    };

    return (
        // Main container
        <main className={styles.main}>
            {/* Page Title */}
            <h1>Contact Us</h1>

            {/* Contact Section */}
            <section className={styles.contactSection}>
                {/* Left Side */}
                <div className={styles.leftSide}>
                    {/* Car Loan Image */}
                    <img src="/images/vehicle-loan.png" alt="Car Loan" className={styles.carLoanImage} />

                    {/* Description */}
                    <p>We recognize how difficult it can be to reach out to loan defaulters and how simple it can be to disburse a loan, we've partnered With other financial institutions in the niche to power our user's KYC and onboarding processes. reducing the Stress Of loan recovery and determining users credit score, spending habits and transaction network before approving a loan.</p>
                </div>

                {/* Right Side */}
                <div className={styles.rightSide}>
                    {/* Name Input */}
                    <span className={styles.inputSpan}>
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" placeholder='Enter your name' id='fullName' autoComplete='off' value={name} onChange={(e) => setName(e.target.value)} />
                    </span>

                    {/* Phone Number Input */}
                    <span className={styles.inputSpan}>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="number" placeholder='Enter your phone number' id='phoneNumber' autoComplete='off' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </span>

                    {/* Address Input */}
                    <span className={styles.inputSpan}>
                        <label htmlFor="address">Address</label>
                        <textarea placeholder='Enter your address' id="address" autoComplete='off' value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
                    </span>

                    {/* Submit Button */}
                    <button className={styles.submitButton} onClick={handleSubmit}>Submit</button>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className={styles.contactInfoSection}>
                {/* <br /> */}
                {/* <h2>Contact Information</h2> */}

                {/* Phone Number */}
                <div className={styles.contactInfoItem}>
                    <h3>Phone Number</h3>
                    <Link href="tel:+918691030707">+91 86910 30707</Link>
                </div>

                {/* Email Address */}
                <div className={styles.contactInfoItem}>
                    <h3>Email Address</h3>
                    <Link href="mailto:support@rupiefinance.com">support@rupiefinance.com</Link>
                </div>

                {/* Address */}
                <div className={styles.contactInfoItem}>
                    <h3>Address</h3>
                    <Link href="https://maps.app.goo.gl/jUBjw7g3TQB6meXE6">H5 Kamgar Nagar Kurla East, Mumbai 400024.</Link>
                </div>
            </section>
        </main>
    );
};

export default page;