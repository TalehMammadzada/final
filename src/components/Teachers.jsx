import React from 'react'

import { FaFacebookF } from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

const Teachers = () => {
    return (
        <>

            <div className="teachers-div">
                <div className="teachers-text">
                    <h3>Our Teachers</h3>
                    <h6>High Life squid literally scenester fap Helvetica quinoa church-key</h6>
                </div>
                <div className="teachers-boxs">
                    <div className="box">
                        <div className="box-img">
                            <img src="https://itbrains.az/src/img/teachers/ItBrains-751700_f0c3.jpeg" />
                            <div class="image-overlay">
                                <div class="image-tittle">
                                    <FaFacebookF/> 
                                    <AiOutlineTwitter/>
                                    <AiFillInstagram/>
                                    <FaLinkedinIn/>

                                </div>
                            </div>
                        </div>
                        <div className="box-text">
                            <h6>ORXAN MƏMMƏDOV</h6>
                            <h6>IT BRAINS ACADEMY RƏHBƏRİ</h6>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-img">
                            <img src="https://itbrains.az/src/img/teachers/ItBrains-655484_ed6a.jpeg" />
                            <div class="image-overlay">
                                <div class="image-tittle">
                                    <FaFacebookF/> 
                                    <AiOutlineTwitter/>
                                    <AiFillInstagram/>
                                    <FaLinkedinIn/>

                                </div>
                            </div>
                        </div>
                        <div className="box-text">
                            <h6>ƏNVƏR XALİD</h6>
                            <h6>FRONT-END PROQRAMLAŞDIRMA MÜƏLLİMİ</h6>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-img">
                            <img src="https://itbrains.az/src/img/teachers/ItBrains-358051_6392.jpeg" />
                            <div class="image-overlay">
                                <div class="image-tittle">
                                    <FaFacebookF/> 
                                    <AiOutlineTwitter/>
                                    <AiFillInstagram/>
                                    <FaLinkedinIn/>

                                </div>
                            </div>
                        </div>
                        <div className="box-text">
                            <h6>MƏLEYKƏ MƏMMƏDOVA</h6>
                            <h6>İCRAÇI MENECER </h6>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-img">
                            <img src="https://itbrains.az/src/img/teachers/ItBrains-707026_fb88.jpeg" />
                            <div class="image-overlay">
                                <div class="image-tittle">
                                    <FaFacebookF/> 
                                    <AiOutlineTwitter/>
                                    <AiFillInstagram/>
                                    <FaLinkedinIn/>

                                </div>
                            </div>
                        </div>
                        <div className="box-text">
                            <h6>BABƏK KƏRİMLİ</h6>
                            <h6>TEXNİKİ DƏSTƏK \ ŞƏBƏKƏ İNZİBATÇILIĞI ÜZRƏ MÜƏLLİM</h6>
                        </div>
                    </div>
                </div>
                <div className="teachers-footer">
                    <h6>Young people have been 'mis-sold' path to success, business leaders warn.</h6>
                    <button>VIEW COURSES</button>
                </div>

            </div>

        </>
    )
}

export default Teachers