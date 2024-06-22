import React, { useContext } from 'react'
import Nav from './Home/nav'
import Footer from './Home/Footer'
import { AdminContext } from './Admin/Context/AdminContext'

const Gallery = () => {
  const {displayImage,displayError,displayLoading} =useContext(AdminContext)
  return (
    <div>
      <div className='gallery-nav'>
        <Nav/>
      </div>
      <div className='gallery-rest'>
        <div className='Gallery-header'>
            <h1>Gallery</h1>
            <p>Have a glimpse at our past endeavours. There are many memories to share but only a few can be captured, the rest you may find in the eyes of beneficiaries.</p>
        </div>
        <div className='gallery-body'>
       { displayImage?.map((display,index)=>
        <div key={index} className='gallery-Image'>
          <img src={display.VWIBImage.secure_url} alt='gallery'/>
        </div>
        )}
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Gallery
