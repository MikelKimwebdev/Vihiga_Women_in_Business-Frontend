import React from 'react'
import { useEffect } from 'react'
import Nav from './Home/nav'
import Workshops from './workshops'
import Footer from './Home/Footer'
import { useContext } from 'react';
import { NavContext } from './NavContext';
import { Fade, Slide } from "react-awesome-reveal";
const OurService = () => {
  const{WorkshopRef,MentorshipRef}=useContext(NavContext)
  useEffect(() => {
    // Check session storage for the scroll flag
    if (sessionStorage.getItem("scrollToWorkshop") === "true") {
        const workshopElement = document.querySelector(".workshops");
        workshopElement?.scrollIntoView({ behavior: "smooth" });
        // Remove the flag after scrolling
        sessionStorage.removeItem("scrollToWorkshop");
    }
}, []);

useEffect(()=>{
  if(sessionStorage.getItem("ScrollToMentorship")=== "true"){
    const MentorshipElement=document.querySelector(".mentorship")
    MentorshipElement?.scrollIntoView({behavior: "smooth"})
    sessionStorage.removeItem("ScrollToMentorship")
  }
})
  return (
    <div>
      <div className='servie-nav'>
        <Nav/>
      </div>
      <div className='Service-Top'>
        <div className='Service-descripton'>
            <h1>Services</h1>
            <p>There is no higher religion than the service of humanity and the satisfaction one gets from helping the nation's future rising star. Here are some of the services we provide to bright young minds to be a difference and to make a difference in society by their skills.</p>
        </div>
        <div>
            <img src={"/gallery/gallery4.png"} alt='firstRow'/>
        </div>
      </div>
      <Slide delay={1} cascade damping={1e-1} >
      <div className='mentorship' ref={MentorshipRef}>
        <div>
            <h1>mentorship programs</h1>
            <p>Mentorship programs are the heartbeat of our community, igniting pathways to success for Vihiga's women in business. They cultivate wisdom, inspire dreams, and forge bonds that transcend generations, propelling our collective journey forward while nurturing a culture of collaboration, resilience, and empowerment.</p>
        </div>s
        <div>
            <img src={"/gallery/service-page1.png"} alt='service-page1'/>
        </div>
      </div>

      <div ref={WorkshopRef}  className="workshops">
        <Workshops/>
      </div>
      <div className='sensitization'>
        <div>
            <h1>sensitization</h1>
            <h4>As an organization we aim to:</h4>
            <ul>
                <li>To protect and promote women’s minority rights</li>
                <li>advocate and sensitize women,girls,boys and people with disability on sexual reproductive health Rights and sexual Gender Based Violence</li>
            </ul>
        </div>
        <div>
          <img src={"./gallery/service-page1.png"} alt='sensitization'/>
        </div>
      </div>
      <div className='Service-last'>
        <div>
            <img src={"./gallery/gallery2.png"} alt='gallery2'/>
        </div>
        <div>
            <h1>Important Points</h1>
            <ul>
                <li>The Annual General Meeting AGM shall be held not later than 30th December in each year.</li>
                <li>Ordinary General Meeting held each month to carry out routinely activities of the organisation</li>
                <li>The financial year of the organisation shall be from 1st January to 30th December each year.</li>
                <li>Membership is open to all business and professional women, and organizations who promote women’s advancement in the business world and accept rules of the group.</li>
                <li>To become a member of VIWIB038, it is preferred one must meet all minimum requirements and ready to adhere to VWIB constituion</li>
            </ul>
        </div>

      </div>
      </Slide>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default OurService
