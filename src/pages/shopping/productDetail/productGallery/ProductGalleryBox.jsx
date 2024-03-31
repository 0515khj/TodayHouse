import React from 'react';
import { ProductGalleryBoxStyle } from './ProductGalleryBoxStyle';
import MainGalleryBox from './MainGallery/MainGalleryBox';
import ThumGalleryBox from './ThumGallery/ThumGallerybox';

const ProductGalleryBox = ({galleryData}) => {
    const {gallery} = galleryData
    return (
        <ProductGalleryBoxStyle>
           {<ThumGalleryBox gallery={gallery}></ThumGalleryBox>} 
            <MainGalleryBox galleryData={galleryData}></MainGalleryBox>
        </ProductGalleryBoxStyle>
    );
};

export default ProductGalleryBox;