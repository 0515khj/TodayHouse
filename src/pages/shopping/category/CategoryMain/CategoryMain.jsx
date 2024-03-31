import React from 'react';
import CategoryCon from '../CategoryCon/CategoryCon';
import CategoryConMenu from '../CategoryConMenu/CategoryConMenu';
import { CategoryMainStyle } from './CategoryMainStyle';
import { useParams } from 'react-router-dom';

const CategoryMain = () => {
    return (
        <CategoryMainStyle>
        <div className='inner'>
            <CategoryCon />
            <CategoryConMenu />
        </div> 
        </CategoryMainStyle> 
    
    );
};

export default CategoryMain;