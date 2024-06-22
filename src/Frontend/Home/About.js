import React from 'react'

const About = () => {
  const ReadMore=()=>{
    window.location.pathname="/about"
  }
  return (
    <div className="Home-about">
        <h1>About Us</h1>
        <div className="HomeAbout">  
      <div>
      <img src="./gallery/vil.jpeg" alt="HomeAbout"/>
      </div>
      <div className="HomeAbout-right">
        <h2>The meaning of life is to find your gift. The purpose of life is to give it away.</h2>
        <p>-Pablo Picasso</p>
        <p>We are a community based organization that came into existence on 15th February 2015 to bring on board all who are willing and ready to work with integrity to improve livelihoods . Since then we are playing an important role in promoting women ,minority rights and economic support through business . Our efforts in all sense support the international laws and conventions' .</p>
        <button onClick={ReadMore}>Read More</button>
      </div>
      </div>
    </div>
  )
}

export default About
