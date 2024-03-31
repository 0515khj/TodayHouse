import img0 from '/images/AdSlide0.png'
import img1 from '/images/AdSlide1.png'
import img2 from '/images/AdSlide2.png'
import img3 from '/images/AdSlide3.png'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import { CategorySwiper } from './CategorySwiper';

export let CartSlide = () => {
  return (
    <CategorySwiper>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img0} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
      </Swiper>
    </CategorySwiper>
  );
};