/** 
 * File: src/components/HomePage/IndividualSteps.tsx
 * Author: Yash Balotiya
 * Description: Individual step component for loan application process.
 * Created on: 24/08/2025
 * Last Modified: 24/08/2025
*/

// Importing necessary modules & libraries
import styles from "./IndividualSteps.module.css";

// Defining props for individual step component
interface IndividualStepProps {
    index: number;
    text: string;
    active?: boolean;
    isLast?: boolean;
    onClick?: (index: number) => void;
}

// Individual step component
const IndividualStep: React.FC<IndividualStepProps> = ({
    index,
    text,
    active = false,
    isLast = false,
    onClick = () => { },
}) => {
    // Render individual step
    return (
        // Step list item
        <li
            className={styles.stepItem}
            onClick={() => onClick(index)}
        >
            {/* Step Icon */}
            <div className={styles.stepIconWrapper}>
                {/* Step Number */}
                <span
                    className={`${styles.stepNumber} ${active ? styles.activeStep : ""}`}
                >
                    {index + 1}
                </span>

                {/* Vertical Line */}
                {!isLast && <span className={styles.verticalLine}></span>}
            </div>

            {/* Step Text */}
            <p className={styles.stepText}>{text}</p>
        </li>
    );
};

export default IndividualStep;
