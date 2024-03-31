import { useState } from "react";
import { HouseCenter3Wrap } from "./housecss2";
import HouseComment from "../../comment/HouseComment";

const HouseCenter3 = () => {

    const [cp , setCp] =useState(false)


    const toggle = () =>{
        setCp(!cp)
    }


    return (
        <HouseCenter3Wrap>
            <div className="inner">
                <div className="typepic">
                    <img src="./images/typepic.jpg" alt="" />
                    <strong>34평 거실 기준 남향이고 거실 양 창으로 채광이 좋은 영구 조망 뷰 집이에요 :- 
                        현관 옆 공간이 서재 겸 멀티룸이고</strong>
                    <p>그 옆으로 아이방이에요. 
                            복도를 따라가면 거실이 있고 왼쪽에 주방이 오른쪽에는 
                            침실이 있는 구조랍니다.</p>
                    <p>확장형 구조이고 거실과 방이 넓게 나와서 매력적으로 느껴졌어요.</p>
                
                    <em>또 수납이 많게 나온 타입이어서 거실과 복도에는 펜트리가 많고, 안방에는</em>
                    <p>드레스룸과 별도로 붙박이장이 있어서 따로 공간을 만들지 않아도 되어 좋았어요!</p>
                </div>

                <div className="nav">
                    <h2>현관</h2>
                    <img src="./images/infodoor1.jpg" alt="" />
                    <p>집에 들어서면 가장 먼저 보이는 곳이 현관이죠! 저는 퇴근하고 지친 몸을 이끌고 집에 들어올 때가 정말 행복한데 현관이</p>
                    <p>화사하게 또 따뜻하게 맞이해 주는 느낌이 좋아서 아치형 중문을 선택하게 되었어요!</p>
                    <p>대림 중문이라는 곳에서 마음에 드는 디자인을 보고 한눈에 반해 설치해서 지금도 너무 만족하며 잘 쓰고 있어요.</p>
                </div>
                <div className="nav1">
                    <img src="./images/infodoor2.jpg" alt=""/>
                    <p>중문을 설치하기 전과 후를 비교했을 때 현관에서 차가운 바람이 들어오는 것도 줄일 수 있고, 밖으로 새어 나가거나</p>
                    <p>안으로 들어오는 소리도 줄일 수 있더라고요! 저희 집은 아이도 함께 지내기 때문에 안전하기까지 해서 중문 시공은 너무</p>
                    <p>잘한 선택이었어요 :)</p>
                    <p>액자를 바꿔가며 두거나 플랜테리어를 통해서 변화를 주고 있어요. 간접 조명을 설치해서 어두운 공간에 한줄기의 빛을</p>
                    <p>주기도 하고요.</p>
                </div>
                <div className="nav2">
                    <img src="./images/infodoor3.jpg" alt=""/>
                    <p>현관 거울에 비친 거실이 빼꼼 보이는 아치형 중문이에요. 아치형이 예뻐서 가끔 포토 존으로 사용하기도 한답니다 :)</p>
                </div>
                
                <div className="ft">
                    
                  <p className="ftp">오늘의집의 모든 콘텐츠는 관련 법에 의해 보호 받고 있습니다.
                    콘텐츠를 무단으로 이용하거나 저자의</p> <p>사생활을 침해하는 경우 법적 책임의
                  대상이 될 수 있습니다.</p>
                </div>
                <div className="ft1">
                <p>3주·좋아요 70·스크랩 168·조회 8,369</p>
                </div>

                <div className=" fttop">
                <img src="./images/toppic1.jpg" alt="" />
                <em>민스홈♥ 2주전</em>
                
                <button onClick={toggle} style={{ background: cp ? '#999' : '#64B5F6', color: 'white' }}>
                    {cp ? '팔로잉':'팔로우'}</button>
            </div>
            <HouseComment/>
                </div>
        </HouseCenter3Wrap>
    );
};

export default HouseCenter3;