/** 
 * File: src/app/loans/page.tsx
 * Author: Yash Balotiya
 * Description: This file contains the Loans page for the application.
 * Created on: 15/11/2025
 * Last Modified: 15/11/2025
*/

// Importing required modules & libraries
import React from 'react';
import styles from './page.module.css';
import LoanCard from '@/components/LoansPage/LoanCard';

// Loans Page Component
const page = () => {
    // Render Loans Page
    return (
        // Main Loans Page Section
        <main className={styles.main}>
            {/* Loans Header */}
            <h1 className={styles.title}>Our <span>Services</span></h1>
            
            {/* Business Loan Card */}
            <LoanCard
                imageSrc='/images/business-loan-3d-.png' 
                title="Business Loan"
                description="Empower your business with our tailored business loans."
                features={[
                    "Loan Amount: Up to ₹50 Lakhs",
                    "Interest Rate: Starting at 10.5% p.a.",
                    "Repayment Tenure: Up to 5 years",
                    "Paperless and fully digital process",
                    "Quick Approval Process"
                ]}
                reverse={false}
            />
            
            {/* Vehicle Loan Card */}
            <LoanCard
                imageSrc='/images/vehicle-loan-3d-.png' 
                title="Vehicle Loan"
                description="Drive your dreams with our flexible vehicle loans."
                features={[
                    "Loan Amount: Up to ₹50 Lakhs",
                    "Interest Rate: Starting at 10.5% p.a.",
                    "Repayment Tenure: Up to 5 years",
                    "Paperless and fully digital process",
                    "Quick Approval Process"
                ]}
                reverse={true}
            />
            
            {/* Personal Loan Card */}
            <LoanCard
                imageSrc='/images/personal-loan-3d-.png' 
                title="Personal Loan"
                description="Get the funds you need with our easy personal loans."
                features={[
                    "Loan Amount: Up to ₹50 Lakhs",
                    "Interest Rate: Starting at 10.5% p.a.",
                    "Repayment Tenure: Up to 5 years",
                    "Paperless and fully digital process",
                    "Quick Approval Process"
                ]}
                reverse={false}
            />
        </main>
    );
};

// Exporting Loans Page component
export default page;