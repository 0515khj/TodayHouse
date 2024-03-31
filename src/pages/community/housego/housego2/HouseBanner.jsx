import { HouseBannerWrap } from "./housecss2";

import { IoBookmarkOutline } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";
import { PiHeartThin } from "react-icons/pi";


import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

import { AiFillMessage } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import React, { useState } from "react";





const HouseBanner =({scr}) => {

    const [cnt , setCnt]=useState(70)
    const [cnt1 , setCnt1]=useState(168)
    const [cnt2 , setCnt2]=useState(5)
    const [cnt3 , setCnt3]=useState(11)
    const [ heart , setHeart]=useState(false)
    const [ heart1 , setHeart1]=useState(false)
    const [ heart2 , setHeart2]=useState(false)
    const [ heart3 , setHeart3]=useState(false)

    const count =()=>{
        setHeart((iH) => !iH);
        setCnt((iC) => (heart ? iC - 1 : iC + 1));
    };
    const count1 =()=>{
        setHeart1((iH) => !iH);
        setCnt1((iC) => (heart1 ? iC - 1 : iC + 1));
    };
    const count2 =()=>{
        setHeart2((iH) => !iH);
        setCnt2((iC) => (heart2 ? iC - 1 : iC + 1));
    };
    const count3 =()=>{
        setHeart3((iH) => !iH);
        setCnt3((iC) => (heart3 ? iC - 1 : iC + 1));
    };



 
    return (
        <HouseBannerWrap>
            {
               scr && (
                <div className="banner">
                <div className="khj">
                    <p onClick={count}> { heart ? (<p><FaHeart   style={{color:'red'}}/></p>) 
                       : 
                       (<p><PiHeartThin    style={{color:''}} /></p>)
                    } </p>
                        <em >{cnt}</em>
                    <p onClick={count1} >{ heart1 ? (<p><IoBookmark style={{color:'skyblue'}}/></p>) 
                       : 
                       (<p><IoBookmarkOutline  style={{color:''}} /></p>)
                    }</p>
                    <em>{cnt1}</em>
                    <p onClick={count2} style={{color : heart2 ? 'skyblue' : ''}}><AiFillMessage /></p>
                    <em>{cnt2}</em>
                    <p onClick={count3} style={{color : heart3 ? 'skyblue' : ''}}><AiOutlineShareAlt /></p>
                    <em>{cnt3}</em>
                </div>

</div>
)
}
        </HouseBannerWrap>
    );
};

export default HouseBanner;