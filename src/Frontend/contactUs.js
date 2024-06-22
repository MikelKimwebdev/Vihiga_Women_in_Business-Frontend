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
            <div style={{width: "550px" }}><iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Mungoma%20plaza+(Mungoma%20plaza)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe></div> 
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
