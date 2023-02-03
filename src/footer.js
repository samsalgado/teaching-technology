import React from 'react'
import Logo from "./pages/pic1.png";
import './App.css';

const Footer = () => {
  return (
 <div>
        <div><img src={Logo} className="Logo" alt="logo" /> </div>
                   <div><h1 className='header'>Teaching Technology</h1></div>

           <div className='contact'> <button className='mail' onClick={() => window.location = 'mailto:samueljuansalgado@gmail.com'}>Contact Me</button></div>
        </div>
    )
}

export default Footer
