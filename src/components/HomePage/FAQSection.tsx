/** 
 * File: src/components/HomePage/FAQSection.tsx
 * Author: Yash Balotiya
 * Description: FAQ Section component
 * Created on: 24/08/2025
 * Last Modified: 07/11/2025
*/

"use client";

// Importing required module & libraries
import { useState } from "react";
import styles from "./FAQSection.module.css";

// FAQ Section Component
const FAQSection = () => {
    // FAQ data
    const faqs = [
        {
            question: "1. What is Rupie Finance?",
            answer: "Rupie Finance is a trusted lending platform that provides two-wheeler loans and MSME business loans through RBI-registered NBFC partners. We ensure a 100% digital process, quick approvals, and transparent terms."
        },
        {
            question: "2. Who is eligible to apply for a loan?",
            answer: "You can apply for a loan if you meet these conditions: Age: 21 - 60 years, Employment: Salaried or Self-employed, Credit History: Minimum CIBIL score of 700, Income: Minimum monthly income of ₹10,000."
        },
        {
            question: "3. What types of loans does Rupie Finance offer?",
            answer: "Two-Wheeler Loans: Finance for new or used bikes/scooters. MSME Business Loans: For small businesses to manage working capital, stock purchase, or expansion."
        },
        {
            question: "4. How much loan can I get?",
            answer: "Two-Wheeler Loans: Up to ₹1.5 lakh. MSME Loans: Up to ₹5 lakh. The loan amount depends on your eligibility and credit profile."
        },
        {
            question: "5. What is the process to apply for a loan?",
            answer: "Sign Up: Enter your mobile number and verify OTP. Fill Basic Details: Personal, employment and income details. Upload Documents: Aadhaar, PAN, income proof. Get Approval & Disbursal: Loan gets approved and credited within 24-48 hours*"
        },
        {
            question: "6. What documents do I need?",
            answer: "Identity Proof: Aadhaar Card, PAN Card. Income Proof: Salary slips / Bank statement / GST details. Vehicle Documents: RC & insurance (for two-wheeler loans)."
        },
        {
            question: "7. How long does it take to get the loan?",
            answer: "On average, 24-48 hours after successful verification."
        },
        {
            question: "8. Do you charge any fees?",
            answer: "Yes, a processing fee and applicable GST will be charged. The details will be shown before you proceed with the loan."
        },
        {
            question: "9. What are the interest rates?",
            answer: "Interest rates start from 1.25% per month for MSME loans and two-wheeler loans. The final rate depends on your credit profile."
        },
        {
            question: "10. Is Rupie Finance an NBFC?",
            answer: "No, Rupie Finance acts as a Loan Service Provider (LSP) for RBI-registered NBFC partners."
        },
        {
            question: "11. How do I contact Rupie Finance for support?",
            answer: "You can reach us via: Email: support@rupiefinance.com WhatsApp/Call: +91-8691030707."
        }
    ];

    // State to manage active FAQ
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // Toggle FAQ visibility
    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Render FAQ section
    return (
        // Main FAQ Section
        <section className={styles.faqSection}>
            {/* Section Title */}
            <h2>Frequently Asked <span className={styles.highlight}>Questions</span></h2>

            {/* Accordion Container */}
            <div className={styles.accordion}>
                {faqs.map((faq, index) => (
                    <div key={index} className={styles.item}>
                        <button className={styles.question} onClick={() => toggleFAQ(index)}>
                            <span>{faq.question}</span>
                            <span className={styles.icon}>
                                {activeIndex === index ? "−" : "+"}
                            </span>
                        </button>

                        <div
                            className={`${styles.answer} ${activeIndex === index ? styles.show : ""}`}
                        >
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

// Exporting FAQ Section Component
export default FAQSection;
