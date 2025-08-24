/** 
 * File: src/components/HomePage/WhyRFSection.tsx
 * Author: Yash Balotiya
 * Description: This component displays the "Why Choose Rupie Finance?" section on the homepage.
 * Created on: 24/08/2023
 * Last Modified: 24/08/2023
*/

// Importing required modules & libraries
import styles from './WhyRFSection.module.css'

// Main component
const WhyRFSection = () => {
    return (
        // Main section
        <section className={styles.container}>
            {/* Section heading */}
            <h2 className={styles.heading}>Why Choose <span className={styles.highlight}>Rupie Finance</span>?</h2>

            {/* Section description */}
            <p className={styles.description}>
                Rupie Finance is a digital app that provides simple, affordable, and accessible financial products and services.
            </p>

            {/* Features grid */}
            <div className={styles.featuresGrid}>
                {/* Feature item 1 */}
                <span className={styles.featureItem}>
                    <img src="/images/paper-less.png" alt="Paper Less Icon" />
                    <p>100% Paperless Process</p>
                </span>

                {/* Feature item 2 */}
                <span className={styles.featureItem}>
                    <img src="/images/low-interest.png" alt="Low Interest Icon" />
                    <p>Low Interest Rates</p>
                </span>

                {/* Feature item 3 */}
                <span className={styles.featureItem}>
                    <img src="/images/secure.png" alt="Secure Icon" />
                    <p>Simple & Secure Process</p>
                </span>

                {/* Feature item 4 */}
                <span className={styles.featureItem}>
                    <img src="/images/less-time.png" alt="Quick Approval Icon" />
                    <p>Fast Processing & Disbursal</p>
                </span>
            </div>
        </section>
    );
}

export default WhyRFSection;