import React, { useContext, useState } from 'react'
import { AdminContext } from './Context/AdminContext'
import LatestNews from '../Home/LatestNews'
import { Link } from 'react-router-dom'
import Footer from '../Home/Footer'
import { ThreeDots,InfinitySpin } from 'react-loader-spinner'

const AdminPage = () => {
    const {handleUpload,ImageInfo,displayImage,displayError,displayLoading,LatestNewsUpload,adminInfo,allAdmins,Logout,addImage,uploadLoading,uploadError,handleNewsUpload,PostNews,LatestNewsLoading,LatestNewsError,displayNews,displayNewsLoading,displayNewsError,deleteImg,deleteNews,displayMembers}=useContext(AdminContext)
    console.log("Info",adminInfo)
    const[clickPost,setClickPost]=useState(false)
    const OpePost=()=>{
        setClickPost(true)
    }
   const ClosePost=()=>{
    setClickPost(false)
   }
   const[deletePost,setDeletePost]=useState(false)
   const DeletePost=()=>{
    setDeletePost(true)
   }
  const CancelPost=()=>{
    setDeletePost(false)
  }
  const[deletedNews,setDeleteNews]=useState(false)
  const DeleteNews=()=>{
   setDeleteNews(true)
  }
 const CancelNews=()=>{
   setDeleteNews(false)
 }
const [accountClicked,setAccountClicked]=useState(false)
const HandleAccount=()=>{
    setAccountClicked(!accountClicked)
}
  return (
    <>
    <div className='Admin-page'>
    <div className='Admin-ul'>
        <img src={"./logo/WhatsApp Image 2024-05-31 at 12.01.52.jpeg"} alt='logo'/>
        <ul>
            <li><a href='/'>Home</a></li>
            <li onClick={HandleAccount}>Accounts</li>
           {accountClicked &&
            <ul>
                <li><Link to='/account'>Create Account</Link></li>
                <li><Link to='/account'>View Accounts</Link></li>
            </ul>}
            <li><Link to="/add_members">Add Members</Link></li>
        </ul>
        <div className='admin-profile'>
            <img src={"./gallery/img13.png"} alt='gallery' />
            {adminInfo &&
            <p>{adminInfo.userName}</p>
            }
            <button onClick={Logout}>Logout</button>
        </div>
    </div>
    <div className='Line'>

    </div>
    <div className='Right-admin'>
       {adminInfo &&
        <h1>Hello {adminInfo.userName}</h1>
        }
        <h2>Welcome Back !</h2>
        <div className='Admin-members'>
            <div className='Admin-members-records'>
           {allAdmins &&
            <div>
                <label>Admins</label>
                <p>{allAdmins.length}</p>
            </div>}
            <div>
                <label>Members</label>
                <p>{displayMembers.length}</p>
            </div>
            </div>
            <div className='gallery-admin'>
                <h2>Gallery</h2>
                <button onClick={OpePost}>Post</button>
                <div className='display-Image-admin'>
                { displayImage?.map((display,index)=>
                (<div className='gallery-admin-flex'>
                <div>
                 <img src={display.VWIBImage.secure_url} alt='gallery'/>
            </div>
            <div>
                <button onClick={(e)=>deleteImg(e,display._id)}>Delete</button>
            </div>
                </div>))}
                </div>
</div>
        </div>
    </div>
    <div className='Admin-LatestNews'>
            <h2>Latest News</h2>
           {displayNews?.map((News,index)=>(
            <div>
                <div>
                <div className='LatestNews-btn'>
                    <button onClick={(e)=>deleteNews(e,News._id)}>Delete</button>
                </div>
                <div><img src={News.NewsImage.secure_url}  alt="latest news" /></div>
                <p>{News.News}</p>
            </div>
            </div>
        ))}
                
            <form onSubmit={PostNews}>
            <div className='Post-News'>
                <textarea placeholder='Enter latest news...' onChange={(e)=>LatestNewsUpload({...LatestNews,News:e.target.value})}/>
                <input type="file" onChange={handleNewsUpload}/>
                <button type="Submit">{LatestNewsLoading?"Processing...":"Post"}</button>
            </div>
            </form>
         </div>
     { clickPost &&
     <div className='Add-image'>
        <h3>Add Image</h3>
        <form onSubmit={addImage}>
        <input type='file' onChange={handleUpload} accept='image/'/>
        <div className='preview'>
           { ImageInfo.VWIBImage?
           <img src={ImageInfo.VWIBImage} alt='preview'/>:
           <p>preview</p>}
        </div>
        <button type="submit">{uploadLoading? <ThreeDots
  visible={true}
  height="20"
  width="30"
  color="#4fa94d"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />:"Post"}</button>
        <button onClick={ClosePost}>Exit</button>
        </form>
      </div>}
    {  deletePost &&
    <div className='confirmation-delete'>
        <p>Are you sure you want to delete this image?</p>
        <button>Delete</button>
        <button onClick={CancelPost}>Cancel</button>
      </div>}
      {  deletedNews &&
    <div className='news-delete'>
        <p>Are you sure you want to delete this News?</p>
        <button>Delete</button>
        <button onClick={CancelNews}>Cancel</button>
      </div>}

    </div>
    <div className='admin-bottom'>

    </div>
        </>
  )
}

export default AdminPage
