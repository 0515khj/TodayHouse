import React from 'react';
import { ProductDetailTextStyle, ReviewsStyle } from './ProductDetailTextStyle';
import { RiStarFill } from "react-icons/ri";
import { RiStarHalfFill } from "react-icons/ri";



const ProductDetailText = ({galleryData}) => {
    const {id,brand,title,mainimg,mainPrice,specialPrice,deliveryToday,freeDelivery,category,reviews,popularity,salePercent,rating} = galleryData
    return (
        <ProductDetailTextStyle>
            <em>{brand}</em>
            <h2>{title}</h2>
            <ReviewsStyle><RiStarFill/><RiStarFill/><RiStarFill/><RiStarFill/><RiStarHalfFill/><span>{reviews}</span></ReviewsStyle>
            <div>{mainPrice}</div>
            <div>
                <div>혜택</div>
                <div>
                    <p>99P 적립 (WELCOME 0.1% 적립)</p>
                    <p>월 16,500원 (6개월) 무이자할부</p>
                </div>
            </div>
            <div>
                <div>혜택</div>
                <div>
                    <p>99P 적립 (WELCOME 0.1% 적립)</p>
                    <p>월 16,500원 (6개월) 무이자할부</p>
                </div>
            </div>
            <div>
                <select>
                    <option></option>
                </select>
            </div>
        </ProductDetailTextStyle>
    );
};

export default ProductDetailText;