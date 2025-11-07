/** 
 * File: src/components/HomePage/HeroSection.tsx
 * Author: Yash Balotiya, Neha Balotia
 * Description: This file contains the HeroSection component for the homepage.
 * Created on: 20/08/2025
 * Last Modified: 07/11/2025
*/

'use client';

// Importing required modules & libraries
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./HeroSection.module.css";

// Hero Section Component
const HeroSection = () => {
    // State for the current word index
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    // State for the fade animation
    const [fadeState, setFadeState] = useState(styles.fadeIn);

    // Array of words to rotate
    const rotatingWords = ["SIMPLE", "QUICK", "SAFELY", "SECURE"];

    // Change word every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            // Start fade out
            setFadeState(styles.fadeOut);

            // Wait for fade out to finish, then change word and fade in
            setTimeout(() => {
                setCurrentWordIndex(prev => (prev + 1) % rotatingWords.length);
                setFadeState(styles.fadeIn);
            }, 400); // duration matches CSS animation duration
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    // Leaves margin at the top and scrolls to typeSection
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const target = document.getElementById("typeSection");
        if (target) {
            const offset = 200;
            const y = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };


    // Render the hero section
    return (
        // Main Hero Section
        <section className={styles.heroSection}>

            {/* Background blobs */}
            <div className={styles.blobBackground}></div>

            {/* Flying notes image */}
            <img src="/images/flying-money.png" alt="Flying Money" className={styles.flyingNotesImage} />

            {/* Hero content */}
            <div className={styles.heroContent}>
                {/* Hero heading */}
                <h2>
                    Obtain a{" "}
                    <span className={`${styles.rotatingWord} ${fadeState}`}>
                        {rotatingWords[currentWordIndex]}
                    </span>{" "}
                    loan
                </h2>

                {/* Hero description */}
                <p>
                    Get the financial support you need with our tailored loan solutions.
                    Satisfy your demand and immediate needs while enjoying a defined and flexible
                    payback option free of any inconveniences.
                </p>

                {/* Hero button */}
                {/* <Link href="/loans" className={styles.getLoanButton}>Get Loan</Link> */}
                {/* <Link href="#typeSection" className={styles.getLoanButton}>Get Loan</Link> */}

                <Link href="#typeSection" onClick={handleScroll} className={styles.getLoanButton}>Get Loan</Link>

            </div>

            {/* Flying notes image */}
            <img src="/images/flying-money.png" alt="Flying Money" className={styles.flyingNotesImage} />
        </section>
    );
};

// Exporting HeroSection component
export default HeroSection;
