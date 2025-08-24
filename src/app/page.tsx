/** 
 * File: src/app/page.tsx
 * Author: Yash Balotiya
 * Description: This file is the main entry point for the Next.js application.
 * Created on: 19/08/2025
 * Last Modified: 24/08/2025
*/

// Importing Required Modules & Libraries
import CheckCibilSection from "@/components/HomePage/CheckCibilSection";
import HeroSection from "@/components/HomePage/HeroSection";
import LoanSteps from "@/components/HomePage/LoanSteps";
// import styles from "./page.module.css";
// import Link from "next/link";
import TypesSection from "@/components/HomePage/TypesSection";
import WhyRFSection from "@/components/HomePage/WhyRFSection";

// Main Page Component
const page = () => {
    return (
        <main>
            {/* Hero Section */}
            <HeroSection />

            {/* Our Services Section */}
            <TypesSection />

            {/* Loan Steps Section */}
            <LoanSteps />

            {/* Why Choose Us Section */}
            <WhyRFSection />

            {/* Check Cibil Score Section */}
            <CheckCibilSection />
        </main>
    );
}

export default page;
