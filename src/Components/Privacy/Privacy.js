import React from 'react';
import './privacy.scss';
import Footer from '../Footer/Footer';

const PrivacyPolicy = () => {
    return (
        <>
            <div className='privacy'>
                <h1 style={{ textAlign: 'center' }}>Privacy Policy</h1>

                <p>
                    At <strong>Rudra Cyber Perficient</strong>, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our services and access our website.
                </p>

                <h2>SECTION 1 - INFORMATION WE COLLECT</h2>
                <p>
                    When you visit our website, we may collect the following types of information:
                    <ul>
                        <li><strong>Personal Information:</strong> Your name, email address, phone number, and payment details when you register or make a purchase.</li>
                        <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, and browsing behavior.</li>
                    </ul>
                </p>

                <h2>SECTION 2 - HOW WE USE YOUR INFORMATION</h2>
                <p>
                    The information we collect is used to:
                    <ul>
                        <li>Provide and improve our services.</li>
                        <li>Process transactions securely.</li>
                        <li>Send updates, promotional materials, and service-related communications.</li>
                        <li>Analyze user behavior to enhance website functionality and user experience.</li>
                    </ul>
                </p>

                <h2>SECTION 3 - DATA PROTECTION</h2>
                <p>
                    We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and regular security audits.
                </p>

                <h2>SECTION 4 - SHARING YOUR INFORMATION</h2>
                <p>
                    We do not sell, trade, or rent your personal information to third parties. However, we may share your data with:
                    <ul>
                        <li>Trusted service providers who assist us in delivering our services.</li>
                        <li>Legal authorities, if required by law or to protect our legal rights.</li>
                    </ul>
                </p>

                <h2>SECTION 5 - YOUR RIGHTS</h2>
                <p>
                    You have the right to:
                    <ul>
                        <li>Access and request a copy of the information we hold about you.</li>
                        <li>Request corrections to your personal data if it is inaccurate.</li>
                        <li>Withdraw your consent to data processing at any time.</li>
                        <li>Request the deletion of your personal information, subject to legal obligations.</li>
                    </ul>
                </p>

                <h2>SECTION 6 - COOKIES</h2>
                <p>
                    Our website uses cookies to improve your browsing experience. Cookies help us understand your preferences and provide tailored content. You can choose to disable cookies through your browser settings, but this may limit certain functionalities on our website.
                </p>

                <h2>SECTION 7 - CHANGES TO THIS PRIVACY POLICY</h2>
                <p>
                    We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page, and the updated policy will take effect immediately upon posting.
                </p>

                <h2>SECTION 8 - CONTACT US</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us:
                    <ul>
                        <li>Email: support@rudracyberperficient.com</li>
                        <li>Phone: +91-123-456-7890</li>
                    </ul>
                </p>
            </div>
            <Footer/>
        </>
    );
};

export default PrivacyPolicy;
