/** 
 * File: src/components/HomePage/HeroSection.tsx
 * Author: Neha Balotia
 * Description: This file contains the HeroSection component for the homepage.
 * Created on: 26/10/2025
 * Last Modified: 26/10/2025
*/

'use client';

// Importing required modules & libraries
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./HeroSec.module.css";
import Typewriter from 'typewriter-effect';
// import Image from 'next/image';
// import Person from '../../../public/images/person.png'

const HeroSec = () => {
    return (
        <>
            <div className={styles.heroSec}>
                <div className={styles.textContainer}>
                    <h1>Obtain a {" "}
                    <span className={styles.typewriter}>
                        <Typewriter
                            options={{
                                strings: ['Safe', 'Secure', 'Fast'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                    Loan </h1>
                </div>
                <div className={styles.imageContainer}>
                    <img src="/images/person.png" alt="Person" className={styles.personImg} />
                </div>
            </div>
        </>
    );
}

export default HeroSec