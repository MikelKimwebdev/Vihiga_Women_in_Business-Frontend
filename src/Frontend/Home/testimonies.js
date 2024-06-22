import React from 'react'
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import { LiaStarSolid } from "react-icons/lia";
const Testimonies = () => {
  return (
    <div className='Testimonies-section'>
    <h1>Testimonies</h1>
    <div className='Testimonies'>
      <div>
        <h2>Fauzia Luhaga</h2>
        <p><ImQuotesLeft/> vihiga women in business has been instrumental in my growth, providing me with the skills and connections needed to succeed in business. <ImQuotesRight/></p>
        <span><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /></span>
      </div>
      <div>
        <h2>Everlyne Kisato</h2>
        <p><ImQuotesLeft/> The workshops and mentorship have been invaluable, and the support from this community is unmatched. I'm grateful to be among Vihiga's empowered women in business. <ImQuotesRight/></p>
        <span><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /></span>
      </div>
      <div>
        <h2>Wilbroda Irungu</h2>
        <p><ImQuotesLeft/> vihiga women in business has sensitised and increased my awareness in knowing minority rights and advocate for women , girls,boys and people with disabilities. <ImQuotesRight/></p>
        <span><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /></span>
      </div>
    </div>
    </div>
  )
}

export default Testimonies;
