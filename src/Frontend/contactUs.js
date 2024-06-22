import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Nav from './Home/nav'
import Footer from './Home/Footer';
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsEnvelopeFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { Fade, Slide } from "react-awesome-reveal"
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9g1husp', 'template_nxtdbis', form.current, {
        publicKey: 'Wf0jpgFU3CcoxABen',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div>
      <div className='contact-nav'>
        <Nav/>
      </div>
      <Fade delay={0.7} cascade damping={1e-1}>
      <div className='Contact-page'>
        <form ref={form} onSubmit={sendEmail}>
        <div className='Contact-page-left' value="VWIB" name="from_name">
           <h3>Get In Touch</h3> 
           <div className='Fullnames'>
           <div className='FirstName'>
                <label>FirstName</label><br/>
                <input type='text' placeholder='Enter FirstName' name="first_name" />
            </div>
            <div className='LastName'>
                <label>LastName</label><br/>
                <input type='text' placeholder="Enter LastName" name="last_name"/>
            </div>
           </div>
           <div className='Email'>
                <label>Email</label><br/>
                <input type='text' placeholder='Enter your email' name="email"/>
            </div>
            <div className='Phone'>
                <label>Phone</label><br/>
                <input type='text' placeholder='Enter valid phone number' name="phone_number"/>
            </div>
            <div className='City' >
                <label>City</label><br/>
                <input type='text' placeholder='city/town' name="city"/>
            </div>
            <div>
                <h4>You want to join our organisation as a:</h4><br/>
                <div className='radios'>
                <p><input type='radio' value="member" name="membership_type"/> member</p>
                <p><input type='radio' value="partner" name="membership_type"/> partner</p>
                </div>
            </div>
            <div className='textArea' name="message">
                <h3>Why you want to join our organisation?</h3>
                <textarea name="message"/>
            </div>
            <button type='submit' value="Send">Send Message</button>
        </div>
        </form>
        <div className='Contact-page-right'>
        <div className='contact-details'>
        <h2><p>We'd love to hear from you!</p></h2>
            <div>
                <h2><span><AiFillPhone /> </span>Phone</h2>
                <p>+254 720109213</p>
            </div>
            <div>
                <h2><span>< BsEnvelopeFill/></span> Email</h2>
                <p>Vihigawomen2018@gmail.com</p>
            </div>
            <div>
                <h2><span>< FaMapMarkerAlt/></span> Address</h2>
                <p>Mbale Town, Vihiga County - Kenya ; Address. P. O. Box 344 – 50300.</p>
            </div>
        </div>
            <div className="map">
            <div style={{width: "550px" }}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11284.899572747641!2d34.71441554273428!3d0.07922192533849927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17800f1a283035dd%3A0x8c0e0e10645c7f3a!2sCherry%20House!5e0!3m2!1sen!2ske!4v1719039429604!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div> 
            </div>
          
        </div>
      </div>
      </Fade>
      
      <div className='contact-footer'>
        <Footer/>
      </div>
    </div>
  )
}

export default ContactUs
