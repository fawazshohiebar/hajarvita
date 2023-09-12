import React from 'react';
import "./Nav.css"
import Logo from "../Images/Logo.png"
import { Link } from 'react-router-dom'


const Navcomp = () => {
  return (
    <div>

 <div className='navbar-container'>
    <div className='logo'><img className='logo-image' src={Logo}  /></div>
    <div className='navbar-content'>
       <Link to="/"> <button className='button-navbar'>  Home </button></Link>
       <Link to="/Employment">  <button className='button-navbar'>Employment</button></Link>
       <Link to="/Customer"><button className='button-navbar'>Customer</button></Link>
       <Link to="/AboutUs"><button className='button-navbar'>About us</button></Link>
       <Link to="/ContactUs"> <button className='button-navbar'>Contact us </button></Link>
       <Link to="/Login"> <button className='button-navbar'>Login </button></Link>

          
   
   
    </div>
 </div>



    </div>
  );
}

export default Navcomp;
