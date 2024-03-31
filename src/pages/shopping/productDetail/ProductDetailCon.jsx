import React, { useEffect, useState } from 'react';
import { ProductDetailConStyle } from './productDetailConStyle';
import ProductGalleryBox from './productGallery/productGalleryBox';
import ProductDetailText from './productDetailText/ProductDetailText';
import products from '../../../assets/api/shoppingProducts'

const ProductDetailCon = () => {
    let [galleryData, setGalleryData] = useState(products[0])

    return (
        <ProductDetailConStyle>
            <div className='inner'>
          <ProductGalleryBox galleryData={galleryData}/> 
          <ProductDetailText galleryData={galleryData}/>
            </div>
        </ProductDetailConStyle>
    );
};

export default ProductDetailCon;