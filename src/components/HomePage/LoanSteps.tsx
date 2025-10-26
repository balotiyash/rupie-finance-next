/** 
 * File: src/components/HomePage/LoanSteps.tsx
 * Author: Yash Balotiya
 * Description: Loan application steps component.
 * Created on: 24/08/2025
 * Last Modified: 04/10/2025
*/

'use client';

// Importing required modules & libraries
import React, { useState, useEffect } from "react";
import styles from "./LoanSteps.module.css";
import IndividualStep from "./IndividualSteps";

// Loan application steps
const LoanSteps = () => {
    const steps = [
        "Sign up using your mobile number.",
        "Enter your basic information & check eligibility.",
        "Verify your profile by uploading KYC documents.",
        "Choose your loan amount and tenure.",
        'Sign the agreement by OTP',
        "Get the loan disbursed directly into your bank account.",
    ];

    // 👇 Define matching images for each step
    const stepImages_old = [
        "https://ik.imagekit.io/krazybee/kreditbee_in/InnerPages/PersonalLoan/How_To_Apply_for_PersonalLoan_Steps1.png",
        "https://ik.imagekit.io/krazybee/kreditbee_in/InnerPages/PersonalLoan/How_To_Apply_for_PersonalLoan_Steps2.png",
        "https://ik.imagekit.io/krazybee/kreditbee_in/InnerPages/PersonalLoan/How_To_Apply_for_PersonalLoan_Steps3.png",
        "https://ik.imagekit.io/krazybee/kreditbee_in/InnerPages/PersonalLoan/How_To_Apply_for_PersonalLoan_Steps4.png",
        "https://ik.imagekit.io/krazybee/kreditbee_in/InnerPages/PersonalLoan/How_To_Apply_for_PersonalLoan_Steps5.png",
        "https://ik.imagekit.io/krazybee/kreditbee_in/InnerPages/PersonalLoan/How_To_Apply_for_PersonalLoan_Steps6.png",
    ];
    
    const stepImages = [
        "/images/laptop-ss/1.png",
        "/images/laptop-ss/2.png",
        "/images/laptop-ss/3.png",
        "/images/laptop-ss/4.png",
        "/images/laptop-ss/5.png",
        "/images/laptop-ss/6.png",
    ];

    // Active step index
    const [activeIndex, setActiveIndex] = useState(0);

    // Handle manual click
    const handleStepClick = (index: number) => {
        setActiveIndex(index);
    };

    // 🔥 Auto-advance every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) =>
                prevIndex === steps.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [steps.length]);

    // Render component
    return (
        // Main container
        <section className={styles.container} id="howtoapply">
            {/* Heading */}
            <h2 className={styles.heading}>How to get Loan on</h2>
            <h1 id={styles.rupieFinanceH1}>Rupie Finance</h1>
            {/* <div className={styles.headingUnderline}></div> */}

            {/* Description */}
            <p className={styles.description}>
                We consider your requirements to be responsibility, so we’ve put up
                these simple steps for you to follow so you can have a happy future
                with ease.
            </p>

            {/* Steps Section */}
            <div className={styles.stepsWrapper}>
                {/* Left Image Section */}
                <div className={styles.imageWrapper}>
                    {/* <img
                        alt="Phone Mockup"
                        src="https://ik.imagekit.io/krazybee/kreditbee_in/banners/New_Web/Inner_Pages/Generic/images_PhoneMockup-iOS.png"
                        className={styles.phoneMockup}
                    /> */}
                    {/* <img
                        alt="Phone Mockup"
                        src="/images/laptop-placeholder.png"
                        className={styles.phoneMockup}
                    /> */}
                    <img
                        alt={`Step ${activeIndex + 1} Illustration`}
                        src={stepImages[activeIndex]} // 👈 change image per step
                        className={styles.stepIllustration}
                    />
                </div>

                {/* Right Steps List */}
                <div className={styles.stepsListWrapper}>
                    <ul className={styles.stepsList}>
                        {steps.map((step, i) => (
                            <IndividualStep
                                key={i}
                                index={i}
                                text={step}
                                active={i === activeIndex}
                                isLast={i === steps.length - 1}
                                onClick={handleStepClick}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default LoanSteps;
