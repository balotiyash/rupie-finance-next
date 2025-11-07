/** 
 * File: src/components/Footer/Footer.tsx
 * Author: Yash Balotiya, Neha Balotia
 * Description: This file contains the Footer component for the application.
 * Created on: 03/10/2025
 * Last Modified: 07/11/2025
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
                        <Link href="/loans">Loans</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </span>

                    {/* Other Links */}
                    <span className={styles.pageLinks}>
                        <h3>Other Links</h3>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/terms-of-service">Terms & Conditions</Link>
                        <Link href="/refund-cancellation">Refund & Cancellation</Link>
                    </span>

                    {/* Contact Links */}
                    <span className={styles.pageLinks}>
                        <h3>Contact Us</h3>
                        <Link href="tel:+918691030707">+91 86910 30707</Link>
                        <Link href="mailto:support@rupiefinance.com">support@rupiefinance.com</Link>
                        <Link href="https://maps.app.goo.gl/jUBjw7g3TQB6meXE6" target='_blank'>Mumbai - 400024</Link>
                    </span>
                </div>
            </section>

            {/* Copyright Section */}
            <div className={styles.copyright}>
                <p>© {new Date().getFullYear()} Rupie Finance. All rights reserved to Krepco Technology Private Limited.</p>
            </div>
        </footer>
    );
};

// Exporting Footer Component
export default Footer;