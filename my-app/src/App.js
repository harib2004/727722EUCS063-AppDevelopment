import logo from './logo.svg';
import './App.css';
import RegisterForm from './Components/RegisterForm';
import LoginForm from './Components/LoginForm';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

import React , { useState } from 'react'
import Navbar from './Components/navbar';
import HomePage from './Components/HomePage';
import Sidebar from './Components/Sidebar';
import RolesPage from './Components/RolesPage';
import Contact from './Components/Contact';
import ComplexGrid from './Components/cities';
import Faq from './Components/Faq';
import About from './Components/About';
import Ahmedabad from './Components/Cities/Ahmedabad';
import Bangalore from './Components/Cities/Banglore';
import Chennai from './Components/Cities/Chennai';
import Delhi from './Components/Cities/Delhi';
import Mumbai from './Components/Cities/Mumbai';
import Payments from './Components/Payments';
import AdminHome from './Components/Adminhome';
import AdminDash from './Components/AdminDash';


const App = () => {
  
  return(
    

    <BrowserRouter>
      
    
      <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/Login' element={<LoginForm/>}/>
       <Route path='/Register' element={<RegisterForm/>}/>
       <Route path='/Roles' element={<RolesPage/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/city' element={<ComplexGrid/>}></Route>
       <Route path='/payments' element={<Payments/>}></Route>
       <Route path='/faq' element={<Faq/>}></Route>
       <Route path='/ahmedabad' element={<Ahmedabad/>}></Route>
       <Route path='/bangalore' element={<Bangalore/>}></Route>
       <Route path='/chennai' element={<Chennai/>}></Route>
       <Route path='/delhi' element={<Delhi/>}></Route>
       <Route path='/mumbai' element={<Mumbai/>}></Route>
       <Route path='/admin' element={<AdminHome/>}></Route>
       <Route path='/admindash' element={<AdminDash/>}></Route>

       
     </Routes>
     
     
      </BrowserRouter>

    // <div>
    //   <LoginForm/>
    // </div>
    

    

    
    
  )
    
}

export default App;
