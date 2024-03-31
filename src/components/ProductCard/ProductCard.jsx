import React, { useState } from 'react';
import { GiRoundStar } from "react-icons/gi";
import { ProductCardStyle, ProductCardTextStyle } from './ProductCardStyle';
import { DeliveryToday, FlexBox, FreeDelivery, SalePercent, SpecialPrice } from '../../styled/Style';
import Timer from '../Timer/Timer';


const ProductCard = ({item,timedeal}) => {
    const {mainimg,brand,title,salePercent,mainPrice,reviews,rating,deliveryToday,freeDelivery,specialPrice,hh} = item
    const [timeout, setTimeOut] = useState(false)
  
    return (
         <>{
            !timeout && <ProductCardStyle>
            {timedeal && specialPrice && <Timer hh={hh} setTimeOut={setTimeOut} timeout={timeout}/>}
            <img src={mainimg} alt="" />
            <ProductCardTextStyle>
            <span style={{fontSize:'13px',fontWeight:300}}>{brand}</span>
            <h3>{title}</h3>
            <strong><SalePercent>{salePercent}</SalePercent>￦{mainPrice}</strong>
            <em style={{display:'block'}}><GiRoundStar style={{color:'#34c5f0', verticalAlign:'-1.5px'}}/>{rating} 리뷰 {reviews}</em>
            {deliveryToday && <DeliveryToday><img src="/images/deliveryToday.png" alt="" style={{width:'65px'}}/></DeliveryToday>} 
            <FlexBox>
            {freeDelivery && <FreeDelivery style={{marginTop:'5px', marginRight:'5px'}}>무료배송</FreeDelivery>}
            {specialPrice && <SpecialPrice style={{marginTop:'5px'}}>특가</SpecialPrice>}    
            </FlexBox>
            </ProductCardTextStyle>
            </ProductCardStyle>
            }
         </>        
    );
};

export default ProductCard;