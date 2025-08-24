/** 
 * File: src/components/HomePage/CheckCibilSection.tsx
 * Author: Yash Balotiya
 * Description: CIBIL Check Section.
 * Created on: 24/08/2025
 * Last Modified: 24/08/2025
*/

// Importing required modules & Libraries
import Link from "next/link";
import styles from "./CheckCibilSection.module.css";

// CIBIL Check Section Component
const CheckCibilSection = () => {
    return (
        // CIBIL Check Section
        <section className={styles.container}>
            {/* CIBIL Check Image */}
            <img src="/images/cibil-check.png" alt="Check CIBIL Score" />

            {/* CIBIL Check Text */}
            <div>
                <h3>Check your Credit Score Now!!</h3>
                <p>Check for detailed report & insights on your credit history.</p>
                <Link href="/cibil-report" className={styles.viewBtn}>View Report</Link>
            </div>
        </section>
    );
}

export default CheckCibilSection;