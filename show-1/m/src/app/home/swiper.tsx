import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Banner from './banner';

export default () => {

  return (
    <Swiper
      // spaceBetween={50}
      direction={"vertical"}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Banner/></SwiperSlide>
    </Swiper>
  );
};
