import React from 'react';
import { GiRoundStar } from "react-icons/gi";
import { FreeDelivery, SpecialPrice } from '../../../../../styled/Style';

const BestDealItem = ({item}) => {
    const {mainimg,brand,title,salePercent,mainPrice,rating,reviews,freeDelivery,specialPrice} = item
    return (
        <div>
            <div className='item'>
                            <img src={mainimg}/>
                            <p className='brand'>{brand}</p>
                            <p className='title'>{title}</p>
                            <p className='sale'>{salePercent} <span>{mainPrice}</span></p>
                            <div className='user'>
                                <p className='faci'>
                                    <GiRoundStar style={{color:'#34C5F0', verticalAlign:'-1.5px'}}/>
                                    {rating}
                                </p>
                                <p className='review'>
                                    리뷰{reviews}
                                </p>
                            </div>
                            <div className='bool'>{freeDelivery?<FreeDelivery style={{marginRight:'5px'}}>무료배송</FreeDelivery>:null}
                            {specialPrice?<SpecialPrice>특가</SpecialPrice>:null}
                            </div>
            </div>
        </div>
    );
};

export default BestDealItem;