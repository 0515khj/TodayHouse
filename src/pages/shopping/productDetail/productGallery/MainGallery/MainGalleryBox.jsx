import React from 'react';
import { MainGalleryStyle } from '../ProductGalleryBoxStyle';

const MainGalleryBox = ({galleryData}) => {
    const {mainimg} = galleryData

    return (
        <MainGalleryStyle>
            <div>
            <img src={mainimg} alt="" />
            </div>
        </MainGalleryStyle>
    );
};

export default MainGalleryBox;