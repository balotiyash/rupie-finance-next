/** 
 * File: src/components/Footer/Footer.tsx
 * Author: Yash Balotiya
 * Description: This file contains the Footer component for the application.
 * Created on: 03/10/2025
 * Last Modified: 03/10/2025
*/

// Importing Required Modules & Libraries
import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

// Footer Component
const Footer = () => {
    return (
        // Footer Section
        <footer className={styles.footer}>
            <section className={styles.footerContainer}>
                {/* Company Information */}
                <div className={styles.companyName}>
                    <h1>Rupie Finance</h1>
                    <p>Your trusted partner in finance.</p>
                </div>

                {/* Links Section */}
                <div className={styles.linksDiv}>
                    {/* Page Links */}
                    <span className={styles.pageLinks}>
                        <h3>Page Links</h3>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/contact">Contact</Link>
                    </span>

                    {/* Other Links */}
                    <span className={styles.pageLinks}>
                        <h3>Other Links</h3>
                        <Link href="/about">Privacy Policy</Link>
                        <Link href="/">Terms of Service</Link>
                        <Link href="/services">Refund & Cancellation</Link>
                    </span>

                    {/* Contact Links */}
                    <span className={styles.pageLinks}>
                        <h3>Contact Us</h3>
                        <Link href="/about">+91 86910 30707</Link>
                        <Link href="/">support@rupiefinance.com</Link>
                        <Link href="/services">Mumbai - 400024</Link>
                    </span>
                </div>
            </section>

            {/* Copyright Section */}
            <div className={styles.copyright}>
                <p>© 2025 Rupie Finance. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer