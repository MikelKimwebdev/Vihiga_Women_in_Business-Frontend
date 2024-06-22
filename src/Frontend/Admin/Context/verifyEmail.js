import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from './AdminContext'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { baseUrl, postRequest } from '../Service/Fetch'
import { BallTriangle } from 'react-loader-spinner'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CiCircleCheck } from "react-icons/ci";

const VerifyEmail = () => {
    const {admin,updateAdmin}=useContext(AdminContext)
    const[isLoading,setIsLoading]=useState(false)
    const[verifyError,setVerifyError]=useState({})
    const[searchParams,setSearchParams]=useSearchParams();
    const navigate = useNavigate("/")

    const emailToken = searchParams.get("emailToken")

    console.log(admin)
    console.log("emailToken",emailToken)

    useEffect(()=>{
        const verifyEmailFunc=async()=>{
                if(admin?.isVerified){
                    setTimeout(() =>{
                            return navigate("/")
                        },3000)
                }else{
                    if(emailToken){
                        setIsLoading(true);

                        const response = await postRequest(`${baseUrl}/auth/verify_email`,JSON.stringify({emailToken}));
                        setIsLoading(false);
                        console.log("res",response)

                        if(response.error){
                            return setVerifyError(response)
                        }
                        updateAdmin(response)
                    }
                }
        }
        verifyEmailFunc();   
    },[emailToken,admin])
  return (
    <div className='verify-loading'>
      {
        isLoading?(
            <p>
                <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
            </p>
        ):(
            <div>
                {
                    admin?.isVerified?(
                        <div className='Success-verification'>
                            <alert severity="success">
                            <CiCircleCheck /> Email successfully verified,redirecting...
                            </alert>
                        </div>
                    ):(
                        <div className='unsuccesful'>
                            {
                                verifyError.error?(
                                    <alert severity="error">
                                        <AiOutlineCloseCircle /> {verifyError.message}
                                    </alert>
                                ):null
                            }
                        </div>
                    )
                }
            </div>
        )
      }
    </div>
  )
}

export default VerifyEmail
