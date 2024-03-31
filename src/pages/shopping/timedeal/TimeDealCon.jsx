import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { TimeDealStyle } from './TimeDealConStyle';

const TimeDealCon = () => {
    const {getProduct} = useSelector(state => state.Infinite)
    let [timedeal , setTimedeal] = useState(true);
    
    return (
        <TimeDealStyle className='inner'>
            <h2 style={{fontSize:'28px',fontWeight:800}}>오늘의딜</h2>
            <span style={{color:'gray'}}>매일 새로운 특가, 기간 한정 최저가 도전</span>
            <ul>
                {getProduct.map(item=>item.specialPrice && <ProductCard item={item} key={item.id} timedeal={timedeal}/>)}
            </ul>
        </TimeDealStyle>
    );
};

export default TimeDealCon;