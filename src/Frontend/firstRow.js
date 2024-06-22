import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const firstRow = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 1400, min: 700 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const JoinUs=()=>{
        window.location.pathname="/contact"
      }
      const ViewGallery=()=>{
        window.location.pathname="/gallery"
      }
      const ViewAbout=()=>{
        window.location.pathname="/about"
      }
  return (
    <Carousel responsive={responsive} showDots={true} infinite={true}  autoPlay={true} autoPlaySpeed={2000} transitionDuration={2000} customTransition="all .5">
    <div className="FirstRow" id="FirstRow-1">
        <div className="FirstRow-left">
      <h3>Ready To Elevate Your Business And Connect With Inspiring Women?</h3>
      <p>Unlock your business potential and growth opportunities join vihiga women in business  today</p>
      <button onClick={JoinUs}>Join Us</button>
    </div>
    <div className="FirstRow-Right">
        <img src="./Annotation 2024-05-25 070012.png" alt="FirstRow"/>
    </div>
  </div>
  <div className="FirstRow" id="FirstRow-2">
        <div className="FirstRow-left">
      <h3>Your future! Your decision!</h3>
      <p>"Women in business aren't just making choices; they're forging destinies, shaping futures, and leading the way towards a world of endless possibilities."</p>
      <button onClick={ViewGallery}>View</button>
    </div>
    <div className="FirstRow-Right">
        <img src="./gallery/vil.jpeg" alt="FirstRow"/>
    </div>
  </div>
  <div className="FirstRow" id="FirstRow-3">
        <div className="FirstRow-left">
      <h3>"Curious to learn more about our journey and mission?</h3>
      <p>Dive into our inspiring glimpse into Vihiga Women in Business."</p>
      <button onClick={ViewAbout}>View</button>
    </div>
    <div className="FirstRow-Right">
        <img src="./gallery/service-page3.png" alt="FirstRow"/>
    </div>
  </div>
  </Carousel>
 
  )
}

export default firstRow
