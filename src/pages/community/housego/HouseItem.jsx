import { HouseitemWrap, Pop, Showpop } from "./housecss";
import { Link } from "react-router-dom";
import { FaBookmark } from "react-icons/fa6";
import { useEffect, useState } from "react";




const HouseItem = ({item}) => {
    const {title,sc,good,img,text}=item

    const [book , setBook] = useState(false);
    const [cnt , setCnt] = useState(sc)
    const [showsc , setShowsc] = useState(false)

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

    useEffect(()=>{
        if(showsc){
            setTimeout(()=>{
                setShowsc(false);
            },2000)
        }
    },[]);



    return (
        <HouseitemWrap>
        <ul>
            <li>
                <div>
                    <div className="khj" onClick={bookcp}>
                    <Link to={'/housesub'}> <img src={img} alt={title} /> </Link>
                    { book ? (<p><FaBookmark style={{color:'skyblue'}}/></p>) 
                       : 
                      (<p><FaBookmark style={{color:''}} /></p>)
                    }
                    </div>

                    <Link to={'/housesub'}>
                    <p className='hitext'>{text}</p>
                    <div className="maintop">
                    <p><img src={img} alt="" /></p>
                    <p>{title}</p>
                    </div>
                    <span>스크랩 {cnt} · 조회 {good}</span>
                    </Link>
                </div>
            </li>
        </ul>

        {
        showsc && (<Showpop><Pop>스크랩 했습니다.</Pop></Showpop>)
        }
        
    </HouseitemWrap>
    );
};

export default HouseItem;