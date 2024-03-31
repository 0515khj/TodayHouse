import { useState } from 'react';
import { HouseCenterWrap2 } from './housecss2';


const HouseCenter2 = () => {

    const [pop,setPop] = useState({
      title:'',item:'',price:'',showpop:false,
    })

    const popcp = (item , price,title) =>{
        setPop({item,title,price,showpop:true})
    }

    const popdel = ()=>{
        setPop({showpop:false})
    }

    const popgoods = [
        {title:'드엘리사', name: '[단독]아토 테이블 단스탠드 조명', price: '87,500원', img: './images/lamp.jpeg' },
        {title:'한스갤러리', name: '인테리어 오브제 도자기 꽃병', price: '22,900원', img: './images/pottery.jpg' },
        {title:'마이코지', name: '러브쿠션 하트쿠션 일체형솜쿠션', price: '9,000원', img: './images/heart.jpg' },
        {title:'홈바내쓰', name: '화분 팟커버 패브릭 화분커버', price: '11,900원', img: './images/pot.jpg' },
        {title:'더아트', name: '모던 아트 추상화 액자 ', price: '500,000원', img: './images/pic.jpg' },
      ];

    return (
        <HouseCenterWrap2>
                <div className="inner">

                <div className="bigsub">

                  <div className="biginner">
                <img src="./images/housesub3.jpg" alt="" />
                </div>

              </div>

                <div className="smalssub">
          {popgoods.map((popgoods, idx) => (
            <div className="smalsub" key={idx}
              onMouseOver={() => popcp(popgoods.name, popgoods.price , popgoods.title)}
              onMouseOut={popdel}>
              <img src={popgoods.img} alt="" />
            </div>
          ))}
        </div>

        <div className={`smalsub${pop.showpop ? ' show' : ''}`}>
          {
          pop.item && (
            <div className="popup show" >
              <div className="showinner">
              <p><img src={popgoods.find((popgoods) => popgoods.name === pop.item).img} alt="" /></p>
              </div>
              <div className="showinner1">
              <p>{pop.title}</p>
              <p>{pop.item}</p>
              <p>{pop.price}</p>
              </div>
            </div>)
            }
            </div>
      
            </div>
            
        </HouseCenterWrap2>
    );
};

export default HouseCenter2;