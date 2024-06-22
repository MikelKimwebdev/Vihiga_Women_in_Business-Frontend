import React, { createContext, useCallback, useEffect, useState } from "react";
import { baseUrl, getRequest, postRequest,deleteRequest } from "../Service/Fetch";
import AllAdmins from "../AllAdmins";
const { io } = require("socket.io-client");

export const AdminContext=createContext()
export const AdminContextProvider=({children})=>{
const[LoginLoading,setLoginLoading]=useState(false);
const[LoginError,setLoginError]=useState(null);
const [ImageLoading,setImageLoading]=useState(false);
const [ImageError,setImageError]=useState(null)
const [LatestNewsLoading,setLatestNewsLoading]=useState(false)
const [LatestNewsError,setLatestNewsError]=useState(null);
const[displayNews,setDisplayNews]=useState([])
const [displayNewsError,setDisplayNewsError]=useState(null)
const[displayNewsLoading,setDisplayNewsLoading]=useState(false)
const[adminLogsLoading,setAdminLogsLoading]=useState(false)
const[adminLogError,setAdminLogError]=useState(null);
const[admin,setAdmin]=useState(null);
const[adminInfo,setAdminInfo]=useState(null)
const [allAdmins,setAllAdmins]=useState(null)
const[uploadError,setUploadError]=useState(null);
const[uploadLoading,setUploadLoading]=useState(false);
const[displayImage,setDisplayImage ]=useState(null);
const[displayError,setDisplayError]=useState(null)
const[displayLoading,setDisplayLoading]=useState(false)
const[deleteImgLoading,setDeleteImgLoading]=useState(false)
const[deleteImgError,setDeleteImgError]=useState(null)
const[deleteNewsLoading,setDeleteNewsLoading]=useState(false)
const[deleteNewsError,setDeleteNewsError]=useState(null)
const [adminStatus, setAdminStatus] = useState([]);
const [members,setMembers]=useState(null)
console.log("members",members)
const [membersLoading,setMembersLoading]=useState(false)
const [membersError,setMembersError]=useState(null)
const [displayMembers,setDisplayMembers]=useState([])
console.log("displayMembers",displayMembers)
const [displayMembersError,setDisplayMembersError]=useState(null);
console.log("displayMembersError",displayMembersError)
const [displayMembersLoading,setDisplayMembersLoading]=useState(false)
// console.log("adminStatus",adminStatus)
const[onlineAdmin,setOnlineAdmin]=useState([])
const[filteredAdmin,setFilteredAdmin]=useState(null)
// const [recentPostedImage,setRecentPostedImage]=useState([])
// const [allRecentImages,setAllRecentImages] = useState(null)
// console.log("allRecentImages",allRecentImages)
// console.log("recentPostedImage",recentPostedImage)
// console.log("filtered",filteredAdmin)
const [socket,setSocket] =useState(null)
// console.log("display",displayImage)
// console.log("all Admins",allAdmins)
// console.log("AdminInfo",adminInfo)
// console.log("onlineAdmin",onlineAdmin)

useEffect(() => {
    const newSocket = io("http://localhost:3001");
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.emit("addAdmin", admin?._id);
      socket.on("getOnlineAdmin", (res) => {
        setOnlineAdmin(res);
      });
      
      return () => {
        socket.off("getOnlineAdmin");
      };
    }
  }, [socket, admin?._id]);
//   useEffect(() => {
//     if (socket && displayImage) {
//       displayImage.forEach(image => {
//         socket.emit('postImage', image);
//       });
  
//       socket.on('getImages', (res) => {
//         setRecentPostedImage(res);
//       });
  
//       return () => {
//         socket.off('getImages');
//       };
//     }
//   }, [displayImage, socket]);

//   useEffect(()=>{
//     if(displayImage && displayImage.length>0){
//         const allRecentImages =displayImage.filter(Image=>
//             recentPostedImage.some(recent=> recent.ImageId === Image._id)
//         )
//         setAllRecentImages(allRecentImages)
//     }
//   },[displayImage])

  useEffect(()=>{
    if(allAdmins && allAdmins.length>0){
        const filtered = allAdmins.filter(admin=>
            onlineAdmin.some(online =>online.adminId === admin._id)
        )
        setFilteredAdmin(filtered)
    }
  },[allAdmins, onlineAdmin])
  useEffect(() => {
    if (allAdmins && onlineAdmin && filteredAdmin) {
      const setStatus = (allAdmin, onlineAdmin, filteredAdmin) => {
        return allAdmin.map(admin => ({
          ...admin,
          isOnline: filteredAdmin.some(filtered => filtered._id === admin._id)
        }));
      };

      const newStatus = setStatus(allAdmins, onlineAdmin, filteredAdmin);
      setAdminStatus(newStatus);
    }
  }, [allAdmins, onlineAdmin, filteredAdmin]);
