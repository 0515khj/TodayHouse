import { House3DtopWrap } from "./house3Dcss";
import {  Link } from "react-router-dom";


const House3Dtop = () => {
    return (
        <House3DtopWrap>
            <div className="top">
                <div className="inner">
                    <Link to={'/housesub'}><button >3D 인테리어 하러가기</button></Link>
                    <Link to={'/housesub'}><button>내 프로젝트 공유하기</button></Link>
                    <Link to={'/housesub'}> <button>서비스 알아보기</button></Link>

                </div>
            </div>
        </House3DtopWrap>
    );
};

export default House3Dtop;