/** 
 * File: src/app/terms-of-services/page.tsx
 * Author: Yash Balotiya, Neha Balotia
 * Description: This file contains the Terms of Service page for the application.
 * Created on: 04/10/2025
 * Last Modified: 07/11/2025
*/

// Importing Required Modules & Libraries
import React from 'react';
import style from '@/app/privacy-policy/page.module.css';
import Link from 'next/link';

// Privacy Policy Page Component
const page = () => {
    return (
        // Main Content
        <main>
            <section className={`${style.aboutSection} ${style.rulesSection}`}>
                {/* Terms and Conditions */}
                <br />
                <h3>Terms and Conditions</h3>
                <h4>Website: <Link href="https://www.rupiefinance.com">www.rupiefinance.com</Link></h4>

                <p>This Website is operated by <b>Krepco Technology Private Limited</b>, a company registered under the Companies Act, 2013 having its registered office at:
                </p>

                <b>H5 Kamgar Nagar Kurla East, Mumbai 400024.</b>

                <p>By accessing or using this Website, you agree to the terms below. If you do not agree, you may not use this Website.</p>

                <br />

                {/* List */}
                <ol className={style.ol}>
                    {/* 1 */}
                    <li className={style.li}>Definitions</li>
                    <ul className={style.ul}>
                        <li><b>"Company", "We", "Us", or "Our"</b> means Krepco Technology Private Limited.</li>
                        <li><b>"User", "You", or "Your"</b> means any person accessing or using this Website.</li>
                        <li><b>"Services"</b> refers to financial services offered by the Company, primarily MSME loans.</li>
                    </ul>
                    <br />

                    {/* 2 */}
                    <li className={style.li}>Eligibility</li>
                    <p>To use our Services, you must:</p>
                    <ul className={style.ul}>
                        <li>Be at least 18 years of age;</li>
                        <li>Be a resident of India;</li>
                        <li>Be legally competent to enter into a contract;</li>
                        <li>Intend to use MSME loan services for business purposes only.</li>
                    </ul>
                    <br />

                    {/* 3 */}
                    <li className={style.li}>Use of the Website</li>
                    <p>You agree not to:</p>
                    <ul className={style.ul}>
                        <li>Use the Website for fraudulent or unlawful purposes;</li>
                        <li>Provide false or misleading information;</li>
                        <li>Interfere with the operation of the Website or try to access other users’ data;</li>
                        <li>Attempt to reverse-engineer or replicate any part of the Website.</li>
                    </ul>
                    <br />

                    {/* 4 */}
                    <li className={style.li}>Loan Services</li>
                    <p>We maintain industry-standard security measures to protect your data:</p>
                    <ul className={style.ul}>
                        <li>All MSME loan applications are subject to eligibility checks, document verification, and approval under the Company’s policies and Nidhi rules.</li>
                        <li>Loan decisions are solely at the discretion of the Company.</li>
                        <li>The Company does not guarantee any sanction or disbursement without completing the offline due diligence process.</li>
                    </ul>
                    <br />

                    {/* 5 */}
                    <li className={style.li}>No Digital Onboarding</li>
                    <p>Krepco Technology Private Limited provides digital onboarding for MSME loan applicants directly through its official website, <Link href="https://www.rupiefinance.com">www.rupiefinance.com</Link>. All loan applications submitted online are processed solely by the Company through its internal systems. Please ensure that you only submit applications through our official website or directly through authorized communication channels. We do not endorse or take responsibility for applications submitted through unofficial or fraudulent platforms.</p>
                    <br />

                    {/* 6 */}
                    <li className={style.li}>Intellectual Property</li>
                    <p>All content, logos, trademarks, and software on this Website are the property of Krepco Technology Private Limited or its licensors. Unauthorized use is strictly prohibited.</p>
                    <br />

                    {/* 7 */}
                    <li className={style.li}>Privacy Policy</li>
                    <p>Your use of this Website is governed by our <Link href="./privacy.html">Privacy Policy</Link>, which explains how we collect and use personal data.</p>
                    <br />

                    {/* 8 */}
                    <li className={style.li}>Third-Party Links</li>
                    <p>The Website may link to other websites for informational purposes. Krepco Technology Private Limited is not responsible for the content, privacy, or practices of those third-party websites.</p>
                    <br />

                    {/* 9 */}
                    <li className={style.li}>Limitation of Liability</li>
                    <p>The Company is not liable for:</p>
                    <ul className={style.ul}>
                        <li>Any direct, indirect, or incidental damages arising from your use of the Website;</li>
                        <li>Decisions made based on information available on the Website;</li>
                        <li>Temporary unavailability or technical failures of the Website.</li>
                    </ul>
                    <br />

                    {/* 10 */}
                    <li className={style.li}>Disclaimer</li>
                    <p>The Website is provided on an "as-is" basis. While we aim to keep the information accurate, we do not guarantee its completeness or reliability.</p>
                    <br />

                    {/* 11 */}
                    <li className={style.li}>Amendments</li>
                    <p>We may revise these Terms at any time without notice. It is your responsibility to check this page periodically. Your continued use of the Website constitutes your acceptance of any changes.</p>
                    <br />

                    {/* 12 */}
                    <li className={style.li}>Governing Law and Jurisdiction</li>
                    <p>These Terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.</p>
                    <br />

                    {/* 13 */}
                    <li className={style.li}>Contact Us</li>
                    <b>Krepco Technology Private Limited</b>
                    <p>Email: <Link href="mailto:support@rupiefinance.com">support@rupiefinance.com</Link></p>
                    <p>Phone: <Link href="tel:8691030707">+91 86910 30707</Link></p>
                    <b>Registered Office:</b>
                    <p>11/F, Kamgar Nagar, S G Barve Marg, Kurla (East),  Mumbai, Maharashtra, India – 400024.</p>
                </ol>
                <br />
            </section>
        </main>
    );
};

// Exporting Terms of Service Page Component
export default page;