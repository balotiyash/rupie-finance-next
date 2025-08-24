/** 
 * File: src/components/HomePage/FAQSection.tsx
 * Author: Yash Balotiya
 * Description: FAQ Section component
 * Created on: 24/08/2025
 * Last Modified: 24/08/2025
*/

"use client";

// Importing required module & libraries
import { useState } from "react";
import styles from "./FAQSection.module.css";

const FAQSection = () => {
    // FAQ data
    const faqs = [
        {
            question: "What is this platform about?",
            answer: "This platform helps users learn and grow by providing resources, mentorship, and community support."
        },
        {
            question: "How do I join?",
            answer: "You can join by clicking the 'Sign Up' button at the top-right corner and filling in the required details."
        },
        {
            question: "Is this free to use?",
            answer: "Yes! All core features are free. We also offer premium tools for advanced users."
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

export default FAQSection;
