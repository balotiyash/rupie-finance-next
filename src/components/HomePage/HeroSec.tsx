/** 
 * File: src/components/HomePage/HeroSec.tsx
 * Author: Neha Balotia
 * Description: This file contains the HeroSection component for the homepage.
 * Created on: 26/10/2025
 * Last Modified: 27/10/2025
*/

'use client';

// Importing required modules & libraries
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./HeroSec.module.css";
import Typewriter from 'typewriter-effect';

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

const HeroSec = () => {
    return (
        <>
            {/* Hero Section */}
            <div className={styles.heroSec}>
                <div className={styles.leftSec}>
                    <div className={styles.textContainer}>
                        <h1>Obtain a {" "}
                            <span className={styles.typewriter}>
                                {/* Type Writer for Typing effect. */}
                                <Typewriter
                                    options={{
                                        // Array of Words to be displayed in typing one after another.
                                        strings: ['Safe', 'Secure', 'Fast'],
                                        // Start Typing whenever the page is opened.
                                        autoStart: true,
                                        // Keep typing words in loop
                                        loop: true,
                                    }}
                                />
                            </span>
                            Loan </h1>
                    </div>
                    <Link href="#typeSection" onClick={handleScroll} className={styles.getLoanButton}>Get Loan</Link>
                </div>
                {/* Image of a person Holding Phone in Herosection */}
                <div className={styles.imageContainer}>
                    <img src="/images/person.png" alt="Person Showing Loan Approved" className={styles.personImg} />
                </div>
            </div>
        </>
    );
}

export default HeroSec