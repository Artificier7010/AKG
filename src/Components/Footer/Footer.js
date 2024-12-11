import React from 'react';
import './footer.scss';
import logo from '../../assets/lightlogo.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-wrap">
                <div className="footer-content">
                    <img src={logo} alt="Rudra CyberProficient" className="footer-logo" width={100} />
                    <p>Empowering cybersecurity and development with innovation.</p>
                    <ul className="footer-menu">
                        <li><a href="/tandc">Terms&Conditions</a></li>
                        <li><a href="/pandc">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Rudra Cyber Perficient. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer