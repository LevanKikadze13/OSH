import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';;
import 'swiper/css';

SwiperCore.use([Navigation, Pagination]);

const ResponsiveSwiper = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      className="mySwiper"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default ResponsiveSwiper;