import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {best} from'../../../../../assets/api/interierdata'
import { TypeAWarp } from './interierTypeAStyle';
import './styles.css';
import { Link } from 'react-router-dom';


const InterierTypeA = () => {
   
    return (
        <TypeAWarp style={{margin:'5px 0'}}>
            <h3 style={{fontWeight:600,fontSize:'20px', paddingLeft:'10px'}}>이런 사진 찾고 있나요?</h3>
            <p style={{fontSize:'15px',paddingLeft:'10px'}}>좋아하실 만한 인테리어 콘텐츠를 추천해드려요</p>
            <Swiper
                slidesPerView={6}
                spaceBetween={90}
                className="mySwiper"
            >
            {best.map(item=>
                <SwiperSlide key={item.id}>
                    
                    <li>
                        <a href="">
                            <img className='main' src={item.img} style={{borderRadius:'10px'}}/>
                        
                        </a>
                        
                        <p style={{position:'relative', top:'-60px'}}>
                            <img src={item.profile} className='Profile' style={{position:'absolute', width:'40px', height:'40px', border:'1px solid #ddd',borderRadius:'20px', left:'10px',top:'-10px'}}/>
                            <p style={{fontWeight:600, color:"#f5f5f5",position:'absolute', top:'-2px',left:'60px'}}>{item.title}</p>
                        </p>
                    </li>
                </SwiperSlide>)}
      </Swiper>

        </TypeAWarp>
    );
};

export default InterierTypeA;


            