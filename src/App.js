import Homepage from './Frontend/Home/Homepage';
import './App.css';
import About from './Frontend/About';
import OurService from './Frontend/OurService';
import ContactUs from './Frontend/contactUs';
import Gallery from './Frontend/Gallery';
import Members from './Frontend/Admin/members';
import Auth from './Frontend/Admin/Auth';
import Account from './Frontend/Admin/account';
import AdminPage from './Frontend/Admin/AdminPage';
import { AdminContext } from './Frontend/Admin/Context/AdminContext';
// import Workshops from './Frontend/workshops';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import { useContext } from 'react';
import AllAdmins from './Frontend/Admin/AllAdmins';
import VerifyEmail from './Frontend/Admin/Context/verifyEmail';

function App() {
  const {admin} =useContext(AdminContext)
  return (
    <>
       <div className="App">
        <BrowserRouter>
      <Routes>
        <Route index element={<Homepage/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<ContactUs/>} />
        <Route path="services" element={<OurService/>} />
        <Route path='workshops' element={<OurService/>} />
        <Route path='gallery' element={<Gallery/>} />
        <Route path='adminSignIn' element={<Auth/>}/>
        <Route path='verify_email' element={<VerifyEmail/>}/>
        <Route path="admin" element={admin?<AdminPage />:<Auth/>} />
        <Route path='account' element={admin? <Account/>:<Auth/>} />
        <Route path='add_members' element={admin? <Members/>:<Auth/>} />
        </Routes>
        </BrowserRouter>
    </div>
    </>
  
  );
}

export default App;
