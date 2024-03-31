import {  HousepicitemWrap, Pop, Showpop } from "./housepiccss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { BsChatSquareTextFill } from "react-icons/bs";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";


import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";








const HouseItem = ({item}) => {
    const {title,sc,good,img,text,content,heart}=item

    const [book , setBook] = useState(false);
    const [book2 , setBook2] = useState(false);

    const [cnt , setCnt] = useState(sc)
    const [cnt2 , setCnt2] = useState(heart)

    const [showsc , setShowsc] = useState(false)

    const [pshow , setPshow]=useState(false);



    const toggle = ()=>{
        setPshow(!pshow)
    }
    const toggle1 = () =>{
        setShowsc(!showsc)
    }

    const bookcp = () =>{
        setBook(!book);
        if(!book){
            setCnt(cnt+1);
            setShowsc(true);
            setTimeout(()=>{
                setShowsc(false);
            },2000)
        }else if(book){
            setCnt(cnt-1);
        }
    }
    const heartcp = () =>{
        setBook2(!book2);
        if(!book2){
            setCnt2(cnt2+1);
          
        }else if(book2){
            setCnt2(cnt2-1);
        }
    }

  
    useEffect(()=>{
        if(showsc){
            setTimeout(()=>{
                setShowsc(false);
            },2000)
        }
    },[]);
 

   



    return (
        <HousepicitemWrap>
        <ul>
            <li>
                <div>

            <div className="maintop">
                    <p>
                        <img src={img} alt="" />
                    </p>
                <div className="mainall">

                      <div className="main2">
                    <p>{title}</p>
                    <p>·</p>
                    <button onClick={toggle} style={{color : pshow ? '#999': 'skyblue'}}>{pshow ? '팔로우':'팔로잉'}</button>
                      </div>

                        <div className="main3">
                        <strong>{text}</strong>
                        </div>

                </div>
                    
            </div>
                    
                    <div className="khj">
                    <Link to={'/housesub'}> <img src={img} alt={title} /> </Link>
                    <p>조회수 : {good}</p>
                    </div>
                <div className="bar">

                    <div className="bar1" onClick={heartcp} >
                    { book2 ? (<p><FaHeart   style={{color:'red'}}/></p>) 
                       : 
                       (<p><FaRegHeart   style={{color:''}} /></p>)
                    }
                    <em>{cnt2}</em>
                    </div>

                    <div className="bar2" onClick={bookcp}>
                    { book ? (<p><IoBookmark style={{color:'skyblue'}}/></p>) 
                       : 
                       (<p><IoBookmarkOutline  style={{color:''}} /></p>)
                    }
                    <em>{cnt}</em>
                    </div>
                    <div className="bar3">
                        <p> <Link to={'/housesub'}> <BsChatSquareTextFill /></Link></p>
                        </div>


                </div>

                    <Link to={'/housesub'}>
                    <p className='hitext'>{content}</p>
                    </Link>
                </div>
            </li>
        </ul>

        {
        showsc && (<Showpop onClick={toggle1}><Pop>{showsc ? "스크랩 했습니다":"스크랩 삭제했습니다"}</Pop></Showpop>)
        }
    </HousepicitemWrap>
    );
};

export default HouseItem;