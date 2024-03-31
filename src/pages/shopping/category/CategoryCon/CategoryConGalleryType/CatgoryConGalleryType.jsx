import React from 'react';
import { GalleryTypeOne } from './CatgoryConGalleryTypeStyle';
import img0 from '/images/GalleryType0.jpg'
import img1 from '/images/GalleryType1.jpg'
import img2 from '/images/GalleryType2.jpg'
import img3 from '/images/GalleryType3.jpg'
import img4 from '/images/GalleryType4.jpg'
import img5 from '/images/GalleryType5.jpg'

const CatgoryConGalleryType = () => {
    return (
        <>
        <h2 style={{fontSize:'25px', fontWeight:'700', marginTop:'30px'}}>공간별 가구찾기</h2>
        <GalleryTypeOne>
            <li><img src={img0} alt="" /></li>
            <li><img src={img1} alt="" /></li>
            <li><img src={img2} alt="" /></li>
            <li><img src={img3} alt="" /></li>
            <li><img src={img4} alt="" /></li>
            <li><img src={img5} alt="" /></li>
        </GalleryTypeOne>
        </>
    );
};

export default CatgoryConGalleryType;