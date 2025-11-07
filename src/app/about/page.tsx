/** 
 * File: src/app/about/page.module.css
 * Author: Neha Balotia, Yash Balotiya
 * Description: This file contains About us page For the Application.
 * Created on: 02/11/2025
 * Last Modified: 07/11/2025
*/

// Importing necessary modules
import React from 'react';
import style from './page.module.css';

// About Us Page Component
const page = () => {
	// JSX to render About Us content
	return (
		// Main container
		<main>
			{/* About Us Section */}
			<div className={style.about}>
				{/* Title */}
				<h1>About Us</h1>

				{/* Description */}
				<p>Rupie Finance is a tech-driven fintech venture redefining how small and medium businesses access credit. We understand that business owners earn daily — so why pay EMIs monthly? Our daily EMI loans align with real business cash flows, making repayments easier and smarter.</p>
				<p>With a seamless digital process and a focus on speed, compliance, and user-first design, Rupie Finance delivers a frictionless, flexible, and growth-focused credit experience for India’s entrepreneurs.</p>
			</div>
		</main>
	);
};

// Exporting the About Us Page Component
export default page;