const [adminLogs,setAdminLogs]=useState({
    userName:"",
    email:"",
    password:"",
    confirm_password:""
})
// console.log(adminLogs)
const [registerMember,setRegisterMember]=useState({
    FirstName:"",
    LastName:"",
    Phone_number:"",
    email:"",
    city:"",
    membership_Type:""
})
console.log("registerMember",registerMember)
const [ImageInfo,setImageInfo]=useState({
    VWIBImage:"",
})
const [LatestNews,setLatestNews]=useState({
    NewsImage:"",
    News:""
})
// console.log("Latest news",LatestNews)
const[Logins,setLogins]=useState({
    email:"",
    Password:"",
})
// console.log("DisplayNews",displayNews)
// console.log("Logins",Logins)
// console.log("Latest",LatestNews)
// console.log("ImageInfo",ImageInfo)
// console.log("admin",admin)
const handleUpload=(e)=>{
    const File=e.target.files[0]
    console.log(File)
    TransformFile(File,ImageInfo)
}

const TransformFile=(File,currentInfo)=>{
    const reader = new FileReader()
    if(File){
        reader.readAsDataURL(File);
        reader.onloadend=()=>{
            const updateInfo ={
                ...currentInfo,VWIBImage:reader.result
            }
            setImageInfo(updateInfo)
        }
    }else{
        const updateInfo={
            ...currentInfo,VWIBImage:""
        }
        setImageInfo(updateInfo)
    }
}

const handleNewsUpload=(e)=>{
    const File=e.target.files[0]
    console.log(File)
    TransformFileType(File,LatestNews)
}

const TransformFileType=(file,currentImages)=>{
    const reader= new FileReader()
    if(file){
        reader.readAsDataURL(file)

        reader.onloadend=()=>{
            const updateImage ={
                ...currentImages,
                NewsImage:reader.result
            }
            setLatestNews(updateImage)
        }
        }else{
            const updateImage={
                ...currentImages,
                NewsImage:""
            }
            setLatestNews(updateImage)
    }
}

const LatestNewsUpload=(info)=>{
    setLatestNews(info)
}

const getLogins=(info)=>{
    setLogins(info)
}
const submitLogs=(info)=>{
    setAdminLogs(info)
}
const updateAdmin = useCallback((response)=>{
    localStorage.setItem("admin",JSON.stringify(response))
    setAdmin(response)
},[])
const getMemberInfo = (info) => {
    setRegisterMember((prevInfo) => ({
        ...prevInfo,
        ...info
    }));
};

const RegisterMembersFunc=useCallback(async(e)=>{
    try{
        e.preventDefault();
        setMembersLoading(true)
        setMembersError(null)
        const response = await postRequest(`${baseUrl}/members/register`,JSON.stringify(registerMember))
        setMembersLoading(false)
        if(response.error){
            setMembersError(response)
        }
        setMembers(response)
    }catch(error){
        console.log(error)
        setMembersError(error)
    }
},[registerMember])
const displayMembersFunc = useCallback(async () => {
    try {
      setDisplayMembersLoading(true);
      setDisplayMembersError(null);
      const response = await getRequest(`${baseUrl}/members`);
      setDisplayMembersLoading(false);
      if (response.error) {
        setDisplayMembersError(response);
      } else {
        setDisplayMembers(response);
      }
    } catch (error) {
      console.log(error);
      setDisplayMembersError(error);
    }
  }, []);

  useEffect(() => {
    displayMembersFunc();
  }, [displayMembersFunc]);

const registerAdmin =useCallback(async(e)=>{
    try{
        e.preventDefault();
        setAdminLogsLoading(true);
        setAdminLogError(null);
        const response=await postRequest(`${baseUrl}/auth/register`,JSON.stringify(adminLogs));
        setAdminLogsLoading(false)
        if(response.error){
            return setAdminLogError(response)
        }
        localStorage.setItem("admin",JSON.stringify(response))
        setAdmin(response)
        alert("we have sent you a link in your email please click to verify your account")
        console.log(admin)
    }catch(error){
        console.log("error occurred...",error)
        setAdminLogError(error)
    }
},[adminLogs,admin])

const addImage=useCallback(async(e)=>{
    try{
        setUploadLoading(true);
        setUploadError(null)
        const response= await postRequest(`${baseUrl}/Image/upload_image`,JSON.stringify(ImageInfo))
        setUploadLoading(false);
        if(response.error){
            setUploadError(response)
        }
        localStorage.setItem("Image",JSON.stringify(response))

    }catch(error){
    console.log("error occurred ...",error)
}
},[ImageInfo])

