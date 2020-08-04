import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade} from 'swiper';
import Banner1 from './banner1';
import Banner2 from './banner2';
import Banner3 from './banner3';
import Banner4 from './banner4';
import Banner5 from './banner5';
import Music from './music';
import Arrow from './arrow';

const banners = [
  Banner1,
  Banner2,
  Banner3,
  Banner4,
  Banner5
];

SwiperCore.use([EffectFade]);

export default () => {

  // const [] = React.useState();

  return (
    <>
      <Swiper
        speed={1000}
        loop
        effect="fade"
        direction={"vertical"}
        slidesPerView={1}
        onSlideChange={(e) => console.log('slide change', e)}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          banners.map((banner, index) => {
            const Banner = banner;
            return <SwiperSlide key={index}><Banner/></SwiperSlide>;
          })
        }
      </Swiper>
      <Arrow/>
      <Music/>
    </>
  );
};
