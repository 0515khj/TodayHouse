import img0 from '/images/shophome0.jpeg'
import img1 from '/images/shophome1.jpeg'
import img2 from '/images/shophome2.jpeg'
import img3 from '/images/shophome3.jpeg'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import { ShopHomeSwiper } from './ShopHomeSwiper';

export let ShopHomeSlide = () => {
  return (
    <ShopHomeSwiper>
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
    </ShopHomeSwiper>
  );
};