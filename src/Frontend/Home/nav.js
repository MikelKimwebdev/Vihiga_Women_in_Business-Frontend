import React, { useEffect, useState, useContext } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { NavContext } from '../NavContext';

const Nav = () => {
  const { ScrollToWorkshops, ScrollToLatestNews, ScrollToMentorship } = useContext(NavContext);
  const [ServiceClicked, setServiceClicked] = useState(false);
  const [ServiceMobileClicked, setServiceMobileClicked] = useState(false);
  const [toggleClicked, setToggleClicked] = useState(false);

  const ToggleMobileService=()=>{
    setServiceMobileClicked(!ServiceMobileClicked)
  }
  const ToggleService = () => {
    setServiceClicked(!ServiceClicked);
  };

  const Toggle = () => {
    setToggleClicked(!toggleClicked);
  };

  const handleClick = (event) => {
    const isOutsideServiceClick = !event.target.closest('.navbar-ul');
    if (isOutsideServiceClick) {
      setServiceClicked(false);
    }
  };

  const handleToggle = (event) => {
    const isOutside = !event.target.closest('.toggle') && !event.target.closest('.navbar-ul-mobile');
    if (isOutside) {
      setToggleClicked(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleClick);
    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    document.body.addEventListener('click', handleToggle);
    return () => {
      document.body.removeEventListener('click', handleToggle);
    };
  }, []);

  return (
    <div className="nav">
      <div className="logo">
        <img src="./logo/WhatsApp Image 2024-05-31 at 12.01.52.jpeg" alt="logo" />
      </div>
      <div className={`toggle ${toggleClicked?"active":""}`} onClick={Toggle}>
      </div>
      <div className="navbar-ul">
        <ul>
          <li><a href="/">Home</a></li>
          <li><Link to="/about">About Us</Link></li>
          <li onClick={ToggleService}><div>
          <div>Our Service</div>
          <div className={`nav-icon ${ServiceClicked ? 'active' : ''}`}><AiOutlineDown /></div>
            </div></li>
          <li onClick={ScrollToLatestNews}>Latest News</li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
        </ul>
      </div>

      <div className="navbar-ul-mobile">
        {toggleClicked && (
          <ul>
            <li><a href="/">Home</a></li>
            <li><Link to="/about">About Us</Link></li>
            <li onClick={ToggleMobileService}>
              <div className="nav-li">
              <div className={`nav-icon ${ServiceMobileClicked ? 'active' : ''}`}><AiOutlineDown /></div>
              <div>Our Service</div>
              </div>
             {ServiceMobileClicked && 
           <div className="nav-dropdown">
              <ul>
            <li onClick={ScrollToMentorship}>Mentorship</li>
            <li onClick={ScrollToWorkshops}>Workshop</li>
          </ul>
           </div>
           }
            </li>
            <li onClick={ScrollToLatestNews}>Latest News</li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        )}
      </div>

      {ServiceClicked && (
        <div className="Our-service-dropdown">
          <ul>
            <li onClick={ScrollToMentorship}>Mentorship</li>
            <li onClick={ScrollToWorkshops}>Workshop</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
