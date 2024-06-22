import React, { useContext } from 'react'
import { AdminContext } from './Context/AdminContext'

const AllAdmins = () => {
    const {allAdmins,adminStatus} =useContext(AdminContext)
  return (
    <div className='allAdmins'>
      <div>
        <h1>ADMINS</h1>
        <p>Only 5 admins allowed</p>
      </div>
      <div className='allAdmins-table'>
        <table>
            <tr>
                <th> userName</th>
                <th>Email</th>
                <th>Status</th>
            </tr>
            {adminStatus?.map((admin,index)=>(
            <tr key={admin._id}>
                <td>{admin.userName}</td>
                <td>{admin.email}</td>
                <td>{admin.isOnline===true?"online":"offline"}</td>
            </tr>))}
        </table>
      </div>
    </div>
  )
}

export default AllAdmins
