import React from 'react'
import Nav from './Home/nav'
import Footer from './Home/Footer'
import { Fade, Slide } from "react-awesome-reveal";
const About = () => {
  return (
    <div className='About-Page'>
        <div className='About-nav'>
            <Nav/>
        </div>
      <div className='About-header'>
        <h1>About Us</h1>
        <p>Vihiga women in business- A stepping stone which lets you realize your potential and achieve optimum growth.</p>
      </div>
      <Slide delay={1} cascade damping={1e-1}>
      <div className='who-we-are'>
        <h1>Who we are?</h1>
        <h3>We are a community based organization that came into existence in 2018 to bring on board all who are willing and ready to work with integrity to improve livelihoods . ..</h3>
        <p>Since then we are playing an important role in promoting women ,minority rights and economic support through business . Our efforts in all sense support the international laws and conventions'</p>
      </div>
      </Slide>
      <Fade delay={1} cascade damping={1e-1}>
      <div className='who-we-do'>
        <div className='who-we-do-description'>
            <h1>What we do?</h1>
            <p>We provide education to women through mentorship, entrepreneurship, leadership,decision making,capacity building and training .we aim to create sensetization and partnership opportunities available by bringing all women that are ready to work and willing to improve their livelihoods through businesses</p>
        </div>
        <div>
            <img src={"./gallery/kitu.jpeg"} alt='kitu' />
        </div>
      </div>
      </Fade>
      <Fade delay={1e1} cascade damping={1e-1}>
      <div className='wishes'>
        <div>
        <img src={"./gallery/images.jpeg"} alt='kitu' />
        </div>
        <div>
        <h1>Message from Directors' Desk</h1>
        <h3>"Within every woman lies the strength to conquer, the courage to soar, and the resilience to thrive. Together, let's unlock our limitless potential and create a world where every dream knows no bounds."</h3>
     <p>Welcome to Vihiga Women in Business, a community dedicated to empowering women in business. Connect, collaborate, and grow with us through networking, events, and resources tailored for your success. Thank you for joining us. Together, we will inspire and uplift each other.</p>  
     <div className='directors'>
     <h4>Best Wishes & Regards</h4>
        <table>
        <tr>
        <th> Doris Anjawa</th>
        <th> Grace Makungu</th>
        <th>Everlyne Kisato</th>
        <th>Margaret Amimo</th>
       </tr>
       <tr>
        <td> Director</td>
        <td> Director</td>
        <td> Director</td>
        <td> Director</td>
       </tr>
        </table>
     </div>
        </div>
      </div>
      </Fade>
      <Fade delay={1e1} cascade damping={1e-1}>
      <div className='VWIB'>
        <div className='VWIB-description'>
            <h1>VWIB Constitution</h1>
            <ul>
                <li>The vihiga women in business constitution, which was approved by the board.</li>
                <li>The constitution is a comprehensive framework that defines the organisation's structure,leadership,objectives, membership,meetings and election of the executive commitee ,open the pdf to read our constitution .</li>
            </ul>
            <button><a href='./pdf/constitution.pdf'>Open PDF</a></button>
        </div>
        <div>
        <img src="./Annotation 2024-05-25 070012.png" alt="FirstRow"/>
        </div>
      </div>
      </Fade>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default About
