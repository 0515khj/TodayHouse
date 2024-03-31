import { InterWarp } from "./TipsStyle";
import {Today_Tips} from'../../../../../assets/api/interierdata';

const TodayTips = () => {
    return (
        <InterWarp>
            <div style={{display:"flex"}}>
                <h2>이주의 인기 꿀팁
                    <span> ✨ 여기에 모아봤어요 👀</span>
                </h2>
                {/* todo 링크 걸기 */}
                <p className="more">더보기</p>
            </div>
                <div className="main_con">
                    {Today_Tips.map(item=>
                        <a href="" key={item.id}>
                            <div><img src={item.img} alt="" /></div>
                            <p className="title">
                                {item.text}<br/>
                            </p>    
                            <p className="sub_title"> {item.sub}</p>
                        </a>
                        )
                    }
                </div>
        </InterWarp>
    );
};

export default TodayTips;