import { useState } from 'react';
import { HouseCenterWrap } from './housecss2';
import { RxLightningBolt } from "react-icons/rx";
import { PiLightningFill } from "react-icons/pi";



const HouseCenter = () => {

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
        {title:'아이엔지홈', name: '임스 플라스틱 체어 싱글 DSR', price: '990,000원', img: './images/chair.jpg'},
        {title:'스코나', name: '아치형 화장대 거울', price: '130,000원', img: './images/mirror.jpeg' },
        {title:'슬립퍼', name: '드레스덴 조야패브릭 침대프레임', price: '299,000원', img: './images/bed.jpg' },
        {title:'파로마', name: '[해외] 프리츠한센 테이블', price: '2,384,000원', img: './images/table2.jpg' },
        {title:'더 아트', name: '모던 아트 추상화 액자', price: '500,000원', img: './images/pic.jpg' },
      ];

    return (
        <HouseCenterWrap>
                <div className="inner">
                <h2><PiLightningFill className='icon' />3초 ! 집들이 미리보기</h2>

                <div className="bigsub">
                  <div className="biginner">
                <img src="./images/housesub2.jpg" alt="" />
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
            <div className="popup show">
              <div className="showinner">
              <p><img src={popgoods.find((popgoods) => popgoods.name === pop.item)?.img} alt="" /></p>
              </div>
              <div className="showinner1"  >
              <p>{pop.title}</p>
              <p>{pop.item}</p>
              <p>{pop.price}</p>
              </div>
            </div>)
            }
            </div>
            </div>
        </HouseCenterWrap>
    );
};

export default HouseCenter;