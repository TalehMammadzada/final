import React from 'react'

import { AiFillHome } from 'react-icons/ai'
import { AiFillPhone } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
    return (
        <>
            <div className="footer">

                <div className="footer-main">
                    <div className="links-div">
                        <h4>Featured Links</h4>
                        <div className="links">
                            <div className="links-1">
                                <a href="#">Graduation</a>
                                <a href="#">Admissions</a>
                                <a href="#">International</a>
                                <a href="#">FAQs</a>
                            </div>
                            <div className="links-1">
                                <a href="#">Courses</a>
                                <a href="#">About Us</a>
                                <a href="#">Bookstore</a>
                                <a href="#">Alumni</a>
                            </div>
                        </div>

                    </div>

                    <div className="address-div">
                        <h4>University Addres</h4>
                        <div className="address-content">
                            <div className="address-text">
                                <div className="address-icon">
                                    <AiFillHome /></div>
                                <span>1107 Wood Street Saginaw, MI New York 48607</span>
                            </div>
                            <div className="address-text">
                                <div className="address-icon">
                                    <AiFillPhone /></div>
                                <span>+12 (34) 214 280 2000</span>
                            </div>
                            <div className="address-text">
                                <div className="address-icon">
                                    <AiOutlineMail /></div>
                                <span>support@educa.com</span>
                            </div></div>
                    </div>

                    <div className="newsletters-div">
                        <h4>Newsletters</h4>
                        <div className="newsletters-text">
                            <span>Subsrcibe to our newsletter for latest
                                updates about our site for universe.</span>
                            <div className="newsletters-text-input">
                                <input type="text" placeholder="Email Address..." /></div>
                            <div className="newsletters-text-btn">
                                <button>SUBSCRIBE</button></div>
                        </div>

                    </div>
                </div>

                <div className="foot">
                    <p class="copy">All rights reserved &copy; 2022-2023</p>
                    <div className="foot-links">
                        <a href="#">HOME</a>
                        <a href="#">COURSES</a>
                        <a href="#">FUTURE STUDENTS</a>
                        <a href="#">NEWS</a>
                        <a href="#">PAGES</a>
                        <a href="#">CONTACT</a>
                    </div>
                </div>


            </div>



        </>
    )
}

export default Footer