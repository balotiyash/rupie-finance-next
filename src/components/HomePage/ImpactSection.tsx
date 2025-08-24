/**
 * File: src/components/HomePage/ImpactSection.tsx
 * Author: Yash Balotiya
 * Description: Impact Section component for displaying the impact of the organization.
 * Created on: 24/08/2025
 * Last Modified: 24/08/2025
 */

"use client";

// Importing required modules & libraries
import styles from './ImpactSection.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImpactCard from './ImpactCard';
import { useState, useEffect } from 'react';

// Define the type for impact data items
type ImpactDataItem = {
    name: string;
    role: string;
    image: string;
    description: string;
};

// Impact Section Component
const ImpactSection = () => {
    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    // State to hold impact data
    const [impactData, setImpactData] = useState<ImpactDataItem[]>([]);

    // Fetch data from API
    const fetchData = async () => {
        const response = await fetch('/jsons/publicImpact.json');
        const data = await response.json();

        // ✅ Fix: Access the nested `impact` array
        return data.impact || [];
    };

    // Fetch data on component mount
    useEffect(() => {
        const getData = async () => {
            const data = await fetchData();
            setImpactData(data);
        };
        getData();
    }, []);

    // Rendering the Impact Section
    return (
        // Impact Section Container
        <section className={styles.container}>
            {/* Section Title */}
            <h2>Our <span className={styles.highlight}>Impact</span></h2>

            {/* Slider Component */}
            <Slider {...settings} className={styles.slider}>
                {impactData.map((item, index) => (
                    // Impact Card Component
                    <ImpactCard
                        key={index}
                        name={item.name}
                        role={item.role}
                        image={item.image}
                        description={item.description}
                    />
                ))}
            </Slider>
        </section>
    );
};

export default ImpactSection;
