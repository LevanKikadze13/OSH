// Import Swiper React components
import React from 'react';
import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './NewsSwiper.css';

export default () => {


  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      className="mySwiper"
      navigation
      autoplay = {true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay ]}
    >
      
      <SwiperSlide className="slide">
        <div className="slide-image-container">
          <img
            className="slide-image"
            src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg"
            alt="Slide 1"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide">
        <div className="slide-image-container">
          <img className="slide-image" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="Slide 2" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide">
        <div className="slide-image-container">
          <img className="slide-image" src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg" alt="Slide 3" />
        </div>
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
};