/** 
 * File: src/components/HomePage/LoanCard.tsx
 * Author: Yash Balotiya
 * Description: Loan Card component for displaying loan options.
 * Created on: 20/08/2025
 * Last Modified: 20/08/2025
*/

// Importing required modules & Libraries
import styles from "./LoanCard.module.css";
import Link from "next/link";

// Loan Card Props
interface LoanCardProps {
    image: string;
    title: string;
    description: string;
}

// Loan Card Component
const LoanCard: React.FC<LoanCardProps> = ({ image, title, description }) => {
    // Render the Loan Card
    return (
        // Main Loan Card Container
        <div className={styles.loanCard}>
            {/* Loan Image */}
            <img src={image} alt={`${title} icon`} className={styles.loanImage} />

            {/* Loan Title */}
            <h3 className={styles.loanTitle}>{title}</h3>

            {/* Loan Description */}
            <p className={styles.loanDescription}>{description}</p>

            {/* Get Loan Button */}
            <Link href="/loans" className={styles.getLoanButton}>Get Loan</Link>
        </div>
    );
}

export default LoanCard;