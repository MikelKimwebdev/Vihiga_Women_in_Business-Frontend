import React from 'react'
import { BsPersonWorkspace } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { useContext } from 'react';
import { NavContext } from '../NavContext';
const HomeService = () => {
  const{ScrollToWorkshops,ScrollToMentorship}=useContext(NavContext)
  return (
    <div className="HomeService">
      <h1>Our Service</h1>
      <div className="HomeService-top">
        <p>To promote and facilitate socio-economic development of women within vihiga county through empowerement,partnerships, to contribute towards sustainable economic opportunities</p>
      </div>
      <div className="HomeService-bottom">
        <div className="Container-1">
            <span><BsPersonWorkspace /></span>
            <h2>Mentorship program</h2>
            <p>"Mentorship programs are the cornerstone of our organization, bridging experience with ambition while offering guidance, inspire growth, and foster invaluable connections, nurturing Women in business while enriching the entire community with shared knowledge and support."</p>
            <button onClick={ScrollToWorkshops}>View Details</button>
        </div>
        <div className="Container-2">
            <span><FaHandshake /></span>
            <h2>workshops</h2>
            <p>"Workshops are the engine driving Vihiga's women in business forward. They provide essential knowledge, skills, and connections in dynamic spaces that inspire growth and unity. Together, they fuel our journey toward success."</p>
            <button onClick={ScrollToWorkshops}>View Details</button>
        </div>
      </div>
    </div>
  )
}

export default HomeService
