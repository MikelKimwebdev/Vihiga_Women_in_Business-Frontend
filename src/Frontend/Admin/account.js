import { useContext } from 'react'
import { AdminContext } from './Context/AdminContext'
import AllAdmins from './AllAdmins';
import { ThreeDots } from 'react-loader-spinner'

const Account = () => {
    const {adminLogs,submitLogs,registerAdmin,adminLogError,adminLogsLoading}=useContext(AdminContext);
  return (
    <div className='accounts-page'>
     <div className='add-account'>
      <div>
        <h2>Add Account</h2>
      </div>
      <div className='add-account-box'>
      <form onSubmit={registerAdmin}>
        <div>
        <label>
            UserName
        </label><br/>
        <input type='text' placeholder='Enter username' onChange={(e)=>submitLogs({...adminLogs,userName:e.target.value})}/>
        </div>
        <div>
        <label>
            Email
        </label><br/>
        <input type='text' placeholder='Enter email' onChange={(e)=>submitLogs({...adminLogs,email:e.target.value})}/>
        </div>
        <div>
        <label>
          New Password
        </label><br/>
        <input type='text' placeholder='create strong password' onChange={(e)=>submitLogs({...adminLogs,password:e.target.value})}/>
        </div>
        <div>
        <label>
            Confirm Password
        </label><br/>
        <input type='text' placeholder='confirm password'  onChange={(e)=>submitLogs({...adminLogs,confirm_password:e.target.value})}/>
        </div>
        <div>
          {adminLogError &&
            <alert variant="danger">
              <p>{adminLogError?.message}</p>
          </alert>}
        </div>
        <div>
            <button type='Submit'>{adminLogsLoading? "creating..." :"Create Account"}</button>
        </div>
      </form>
      </div>
    </div>
    <div>
      <AllAdmins/>
      </div>
      </div>
   
  )
}

export default Account
