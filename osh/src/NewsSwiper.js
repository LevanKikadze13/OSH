// Import Swiper React components
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './NewsSwiper.css';

export default () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => {
        console.log(swiper);
        // Assign the navigation buttons to the swiper instance
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
      }}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      <div ref={navigationPrevRef} className="swiper-button-prev"></div>
      <div ref={navigationNextRef} className="swiper-button-next"></div>
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
          <img
            className="slide-image"
            src="https://example.com/slide2.jpg"
            alt="Slide 2"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide">
        <div className="slide-image-container">
          <img
            className="slide-image"
            src="https://example.com/slide3.jpg"
            alt="Slide 3"
          />
        </div>
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
};