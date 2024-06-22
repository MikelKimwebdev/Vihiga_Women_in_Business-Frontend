import React, { useContext,useState } from 'react'
import { AdminContext } from './Context/AdminContext'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { ThreeDots } from 'react-loader-spinner'

const Auth = () => {
  const {Logins,getLogins,LoginAdmin,LoginLoading,LoginError}=useContext(AdminContext);
  const[visible,setVisible]=useState(false)
  const HandleVisibility=()=>{
    setVisible(!visible)
  }
  return (
            <div className='Auth-Box'>
        <h3>*only Admins Allowed</h3>
        <form onSubmit={LoginAdmin}>
        <div className='Sign-In'>
      <h1>Sign In</h1>
        <div>
            <label>Email</label><br/>
            <input type='text' placeholder='Enter Email' onChange={(e)=>getLogins({...Logins,email:e.target.value})}/>
        </div>
        <div>
            <label>Password</label><br/>
            <div className='password-auth'>
            <input type={visible?'text':'password'} placeholder='Enter Password' onChange={(e)=>getLogins({...Logins,Password:e.target.value})}/><p onClick={HandleVisibility}>{visible? <FaRegEye />: <FaRegEyeSlash />}</p>
            </div>

        </div>
        <div>
         { LoginError &&
         <alert variant="danger">
            <p>{LoginError?.message}</p>
          </alert>}
        </div>
        <button type='Submit'>{LoginLoading?<ThreeDots
  visible={true}
  height="20"
  width="40"
  color="#4fa94d"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />:"Sign In"}</button>
      </div>
        </form>
    </div>
  )
}

export default Auth
