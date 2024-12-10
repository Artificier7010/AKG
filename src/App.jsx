import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';
import { NavLink, Route, Routes } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Homepage from './Pages/Homepage/Homepage';
import logo from './assets/lightlogo.png';
import About from './Pages/About/About';

function App() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div className="App">
      <div className="navbar">

        <div className={showDrawer ?  "mob-menu-drawer shown" : "mob-menu-drawer"}>

          <div className="drawer-wrap">
            <div className="close-btn">
              <button onClick={()=>setShowDrawer(false)}  ><FaTimes/></button>
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
                <NavLink
                  to="#about"
                  className={({ isActive, isPending, isTransitioning }) =>
                    [
                      isPending ? "pending" : "",
                      isActive ? "active" : "",
                      isTransitioning ? "transitioning" : "",
                    ].join(" ")
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#services"
                  className={({ isActive, isPending, isTransitioning }) =>
                    [
                      isPending ? "pending" : "",
                      isActive ? "active" : "",
                      isTransitioning ? "transitioning" : "",
                    ].join(" ")
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#certifications"
                  className={({ isActive, isPending, isTransitioning }) =>
                    [
                      isPending ? "pending" : "",
                      isActive ? "active" : "",
                      isTransitioning ? "transitioning" : "",
                    ].join(" ")
                  }
                >
                  Certifications
                </NavLink>
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
                <NavLink
                  to="#about"
                  className={({ isActive, isPending, isTransitioning }) =>
                    [
                      isPending ? "pending" : "",
                      isActive ? "active" : "",
                      isTransitioning ? "transitioning" : "",
                    ].join(" ")
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#services"
                  className={({ isActive, isPending, isTransitioning }) =>
                    [
                      isPending ? "pending" : "",
                      isActive ? "active" : "",
                      isTransitioning ? "transitioning" : "",
                    ].join(" ")
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#certifications"
                  className={({ isActive, isPending, isTransitioning }) =>
                    [
                      isPending ? "pending" : "",
                      isActive ? "active" : "",
                      isTransitioning ? "transitioning" : "",
                    ].join(" ")
                  }
                >
                  Certifications
                </NavLink>
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
      </Routes>
    </div>

  )
}

export default App
