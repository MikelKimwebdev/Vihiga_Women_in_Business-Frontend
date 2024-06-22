import React from 'react'
const partners = () => {
  const JoinUs=()=>{
    window.location.pathname="/contact"
  }
  return (
    <div className='partners'>
      <h1>Our Partners</h1>
      <h4>We are partners with great generous Institutes and so you can be. Become a partner today!</h4>
      {/* <h5>Currently, we have 4 partner institutes :</h5> */}
      <div className='partners-img'>
      <div>
        <img src='./logo/cropped-CSO-Network-Logo-1.png' alt='logo'/>
        <p>Civil Society organisation Network.</p>
    </div>
    <div className="vcg">
        <img src='./logo/undp-logo-blue.svg' alt='logo'/>
        <p>vihiga county government.</p>
    </div>
    <div className="undp">
        <img src='./logo/vc150.png' alt='logo'/>
        <p>United Nations Development Program.</p>
    </div>
    <div className="govt">
        <img src='./logo/seal.webp' alt='logo'/>
        <p>Goverment of Kenya</p>
    </div>
      </div>
    <div className='Join'>
        <div className='join-left'>
        <img src='./gallery/h1.png' alt='join'/>
        </div>
        <div className='join-right'>
            <h2>Become A member</h2>
            <p><i>You can contribute your time, skills and knowledge through joining vihiga women in business. This is an opportunity to create a positive impact in the lives of others. Contact us to join now.</i></p>
        <button onClick={JoinUs}>Join Us</button>
        </div>
    </div>
    </div>
  )
}

export default partners
