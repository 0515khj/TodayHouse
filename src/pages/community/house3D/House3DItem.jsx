import { Link } from "react-router-dom";
import { Houseitem3DWrap } from "./house3Dcss";




const House3DItem = ({item}) => {
    const {title,sc,good,img,text,heart}=item

  


    return (
        <Houseitem3DWrap>
        <ul>
            <li>
                <div>
                    <div className="khj">
                    <Link to={'/housesub'}> <img src={img} alt={title} /> </Link>

                    </div>

                    <Link to={'/housesub'}>
                    <p className='hitext'>{text}</p>
                   <div className="toto">
                    <span>좋아요 {heart} · 조회수 {good}</span>
                   </div>
                    </Link>
                </div>
            </li>
        </ul>

       {/*  {
        showsc && (<Showpop><Pop>스크랩 했습니다.</Pop></Showpop>)
        } */}
        
    </Houseitem3DWrap>
    );
};

export default House3DItem;