const deleteImg=useCallback(async(e,ImageId)=>{
    try{
        e.preventDefault();
        setDeleteImgLoading(true)
        setDeleteImgError(null)
         const response = await deleteRequest(`${baseUrl}/Image/images/${ImageId}`);
         console.log("dalete file",response)
         setDeleteImgLoading(false)
         if(response.error){
            setDeleteImgError(response)
         }else{
            alert("Image deleted successfully")
            window.location.pathname="/admin"
         }
    }catch(error){
        console.log("error occurred ...",error)
    }},[])

useEffect(()=>{
    const displayImage=async()=>{
    setDisplayLoading(true)
    setDisplayError(null)
    const response = await getRequest(`${baseUrl}/Image/images`)
    setDisplayLoading(false)
    if(response.error){
        setDisplayError(response)
    }
    setDisplayImage(response)
}
displayImage();
},[displayImage])

const PostNews=useCallback(async(e)=>{
    e.preventDefault();
    setLatestNewsLoading(true);
    setLatestNewsError(null)
    const response = await postRequest(`${baseUrl}/news/update_news`,JSON.stringify(LatestNews))
    console.log(response)
    setLatestNewsLoading(false);
    if(response.error){
        console.log(response)
        setLatestNewsError(response);
    }
    localStorage.setItem("News",JSON.stringify(response))
},[LatestNews])

const deleteNews =useCallback(async(e,newsId)=>{
    try{
        e.preventDefault();
        setDeleteNewsLoading(true)
        setDeleteNewsError(null)
        const response = await deleteRequest(`${baseUrl}/news/news/${newsId}`)
        setDeleteNewsLoading(false)
        if(response.error){
            setDeleteNewsError(response)
        }else{
            alert("News deleted successfully")
            window.location.pathname="/admin"
        }
    
    }catch(error){
            console.log("error occurred ...",error)
        }

},[])

useEffect(()=>{

    const displayNews =async()=>{
        setDisplayNewsLoading(true);
        setDisplayNewsError(null);
        const response = await getRequest(`${baseUrl}/news/get_news`)
        if(response.error){
            setDisplayNewsError(response)
        }
        setDisplayNews(response)
    }
    displayNews()
},[displayNews])

const LoginAdmin=useCallback(async(e)=>{
    try{ 
    e.preventDefault();
    setLoginLoading(true);
    setLoginError(false)
    const response=await postRequest(`${baseUrl}/auth/login`,JSON.stringify(Logins))
    console.log("response",response)
    setLoginLoading(false);
    if(response.error){
        return setLoginError(response)
    }
    localStorage.setItem("Admin",JSON.stringify(response));
    window.location.pathname="/admin"
    setAdmin(response)
}catch(error){
    console.log("error occurred ...",error)
    setLoginError(error)
}
},[Logins])

useEffect(()=>{
    const admin = localStorage.getItem("Admin");
    setAdmin(JSON.parse(admin))
},[])

useEffect(() => {
    const getAdmin = async () => {
      if (admin && admin._id) {
        try {
          const response = await getRequest(`${baseUrl}/auth/admin/${admin._id}`);
          setAdminInfo(response);
        } catch (error) {
          console.error('Error fetching admin data:', error);
        }
      }
    };
    getAdmin();
  }, [Logins, admin]);

  useEffect(()=>{
    const ViewAdmin =async ()=>{
        const response = await getRequest(`${baseUrl}/auth`)
        const verifiedAdmins = response.filter(admin => admin.isVerified);
                setAllAdmins(verifiedAdmins);
        
    }
    ViewAdmin();
  },[])
  const Logout=useCallback(()=>{
    localStorage.removeItem("Admin")
    setAdmin(null)
    window.location.pathname="/"
  },[])
    return(
        <AdminContext.Provider
        value={
            {
                ImageInfo,
                handleUpload,
                LatestNews,
                LatestNewsUpload,
                Logins,
                getLogins,
                adminLogs,
                submitLogs,
                registerAdmin,
                adminLogsLoading,
                adminLogError,
                LoginAdmin,
                LoginLoading,
                LoginError,
                admin,
                updateAdmin,
                adminInfo,
                allAdmins,
                Logout,
                addImage,
                uploadLoading,
                uploadError,//not yet set
                displayImage,
                displayError,
                displayLoading,
                handleNewsUpload,
                PostNews,
                LatestNewsLoading,
                LatestNewsError,
                displayNews,
                displayNewsLoading,
                displayNewsError,
                deleteImg,
                deleteNews,
                filteredAdmin,
                adminStatus,
                getMemberInfo,
                RegisterMembersFunc,
                membersError,
                membersLoading,
                displayMembers
                // allRecentImages
            }
        }>
           {children} 
        </AdminContext.Provider>
    )
}