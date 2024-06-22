import React from 'react'
import { AiFillPhone } from "react-icons/ai";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsFillSendFill } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useContext } from 'react';
import { NavContext } from '../NavContext';
const Footer = () => {
  const{ScrollToLatestNews}=useContext(NavContext)
  const OpenAdmin=()=>{
    window.location.pathname="/adminSignIn"
  }
  return (
    <>
    <div className='Footer'>
      <div className='Laga'>
        <img src='/gallery/laga.png' alt='laga'/>
        <p>Vihiga women in business is a community based organization that aims to support women in business have economic support through businesses .</p>
      </div>
      <div className='quickLinks'>
        <h3>Quick Links</h3>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Our service</a></li>
            <li onClick={ScrollToLatestNews}>Latest News</li>
            <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
      <div className='Contact-Us'>
        <ul>
            <li><h3><AiFillPhone /> Phone :</h3><p>+254720109213</p></li>
            <li><h3><BsEnvelopeFill /> Email :</h3><p>Vihigawomen2018@gmail.com</p></li>
        </ul>

      </div>
      <div className='newsletter'>
        <h2>NewsLetter</h2>
        <input type='text' placeholder='send an email...'/><span><BsFillSendFill /></span>
        <h3>Follow Us</h3>
        <ul>
            <li><a href="https://www.facebook.com/profile.php?id=61561149532499&mibextid=ZbWKwL"><FaFacebookSquare /></a></li>
            <li><a href="https://www.instagram.com/vihiga_women_in_business?igsh=MW8waDk2ZXZ1cXZzdA=="><FaInstagramSquare /></a></li>
            <li><a href="https://www.linkedin.com/in/vihiga-women-in-business-a6a455313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a></li>
        </ul>
      </div>
      <div className='SignIn-btn'>
        <button onClick={OpenAdmin}>Sign In</button>
      </div>
      <h4>Copyright © Vihiga women in business. All Rights Reserved</h4>
    </div>
    </>
  )
}

export default Footer
