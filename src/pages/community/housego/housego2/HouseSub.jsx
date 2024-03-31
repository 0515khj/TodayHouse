import { useEffect, useState } from "react";
import HouseBanner from "./HouseBanner";
import HouseCenter2 from "./HouseCenter2";
import HouseCenter3 from "./HouseCenter3";
import HouseSubhd from "./HouseSubhd";
import HouseCenter from "./Housecenter";
import { HouseSubWrap } from "./housecss2";
import houseList from "../../../../assets/api/houseList";
import HouseComment from "../../comment/HouseComment";


const HouseSub = () => {
    const [data,setData]=useState(houseList);
    const [scr , setScr] = useState(false)
    const [fix , setFix]=useState(data[0])


    useEffect ( ()=>{
        const onscr =() =>{
            const scroll = window.scrollY;
            
            setScr(scroll > 570);
        }
        window.addEventListener('scroll',onscr);
        return()=>{
            window.removeEventListener('scroll',onscr);
        };
    },[]);


    return (
        <>
        <HouseSubWrap>
            <div className="top">
            <img src="./images/toppic1.jpg" alt="" />
            </div>
            <div className="inner">
            <HouseSubhd />
            <HouseBanner scr={scr} /> 
            <HouseCenter fix={fix}/>
            <HouseCenter2/>
            <HouseCenter3/>
            </div>
       
         
        </HouseSubWrap>
        </>
    );
};

export default HouseSub;