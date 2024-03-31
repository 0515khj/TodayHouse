import React from 'react';
import img0 from "/images/SaleAd0.jpg"
import img1 from "/images/SaleAd1.jpg"
import { SaleConImgBoxStyle, SaleConStyle } from './SaleConStyle';

const SaleCon = () => {
    return (
        <SaleConStyle>
            <div style={{marginTop:'30px'}}><h2>단 12일간, 설레이는 연말 BIG SALE</h2></div>
            <SaleConImgBoxStyle>
                <div><img src={img0} alt="" /></div>
                <div><img src={img1} alt="" /></div>
            </SaleConImgBoxStyle>
        </SaleConStyle>
    );
};

export default SaleCon;