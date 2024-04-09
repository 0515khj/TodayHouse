import React from 'react';
import { CategoryConStyle } from './CategoryConStyle';
import { CartSlide } from './swiper/Swiper';
import CatgoryConGalleryType from './CategoryConGalleryType/CatgoryConGalleryType';
import ConAd from './ConAD/ConAd';
import SaleCon from './SaleCon/SaleCon';
import InfiniteBox from './InfiniteScroll/InfiniteBox';

const CategoryCon = () => {
    return (
        <CategoryConStyle>
            <span style={{fontSize:'20px', marginBottom:'10px', display:'block'}}>가구</span>
            <CartSlide/>
            <CatgoryConGalleryType/>
            <ConAd/>
            <SaleCon />
            <InfiniteBox />
        </CategoryConStyle>
    );
};

export default CategoryCon;