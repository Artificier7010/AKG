import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';
import { NavLink, Route, Routes } from 'react-router-dom';
import { FaBars, FaFacebookF, FaInstagram, FaTimes, FaWhatsapp } from 'react-icons/fa';
import Homepage from './Pages/Homepage/Homepage';
import logo from './assets/lightlogo.png';
import About from './Pages/About/About';
import TermsAndConditions from './Components/Terms/Terms';
import PrivacyPolicy from './Components/Privacy/Privacy';
import { LuLinkedin, LuMail } from 'react-icons/lu';

function App() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const [baseUrl, setBaseUrl] = useState("");


  useEffect(() => {
    const { protocol, host } = window.location;
    setBaseUrl(`${protocol}//${host}`);
  })



  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
    setShowDrawer(false);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShowContacts = () => {
    setShowContacts(true);
    setShowDrawer(false);
    setTimeout(() => {
      setShowContacts((prev) => false);
    }, 10000);
  };

  return (
    <div className="App">

      <div className={showContacts ? "contact-icons show" : "contact-icons"}>
        <div className="icons-wrap">
          <a href="https://www.instagram.com/rudracyberperficient/profilecard/?igsh=NDFhaDI1cjVvM2po"><FaInstagram /></a>
          <span>|</span>
          <a href="https://facebook.com"><FaFacebookF /></a>
          <span>|</span>
          <a href="mailto:rudracyberperficient.inst@gmail.com"><LuMail /></a>
          <span>|</span>
          <a href="https://linkedin.com"><LuLinkedin /></a>
          <span>|</span>
          <a href="https://wa.me/1234567890?text=Hello%2C%20I%20am%20interested%20in%20learning%20about%20your%20courses%20and%20certifications.%20Could%20you%20please%20provide%20more%20details%3F"><FaWhatsapp /></a>
        </div>
      </div>
      <div className="navbar">

        <div className={showDrawer ? "mob-menu-drawer shown" : "mob-menu-drawer"}>

          <div className="drawer-wrap">
            <div className="close-btn">
              <button onClick={() => setShowDrawer(false)}  ><FaTimes /></button>
            </div>
            <ul className="mob-drwaermenu">
              <li>
                <a onClick={() => scrollToSection('top')}>Home</a>
              </li>
              <li>
                <a onClick={() => scrollToSection('about')}>About</a>
              </li>
              <li>
                <a onClick={() => scrollToSection('services')}>Services</a>
              </li>
              <li>
                <a onClick={() => scrollToSection('certifications')}>Certifications</a>
              </li>
              <li>
                <a onClick={handleShowContacts}>Contacts</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="nav-wrap">
          <div className="left">
            <img src={logo} alt="logo" />
          </div>
          <div className="right">
            <ul className="menu">
              <li>
                <a onClick={() => scrollToSection('top')}>Home</a>
              </li>
              <li>
                <a onClick={() => scrollToSection('about')}>About</a>
              </li>
              <li>
                <a onClick={() => scrollToSection('services')}>Services</a>
              </li>
              <li>
                <a onClick={() => scrollToSection('certifications')}>Certifications</a>
              </li>
              <li>
                <a onClick={handleShowContacts}>Contacts</a>
              </li>
            </ul>
            <ul className="mob-menu">
              <li><button onClick={() => setShowDrawer(!showDrawer)} ><FaBars /></button></li>
            </ul>
          </div>
        </div>
      </div>
      <Routes>
        <Route element={<Homepage />} path='/' />
        <Route element={<About />} path='/about' />
        <Route element={<TermsAndConditions />} path='/tandc' />
        <Route element={<PrivacyPolicy />} path='/pandc' />
      </Routes>

    </div>

  )
}

export default App
