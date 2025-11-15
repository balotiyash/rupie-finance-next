/** 
 * File: src/components/LoansPage/LoanCard.tsx
 * Author: Yash Balotiya
 * Description: This file contains the Loan Card component for the Loans page.
 * Created on: 15/11/2025
 * Last Modified: 15/11/2025
*/

// Importing required modules & libraries
import React from 'react';
import styles from './LoanCard.module.css';
import Link from 'next/link';

// Defining props for LoanCard component
interface LoanCardProps {
    imageSrc?: string;
    title?: string;
    description?: string;
    features?: string[];
    reverse?: boolean;
};

// Loan Card Component
const LoanCard = (props: LoanCardProps) => {
    // Render Loan Card
    return (
        // Loan Card Section
        <section className={`${styles.loanCard} ${props.reverse ? styles.reverse : ''}`}>
            {/* Loan Image Section */}
            <div className={styles.side}>
                {/* Image representing Business Loan */}
                <img src={props.imageSrc} alt={props.title} />
            </div>

            {/* Loan Details Section */}
            <div className={styles.side}>
                {/* Details about Business Loan */}
                <span>
                    <h2 className={styles.title}>{props.title}</h2>
                    <p className={styles.description}>{props.description}</p>
                </span>

                {/* Key Features List */}
                <ul>
                    <b className={styles.bold}>Key Features:</b>
                    {props.features && props.features.map((feature, index) => (
                        <li key={index} className={styles.list}>{feature}</li>
                    ))}
                </ul>

                {/* Apply Now Button */}
                <Link href="/contact" className={styles.button}>Apply Now</Link>
            </div>
        </section>
    );
};

// Exporting Loan Card component
export default LoanCard;