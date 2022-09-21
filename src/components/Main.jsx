import React from 'react'
import { GiGraduateCap } from 'react-icons/gi'
import { BiWorld } from 'react-icons/bi'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { AiFillBook } from 'react-icons/ai'

const Main = () => {
    return (

        <div className="main">
            <div className="main-left-side">
                <div className="main-header">
                    <h3>Welcome to Educa</h3>
                    <span className='span-1'>Twee Vice synth stumptown</span>
                    <div>  <span className='span-2'>Twee Vice synth stumptown, distillery aesthetic slow-carb Intelligentsia bitters taxidermy
                        McSweeney's, flexitarian actually iPhone mlkshk brunch.</span></div>
                </div>
                <div className="main-content">
                    <div className="content-1 content">
                        <div className="cap-div main-icon">
                            < GiGraduateCap className='cap-icon' />
                        </div>

                        <span >GRADUATED STEPS</span>
                        <div className="main-span">
                            <span>Photo booth Banksy YOLO mixtape post-ironic they sold out all.</span></div>
                    </div>
                    <div className="content-2 content">
                        <div className="world-div main-icon">
                            < BiWorld className='world-icon' />
                        </div>
                        <span >GLOBAL INTERESTED</span>
                        <div className="main-span">
                            <span>Photo booth Banksy YOLO mixtape post-ironic they sold out all.</span></div>
                    </div>

                </div>
                <div className="main-content-2">
                    <div className="content-3 content">
                        <div className="clock-div main-icon">
                            < AiOutlineClockCircle className='clock-icon' />
                        </div>

                        <span >CIRCULAR CLOCK</span>
                        <div className="main-span">
                            <span>Photo booth Banksy YOLO mixtape post-ironic they sold out all.</span></div>
                    </div>
                    <div className="content-4 content">
                        <div className="book-div main-icon">
                            < AiFillBook className='book-icon' />
                        </div>
                        <span >OPEN BOOK</span>
                        <div className="main-span">
                            <span>Photo booth Banksy YOLO mixtape post-ironic they sold out all.</span></div>
                    </div>
                </div>
            </div>
            <div className="main-right-side">
                <div className="form">
                    <div className='request-information'>
                        <h4>REQUEST INFORMATION</h4>
                        <input type="text" placeholder='Full Name' className='input-1' />
                        <input type="text" placeholder='E-mail address' />
                        <div className="main-select">
                            <select >
                                <option >Campus of Interests</option>
                                <option >Nearby</option>
                                <option >High Classes</option>
                            </select>
                            <select >
                                <option >Program of Interests</option>
                                <option >Social</option>
                                <option >Profits</option>
                            </select>
                        </div>
                        <div className="main-btn-div">
                            <button className='main-btn'>SUBMIT REQUEST</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main