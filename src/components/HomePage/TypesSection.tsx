/** 
 * File: src/components/HomePage/TypesSection.tsx
 * Author: Yash Balotiya, Neha Balotia
 * Description: This file contains the TypesSection component. It contains types of loan.
 * Created on: 20/08/2025
 * Last Modified: 24/10/2025
*/

// Importing require modules & libraries
import LoanCard from "./LoanCard";
import styles from "./TypesSection.module.css";

// Types of Loans Section
const TypesSection = () => {
    // Return the JSX for TypesSection
    return (
        // Main Types Section
        <section className={styles.typesSection} id="typeSection">
            {/* Main Title */}
            <h2>Type of <span>Loans</span></h2>

            {/* Types of Loans Div */}
            <div className={styles.typesContainer}>
                {/* Personal Loan */}
                <LoanCard image='/images/personal-loan.png' title='Personal Loan' description='Get a personal loan with low interest rates.' />

                {/* Business Loan */}
                <LoanCard image='/images/business-loan.png' title='Business Loan' description='Get a business loan with low interest rates.' />

                {/* Two-Wheeler Loan */}
                <LoanCard image='/images/vehicle-loan.png' title='Vehicle Loan' description='Get a two-wheeler loan with low interest rates.' />
            </div>
        </section>
    )
}

export default TypesSection;