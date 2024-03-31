import React, { useState } from 'react';
import { CategoryConMenuStyle,CategoryConMenuItemStyle } from './CategoryConMenuStyle';
import { IoIosArrowDown } from "react-icons/io";


const CategoryConMenu = () => {
    const [isShow , setIsShow] = useState(false)
    let toggle = () => {
        setIsShow(!isShow)
    }

    return (
        <>
        <CategoryConMenuStyle>
            <h4 className={isShow ? 'on' : ''}>가구</h4>
            <CategoryConMenuItemStyle>
                <dt>가구<IoIosArrowDown className='arrow' onClick={toggle}/></dt>
                <dd className={isShow ? 'on':''}>
                    <div>침대</div>
                    <div>받침대</div>
                    <div>거울</div>
                    <div>의자</div>
                    <div>책상</div>
                </dd>
            </CategoryConMenuItemStyle>
        </CategoryConMenuStyle>
        
        </>
    
    );
};

export default CategoryConMenu;