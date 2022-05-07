import React from 'react'
import Header from './Header'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Login from './Login'
import RequireAuth from './RequireAuth';
import Register from './pages/Register';
import './Style.css'

function App() {
  return (
   <>
    
   
     <Routes>
          <Route  path="/home" element={<RequireAuth><Header/></RequireAuth>}/>
          <Route   element={<Login><Home /></Login>} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/" element= {<Login/>}/>
          <Route path="/register" element= {<Register/>}/>
      </Routes>
     
    
      
   </>
  )
}

export default App 