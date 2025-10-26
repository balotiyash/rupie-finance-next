/**
 * File: src/components/HomePage/ImpactSection.tsx
 * Author: Yash Balotiya
 * Description: Impact Section component for displaying the impact of the organization.
 * Created on: 24/08/2025
 * Last Modified: 04/10/2025
 */

"use client";

// Importing required modules & libraries
import styles from './ImpactSection.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImpactCard from './ImpactCard';
import { useState, useEffect, useRef } from 'react';

// Define the type for impact data items
type ImpactDataItem = {
    name: string;
    role: string;
    image: string;
    description: string;
};

// Impact Section Component
const ImpactSection = () => {
    const sliderRef = useRef<any>(null);
    const [isMobile, setIsMobile] = useState(false);
    
    // Check if device is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        // Set initial state
        checkMobile();
        
        // Add event listener for window resize
        window.addEventListener('resize', checkMobile);
        
        // Cleanup
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    
    // Dynamic slider settings based on screen size
    const getSliderSettings = () => {
        if (isMobile) {
            return {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                arrows: false,
                adaptiveHeight: true,
            };
        }
        
        return {
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
                        slidesToScroll: 1,
                    }
                }
            ]
        };
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
            <Slider 
                ref={sliderRef} 
                {...getSliderSettings()} 
                className={styles.slider}
                key={`${impactData.length}-${isMobile}`}
            >
                {impactData.map((item, index) => (
                    <div key={index} className={styles.slideWrapper}>
                        <ImpactCard
                            name={item.name}
                            role={item.role}
                            image={item.image}
                            description={item.description}
                        />
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default ImpactSection;
