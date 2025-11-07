/** 
 * File: src/app/terms-of-services/page.tsx
 * Author: Yash Balotiya
 * Description: This file contains the Terms of Service page for the application.
 * Created on: 04/10/2025
 * Last Modified: 07/11/2025
*/

// Importing Required Modules & Libraries
import React from 'react';
import style from '@/app/privacy-policy/page.module.css';

// Privacy Policy Page Component
const page = () => {
    return (
        // Main Content
        <main className={style.main}>
            <section className={`${style.aboutSection} ${style.rulesSection}`}>
                {/* Refund & Cancellation Policy */}
                <br />
                <h3>Refund & Cancellation Policy</h3>
                <h4>Krepco Technology Private Limited (Rupie Finance)</h4>

                <p>At Krepco Technology Private Limited, we aim to provide transparent and customer-friendly financial services. This Refund & Cancellation Policy outlines the terms applicable to refunds, cancellations, and auto-debit mandates (NACH/eMandates) initiated through our platform.</p>

                <br />

                {/* List */}
                <ol className={style.ol}>
                    {/* 1 */}
                    <li className={style.li}>Loan Applications</li>
                    <p> Loan applications once submitted cannot be canceled by the applicant. They undergo internal checks, credit assessments, and documentation review.</p>
                    <br />

                    {/* 2 */}
                    <li className={style.li}>Processing Fees</li>
                    <p>A non-refundable processing fee may be charged for verification and credit evaluation purposes. This fee is not refundable under any circumstances, including rejection or withdrawal of the loan application. Any exception (e.g., refundable fee under promotional offers) will be clearly specified at the time of payment </p>
                    <br />

                    {/* 3 */}
                    <li className={style.li}>Loan Disbursement</li>
                    <p>Loans once disbursed and accepted by the borrower are not eligible for cancellation. The repayment terms and conditions agreed upon in the loan agreement remain binding.</p>
                    <br />

                    {/* 4 */}
                    <li className={style.li}>Duplicate Transactions</li>
                    <p> In case of duplicate or excess payments, the extra amount will be verified and refunded to the original payment method within 7-10 working days.</p>
                    <br />

                    {/* 5 */}
                    <li className={style.li}>NACH/eMandate Cancellation</li>
                    <p> If you have registered a NACH/eMandate (auto-debit) with us for EMI payments:</p>
                    <ul className={style.ul}>
                        <li className={style.li}>You may request cancellation of the mandate by submitting a written request to us at least 7 working days before the next due date.</li>
                        <li className={style.li}>The request must be sent to support@rupiefinance.com along with your Loan ID and registered contact details.</li>
                        <li className={style.li}>Upon verification, the NACH mandate will be deactivated, and you will be responsible for paying upcoming EMIs manually.</li>
                        <li className={style.li}>Cancellation of NACH does not waive your repayment obligations under the loan agreement.</li>
                    </ul>
                    <br />

                    {/* 6 */}
                    <li className={style.li}>Grievance Redressal</li>
                    <p>For any queries or refund-related concerns, please contact us:</p>
                    <b>Krepco Technology Private Limited</b>
                    <p>Email: <a href="mailto:support@rupiefinance.com">support@rupiefinance.com</a></p>
                    <p>Phone: <a href="tel:8691030707">+91 86910 30707</a></p>
                    <b>Registered Office:</b>
                    <p>11/F, Kamgar Nagar, S G Barve Marg, Kurla (East),  Mumbai, Maharashtra, India – 400024.</p>
                    <br />
                    <p>Krepco Technology Private Limited reserves the right to modify this policy at any time. All decisions regarding refunds or cancellations will be at the sole discretion of the company in accordance with internal compliance and regulatory guidelines.</p>
                </ol>
                <br />
            </section>
        </main>
    );
};

// Exporting the Refund & Cancellation Page Component
export default page;