import React from 'react'
import { useEffect } from 'react';
import Nav from "./nav";
import HomeAbout from './About';
import FirstRow from '../firstRow';
import HomeService from './HomeService';
import Mission from './mission';
import Conj from './conj';
import Partners from './partners';
import LatestNews from './LatestNews';
import Footer from './Footer';
import Testimonies from './testimonies';
import { useContext } from 'react';
import { NavContext } from '../NavContext';
import { Fade, Slide } from "react-awesome-reveal";
const Homepage = () => {
  const {LatestNewsRef} =useContext(NavContext)
useEffect(()=>{

  if(sessionStorage.getItem("ScrollToLatestNews")=== "true"){
    const LatestNews=document.querySelector(".LatestNews")
    LatestNews?.scrollIntoView({behavior:"smooth"})
    sessionStorage.removeItem("ScrollToLatestNews")
  }
},[])
  return (
    <div className="Home">
      <div className='nav-section'>
        <Nav/>
      </div>
      <div>
        <FirstRow/>
      </div>
      <Fade delay={0.7} cascade damping={1e-1}>
      <div>
        <HomeService/>
      </div>
      <div>
        <HomeAbout/>
      </div>
      <div>
        <Mission/>
      </div>
      <div>
        <Conj/>
      </div>
      <div>
        <Partners/>
      </div>
      <div className='LatestNews' ref={LatestNewsRef}>
        <LatestNews/>
      </div>
      <div>
        <Testimonies/>
      </div>
      </Fade>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Homepage
