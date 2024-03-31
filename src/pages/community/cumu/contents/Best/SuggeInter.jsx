import { AiFillNotification } from "react-icons/ai";
import { InterWarp } from "./InterStyle";
import {suge} from'../../../../../assets/api/interierdata'

const SuggeInter = () => {
    return (
        <InterWarp>
            <div style={{display:"flex"}}>
                <h2>40평 이상 주목 
                    <span> <AiFillNotification style={{color:'red'}}/> 맞춤공간 활용법</span>
                </h2>
                {/* todo 링크 걸기 */}
                <p className="more">더보기</p>
            </div>
                <div className="main_con">
                    {suge.map(item=>
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

export default SuggeInter;