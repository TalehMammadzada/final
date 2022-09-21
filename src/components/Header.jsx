import React from 'react'

const Header = () => {
    return (
        <>
            <div className="carousel-div">
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src="https://puriwp.com/cocotemplates/html/educa/assets/images/slidebg-1.jpg" class="d-block w-100" />
                            <h1>Are you ready to study?</h1>
                            <h2>We have the <button className='btn btn-warning '>SOLUTION</button></h2> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, commodi?</p>
                            <button className='img-btn'>BUY NOW</button>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="https://puriwp.com/cocotemplates/html/educa/assets/images/slidebg-2.jpg" class="d-block w-100" />
                            <h1>Next year more intersting!</h1>
                            <h2>Check next <button className='btn btn-warning '>FEATURES</button></h2> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, commodi?</p>
                            <button className='img-btn'>BUY NOW</button>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </>
    )
}

export default Header