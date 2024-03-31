import React, { useEffect } from 'react';
import ProductCard from '../../../../components/ProductCard/ProductCard';

const BestCon = ({productData}) => {
    return (
        <div>
            <ul>
                {productData.map(item=> <ProductCard item={item} key={item.id}/>)}
            </ul>
        </div>
    );
};

export default BestCon;