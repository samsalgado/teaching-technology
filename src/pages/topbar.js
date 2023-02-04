import React from 'react'
import Logo from "./pic1.png";
import '../App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import bnb from '../pics/bnb.webp';
import CourseList from '../courselist';
const Topbar = () => {
  return (
 <div>
  <Navbar bg="light" variant="light">
          <Navbar.Brand href="/" >
            
            <h1>Teaching Technology</h1>
          
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/bnb">
              BNB Course
              <img className='coursepic' src={bnb} alt="" />
              </Nav.Link>
            <Nav.Link href="/c++">C++ Course
              <img className='coursepic' src={CourseList.cplusplus} alt="" />

            </Nav.Link>
            <Nav.Link href="/js">NodeJS Course
            
            <img className='coursepic' src={CourseList.node} alt="" />
        
            </Nav.Link>            
            <Nav.Link href="/btc">Bitcoin
               <img className='coursepic' src={CourseList.bitcoin} alt="" />

            </Nav.Link>
            <Nav.Link href="/go">Golang Course
                          <img className='coursepic' src={CourseList.golang} alt="" />

            </Nav.Link>
            <Nav.Link href="/py">Python Course
                          <img className='coursepic' src={CourseList.python} alt="" />

            </Nav.Link>

          </Nav>
                 <div className='contact'> <button className='mail' onClick={() => window.location = 'mailto:samueljuansalgado@gmail.com'}>Contact Me</button></div>

      </Navbar>
        <div><img src={Logo} className="Logo" alt="logo" /> </div>
        </div>
    )
}

export default Topbar
