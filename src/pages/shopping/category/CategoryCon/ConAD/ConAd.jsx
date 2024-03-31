import React from 'react';
import { ConAdStyle, ConAdTitleBox } from './ConAdStyle';
import img0 from '/images/ConAd0.png'
import img1 from '/images/ConAd1.png'
import img2 from '/images/ConAd2.png'
import img3 from '/images/ConAd3.png'
import img4 from '/images/ConAd4.png'
const ConAd = () => {
    return (
        <ConAdStyle>
        <ConAdTitleBox style={{marginTop:'30px'}}><h2>인기브랜드해택</h2></ConAdTitleBox>
            <ul>
                <li><img src={img0}/></li>
                <li><img src={img1}/></li>
                <li><img src={img2}/></li>
                <li><img src={img3}/></li>
                <li><img src={img4}/></li>
            </ul>
        </ConAdStyle>
    );
};

export default ConAd;