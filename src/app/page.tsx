/** 
 * File: src/app/page.tsx
 * Author: Yash Balotiya
 * Description: This file is the main entry point for the Next.js application.
 * Created on: 19/08/2025
 * Last Modified: 20/08/2025
*/

// Importing Required Modules & Libraries
import HeroSection from "@/components/HomePage/HeroSection";
// import styles from "./page.module.css";
// import Link from "next/link";
import TypesSection from "@/components/HomePage/TypesSection";

// Main Page Component
const page = () => {
    return (
        <main>
            {/* Hero Section */}
            <HeroSection />

            {/* Our Services Section */}
            <TypesSection />
        </main>
    );
}

export default page;
