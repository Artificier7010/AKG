import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';
import { NavLink, Route, Routes } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Homepage from './Pages/Homepage/Homepage';
import logo from './assets/lightlogo.png';
import About from './Pages/About/About';
import TermsAndConditions from './Components/Terms/Terms';
import PrivacyPolicy from './Components/Privacy/Privacy';

function App() {
  const [showDrawer, setShowDrawer] = useState(false);

  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
    setShowDrawer(false);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <div className="navbar">

        <div className={showDrawer ? "mob-menu-drawer shown" : "mob-menu-drawer"}>

          <div className="drawer-wrap">
            <div className="close-btn">
              <button onClick={() => setShowDrawer(false)}  ><FaTimes /></button>
            </div>
            <ul className="mob-drwaermenu">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending, isTransitioning }) =>
                    [
                      isPending ? "pending" : "",
                      isActive ? "active" : "",
                      isTransitioning ? "transitioning" : "",
                    ].join(" ")
                  }
                >
                  Home
                </NavLink>
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
                <NavLink
                  to="/"
                  className={({ isActive, isPending, isTransitioning }) =>
                    [
                      isPending ? "pending" : "",
                      isActive ? "active" : "",
                      isTransitioning ? "transitioning" : "",
                    ].join(" ")
                  }
                >
                  Contact
                </NavLink>
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
                <NavLink
                  to="/"
                  className={({ isActive, isPending, isTransitioning }) =>
                    [
                      isPending ? "pending" : "",
                      isActive ? "active" : "",
                      isTransitioning ? "transitioning" : "",
                    ].join(" ")
                  }
                >
                  Home
                </NavLink>
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
                <NavLink
                  to="/"
                  className={({ isActive, isPending, isTransitioning }) =>
                    [
                      isPending ? "pending" : "",
                      isActive ? "active" : "",
                      isTransitioning ? "transitioning" : "",
                    ].join(" ")
                  }
                >
                  Contact
                </NavLink>
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
