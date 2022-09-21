import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";



const Demo = () => {
    return (
        <>
            <div className="demo">
                <div className="demo-header">
                    <h1>Popular Courses</h1>
                    <h6>Twee Vice synth stumptown distillery aesthetic slow carb</h6>
                </div>
                <Swiper className='mySwip'

                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        "@0.75": {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        "@1.00": {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        "@1.50": {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className='mySwiper'
                >

                    <SwiperSlide ><img src="https://puriwp.com/cocotemplates/html/educa/assets/images/course-2.jpg" alt="#" />
                        <div className="swip-div-1">
                            <div className='swip-div'><span>$19.99</span></div></div>
                        <div className="swip-text-div"><h6>ELECTRICAL</h6>
                            <h6>ELECTRIONIC</h6>
                            <h6>ENGINGERING</h6>
                            <span>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img src="https://puriwp.com/cocotemplates/html/educa/assets/images/course-5.jpg" alt="#" />
                        <div className="swip-div-1">
                            <div className='swip-div'><span>$29.99</span></div></div>
                        <div className="swip-text-div"><h6>FASHION BUYING</h6>
                            <h6>AND PRODUCT MANAGEMENT</h6>
                            <span>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img src="https://puriwp.com/cocotemplates/html/educa/assets/images/course-6.jpg" alt="#" />
                        <div className="swip-div-1">
                            <div className='swip-div'><span>$19.99</span></div></div>
                        <div className="swip-text-div"><h6>HOW TO BECOME</h6>
                            <h6>A POWERFUL SPEAKER</h6>
                            <span>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img src="https://puriwp.com/cocotemplates/html/educa/assets/images/course-3.jpg" alt="#" />
                        <div className="swip-div-1">
                            <div className='swip-div-free'><span>FREE</span></div></div>
                        <div className="swip-text-div"><h6>FASHION BUYING</h6>
                            <h6>AND PRODUCT MANAGEMENT</h6>
                            <span>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img src="https://puriwp.com/cocotemplates/html/educa/assets/images/course-9.jpg" alt="#" />
                        <div className="swip-div-1">
                            <div className='swip-div'><span>$19.99</span></div></div>
                        <div className="swip-text-div"><h6>HOW TO BECOME</h6>
                            <h6>A POWERFUL SPEAKER</h6>
                            <span>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img src="https://puriwp.com/cocotemplates/html/educa/assets/images/course-4.jpg" alt="#" />
                        <div className="swip-div-1">
                            <div className='swip-div-free'><span>FREE</span></div></div>
                        <div className="swip-text-div"><h6>FASHION BUYING</h6>
                            <h6>AND PRODUCT MANAGEMENT</h6>
                            <span>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img src="https://puriwp.com/cocotemplates/html/educa/assets/images/course-8.jpg" alt="#" />
                        <div className="swip-div-1">
                            <div className='swip-div'><span>$39.99</span></div></div>
                        <div className="swip-text-div"><h6>HOW TO BECOME</h6>
                            <h6>A POWERFUL SPEAKER</h6>
                            <span>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Demo