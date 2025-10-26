/** 
 * File: src/app/privacy-policy/page.tsx
 * Author: Yash Balotiya
 * Description: This file contains the Privacy Policy page for the application.
 * Created on: 04/10/2025
 * Last Modified: 04/10/2025
*/

// Importing Required Modules & Libraries
import React from 'react';
import style from '@/app/privacy-policy/page.module.css';
import Link from 'next/link';

// Privacy Policy Page Component
const page = () => {
    return (
        // Main Content
        <main className={style.main}>
            <section className={`${style.aboutSection} ${style.rulesSection}`}>
                {/* Vision */}
                <br />

                {/* Privacy Policy */}
                <h3>Privacy Policy</h3>

                <p><b>Krepco Technology Private Limited</b> (“Company”, “we”, “our”, or “us”), operating under the brand name
                    <b> Rupie Finance</b> through the website <Link href="https://www.rupiefinance.com"><b>www.rupiefinance.com</b></Link>, is
                    committed to protecting your privacy and safeguarding your personal and financial information. This
                    Privacy Policy explains how we collect, use, disclose and protect the information you provide when you
                    use our services.
                </p>

                <p>By accessing our website or using our services, you consent to the practices described in this Privacy
                    Policy.</p>

                {/* List */}
                <ol className={style.ol}>
                    {/* 1 */}
                    <li className={style.li}>Information we Collect
                        {/* Sub List */}
                        <ol className={style.subList + ' ' + style.ol} type="a">
                            {/* a */}
                            <li className={style.li}>
                                <i>Personal Information</i>
                                <ul className={style.ul}>
                                    <li>Full Name</li>
                                    <li>Residential Address</li>
                                    <li>Date of Birth</li>
                                    <li>PAN, Aadhaar, Voter ID, or other KYC documents</li>
                                    <li>Mobile Number and Email Address</li>
                                </ul>
                            </li>
                            {/* b */}
                            <li className={style.li}>
                                <i>Financial Information</i>
                                <ul className={style.ul}>
                                    <li>Bank Account Details</li>
                                    <li>Income and Employment Details</li>
                                    <li>Credit Score and Credit History</li>
                                    <li>PAN, Aadhaar, Voter ID, or other KYC documents</li>
                                    <li>Loan Application and Repayment Information</li>
                                </ul>
                            </li>
                            {/* c */}
                            <li className={style.li}>
                                <i>Technical and Usage Information</i>
                                <ul className={style.ul}>
                                    <li>IP Address and Location</li>
                                    <li>Device Type, Operating System and Browser</li>
                                    <li>Date, Time and Duration of Website Use</li>
                                    <li>Clickstream Data and User Behavior</li>
                                </ul>
                            </li>
                        </ol>
                    </li>

                    <br />

                    {/* 2 */}
                    <li className={style.li}>
                        Use of Information
                        <p className={style.p}>Your information is used for purposes such as:</p>
                        <ul className={style.ul}>
                            <li>Verifying identity and completing KYC</li>
                            <li>Processing loan applications and disbursements</li>
                            <li>Assessing creditworthiness and fraud prevention</li>
                            <li>Managing collections and repayments</li>
                            <li>Sending alerts, updates and service communications</li>
                            <li>Fulfilling legal and regulatory obligations</li>
                            <li>Improving our services, security and user experience</li>
                            <li>Conducting internal research and analytics</li>
                            <li>Marketing our services (with your consent)</li>
                        </ul>
                    </li>

                    <br />
                    
                    {/* 3 */}
                    <li className={style.li}>
                        Sharing of Information
                        <p className={style.p}>We may share your information with:</p>
                        <ul className={style.ul}>
                            <li>Regulatory Bodies</li>
                            <li>Credit Bureaus</li>
                            <li>Payment Gateways and Banks</li>
                            <li>Verification Agencies and KYC Partners</li>
                            <li>Collection and Recovery Partners</li>
                            <li>Technology and Hosting Service Providers</li>
                            <li>Group Entities or Affiliates for compliance or service purposes</li>
                        </ul>
                        <p className={style.p}>We do not sell your personal data to third parties.</p>
                    </li>

                    <br />

                    {/* 4 */}
                    <li className={style.li}>
                        Data Storage and Protection
                        <p className={style.p}>We maintain industry-standard security measures to protect your data:</p>
                        <ul className={style.ul}>
                            <li>Secure data storage on servers located in India</li>
                            <li>Encryption of sensitive information during transmission and at rest</li>
                            <li>Role-based access control and activity monitoring</li>
                            <li>Periodic security audits and compliance reviews</li>
                        </ul>
                    </li>

                    <br />
                    
                    {/* 5 */}
                    <li className={style.li}>
                        Your Rights
                        <p className={style.p}>You have the right to:</p>
                        <ul className={style.ul}>
                            <li>Access your personal information</li>
                            <li>Request corrections or updates</li>
                            <li>Withdraw your consent (where applicable)</li>
                            <li>Request deletion of data (subject to legal obligations)</li>
                            <li>Opt out of non-essential communications</li>
                        </ul>
                        <p className={style.p}>To exercise your rights, email us at: <Link
                            href="mailto:support@rupiefinance.com">support@rupiefinance.com</Link></p>
                    </li>

                    <br />

                    {/* 6 */}
                    <li className={style.li}>
                        We retain your data as long as necessary to:
                        <ul className={style.ul}>
                            <li>Provide services</li>
                            <li>Comply with laws and regulations</li>
                            <li>Resolve disputes</li>
                            <li>Maintain records for auditing and reporting</li>
                        </ul>
                    </li>

                    <br />
                    
                    {/* 7 */}
                    <li className={style.li}>
                        Cookies and Tracking
                        <p className={style.p}>Our website may use cookies and tracking technologies to:</p>
                        <ul className={style.ul}>
                            <li>Personalize your experience</li>
                            <li>Analyze traffic and user behavior</li>
                            <li>Secure user sessions</li>
                        </ul>
                        <p className={style.p}>You may manage cookies via your browser settings.</p>
                    </li>

                    <br />

                    {/* 8 */}
                    <li className={style.li}>
                        Children’s Privacy
                        <p className={style.p}>Our services are intended for individuals 18 years and older. We do not knowingly collect data from
                            minors.</p>
                    </li>

                    <br />

                    {/* 9 */}
                    <li className={style.li}>
                        Policy Updates
                        <p className={style.p}>We reserve the right to update this Privacy Policy at any time. Updates will be posted on our
                            website. Continued use of our services implies acceptance of the updated policy.</p>
                    </li>

                    <br />
                    
                    {/* 10 */}
                    <li className={style.li}>
                        Contact Us
                        <p className={style.p}>If you have any questions or concerns regarding this Privacy Policy, please contact us:</p>
                        <p className={style.p}><b>Krepco Technology Private Limited</b></p>
                        <p className={style.p}>Address: 11/F, Kamgar Nagar, S G Barve Marg, Kurla (East), Mumbai, Maharashtra, India – 400024</p>
                        <p className={style.p}>Email: <Link href="mailto:support@rupiefinance.com">support@rupiefinance.com</Link></p>
                        <p className={style.p}>Website: <Link href="https://www.rupiefinance.com">www.rupiefinance.com</Link></p>
                    </li>
                </ol>
            </section>
        </main>
    );
}

export default page;