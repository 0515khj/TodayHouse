import {  useState } from "react";
import { HouseSubhdWrap } from "./housecss2";




const HouseSubhd = () => {

    const [cp , setCp] =useState(false)


    const toggle = () =>{
        setCp(!cp)
    }

  

    return (
        <HouseSubhdWrap>
            
            <div className="inner">

            <h2>가구배치와 소품으로 소소하게 바꾸는 홈스타일링의 묘미!</h2>

            <div className=" top2">
                <img src="./images/toppic1.jpg" alt="" />
                <em>민스홈♥ 2주전</em>
                
                <button onClick={toggle} style={{ background: cp ? '#999' : '#64B5F6', color: 'white' }}>
                    {cp ? '팔로잉':'팔로우'}</button>
            </div>
         


            <div className="innerbox">
        
           
            <ul className="box1">
                <li><i className="xi-home-o"></i>아파트</li>
                <li><i className="xi-layout-aside-o"></i>34평</li>
                <li><i className="xi-wrench"></i>홈스타일링</li>
                <li><i className="xi-qq"></i>아기가 있는 집</li>
            </ul>

            <ul className="box2">
                <li><span>공간 </span> 아파트</li>
                <li><span>평수 </span> 34평</li>
                <li><span>작업 </span> 셀프·DIY</li>
                <li><span>분야 </span> 홈스타일링</li>
                <li><span>가족형태 </span> 아기가 있는 집</li>
                <li><span>지역 </span> 인천광역시 구월동</li>
                <li><span>스타일 </span> 모던</li>
                <li><span>세부공사 </span> 중문</li>
                <li><span>예산 </span> 27억</li>
            </ul>
            </div>

            <div className="innerbox2">
                <h3>📍이 집의 핵심 포인트!</h3>
                <ul>
                    <li>✔ 아이용 소파까지 카멜로 맞춰 분위기 있는 거실</li>
                    <li>✔ 블랙앤화이트로 더욱 깔끔한 느낌의 주방</li>
                    <li>✔ 러그와 패브릭 침대 프레임으로 아늑하게 꾸민 침실</li>
                </ul>
            </div>

                <div className="innerbox3">
                    <img src="./images/housesub1.jpg" alt="" />
                    <p className="box3p">안녕하세요! 저는 집과 여행을 좋아하고 공간의 변화가 주는 
                        행복을 느끼며 살아가고있는</p><p className="box3p1"> 평범한 직장인 민스홈🖤입니다~</p>


                    <p className="box3p2">저희 집은 신축 후 첫 입주라서 인테리어를 따로 하지 않았어요! 
                        원래 있던 구조와 디자인 그대로를 활용해서 그에 맞는 가구 등을 
                        배치해 변화를 주며 지내고 있어요. 그래서 인테리어의 한계도 많지만 
                        소소하게 아이템 하나씩 구매하며 행복을 느끼고 있답니다. 
                        ^^ 부족하지만 저의 공간 예쁘게 봐주세요!</p>
                </div>


            </div>
        </HouseSubhdWrap>
    );
};

export default HouseSubhd;