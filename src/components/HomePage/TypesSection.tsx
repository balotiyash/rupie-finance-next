/** 
 * File: src/components/HomePage/TypesSection.tsx
 * Author: Yash Balotiya
 * Description: This file contains the TypesSection component. It contains types of loan.
 * Created on: 20/08/2025
 * Last Modified: 20/08/2025
*/

// Importing require modules & libraries
import LoanCard from "./LoanCard";
import styles from "./TypesSection.module.css";

// Types of Loans Section
const TypesSection = () => {
    // Return the JSX for TypesSection
    return (
        // Main Types Section
        <section className={styles.typesSection}>
            {/* Main Title */}
            <h2>Type of <span>Loans</span></h2>

            {/* Types of Loans Div */}
            <div className={styles.typesContainer}>
                {/* Personal Loan */}
                <LoanCard image='/svgs/hand-holding-dollar-solid-full.svg' title='Personal Loan' description='Get a personal loan with low interest rates.' />
                
                {/* Business Loan */}
                <LoanCard image='/svgs/sack-dollar-solid-full.svg' title='Business Loan' description='Get a business loan with low interest rates.' />

                {/* Car Loan */}
                <LoanCard image='/svgs/car-solid-full.svg' title='Car Loan' description='Get a car loan with low interest rates.' />
            </div>
        </section>
    )
}

export default TypesSection;