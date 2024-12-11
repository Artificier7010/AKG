import React, { useEffect, useState } from 'react';
import './homepage.scss';
import { TbCertificate, TbEyeDiscount, TbFileCertificate, TbUsers, TbUserSquare, TbUserStar } from 'react-icons/tb';
import { AiOutlineSchedule } from 'react-icons/ai';
import { LuBrainCircuit } from 'react-icons/lu';
import { GrCertificate, GrResources } from 'react-icons/gr';
import { GiReceiveMoney } from 'react-icons/gi';
import { PiPathBold } from 'react-icons/pi';
import Counter from '../../Components/Counter/Counter';
import ScrollReveal from 'scrollreveal';
import { AttentionSeeker, Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Slide, Zoom } from 'react-awesome-reveal';
import { benefitsData, certificateData, howItWorksData, servicesData } from '../../Constants/dummy';
import arrow from '../../assets/arrow.png';





const Homepage = () => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [triggered, setTriggered] = useState(null);
  const [countData, setCountData] = useState([
    {
      name: 'Our Certification',
      value: 250,
      icon: <TbCertificate color='rgba(255, 255, 255, 0.642)' />
    },
    {
      name: 'Our Partners',
      value: 1000,
      icon: <TbUserSquare color='rgba(255, 255, 255, 0.642)' />
    },
    {
      name: 'Certified Candidates',
      value: 1000,
      icon: <TbUserStar color='rgba(255, 255, 255, 0.642)' />
    },
    {
      name: 'Registerd Users',
      value: 1000,
      icon: <TbUsers color='rgba(255, 255, 255, 0.642)' />
    },
    {
      name: 'Certificates Issued',
      value: 1000,
      icon: <TbFileCertificate color='rgba(255, 255, 255, 0.642)' />
    },
    {
      name: 'Site Visitor',
      value: 1000,
      icon: <TbEyeDiscount color='rgba(255, 255, 255, 0.642)' />
    },
  ])


  // Update mouse position based on movement
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 2 - 1; // Normalize to range [-1, 1]
    const y = (clientY / window.innerHeight) * 2 - 1; // Normalize to range [-1, 1]
    setMousePosition({ x, y });
  };

  const handleReadmore = (ind) => {
    setTriggered(ind);
  }

  const handleCardClick = () => {
    const cardSound = new Audio('/click.mp3'); // Ensure path is correct
    cardSound
      .play()
      .catch((error) => {
        console.error("Audio playback failed:", error);
      });
  };


  return (
    <div className="homepage" onMouseMove={handleMouseMove}>
      <div className="home-wrap">

        <div className="home-header">
          <div className="header-wrap">
            <div className="gradient"></div>
            <div className="details" style={{
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20
                }px)`,
            }}>
              <div className="left-det">
                <div className="stack st1" style={{ '--stacks': 3 }}>
                  <span style={{ '--index': 0 }}>Rudra</span>
                  <span style={{ '--index': 1 }}>Rudra</span>
                  <span style={{ '--index': 2 }}>Rudra</span>
                </div>
                <div className="stack st2" style={{ '--stacks': 3 }}>
                  <span style={{ '--index': 0 }}>Cyber</span>
                  <span style={{ '--index': 1 }}>Cyber</span>
                  <span style={{ '--index': 2 }}>Cyber</span>
                </div>
                <div className="stack st3" style={{ '--stacks': 3 }}>
                  <span style={{ '--index': 0 }}>Perficient</span>
                  <span style={{ '--index': 1 }}>Perficient</span>
                  <span style={{ '--index': 2 }}>Perficient</span>
                </div>

              </div>


            </div>
          </div>
        </div>


        <div className="section-about" id='about'>
          <div className="abt-wrap">
            <div className="decr">
              <h1>Meet Rudra <span className='glitched'>Cyber</span>  Perficient</h1>
              <span>Established in 2022, Rudra Cyber Perficient is an ISO 9001:2015 certified training organization based in Dhamtari, Chhattisgarh, recognized by the Dubai Accreditation Center. As a leader in technical education, we offer 40+ services to bridge the gap between knowledge and application. Our vision is to build a globally competent community by making technology accessible and impactful for all, and our mission is to "Tech the World" by empowering individuals with innovative and comprehensive training. We strive to shape a future where technology empowers every individual to achieve their full potential.</span>
            </div>

            <div className="number-games">
              <div className="numgame-wrap">
                <div className="bganim">
                  <div className="line">
                    <div className="dot"></div>
                  </div>
                  <div className="line">
                    <div className="dot"></div>
                  </div>
                  <div className="line">
                    <div className="dot"></div>
                  </div>
                </div>
                {countData.map((item, index) => {
                  return (
                    <Flip key={index} duration={1000 + (index * 200)} triggerOnce>
                      <div className="glass-wrap" key={index}>
                        <div className="ico">
                          {item.icon}
                        </div>
                        <div className="name">
                          {item.name}
                        </div>
                        <div className="count">
                          <Counter targetNumber={item.value} duration={1000} />
                        </div>
                      </div>
                    </Flip>
                  )

                })}


              </div>
            </div>
          </div>
        </div>


        <div className="section-cetificates">
          <div className="seccert-wrap">

            <div className="heading">
              <h1>Certi<span className='glitched' >fic</span>ations</h1>
              <p>Your Trust, Our Expertise</p>
            </div>

            <div className="certificates-grid" id='certifications'>
              {certificateData.map((item, index) => {
                return (
                  <Slide key={index} triggerOnce>
                    <div className="cert-item" onClick={handleCardClick}  >
                      <h3 style={{ top: triggered == index ? '-100%' : 0, position: triggered == index ? 'absolute' : 'relative', transition: '0.5s ease' }}>{item.title}</h3>
                      <button onClick={() => handleReadmore(index)} >Read</button>

                      <div className="desc" onClick={() => setTriggered(null)} style={{ top: triggered == index ? 0 : '100%' }} >
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </Slide>
                )

              })}
            </div>

          </div>
        </div>


        <div className="section-service" id='services'>
          <div className="secser-wrap">

            <div className="heading">
              <h1>Ser<span className='glitched' >vi</span>ces</h1>
              <p>Our Expertise, Your Advantage</p>
            </div>

            <div className="services-grid">
              {servicesData.map((item, ind) => {
                return (
                  <Zoom key={ind} triggerOnce>
                    <div className="serv-item">
                      <div className="rotator"></div>
                      <div className="overlay">
                        <h3>{item.title}</h3>
                      </div>
                    </div>
                  </Zoom>

                )
              })}

            </div>

          </div>
        </div>


        <div className="section-benefits">
          <div className="secbene-wrap">

            <div className="heading">
              <h1>Unlock<span className='glitched'>  Benefits</span></h1>
              <p>Empowering Your Hacking and Coding Journey</p>
            </div>


            <div className="grid-benefits">
              {benefitsData.map((item, indx) => {
                return (
                  <Slide direction='down' key={indx} triggerOnce>
                    <div className="bene-item">
                      <div className="bene-card">
                        <div className="detail">{item.title}</div>
                        <div className="desc">{item.description}</div>
                      </div>
                    </div>
                  </Slide>
                )
              })}
            </div>


          </div>
        </div>

        <div className="section-banner">
          <div className="banner-wrap">

            <div className="container">
              <div className="step">Learn</div>
              <div className="line"><img src={arrow} alt='arrow' /></div>
              <div className="step">Compete</div>
              <div className="line"><img src={arrow} alt='arrow' /></div>
              <div className="step">Certified</div>
            </div>
          </div>
        </div>

        <div className="section-howtodo">
          <div className="how-wrap">

            <div className="heading">
              <h1>How <span className='glitched'>It</span> Works</h1>
              <p>Streamlining Your Path to Cybersecurity Certification</p>
            </div>


            <div className="how-container">

              <div className="left">

                <div className="descriptor">
                  <h1>{howItWorksData[0].title}</h1>
                  <p>{howItWorksData[0].description}</p>
                </div>
                <div className="descriptor">
                  <h1>{howItWorksData[1].title}</h1>
                  <p>{howItWorksData[1].description}</p>
                </div>
                <div className="descriptor">
                  <h1>{howItWorksData[2].title}</h1>
                  <p>{howItWorksData[2].description}</p>
                </div>



              </div>



              <div className="right">

                <div className="descriptor">
                  <h1>{howItWorksData[3].title}</h1>
                  <p>{howItWorksData[3].description}</p>
                </div>
                <div className="descriptor">
                  <h1>{howItWorksData[4].title}</h1>
                  <p>{howItWorksData[4].description}</p>
                </div>
                <div className="descriptor">
                  <h1>{howItWorksData[5].title}</h1>
                  <p>{howItWorksData[5].description}</p>
                </div>


              </div>

            </div>






          </div>
        </div>

        <div className="footer">
          <div className="footer-wrap">

          </div>
        </div>




      </div>
    </div>

  )
}

export default Homepage