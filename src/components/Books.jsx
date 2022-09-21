import React from 'react'
import { AiFillPicture } from 'react-icons/ai'
import {BsFillBagDashFill} from 'react-icons/bs'
import {GiCloudRing} from 'react-icons/gi'
import {AiFillMessage} from 'react-icons/ai'


const Books = () => {
    return (
        <>
            <div className="books-div">
                <div className="books-text">
                    <h3>You Can Read Books</h3>
                    <h6>Plaid you probably haven't heard of them fashion axe meditation</h6>
                </div>
                <div className="books-boxs">
                    <div className="box-1">
                        <AiFillPicture />
                        <div className="box-text">
                            <h6>STRUCTURE</h6>
                            <h6>ENTRY REQUIERMENTS</h6>
                        </div>
                    </div>
                    <div className="box-1">
                        <BsFillBagDashFill />
                        <div className="box-text">
                            <h6>EDUCATION</h6>
                            <h6>GRAPHIC INTERIOR</h6>
                        </div>
                    </div>
                    <div className="box-1">
                        <GiCloudRing />
                        <div className="box-text">
                            <h6>PREPARING</h6>
                            <h6>THE COMPASS EXAM </h6>
                        </div>
                    </div>
                    <div className="box-1">
                        <AiFillMessage />
                        <div className="box-text">
                            <h6>TEACHER</h6>
                            <h6>TALKING TO A GROUP</h6>
                        </div>
                    </div>
                </div>
                <div className="book-btn">
                    <button>GO TO THE BOOKS </button>
                </div>
            </div>





        </>
    )
}

export default Books