import React from 'react';
import ProductDetailCon from '../productDetail/ProductDetailCon';
import MenuCate from '../../community/cumu/MenuCate/MenuCate';
import InterierTypeA from '../../community/cumu/contents/Interier/InterierTypeA';
import BestDeal from '../../community/cumu/contents/BestDeal/BestDeal';
import TimeDealCon from '../timedeal/TimeDealCon';
import { ShoppingHomeStyle } from './ShoppingHomeStyle';
import { ShopHomeSlide } from './swiper/Swiper';


const ShoppingHome = () => {
    return (
        <>
        <ShopHomeSlide className='shophome'></ShopHomeSlide>
         <ShoppingHomeStyle className='inner'>
            <InterierTypeA></InterierTypeA>
           <MenuCate></MenuCate>
           <BestDeal></BestDeal>
           <TimeDealCon />
        </ShoppingHomeStyle>
        </>
    );
};

export default ShoppingHome;