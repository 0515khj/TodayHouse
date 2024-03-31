import React from 'react';
import { BestMainMenuStyle, BestMenuTabStyle } from '../BestMainStyle';

const BestMenuTab = ({best,bestState}) => {
    return (
        <BestMenuTabStyle>
        <BestMainMenuStyle onClick={()=>best('allproduct')} className={bestState === 'allproduct' ? 'on' : ''}>모든 제품</BestMainMenuStyle>
        <BestMainMenuStyle onClick={()=>best('realtime')} className={bestState === 'realtime' ? 'on' : ''}>실시간 베스트</BestMainMenuStyle>
        <BestMainMenuStyle onClick={()=>best('alltime')} className={bestState === 'alltime' ? 'on':''}>역대 베스트</BestMainMenuStyle>
        </BestMenuTabStyle>
    );
};

export default BestMenuTab;