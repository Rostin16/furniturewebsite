import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard,Autoplay } from 'swiper/modules';


function Slider() {
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                Autoplay={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide> 
                    <div className="testimonial-slider">
                    <div className="item">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 mx-auto">
                                <div className="testimonial-block text-center">
                                    <blockquote className="mb-5">
                                        <p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                                    </blockquote>
                                    <div className="author-info">
                                        <div className="author-pic">
                                            <img src="images/person-1.png" alt="Maria Jones" className="img-fluid" />
                                        </div>
                                        <h3 className="font-weight-bold">Maria Jones</h3>
                                        <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END item */}

                </div>
                </SwiperSlide>
                <SwiperSlide> 
                    <div className="testimonial-slider">
                    <div className="item">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 mx-auto">
                                <div className="testimonial-block text-center">
                                    <blockquote className="mb-5">
                                        <p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                                    </blockquote>
                                    <div className="author-info">
                                        <div className="author-pic">
                                            <img src="images/person-1.png" alt="Maria Jones" className="img-fluid" />
                                        </div>
                                        <h3 className="font-weight-bold">Maria Jones</h3>
                                        <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END item */}

                </div>
                </SwiperSlide>
                <SwiperSlide> 
                    <div className="testimonial-slider">
                    <div className="item">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 mx-auto">
                                <div className="testimonial-block text-center">
                                    <blockquote className="mb-5">
                                        <p>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                                    </blockquote>
                                    <div className="author-info">
                                        <div className="author-pic">
                                            <img src="images/person-1.png" alt="Maria Jones" className="img-fluid" />
                                        </div>
                                        <h3 className="font-weight-bold">Maria Jones</h3>
                                        <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END item */}

                </div>
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Slider