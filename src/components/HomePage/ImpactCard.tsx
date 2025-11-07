/** 
 * File: src/components/HomePage/ImpactCard.tsx
 * Author: Yash Balotiya
 * Description: Impact Card component for displaying user information
 * Created on: 24/08/2025
 * Last Modified: 07/11/2025
*/

// Importing required modules & libraries
import { useState } from 'react';
import styles from './ImpactCard.module.css';

// Impact Card Component
type ImpactCardProps = {
    name: string;
    role: string;
    image: string;
    description: string;
};

// Impact Card Component
const ImpactCard = ({ name, role, image, description }: ImpactCardProps) => {
    // State to manage full description visibility
    const [showFull, setShowFull] = useState(false);

    // Trim description
    const maxLength = 100; // ✂️ adjust as needed
    const shortDesc =
        description.length > maxLength
            ? description.substring(0, maxLength) + "..."
            : description;

    return (
        // Impact Card Container
        <div className={styles.card}>
            {/* Profile Image */}
            {/* <img src={image} alt={`${name} Photo`} className={styles.image} /> */}
            <img src={'https://avatar.iran.liara.run/username?username=' + name} alt={`${name} Photo`} className={styles.image} />

            {/* Name */}
            <h3 className={styles.title}>{name}</h3>

            {/* Role */}
            <b>{role}</b>

            {/* Description */}
            <p className={styles.description}>
                {showFull ? description : shortDesc}{" "}
                {description.length > maxLength && (
                    <span
                        className={styles.readMore}
                        onClick={() => setShowFull(!showFull)}
                    >
                        {showFull ? "Show Less" : "Read More"}
                    </span>
                )}
            </p>
        </div>
    );
};

// Exporting Impact Card Component
export default ImpactCard;