import React, { forwardRef, useRef } from 'react'
import logo from '../logo.png'
import { BsSearch } from 'react-icons/bs'
import { AiFillPhone } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import { BiWorld } from 'react-icons/bi'
import { ImCross } from 'react-icons/im'

const Navbar = () => {


  const closeBtnRef = forwardRef()
  const overlayRef = useRef()

  const searchIconRef = forwardRef()

  const closeOverlay = e => {
    const kliklenenElement = e.target

    if (kliklenenElement.classList.contains('cross-icon')) {
      overlayRef.current.classList.remove('active')
    }

  }

  const openOverlay = e => {
    const kliklenenElement = e.target

    if (kliklenenElement.classList.contains('s-icon')) {
      overlayRef.current.classList.add('active')
    }
  }

  return (

    <>

      <div className="overlay" ref={overlayRef}>
        <ImCross className='cross-icon' ref={closeBtnRef} onClick={closeOverlay} />
        <input className='overlay-search-input' type="search" placeholder='Search in IT Brains' />
      </div>

      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <div className="logo">
            <a className="navbar-brand" href="#"><img src={logo} className="logo" alt="" /></a>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="nav">
            <div className="nav-top">
              <span> <AiFillPhone /> +49 233 322 333</span>
              <span> <AiOutlineMail /> your@website.com</span>
              <div >
                <BiWorld />
                <select name="format" id="format"  className='nav-select'>
                  <option >English</option>
                  <option >Azerbaijan</option>
                  <option >Russian</option>
                  <option >Turkish</option>
                </select>
              </div>
              <button className="nav-btn">APPLY NOW</button>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    HOME
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">HOMEPAGE 1</a></li>
                    <li><a className="dropdown-item" href="#">HOMEPAGE 2</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    COURSES
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">COURSES GRIDS</a></li>
                    <li><a className="dropdown-item" href="#">COURSES LIST</a></li>
                    <li><a className="dropdown-item" href="#">SINGLE COURSES</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    EVENTS
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">CLASSIC EVENTS</a></li>
                    <li><a className="dropdown-item" href="#">CALENDAR EVENTS</a></li>
                    <li><a className="dropdown-item" href="#">SINGLE EVENTS</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    PAGES
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">ABOUT US</a></li>
                    <li><a className="dropdown-item" href="#">OUR TEACHERS</a></li>
                    <li><a className="dropdown-item" href="#">SINGLE TEACHER</a></li>
                    <li><a className="dropdown-item" href="#">GALERY 4 COLUMNS</a></li>
                    <li><a className="dropdown-item" href="#">GALERY 3 COLUMNS</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    NEWS
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">CLASSIC NEWS</a></li>
                    <li><a className="dropdown-item" href="#">GRID NEWS</a></li>
                    <li><a className="dropdown-item" href="#">SINGLE POST</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">CONTACT </a>
                </li>
                <div className="search-section">
                  <BsSearch className='s-icon' ref={searchIconRef} onClick={openOverlay} />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar