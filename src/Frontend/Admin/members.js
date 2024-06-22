import React, { useContext } from 'react'
import { AdminContext } from './Context/AdminContext'

const Members = () => {
    const {getMemberInfo,registerMember,RegisterMembersFunc,membersError,membersLoading,displayMembers}= useContext(AdminContext)
  return (
    <div className="members-page">
 <div className='register-members'>
      <form onSubmit={RegisterMembersFunc}>
     <h2>Register New Member</h2>
     <div>
        <label>FirstName</label><br/>
        <input type='text' placeholder="Enter first name" onChange={(e)=>getMemberInfo({...registerMember,FirstName:e.target.value})}/>
      </div>
      <div>
        <label>LastName</label><br/>
        <input type='text' placeholder="Enter last name" onChange={(e)=>getMemberInfo({...registerMember,LastName:e.target.value})}/>
      </div>
      <div>
        <label>Phone number</label><br/>
        <input type='text' placeholder="Enter phone number" onChange={(e)=>getMemberInfo({...registerMember,Phone_number:e.target.value})}/>
      </div>
      <div>
        <label>Email</label><br/>
        <input type='text' placeholder="Enter email" onChange={(e)=>getMemberInfo({...registerMember,email:e.target.value})}/>
      </div>
      <div>
        <label>City</label><br/>
        <input type='text' placeholder="Enter city" onChange={(e)=>getMemberInfo({...registerMember,city:e.target.value})}/>
      </div>
      <div>
        <label>Membership Type :</label><br/>
        <div className='membership-type'>
          <p><input type='radio' value="partner" onChange={(e)=>getMemberInfo({...registerMember,membership_Type:e.target.value})}/>Partner</p>
          <p><input type='radio' value="member" onChange={(e)=>getMemberInfo({...registerMember,membership_Type:e.target.value})}/>member</p>
        </div>
      </div>
      <div className="member-error">
       {membersError &&
        <alert variant="danger">
            <p>{membersError?.message}</p>
        </alert>}
      </div>
      <div>
        <button type="Submit">Register</button>
      </div>
      </form>
    </div>
      <div className="members-right">
      <div>
        <h2>Vihiga women in Business Community</h2>
      </div>
        <table>
        <tr>
          <th>FirstName</th>
          <th>LastName</th>
          <th>email</th>
          <th>Phone number</th>
          <th>City</th>
          <th>Membership Type</th>
        </tr>
        {displayMembers?.map((member,index)=>(
          <tr key={index}>
            <td>{member.FirstName}</td>
            <td>{member.LastName}</td>
            <td>{member.email}</td>
            <td>{member.Phone_number}</td>
            <td>{member.city}</td>
            <td>{member.membership_Type}</td>
          </tr>
           ))}
        </table>
      </div>
    </div>
  )
}

export default Members
