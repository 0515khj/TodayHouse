import { CateWarp } from './CategoryStyle';
import { Category } from '../../../../assets/api/categorydata';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FreeMode } from 'swiper/modules';

const CumuCategory = () => {
    return (
        <CateWarp className='inner'>
            <h3 style={{fontWeight:600,fontSize:'20px', paddingLeft:'10px'}}>
                카테고리
            </h3>
            <ul className='list'>
            <Swiper
                slidesPerView={12}
                spaceBetween={36}
                freeMode={true}
                pagination={{
                clickable: true,
                }}
                modules={[FreeMode]}
                className="mySwiper"
            >
                {
                    Category.map(item =>
                        <SwiperSlide key = {item.id}><li key = {item.id}  item={item}>
                        <img src={item.imgurl}/>
                        <p>{item.txt}</p>
                    </li></SwiperSlide>
                    )
                }
            </Swiper>
            </ul>

        </CateWarp>
    );
};



export default CumuCategory;