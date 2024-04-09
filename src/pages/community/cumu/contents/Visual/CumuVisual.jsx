import { VisualWarp } from "./VisualStyle";
import { visual,event } from '../../../../../assets/api/VisualData';
import {  Link  } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/navigation';
import {Navigation } from 'swiper/modules';

const CumuVisual = () => {
    return (
        <VisualWarp className="visual inner">
            <div className="inner">
            <Link to={''} className="bestblog">{visual.map(item=><img src={item.imgurl} key={item.id}/>)}
            <p>
                <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/162530211946766441.JPG?w=850&h=509.79929161747344&c=c" className="profile"/>
                <span>iriskim.cozy</span>
            </p>
            </Link>
            
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {event.map(item=><SwiperSlide key={item.id}><Link to={''}><img src={item.imgurl} className="event"/></Link></SwiperSlide>)}
            </Swiper>
            </div>
        </VisualWarp>
    );
};
// 

export default CumuVisual;